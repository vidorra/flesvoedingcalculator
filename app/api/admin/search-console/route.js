import { NextResponse } from 'next/server'
import { sql } from 'drizzle-orm'
import { db } from '../../../../lib/db/connection.js'
import { ensureClickPageColumn } from '../../../../lib/db/ensure-events.js'
import { verifyAdminAndGetWebsite } from '../../../../lib/jwt-utils.js'
import {
  ensureGscTablesOnce, gscConfigured, gscConfigProblem, gscServiceAccountEmail, runGscImport
} from '../../../../lib/search-console.js'

export const dynamic = 'force-dynamic'

function auth(request) {
  try {
    verifyAdminAndGetWebsite(request)
    return true
  } catch {
    return false
  }
}

// GET - Search Console-cijfers voor beide sites binnen ?days= (zelfde
// waarden als de rest van /admin/stats). Alles komt uit onze eigen tabellen;
// Google wordt hier niet aangeroepen.
export async function GET(request) {
  if (!auth(request)) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ success: false, error: 'DATABASE_URL not set' }, { status: 503 })
  }

  const ALLOWED_DAYS = [7, 14, 30, 60, 90, 180, 365]
  const daysParam = new URL(request.url).searchParams.get('days') || '30'
  const isAll = daysParam === 'all'
  const days = isAll ? 100000 : ALLOWED_DAYS.includes(Number(daysParam)) ? Number(daysParam) : 30
  const bucket = isAll ? 'month' : days <= 62 ? 'day' : days <= 120 ? 'week' : 'month'
  const bucketLit = sql.raw(`'${bucket}'`)
  // Zoekvragen bewaren we per dag tot ~400 dagen; daarbuiten is er niets.
  const qDays = Math.min(days, 400)

  try {
    await ensureGscTablesOnce()
    await ensureClickPageColumn()

    const [lastRun, totals, daily, pages, opportunities, weak, index] = await Promise.all([
      db.execute(sql`
        SELECT id, started_at, finished_at, ok, trigger, details, error
        FROM gsc_import_runs ORDER BY id DESC LIMIT 1`),
      // Huidige en vorige gelijke periode, voor de trend
      db.execute(sql`
        SELECT website,
          SUM(clicks) FILTER (WHERE date > current_date - ${days}::int)::int AS clicks,
          SUM(impressions) FILTER (WHERE date > current_date - ${days}::int)::int AS impressions,
          (SUM(position * impressions) FILTER (WHERE date > current_date - ${days}::int)
            / NULLIF(SUM(impressions) FILTER (WHERE date > current_date - ${days}::int), 0))::float AS position,
          SUM(clicks) FILTER (WHERE date <= current_date - ${days}::int AND date > current_date - ${days * 2}::int)::int AS prev_clicks,
          MAX(date)::text AS last_date,
          MIN(date)::text AS first_date
        FROM gsc_page_daily GROUP BY website`),
      db.execute(sql`
        SELECT website, date_trunc(${bucketLit}, date)::date::text AS day,
          SUM(clicks)::int AS count, SUM(impressions)::int AS impressions
        FROM gsc_page_daily WHERE date > current_date - ${days}::int
        GROUP BY website, day ORDER BY day`),
      // Route per pagina: Google-kliks -> affiliate-kliks op die pagina
      db.execute(sql`
        WITH g AS (
          SELECT website, page, SUM(clicks)::int AS clicks, SUM(impressions)::int AS impressions,
            (SUM(position * impressions) / NULLIF(SUM(impressions), 0))::float AS position
          FROM gsc_page_daily WHERE date > current_date - ${days}::int
          GROUP BY website, page
        ), a AS (
          SELECT website, page, COUNT(*)::int AS aff_clicks
          FROM click_events
          WHERE page IS NOT NULL AND created_at > now() - (${days} * interval '1 day')
          GROUP BY website, page
        ), ranked AS (
          SELECT COALESCE(g.website, a.website) AS website, COALESCE(g.page, a.page) AS page,
            COALESCE(g.clicks, 0) AS clicks, COALESCE(g.impressions, 0) AS impressions, g.position,
            COALESCE(a.aff_clicks, 0) AS aff_clicks,
            ROW_NUMBER() OVER (PARTITION BY COALESCE(g.website, a.website)
              ORDER BY COALESCE(g.clicks, 0) DESC, COALESCE(g.impressions, 0) DESC) AS rn
          FROM g FULL OUTER JOIN a ON a.website = g.website AND a.page = g.page
        )
        SELECT website, page, clicks, impressions, position, aff_clicks
        FROM ranked WHERE rn <= 40 ORDER BY website, rn`),
      // Kansen: positie 4-15 met vertoningen. Een plek hoger levert hier het meest op.
      db.execute(sql`
        WITH q AS (
          SELECT website, query, page, SUM(clicks)::int AS clicks, SUM(impressions)::int AS impressions,
            SUM(position * impressions) AS pos_w
          FROM gsc_query_daily WHERE date > current_date - ${qDays}::int
          GROUP BY website, query, page
        ), per_query AS (
          SELECT website, query,
            SUM(clicks)::int AS clicks, SUM(impressions)::int AS impressions,
            (SUM(pos_w) / NULLIF(SUM(impressions), 0))::float AS position,
            (ARRAY_AGG(page ORDER BY impressions DESC))[1] AS page
          FROM q GROUP BY website, query
        ), ranked AS (
          SELECT *, ROW_NUMBER() OVER (PARTITION BY website ORDER BY impressions DESC) AS rn
          FROM per_query WHERE position >= 4 AND position <= 15 AND impressions >= 10
        )
        SELECT website, query, page, clicks, impressions, position FROM ranked WHERE rn <= 20
        ORDER BY website, rn`),
      // Veel vertoningen maar ver weg (positie > 15): Google ziet het onderwerp
      // bij ons, maar geen pagina past goed. Kandidaat voor een eigen artikel.
      db.execute(sql`
        WITH q AS (
          SELECT website, query, page, SUM(clicks)::int AS clicks, SUM(impressions)::int AS impressions,
            SUM(position * impressions) AS pos_w
          FROM gsc_query_daily WHERE date > current_date - ${qDays}::int
          GROUP BY website, query, page
        ), per_query AS (
          SELECT website, query,
            SUM(clicks)::int AS clicks, SUM(impressions)::int AS impressions,
            (SUM(pos_w) / NULLIF(SUM(impressions), 0))::float AS position,
            (ARRAY_AGG(page ORDER BY impressions DESC))[1] AS page
          FROM q GROUP BY website, query
        ), ranked AS (
          SELECT *, ROW_NUMBER() OVER (PARTITION BY website ORDER BY impressions DESC) AS rn
          FROM per_query WHERE position > 15 AND impressions >= 10
        )
        SELECT website, query, page, clicks, impressions, position FROM ranked WHERE rn <= 15
        ORDER BY website, rn`),
      db.execute(sql`
        SELECT website, url, verdict, coverage_state, last_crawl, google_canonical, user_canonical,
          checked_at, prev_verdict, verdict_changed_at
        FROM gsc_index_status ORDER BY website, (verdict = 'PASS'), url`)
    ])

    return NextResponse.json({
      success: true,
      configured: gscConfigured(),
      configProblem: gscConfigProblem(),
      serviceAccount: gscServiceAccountEmail(),
      bucket,
      lastRun: lastRun.rows[0] || null,
      totals: totals.rows,
      daily: daily.rows,
      pages: pages.rows,
      opportunities: opportunities.rows,
      weak: weak.rows,
      index: index.rows
    })
  } catch (error) {
    console.error('search-console stats error:', error)
    return NextResponse.json({ success: false, error: 'Kon Search Console-cijfers niet laden' }, { status: 500 })
  }
}

// POST - import nu starten (draait op de achtergrond; GET toont de voortgang
// via lastRun). Een tweede klik terwijl er een import loopt doet niets.
export async function POST(request) {
  if (!auth(request)) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  if (!gscConfigured()) {
    return NextResponse.json({ success: false, error: 'GSC_SERVICE_ACCOUNT_JSON is nog niet ingesteld' }, { status: 503 })
  }
  runGscImport({ trigger: 'handmatig' })
    .then((r) => { if (!r.ok) console.error('GSC-import (handmatig):', r.error || r.errors) })
    .catch((e) => console.error('GSC-import (handmatig):', e.message))
  return NextResponse.json({ success: true, started: true })
}
