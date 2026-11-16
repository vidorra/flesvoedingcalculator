import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { sql } from 'drizzle-orm'
import { db } from '../../../lib/db/connection.js'
import { ensureExperimentTables } from '../../../lib/db/ensure-events.js'
import { checkTrackRate, bodyTooLarge } from '../../../lib/track-guard.js'
import { EXP_TOKEN } from '../../../lib/experiments-config'

export const dynamic = 'force-dynamic'

const WEBSITE = 'flesvoedingcalculator'

// POST - een productblok was minstens een seconde voor de helft in beeld.
// Anoniem: plek, experiment, variant en het paginaladingskenmerk.
export async function POST(request) {
  try {
    if (bodyTooLarge(request)) {
      return NextResponse.json({ success: false, error: 'Body too large' }, { status: 413 })
    }
    const rate = checkTrackRate(request)
    if (!rate.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(rate.retryAfter) } }
      )
    }

    const body = await request.json().catch(() => null)
    const token = (v) => (typeof v === 'string' && EXP_TOKEN.test(v) ? v : null)
    const placement = token(body?.placement)
    if (!placement) {
      return NextResponse.json({ success: false, error: 'Invalid placement' }, { status: 400 })
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, stored: false })
    }

    await ensureExperimentTables()
    await db.execute(sql`
      INSERT INTO impression_events (id, website, placement, exp, arm, pv)
      VALUES (${randomUUID()}, ${WEBSITE}, ${placement}, ${token(body.exp)}, ${token(body.arm)}, ${token(body.pv)})`)

    return NextResponse.json({ success: true, stored: true })
  } catch (error) {
    console.error('track-impression error:', error)
    return NextResponse.json({ success: false, error: 'Failed to record impression' }, { status: 500 })
  }
}
