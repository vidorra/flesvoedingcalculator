'use client'
import { useState, useEffect } from 'react'
import { trackCalculatorUsage } from '../lib/analytics'

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface FeedingScheduleItem {
  time: string
  amount: string
}

export interface CorrectedAgeData {
  correctedWeeks: number
  chronologicalWeeks: number
  weeksPremature: number
  gestationalWeeks: number
}

export interface CalculatorResults {
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
}

export type AgeCategory = 'premature' | '0-1' | '1' | '3' | '6'

// ============================================
// CONSTANTS
// ============================================

// Feeding schedule times based on number of feedings
const FEEDING_SCHEDULES: Record<number, string[]> = {
  4: ['07:00', '12:00', '17:00', '22:00'],
  5: ['07:00', '11:00', '15:00', '19:00', '23:00'],
  6: ['06:00', '10:00', '14:00', '18:00', '22:00', '02:00'],
  7: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
  8: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00', '03:00'],
  9: ['06:00', '08:30', '11:00', '13:30', '16:00', '18:30', '21:00', '23:30', '02:00'],
  10: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00']
}

// Dutch guideline: ml per kg per day
const ML_PER_KG_STANDARD = 150  // Voedingscentrum guideline
const ML_PER_KG_AFTER_SOLIDS = 100  // After 6 months with solid food

// Premature baby ml/kg values (ESPGHAN/NVK guidelines)
const PREMATURE_ML_PER_KG = {
  BEFORE_TERM: 180,      // Negative corrected age
  VERY_PREMATURE: 170,   // < 32 weeks
  MODERATE_PREMATURE: 160, // 32-34 weeks
  LATE_PREMATURE: 155    // 34+ weeks
} as const

// Maximum daily intake caps
const MAX_DAILY_NORMAL = 1000
const MAX_DAILY_PREMATURE = 1200

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Calculate premature category based on gestational age
 */
export function getPrematureCategory(weeks: string): string {
  const weeksNum = parseInt(weeks)
  if (weeksNum >= 34) {
    return 'Laat prematuur (speciale startvoeding aanbevolen)'
  } else if (weeksNum >= 32) {
    return 'Matig prematuur (prematurenvoeding nodig)'
  } else if (weeksNum >= 28) {
    return 'Zeer prematuur (NICU voeding vereist)'
  } else {
    return 'Extreem prematuur (gespecialiseerde NICU zorg)'
  }
}

/**
 * Calculate corrected age in weeks for premature babies
 * Formula: chronological age - (40 weeks - gestational weeks at birth)
 */
export function calculateCorrectedAge(birthDate: string, gestationalAge: string): CorrectedAgeData | null {
  if (!birthDate || !gestationalAge) return null

  const birth = new Date(birthDate)
  const today = new Date()
  const ageInDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24))
  const ageInWeeks = Math.floor(ageInDays / 7)

  // Corrected age = chronological age - weeks premature
  const weeksPremature = 40 - parseInt(gestationalAge)
  const correctedAgeWeeks = ageInWeeks - weeksPremature

  return {
    correctedWeeks: correctedAgeWeeks,
    chronologicalWeeks: ageInWeeks,
    weeksPremature: weeksPremature,
    gestationalWeeks: parseInt(gestationalAge)
  }
}

/**
 * Generate feeding schedule based on number of feedings and recommended amount
 */
export function generateFeedingSchedule(feedingsPerDay: number, recommendedAmount: number): FeedingScheduleItem[] {
  const times = FEEDING_SCHEDULES[feedingsPerDay] || FEEDING_SCHEDULES[5]
  return times.map(time => ({
    time,
    amount: `${recommendedAmount} ml`
  }))
}

/**
 * Round to nearest 5ml for practical use
 */
function roundToFive(num: number): number {
  return Math.round(num / 5) * 5
}

/**
 * Calculate ml/kg for premature babies based on gestational age
 */
function getPrematureMlPerKg(gestationalAge: number, correctedAgeWeeks: number): { mlPerKg: number; note: string } {
  if (correctedAgeWeeks < 0) {
    return {
      mlPerKg: PREMATURE_ML_PER_KG.BEFORE_TERM,
      note: `Baby is nog niet op termijn (${Math.abs(correctedAgeWeeks)} weken te vroeg) - gebruikt ${PREMATURE_ML_PER_KG.BEFORE_TERM}ml/kg per dag`
    }
  }

  if (gestationalAge < 32) {
    return {
      mlPerKg: PREMATURE_ML_PER_KG.VERY_PREMATURE,
      note: `Zeer premature baby - gebruikt ${PREMATURE_ML_PER_KG.VERY_PREMATURE}ml/kg per dag voor inhaalgroei`
    }
  }

  if (gestationalAge < 34) {
    return {
      mlPerKg: PREMATURE_ML_PER_KG.MODERATE_PREMATURE,
      note: `Matig premature baby - gebruikt ${PREMATURE_ML_PER_KG.MODERATE_PREMATURE}ml/kg per dag voor ontwikkeling`
    }
  }

  return {
    mlPerKg: PREMATURE_ML_PER_KG.LATE_PREMATURE,
    note: `Laat premature baby - gebruikt ${PREMATURE_ML_PER_KG.LATE_PREMATURE}ml/kg per dag (licht verhoogd)`
  }
}

// ============================================
// MAIN CALCULATOR HOOK
// ============================================

export interface UseCalculatorReturn {
  // Input state
  weight: string
  setWeight: (weight: string) => void
  ageMonths: AgeCategory
  feedingsPerDay: string
  setFeedingsPerDay: (feedings: string) => void
  results: CalculatorResults | null

  // Premature state
  isPremature: boolean
  gestationalAge: string
  birthDate: string
  setBirthDate: (date: string) => void
  correctedAge: CorrectedAgeData | null
  prematureCategory: string

  // Custom schepjes
  customAmount: string
  setCustomAmount: (amount: string) => void
  customSchepjes: number | null
  calculateCustomSchepjes: () => void

  // Actions
  handleAgeChange: (value: string) => void
  handleGestationalAgeChange: (value: string) => void
  calculateFeeding: () => void
  resetCalculator: () => void
  generateFeedingSchedule: typeof generateFeedingSchedule
}

export function useCalculator(): UseCalculatorReturn {
  // Input state
  const [weight, setWeight] = useState<string>('')
  const [ageMonths, setAgeMonths] = useState<AgeCategory>('0-1')
  const [feedingsPerDay, setFeedingsPerDay] = useState<string>('7')
  const [results, setResults] = useState<CalculatorResults | null>(null)

  // Premature baby state
  const [isPremature, setIsPremature] = useState<boolean>(false)
  const [gestationalAge, setGestationalAge] = useState<string>('')
  const [birthDate, setBirthDate] = useState<string>('')
  const [correctedAge, setCorrectedAge] = useState<CorrectedAgeData | null>(null)
  const [prematureCategory, setPrematureCategory] = useState<string>('')

  // Custom schepjes state
  const [customAmount, setCustomAmount] = useState<string>('')
  const [customSchepjes, setCustomSchepjes] = useState<number | null>(null)

  // Calculate corrected age when inputs change
  useEffect(() => {
    if (isPremature && birthDate && gestationalAge) {
      const ageData = calculateCorrectedAge(birthDate, gestationalAge)
      setCorrectedAge(ageData)
    } else {
      setCorrectedAge(null)
    }
  }, [birthDate, gestationalAge, isPremature])

  // Handle age selection change
  const handleAgeChange = (value: string): void => {
    setAgeMonths(value as AgeCategory)
    if (value === 'premature') {
      setIsPremature(true)
    } else {
      setIsPremature(false)
      setGestationalAge('')
      setBirthDate('')
      setCorrectedAge(null)
      setPrematureCategory('')
    }
  }

  // Handle gestational age change
  const handleGestationalAgeChange = (value: string): void => {
    setGestationalAge(value)
    setPrematureCategory(getPrematureCategory(value))
  }

  // Calculate custom schepjes (30ml = 1 scoop, EU regulation 2016/127)
  const calculateCustomSchepjes = (): void => {
    if (!customAmount || parseFloat(customAmount) <= 0) {
      alert('Vul een geldige hoeveelheid in')
      return
    }
    const amount = parseFloat(customAmount)
    const schepjes = Math.round((amount / 30) * 10) / 10
    setCustomSchepjes(schepjes)
  }

  // Main calculation function
  const calculateFeeding = (): void => {
    if (!weight || parseFloat(weight) <= 0) {
      alert('Vul een geldig gewicht in')
      return
    }

    const weightKg = parseFloat(weight)
    let age: AgeCategory | number = ageMonths === '0-1' ? ageMonths : parseInt(ageMonths)
    let mlPerKg = ML_PER_KG_STANDARD
    let isNewborn = false
    let isPrematureCalculation = false
    const specialNotes: string[] = []

    // Special calculation for premature babies
    let correctedAgeWeeks: number | null = null
    let ageData: CorrectedAgeData | null = null

    if (isPremature) {
      if (!gestationalAge || !birthDate) {
        const missingFields: string[] = []
        if (!gestationalAge) missingFields.push('zwangerschapsduur bij geboorte')
        if (!birthDate) missingFields.push('geboortedatum')
        alert(`Vul de volgende velden in voor premature berekening:\n• ${missingFields.join('\n• ')}`)
        return
      }

      isPrematureCalculation = true
      ageData = calculateCorrectedAge(birthDate, gestationalAge)

      if (!ageData) {
        alert('Kon gecorrigeerde leeftijd niet berekenen')
        return
      }

      correctedAgeWeeks = ageData.correctedWeeks

      // Get appropriate ml/kg for premature baby
      const prematureFormula = getPrematureMlPerKg(parseInt(gestationalAge), correctedAgeWeeks)
      mlPerKg = prematureFormula.mlPerKg
      specialNotes.push(prematureFormula.note)

      // Convert corrected age to months for age category
      if (correctedAgeWeeks < 0) {
        age = 0
      } else {
        age = Math.max(0, Math.floor(correctedAgeWeeks / 4))
      }

      // Add specific product recommendations for very premature
      if (parseInt(gestationalAge) < 34) {
        specialNotes.push('Overweeg speciale prematurenvoeding zoals Nutrilon Nenatal of Aptamil Prematil')
      }
    } else {
      // Standard Dutch guideline: 150ml/kg for all ages (Voedingscentrum)
      mlPerKg = ML_PER_KG_STANDARD

      if (age === '0-1') {
        // 0-1 month: 150ml/kg is the target, but newborns need gradual introduction
        // Note: Detailed guidance shown via inline alert in CalculatorResults (isNewborn flag)
        isNewborn = true
      } else if (typeof age === 'number' && age >= 6) {
        // After 6 months: solid food introduction reduces milk needs
        mlPerKg = ML_PER_KG_AFTER_SOLIDS
        specialNotes.push("Vanaf 6 maanden: Vaste voeding vervangt geleidelijk flesvoeding")
        specialNotes.push("Melk blijft belangrijk maar hoeveelheid neemt af")
      }
    }

    // Calculate daily amount with appropriate maximum cap
    const maxDaily = isPrematureCalculation ? MAX_DAILY_PREMATURE : MAX_DAILY_NORMAL
    const dailyAmount = Math.min(weightKg * mlPerKg, maxDaily)

    // Adjust feeding frequency for premature babies before term
    let feedings = parseInt(feedingsPerDay)
    if (isPrematureCalculation && correctedAgeWeeks !== null && correctedAgeWeeks < 0) {
      feedings = Math.max(8, feedings) // Minimum 8 feedings for very premature
      specialNotes.push('Minimaal 8 voedingen per dag aanbevolen')
    }

    const baseAmountPerFeeding = dailyAmount / feedings

    // Calculate range (recommended and growth spurt maximum)
    const recommendedAmount = roundToFive(baseAmountPerFeeding)
    const minAmount = recommendedAmount
    const maxAmount = roundToFive(baseAmountPerFeeding * 1.3)

    // Track calculator usage for analytics
    if (isPrematureCalculation) {
      trackCalculatorUsage('premature_calculator', {
        weight: weightKg,
        gestational_age: gestationalAge,
        corrected_age: correctedAgeWeeks
      })
    } else {
      trackCalculatorUsage('feeding_calculator', {
        weight: weightKg,
        age_months: age,
        feedings_per_day: feedings
      })
    }

    setResults({
      dailyAmount: Math.round(dailyAmount),
      feedingsPerDay: feedings,
      recommendedAmount,
      minAmount,
      maxAmount,
      mlPerKg,
      weightKg,
      isPremature: isPrematureCalculation,
      isNewborn,
      correctedAge: isPrematureCalculation ? correctedAgeWeeks : null,
      ageData: isPrematureCalculation ? ageData : null,
      gestationalAge,
      specialNotes
    })
  }

  // Reset calculator to initial state
  const resetCalculator = (): void => {
    setWeight('')
    setAgeMonths('0-1')
    setFeedingsPerDay('7')
    setResults(null)
    setIsPremature(false)
    setGestationalAge('')
    setBirthDate('')
    setCorrectedAge(null)
    setPrematureCategory('')
    setCustomAmount('')
    setCustomSchepjes(null)
  }

  return {
    // Input state
    weight,
    setWeight,
    ageMonths,
    feedingsPerDay,
    setFeedingsPerDay,
    results,

    // Premature state
    isPremature,
    gestationalAge,
    birthDate,
    setBirthDate,
    correctedAge,
    prematureCategory,

    // Custom schepjes
    customAmount,
    setCustomAmount,
    customSchepjes,
    calculateCustomSchepjes,

    // Actions
    handleAgeChange,
    handleGestationalAgeChange,
    calculateFeeding,
    resetCalculator,
    generateFeedingSchedule
  }
}
