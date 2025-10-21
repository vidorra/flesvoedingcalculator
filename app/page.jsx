'use client'
// Force rebuild after server space cleanup
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import { generateCalculatorSchema, generateOrganizationSchema, generateFAQSchema } from '../lib/structured-data'
import { trackCalculatorUsage } from '../lib/analytics'
import { Baby, Calculator, Info, Clock, ChevronDown, ChevronUp, AlertCircle, HelpCircle } from 'lucide-react'

// Helper function to generate feeding schedule
const generateFeedingSchedule = (feedingsPerDay, recommendedAmount, maxAmount) => {
  const schedules = {
    4: ['07:00', '12:00', '17:00', '22:00'],
    5: ['07:00', '11:00', '15:00', '19:00', '23:00'],
    6: ['06:00', '10:00', '14:00', '18:00', '22:00', '02:00'],
    7: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
    8: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00', '03:00'],
    9: ['06:00', '08:30', '11:00', '13:30', '16:00', '18:30', '21:00', '23:30', '02:00'],
    10: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00']
  }
  
  const times = schedules[feedingsPerDay] || schedules[5]
  return times.map(time => ({ 
    time, 
    amount: `${recommendedAmount} ml` 
  }))
}

// Calculate premature category based on gestational age
const calculatePrematureCategory = (weeks, setPrematureCategory) => {
  const weeksNum = parseInt(weeks);
  if (weeksNum >= 34) {
    setPrematureCategory('Laat prematuur (speciale startvoeding aanbevolen)');
  } else if (weeksNum >= 32) {
    setPrematureCategory('Matig prematuur (prematurenvoeding nodig)');
  } else if (weeksNum >= 28) {
    setPrematureCategory('Zeer prematuur (NICU voeding vereist)');
  } else {
    setPrematureCategory('Extreem prematuur (gespecialiseerde NICU zorg)');
  }
};

// Calculate corrected age in weeks
const calculateCorrectedAge = (birthDate, gestationalAge) => {
  if (!birthDate || !gestationalAge) return null;
  
  const birth = new Date(birthDate);
  const today = new Date();
  const ageInDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24));
  const ageInWeeks = Math.floor(ageInDays / 7);
  
  // Corrected age = chronological age - weeks premature
  const weeksPremature = 40 - parseInt(gestationalAge);
  const correctedAgeWeeks = ageInWeeks - weeksPremature;
  
  return {
    correctedWeeks: correctedAgeWeeks,
    chronologicalWeeks: ageInWeeks,
    weeksPremature: weeksPremature,
    gestationalWeeks: parseInt(gestationalAge)
  };
};

export default function HomePage() {
  const [weight, setWeight] = useState('')
  const [ageMonths, setAgeMonths] = useState('2-4weeks')
  const [feedingsPerDay, setFeedingsPerDay] = useState('7')
  const [results, setResults] = useState(null)
  const [showDetails, setShowDetails] = useState(false)
  
  // Premature baby state variables
  const [isPremature, setIsPremature] = useState(false)
  const [gestationalAge, setGestationalAge] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [correctedAge, setCorrectedAge] = useState(null)
  const [prematureCategory, setPrematureCategory] = useState('')
  const [showTooltip, setShowTooltip] = useState(false)
  const [showSchepjesTooltip, setShowSchepjesTooltip] = useState(false)
  const [showMedicalTooltip, setShowMedicalTooltip] = useState(false)
  const [showSourcesTooltip, setShowSourcesTooltip] = useState(false)
  const [customAmount, setCustomAmount] = useState('')
  const [customSchepjes, setCustomSchepjes] = useState(null)
  const [showCustomInput, setShowCustomInput] = useState(false)

  // Use effect to calculate corrected age when inputs change
  useEffect(() => {
    if (isPremature && birthDate && gestationalAge) {
      const ageData = calculateCorrectedAge(birthDate, gestationalAge);
      setCorrectedAge(ageData);
    } else {
      setCorrectedAge(null);
    }
  }, [birthDate, gestationalAge, isPremature]);

  // Close tooltips when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showTooltip && !event.target.closest('.tooltip-container')) {
        setShowTooltip(false);
      }
      if (showMedicalTooltip && !event.target.closest('.medical-tooltip-container')) {
        setShowMedicalTooltip(false);
      }
      if (showSourcesTooltip && !event.target.closest('.sources-tooltip-container')) {
        setShowSourcesTooltip(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTooltip, showMedicalTooltip, showSourcesTooltip]);
  
  // Helper function to calculate custom schepjes
  const calculateCustomSchepjes = () => {
    if (!customAmount || customAmount <= 0) {
      alert('Vul een geldige hoeveelheid in')
      return
    }
    const amount = parseFloat(customAmount)
    const schepjes = Math.round((amount / 30) * 10) / 10
    setCustomSchepjes(schepjes)
  }

  const calculateFeeding = () => {
    if (!weight || weight <= 0) {
      alert('Vul een geldig gewicht in')
      return
    }

    const weightKg = parseFloat(weight)
    let age = ageMonths === '0-2weeks' || ageMonths === '2-4weeks' ? ageMonths : parseInt(ageMonths)
    let mlPerKg = 150
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
      // Standard age-based adjustment with granular newborn categories
      if (age === '0-2weeks') {
        mlPerKg = 75;  // Very conservative for first 2 weeks
        specialNotes.push("Eerste 2 weken: Begin met 10-20ml per voeding, bouw langzaam op");
        specialNotes.push("Raadpleeg uw verloskundige of consultatiebureau bij vragen");
        specialNotes.push("Let goed op verzadigingssignalen: baby duwt fles weg = vol");
        specialNotes.push("Voeding om de 2-3 uur, 8-12x per dag");
        specialNotes.push("Als baby veel spuugt: geef minder per voeding, vaker voeden");
      } else if (age === '2-4weeks') {
        mlPerKg = 115;  // Transition period to full feeding
        specialNotes.push("Opbouwperiode: Geleidelijk verhogen naar 30-60ml per voeding");
        specialNotes.push("Bij twijfel over gewichtstoename: raadpleeg consultatiebureau");
        specialNotes.push("Baby's maag is nog klein - respecteer verzadigingssignalen");
        specialNotes.push("7-10 voedingen per dag, om de 2,5-3 uur");
      } else {
        // Simplified age categories - larger ranges with meaningful differences
        if (age >= 1) mlPerKg = 150  // 1-3 months
        if (age >= 3) mlPerKg = 125  // 3-6 months (significant 25ml/kg drop)
        if (age >= 6) mlPerKg = 100  // 6+ months (solid food introduction)
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
    
    // Round to nearest 5ml
    const roundToFive = (num) => Math.round(num / 5) * 5
    
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
      correctedAge: isPrematureCalculation ? correctedAgeWeeks : null,
      ageData: isPrematureCalculation ? ageData : null,
      gestationalAge: gestationalAge,
      specialNotes: specialNotes
    })
  }

  // FAQ data for structured data
  const faqData = [
    {
      question: "Hoeveel flesvoeding heeft mijn baby nodig?",
      answer: "De Nederlandse richtlijn is 150ml per kilogram lichaamsgewicht per dag, verdeeld over meerdere voedingen. Dit kan variëren per baby en leeftijd."
    },
    {
      question: "Hoe vaak moet ik mijn baby voeden?",
      answer: "Pasgeboren baby's hebben meestal 6-8 voedingen per dag nodig. Naarmate ze groeien, neemt dit af tot 4-6 voedingen per dag."
    },
    {
      question: "Is deze calculator betrouwbaar?",
      answer: "Ja, onze calculator is gebaseerd op Nederlandse voedingsrichtlijnen en het Voedingscentrum. Raadpleeg altijd uw arts of consultatiebureau voor persoonlijk advies."
    }
  ]

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCalculatorSchema())
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema())
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqData))
        }}
      />
      
    <Layout>
      {/* Hero Section */}
      <HeroSection />
      
      <div className="grid grid-cols-12 gap-6 min-h-screen">
        {/* Main Calculator Content - 8 columns on desktop, full width on mobile */}
        <div className="col-span-12 lg:col-span-7">
          {/* Calculator Card */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-medium text-primary mb-4">Calculator</h2>
            <div className="space-y-5">

              {/* Age Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Leeftijd van uw baby
                </label>
                <div className="relative">
                  <select
                    value={ageMonths}
                    onChange={(e) => {
                      setAgeMonths(e.target.value);
                      if (e.target.value === 'premature') {
                        setIsPremature(true);
                      } else {
                        setIsPremature(false);
                        setGestationalAge('');
                        setBirthDate('');
                        setCorrectedAge(null);
                        setPrematureCategory('');
                      }
                    }}
                    className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none appearance-none bg-white text-gray-800"
                  >
                  <option value="premature">Prematuur geboren</option>
                  <option value="0-2weeks">0-2 weken</option>
                  <option value="2-4weeks">2-4 weken</option>
                  <option value="1">1-3 maanden</option>
                  <option value="3">3-6 maanden</option>
                  <option value="6">6+ maanden</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary pointer-events-none" />
                </div>
              </div>

              {/* Premature Baby Input Fields */}
              {isPremature && (
                <div className="space-y-5">
                  <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                    <div className="flex items-start space-x-2">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <p className="text-sm text-blue-800">
                            Voor premature baby's berekenen we de voeding op basis van gecorrigeerde leeftijd. Vul de onderstaande velden in.
                          </p>
                          <div className="relative tooltip-container">
                            <button
                              type="button"
                              onMouseEnter={() => setShowTooltip(true)}
                              onMouseLeave={() => setShowTooltip(false)}
                              onClick={() => setShowTooltip(!showTooltip)}
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <Info className="w-4 h-4" />
                            </button>
                            
                            {/* Tooltip */}
                            {showTooltip && (
                              <div className="absolute bottom-full right-0 mb-2 w-80 z-50">
                              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4">
                                <div className="tooltip-content">
                                  <h4 className="font-medium mb-2">Prematurenberekening</h4>
                                  <p className="text-sm mb-2">
                                    Voor te vroeg geboren baby's gebruiken we een aangepaste berekeningsmethode op basis van:
                                  </p>
                                  <ul className="text-sm space-y-1">
                                    <li className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                      <span><strong>Gecorrigeerde leeftijd</strong> (chronologische leeftijd minus weken te vroeg)</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                      <span><strong>Verhoogde voedingsbehoefte</strong> voor inhaalgroei</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                      <span><strong>ESPGHAN 2022 richtlijnen</strong> voor prematurenvoeding</span>
                                    </li>
                                  </ul>
                                  <div className="flex items-center justify-between mt-2">
                                    <p className="text-xs text-gray-600 flex-1">
                                      Bronnen: Nederlandse Vereniging voor Kindergeneeskunde (NVK), European Society for Paediatric Gastroenterology Hepatology and Nutrition
                                    </p>
                                    
                                    <div className="relative sources-tooltip-container ml-2">
                                      <button
                                        type="button"
                                        onMouseEnter={() => setShowSourcesTooltip(true)}
                                        onMouseLeave={() => setShowSourcesTooltip(false)}
                                        onClick={() => setShowSourcesTooltip(!showSourcesTooltip)}
                                        className="text-gray-600 hover:text-gray-800 transition-colors"
                                      >
                                        <Info className="w-3 h-3" />
                                      </button>
                                      
                                      {/* Scientific Sources Tooltip */}
                                      {showSourcesTooltip && (
                                        <div className="absolute bottom-full right-0 mb-2 w-96 z-30">
                                          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4">
                                            <div className="scientific-sources-tooltip">
                                              <h4 className="font-medium mb-2">Wetenschappelijke Verantwoording</h4>
                                              
                                              <div className="sources text-xs space-y-2">
                                                <div className="primary-sources">
                                                  <p className="font-medium">Primaire bronnen:</p>
                                                  <ol className="ml-3 space-y-1">
                                                    <li>1. ESPGHAN Committee on Nutrition (2022). "Enteral Nutrition Supply 
                                                        for Preterm Infants" - J Pediatr Gastroenterol Nutr.</li>
                                                    <li>2. Nederlandse Vereniging voor Kindergeneeskunde (2023). 
                                                        "Richtlijn Follow-up van Prematuren"</li>
                                                    <li>3. Agostoni et al. (2010). "Enteral Nutrient Supply for Preterm 
                                                        Infants" - ESPGHAN Commentary</li>
                                                  </ol>
                                                </div>
                                                
                                                <div className="dutch-protocols bg-orange-50 p-2 rounded">
                                                  <p className="font-medium">Nederlandse protocollen:</p>
                                                  <ul className="ml-3 space-y-1">
                                                    <li className="flex items-center space-x-2">
                                                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                                      <span>NICU protocollen grote centra (AMC, Erasmus MC, UMCU)</span>
                                                    </li>
                                                    <li className="flex items-center space-x-2">
                                                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                                      <span>Landelijke Neonatologie Richtlijnen (LNR)</span>
                                                    </li>
                                                    <li className="flex items-center space-x-2">
                                                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                                      <span>Care4Neo oudervereniging aanbevelingen</span>
                                                    </li>
                                                  </ul>
                                                </div>
                                                
                                                <div className="validation bg-green-50 p-2 rounded">
                                                  <p className="font-medium">Validatie:</p>
                                                  <p>Berekeningen gevalideerd door kinderartsen-neonatologen 
                                                     van Nederlandse NICU's (niveau 3 centra)</p>
                                                </div>
                                                
                                                <p className="text-gray-600 mt-2">
                                                  Laatste update: Augustus 2025 | Revisie volgens nieuwste ESPGHAN richtlijnen
                                                </p>
                                              </div>
                                            </div>
                                            {/* Tooltip Arrow */}
                                            <div className="absolute top-full right-4">
                                              <div className="border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-200"></div>
                                              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                                                <div className="border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                {/* Tooltip Arrow */}
                                <div className="absolute top-full right-4">
                                  <div className="border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-200"></div>
                                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                                    <div className="border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                  {/* Gestational Age at Birth */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Zwangerschapsduur bij geboorte (weken) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={gestationalAge}
                        onChange={(e) => {
                          setGestationalAge(e.target.value);
                          calculatePrematureCategory(e.target.value, setPrematureCategory);
                        }}
                        className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none appearance-none bg-white text-gray-800"
                      >
                      <option value="">Selecteer weken</option>
                      <option value="24">24 weken</option>
                      <option value="25">25 weken</option>
                      <option value="26">26 weken</option>
                      <option value="27">27 weken</option>
                      <option value="28">28 weken</option>
                      <option value="29">29 weken</option>
                      <option value="30">30 weken</option>
                      <option value="31">31 weken</option>
                      <option value="32">32 weken</option>
                      <option value="33">33 weken</option>
                      <option value="34">34 weken</option>
                      <option value="35">35 weken</option>
                      <option value="36">36 weken</option>
                      <option value="37">37 weken</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary pointer-events-none" />
                    </div>
                  </div>
                  
                  {/* Birth Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Geboortedatum <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      max={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none text-gray-800"
                    />
                  </div>
                  
                  {/* Display Corrected Age */}
                  {correctedAge !== null && (
                    <div className="bg-white rounded-lg p-3">
                      {/* Top section with Lees meer link */}
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-sm text-gray-600">Leeftijd berekening:</div>
                        <Link 
                          href="/kennisbank/basis-flesvoeding/flesvoeding-bij-premature-babys"
                          className="text-xs text-primary hover:underline flex items-center"
                        >
                          <Info className="w-3 h-3 mr-1" />
                          Lees meer →
                        </Link>
                      </div>
                      <div className="space-y-1 text-xs">
                        <div>Chronologische leeftijd: {correctedAge.chronologicalWeeks} weken</div>
                        <div>Geboren bij: {correctedAge.gestationalWeeks} weken zwangerschap</div>
                        <div>Te vroeg: {correctedAge.weeksPremature} weken</div>
                      </div>
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-sm text-gray-600">Gecorrigeerde leeftijd:</div>
                            <div className="font-medium text-primary">
                              {correctedAge.correctedWeeks < 0 
                                ? `${correctedAge.correctedWeeks} weken (nog ${Math.abs(correctedAge.correctedWeeks)} weken voor termijn)` 
                                : correctedAge.correctedWeeks < 4 
                                  ? `${correctedAge.correctedWeeks} weken`
                                  : `${Math.floor(correctedAge.correctedWeeks / 4)} maanden en ${correctedAge.correctedWeeks % 4} weken`
                              }
                            </div>
                          </div>
                          {/* Premature Category moved to right side */}
                          {prematureCategory && (
                            <div className="bg-amber-50 rounded-lg p-2 border border-amber-200 ml-3 flex-shrink-0">
                              <div className="text-xs text-amber-800">
                                <strong>Categorie:</strong><br/>{prematureCategory}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              

              {/* Weight Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gewicht van uw baby (kg)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Bijv. 4.5"
                    step="0.1"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none text-gray-800 placeholder:text-gray-500"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kg</span>
                </div>
              </div>

              {/* Number of Feedings */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aantal voedingen per dag
                </label>
                <div className="relative">
                  <select
                    value={feedingsPerDay}
                    onChange={(e) => setFeedingsPerDay(e.target.value)}
                    className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none appearance-none bg-white text-gray-800"
                  >
                  <option value="4">4 voedingen (om de 6 uur)</option>
                  <option value="5">5 voedingen (om de 4-5 uur)</option>
                  <option value="6">6 voedingen (om de 4 uur)</option>
                  <option value="7">7 voedingen (om de 3-4 uur)</option>
                  <option value="8">8 voedingen (om de 3 uur)</option>
                  <option value="9">9 voedingen (om de 2-3 uur)</option>
                  <option value="10">10 voedingen (om de 2 uur)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary pointer-events-none" />
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateFeeding}
                className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Bereken Voeding</span>
              </button>
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="space-y-6">
              {/* Newborn Safety Warning */}
              {ageMonths === '0' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-red-800 mb-3">
                        Belangrijke Waarschuwing voor Pasgeborenen
                      </h3>
                      
                      <div className="space-y-3 text-sm text-red-700">
                        <div className="bg-white rounded-lg p-3">
                          <h4 className="font-medium mb-2">⚠️ Medische Richtlijnen:</h4>
                          <ul className="space-y-1 text-xs">
                            <li>• <strong>0-3 dagen:</strong> Begin met 10-20ml per voeding</li>
                            <li>• <strong>4-7 dagen:</strong> Opbouw naar 20-40ml per voeding</li>
                            <li>• <strong>1-2 weken:</strong> Geleidelijk naar 30-60ml per voeding</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white rounded-lg p-3">
                          <h4 className="font-medium mb-2">👀 Let Op Deze Signalen:</h4>
                          <ul className="space-y-1 text-xs">
                            <li>• Baby duwt fles weg = vol (niet koppig)</li>
                            <li>• Veel spugen = te veel gekregen</li>
                            <li>• Onrust na voeding = overvol gevoel</li>
                            <li>• Slaapt niet na voeding = mogelijk overvoeding</li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          <p className="text-yellow-800 font-medium text-center">
                            📞 Bij twijfel: Bel uw verloskundige of consultatiebureau
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Main Results */}
              <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Baby className="w-5 h-5 mr-2" />
                  Aanbevolen Hoeveelheden
                </h3>
                
                {/* Special Premature Alert - moved inside and styled with white bg */}
                {results.isPremature && (
                  <div className="bg-white rounded-xl p-4 mb-4">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-primary mb-1">
                          Premature Baby Berekening
                        </h4>
                        <p className="text-sm text-primary">
                          Gecorrigeerde leeftijd: {results.correctedAge < 0 
                            ? `${results.correctedAge} weken (nog ${Math.abs(results.correctedAge)} weken voor termijn)` 
                            : results.correctedAge < 4 
                              ? `${results.correctedAge} weken`
                              : `${Math.floor(results.correctedAge / 4)} maanden`
                          }
                        </p>
                        <p className="text-sm text-primary mt-1">
                          Geboren bij: {results.gestationalAge} weken zwangerschap (chronologisch: {results.ageData?.chronologicalWeeks} weken oud)
                        </p>
                        <p className="text-sm text-primary mt-1 font-medium">
                          Voedingsbehoefte: {results.mlPerKg}ml per kg lichaamsgewicht
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Totaal per dag</span>
                      <span className="text-2xl font-medium">{results.dailyAmount} ml</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                      <div className="text-white/70 text-sm mb-1">Aantal voedingen</div>
                      <div className="text-xl font-medium">{results.feedingsPerDay}x</div>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                      <div className="flex items-center gap-2 text-white/70 text-sm mb-1">
                        <span>Aanbevolen per voeding</span>
                        {ageMonths === '0-2weeks' && (
                          <div className="relative group">
                            <Info className="w-4 h-4 text-white/60 hover:text-white cursor-help" />
                            <div className="absolute left-6 top-0 bg-gray-900 text-white text-xs rounded-lg p-3 w-64 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                              <div className="font-medium mb-1">Speciale berekening voor 0-2 weken:</div>
                              <div className="text-gray-300">
                                • Gebruik 75ml/kg in plaats van 150ml/kg<br/>
                                • 50% minder voor medische veiligheid<br/>
                                • Begin klein, bouw geleidelijk op
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="text-xl font-medium">{results.recommendedAmount} ml</div>
                      <div className="text-xs text-white/60 mt-1">Bij groeispurt: tot {results.maxAmount} ml</div>
                      {ageMonths === '0-2weeks' && (
                        <div className="bg-amber-50 rounded-xl p-2 border border-amber-200 mt-2">
                          <div className="text-xs text-amber-700 flex items-center">
                            <Info className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>Gebruik 75ml/kg in plaats van 150ml/kg</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Schepjes Calculation */}
                  <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                    {showCustomInput && (
                      <div className="flex items-center justify-between mb-4 w-full sm:max-w-[372px]">
                        <input
                          type="number"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder={`${results.recommendedAmount} ml`}
                          className="flex-1 mr-3 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none"
                        />
                        <button
                          onClick={calculateCustomSchepjes}
                          className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium whitespace-nowrap"
                        >
                          Bereken
                        </button>
                      </div>
                    )}
                    
                    <div className="text-white/70 text-sm mb-1 flex items-center space-x-1">
                      <span>Aantal schepjes per voeding</span>
                      <div className="relative tooltip-container">
                        <button
                          type="button"
                          onMouseEnter={() => setShowSchepjesTooltip(true)}
                          onMouseLeave={() => setShowSchepjesTooltip(false)}
                          onClick={() => setShowSchepjesTooltip(!showSchepjesTooltip)}
                          className="text-white/60 hover:text-white/80 transition-colors"
                        >
                          <Info className="w-3 h-3" />
                        </button>
                        
                        {/* Schepjes Tooltip */}
                        {showSchepjesTooltip && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 z-10">
                            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                              <div className="space-y-2 text-xs text-gray-700">
                                <p className="font-medium text-gray-800">Nederlandse Standaard Verhoudingen:</p>
                                <ul className="space-y-1">
                                  <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                    <span><strong>30ml water + 1 schepje poeder = 30ml voeding</strong></span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                    <span>Alle Nederlandse merken gebruiken deze verhouding</span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                    <span>Nutrilon, HiPP, Albert Heijn, Kruidvat - maakt niet uit</span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                    <span>EU-richtlijn standaardiseert alle verhoudingen</span>
                                  </li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-2 italic">
                                  Het schepje neemt ~3ml ruimte in, daarom blijft totaal volume 30ml
                                </p>
                              </div>
                              {/* Tooltip arrow */}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-xl font-medium">
                      {customSchepjes !== null ? 
                        `${customSchepjes} schepjes + ${customAmount}ml water` : 
                        `${Math.round((results.recommendedAmount / 30) * 10) / 10} schepjes + ${results.recommendedAmount}ml water`
                      }
                    </div>
                    <div className="text-xs text-white/60 mt-1">30ml water per schepje poeder</div>
                    
                    {!showCustomInput && (
                      <div className="mt-3">
                        <button
                          onClick={() => setShowCustomInput(true)}
                          className="text-white text-xs hover:text-white/80 transition-colors underline"
                        >
                          Andere hoeveelheid en ratio berekenen →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Premature Baby Information Banner */}
              {results.isPremature && (
                <div className="bg-amber-50 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800 mb-1">Premature Baby Voeding - Speciale Berekening</h4>
                      <p className="text-sm text-amber-700 mb-3">
                        Deze berekening is gebaseerd op de gecorrigeerde leeftijd van uw premature baby volgens Nederlandse richtlijnen.
                        Premature baby's hebben verhoogde voedingsbehoeften voor optimale groei en ontwikkeling.
                      </p>
                      <p className="text-sm text-amber-700 mb-3">
                        <strong>Belangrijke informatie:</strong> Bij premature baby's wordt {results.mlPerKg}ml per kg lichaamsgewicht aangehouden
                        (in plaats van de standaard 150ml/kg). Dit is nodig voor inhaalgroei en herstel.
                      </p>
                      <p className="text-sm text-amber-700">
                        💡 <strong>Tip:</strong> Bespreek deze berekening altijd met uw kinderarts of consultatiebureau voor persoonlijk advies.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Special Notes for Premature */}
              {results.specialNotes && results.specialNotes.length > 0 && (
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <h4 className="font-medium text-amber-900 mb-2 flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    Belangrijke Aandachtspunten
                  </h4>
                  <ul className="space-y-1">
                    {results.specialNotes.map((note, index) => (
                      <li key={index} className="text-sm text-amber-800 flex items-start">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Newborn Feeding Tips */}
              {ageMonths === '0' && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="font-medium text-blue-800 mb-2">
                    💡 Tips Voor Pasgeborenen
                  </h4>
                  <div className="text-sm text-blue-700 space-y-2">
                    <p><strong>Start voorzichtig:</strong> Begin met de helft van de aanbevolen hoeveelheid</p>
                    <p><strong>Frequentie:</strong> Kleinere hoeveelheden, vaker (8-12x per dag)</p>
                    <p><strong>Tempo:</strong> Laat uw baby pauzes nemen tijdens de voeding</p>
                    <p><strong>Signalen:</strong> Stop als baby de fles wegduwt of zijn hoofdje wegdraait</p>
                  </div>
                </div>
              )}
              
              {/* Medical Disclaimer for Premature */}
              {results.isPremature && (
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <div className="flex items-start justify-between">
                    <p className="text-sm text-red-800 flex-1">
                      <strong>Medisch Advies Vereist:</strong> Voor premature baby's is begeleiding 
                      door kinderarts en diëtist essentieel. Deze berekening is alleen een richtlijn.
                    </p>
                    
                    <div className="relative medical-tooltip-container ml-2">
                      <button
                        type="button"
                        onMouseEnter={() => setShowMedicalTooltip(true)}
                        onMouseLeave={() => setShowMedicalTooltip(false)}
                        onClick={() => setShowMedicalTooltip(!showMedicalTooltip)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <Info className="w-4 h-4" />
                      </button>
                      
                      {/* Medical Disclaimer Tooltip */}
                      {showMedicalTooltip && (
                        <div className="absolute bottom-full right-0 mb-2 w-96 z-20">
                          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4">
                            <div className="medical-disclaimer-tooltip">
                              <h4 className="font-medium mb-2 text-red-700">Medische Begeleiding Vereist</h4>
                              
                              <div className="disclaimer-content text-sm space-y-2">
                                <p className="text-red-800">
                                  Deze berekening is een <strong>hulpmiddel</strong> en vervangt geen medisch advies.
                                </p>
                                
                                <div className="monitoring-required bg-amber-50 p-2 rounded">
                                  <p className="font-medium text-amber-900">Premature baby's hebben nodig:</p>
                                  <ul className="text-xs mt-1 space-y-1">
                                    <li className="flex items-center space-x-2">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                      <span>Wekelijkse gewichtscontrole (2x/week eerste maand)</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                      <span>Maandelijkse bloedcontroles (ijzer, calcium, fosfor)</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                      <span>NICU follow-up polikliniek bezoeken</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                      <span>Diëtist begeleiding voor optimale voeding</span>
                                    </li>
                                  </ul>
                                </div>
                                
                                <div className="contact-info bg-blue-50 p-2 rounded">
                                  <p className="font-medium text-blue-900">Neem contact op bij:</p>
                                  <ul className="text-xs mt-1 space-y-1">
                                    <li className="flex items-center space-x-2">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                      <span>Onvoldoende gewichtstoename (&lt;15g/dag)</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                      <span>Voedingsproblemen (reflux, spugen)</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                      <span>Twijfel over juiste voeding</span>
                                    </li>
                                  </ul>
                                </div>
                                
                                <p className="text-xs text-gray-600">
                                  Deze calculator volgt de richtlijnen van: NVK (Nederlandse Vereniging voor 
                                  Kindergeneeskunde), ESPGHAN, en Nederlandse NICU-protocollen
                                </p>
                              </div>
                            </div>
                            {/* Tooltip Arrow */}
                            <div className="absolute top-full right-4">
                              <div className="border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-200"></div>
                              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                                <div className="border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Feeding Information */}
              <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="bg-default rounded-xl p-4">
                  <h5 className="font-medium text-gray-900 mb-3">Waarom variatie in hoeveelheid?</h5>
                  <div className="space-y-2 text-sm text-gray-800">
                    <div className="flex items-start space-x-2">
                      <span className="text-primary mt-0.5">•</span>
                      <div>
                        <strong>Groeispurts:</strong> Rond 7-10 dagen, 3 weken, 6 weken, 3 maanden en 6 maanden. 
                        Baby kan dan tijdelijk 20-30% meer drinken.
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-primary mt-0.5">•</span>
                      <div>
                        <strong>Wonderweken/Regeldagen:</strong> Mentale ontwikkelingssprongen waarbij baby onrustig is 
                        en vaker kleine beetjes wil drinken.
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-primary mt-0.5">•</span>
                      <div>
                        <strong>Dagritme:</strong> &apos;s Ochtends vaak meer honger, &apos;s avonds kleinere porties.
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-primary mt-0.5">•</span>
                      <div>
                        <strong>Temperatuur:</strong> Bij warm weer minder per keer, maar vaker dorst.
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 mt-3 italic">
                    Volg altijd de signalen van je baby. Een tevreden baby die goed groeit, krijgt genoeg binnen.
                  </p>
                </div>
              </div>
            </div>
          )}

          {results && (
            <div className="mt-8">
              {/* Details Toggle */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full bg-white/80 backdrop-blur rounded-t-2xl shadow-sm border border-gray-200 border-b-0 p-4 flex items-center justify-between text-gray-700 hover:bg-white transition-colors"
              >
                <span className="font-medium">Bekijk details & voedingsschema</span>
                {showDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {/* Detailed Schedule */}
              {showDetails && (
                <div className="bg-white/80 backdrop-blur rounded-bottom-2xl mb-8 shadow-sm border border-gray-200 p-6 border-t-0 schedule-content">
                  <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Voorbeeldschema (flexibel aan te passen)
                  </h4>
                  
                  <div className="space-y-2 mb-4">
                    {generateFeedingSchedule(results.feedingsPerDay, results.recommendedAmount, results.maxAmount).map((time, index) => (
                      <div key={index} className="flex items-center justify-between py-2 px-3 bg-default/50 rounded-lg">
                        <span className="text-sm text-gray-600">{time.time}</span>
                        <span className="font-medium text-gray-800">{time.amount}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 mb-4">
                    <p className="text-sm text-amber-800">
                      <strong>Aanbeveling:</strong> Start met {results.recommendedAmount}ml per voeding (gebaseerd op {results.mlPerKg}ml per kg lichaamsgewicht). 
                      Bij groeispurts kan dit oplopen tot {results.maxAmount}ml per voeding.
                    </p>
                  </div>

                </div>
              )}
            </div>
          )}

          {/* Information Cards */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200  p-6">
              <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                <Info className="w-5 h-5 mr-2 text-primary" />
                Soorten Flesvoeding
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <span className="font-medium text-primary mt-0.5">1</span>
                  <div>
                    <p className="font-medium text-gray-700">Startvoeding (0-6 maanden)</p>
                    <p>Volledige zuigelingenvoeding, geschikt vanaf geboorte</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-medium text-primary mt-0.5">2</span>
                  <div>
                    <p className="font-medium text-gray-700">Opvolgmelk (6-12 maanden)</p>
                    <p>Vanaf 6 maanden, naast vaste voeding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-medium text-primary mt-0.5">3</span>
                  <div>
                    <p className="font-medium text-gray-700">Peutermelk (12+ maanden)</p>
                    <p>Optioneel vanaf 1 jaar, gewone melk kan ook</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* FAQ Section - Schema optimized */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6 mt-8">
            <h2 className="text-lg font-medium text-primary mb-4">Veelgestelde Vragen</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Hoeveel ml flesvoeding heeft een baby van 3 maanden nodig?</h3>
                <p className="text-sm text-gray-600">
                  Een baby van 3 maanden krijgt ongeveer 130ml per kg lichaamsgewicht per dag. 
                  Bij een gewicht van 5kg betekent dit 650ml verdeeld over 6-7 voedingen (ongeveer 95ml per voeding).
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Hoeveel flesvoeding heeft een baby van 4 kg nodig?</h3>
                <p className="text-sm text-gray-600">
                  Bij 4 kg: 4 x 150ml = 600ml per dag, verdeeld over 6-7 voedingen. 
                  Dit komt neer op ongeveer 85-100ml per voeding, afhankelijk van leeftijd en aantal voedingen.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Wat is het flesvoeding schema voor 0-6 maanden?</h3>
                <p className="text-sm text-gray-600">
                  0-3 maanden: 6-8 voedingen van 60-120ml. 3-6 maanden: 5-6 voedingen van 120-180ml. 
                  Bekijk onze <Link href="/voedingsschemas" className="text-primary hover:underline font-medium">complete voedingsschema's</Link> of 
                  gebruik onze calculator voor een persoonlijk schema op basis van gewicht en leeftijd.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Hoe bereken ik hoeveel flesvoeding mijn baby nodig heeft?</h3>
                <p className="text-sm text-gray-600">
                  Gebruik de formule: gewicht (kg) x 150ml = totaal per dag. 
                  Deel dit door aantal voedingen per dag. Onze calculator doet dit automatisch en houdt rekening met leeftijdsaanpassingen.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar - 4 columns on desktop, 12 on mobile, always visible */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          {/* Images - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block space-y-6">
            {/* Mother and Baby Image */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
              <Image
                src="/mother_and_baby.webp"
                alt="Moeder en baby"
                width={300}
                height={200}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Google Ad 1 */}
            <div className="text-center space-y-2">
              <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4 min-h-[200px]">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5215838917916938"
                     crossorigin="anonymous"></script>
                {/* sidebar-right-ad1 */}
                <ins className="adsbygoogle"
                     style={{display: 'block'}}
                     data-ad-client="ca-pub-5215838917916938"
                     data-ad-slot="5691109362"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script dangerouslySetInnerHTML={{
                  __html: '(adsbygoogle = window.adsbygoogle || []).push({});'
                }}></script>
              </div>
            </div>
    
            
            {/* Baby Image */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
              <Image
                src="/baby.webp"
                alt="Baby"
                width={300}
                height={200}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
          
          {/* Google Ads - Always visible on mobile and desktop */}
          <div className="space-y-4">
            
            {/* Google Ad 2 */}
            <div className="text-center space-y-2">
              <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4 min-h-[200px]">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5215838917916938"
                     crossorigin="anonymous"></script>
                {/* sidebar-right-ad2 */}
                <ins className="adsbygoogle"
                     style={{display: 'block'}}
                     data-ad-client="ca-pub-5215838917916938"
                     data-ad-slot="5863882645"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script dangerouslySetInnerHTML={{
                  __html: '(adsbygoogle = window.adsbygoogle || []).push({});'
                }}></script>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}