'use client'
import { useState } from 'react'
import { Baby, AlertCircle, Info } from 'lucide-react'

export default function CalculatorResults({
  results,
  customAmount,
  setCustomAmount,
  customSchepjes,
  calculateCustomSchepjes
}) {
  const [showCustomInput, setShowCustomInput] = useState(false)
  const [showSchepjesTooltip, setShowSchepjesTooltip] = useState(false)
  const [showMedicalTooltip, setShowMedicalTooltip] = useState(false)

  if (!results) return null

  return (
    <div className="space-y-6">

      {/* Main Results */}
      <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <Baby className="w-5 h-5 mr-2" />
          Aanbevolen Hoeveelheden
        </h3>

        {/* Special Premature Alert */}
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
              </div>
              <div className="text-xl font-medium">{results.recommendedAmount} ml</div>
              <div className="text-xs text-white/60 mt-1">Bij groeispurt: tot {results.maxAmount} ml</div>
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
              {customSchepjes !== null
                ? `${customSchepjes} schepjes + ${customAmount}ml water`
                : `${Math.round((results.recommendedAmount / 30) * 10) / 10} schepjes + ${results.recommendedAmount}ml water`
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
                <strong>Tip:</strong> Bespreek deze berekening altijd met uw kinderarts of consultatiebureau voor persoonlijk advies.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Special Notes */}
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

      {/* Newborn Feeding Alert - 0-1 month */}
      {results.isNewborn && (
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-amber-800 mb-2">
                Belangrijk voor pasgeborenen (0-1 maand)
              </h4>
              <div className="text-sm text-amber-700 space-y-2">
                <p><strong>Eerste dagen:</strong> Start met 10-15ml per voeding, verhoog dagelijks met ca. 10ml tot de aanbevolen hoeveelheid is bereikt.</p>
                <p><strong>Verzadigingssignalen:</strong> Baby duwt fles weg of draait hoofdje weg = vol. Dwing nooit door.</p>
                <p><strong>Frequentie:</strong> Voeding om de 2-3 uur, 8-12x per dag in de eerste weken.</p>
                <p><strong>Advies:</strong> Raadpleeg uw verloskundige of consultatiebureau bij vragen.</p>
              </div>
            </div>
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
  )
}
