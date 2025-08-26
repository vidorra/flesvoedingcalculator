'use client'
import { useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { Calculator, AlertCircle, Check, Info, Baby, ArrowRight, Home } from 'lucide-react'

export default function SchepjesCalculatorPage() {
  const [targetVolume, setTargetVolume] = useState('')
  const [results, setResults] = useState(null)
  const mlPerScoop = 30 // Nederlandse standaard voor alle populaire merken

  const calculateMixing = () => {
    if (!targetVolume || targetVolume <= 0) {
      alert('Vul een geldige gewenste hoeveelheid in')
      return
    }

    const target = parseFloat(targetVolume)
    const mlPerScoopValue = mlPerScoop
    
    // Calculate scoops needed
    const scoopsNeeded = Math.round((target / mlPerScoopValue) * 10) / 10
    const waterNeeded = target
    const actualVolume = scoopsNeeded * mlPerScoopValue
    
    // Calculate if we need adjustments
    const difference = Math.abs(target - actualVolume)
    const isExact = difference < 2 // Within 2ml tolerance
    
    // Generate alternative suggestions
    const alternatives = []
    for (let scoops = Math.floor(target / mlPerScoopValue); scoops <= Math.ceil(target / mlPerScoopValue) + 1; scoops++) {
      if (scoops > 0) {
        const volume = scoops * mlPerScoopValue
        const water = volume
        alternatives.push({
          scoops,
          water,
          volume,
          difference: Math.abs(target - volume)
        })
      }
    }
    
    // Sort by closest to target
    alternatives.sort((a, b) => a.difference - b.difference)

    setResults({
      target,
      mlPerScoopValue,
      scoopsNeeded,
      waterNeeded,
      actualVolume,
      isExact,
      difference,
      alternatives: alternatives.slice(0, 3)
    })
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ArrowRight className="w-4 h-4" />
          <span className="text-primary">Schepjes Calculator</span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Calculator className="w-6 h-6 mr-3 text-primary" />
            Kunstvoeding Schepjes Calculator
          </h1>
          <p className="text-gray-600">
            Bereken de exacte verhouding van water en poeder voor uw gewenste hoeveelheid kunstvoeding. 
            Perfect voor wanneer de standaard verhoudingen niet uitkomen.
          </p>
        </div>

        {/* Calculator Form */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-lg mb-4 flex items-center">
            <Calculator className="w-5 h-5 mr-2 text-primary" />
            Bereken Mengverhouding
          </h2>
          
          <div className="space-y-5 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gewenste hoeveelheid (ml)
              </label>
              <input
                type="number"
                value={targetVolume}
                onChange={(e) => setTargetVolume(e.target.value)}
                placeholder="Bijv. 135"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none text-gray-800 placeholder:text-gray-500"
              />
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h3 className="font-medium text-blue-800 mb-2">Nederlandse Standaard: 30ml water + 1 schepje = 30ml voeding</h3>
              <p className="text-sm text-blue-700">
                Alle populaire Nederlandse merken (Nutrilon, HiPP, Albert Heijn, Kruidvat) gebruiken 
                deze verhouding volgens EU-richtlijnen. Het schepje poeder neemt ongeveer 3ml ruimte in, 
                daarom wordt 30ml water + 1 schepje poeder = ~30ml kant-en-klare voeding.
              </p>
            </div>
          </div>

          <button
            onClick={calculateMixing}
            className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2"
          >
            <Calculator className="w-5 h-5" />
            <span>Bereken Mengverhouding</span>
          </button>
        </div>

        {/* Results */}
        {results && (
          <div className="space-y-6">
            {/* Main Results */}
            <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                {results.isExact ? (
                  <Check className="w-5 h-5 mr-2" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2" />
                )}
                Mengverhouding Resultaat
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">
                    {results.scoopsNeeded}
                  </div>
                  <div className="text-sm text-white/70">Schepjes poeder</div>
                </div>
                
                <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">
                    {results.waterNeeded}ml
                  </div>
                  <div className="text-sm text-white/70">Water</div>
                </div>
                
                <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">
                    {results.actualVolume}ml
                  </div>
                  <div className="text-sm text-white/70">Totaal volume</div>
                </div>
              </div>
            </div>

            {!results.isExact && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-amber-800">Let op: Niet exact</p>
                    <p className="text-sm text-amber-700">
                      Het resultaat wijkt {results.difference.toFixed(1)}ml af van uw gewenste hoeveelheid. 
                      Bekijk de alternatieven hieronder.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Alternatives */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Alternatieve verhoudingen:</h4>
              <div className="space-y-3">
                {results.alternatives.map((alt, index) => (
                  <div 
                    key={index}
                    className={`flex justify-between items-center p-4 rounded-xl border ${
                      alt.difference < 2 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <span className="font-medium">
                      <strong>{alt.scoops} schepjes</strong> + <strong>{alt.water}ml water</strong> = {alt.volume}ml
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      alt.difference < 2 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {alt.difference === 0 ? 'Exact' : `±${alt.difference.toFixed(1)}ml`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Info className="w-5 h-5 mr-2 text-primary" />
              Nederlandse Standaard
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="font-medium">✓ Alle populaire merken gebruiken 30ml/schepje:</p>
              <ul className="space-y-1 ml-4">
                <li>• Nutrilon (45% marktaandeel)</li>
                <li>• HiPP Organic (18% marktaandeel)</li>
                <li>• Albert Heijn eigen merk (15% marktaandeel)</li>
                <li>• Kruidvat eigen merk</li>
                <li>• Hero Baby, Aptamil, etc.</li>
              </ul>
              <p className="mt-2 text-xs text-gray-500 italic">
                EU-verordening 2016/127 standaardiseert verhoudingen
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Baby className="w-5 h-5 mr-2 text-primary" />
              Bereidingstips
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Gebruik altijd eerst water, dan poeder</li>
              <li>• Schud goed maar voorzichtig (geen luchtbellen)</li>
              <li>• Controleer temperatuur op pols (lauwwarm)</li>
              <li>• Gebruik binnen 2 uur na bereiding</li>
              <li>• Gooi restjes altijd weg</li>
            </ul>
          </div>
        </div>

        {/* Safety Notice */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Veiligheid voorop</h3>
              <p className="text-sm text-red-700">
                Deze calculator is een hulpmiddel. Volg altijd de instructies op de verpakking van uw kunstvoeding. 
                Bij twijfel of vragen over voeding, raadpleeg uw consultatiebureau of huisarts.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Calculator */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-3">Terug naar hoofdcalculator</h3>
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors font-medium"
          >
            <Baby className="w-4 h-4" />
            <span>Flesvoeding Calculator</span>
          </Link>
        </div>

      </div>
    </Layout>
  )
}