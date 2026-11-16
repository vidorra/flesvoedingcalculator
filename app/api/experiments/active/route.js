import { NextResponse } from 'next/server'
import { sql } from 'drizzle-orm'
import { db } from '../../../../lib/db/connection.js'
import { ensureExperimentTables } from '../../../../lib/db/ensure-events.js'

export const dynamic = 'force-dynamic'

const WEBSITE = 'flesvoedingcalculator'

// Een minuut in het geheugen houden: elke paginalading vraagt dit op.
let cache = { at: 0, body: null }
const TTL_MS = 60_000

// GET - lopende en afgeronde experimenten, voor de loting in de browser.
// { experiments: { [key]: { status, arms: [{id, weight}], winner, started } } }
export async function GET() {
  const headers = { 'Cache-Control': 'public, max-age=60' }
  if (cache.body && Date.now() - cache.at < TTL_MS) {
    return NextResponse.json(cache.body, { headers })
  }

  const body = { experiments: {} }
  try {
    if (process.env.DATABASE_URL) {
      await ensureExperimentTables()
      const result = await db.execute(sql`
        SELECT key, status, arms, winner, started_at FROM experiments
        WHERE website = ${WEBSITE} AND status IN ('running', 'finished')`)
      for (const row of result.rows) {
        body.experiments[row.key] = {
          status: row.status,
          arms: Array.isArray(row.arms) ? row.arms : [],
          winner: row.winner || null,
          // Bij een herstart een nieuwe waarde: de browser loot dan opnieuw
          started: row.started_at ? new Date(row.started_at).toISOString() : null
        }
      }
    }
    cache = { at: Date.now(), body }
  } catch (error) {
    console.error('experiments/active error:', error)
  }
  return NextResponse.json(body, { headers })
}
