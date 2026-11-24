// Affiliate-verkopen: bol Affiliate Reporting API (dagelijkse import) en
// Amazon-CSV's (upload in de admin). Draait in deze app; beide sites delen de
// database, dus één import vult flesvoedingcalculator én togwaarde.
// Plan en achtergrond: docs/affiliate-verkopen-plan.md
//
// Nodig in CapRover (alleen deze app):
//   BOL_REPORTING_CLIENT_ID / BOL_REPORTING_CLIENT_SECRET
//       sleutel "Reporting API" uit het bol-partnerprogramma (Account, Open API).
//       Los van BOL_API_CLIENT_ID/SECRET: dat is de "Marketing Catalog API"
//       (lib/bol-api.js) en die mag de rapporten niet ophalen (403).
//
// Site per verkoop, in deze volgorde:
//   1. subId op de klik (tg_... = togwaarde, de rest = flesvoedingcalculator)
//   2. product gekoppeld aan een snippet: de website van die snippet
//   3. soort product: slaapzakken en kleding = togwaarde, overig = flesvoeding
//   4. anders onbekend (null)

import { Pool } from 'pg'
import { parseSubId } from './affiliate-subid.js'

const BOL_TOKEN_URL = 'https://login.bol.com/token?grant_type=client_credentials'
const BOL_REPORTS = 'https://api.bol.com/marketing/affiliate/reports/v2'
const LOCK_KEY = 74120512 // pg_advisory_lock, ander nummer dan de GSC-import
const BACKFILL_DAYS = 180 // eerste run
const REFETCH_DAYS = 60 // daarna: status gaat van Open naar Geaccepteerd
const CHUNK_DAYS = 30

// ---------- algemeen ----------

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

export async function ensureAffiliateTables(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS affiliate_orders (
      network text NOT NULL,
      order_item_id text NOT NULL,
      order_id text,
      order_date date NOT NULL,
      order_datetime timestamptz,
      product_id text,
      product_title text,
      quantity integer,
      price_incl_vat numeric(12,2),
      price_excl_vat numeric(12,2),
      commission numeric(12,2),
      commission_pct numeric(6,2),
      status text,
      status_final boolean,
      approved_for_payment boolean,
      sub_id text,
      link_name text,
      frame_type text,
      category text,
      website text,
      snippet_id text,
      updated_at timestamptz NOT NULL DEFAULT now(),
      PRIMARY KEY (network, order_item_id)
    );
    CREATE INDEX IF NOT EXISTS idx_affiliate_orders_date ON affiliate_orders (order_date);
    CREATE TABLE IF NOT EXISTS affiliate_report_rows (
      network text NOT NULL,
      report text NOT NULL,
      period_start date NOT NULL,
      period_end date NOT NULL,
      key text NOT NULL,
      sub_id text,
      title text,
      category text,
      website text,
      snippet_id text,
      clicks integer,
      impressions integer,
      orders integer,
      revenue numeric(12,2),
      commission numeric(12,2),
      shipped integer,
      returned integer,
      imported_at timestamptz NOT NULL DEFAULT now(),
      PRIMARY KEY (network, report, period_start, period_end, key)
    );
    CREATE INDEX IF NOT EXISTS idx_affiliate_report_rows_period ON affiliate_report_rows (report, period_start);
    CREATE TABLE IF NOT EXISTS affiliate_import_runs (
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
export async function ensureAffiliateTablesOnce() {
  if (tablesEnsured || !process.env.DATABASE_URL) return
  await withClient(ensureAffiliateTables)
  tablesEnsured = true
}

const ymd = (d) => d.toISOString().slice(0, 10)
const addDays = (d, n) => new Date(d.getTime() + n * 86_400_000)
const num = (v) => {
  if (v === null || v === undefined || v === '') return null
  const n = Number(String(v).replace(',', '.'))
  return Number.isFinite(n) ? n : null
}
const int = (v) => {
  const n = num(v)
  return n === null ? null : Math.round(n)
}

// ---------- site bepalen ----------

const TOG_WORDS = /slaapzak|kleding|pyjama|romper|rompertje|boxpak|textiel|nachtkleding|slaapzakje|trappelzak|jumpsuit/i

export function websiteByCategory(...texts) {
  const t = texts.filter(Boolean).join(' ')
  if (!t.trim() || /^(other|-)$/i.test(t.trim())) return null
  return TOG_WORDS.test(t) ? 'togwaarde' : 'flesvoedingcalculator'
}

function bolProductIdFrom(snippet) {
  const candidates = []
  for (const raw of [snippet.url, snippet.bol_script, snippet.generated_html]) {
    if (!raw) continue
    let s = String(raw)
    try { s = decodeURIComponent(s) } catch { /* half gecodeerd */ }
    candidates.push(s)
  }
  for (const s of candidates) {
    const m = s.match(/"productId"\s*:\s*"(\d{6,})"/) || s.match(/\/p\/[^/?#]*\/(\d{8,})/)
    if (m) return m[1]
  }
  return null
}

function asinFrom(snippet) {
  for (const raw of [snippet.url, snippet.generated_html, snippet.image_html]) {
    const m = String(raw || '').match(/(?:\/dp\/|\/gp\/product\/|ASIN=)([A-Z0-9]{10})/i)
    if (m) return m[1].toUpperCase()
  }
  return null
}

async function snippetIndex(client) {
  const { rows } = await client.query(
    `SELECT id, name, type, url, bol_script, generated_html, image_html, website FROM snippets`)
  const bol = new Map()
  const amazon = new Map()
  for (const s of rows) {
    const entry = { snippetId: s.id, website: s.website, name: s.name }
    const pid = bolProductIdFrom(s)
    if (pid && !bol.has(pid)) bol.set(pid, entry)
    const asin = asinFrom(s)
    if (asin && !amazon.has(asin)) amazon.set(asin, entry)
  }
  return { bol, amazon }
}

// ---------- bol ----------

export function bolConfigured() {
  return Boolean(process.env.BOL_REPORTING_CLIENT_ID && process.env.BOL_REPORTING_CLIENT_SECRET)
}

// Token is ~5 minuten geldig. Hergebruiken tot vlak voor het verloopt: te veel
// tokenverzoeken kan bol beantwoorden met een IP-ban.
let bolToken = null

async function bolAccessToken() {
  if (bolToken && bolToken.exp > Date.now() + 30_000) return bolToken.token
  const basic = Buffer.from(`${process.env.BOL_REPORTING_CLIENT_ID}:${process.env.BOL_REPORTING_CLIENT_SECRET}`).toString('base64')
  const res = await fetch(BOL_TOKEN_URL, {
    method: 'POST',
    headers: { Authorization: `Basic ${basic}`, Accept: 'application/json' }
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.access_token) {
    throw new Error(`bol-token geweigerd (${res.status}): ${data.error_description || data.error || 'onbekende fout'}`)
  }
  const ttl = Math.max(60, Number(data.expires_in) || 299)
  // scope bewaren: bij een 403 laat die zien voor welke bol-API de sleutels zijn
  bolToken = { token: data.access_token, exp: Date.now() + ttl * 1000, scope: data.scope || '' }
  return bolToken.token
}

async function bolReport(path, startDate, endDate) {
  const url = `${BOL_REPORTS}/${path}?startDate=${startDate}&endDate=${endDate}`
  for (let attempt = 0; attempt < 3; attempt++) {
    const token = await bolAccessToken()
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } })
    if (res.status === 401 && attempt === 0) { bolToken = null; continue }
    if (res.status === 429) {
      const wait = Math.min(60, Number(res.headers.get('retry-after')) || 10)
      await new Promise((r) => setTimeout(r, wait * 1000))
      continue
    }
    const text = await res.text()
    if (!res.ok) {
      let msg = text.slice(0, 300)
      try {
        const j = JSON.parse(text)
        msg = j.detail || j.title || j.message || j.error_description || msg
      } catch { /* geen JSON */ }
      const err = new Error(`bol ${path} ${startDate} t/m ${endDate}: ${res.status} ${msg}`)
      err.status = res.status
      throw err
    }
    try {
      const j = JSON.parse(text)
      return Array.isArray(j?.items) ? j.items : Array.isArray(j) ? j : []
    } catch {
      throw new Error(`bol ${path}: antwoord is geen JSON`)
    }
  }
  throw new Error(`bol ${path}: te veel verzoeken, later opnieuw`)
}

function resolveBol(index, { subId, productId, category, title }) {
  const sub = parseSubId(subId)
  const snip = productId ? index.bol.get(String(productId)) : null
  const website = sub?.website || snip?.website || websiteByCategory(category, title)
  return { website: website || null, snippetId: snip?.snippetId || null }
}

async function upsertBolOrders(client, index, items) {
  let n = 0
  for (const it of items) {
    const orderItemId = it.orderItemId ?? it.orderItemID
    if (!orderItemId || !it.orderDate) continue
    const { website, snippetId } = resolveBol(index, {
      subId: it.subId, productId: it.productId, category: it.chunkName, title: it.productTitle
    })
    await client.query(`
      INSERT INTO affiliate_orders (network, order_item_id, order_id, order_date, order_datetime,
        product_id, product_title, quantity, price_incl_vat, price_excl_vat, commission, commission_pct,
        status, status_final, approved_for_payment, sub_id, link_name, frame_type, category,
        website, snippet_id, updated_at)
      VALUES ('bol', $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, now())
      ON CONFLICT (network, order_item_id) DO UPDATE SET
        order_id = EXCLUDED.order_id, order_date = EXCLUDED.order_date, order_datetime = EXCLUDED.order_datetime,
        product_id = EXCLUDED.product_id, product_title = EXCLUDED.product_title, quantity = EXCLUDED.quantity,
        price_incl_vat = EXCLUDED.price_incl_vat, price_excl_vat = EXCLUDED.price_excl_vat,
        commission = EXCLUDED.commission, commission_pct = EXCLUDED.commission_pct, status = EXCLUDED.status,
        status_final = EXCLUDED.status_final, approved_for_payment = EXCLUDED.approved_for_payment,
        sub_id = EXCLUDED.sub_id, link_name = EXCLUDED.link_name, frame_type = EXCLUDED.frame_type,
        category = EXCLUDED.category, website = EXCLUDED.website, snippet_id = EXCLUDED.snippet_id,
        updated_at = now()`,
    [
      String(orderItemId), it.orderId != null ? String(it.orderId) : null, String(it.orderDate).slice(0, 10),
      it.orderDateTime || null, it.productId != null ? String(it.productId) : null, it.productTitle || null,
      int(it.quantity), num(it.priceInclVat), num(it.priceExclVat), num(it.commission), num(it.commissionPercentage),
      it.status || null, typeof it.statusFinal === 'boolean' ? it.statusFinal : null,
      typeof it.approvedForPayment === 'boolean' ? it.approvedForPayment : null,
      it.subId || null, it.name || null, it.frameType || null, it.chunkName || null, website, snippetId
    ])
    n++
  }
  return n
}

async function upsertBolPromotion(client, items) {
  let n = 0
  for (const it of items) {
    if (!it.date) continue
    const date = String(it.date).slice(0, 10)
    const sub = parseSubId(it.subId)
    const key = [it.subId || '', it.name || '', it.frameType || '', it.siteCode || ''].join('|')
    await client.query(`
      INSERT INTO affiliate_report_rows (network, report, period_start, period_end, key, sub_id, title,
        website, clicks, impressions, orders, revenue, commission, imported_at)
      VALUES ('bol', 'bol_promotion', $1, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, now())
      ON CONFLICT (network, report, period_start, period_end, key) DO UPDATE SET
        sub_id = EXCLUDED.sub_id, title = EXCLUDED.title, website = EXCLUDED.website,
        clicks = EXCLUDED.clicks, impressions = EXCLUDED.impressions, orders = EXCLUDED.orders,
        revenue = EXCLUDED.revenue, commission = EXCLUDED.commission, imported_at = now()`,
    [date, key, it.subId || null, it.name || null, sub?.website || null, int(it.clicks), int(it.impressions),
      int(it.orders), num(it.revenueInclVat), num(it.commission)])
    n++
  }
  return n
}

async function importBol(client) {
  const { rows: [r] } = await client.query(
    `SELECT count(*)::int AS n FROM affiliate_import_runs WHERE ok AND (details->'bol') IS NOT NULL`)
  const days = r.n > 0 ? REFETCH_DAYS : BACKFILL_DAYS
  const index = await snippetIndex(client)
  const end = addDays(new Date(), -1)
  const start = addDays(end, -(days - 1))

  let orders = 0
  let promotion = 0
  const skipped = []
  let probed = false
  for (let from = start; from <= end; from = addDays(from, CHUNK_DAYS)) {
    const to = addDays(from, CHUNK_DAYS - 1) > end ? end : addDays(from, CHUNK_DAYS - 1)
    try {
      orders += await upsertBolOrders(client, index, await bolReport('order-report', ymd(from), ymd(to)))
      promotion += await upsertBolPromotion(client, await bolReport('promotion-report', ymd(from), ymd(to)))
    } catch (e) {
      if (e.status !== 403) throw e
      // 403: weigert bol alleen deze (oude) periode, of alles? Eén keer gisteren proberen.
      if (!probed) {
        probed = true
        try {
          await bolReport('order-report', ymd(end), ymd(end))
        } catch (p) {
          if (p.status !== 403) throw p
          const scope = bolToken?.scope ? `"${bolToken.scope}"` : 'leeg'
          // 24-11-2026: oorzaak was de Catalog-sleutel; bol geeft per API een eigen sleutel.
          const hint = 'Controleer of BOL_REPORTING_CLIENT_ID/SECRET de sleutel "Reporting API" is (niet "Marketing Catalog API"). ' +
            'Klopt dat, kijk dan of het server-IP 195.201.113.102 op de IP-lijst van het partneraccount staat.'
          throw new Error(
            `bol weigert de partnerrapporten (403), ook voor alleen gisteren (token-scope: ${scope}). ${hint} Eerste fout: ${e.message}`)
        }
      }
      skipped.push(`${ymd(from)} t/m ${ymd(to)}`)
    }
  }
  return { from: ymd(start), to: ymd(end), orders, promotionRows: promotion, skipped }
}

export async function runAffiliateImport({ trigger = 'schema' } = {}) {
  if (!process.env.DATABASE_URL) return { ok: false, error: 'DATABASE_URL ontbreekt' }
  if (!bolConfigured()) return { ok: false, error: 'BOL_REPORTING_CLIENT_ID / BOL_REPORTING_CLIENT_SECRET ontbreken' }

  return withClient(async (client) => {
    await ensureAffiliateTables(client)
    const { rows: [lock] } = await client.query(`SELECT pg_try_advisory_lock($1) AS ok`, [LOCK_KEY])
    if (!lock.ok) return { ok: false, error: 'Er loopt al een import' }
    const { rows: [run] } = await client.query(
      `INSERT INTO affiliate_import_runs (trigger) VALUES ($1) RETURNING id`, [trigger])
    try {
      const details = { bol: await importBol(client) }
      await client.query(
        `UPDATE affiliate_import_runs SET finished_at = now(), ok = true, details = $2 WHERE id = $1`,
        [run.id, details])
      return { ok: true, details }
    } catch (e) {
      await client.query(
        `UPDATE affiliate_import_runs SET finished_at = now(), ok = false, error = $2 WHERE id = $1`,
        [run.id, e.message])
      return { ok: false, error: e.message }
    } finally {
      await client.query(`SELECT pg_advisory_unlock($1)`, [LOCK_KEY])
    }
  })
}

// Elk uur aangeroepen door instrumentation-node.js; draait als de laatste
// geslaagde run >20 uur oud is, en na een mislukte poging pas na 6 uur.
export async function maybeRunDailyAffiliateImport() {
  if (!process.env.DATABASE_URL || !bolConfigured()) return
  const due = await withClient(async (client) => {
    await ensureAffiliateTables(client)
    const { rows: [r] } = await client.query(`
      SELECT
        (SELECT max(finished_at) FROM affiliate_import_runs WHERE ok) AS last_ok,
        (SELECT max(started_at) FROM affiliate_import_runs) AS last_try`)
    const lastOk = r.last_ok ? new Date(r.last_ok).getTime() : 0
    const lastTry = r.last_try ? new Date(r.last_try).getTime() : 0
    return Date.now() - lastOk > 20 * 3_600_000 && Date.now() - lastTry > 6 * 3_600_000
  })
  if (due) {
    const r = await runAffiliateImport({ trigger: 'schema' })
    if (!r.ok) console.error('Affiliate-import mislukt:', r.error)
  }
}

// ---------- Amazon-CSV ----------

// Kleine CSV-parser met aanhalingstekens ("a, b" en "" binnen een veld).
export function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let quoted = false
  const s = String(text || '').replace(/^﻿/, '')
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (quoted) {
      if (c === '"' && s[i + 1] === '"') { field += '"'; i++ }
      else if (c === '"') quoted = false
      else field += c
    } else if (c === '"') quoted = true
    else if (c === ',') { row.push(field); field = '' }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && s[i + 1] === '\n') i++
      row.push(field); field = ''
      if (row.some((v) => v.trim() !== '')) rows.push(row)
      row = []
    } else field += c
  }
  row.push(field)
  if (row.some((v) => v.trim() !== '')) rows.push(row)
  return rows
}

// Amazon schrijft maand-dag-jaar (11-22-2026); ook jjjj-mm-dd mag.
function amazonDate(v) {
  const s = String(v || '').trim()
  let m = s.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/)
  if (m) return `${m[3]}-${m[1].padStart(2, '0')}-${m[2].padStart(2, '0')}`
  m = s.match(/^(\d{4})-(\d{2})-(\d{2})/)
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null
}

function pick(rec, ...names) {
  for (const n of names) if (rec[n] !== undefined && rec[n] !== '') return rec[n]
  return undefined
}

/** Herkent het rapport aan de kolomkoppen en geeft genormaliseerde regels terug. */
export function parseAmazonReport(text) {
  const rows = parseCsv(text)
  if (rows.length < 1) throw new Error('Leeg bestand')
  const header = rows[0].map((h) => h.trim().toLowerCase())
  const has = (h) => header.includes(h)
  let report
  if (has('tracking-id')) report = 'amazon_tracking'
  else if (has('asin')) report = 'amazon_product'
  else if (has('categorie') && has('datum')) report = 'amazon_category'
  else throw new Error(`Onbekend Amazon-rapport (kolommen: ${rows[0].slice(0, 4).join(', ')}...)`)

  const records = rows.slice(1).map((r) => Object.fromEntries(header.map((h, i) => [h, (r[i] ?? '').trim()])))
  const items = []
  for (const rec of records) {
    const date = report === 'amazon_tracking' ? null : amazonDate(rec['datum'])
    if (report !== 'amazon_tracking' && !date) continue
    const key = report === 'amazon_tracking' ? rec['tracking-id']
      : report === 'amazon_product' ? (rec['asin'] || rec['producttitel'])
      : rec['categorie']
    if (!key) continue
    items.push({
      date,
      key,
      title: report === 'amazon_product' ? rec['producttitel'] || null : null,
      category: rec['categorie'] || null,
      clicks: int(pick(rec, 'klikken', 'clicks')),
      orders: int(pick(rec, 'bestelde items')),
      revenue: num(pick(rec, 'bestelde omzet', 'omzet uit bestellingen', 'bestelde inkomsten')),
      commission: num(pick(rec, 'totale inkomsten', 'totale opbrengst')),
      shipped: int(pick(rec, 'verzonden items')),
      returned: int(pick(rec, 'geretourneerde items'))
    })
  }
  return { report, items }
}

/**
 * Importeert een of meer Amazon-CSV's. Het Tracking-Id-rapport heeft geen
 * datum: de periode komt uit `from`/`to` of uit de gedateerde bestanden in
 * dezelfde upload. Opnieuw uploaden overschrijft, telt niets dubbel.
 */
export async function importAmazonCsv(files, { from = null, to = null } = {}) {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL ontbreekt')
  const parsed = files.map((f) => ({ name: f.name, ...parseAmazonReport(f.text) }))

  const dates = parsed.flatMap((p) => p.items.map((i) => i.date).filter(Boolean)).sort()
  const periodStart = from || dates[0] || null
  const periodEnd = to || dates[dates.length - 1] || null
  if (parsed.some((p) => p.report === 'amazon_tracking') && (!periodStart || !periodEnd)) {
    throw new Error('Het Tracking-Id-rapport heeft geen datum: vul van/tot in of upload het samen met een ander rapport')
  }

  return withClient(async (client) => {
    await ensureAffiliateTables(client)
    const index = await snippetIndex(client)
    const result = []
    for (const p of parsed) {
      let n = 0
      for (const it of p.items) {
        const start = it.date || periodStart
        const end = it.date || periodEnd
        const asin = p.report === 'amazon_product' && /^[A-Z0-9]{10}$/i.test(it.key) ? it.key.toUpperCase() : null
        const snip = asin ? index.amazon.get(asin) : null
        const website = snip?.website || (p.report === 'amazon_tracking' ? null : websiteByCategory(it.category, it.title))
        await client.query(`
          INSERT INTO affiliate_report_rows (network, report, period_start, period_end, key, title, category,
            website, snippet_id, clicks, orders, revenue, commission, shipped, returned, imported_at)
          VALUES ('amazon', $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, now())
          ON CONFLICT (network, report, period_start, period_end, key) DO UPDATE SET
            title = EXCLUDED.title, category = EXCLUDED.category, website = EXCLUDED.website,
            snippet_id = EXCLUDED.snippet_id, clicks = EXCLUDED.clicks, orders = EXCLUDED.orders,
            revenue = EXCLUDED.revenue, commission = EXCLUDED.commission, shipped = EXCLUDED.shipped,
            returned = EXCLUDED.returned, imported_at = now()`,
        [p.report, start, end, it.key, it.title, it.category, website, snip?.snippetId || null,
          it.clicks, it.orders, it.revenue, it.commission, it.shipped, it.returned])
        n++
      }
      result.push({ file: p.name, report: p.report, rows: n })
    }
    return { periodStart, periodEnd, files: result }
  })
}
