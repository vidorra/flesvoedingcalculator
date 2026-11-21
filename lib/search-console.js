// Google Search Console-import voor flesvoedingcalculator.nl én togwaarde.nl.
// Draait in deze app (gedeelde Postgres, kolom `website`), dagelijks via
// instrumentation.js en op verzoek via /api/admin/search-console.
//
// Nodig in CapRover (alleen deze app):
//   GSC_SERVICE_ACCOUNT_JSON   de JSON-sleutel van een Google-serviceaccount,
//                              als ruwe JSON of base64. Het e-mailadres van dat
//                              account moet als gebruiker op beide properties
//                              in Search Console staan (lezen is genoeg).
//
// Geen googleapis-dependency: het token komt uit een zelf getekende JWT
// (RS256 via node:crypto). De API is gratis; er zijn alleen quota (URL
// Inspection: 2000 per dag per property, wij gebruiken er ~115).

import { createSign } from 'crypto'
import { Pool } from 'pg'
import { mailerConfigured, ownerEmail, sendMail } from './mailer.js'

export const GSC_SITES = [
  { website: 'flesvoedingcalculator', host: 'flesvoedingcalculator.nl' },
  { website: 'togwaarde', host: 'togwaarde.nl' }
]

const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly'
const PAGE_BACKFILL_DAYS = 480 // GSC bewaart ~16 maanden
const QUERY_BACKFILL_DAYS = 90 // per zoekvraag per dag wordt snel groot
const QUERY_KEEP_DAYS = 400
const REFETCH_DAYS = 5 // recente dagen worden door Google nog bijgewerkt
const LOCK_KEY = 74120511 // pg_advisory_lock: nooit twee imports tegelijk

// ---------- credentials en token ----------

function credentials() {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON?.trim()
  if (!raw) return null
  try {
    const json = raw.startsWith('{') ? raw : Buffer.from(raw, 'base64').toString('utf8')
    const c = JSON.parse(json)
    if (!c.client_email || !c.private_key) return null
    return { email: c.client_email, key: c.private_key.replace(/\\n/g, '\n') }
  } catch {
    return null
  }
}

export function gscConfigured() {
  return credentials() !== null
}

export function gscServiceAccountEmail() {
  return credentials()?.email || null
}

let cachedToken = null

async function accessToken() {
  if (cachedToken && cachedToken.exp > Date.now() + 60_000) return cachedToken.token
  const c = credentials()
  if (!c) throw new Error('GSC_SERVICE_ACCOUNT_JSON ontbreekt of is ongeldig')

  const now = Math.floor(Date.now() / 1000)
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url')
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({
    iss: c.email,
    scope: SCOPE,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  })}`
  const signature = createSign('RSA-SHA256').update(unsigned).sign(c.key).toString('base64url')

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${signature}`
    })
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.access_token) {
    throw new Error(`Google-token geweigerd: ${data.error_description || data.error || res.status}`)
  }
  cachedToken = { token: data.access_token, exp: Date.now() + (data.expires_in || 3600) * 1000 }
  return cachedToken.token
}

async function gsc(url, body) {
  const token = await accessToken()
  const res = await fetch(url, {
    method: body ? 'POST' : 'GET',
    headers: { authorization: `Bearer ${token}`, ...(body ? { 'content-type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`GSC ${res.status}: ${data.error?.message || 'onbekende fout'}`)
  return data
}

// ---------- helpers ----------

// Pad zoals de site het gebruikt (trailingSlash: true), zodat GSC-rijen en
// kliks op dezelfde sleutel samenkomen. www/http-varianten vallen samen.
export function normalizePage(u) {
  try {
    let p = new URL(u).pathname
    if (!p.endsWith('/')) p += '/'
    return p
  } catch {
    return null
  }
}

const isoDay = (d) => d.toISOString().slice(0, 10)
const daysAgo = (n) => isoDay(new Date(Date.now() - n * 86_400_000))

async function withClient(fn) {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: false, max: 1 })
  const client = await pool.connect()
  try {
    return await fn(client)
  } finally {
    client.release()
    await pool.end()
  }
}

export async function ensureGscTables(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS gsc_page_daily (
      website text NOT NULL,
      date date NOT NULL,
      page text NOT NULL,
      clicks integer NOT NULL,
      impressions integer NOT NULL,
      position double precision NOT NULL,
      PRIMARY KEY (website, date, page)
    );
    CREATE TABLE IF NOT EXISTS gsc_query_daily (
      website text NOT NULL,
      date date NOT NULL,
      page text NOT NULL,
      query text NOT NULL,
      clicks integer NOT NULL,
      impressions integer NOT NULL,
      position double precision NOT NULL,
      PRIMARY KEY (website, date, page, query)
    );
    CREATE INDEX IF NOT EXISTS idx_gsc_query_daily_date ON gsc_query_daily (website, date);
    CREATE TABLE IF NOT EXISTS gsc_index_status (
      website text NOT NULL,
      url text NOT NULL,
      verdict text,
      coverage_state text,
      indexing_state text,
      page_fetch_state text,
      last_crawl timestamptz,
      google_canonical text,
      user_canonical text,
      checked_at timestamptz NOT NULL DEFAULT now(),
      prev_verdict text,
      verdict_changed_at timestamptz,
      PRIMARY KEY (website, url)
    );
    CREATE TABLE IF NOT EXISTS gsc_import_runs (
      id serial PRIMARY KEY,
      started_at timestamptz NOT NULL DEFAULT now(),
      finished_at timestamptz,
      ok boolean,
      trigger text,
      details jsonb,
      error text
    );
  `)
}

let tablesEnsured = false
export async function ensureGscTablesOnce() {
  if (tablesEnsured || !process.env.DATABASE_URL) return
  await withClient(ensureGscTables)
  tablesEnsured = true
}

// ---------- property ----------

async function resolveProperties() {
  const data = await gsc('https://www.googleapis.com/webmasters/v3/sites')
  const entries = (data.siteEntry || []).filter((e) => e.permissionLevel !== 'siteUnverifiedUser')
  const result = {}
  for (const s of GSC_SITES) {
    const candidates = [`sc-domain:${s.host}`, `https://${s.host}/`, `https://www.${s.host}/`]
    const hit = candidates.map((c) => entries.find((e) => e.siteUrl === c)).find(Boolean)
    result[s.website] = hit ? hit.siteUrl : null
  }
  return result
}

// ---------- zoekprestaties ----------

async function fetchAnalytics(property, startDate, endDate, dimensions) {
  const rows = []
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/searchAnalytics/query`
  for (let startRow = 0; ; startRow += 25000) {
    const data = await gsc(url, { startDate, endDate, dimensions, rowLimit: 25000, startRow, type: 'web' })
    const batch = data.rows || []
    rows.push(...batch)
    if (batch.length < 25000) break
  }
  return rows
}

// Samenvoegen per sleutel (www/http-varianten worden hetzelfde pad), met
// impressie-gewogen positie. Nodig omdat één upsert-batch geen dubbele
// sleutels mag bevatten.
function aggregate(rows, withQuery) {
  const map = new Map()
  for (const r of rows) {
    const [date, url, query] = r.keys
    const page = normalizePage(url)
    if (!page) continue
    const key = withQuery ? `${date}\u0000${page}\u0000${query}` : `${date}\u0000${page}`
    const cur = map.get(key) || { date, page, query, clicks: 0, impressions: 0, posSum: 0 }
    cur.clicks += r.clicks || 0
    cur.impressions += r.impressions || 0
    cur.posSum += (r.position || 0) * (r.impressions || 0)
    map.set(key, cur)
  }
  return [...map.values()].map((v) => ({
    ...v,
    position: v.impressions > 0 ? v.posSum / v.impressions : 0
  }))
}

async function upsertPages(client, website, rows) {
  for (let i = 0; i < rows.length; i += 2000) {
    const b = rows.slice(i, i + 2000)
    await client.query(
      `INSERT INTO gsc_page_daily (website, date, page, clicks, impressions, position)
       SELECT $1, * FROM unnest($2::date[], $3::text[], $4::int[], $5::int[], $6::float8[])
       ON CONFLICT (website, date, page) DO UPDATE SET
         clicks = EXCLUDED.clicks, impressions = EXCLUDED.impressions, position = EXCLUDED.position`,
      [website, b.map((r) => r.date), b.map((r) => r.page), b.map((r) => r.clicks), b.map((r) => r.impressions), b.map((r) => r.position)]
    )
  }
}

async function upsertQueries(client, website, rows) {
  for (let i = 0; i < rows.length; i += 2000) {
    const b = rows.slice(i, i + 2000)
    await client.query(
      `INSERT INTO gsc_query_daily (website, date, page, query, clicks, impressions, position)
       SELECT $1, * FROM unnest($2::date[], $3::text[], $4::text[], $5::int[], $6::int[], $7::float8[])
       ON CONFLICT (website, date, page, query) DO UPDATE SET
         clicks = EXCLUDED.clicks, impressions = EXCLUDED.impressions, position = EXCLUDED.position`,
      [website, b.map((r) => r.date), b.map((r) => r.page), b.map((r) => r.query), b.map((r) => r.clicks), b.map((r) => r.impressions), b.map((r) => r.position)]
    )
  }
}

async function importAnalytics(client, website, property) {
  const end = daysAgo(1)
  const { rows: [last] } = await client.query(
    `SELECT max(date)::text AS d FROM gsc_page_daily WHERE website = $1`, [website])
  const { rows: [lastQ] } = await client.query(
    `SELECT max(date)::text AS d FROM gsc_query_daily WHERE website = $1`, [website])

  // Eerste keer: volle historie. Daarna vanaf (laatste dag - REFETCH_DAYS).
  const from = (d, backfill) => {
    if (!d) return daysAgo(backfill)
    const t = new Date(`${d}T00:00:00Z`).getTime() - REFETCH_DAYS * 86_400_000
    return isoDay(new Date(t))
  }
  const pageStart = from(last?.d, PAGE_BACKFILL_DAYS)
  const queryStart = from(lastQ?.d, QUERY_BACKFILL_DAYS)

  const pages = aggregate(await fetchAnalytics(property, pageStart, end, ['date', 'page']), false)
  await upsertPages(client, website, pages)

  const queries = aggregate(await fetchAnalytics(property, queryStart, end, ['date', 'page', 'query']), true)
  await upsertQueries(client, website, queries)

  await client.query(
    `DELETE FROM gsc_query_daily WHERE website = $1 AND date < current_date - $2::int`,
    [website, QUERY_KEEP_DAYS])

  return { pageRows: pages.length, queryRows: queries.length, pageStart, queryStart, end }
}

// ---------- indexering ----------

async function sitemapUrls(host) {
  const res = await fetch(`https://${host}/sitemap.xml`, { headers: { 'user-agent': 'gsc-index-check' } })
  if (!res.ok) throw new Error(`sitemap ${host}: ${res.status}`)
  const xml = await res.text()
  return [...new Set([...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]))]
}

async function inspect(property, url) {
  const data = await gsc('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    inspectionUrl: url,
    siteUrl: property,
    languageCode: 'nl'
  })
  const r = data.inspectionResult?.indexStatusResult || {}
  return {
    verdict: r.verdict || null,
    coverageState: r.coverageState || null,
    indexingState: r.indexingState || null,
    pageFetchState: r.pageFetchState || null,
    lastCrawl: r.lastCrawlTime || null,
    googleCanonical: r.googleCanonical || null,
    userCanonical: r.userCanonical || null
  }
}

async function importIndexStatus(client, website, host, property) {
  const urls = await sitemapUrls(host)
  const lost = []
  let failed = 0
  // Rustig aan: 4 tegelijk, ruim onder de 600 per minuut.
  for (let i = 0; i < urls.length; i += 4) {
    await Promise.all(urls.slice(i, i + 4).map(async (url) => {
      let s
      try {
        s = await inspect(property, url)
      } catch {
        failed++
        return
      }
      const { rows: [prev] } = await client.query(
        `SELECT verdict FROM gsc_index_status WHERE website = $1 AND url = $2`, [website, url])
      const changed = prev && prev.verdict !== s.verdict
      if (prev?.verdict === 'PASS' && s.verdict !== 'PASS') lost.push({ url, coverageState: s.coverageState })
      await client.query(
        `INSERT INTO gsc_index_status (website, url, verdict, coverage_state, indexing_state, page_fetch_state,
           last_crawl, google_canonical, user_canonical, checked_at, prev_verdict, verdict_changed_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9, now(), $10, $11)
         ON CONFLICT (website, url) DO UPDATE SET
           verdict = EXCLUDED.verdict, coverage_state = EXCLUDED.coverage_state,
           indexing_state = EXCLUDED.indexing_state, page_fetch_state = EXCLUDED.page_fetch_state,
           last_crawl = EXCLUDED.last_crawl, google_canonical = EXCLUDED.google_canonical,
           user_canonical = EXCLUDED.user_canonical, checked_at = now(),
           prev_verdict = CASE WHEN $12 THEN gsc_index_status.verdict ELSE gsc_index_status.prev_verdict END,
           verdict_changed_at = CASE WHEN $12 THEN now() ELSE gsc_index_status.verdict_changed_at END`,
        [website, url, s.verdict, s.coverageState, s.indexingState, s.pageFetchState, s.lastCrawl,
          s.googleCanonical, s.userCanonical, prev ? prev.verdict : null, changed ? new Date() : null, Boolean(changed)]
      )
    }))
  }
  // URL's die niet meer in de sitemap staan horen niet meer in het overzicht.
  await client.query(`DELETE FROM gsc_index_status WHERE website = $1 AND NOT (url = ANY($2::text[]))`, [website, urls])
  return { checked: urls.length - failed, failed, lost }
}

async function mailLostPages(lostBySite) {
  const all = Object.entries(lostBySite).flatMap(([site, list]) => list.map((l) => ({ site, ...l })))
  if (all.length === 0 || !mailerConfigured()) return false
  const lines = all.map((l) => `- ${l.url} (${l.coverageState || 'onbekende status'})`)
  const text = [
    `Google heeft ${all.length === 1 ? 'een pagina' : `${all.length} pagina's`} uit de index gehaald die gisteren nog geïndexeerd was:`,
    '',
    ...lines,
    '',
    'Kijk in Search Console bij URL-inspectie wat er speelt (canonical, noindex, fout bij ophalen).',
    'Overzicht: https://flesvoedingcalculator.nl/admin/stats/'
  ].join('\n')
  const r = await sendMail({ to: ownerEmail(), subject: `Index-alarm: ${all.length} pagina('s) niet meer in Google`, text })
  return r.ok
}

// ---------- de run ----------

export async function runGscImport({ trigger = 'schema', withIndex = true } = {}) {
  if (!process.env.DATABASE_URL) return { ok: false, error: 'DATABASE_URL ontbreekt' }
  if (!gscConfigured()) return { ok: false, error: 'GSC_SERVICE_ACCOUNT_JSON ontbreekt' }

  return withClient(async (client) => {
    await ensureGscTables(client)
    const { rows: [lock] } = await client.query(`SELECT pg_try_advisory_lock($1) AS ok`, [LOCK_KEY])
    if (!lock.ok) return { ok: false, error: 'Er loopt al een import' }

    const { rows: [run] } = await client.query(
      `INSERT INTO gsc_import_runs (trigger) VALUES ($1) RETURNING id`, [trigger])
    const details = {}
    const lostBySite = {}
    const errors = []
    try {
      const properties = await resolveProperties()
      for (const s of GSC_SITES) {
        const property = properties[s.website]
        if (!property) {
          errors.push(`${s.host}: serviceaccount heeft geen toegang tot deze property`)
          continue
        }
        try {
          details[s.website] = { property, ...(await importAnalytics(client, s.website, property)) }
          if (withIndex) {
            const idx = await importIndexStatus(client, s.website, s.host, property)
            details[s.website].index = { checked: idx.checked, failed: idx.failed, lost: idx.lost.length }
            if (idx.lost.length) lostBySite[s.website] = idx.lost
          }
        } catch (e) {
          errors.push(`${s.host}: ${e.message}`)
        }
      }
      details.alarmMailed = await mailLostPages(lostBySite)
      const ok = errors.length === 0
      await client.query(
        `UPDATE gsc_import_runs SET finished_at = now(), ok = $2, details = $3, error = $4 WHERE id = $1`,
        [run.id, ok, details, errors.join('\n') || null])
      return { ok, details, errors }
    } catch (e) {
      await client.query(
        `UPDATE gsc_import_runs SET finished_at = now(), ok = false, details = $2, error = $3 WHERE id = $1`,
        [run.id, details, e.message])
      return { ok: false, error: e.message }
    } finally {
      await client.query(`SELECT pg_advisory_unlock($1)`, [LOCK_KEY])
    }
  })
}

// Dagelijkse import: draait als de laatste geslaagde run >20 uur oud is.
// Wordt elk uur aangeroepen door instrumentation.js.
export async function maybeRunDailyGscImport() {
  if (!process.env.DATABASE_URL || !gscConfigured()) return
  const due = await withClient(async (client) => {
    await ensureGscTables(client)
    const { rows: [r] } = await client.query(`
      SELECT
        (SELECT max(finished_at) FROM gsc_import_runs WHERE ok) AS last_ok,
        (SELECT max(started_at) FROM gsc_import_runs) AS last_try`)
    const lastOk = r.last_ok ? new Date(r.last_ok).getTime() : 0
    const lastTry = r.last_try ? new Date(r.last_try).getTime() : 0
    // Na een mislukte poging niet elk uur opnieuw Google bestoken: 6 uur wachten.
    return Date.now() - lastOk > 20 * 3_600_000 && Date.now() - lastTry > 6 * 3_600_000
  })
  if (due) {
    const r = await runGscImport({ trigger: 'schema' })
    if (!r.ok) console.error('GSC-import mislukt:', r.error || r.errors)
  }
}
