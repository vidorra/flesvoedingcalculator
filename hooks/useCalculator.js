'use client'
import { useState, useEffect } from 'react'
import { trackCalculatorUsage } from '../lib/analytics'

// Feeding schedule times based on number of feedings
const FEEDING_SCHEDULES = {
  4: ['07:00', '12:00', '17:00', '22:00'],
  5: ['07:00', '11:00', '15:00', '19:00', '23:00'],
  6: ['06:00', '10:00', '14:00', '18:00', '22:00', '02:00'],
  7: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
  8: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00', '03:00'],
  9: ['06:00', '08:30', '11:00', '13:30', '16:00', '18:30', '21:00', '23:30', '02:00'],
  10: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00']
}

// Calculate premature category based on gestational age
export function getPrematureCategory(weeks) {
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

// Calculate corrected age in weeks
export function calculateCorrectedAge(birthDate, gestationalAge) {
  if (!birthDate || !gestationalAge) return null

  const birth = new Date(birthDate)
  const today = new Date()
  const ageInDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24))
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

// Generate feeding schedule
export function generateFeedingSchedule(feedingsPerDay, recommendedAmount) {
  const times = FEEDING_SCHEDULES[feedingsPerDay] || FEEDING_SCHEDULES[5]
  return times.map(time => ({
    time,
    amount: `${recommendedAmount} ml`
  }))
}

// Round to nearest 5ml
function roundToFive(num) {
  return Math.round(num / 5) * 5
}

// Main calculator hook
export function useCalculator() {
  // Input state
  const [weight, setWeight] = useState('')
  const [ageMonths, setAgeMonths] = useState('0-1')
  const [feedingsPerDay, setFeedingsPerDay] = useState('7')
  const [results, setResults] = useState(null)

  // Premature baby state
  const [isPremature, setIsPremature] = useState(false)
  const [gestationalAge, setGestationalAge] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [correctedAge, setCorrectedAge] = useState(null)
  const [prematureCategory, setPrematureCategory] = useState('')

  // Custom schepjes state
  const [customAmount, setCustomAmount] = useState('')
  const [customSchepjes, setCustomSchepjes] = useState(null)

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
  const handleAgeChange = (value) => {
    setAgeMonths(value)
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
  const handleGestationalAgeChange = (value) => {
    setGestationalAge(value)
    setPrematureCategory(getPrematureCategory(value))
  }

  // Calculate custom schepjes
  const calculateCustomSchepjes = () => {
    if (!customAmount || customAmount <= 0) {
      alert('Vul een geldige hoeveelheid in')
      return
    }
    const amount = parseFloat(customAmount)
    const schepjes = Math.round((amount / 30) * 10) / 10
    setCustomSchepjes(schepjes)
  }

  // Main calculation function
  const calculateFeeding = () => {
    if (!weight || weight <= 0) {
      alert('Vul een geldig gewicht in')
      return
    }

    const weightKg = parseFloat(weight)
    let age = ageMonths === '0-1' ? ageMonths : parseInt(ageMonths)
    let mlPerKg = 150
    let isNewborn = false  // Flag for 0-1 month to show special alert
    let isPrematureCalculation = false
    let specialNotes = []

    // Special calculation for premature babies
    let correctedAgeWeeks = null
    let ageData = null

    if (isPremature) {
      if (!gestationalAge || !birthDate) {
        const missingFields = []
        if (!gestationalAge) missingFields.push('zwangerschapsduur bij geboorte')
        if (!birthDate) missingFields.push('geboortedatum')
        alert(`Vul de volgende velden in voor premature berekening:\n• ${missingFields.join('\n• ')}`)
        return
      }

      isPrematureCalculation = true
      ageData = calculateCorrectedAge(birthDate, gestationalAge)
      correctedAgeWeeks = ageData.correctedWeeks

      // Convert corrected age to months for calculation
      if (correctedAgeWeeks < 0) {
        // Still before term - use special premature formula
        mlPerKg = 180 // Higher needs for very premature
        age = 0
        specialNotes.push(`Baby is nog niet op termijn (${Math.abs(correctedAgeWeeks)} weken te vroeg) - gebruikt ${mlPerKg}ml/kg per dag`)
      } else {
        // Use corrected age in months
        age = Math.max(0, Math.floor(correctedAgeWeeks / 4))

        // Premature babies need more nutrition
        if (parseInt(gestationalAge) < 32) {
          mlPerKg = 170 // Very premature
          specialNotes.push(`Zeer premature baby - gebruikt ${mlPerKg}ml/kg per dag voor inhaalgroei`)
        } else if (parseInt(gestationalAge) < 34) {
          mlPerKg = 160 // Moderately premature
          specialNotes.push(`Matig premature baby - gebruikt ${mlPerKg}ml/kg per dag voor ontwikkeling`)
        } else {
          mlPerKg = 155 // Late premature
          specialNotes.push(`Laat premature baby - gebruikt ${mlPerKg}ml/kg per dag (licht verhoogd)`)
        }
      }

      // Add specific product recommendations
      if (parseInt(gestationalAge) < 34) {
        specialNotes.push('Overweeg speciale prematurenvoeding zoals Nutrilon Nenatal of Aptamil Prematil')
      }
    } else {
      // Standard Dutch guideline: 150ml/kg for all ages (Voedingscentrum)
      mlPerKg = 150  // Official Dutch guideline for all ages

      if (age === '0-1') {
        // 0-1 month: 150ml/kg is the target, but newborns need gradual introduction
        isNewborn = true
        specialNotes.push("Eerste dagen: Start met 10-15ml per voeding, verhoog dagelijks met ca. 10ml")
        specialNotes.push("Let op verzadigingssignalen: baby duwt fles weg = vol")
        specialNotes.push("Voeding om de 2-3 uur, 8-12x per dag in eerste weken")
        specialNotes.push("Raadpleeg uw verloskundige of consultatiebureau bij vragen")
      } else if (age >= 6) {
        // After 6 months: solid food introduction reduces milk needs
        mlPerKg = 100  // Reduced due to solid food
        specialNotes.push("Vanaf 6 maanden: Vaste voeding vervangt geleidelijk flesvoeding")
        specialNotes.push("Melk blijft belangrijk maar hoeveelheid neemt af")
      }
    }

    // Calculate daily amount with premature maximum
    const maxDaily = isPrematureCalculation ? 1200 : 1000
    const dailyAmount = Math.min(weightKg * mlPerKg, maxDaily)

    // Adjust feeding frequency for premature babies
    let feedings = parseInt(feedingsPerDay)
    if (isPrematureCalculation && correctedAgeWeeks < 0) {
      feedings = Math.max(8, feedings) // Minimum 8 feedings for very premature
      specialNotes.push('Minimaal 8 voedingen per dag aanbevolen')
    }

    const baseAmountPerFeeding = dailyAmount / feedings

    // Calculate range
    const recommendedAmount = roundToFive(baseAmountPerFeeding)
    const minAmount = recommendedAmount
    const maxAmount = roundToFive(baseAmountPerFeeding * 1.3)

    // Track calculator usage
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
      isNewborn: isNewborn,  // Flag for 0-1 month alert
      correctedAge: isPrematureCalculation ? correctedAgeWeeks : null,
      ageData: isPrematureCalculation ? ageData : null,
      gestationalAge: gestationalAge,
      specialNotes: specialNotes
    })
  }

  // Reset calculator
  const resetCalculator = () => {
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
