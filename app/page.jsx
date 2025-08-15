'use client'
import { useState } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import { Baby, Calculator, Info, Clock, ChevronDown, ChevronUp } from 'lucide-react'

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

export default function HomePage() {
  const [weight, setWeight] = useState('')
  const [ageMonths, setAgeMonths] = useState('0')
  const [feedingsPerDay, setFeedingsPerDay] = useState('7')
  const [results, setResults] = useState(null)
  const [showDetails, setShowDetails] = useState(false)

  const calculateFeeding = () => {
    if (!weight || weight <= 0) {
      alert('Vul een geldig gewicht in')
      return
    }

    const weightKg = parseFloat(weight)
    const age = parseInt(ageMonths)
    const feedings = parseInt(feedingsPerDay)
    
    // Dutch standard: 150ml per kg, adjusted by age
    let mlPerKg = 150
    if (age >= 2) mlPerKg = 140
    if (age >= 3) mlPerKg = 130
    if (age >= 4) mlPerKg = 120
    if (age >= 5) mlPerKg = 110
    if (age >= 6) mlPerKg = 100

    const dailyAmount = Math.min(weightKg * mlPerKg, 1000) // Max 1000ml per day
    const baseAmountPerFeeding = dailyAmount / feedings
    
    // Round to nearest 5ml
    const roundToFive = (num) => Math.round(num / 5) * 5
    
    // Calculate range: base to +30% for growth spurts
    const recommendedAmount = roundToFive(baseAmountPerFeeding)
    const minAmount = recommendedAmount // Start at recommended
    const maxAmount = roundToFive(baseAmountPerFeeding * 1.3) // Up to 30% more during growth spurts

    setResults({
      dailyAmount: Math.round(dailyAmount),
      feedingsPerDay: feedings,
      recommendedAmount,
      minAmount,
      maxAmount,
      mlPerKg,
      weightKg
    })
  }

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6 min-h-screen">
        {/* Main Calculator Content - 8 columns on desktop, full width on mobile */}
        <div className="col-span-12 lg:col-span-7">
          {/* Page Title - No card container */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
              <Baby className="w-6 h-6 mr-3 text-primary" />
              Bereken de juiste hoeveelheid flesvoeding
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Gebruik deze calculator om te bepalen hoeveel flesvoeding uw baby nodig heeft. Gebaseerd op de officiële Nederlandse richtlijnen van het Voedingscentrum (150ml per kg lichaamsgewicht).
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border-gray-200 p-6 mb-6">
            <div className="space-y-5">

              {/* Age Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Leeftijd van uw baby
                </label>
                <select
                  value={ageMonths}
                  onChange={(e) => setAgeMonths(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none appearance-none bg-white"
                >
                  <option value="0">0-1 maand</option>
                  <option value="1">1-2 maanden</option>
                  <option value="2">2-3 maanden</option>
                  <option value="3">3-4 maanden</option>
                  <option value="4">4-5 maanden</option>
                  <option value="5">5-6 maanden</option>
                  <option value="6">6+ maanden</option>
                </select>
              </div>


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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kg</span>
                </div>
              </div>

              {/* Number of Feedings */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aantal voedingen per dag
                </label>
                <select
                  value={feedingsPerDay}
                  onChange={(e) => setFeedingsPerDay(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none appearance-none bg-white"
                >
                  <option value="4">4 voedingen (om de 6 uur)</option>
                  <option value="5">5 voedingen (om de 4-5 uur)</option>
                  <option value="6">6 voedingen (om de 4 uur)</option>
                  <option value="7">7 voedingen (om de 3-4 uur)</option>
                  <option value="8">8 voedingen (om de 3 uur)</option>
                  <option value="9">9 voedingen (om de 2-3 uur)</option>
                  <option value="10">10 voedingen (om de 2 uur)</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateFeeding}
                className="w-full bg-primary bg-primary-hover text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Bereken Voeding</span>
              </button>
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="space-y-4">
              {/* Main Results */}
              <div className="rounded-2xl shadow-lg p-6 text-white" style={{background: 'linear-gradient(135deg, rgb(16, 148, 174), rgb(12, 118, 142))'}}>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Baby className="w-5 h-5 mr-2" />
                  Aanbevolen Hoeveelheden
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Totaal per dag</span>
                      <span className="text-2xl font-bold">{results.dailyAmount} ml</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                      <div className="text-white/70 text-sm mb-1">Aantal voedingen</div>
                      <div className="text-xl font-bold">{results.feedingsPerDay}x</div>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                      <div className="text-white/70 text-sm mb-1">Aanbevolen per voeding</div>
                      <div className="text-xl font-bold">{results.recommendedAmount} ml</div>
                      <div className="text-xs text-white/60 mt-1">Bij groeispurt: tot {results.maxAmount} ml</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Toggle */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4 flex items-center justify-between text-gray-700 hover:bg-white transition-colors"
              >
                <span className="font-medium">Bekijk details & voedingsschema</span>
                {showDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {/* Detailed Schedule */}
              {showDetails && (
                <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
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

                  <div className="bg-default rounded-xl p-4">
                    <h5 className="font-medium text-gray-900 mb-2">Waarom variatie in hoeveelheid?</h5>
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
              )}
            </div>
          )}

          {/* Information Cards */}
          <div className="mt-8 space-y-4">
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Info className="w-5 h-5 mr-2 text-primary" />
                Soorten Flesvoeding
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <span className="font-semibold text-primary mt-0.5">1</span>
                  <div>
                    <p className="font-medium text-gray-700">Startvoeding (0-6 maanden)</p>
                    <p>Volledige zuigelingenvoeding, geschikt vanaf geboorte</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-semibold text-primary mt-0.5">2</span>
                  <div>
                    <p className="font-medium text-gray-700">Opvolgmelk (6-12 maanden)</p>
                    <p>Vanaf 6 maanden, naast vaste voeding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-semibold text-primary mt-0.5">3</span>
                  <div>
                    <p className="font-medium text-gray-700">Peutermelk (12+ maanden)</p>
                    <p>Optioneel vanaf 1 jaar, gewone melk kan ook</p>
                  </div>
                </div>
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
                src="/mother_and_baby.png"
                alt="Moeder en baby"
                width={300}
                height={200}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Google Ad 1 */}
            <div className="text-center space-y-2">
              <div className="text-gray-500 text-xs font-medium">Google Advertentie</div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="text-gray-400 text-sm">Google Ads</div>
                <div className="text-gray-300 text-xs mt-1">320x100</div>
              </div>
            </div>
    
            
            {/* Baby Image */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
              <Image
                src="/baby.png"
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
              <div className="text-gray-500 text-xs font-medium">Google Advertentie</div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="text-gray-400 text-sm">Google Ads</div>
                <div className="text-gray-300 text-xs mt-1">300x250</div>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </Layout>
  )
}