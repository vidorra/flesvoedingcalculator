import { NextResponse } from 'next/server'
import { sql } from 'drizzle-orm'
import { db } from '../../../../lib/db/connection.js'
import { ensureCalculatorEventsTable, ensureClickEventsTable } from '../../../../lib/db/ensure-events.js'
import { verifyAdminAndGetWebsite } from '../../../../lib/jwt-utils.js'

export const dynamic = 'force-dynamic'

// GET - aggregated, anonymous calculator stats for BOTH websites.
export async function GET(request) {
  try {
    verifyAdminAndGetWebsite(request)
  } catch {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ success: false, error: 'DATABASE_URL not set' }, { status: 503 })
  }

  // Periode: ?days=7|14|30|90|180|365 of ?days=all. Alle vensters volgen dit.
  const ALLOWED_DAYS = [7, 14, 30, 90, 180, 365]
  const daysParam = new URL(request.url).searchParams.get('days') || '30'
  const isAll = daysParam === 'all'
  const days = ALLOWED_DAYS.includes(Number(daysParam)) ? Number(daysParam) : 30
  // Bucketgrootte voor de grafiek zodat lange periodes niet honderden staafjes geven
  const bucket = isAll ? 'month' : days <= 31 ? 'day' : days <= 120 ? 'week' : 'month'
  const bucketLit = sql.raw(`'${bucket}'`)

  // Window-fragmenten (days is een gevalideerd geheel getal -> veilig)
  const win = isAll ? sql`TRUE` : sql`created_at > now() - (${days} * interval '1 day')`
  const winPrev = isAll ? sql`FALSE` : sql`created_at > now() - (${days * 2} * interval '1 day') AND created_at <= now() - (${days} * interval '1 day')`
  const winCe = isAll ? sql`TRUE` : sql`ce.created_at > now() - (${days} * interval '1 day')`

  try {
    await ensureCalculatorEventsTable()
    await ensureClickEventsTable()

    const [totals, byAge, daily, byWeight, combi, byRoomTemp, bySleepMode, byAdviesTog, clickTotals, clicksBySnippet, clicksDaily, clicksByPlatform] = await Promise.all([
      // total = altijd (lifetime); period = binnen venster; prev = vorig gelijk venster (voor trend)
      db.execute(sql`
        SELECT website,
               COUNT(*)::int AS total,
               COUNT(*) FILTER (WHERE ${win})::int AS period,
               COUNT(*) FILTER (WHERE ${winPrev})::int AS prev
        FROM calculator_events GROUP BY website ORDER BY website`),
      db.execute(sql`
        SELECT website, COALESCE(age_category, 'onbekend') AS age_category, COUNT(*)::int AS count
        FROM calculator_events WHERE ${win} GROUP BY website, age_category ORDER BY website, count DESC`),
      db.execute(sql`
        SELECT website, to_char(date_trunc(${bucketLit}, created_at), 'YYYY-MM-DD') AS day, COUNT(*)::int AS count
        FROM calculator_events WHERE ${win}
        GROUP BY website, day ORDER BY day`),
      db.execute(sql`
        SELECT COALESCE(data->>'weightBucket', 'onbekend') AS weight_bucket, COUNT(*)::int AS count
        FROM calculator_events WHERE website = 'flesvoedingcalculator' AND ${win}
        GROUP BY weight_bucket ORDER BY count DESC`),
      db.execute(sql`
        SELECT COALESCE(data->>'isCombi', 'false') AS is_combi, COUNT(*)::int AS count
        FROM calculator_events WHERE website = 'flesvoedingcalculator' AND ${win}
        GROUP BY is_combi`),
      db.execute(sql`
        SELECT COALESCE(data->>'roomTempBucket', 'onbekend') AS room_temp, COUNT(*)::int AS count
        FROM calculator_events WHERE website = 'togwaarde' AND ${win}
        GROUP BY room_temp ORDER BY room_temp`),
      // Togwaarde: slaapmodus-verdeling (/calculator: slaapzak/dekens/geen)
      db.execute(sql`
        SELECT COALESCE(data->>'sleepMode', 'onbekend') AS sleep_mode, COUNT(*)::int AS count
        FROM calculator_events WHERE website = 'togwaarde' AND data ? 'sleepMode' AND ${win}
        GROUP BY sleep_mode ORDER BY count DESC`),
      // Togwaarde: geadviseerde slaapzak-TOG op de homepage (reverse)
      db.execute(sql`
        SELECT COALESCE(data->>'adviesTog', 'onbekend') AS advies_tog, COUNT(*)::int AS count
        FROM calculator_events WHERE website = 'togwaarde' AND data ? 'adviesTog' AND ${win}
        GROUP BY advies_tog ORDER BY advies_tog`),
      // Affiliate clicks: totalen per website (total/period/prev)
      db.execute(sql`
        SELECT website,
               COUNT(*)::int AS total,
               COUNT(*) FILTER (WHERE ${win})::int AS period,
               COUNT(*) FILTER (WHERE ${winPrev})::int AS prev
        FROM click_events GROUP BY website ORDER BY website`),
      // Affiliate clicks: per snippet (met naam uit snippets, over beide sites)
      db.execute(sql`
        SELECT ce.website, ce.snippet_id, COALESCE(s.name, ce.snippet_id) AS name,
               COUNT(*)::int AS count, MAX(ce.created_at) AS last_clicked
        FROM click_events ce LEFT JOIN snippets s ON s.id = ce.snippet_id
        WHERE ${winCe}
        GROUP BY ce.website, ce.snippet_id, s.name
        ORDER BY count DESC LIMIT 25`),
      // Affiliate clicks: per bucket over de periode
      db.execute(sql`
        SELECT website, to_char(date_trunc(${bucketLit}, created_at), 'YYYY-MM-DD') AS day, COUNT(*)::int AS count
        FROM click_events WHERE ${win}
        GROUP BY website, day ORDER BY day`),
      // Affiliate clicks: per platform (bol vs amazon) over de periode.
      // Platform uit snippets.type; valt terug op de snippet_id-prefix als de
      // snippet niet (meer) bestaat.
      db.execute(sql`
        SELECT ce.website,
               CASE
                 WHEN COALESCE(s.type, '') ILIKE 'amazon%' OR ce.snippet_id ILIKE 'amazon%' THEN 'amazon'
                 WHEN COALESCE(s.type, '') ILIKE 'bol%'    OR ce.snippet_id ILIKE 'bol%'    THEN 'bol'
                 ELSE 'overig'
               END AS platform,
               COUNT(*)::int AS count
        FROM click_events ce LEFT JOIN snippets s ON s.id = ce.snippet_id
        WHERE ${winCe}
        GROUP BY ce.website, platform`)
    ])

    return NextResponse.json({
      success: true,
      period: isAll ? 'all' : days,
      bucket,
      totals: totals.rows,
      byAge: byAge.rows,
      daily: daily.rows,
      byWeight: byWeight.rows,
      combi: combi.rows,
      byRoomTemp: byRoomTemp.rows,
      bySleepMode: bySleepMode.rows,
      byAdviesTog: byAdviesTog.rows,
      clickTotals: clickTotals.rows,
      clicksBySnippet: clicksBySnippet.rows,
      clicksDaily: clicksDaily.rows,
      clicksByPlatform: clicksByPlatform.rows
    })
  } catch (error) {
    console.error('calculator-stats error:', error)
    return NextResponse.json({ success: false, error: 'Failed to load stats' }, { status: 500 })
  }
}
