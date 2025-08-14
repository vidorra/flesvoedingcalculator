'use client'
import { useState } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import { Baby, Calculator, Info, Clock, ChevronDown, ChevronUp } from 'lucide-react'

// Helper function to generate feeding schedule
const generateFeedingSchedule = (feedingsPerDay, amountPerFeeding) => {
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
  return times.map(time => ({ time, amount: amountPerFeeding }))
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
    
    if (weightKg > 15) {
      alert('Voor baby\'s zwaarder dan 15kg, raadpleeg uw arts')
      return
    }

    if (weightKg < 2.5) {
      alert('Voor baby\'s lichter dan 2.5kg, raadpleeg uw arts')
      return
    }

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
    const amountPerFeeding = Math.round(dailyAmount / feedings)

    setResults({
      dailyAmount: Math.round(dailyAmount),
      feedingsPerDay: feedings,
      amountPerFeeding,
      mlPerKg,
      weightKg
    })
  }

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        {/* Main Calculator Content - 8 columns on desktop, full width on mobile */}
        <div className="col-span-12 lg:col-span-8">
          {/* Introduction Card */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <Baby className="w-5 h-5 mr-2 text-blue-500" />
              Bereken de juiste hoeveelheid flesvoeding
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Gebruik deze calculator om te bepalen hoeveel flesvoeding uw baby nodig heeft. 
              Gebaseerd op de officiële Nederlandse richtlijnen van het Voedingscentrum (150ml per kg lichaamsgewicht).
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6 mb-6">
            <div className="space-y-5">
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none appearance-none bg-white"
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

              {/* Age Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Leeftijd van uw baby
                </label>
                <select
                  value={ageMonths}
                  onChange={(e) => setAgeMonths(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none appearance-none bg-white"
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

              {/* Calculate Button */}
              <button
                onClick={calculateFeeding}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Bereken Voeding</span>
              </button>
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="space-y-4 animate-in slide-in-from-bottom duration-300">
              {/* Main Results */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Baby className="w-5 h-5 mr-2" />
                  Aanbevolen Hoeveelheden
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">Totaal per dag</span>
                      <span className="text-2xl font-bold">{results.dailyAmount} ml</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                      <div className="text-blue-100 text-sm mb-1">Aantal voedingen</div>
                      <div className="text-xl font-bold">{results.feedingsPerDay}x</div>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                      <div className="text-blue-100 text-sm mb-1">Per voeding</div>
                      <div className="text-xl font-bold">±{results.amountPerFeeding} ml</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Toggle */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-4 flex items-center justify-between text-gray-700 hover:bg-white transition-colors"
              >
                <span className="font-medium">Bekijk details & voedingsschema</span>
                {showDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {/* Detailed Schedule */}
              {showDetails && (
                <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6 animate-in slide-in-from-top duration-300">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-500" />
                    Voorbeeldschema (flexibel aan te passen)
                  </h4>
                  
                  <div className="space-y-2 mb-4">
                    {generateFeedingSchedule(results.feedingsPerDay, results.amountPerFeeding).map((time, index) => (
                      <div key={index} className="flex items-center justify-between py-2 px-3 bg-blue-50/50 rounded-lg">
                        <span className="text-sm text-gray-600">{time.time}</span>
                        <span className="font-medium text-gray-800">{time.amount} ml</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4">
                    <p className="text-sm text-amber-800">
                      <strong>Let op:</strong> Dit is een richtlijn gebaseerd op {results.mlPerKg}ml per kg lichaamsgewicht. 
                      Uw baby kan meer of minder nodig hebben. Volg altijd de signalen van uw baby.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Information Cards */}
          <div className="mt-8 space-y-4">
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Info className="w-5 h-5 mr-2 text-blue-500" />
                Soorten Flesvoeding
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <span className="font-semibold text-blue-500 mt-0.5">1</span>
                  <div>
                    <p className="font-medium text-gray-700">Startvoeding (0-6 maanden)</p>
                    <p>Volledige zuigelingenvoeding, geschikt vanaf geboorte</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-semibold text-blue-500 mt-0.5">2</span>
                  <div>
                    <p className="font-medium text-gray-700">Opvolgmelk (6-12 maanden)</p>
                    <p>Vanaf 6 maanden, naast vaste voeding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-semibold text-blue-500 mt-0.5">3</span>
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
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Images - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block space-y-6">
            {/* Mother and Baby Image */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-4">
              <Image
                src="/mother_and_baby.png"
                alt="Moeder en baby"
                width={300}
                height={200}
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            {/* Baby Image */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-4">
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
            {/* Google Ad 1 */}
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-4">
              <div className="text-center space-y-2">
                <div className="text-gray-500 text-xs font-medium">Google Advertentie</div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-gray-400 text-sm">Google Ads</div>
                  <div className="text-gray-300 text-xs mt-1">320x100</div>
                </div>
              </div>
            </div>
            
            {/* Google Ad 2 */}
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-4">
              <div className="text-center space-y-2">
                <div className="text-gray-500 text-xs font-medium">Google Advertentie</div>
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="text-gray-400 text-sm">Google Ads</div>
                  <div className="text-gray-300 text-xs mt-1">300x250</div>
                </div>
              </div>
            </div>
            
            {/* Google Ad 3 */}
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-4">
              <div className="text-center space-y-2">
                <div className="text-gray-500 text-xs font-medium">Google Advertentie</div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-gray-400 text-sm">Google Ads</div>
                  <div className="text-gray-300 text-xs mt-1">320x100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}