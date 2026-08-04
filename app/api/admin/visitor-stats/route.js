import { NextResponse } from 'next/server'
import { sql } from 'drizzle-orm'
import { db } from '../../../../lib/db/connection.js'
import { ensurePageviewEventsTable } from '../../../../lib/db/ensure-events.js'
import { verifyAdminAndGetWebsite } from '../../../../lib/jwt-utils.js'

export const dynamic = 'force-dynamic'

// range -> venster (dagen; null = alles) + bucketgrootte voor de staafjes
const RANGES = {
  maand:    { days: 31,  bucket: 'day' },
  kwartaal: { days: 91,  bucket: 'day' },
  jaar:     { days: 365, bucket: 'week' },
  totaal:   { days: null, bucket: 'month' }
}

// GET - anonieme bezoek-aantallen per bucket (voor de bezoekers-grafiek).
export async function GET(request) {
  try {
    verifyAdminAndGetWebsite(request)
  } catch {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ success: false, error: 'DATABASE_URL not set' }, { status: 503 })
  }

  const rangeKey = new URL(request.url).searchParams.get('range') || 'maand'
  const { days, bucket } = RANGES[rangeKey] || RANGES.maand
  const bucketLit = sql.raw(`'${bucket}'`)
  const win = days === null ? sql`TRUE` : sql`created_at > now() - (${days} * interval '1 day')`

  try {
    await ensurePageviewEventsTable()
    const [series, totals] = await Promise.all([
      db.execute(sql`
        SELECT website, to_char(date_trunc(${bucketLit}, created_at), 'YYYY-MM-DD') AS day, COUNT(*)::int AS count
        FROM pageview_events WHERE ${win}
        GROUP BY website, day ORDER BY day`),
      db.execute(sql`
        SELECT website,
               COUNT(*)::int AS total,
               COUNT(*) FILTER (WHERE ${win})::int AS period
        FROM pageview_events GROUP BY website ORDER BY website`)
    ])

    return NextResponse.json({
      success: true,
      range: rangeKey,
      bucket,
      series: series.rows,
      totals: totals.rows
    })
  } catch (error) {
    console.error('visitor-stats error:', error)
    return NextResponse.json({ success: false, error: 'Failed to load visitor stats' }, { status: 500 })
  }
}
