/**
 * Feeding Constants Configuration
 *
 * This file contains all magic numbers and constants for the bottle feeding calculator.
 * Values are based on Dutch guidelines from Voedingscentrum and international standards
 * (ESPGHAN, NVK, EU regulations).
 */

/**
 * Standard feeding amounts (Dutch Voedingscentrum guideline)
 */
export const FEEDING_AMOUNTS = {
  /** Standard daily amount: 150ml per kg body weight */
  ML_PER_KG_STANDARD: 150,

  /** Reduced amount after 6 months when introducing solid food */
  ML_PER_KG_AFTER_SOLIDS: 100,

  /** Maximum daily intake for normal term babies */
  MAX_DAILY_NORMAL: 1000,

  /** Maximum daily intake for premature babies (higher needs) */
  MAX_DAILY_PREMATURE: 1200,
} as const

/**
 * Premature baby specific amounts
 * Source: ESPGHAN/NVK guidelines for catch-up growth
 */
export const PREMATURE_FEEDING = {
  /** Negative corrected age (not yet at term) - highest needs for catch-up */
  ML_PER_KG_BEFORE_TERM: 180,

  /** Very premature (<32 weeks) - significant catch-up needs */
  ML_PER_KG_VERY_PREMATURE: 170,

  /** Moderately premature (32-34 weeks) - moderate catch-up needs */
  ML_PER_KG_MODERATE_PREMATURE: 160,

  /** Late premature (34+ weeks) - minimal catch-up needs */
  ML_PER_KG_LATE_PREMATURE: 155,

  /** Gestational age threshold for "very premature" classification */
  THRESHOLD_VERY_PREMATURE: 32,

  /** Gestational age threshold for "moderate premature" classification */
  THRESHOLD_MODERATE_PREMATURE: 34,

  /** Gestational age threshold for "early premature" classification */
  THRESHOLD_EARLY_PREMATURE: 28,

  /** Standard term length at birth */
  TERM_LENGTH_WEEKS: 40,

  /** Minimum number of feedings for babies before term */
  MIN_FEEDINGS_BEFORE_TERM: 8,

  /** Feeding frequency multiplier for growth spurts (130% of recommended) */
  GROWTH_SPURT_MULTIPLIER: 1.3,
} as const

/**
 * Feeding measurement standards
 */
export const FEEDING_MEASUREMENTS = {
  /** EU standard formula scoop size (EU Regulation 2016/127) */
  SCOOP_SIZE_ML: 30,

  /** Rounding increment for practical measurement (5ml increments) */
  ROUNDING_INCREMENT: 5,

  /** Default number of scoops precision (1 decimal place) */
  SCOOP_DECIMAL_PLACES: 10,
} as const

/**
 * Age category constants
 */
export const AGE_CATEGORIES = {
  /** Weeks per month for corrected age calculation */
  WEEKS_PER_MONTH: 4,

  /** Youngest age category label */
  NEWBORN_LABEL: '0-1',

  /** Premature category label */
  PREMATURE_LABEL: 'premature',

  /** Age thresholds for category changes */
  THRESHOLDS: {
    /** At 6 months, transition to reduced milk with solid food */
    SOLID_FOOD_INTRODUCTION: 6,
  },
} as const

/**
 * Feeding schedule templates
 * Times are in HH:MM format (24-hour)
 */
export const FEEDING_SCHEDULES = {
  4: ['07:00', '12:00', '17:00', '22:00'],
  5: ['07:00', '11:00', '15:00', '19:00', '23:00'],
  6: ['06:00', '10:00', '14:00', '18:00', '22:00', '02:00'],
  7: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
  8: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00', '03:00'],
  9: ['06:00', '08:30', '11:00', '13:30', '16:00', '18:30', '21:00', '23:30', '02:00'],
  10: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00'],
} as const

/**
 * Helper function to get ml/kg for premature babies
 */
export function getPrematureMlPerKgValue(
  gestationalAge: number,
  correctedAgeWeeks: number
): { mlPerKg: number; category: string } {
  if (correctedAgeWeeks < 0) {
    return {
      mlPerKg: PREMATURE_FEEDING.ML_PER_KG_BEFORE_TERM,
      category: 'before-term',
    }
  }

  if (gestationalAge < PREMATURE_FEEDING.THRESHOLD_VERY_PREMATURE) {
    return {
      mlPerKg: PREMATURE_FEEDING.ML_PER_KG_VERY_PREMATURE,
      category: 'very-premature',
    }
  }

  if (gestationalAge < PREMATURE_FEEDING.THRESHOLD_MODERATE_PREMATURE) {
    return {
      mlPerKg: PREMATURE_FEEDING.ML_PER_KG_MODERATE_PREMATURE,
      category: 'moderate-premature',
    }
  }

  return {
    mlPerKg: PREMATURE_FEEDING.ML_PER_KG_LATE_PREMATURE,
    category: 'late-premature',
  }
}

/**
 * Helper function to round to feeding measurement increment
 */
export function roundToFeedingIncrement(value: number): number {
  return Math.round(value / FEEDING_MEASUREMENTS.ROUNDING_INCREMENT) * FEEDING_MEASUREMENTS.ROUNDING_INCREMENT
}
