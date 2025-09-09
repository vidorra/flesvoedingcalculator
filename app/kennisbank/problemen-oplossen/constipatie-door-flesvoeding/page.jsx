import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { AlertCircle, Heart, Clock, Users, CheckCircle } from 'lucide-react'

export default function ConstipatieFlespagePage() {
  const sidebarImages = [
    {
      src: "/constipatie-baby.png",
      alt: "Constipatie bij baby's herkennen",
      caption: "Signalen van constipatie herkennen"
    },
    {
      src: "/buik-massage.png", 
      alt: "Buik massage technieken",
      caption: "Massage technieken voor verlichting"
    },
    {
      src: "/comfort-formule.png",
      alt: "Comfort flesvoeding opties",
      caption: "Speciale formules kunnen helpen"
    }
  ]

  const adTopics = ["Constipatie baby", "Flesvoeding problemen", "Baby gezondheid"]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Problemen Oplossen • Spijsvertering</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3 text-primary" />
                Constipatie door flesvoeding: Herkenning, oorzaken en effectieve oplossingen
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Complete gids voor ouders om verstopping bij flesvoeding te begrijpen en behandelen
              </p>
            </div>

            {/* Wat is constipatie */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Wat is constipatie bij baby's?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Constipatie bij baby's is anders dan bij volwassenen en wordt vaak verkeerd geïnterpreteerd door ouders. Het gaat niet alleen om frequentie, maar vooral om consistentie en moeite met poepen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Normale ontlasting patronen per leeftijd</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>0-6 weken:</strong> 3-4 keer per dag</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>6 weken-3 maanden:</strong> 1-3 keer per dag</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>3-6 maanden:</strong> Om de dag tot 1x per dag</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>6+ maanden:</strong> 1x per dag tot om de dag</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Echte constipatie kenmerken</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Harde, droge ontlasting (kleine balletjes)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Zichtbare moeite en pijn bij poepen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Huilen en persen voorafgaand aan ontlasting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Bloed op ontlasting door hard persen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Minder frequent dan normaal voor dat kind</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                <h3 className="font-medium text-gray-700 mb-2">Niet constipatie:</h3>
                <ul className="space-y-1">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Normaal persen (baby's gebruiken hele lichaam)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Rood worden tijdens poepen (normale inspanning)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Een dag overslaan (kan normaal zijn)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Zachte ontlasting ook al is het minder frequent</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Waarom flesvoeding vaker constipatie veroorzaakt */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Waarom flesvoeding vaker constipatie veroorzaakt</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-primary mb-3">Samenstelling verschillen met moedermelk</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Flesvoeding eigenschappen</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Hogere eiwitgehalte: moeilijker verteerbaar</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Koemelkeiwitten: anders gestructureerd</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">IJzer toevoeging: kan verstoppend werken</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Spijsvertering impact</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Langzamere doorvoer in darmen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Andere darmflora samenstelling</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Harder eindproduct door structuur</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Voeding gerelateerde factoren</h3>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Dehydratie risico:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Inadequate vloeistofinname, vooral bij warm weer</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Te geconcentreerde melk door verkeerde bereiding</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Onvoldoende water tussen voedingen (6+ maanden)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Onmiddellijke oplossingen */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Onmiddellijke oplossingen
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Voeding aanpassingen</h3>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Verdunning aanpassen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">Extra water: 10-15ml extra per fles (tijdelijk)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">Juiste verhouding: dubbel check poeder/water ratio</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">Zachter water: gefilterd water proberen</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Fysieke interventies</h3>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Massage technieken:</h4>
                    <ol className="space-y-2">
                      <li className="flex space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">1</span>
                        <div>
                          <strong className="text-gray-700">Buik massage:</strong>
                          <span className="text-gray-600 text-sm ml-2">Zachte cirkelende bewegingen met klok mee</span>
                        </div>
                      </li>
                      <li className="flex space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">2</span>
                        <div>
                          <strong className="text-gray-700">Bicycle legs:</strong>
                          <span className="text-gray-600 text-sm ml-2">Beentjes voorzichtig bewegen alsof fietsen</span>
                        </div>
                      </li>
                      <li className="flex space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">3</span>
                        <div>
                          <strong className="text-gray-700">Knie-naar-buik:</strong>
                          <span className="text-gray-600 text-sm ml-2">Beentjes zachtjes naar buik duwen en loslaten</span>
                        </div>
                      </li>
                    </ol>
                    
                    <div className="mt-3 text-sm text-gray-600">
                      <strong>Timing:</strong> Voor voeding en wanneer baby ontspannen is
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Natuurlijke hulpmiddelen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Veilige home remedies:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Pruimen sap: 15-30ml per dag (6+ maanden)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Warm waterbad: ontspant en stimuleert</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Zachte buik warmte: warme handdoek</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">NOOIT gebruiken bij baby's:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Laxatives voor volwassenen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Honing (botulisme risico &lt;12 maanden)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Thermometer stimulatie</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leeftijd-specifieke strategieën */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Leeftijd-specifieke strategieën
              </h2>
              
              <div className="space-y-6">
                <div className="mb-4">
                  <h3 className="font-medium text-primary mb-3">0-3 maanden: Gevoelige periode</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Verwachtingen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Meer gevoelig voor constipatie</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Frequent pooping nog normaal</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Spijsverteringssysteem ontwikkelt nog</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Strategieën:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Dagelijks zachte buik massage</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Minimale aanpassingen concentratie</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Sneller contact bij zorgen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium text-primary mb-3">6+ maanden: Transitie periode</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Grote veranderingen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Solid food introduction</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Water needs increase</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Sitting development helpt</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Strategieën:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">High fiber foods: pruimen, peren</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Increased water: 100-200ml per dag</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Activity promotion: crawling stimuleert</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wanneer medisch advies */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Wanneer medisch advies zoeken</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Urgent situations (zelfde dag contact):</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Geen ontlasting {'>'}4 dagen ondanks interventies</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Bloed in ontlasting meer dan kleine sporen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Braken in combinatie met constipatie</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Koorts boven 38°C met constipatie</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Extreme onrust en huilen</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Routine medical consultation:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Persistent constipatie {'>'}2 weken ondanks aanpassingen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Growth concerns gecombineerd met constipatie</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Parent stress wordt te groot</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Actieplan */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Samenvatting: Stap-voor-stap actieplan</h2>
              
              <div className="space-y-4">
                <div className="mb-4">
                  <h3 className="font-medium text-primary mb-3">Dag 1-3: Immediate relief</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Buik massage 2-3x per dag</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Bicycle leg exercises</span>
                      </li>
                    </ul>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Warm bath voor ontspanning</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Check bereiding ratio correct</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium text-primary mb-3">Week 2: Advanced interventions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Consider comfort formula switch</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Increase hydration (age appropriate)</span>
                      </li>
                    </ul>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Medical consultation if no improvement</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Family support/stress reduction</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                <h3 className="font-medium text-gray-700 mb-2">Key reminders:</h3>
                <ul className="space-y-1">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">Constipatie door flesvoeding is veel voorkomend maar oplosbaar</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">Met juiste technieken, geduld en eventueel medische ondersteuning verbetert het bijna altijd binnen 1-2 weken</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link 
                  href="/calculator"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-primary">Hulp nodig bij het aanpassen van voedingshoeveelheden? →</div>
                    <div className="text-sm text-gray-600">Gebruik onze flesvoeding calculator voor aangepaste aanbevelingen</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Related articles */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Gerelateerde artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/soorten-flesvoeding/anti-reflux-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Anti-reflux flesvoeding →</div>
                  <div className="text-sm text-gray-600">Voor baby's met spijsverteringsproblemen</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Fles bereiden stap voor stap →</div>
                  <div className="text-sm text-gray-600">Correcte bereiding voorkomt problemen</div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Eerste keer flesvoeding →</div>
                  <div className="text-sm text-gray-600">Complete beginnersgids</div>
                </Link>
                <Link href="/kennisbank/problemen-oplossen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Meer probleemoplossing →</div>
                  <div className="text-sm text-gray-600">Overzicht alle problemen</div>
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