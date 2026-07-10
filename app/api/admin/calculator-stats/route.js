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

  try {
    await ensureCalculatorEventsTable()
    await ensureClickEventsTable()

    const [totals, byAge, daily, byWeight, combi, byRoomTemp, bySleepMode, byAdviesTog, clickTotals, clicksBySnippet, clicksDaily] = await Promise.all([
      db.execute(sql`
        SELECT website,
               COUNT(*)::int AS total,
               COUNT(*) FILTER (WHERE created_at > now() - interval '30 days')::int AS last30,
               COUNT(*) FILTER (WHERE created_at > now() - interval '7 days')::int AS last7
        FROM calculator_events GROUP BY website ORDER BY website`),
      db.execute(sql`
        SELECT website, COALESCE(age_category, 'onbekend') AS age_category, COUNT(*)::int AS count
        FROM calculator_events GROUP BY website, age_category ORDER BY website, count DESC`),
      db.execute(sql`
        SELECT website, to_char(date_trunc('day', created_at), 'YYYY-MM-DD') AS day, COUNT(*)::int AS count
        FROM calculator_events WHERE created_at > now() - interval '30 days'
        GROUP BY website, day ORDER BY day`),
      db.execute(sql`
        SELECT COALESCE(data->>'weightBucket', 'onbekend') AS weight_bucket, COUNT(*)::int AS count
        FROM calculator_events WHERE website = 'flesvoedingcalculator'
        GROUP BY weight_bucket ORDER BY count DESC`),
      db.execute(sql`
        SELECT COALESCE(data->>'isCombi', 'false') AS is_combi, COUNT(*)::int AS count
        FROM calculator_events WHERE website = 'flesvoedingcalculator'
        GROUP BY is_combi`),
      db.execute(sql`
        SELECT COALESCE(data->>'roomTempBucket', 'onbekend') AS room_temp, COUNT(*)::int AS count
        FROM calculator_events WHERE website = 'togwaarde'
        GROUP BY room_temp ORDER BY room_temp`),
      // Togwaarde: slaapmodus-verdeling (/calculator: slaapzak/dekens/geen)
      db.execute(sql`
        SELECT COALESCE(data->>'sleepMode', 'onbekend') AS sleep_mode, COUNT(*)::int AS count
        FROM calculator_events WHERE website = 'togwaarde' AND data ? 'sleepMode'
        GROUP BY sleep_mode ORDER BY count DESC`),
      // Togwaarde: geadviseerde slaapzak-TOG op de homepage (reverse)
      db.execute(sql`
        SELECT COALESCE(data->>'adviesTog', 'onbekend') AS advies_tog, COUNT(*)::int AS count
        FROM calculator_events WHERE website = 'togwaarde' AND data ? 'adviesTog'
        GROUP BY advies_tog ORDER BY advies_tog`),
      // Affiliate clicks: totalen per website
      db.execute(sql`
        SELECT website,
               COUNT(*)::int AS total,
               COUNT(*) FILTER (WHERE created_at > now() - interval '30 days')::int AS last30,
               COUNT(*) FILTER (WHERE created_at > now() - interval '7 days')::int AS last7
        FROM click_events GROUP BY website ORDER BY website`),
      // Affiliate clicks: per snippet (met naam uit snippets, over beide sites)
      db.execute(sql`
        SELECT ce.website, ce.snippet_id, COALESCE(s.name, ce.snippet_id) AS name,
               COUNT(*)::int AS count, MAX(ce.created_at) AS last_clicked
        FROM click_events ce LEFT JOIN snippets s ON s.id = ce.snippet_id
        GROUP BY ce.website, ce.snippet_id, s.name
        ORDER BY count DESC LIMIT 25`),
      // Affiliate clicks: per dag (laatste 30 dagen)
      db.execute(sql`
        SELECT website, to_char(date_trunc('day', created_at), 'YYYY-MM-DD') AS day, COUNT(*)::int AS count
        FROM click_events WHERE created_at > now() - interval '30 days'
        GROUP BY website, day ORDER BY day`)
    ])

    return NextResponse.json({
      success: true,
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
      clicksDaily: clicksDaily.rows
    })
  } catch (error) {
    console.error('calculator-stats error:', error)
    return NextResponse.json({ success: false, error: 'Failed to load stats' }, { status: 500 })
  }
}
