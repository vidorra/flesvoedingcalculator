/**
 * Rekenhulp voor vaste tabellen (schemapagina, leeftijdspagina's, homepage).
 *
 * Dezelfde rekenregel als computeFeeding() in lib/feeding-calc.ts voor een
 * voldragen baby zonder combivoeding, maar zonder de import uit de
 * client-hook, zodat servercomponenten hem kunnen gebruiken.
 * scripts/check-feeding-table.ts controleert dat beide gelijk uitkomen.
 */
import { FEEDING_AMOUNTS, FEEDING_MEASUREMENTS, FEEDING_SCHEDULES } from './feeding-constants'

export interface TableRow {
  weightKg: number
  /** ml per dag, zoals de calculator hem toont */
  daily: number
  /** ml per voeding, afgerond op 5 ml */
  perFeed: number
  /** schepjes per voeding, 1 decimaal */
  scoops: string
}

/** Leeftijd in maanden; vanaf 6 maanden rekent de calculator met 100 ml per kilo. */
export function mlPerKgForMonths(ageMonths: number): number {
  return ageMonths >= 6 ? FEEDING_AMOUNTS.ML_PER_KG_AFTER_SOLIDS : FEEDING_AMOUNTS.ML_PER_KG_STANDARD
}

function roundToFive(n: number): number {
  const step = FEEDING_MEASUREMENTS.ROUNDING_INCREMENT
  return Math.round(n / step) * step
}

export function feedingRow(weightKg: number, feedingsPerDay: number, ageMonths = 0): TableRow {
  const raw = Math.min(weightKg * mlPerKgForMonths(ageMonths), FEEDING_AMOUNTS.MAX_DAILY_NORMAL)
  const perFeed = roundToFive(raw / feedingsPerDay)
  return {
    weightKg,
    daily: Math.round(raw),
    perFeed,
    scoops: (perFeed / FEEDING_MEASUREMENTS.SCOOP_SIZE_ML).toFixed(1)
  }
}

/** Gewichten van `from` t/m `to` in stappen van `step` kg. */
export function weightSteps(from: number, to: number, step = 0.5): number[] {
  const out: number[] = []
  for (let w = from; w <= to + 1e-9; w += step) out.push(Math.round(w * 10) / 10)
  return out
}

/** Nederlandse notatie: 4.5 -> "4,5" */
export function nl(n: number, decimals?: number): string {
  const s = decimals === undefined ? String(n) : n.toFixed(decimals)
  return s.replace('.', ',')
}

/** Schepjes leesbaar: "3,0" -> "3", "2,5" -> "2,5" */
export function scoopsLabel(scoops: string): string {
  const n = parseFloat(scoops)
  return Number.isInteger(n) ? String(n) : nl(n, 1)
}

export type ScheduleCount = keyof typeof FEEDING_SCHEDULES

/** Voorbeeldtijden uit dezelfde tabel als de calculator. */
export function scheduleTimes(feedingsPerDay: number): readonly string[] {
  const key = Math.min(10, Math.max(4, Math.round(feedingsPerDay))) as ScheduleCount
  return FEEDING_SCHEDULES[key]
}
