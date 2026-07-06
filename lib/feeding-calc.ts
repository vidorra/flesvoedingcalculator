/**
 * Pure feeding calculation.
 *
 * This mirrors the math in `hooks/useCalculator.ts` -> calculateFeeding(), but
 * without any alerts, analytics, or React state. It returns null for invalid
 * input instead of alerting, so callers can recompute live on every keystroke
 * (used by the /v2 calculator). The premature ml/kg logic and corrected-age
 * helper are imported from the hook so that logic stays single-source.
 *
 * NOTE: keep in sync with useCalculator.calculateFeeding if the guideline math
 * ever changes.
 */
import {
  FEEDING_AMOUNTS,
  PREMATURE_FEEDING,
  AGE_CATEGORIES,
  FEEDING_MEASUREMENTS
} from './feeding-constants'
import {
  calculateCorrectedAge,
  getPrematureMlPerKg,
  type AgeCategory,
  type CorrectedAgeData
} from '../hooks/useCalculator'

export interface FeedingInput {
  weight: string
  ageMonths: AgeCategory
  feedingsPerDay: string
  isPremature: boolean
  gestationalAge: string
  birthDate: string
  /** Combivoeding: number of daily feeds that are breastfeeds (optional).
   *  A breastfeed counts as a normal feed; only the remaining feeds are
   *  bottles, each at the regular per-feed amount. */
  breastFeedings?: string
}

export interface FeedingResult {
  dailyAmount: number
  feedingsPerDay: number
  recommendedAmount: number
  minAmount: number
  maxAmount: number
  mlPerKg: number
  weightKg: number
  isPremature: boolean
  isNewborn: boolean
  correctedAge: number | null
  ageData: CorrectedAgeData | null
  gestationalAge: string
  specialNotes: string[]
  /** Combivoeding: breast feeds per day (0 = bottle only) */
  breastFeedings: number
  /** Combivoeding: bottle feeds per day (= feedingsPerDay - breastFeedings) */
  bottleFeedings: number
  /** Combivoeding: total ml of formula to prepare per day */
  bottleDailyAmount: number
}

function roundToFive(num: number): number {
  return Math.round(num / FEEDING_MEASUREMENTS.ROUNDING_INCREMENT) * FEEDING_MEASUREMENTS.ROUNDING_INCREMENT
}

export function computeFeeding(input: FeedingInput): FeedingResult | null {
  const weightKg = parseFloat(input.weight)
  if (!input.weight || Number.isNaN(weightKg) || weightKg <= 0) return null

  let age: AgeCategory | number = input.ageMonths === '0-1' ? input.ageMonths : parseInt(input.ageMonths)
  let mlPerKg: number = FEEDING_AMOUNTS.ML_PER_KG_STANDARD
  let isNewborn = false
  let isPrematureCalculation = false
  const specialNotes: string[] = []
  let correctedAgeWeeks: number | null = null
  let ageData: CorrectedAgeData | null = null

  if (input.isPremature) {
    // Live calc: return null (no alert) until the premature fields are filled in
    if (!input.gestationalAge || !input.birthDate) return null

    isPrematureCalculation = true
    ageData = calculateCorrectedAge(input.birthDate, input.gestationalAge)
    if (!ageData) return null

    correctedAgeWeeks = ageData.correctedWeeks
    const prematureFormula = getPrematureMlPerKg(parseInt(input.gestationalAge), correctedAgeWeeks)
    mlPerKg = prematureFormula.mlPerKg
    specialNotes.push(prematureFormula.note)

    age = correctedAgeWeeks < 0 ? 0 : Math.max(0, Math.floor(correctedAgeWeeks / AGE_CATEGORIES.WEEKS_PER_MONTH))

    if (parseInt(input.gestationalAge) < PREMATURE_FEEDING.THRESHOLD_MODERATE_PREMATURE) {
      specialNotes.push('Overweeg speciale prematurenvoeding zoals Nutrilon Nenatal of Aptamil Prematil')
    }
  } else {
    mlPerKg = FEEDING_AMOUNTS.ML_PER_KG_STANDARD
    if (age === '0-1') {
      isNewborn = true
    } else if (typeof age === 'number' && age >= AGE_CATEGORIES.THRESHOLDS.SOLID_FOOD_INTRODUCTION) {
      mlPerKg = FEEDING_AMOUNTS.ML_PER_KG_AFTER_SOLIDS
      specialNotes.push('Vanaf 6 maanden: Vaste voeding vervangt geleidelijk flesvoeding')
      specialNotes.push('Melk blijft belangrijk maar hoeveelheid neemt af')
    }
  }

  const maxDaily = isPrematureCalculation ? FEEDING_AMOUNTS.MAX_DAILY_PREMATURE : FEEDING_AMOUNTS.MAX_DAILY_NORMAL
  const dailyAmount = Math.min(weightKg * mlPerKg, maxDaily)

  let feedings = parseInt(input.feedingsPerDay)
  if (isPrematureCalculation && correctedAgeWeeks !== null && correctedAgeWeeks < 0) {
    feedings = Math.max(PREMATURE_FEEDING.MIN_FEEDINGS_BEFORE_TERM, feedings)
    specialNotes.push(`Minimaal ${PREMATURE_FEEDING.MIN_FEEDINGS_BEFORE_TERM} voedingen per dag aanbevolen`)
  }

  const baseAmountPerFeeding = dailyAmount / feedings
  const recommendedAmount = roundToFive(baseAmountPerFeeding)
  const maxAmount = roundToFive(baseAmountPerFeeding * PREMATURE_FEEDING.GROWTH_SPURT_MULTIPLIER)

  // Combivoeding: breastfeeds count as regular feeds; only the remaining
  // feeds are bottles, each at the normal per-feed amount.
  const breastRaw = parseInt(input.breastFeedings || '0')
  const breastFeedings = Number.isNaN(breastRaw) ? 0 : Math.min(Math.max(breastRaw, 0), feedings)
  const bottleFeedings = feedings - breastFeedings
  const bottleDailyAmount = recommendedAmount * bottleFeedings
  if (breastFeedings > 0) {
    specialNotes.push(`Combivoeding: een borstvoeding telt als gewone voeding. Maak alleen de ${bottleFeedings} flesvoeding${bottleFeedings === 1 ? '' : 'en'} klaar.`)
    specialNotes.push('Hoeveel je baby uit de borst drinkt weet je niet exact. Kijk naar je baby (minimaal 6 natte luiers per dag, goede groei), niet alleen naar de berekening.')
  }

  return {
    dailyAmount: Math.round(dailyAmount),
    feedingsPerDay: feedings,
    recommendedAmount,
    minAmount: recommendedAmount,
    maxAmount,
    mlPerKg,
    weightKg,
    isPremature: isPrematureCalculation,
    isNewborn,
    correctedAge: isPrematureCalculation ? correctedAgeWeeks : null,
    ageData: isPrematureCalculation ? ageData : null,
    gestationalAge: input.gestationalAge,
    specialNotes,
    breastFeedings,
    bottleFeedings,
    bottleDailyAmount
  }
}
