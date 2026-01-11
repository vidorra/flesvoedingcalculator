'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Info, ChevronDown } from 'lucide-react'

export default function PrematureInputSection({
  gestationalAge,
  onGestationalAgeChange,
  birthDate,
  onBirthDateChange,
  correctedAge,
  prematureCategory
}) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [showSourcesTooltip, setShowSourcesTooltip] = useState(false)

  return (
    <div className="space-y-5">
      {/* Info Box */}
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
            onChange={(e) => onGestationalAgeChange(e.target.value)}
            className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none appearance-none bg-white text-gray-800"
          >
            <option value="">Selecteer weken</option>
            {Array.from({ length: 14 }, (_, i) => i + 24).map(week => (
              <option key={week} value={week}>{week} weken</option>
            ))}
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
          onChange={(e) => onBirthDateChange(e.target.value)}
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
                    <strong>Categorie:</strong><br />{prematureCategory}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
