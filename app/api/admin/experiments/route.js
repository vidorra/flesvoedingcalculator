import { NextResponse } from 'next/server'
import { sql } from 'drizzle-orm'
import { db } from '../../../../lib/db/connection.js'
import { ensureExperimentTables } from '../../../../lib/db/ensure-events.js'
import { verifyAdminAndGetWebsite } from '../../../../lib/jwt-utils.js'
import { EXPERIMENTS, getExperimentDefinition, DECISION_RULE } from '../../../../lib/experiments-config'
import { probBBeatsA, wilsonInterval, assignmentPValue } from '../../../../lib/experiment-stats'

export const dynamic = 'force-dynamic'

const DAY_MS = 24 * 60 * 60 * 1000

function auth(request) {
  try {
    verifyAdminAndGetWebsite(request)
    return null
  } catch {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }
}

function defaultArms(def) {
  return def.arms.map((a) => ({ id: a.id, weight: 50 }))
}

// Per variant: aantal paginaladingen met een berekening, hoeveel daarvan het
// productblok in beeld kregen en hoeveel minstens één keer klikten.
async function loadResults(def, row) {
  if (!row?.started_at) return null
  const from = new Date(row.started_at).toISOString()
  const to = (row.ended_at ? new Date(row.ended_at) : new Date()).toISOString()

  const result = await db.execute(sql`
    WITH calc AS (
      SELECT DISTINCT data->>'arm' AS arm, data->>'pv' AS pv
      FROM calculator_events
      WHERE website = ${def.website}
        AND data->>'exp' = ${def.key}
        AND data->>'pv' IS NOT NULL
        AND created_at >= ${from}::timestamptz
        AND created_at <= ${to}::timestamptz
    )
    SELECT c.arm,
      COUNT(*)::int AS calcs,
      COUNT(*) FILTER (WHERE EXISTS (
        SELECT 1 FROM impression_events i
        WHERE i.website = ${def.website} AND i.exp = ${def.key} AND i.pv = c.pv
      ))::int AS seen,
      COUNT(*) FILTER (WHERE EXISTS (
        SELECT 1 FROM click_events k
        WHERE k.website = ${def.website} AND k.exp = ${def.key} AND k.pv = c.pv
      ))::int AS clicked
    FROM calc c
    GROUP BY c.arm`)

  const byArm = {}
  for (const r of result.rows) byArm[r.arm] = r

  const arms = def.arms.map((a) => {
    const r = byArm[a.id] || { calcs: 0, seen: 0, clicked: 0 }
    const n = Number(r.calcs)
    const x = Number(r.clicked)
    const [lo, hi] = wilsonInterval(x, n)
    return { id: a.id, label: a.label, calcs: n, seen: Number(r.seen), clicked: x, rate: n ? x / n : 0, interval: [lo, hi] }
  })

  const [A, B] = arms
  const days = Math.floor((new Date(to).getTime() - new Date(from).getTime()) / DAY_MS)
  const weights = (Array.isArray(row.arms) ? row.arms : defaultArms(def)).map((a) => Number(a.weight) || 0)
  const pAssign = assignmentPValue(arms.map((a) => a.calcs), weights)
  const probB = A.calcs > 0 && B.calcs > 0 ? probBBeatsA(A.clicked, A.calcs, B.clicked, B.calcs) : null

  // Beslisregel uit het plan
  let verdict
  const srm = A.calcs + B.calcs >= 100 && pAssign < 0.001
  if (srm) {
    verdict = { code: 'srm', text: 'De verdeling over de varianten wijkt sterk af van de instelling. De meting klopt niet; deze uitslag telt niet.' }
  } else if (days < DECISION_RULE.minDays || Math.min(A.calcs, B.calcs) < DECISION_RULE.minCalculationsPerArm) {
    verdict = days >= DECISION_RULE.maxDays
      ? { code: 'timeout', text: 'Twaalf weken voorbij zonder genoeg data: geen aantoonbaar verschil. Jens kiest zelf.' }
      : { code: 'too_little', text: `Nog te weinig data. Oordeel vanaf dag ${DECISION_RULE.minDays} en ${DECISION_RULE.minCalculationsPerArm} berekeningen per variant.` }
  } else if (probB !== null && probB >= DECISION_RULE.winThreshold) {
    verdict = { code: 'b_wins', text: 'Voldoende data. B wint volgens de beslisregel.' }
  } else if (probB !== null && probB <= DECISION_RULE.loseThreshold) {
    verdict = { code: 'a_stays', text: 'Voldoende data. A blijft volgens de beslisregel.' }
  } else if (days >= DECISION_RULE.maxDays) {
    verdict = { code: 'timeout', text: 'Twaalf weken voorbij: geen aantoonbaar verschil. Jens kiest zelf.' }
  } else {
    verdict = { code: 'undecided', text: 'Voldoende data, nog geen duidelijk verschil. Laat het experiment doorlopen.' }
  }

  return { from, to, days, arms, probBBeatsA: probB, assignmentP: pAssign, verdict }
}

// GET - experimenten uit de code, aangevuld met status en resultaten
export async function GET(request) {
  const denied = auth(request)
  if (denied) return denied

  try {
    await ensureExperimentTables()
    const rows = await db.execute(sql`SELECT * FROM experiments`)
    const byKey = {}
    for (const r of rows.rows) byKey[`${r.website}:${r.key}`] = r

    const experiments = []
    for (const def of EXPERIMENTS) {
      const row = byKey[`${def.website}:${def.key}`]
      experiments.push({
        key: def.key,
        website: def.website,
        title: def.title,
        description: def.description,
        armDefs: def.arms,
        status: row?.status || 'draft',
        arms: Array.isArray(row?.arms) ? row.arms : defaultArms(def),
        winner: row?.winner || null,
        startedAt: row?.started_at || null,
        endedAt: row?.ended_at || null,
        results: await loadResults(def, row)
      })
    }
    return NextResponse.json({ success: true, experiments, rule: DECISION_RULE })
  } catch (error) {
    console.error('admin/experiments GET error:', error)
    return NextResponse.json({ success: false, error: 'Failed to load experiments' }, { status: 500 })
  }
}

// PUT - { key, action: 'start' | 'pause' | 'weights' | 'finish', weights?, winner? }
export async function PUT(request) {
  const denied = auth(request)
  if (denied) return denied

  try {
    const body = await request.json().catch(() => null)
    const def = body && typeof body.key === 'string' ? getExperimentDefinition(body.key) : undefined
    if (!def) {
      return NextResponse.json({ success: false, error: 'Onbekend experiment' }, { status: 400 })
    }

    await ensureExperimentTables()
    const existing = await db.execute(sql`
      SELECT * FROM experiments WHERE website = ${def.website} AND key = ${def.key}`)
    const row = existing.rows[0]
    const arms = Array.isArray(row?.arms) ? row.arms : defaultArms(def)

    if (!row) {
      await db.execute(sql`
        INSERT INTO experiments (website, key, status, arms)
        VALUES (${def.website}, ${def.key}, 'draft', ${JSON.stringify(arms)}::jsonb)`)
    }

    switch (body.action) {
      case 'start': {
        // Opnieuw starten na een afgerond experiment begint een nieuwe meting.
        const fresh = !row?.started_at || row.status === 'finished'
        if (fresh) {
          await db.execute(sql`
            UPDATE experiments SET status = 'running', winner = NULL, started_at = now(),
              ended_at = NULL, updated_at = now()
            WHERE website = ${def.website} AND key = ${def.key}`)
        } else {
          await db.execute(sql`
            UPDATE experiments SET status = 'running', updated_at = now()
            WHERE website = ${def.website} AND key = ${def.key}`)
        }
        break
      }
      case 'pause':
        await db.execute(sql`
          UPDATE experiments SET status = 'paused', updated_at = now()
          WHERE website = ${def.website} AND key = ${def.key}`)
        break
      case 'weights': {
        const w = Array.isArray(body.weights) ? body.weights.map(Number) : []
        const valid = w.length === def.arms.length
          && w.every((n) => Number.isInteger(n) && n >= 0 && n <= 100)
          && w.reduce((s, n) => s + n, 0) === 100
        if (!valid) {
          return NextResponse.json({ success: false, error: 'Verdeling moet uit hele getallen bestaan die samen 100 zijn' }, { status: 400 })
        }
        const next = def.arms.map((a, i) => ({ id: a.id, weight: w[i] }))
        await db.execute(sql`
          UPDATE experiments SET arms = ${JSON.stringify(next)}::jsonb, updated_at = now()
          WHERE website = ${def.website} AND key = ${def.key}`)
        break
      }
      case 'finish': {
        if (!def.arms.some((a) => a.id === body.winner)) {
          return NextResponse.json({ success: false, error: 'Kies een winnaar' }, { status: 400 })
        }
        await db.execute(sql`
          UPDATE experiments SET status = 'finished', winner = ${body.winner},
            ended_at = now(), updated_at = now()
          WHERE website = ${def.website} AND key = ${def.key}`)
        break
      }
      default:
        return NextResponse.json({ success: false, error: 'Onbekende actie' }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('admin/experiments PUT error:', error)
    return NextResponse.json({ success: false, error: 'Failed to update experiment' }, { status: 500 })
  }
}
