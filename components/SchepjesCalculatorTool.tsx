'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
import { Calculator, AlertCircle, Check } from 'lucide-react'
import PopularProductsWidget from './PopularProductsWidget'

const ML_PER_SCOOP = 30 // de meeste Nederlandse merken: 1 afgestreken schepje per 30 ml

type Result = {
  scoopsNeeded: number
  waterNeeded: number
  actualVolume: number
  isExact: boolean
  difference: number
  alternatives: { scoops: number; water: number; volume: number; difference: number }[]
}

/**
 * Interactive scoop-mixing calculator (client). De pagina eromheen is een
 * server component (metadata + FAQ structured data) en geeft de uitleg-secties
 * mee als `children`.
 *
 * Layout net als de home-calculator: één twee-koloms grid. Links een
 * doorlopende kolom (invoer -> uitleg-secties), rechts sticky het resultaat +
 * de alternatieven + de aanbevolen producten.
 */
export default function SchepjesCalculatorTool({ children }: { children?: ReactNode }) {
  const [targetVolume, setTargetVolume] = useState('')
  const [results, setResults] = useState<Result | null>(null)

  const calculateMixing = () => {
    const target = parseFloat(targetVolume)
    if (!targetVolume || target <= 0) return

    const scoopsNeeded = Math.round((target / ML_PER_SCOOP) * 10) / 10
    const actualVolume = scoopsNeeded * ML_PER_SCOOP
    const difference = Math.abs(target - actualVolume)
    const isExact = difference < 2

    const alternatives = []
    for (let scoops = Math.floor(target / ML_PER_SCOOP); scoops <= Math.ceil(target / ML_PER_SCOOP) + 1; scoops++) {
      if (scoops > 0) {
        const volume = scoops * ML_PER_SCOOP
        alternatives.push({ scoops, water: volume, volume, difference: Math.abs(target - volume) })
      }
    }
    alternatives.sort((a, b) => a.difference - b.difference)

    setResults({ scoopsNeeded, waterNeeded: target, actualVolume, isExact, difference, alternatives: alternatives.slice(0, 3) })
  }

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-6 lg:items-start">
      {/* Linkerkolom: invoer + alle uitleg-secties, één doorlopende kolom */}
      <div className="space-y-6">
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-medium text-lg mb-4 flex items-center">
            <Calculator className="w-5 h-5 mr-2 text-primary" />
            Bereken mengverhouding
          </h2>

          <div className="space-y-5 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gewenste hoeveelheid (ml)</label>
              <input
                type="number"
                value={targetVolume}
                onChange={(e) => setTargetVolume(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') calculateMixing() }}
                placeholder="Bijv. 135"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none text-gray-800 placeholder:text-gray-500"
              />
            </div>

            <div className="bg-default border border-gray-200 rounded-xl p-4">
              <h3 className="font-medium text-primary mb-2">Standaardverhouding: 1 afgestreken schepje per 30 ml water</h3>
              <p className="text-sm text-gray-600">
                De meeste Nederlandse merken (Nutrilon, Hero Baby, Kruidvat, HiPP) hanteren 1 afgestreken maatschepje per 30 ml water. Het poeder lost op zonder het volume noemenswaardig te vergroten. Controleer altijd de verpakking, want dit kan per merk verschillen.
              </p>
            </div>
          </div>

          <button
            onClick={calculateMixing}
            className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2"
          >
            <Calculator className="w-5 h-5" />
            <span>Bereken mengverhouding</span>
          </button>
        </div>

        {/* Uitleg-secties (Snel overzicht, uitleg, veiligheid, FAQ, links):
            komen direct onder Bereken mengverhouding in dezelfde kolom */}
        {children}
      </div>

      {/* Rechterkolom: resultaat + alternatieven + aanbevolen producten (sticky) */}
      <div className="space-y-6 mt-6 lg:mt-0 lg:sticky lg:top-6">
        {results ? (
          <>
            <div className="bg-primary-gradient rounded-2xl shadow-lg p-5 text-white">
              <h3 className="font-medium text-lg mb-4 flex items-center">
                {results.isExact ? <Check className="w-5 h-5 mr-2" /> : <AlertCircle className="w-5 h-5 mr-2" />}
                Mengverhouding
              </h3>
              <div className="space-y-2.5">
                <div className="bg-white/20 backdrop-blur rounded-xl p-3 flex items-center justify-between">
                  <span className="text-sm text-white/70">Afgestreken schepjes</span>
                  <span className="text-2xl font-medium text-white">{results.scoopsNeeded}</span>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-3 flex items-center justify-between">
                  <span className="text-sm text-white/70">Water</span>
                  <span className="text-2xl font-medium text-white">{results.waterNeeded} ml</span>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-3 flex items-center justify-between">
                  <span className="text-sm text-white/70">Totaal volume</span>
                  <span className="text-2xl font-medium text-white">{results.actualVolume} ml</span>
                </div>
              </div>
            </div>

            {!results.isExact && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-amber-800">Let op: niet precies</p>
                    <p className="text-sm text-amber-700">
                      Het komt {results.difference.toFixed(1)} ml af van je gewenste hoeveelheid. Kies hieronder de dichtstbijzijnde optie met hele schepjes; een klein verschil is geen probleem.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Alternatieven, compact voor de smalle kolom */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
              <h4 className="text-sm font-medium text-gray-800 mb-3">Alternatieve verhoudingen (hele schepjes)</h4>
              <div className="space-y-2">
                {results.alternatives.map((alt, index) => (
                  <div key={index} className={`p-3 rounded-xl border ${alt.difference < 2 ? 'bg-default border-primary/30' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-800">{alt.scoops} schepjes</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${alt.difference < 2 ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'}`}>
                        {alt.difference === 0 ? 'Precies' : `${alt.difference.toFixed(1)} ml`}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">+ {alt.water} ml water = {alt.volume} ml</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-6 text-center">
            <Calculator className="w-8 h-8 mx-auto text-gray-300 mb-2" />
            <p className="text-sm text-gray-400">
              Vul een hoeveelheid in en bereken je mengverhouding. Het resultaat verschijnt hier.
            </p>
          </div>
        )}

        <PopularProductsWidget limit={4} />
      </div>
    </div>
  )
}
