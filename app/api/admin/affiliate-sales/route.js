import { NextResponse } from 'next/server'
import { sql } from 'drizzle-orm'
import { db } from '../../../../lib/db/connection.js'
import { verifyAdminAndGetWebsite } from '../../../../lib/jwt-utils.js'
import {
  bolConfigured, ensureAffiliateTablesOnce, importAmazonCsv, runAffiliateImport
} from '../../../../lib/affiliate-sales.js'
import { parseSubId } from '../../../../lib/affiliate-subid.js'

export const dynamic = 'force-dynamic'

const MAX_UPLOAD_CHARS = 5_000_000

function auth(request) {
  try {
    verifyAdminAndGetWebsite(request)
    return true
  } catch {
    return false
  }
}

// GET - verkopen via bol en Amazon binnen ?days= (zelfde waarden als de rest
// van /admin/stats). Alles uit onze eigen tabellen; bol wordt hier niet aangeroepen.
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

  try {
    await ensureAffiliateTablesOnce()

    const [prevTotals, lastRun, totals, daily, products, snippetClicks, subOrders, subPromo, recent,
      amazonDaily, amazonProducts, amazonTracking] = await Promise.all([
      // Vorige periode van gelijke lengte, voor de trend in het overzicht
      db.execute(sql`
        SELECT coalesce(website, 'onbekend') AS website, count(*)::int AS items,
          coalesce(sum(commission), 0)::float AS commission
        FROM affiliate_orders
        WHERE order_date > current_date - ${days * 2}::int AND order_date <= current_date - ${days}::int
          AND coalesce(status, '') <> 'Geweigerd'
        GROUP BY 1`),
      db.execute(sql`
        SELECT id, started_at, finished_at, ok, trigger, details, error
        FROM affiliate_import_runs ORDER BY id DESC LIMIT 1`),
      db.execute(sql`
        SELECT coalesce(website, 'onbekend') AS website, coalesce(status, 'Onbekend') AS status,
          count(*)::int AS items, coalesce(sum(quantity), 0)::int AS quantity,
          coalesce(sum(price_incl_vat), 0)::float AS revenue, coalesce(sum(commission), 0)::float AS commission,
          max(order_date)::text AS last_date, min(order_date)::text AS first_date
        FROM affiliate_orders WHERE order_date > current_date - ${days}::int
        GROUP BY 1, 2`),
      db.execute(sql`
        SELECT coalesce(website, 'onbekend') AS website, date_trunc(${bucketLit}, order_date)::date::text AS day,
          count(*)::int AS count, coalesce(sum(commission), 0)::float AS commission
        FROM affiliate_orders
        WHERE order_date > current_date - ${days}::int AND coalesce(status, '') <> 'Geweigerd'
        GROUP BY 1, 2 ORDER BY 2`),
      db.execute(sql`
        SELECT coalesce(website, 'onbekend') AS website, product_id, max(product_title) AS title,
          max(snippet_id) AS snippet_id, max(category) AS category,
          count(*)::int AS items, coalesce(sum(quantity), 0)::int AS quantity,
          coalesce(sum(commission) FILTER (WHERE coalesce(status, '') <> 'Geweigerd'), 0)::float AS commission,
          count(*) FILTER (WHERE status = 'Geweigerd')::int AS rejected
        FROM affiliate_orders WHERE order_date > current_date - ${days}::int
        GROUP BY 1, 2 ORDER BY items DESC, commission DESC LIMIT 50`),
      db.execute(sql`
        SELECT snippet_id, count(*)::int AS clicks
        FROM click_events WHERE created_at > now() - make_interval(days => ${days}::int)
        GROUP BY 1`),
      db.execute(sql`
        SELECT sub_id, count(*)::int AS items,
          coalesce(sum(commission) FILTER (WHERE coalesce(status, '') <> 'Geweigerd'), 0)::float AS commission
        FROM affiliate_orders WHERE order_date > current_date - ${days}::int
        GROUP BY 1`),
      db.execute(sql`
        SELECT sub_id, coalesce(sum(clicks), 0)::int AS clicks, coalesce(sum(orders), 0)::int AS orders,
          coalesce(sum(commission), 0)::float AS commission
        FROM affiliate_report_rows
        WHERE report = 'bol_promotion' AND period_start > current_date - ${days}::int
        GROUP BY 1`),
      db.execute(sql`
        SELECT order_date::text AS order_date, product_title, product_id, quantity,
          price_incl_vat::float AS price, commission::float AS commission, status, sub_id,
          coalesce(website, 'onbekend') AS website, snippet_id
        FROM affiliate_orders WHERE order_date > current_date - ${days}::int
        ORDER BY order_date DESC, order_datetime DESC NULLS LAST LIMIT 25`),
      db.execute(sql`
        SELECT period_start::text AS day, coalesce(sum(clicks), 0)::int AS clicks,
          coalesce(sum(orders), 0)::int AS orders, coalesce(sum(revenue), 0)::float AS revenue,
          coalesce(sum(commission), 0)::float AS commission, coalesce(sum(returned), 0)::int AS returned,
          max(imported_at) AS imported_at
        FROM affiliate_report_rows
        WHERE report = 'amazon_category' AND period_start > current_date - ${days}::int
        GROUP BY 1 ORDER BY 1`),
      db.execute(sql`
        SELECT key, max(title) AS title, max(category) AS category, coalesce(max(website), 'onbekend') AS website,
          max(snippet_id) AS snippet_id, coalesce(sum(clicks), 0)::int AS clicks,
          coalesce(sum(orders), 0)::int AS orders, coalesce(sum(commission), 0)::float AS commission
        FROM affiliate_report_rows
        WHERE report = 'amazon_product' AND period_start > current_date - ${days}::int
        GROUP BY 1 ORDER BY orders DESC, clicks DESC LIMIT 50`),
      db.execute(sql`
        SELECT key, period_start::text AS period_start, period_end::text AS period_end,
          clicks, orders, commission::float AS commission
        FROM affiliate_report_rows
        WHERE report = 'amazon_tracking' AND period_end > current_date - ${days}::int
        ORDER BY period_end DESC, orders DESC LIMIT 50`)
    ])

    // Per subId: bestellingen uit het order-report, kliks uit het promotion-report
    const bySub = new Map()
    const subRow = (id) => {
      const key = id || ''
      if (!bySub.has(key)) bySub.set(key, { sub_id: id || null, clicks: 0, items: 0, commission: 0 })
      return bySub.get(key)
    }
    for (const r of subOrders.rows) {
      const s = subRow(r.sub_id)
      s.items += Number(r.items)
      s.commission += Number(r.commission)
    }
    for (const r of subPromo.rows) subRow(r.sub_id).clicks += Number(r.clicks)
    const subIds = [...bySub.values()]
      .map((s) => ({ ...s, parsed: parseSubId(s.sub_id) }))
      .sort((a, b) => b.items - a.items || b.clicks - a.clicks)

    return NextResponse.json({
      success: true,
      configured: bolConfigured(),
      bucket,
      lastRun: lastRun.rows[0] || null,
      totals: totals.rows,
      prevTotals: isAll ? [] : prevTotals.rows,
      daily: daily.rows,
      products: products.rows,
      snippetClicks: Object.fromEntries(snippetClicks.rows.map((r) => [r.snippet_id, Number(r.clicks)])),
      subIds,
      recent: recent.rows.map((r) => ({ ...r, parsed: parseSubId(r.sub_id) })),
      amazon: {
        daily: amazonDaily.rows,
        products: amazonProducts.rows,
        tracking: amazonTracking.rows
      }
    })
  } catch (e) {
    console.error('affiliate-sales GET:', e)
    return NextResponse.json({ success: false, error: 'Kon verkoopcijfers niet laden' }, { status: 500 })
  }
}

// POST zonder bestanden: bol-import starten (op de achtergrond; GET toont de
// voortgang). POST met { files: [{ name, text }], from?, to? }: Amazon-CSV's importeren.
export async function POST(request) {
  if (!auth(request)) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })

  let body = null
  try { body = await request.json() } catch { /* lege body = bol-import */ }

  if (Array.isArray(body?.files) && body.files.length > 0) {
    const files = body.files
      .filter((f) => f && typeof f.text === 'string')
      .slice(0, 10)
      .map((f) => ({ name: String(f.name || 'bestand.csv').slice(0, 200), text: f.text }))
    const size = files.reduce((s, f) => s + f.text.length, 0)
    if (size > MAX_UPLOAD_CHARS) {
      return NextResponse.json({ success: false, error: 'Bestanden zijn te groot (max 5 MB samen)' }, { status: 413 })
    }
    const isDate = (v) => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v)
    try {
      const result = await importAmazonCsv(files, {
        from: isDate(body.from) ? body.from : null,
        to: isDate(body.to) ? body.to : null
      })
      return NextResponse.json({ success: true, amazon: result })
    } catch (e) {
      return NextResponse.json({ success: false, error: e.message }, { status: 400 })
    }
  }

  if (!bolConfigured()) {
    return NextResponse.json({ success: false, error: 'BOL_API_CLIENT_ID / BOL_API_CLIENT_SECRET zijn niet ingesteld' }, { status: 503 })
  }
  runAffiliateImport({ trigger: 'handmatig' })
    .then((r) => { if (!r.ok) console.error('Affiliate-import (handmatig):', r.error) })
    .catch((e) => console.error('Affiliate-import (handmatig):', e.message))
  return NextResponse.json({ success: true, started: true })
}
