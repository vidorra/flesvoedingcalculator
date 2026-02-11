import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Zap, AlertTriangle, Thermometer, CheckCircle, Clock, RefreshCw } from 'lucide-react'

export const metadata = {
  title: 'Veilig verwarmen van flesvoeding: Complete Nederlandse gids 2025',
  description: 'Flesvoeding veilig verwarmen voorkomt brandwonden en behoudt voedingsstoffen. Vergelijking alle verwarmingsmethodes en praktische tips voor Nederlandse ouders.',
  keywords: 'flesvoeding verwarmen, veilig verwarmen melk, flessenwarmer, waterpad, magnetron gevaar, baby brandwonden voorkomen'
}

export default function VeiligVerwarmenFlesvoedingPage() {
  const sidebarImages = [
    {
      src: "/flesvoeding.webp",
      alt: "Flesvoeding verwarmen in waterpad",
      caption: "Veilige waterpad methode voor gelijkmatige verhitting"
    },
    {
      src: "/kunstvoeding.webp", 
      alt: "Magnetron gevaren flesvoeding",
      caption: "Waarom magnetron gebruik gevaarlijk is"
    },
    {
      src: "/close-up-baby.webp",
      alt: "Temperatuur testen op pols",
      caption: "Correct temperatuur testen op pols"
    }
  ]

  const adTopics = ["Veilig verwarmen flesvoeding", "Flessenwarmer", "Magnetron gevaar"]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Hygiëne & Bereiding • Veilig Verwarmen</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-primary" />
                Veilig verwarmen van flesvoeding: Complete Nederlandse gids
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Flesvoeding veilig verwarmen voorkomt brandwonden en behoudt voedingsstoffen. Deze uitgebreide gids vergelijkt alle verwarmingsmethodes en geeft praktische tips voor Nederlandse ouders.
              </p>
            </div>

            {/* Introduction */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed">
                Correct verwarmen van flesvoeding is cruciaal voor de veiligheid van je baby. Verkeerd verwarmen kan leiden tot ernstige brandwonden, terwijl oververhitting waardevolle voedingsstoffen vernietigt. Deze gids helpt je de veiligste methodes te kiezen en gevaarlijke fouten te vermijden.
              </p>
            </section>

            {/* Waarom juist verwarmen cruciaal is */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Waarom juist verwarmen cruciaal is
              </h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-amber-800 mb-2">Let op - Kritieke veiligheidsrisico's</h3>
                      <p className="text-amber-700 leading-relaxed">Baby's mondje is extreem gevoelig. Temperaturen boven 40°C kunnen brandwonden veroorzaken, terwijl boven 60°C tweede-graads brandwonden en permanente schade aan smaakpapillen mogelijk zijn.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Veiligheidsrisico's bij verkeerd verwarmen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-primary mb-2">Brandwonden voorkomen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Baby's mondje extreem gevoelig</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Interne brandwonden mogelijk</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Tweede-graads bij &gt;60°C</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Permanente smaakpapil schade</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2">Voedingsstoffen behouden:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Vitamines B en C vernietigd</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Probiotica sterven af &gt;45°C</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Eiwitstructuur verandert</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Enzymen worden inactief</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2">Bacteriële veiligheid:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Koud blijvende plekken</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Te lage temperatuur risico</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Ongelijkmatige verhitting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-medium text-primary mb-2">Ideale drinktemperatuur</h3>
                  <p className="text-gray-700"><strong>35-37°C (lichaamstemperatuur)</strong> - voelt lauwwarm aan op je pols</p>
                </div>
              </div>
            </div>

            {/* Magnetron gevaren */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Magnetron: gevaren en waarom experts afraden</h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-amber-800 mb-2">Nederlandse veiligheidswaarschuwing</h3>
                      <p className="text-amber-700 leading-relaxed">De Nederlandse Vereniging voor Kindergeneeskunde en het Voedingscentrum raden het gebruik van magnetrons voor flesvoeding ten strengste af.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Waarom magnetron gevaarlijk is</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-primary mb-2">1. Ongelijkmatige verhitting</h4>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-700 mb-2">Magnetron verwarmt:</p>
                        <ul className="space-y-1">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-600 text-sm">Buitenkant fles: 25°C (koud)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-600 text-sm">Midden van melk: 80°C (brandend heet)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-600 text-sm">Resultaat: Schijnbaar koude fles met kokende kernen</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2">2. "Hot Spots" probleem</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Microscopische hete plekken ontstaan willekeurig</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Ondetecteerbaar bij gewone temperatuurtests</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Extreme temperaturen tot 90°C mogelijk</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Ernstige mond/keelbrandwonden geregistreerd</span></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2">3. Voedingswaarde verlies</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Magnetron vernietigheid:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Vitamine B1: 40% verlies</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Vitamine B12: 30% verlies</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Lysine: 50% verlies</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Antioxidanten: 60% verlies</span></li>
                          </ul>
                        </div>
                        
                        <div className="bg-amber-50 rounded-lg p-3">
                          <p className="text-sm text-amber-700 mb-1">Nederlandse ziekenhuis data:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-amber-700">85% brandwonden magnetron gerelateerd</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-amber-700">Gemiddelde opname: 3-7 dagen</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-amber-700">Kosten per incident: €8.000-€15.000</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Waterpad verwarming */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Waterpad verwarming: de veiligste methode</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Waterpad/Waterbad: stap-voor-stap guide</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-primary mb-2">Benodigdheden:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Pan of grote kom</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Warm water (niet kokend)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Thermometer (optioneel)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Timer</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Schone theedoek</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2">Perfecte waterpad methode:</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                          <span className="text-gray-600 text-sm">Vul pan met warm water (50-60°C)</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                          <span className="text-gray-600 text-sm">Plaats fles in water (niet onderdompelen)</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                          <span className="text-gray-600 text-sm">Draai fles elke 30 seconden</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
                          <span className="text-gray-600 text-sm">Test temperatuur na 2-3 minuten</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">5</div>
                          <span className="text-gray-600 text-sm">Herhaal indien nodig</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Timing overzicht</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-white">
                          <th className="border border-gray-300 px-4 py-2 text-left">Start Temperatuur</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Eindtemperatuur</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Benodigde Tijd</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Koelkast (4°C)</td>
                          <td className="border border-gray-300 px-4 py-2">Drinkklaar (37°C)</td>
                          <td className="border border-gray-300 px-4 py-2">4-6 minuten</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Kamertemp (20°C)</td>
                          <td className="border border-gray-300 px-4 py-2">Drinkklaar (37°C)</td>
                          <td className="border border-gray-300 px-4 py-2">2-3 minuten</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Te heet (50°C)</td>
                          <td className="border border-gray-300 px-4 py-2">Drinkklaar (37°C)</td>
                          <td className="border border-gray-300 px-4 py-2">1-2 min. afkoelen</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-primary mb-2">Voordelen waterpad:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Gelijkmatige verhitting - geen hot spots</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Behoudt voedingsstoffen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Veilig voor alle flesmateriaal</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Goedkoop - geen apparatuur</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-medium text-amber-800 mb-2">Nadelen waterpad:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span className="text-amber-700">Langzamer (2-6 minuten)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span className="text-amber-700">Handmatig werk - toezicht nodig</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span className="text-amber-700">Water ververser per fles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Alle verwarmingsmethodes vergeleken */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Alle verwarmingsmethodes vergeleken</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Flessenwarmer (elektrisch)</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-primary mb-2">Hoe het werkt:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Stoom- of waterbadprincipe</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Thermostaatregeling</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Automatische uitschakeling</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Ook 12V modellen voor auto</span></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2">Voor- en nadelen:</h4>
                      <div className="space-y-2">
                        <div>
                          <p className="text-gray-700">Voordelen:</p>
                          <ul className="text-sm space-y-1">
                            <li className="text-gray-700"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Constante temperatuur (±2°C)</span></li>
                            <li className="text-gray-700"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Automatisch proces</span></li>
                            <li className="text-gray-700"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Ideaal voor nachtvoedingen</span></li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-amber-700">Nadelen:</p>
                          <ul className="text-sm space-y-1">
                            <li className="text-amber-700"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Aanschafkosten €25-€80</span></li>
                            <li className="text-amber-700"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Langzaam: 4-8 minuten</span></li>
                            <li className="text-amber-700"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Extra apparaat op aanrecht</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Beste elektrische flessenwarmer modellen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">Philips AVENT (€35-45)</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Nederlandse garantie</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Compatibel alle flesmerken</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Auto-uitschakeling</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">Tommee Tippee (€25-35)</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Snelle opwarming (3-4 min)</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">LED indicatoren</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Compact design</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">MAM (€30-40)</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Extra stil (nachtgebruik)</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Energiezuinig</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">Nederlands merkservice</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Complete vergelijkingstabel</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-3">Waterpad</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-gray-600">Snelheid:</span> <span className="text-gray-700">Gemiddeld (2-6 min)</span></div>
                        <div><span className="text-gray-600">Veiligheid:</span> <span className="text-gray-700">Excellent (Perfect)</span></div>
                        <div><span className="text-gray-600">Kosten:</span> <span className="text-gray-700">Excellent (Gratis)</span></div>
                        <div><span className="text-gray-600">Gemak:</span> <span className="text-gray-700">Gemiddeld (Handmatig)</span></div>
                        <div><span className="text-gray-600">Voedingsstoffen:</span> <span className="text-gray-700">Excellent (Behouden)</span></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-3">Flessenwarmer</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-gray-600">Snelheid:</span> <span className="text-gray-700">Gemiddeld (3-8 min)</span></div>
                        <div><span className="text-gray-600">Veiligheid:</span> <span className="text-gray-700">Excellent (Excellent)</span></div>
                        <div><span className="text-gray-600">Kosten:</span> <span className="text-gray-700">Gemiddeld (€25-80)</span></div>
                        <div><span className="text-gray-600">Gemak:</span> <span className="text-gray-700">Excellent (Automatisch)</span></div>
                        <div><span className="text-gray-600">Voedingsstoffen:</span> <span className="text-gray-700">Excellent (Behouden)</span></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-3">Stromend water</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-gray-600">Snelheid:</span> <span className="text-gray-700">Goed (1-3 min)</span></div>
                        <div><span className="text-gray-600">Veiligheid:</span> <span className="text-gray-700">Goed (Goed)</span></div>
                        <div><span className="text-gray-600">Kosten:</span> <span className="text-gray-700">Goed (Water)</span></div>
                        <div><span className="text-gray-600">Gemak:</span> <span className="text-gray-700">Goed (Eenvoudig)</span></div>
                        <div><span className="text-gray-600">Voedingsstoffen:</span> <span className="text-gray-700">Goed (Goed)</span></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-3">Thermosfles</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-gray-600">Snelheid:</span> <span className="text-gray-700">Excellent (30 sec)</span></div>
                        <div><span className="text-gray-600">Veiligheid:</span> <span className="text-gray-700">Goed (Goed)</span></div>
                        <div><span className="text-gray-600">Kosten:</span> <span className="text-gray-700">Goed (€15-30)</span></div>
                        <div><span className="text-gray-600">Gemak:</span> <span className="text-gray-700">Excellent (Onderweg)</span></div>
                        <div><span className="text-gray-600">Voedingsstoffen:</span> <span className="text-gray-700">Goed (Goed)</span></div>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 rounded-lg p-4">
                      <h4 className="font-medium text-amber-800 mb-3">Magnetron</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-amber-700">Snelheid:</span> <span className="text-amber-800">Excellent (30 sec)</span></div>
                        <div><span className="text-amber-700">Veiligheid:</span> <span className="text-gray-700">GEVAARLIJK</span></div>
                        <div><span className="text-amber-700">Kosten:</span> <span className="text-amber-800">Excellent (Gratis)</span></div>
                        <div><span className="text-amber-700">Gemak:</span> <span className="text-amber-800">Excellent (1 knop)</span></div>
                        <div><span className="text-amber-700">Voedingsstoffen:</span> <span className="text-gray-700">VERNIETIGD</span></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-3">Auto 12V</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-gray-600">Snelheid:</span> <span className="text-gray-700">Traag (5-10 min)</span></div>
                        <div><span className="text-gray-600">Veiligheid:</span> <span className="text-gray-700">Goed (Goed)</span></div>
                        <div><span className="text-gray-600">Kosten:</span> <span className="text-gray-700">Gemiddeld (€40-60)</span></div>
                        <div><span className="text-gray-600">Gemak:</span> <span className="text-gray-700">Excellent (Onderweg)</span></div>
                        <div><span className="text-gray-600">Voedingsstoffen:</span> <span className="text-gray-700">Goed (Goed)</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Temperatuur testen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Thermometer className="w-5 h-5 mr-2" />
                Temperatuur testen: hoe doe je dat veilig?
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Professionele test methodes</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">1. Pols test (meest betrouwbaar)</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                          <span className="text-gray-700 text-sm">Schud fles goed (meng temperaturen)</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                          <span className="text-gray-700 text-sm">Draai dop los</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                          <span className="text-gray-700 text-sm">Laat 2-3 druppels vallen op binnenkant pols</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
                          <span className="text-gray-700 text-sm">Moet lauwwarm aanvoelen - niet heet, niet koud</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">2. Digitale thermometer (meest nauwkeurig)</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="text-center">
                          <div className="text-sm text-primary">35-37°C</div>
                          <div className="font-medium text-gray-700">Perfect</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-primary">30-34°C</div>
                          <div className="font-medium text-gray-700">Iets te koel</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-amber-600">38-40°C</div>
                          <div className="font-medium text-amber-700">Te warm</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-amber-600">41°C+</div>
                          <div className="font-medium text-amber-700">Gevaarlijk</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Wat NIET te doen</h3>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-amber-800 mb-2">Gevaarlijke test methodes - NOOIT doen:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span className="text-amber-700">Testen met eigen mond/tong</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span className="text-amber-700">Alleen buitenkant fles voelen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span className="text-amber-700">Baby laten "proeven" eerst</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span className="text-amber-700">Gokken op basis van verwarmtijd</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span className="text-amber-700">Test overslaan bij tijdnood</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-700 mb-2">Nederlandse ER statistieken:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">67% brandwonden: onvoldoende getest</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">23% brandwonden: verkeerde testmethode</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600 text-sm">10% brandwonden: technische falen apparatuur</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Veelgemaakte fouten */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelgemaakte fouten vermijden</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Top 5 gevaarlijke verwarmingsfouten</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">1. Magnetron gebruik</h4>
                      <p className="text-gray-600 mb-1">Fout: "Magnetron is sneller en makkelijker"</p>
                      <p className="text-gray-700 mb-1">Correct: Waterpad of flessenwarmer gebruiken</p>
                      <p className="text-amber-700">Risico: Ernstige brandwonden door hot spots</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">2. Fles niet schudden voor test</h4>
                      <p className="text-gray-600 mb-1">Fout: Direct testen na verwarming</p>
                      <p className="text-gray-700 mb-1">Correct: Altijd eerst goed schudden</p>
                      <p className="text-amber-700">Risico: Koude buitenkant, hete binnenkant</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">3. Alleen buitenkant fles voelen</h4>
                      <p className="text-gray-600 mb-1">Fout: "Fles voelt goed aan"</p>
                      <p className="text-gray-700 mb-1">Correct: Melk zelf testen op pols</p>
                      <p className="text-amber-700">Risico: Verborgen hete plekken in melk</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">4. Herverwarmen van overgebleven melk</h4>
                      <p className="text-gray-600 mb-1">Fout: Restje melk later opnieuw verwarmen</p>
                      <p className="text-gray-700 mb-1">Correct: Overgebleven melk weggooien (max 1 uur)</p>
                      <p className="text-amber-700">Risico: Bacteriële groei, voedselvergiftiging</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">5. Temperatuur raden</h4>
                      <p className="text-gray-600 mb-1">Fout: "Het zal wel goed zijn na X minuten"</p>
                      <p className="text-gray-700 mb-1">Correct: Altijd temperatuur controleren</p>
                      <p className="text-amber-700">Risico: Brandwonden of te koude voeding</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Kostenfouten vermijden</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-white">
                          <th className="border border-gray-300 px-4 py-2 text-left">Fout</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Extra Kosten/Jaar</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Gezondere Keuze</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Alleen kant-en-klaar</td>
                          <td className="border border-gray-300 px-4 py-2">€800-1200</td>
                          <td className="border border-gray-300 px-4 py-2">Thermos + poeder</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Dure flessenwarmer</td>
                          <td className="border border-gray-300 px-4 py-2">€150</td>
                          <td className="border border-gray-300 px-4 py-2">Waterpad methode</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Energieverspilling</td>
                          <td className="border border-gray-300 px-4 py-2">€50-80</td>
                          <td className="border border-gray-300 px-4 py-2">Efficiënte apparaten</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Vervangen gebarsten flessen</td>
                          <td className="border border-gray-300 px-4 py-2">€30-60</td>
                          <td className="border border-gray-300 px-4 py-2">Voorzichtig verwarmen</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Veelgestelde vragen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelgestelde vragen</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Kan ik flesvoeding in de magnetron als ik de dop eraf doe?</h3>
                  <p className="text-gray-600 text-sm">Nee, absoluut niet. Ook zonder dop ontstaan er hot spots in de melk die brandwonden kunnen veroorzaken. De Nederlandse Vereniging voor Kindergeneeskunde adviseert magnetrons nooit te gebruiken voor babyvoeding.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Hoelang mag flesvoeding warm blijven staan?</h3>
                  <p className="text-gray-600 text-sm">Maximum 1 uur bij kamertemperatuur. Na 1 uur ontstaat bacteriegroei. Gebruik binnen dit tijdsbestek of gooi weg. Bewaren in koelkast na verwarming wordt afgeraden.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Welke flessenwarmer is het beste voor de prijs?</h3>
                  <p className="text-gray-600 text-sm">Philips AVENT (€35-45) biedt beste prijs-kwaliteitverhouding met Nederlandse garantie. Voor budget: waterpad methode (gratis) is even veilig.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Kan ik onderweg een fles in de zon laten warmen?</h3>
                  <p className="text-gray-600 text-sm">Gevaarlijk! Auto's in zon bereiken 60-80°C. Dit is te heet en ongelijkmatig. Gebruik altijd thermosfles of 12V flessenwarmer.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Hoe lang duurt een flessenwarmer?</h3>
                  <p className="text-gray-600 text-sm">3-8 minuten afhankelijk van starttemperatuur melk, hoeveelheid (150ml vs 250ml), type apparaat en gewenste eindtemperatuur.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Welke verwarmingsmethode is het milieuvriendelijkst?</h3>
                  <p className="text-gray-600 text-sm">Waterpad met warm kraanwater. Geen elektriciteitverbruik, geen extra apparaten. Thermosfles is tweede keuze (eenmalige energie-investering).</p>
                </div>
              </div>
            </div>

            <div className="">
              <p className="text-gray-700 text-sm text-center">
                Veilig verwarmen van flesvoeding is essentieel voor de gezondheid van je baby. Volg altijd de gouden regels: nooit magnetron, altijd temperatuur testen, en bij twijfel een veilige methode kiezen.
              </p>
            </div>

            {/* Call to action */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link 
                  href="/calculator"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-gray-700">Bereken de juiste hoeveelheid flesvoeding </div>
                    <div className="text-gray-600">Precies de juiste temperatuur en hoeveelheid</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Verwarmen Voeding Producten */}
            <AffiliateProductWidget
              pageId="hygiene-bereiding_veilig-verwarmen-flesvoeding"
              title="Verwarmen Voeding Producten"
            />

            {/* Related articles */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <RefreshCw className="w-5 h-5 mr-2" />
                Gerelateerde artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/hygiene-bereiding/houdbaarheid-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Houdbaarheid flesvoeding </div>
                  <div className="text-gray-600">Veilige bewaring en tijdslimieten</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/juiste-temperatuur-controleren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Juiste temperatuur controleren </div>
                  <div className="text-gray-600">Temperatuur testen en controleren</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Fles bereiden stap voor stap </div>
                  <div className="text-gray-600">Complete bereiding handleiding</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/flessen-steriliseren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Flessen steriliseren </div>
                  <div className="text-gray-600">Hygiënische fles voorbereiding</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}