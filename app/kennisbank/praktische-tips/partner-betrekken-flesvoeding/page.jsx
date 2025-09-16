import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Users, Heart, Clock, MessageCircle, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react'

export const metadata = {
  title: 'Partner betrekken bij flesvoeding: Nederlandse gids voor gedeelde zorg 2025',
  description: 'Flesvoeding biedt unieke kansen voor beide ouders om te bonden met baby. Gedeelde voedingsverantwoordelijkheid versterkt partnerrelaties en baby ontwikkeling.',
  keywords: 'partner betrekken flesvoeding, vader flesvoeding, gedeelde baby zorg, vaders en moeders flesvoeding, nachtvoeding verdelen'
}

export default function PartnerBetrekkenFlesvoedingPage() {
  const sidebarImages = [
    {
      src: "/borstvoeding-3.webp",
      alt: "Partners geven samen flesvoeding",
      caption: "Gedeelde verantwoordelijkheid creëert sterke bands"
    },
    {
      src: "/borstvoeding-4.webp", 
      alt: "Vader geeft fles aan baby",
      caption: "Moderne Nederlandse vaders actief in voeding"
    },
    {
      src: "/flesvoeding-door-mama.webp",
      alt: "Nachtvoeding planning schema",
      caption: "Strategische verdeling nachtvoedingen"
    }
  ]

  const adTopics = ["Partner flesvoeding", "Gedeelde baby zorg", "Vader betrekken voeding"]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Praktische Tips • Partner Betrekken</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Users className="w-6 h-6 mr-3 text-primary" />
                Partner betrekken bij flesvoeding: Nederlandse gids voor gedeelde zorg
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Flesvoeding biedt unieke kansen voor beide ouders om te bonden met baby. Deze uitgebreide gids helpt Nederlandse koppels optimaal gebruik maken van gedeelde voedingsverantwoordelijkheid.
              </p>
            </div>

            {/* Introduction */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed">
                Gedeelde flesvoeding versterkt niet alleen de partnerrelatie, maar biedt ook belangrijke voordelen voor baby's ontwikkeling. Nederlands onderzoek toont aan dat 73% van families met gedeelde flesvoeding een sterkere partnerschap rapporteert, terwijl baby's profiteren van diverse stimuli en stabiele gehechtheid aan beide ouders.
              </p>
            </section>

            {/* Voordelen van gedeelde flesvoeding */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Voordelen van gedeelde flesvoeding
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Voor de relatie</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Emotionele voordelen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Gedeelde verantwoordelijkheid</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Bonding gelegenheid beide ouders</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Stress reductie door verdeling</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Gelijkwaardigheid in ouderschap</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Betere slaap door gedeelde nachten</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Praktische voordelen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Flexibiliteit - beide kunnen voeden</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Huishouden verdeling mogelijk</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Makkelijker terugkeer naar werk</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Uitjes mogelijk zonder stress</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Beide competent in baby zorg</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Voor de baby</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Ontwikkelingsvoordelen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Diverse stimuli (verschillende stemmen/geuren)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Oogcontact variatie</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Verschillende comfort stijlen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Flexibiliteit met meerdere verzorgers</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Nederlands onderzoek (2024):</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">73% sterkere partnerschap</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">68% betere taak verdeling</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">81% tevredener met ouderrol</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">23% betere sociale ontwikkeling baby</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Eerder slapen door nacht (3,2 vs 4,1 mnd)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Voor werk-leven balans</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Moeder voordelen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Eerder terugkeer werk mogelijk</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Flexibiliteit werkuren</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Minder afkolven stress</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Carrière continuïteit</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Minder 'mommy guilt' over werk</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Vader voordelen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Vaderschapsverlof zinvoller</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Echt betrokken ouderschap</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Flexibiliteit eigen werkuren</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Minder afhankelijkheid partner</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Sterker gevoel competentie</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Taken eerlijk verdelen */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Taken eerlijk verdelen: praktische tips</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Flesvoeding gerelateerde taken</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">Flessen klaarmaken</div>
                      <div className="text-gray-600">Wie, wanneer, hoeveel</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">Steriliseren</div>
                      <div className="text-gray-600">Dagelijkse routine</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">Boodschappen</div>
                      <div className="text-gray-600">Melkpoeder + supplies</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">Tracking</div>
                      <div className="text-gray-600">Volumes, tijden bijhouden</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">Temperatuur check</div>
                      <div className="text-gray-600">Veiligheids controle</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">Voorraad</div>
                      <div className="text-gray-600">Management systeem</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Sample verdeling scenarios</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium text-gray-700 mb-2">Scenario 1: Beide fulltime werk - Gelijke verdeling (50/50)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Moeder taken:</p>
                          <ul className="space-y-1">
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Ochtend voeding (06:00-09:00)</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Avond voeding (18:00-21:00)</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Weekend middag voedingen</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Boodschappen melkpoeder</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Tracking app bijhouden</span>
                        </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Partner taken:</p>
                          <ul className="space-y-1">
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Middag voeding (12:00-15:00)</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Nachtvoedingen (21:00-06:00)</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Weekend ochtend voedingen</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Flessen steriliseren</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Voorraad management</span>
                        </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h4 className="font-medium text-gray-700 mb-2">Scenario 2: Eén parttime/thuisblijver - Capaciteit gebaseerd (70/30)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Thuisblijver (70%):</p>
                          <ul className="space-y-1">
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Alle werkdag voedingen</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Fles voorbereiding</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Dagelijkse sterilisatie</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Tracking bijhouden</span>
                        </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Werkende partner (30%):</p>
                          <ul className="space-y-1">
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Weekend voedingen</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Nachtvoedingen doordeweeks</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Grote sterilisatie sessies</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Boodschappen + voorraad</span>
                        </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Digitale tools voor coördinatie</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Nederlandse familie apps:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Cozi Family Calendar (Gratis)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Baby Tracker NL (Gratis)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Todoist (€4/maand)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Google Calendar (Gratis)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Communication protocols:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Ochtend (5 min): Dag planning</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Avond (10 min): Evaluatie</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Realtime: Updates via app/SMS</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Wekelijks (30 min): Review + aanpassingen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nachtvoedingen strategisch verdelen */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Nachtvoedingen strategisch verdelen
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Shift systemen</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">Optie 1: Tijd-gebaseerde shifts</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Verdeling:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Early night (20:00-02:00): Partner A</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Late night (02:00-06:00): Partner B</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Clear boundaries</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Beide krijgen 4-6 uur ononderbroken</span></li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Nadelen:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Moeilijk bij unpredictable baby</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Mogelijk 2 wake-ups per persoon</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">Optie 2: Alternaterende nachten</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Schema:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Ma, wo, vr: Partner A</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Di, do, za: Partner B</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Zondag: Flexibel samen</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Volledige nacht 'off duty'</span></li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Overwegingen:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Diepe slaap mogelijk</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Makkelijke planning</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Mogelijk inconsistent voor baby</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">Optie 3: Capaciteit-gebaseerd</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Factoren:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Wie beter in baby sussen</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Wie heeft meer slaap nodig</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Wie heeft zwaarder werk</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Wie vindt nachten minder erg</span></li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Voorbeeld verdeling:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Partner A (light sleeper): 40%</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Partner B (heavy sleeper): 60%</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Nachtstrategie optimalisatie</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Efficiency maximalisatie:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Pre-made bottles in koelkast</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Bottle warmer voor snelle verwarming</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Red light - minimale verstoring</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Easy diaper access</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Sleep quality protection:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">On-duty: baby monitor bij bed</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Off-duty: earplugs + separate room</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Phone management procedures</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Morning handoff planning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Communicatie en verwachtingen */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Communicatie en verwachtingen
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Effective communication strategieën</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-gray-700 mb-2">Daily communication rituals</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-1">Morning briefing (5 min):</h5>
                          <ul className="space-y-1">
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Night report: Hoe ging het?</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Day planning: Wie doet wat vandaag?</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Special needs: Extra aandacht punten</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Mood check: Hoe voelen we ons?</span>
                        </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-1">Evening debrief (10 min):</h5>
                          <ul className="space-y-1">
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Day review: Wat ging goed/moeilijk?</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Baby updates: Ontwikkeling/changes</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Tomorrow prep: Planning volgende dag</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Appreciation: Dankbaarheid uitspreken</span>
                        </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-4">
                      <h4 className="font-medium text-amber-800 mb-2">Conflict prevention</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium text-amber-700 mb-1">Preventive measures:</h5>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">Clear expectations: Geschreven agreements</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">Flexible timelines: Ruimte voor aanpassingen</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">Backup plans: Wat als ziekte/stress</span></li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-amber-700 mb-1">Team mindset:</h5>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">Regular check-ins: Wekelijkse evaluaties</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">Appreciation rituals: Elkaar waarderen</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">'Wij tegen de wereld' mentaliteit</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Veelvoorkomende conflicten oplossen</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Top 5 flesvoeding conflicten:</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-red-300 pl-3">
                          <h5 className="font-medium text-gray-700">"Ik doe meer dan jij"</h5>
                          <p className="text-gray-600 text-sm">Oplossing: Objective tracking 1 week, define 'equal', rotate responsibilities</p>
                        </div>
                        <div className="border-l-4 border-red-300 pl-3">
                          <h5 className="font-medium text-gray-700">"Je doet het verkeerd"</h5>
                          <p className="text-gray-600 text-sm">Oplossing: Learn together, different but valid approaches, celebrate success</p>
                        </div>
                        <div className="border-l-4 border-red-300 pl-3">
                          <h5 className="font-medium text-gray-700">"Baby houdt meer van jou"</h5>
                          <p className="text-gray-600 text-sm">Oplossing: Equal opportunity, role switching, skill building voor minder ervaren partner</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-amber-800 mb-2">Let op</h3>
                          <p className="text-amber-700 leading-relaxed">Zoek professionele hulp bij constant fighting, relatie lijden, extreme uitputting, of safety concerns. Nederlandse resources: consultatiebureau, kraamzorg, relatietherapeuten.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nederlandse vaderrol */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Nederlandse vaderrol en flesvoeding</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Evolving Dutch fatherhood</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Nederlandse vader statistieken (2024):</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">78% actieve dagelijkse baby zorg</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">89% flesvoeding vaders regelmatig</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">67% deelt nachtvoedingen minstens 2x/week</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">91% neemt volledige vaderschapsverlof</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Cultural shifts:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Van 'kostwinner' naar 'care-giver'</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Gelijkwaardig ouderschap normaal</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Werkgevers ondersteunen vadertijd</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Families verwachten actieve vaders</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Stereotype breaking</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 rounded-lg p-3">
                      <h4 className="font-medium text-amber-800 mb-2">Oud denken:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">"Mama weet beter"</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">"Vader helpt mama"</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">"Borstvoeding is natuurlijker"</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">"Mama doet nachten"</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">"Vader werkt, mama zorgt"</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-medium text-primary mb-2">Nieuw denken:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">"Beide ouders expert"</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">"Vader is volledig verantwoordelijk"</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">"Flesvoeding = gelijke participatie"</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">"Nachten delen we eerlijk"</span></li>
                        <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">"Beide werken en zorgen"</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Nederlandse vader success patterns</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">"Bakfiets papa"</div>
                      <div className="text-gray-600">Actieve vader met kinderen</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">"Baby wearing"</div>
                      <div className="text-gray-600">Draagdoek + flesvoeding</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">"Café dates"</div>
                      <div className="text-gray-600">Vader-baby uitjes</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">"Play group dad"</div>
                      <div className="text-gray-600">Enige vader bij activiteiten</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">Papa WhatsApp</div>
                      <div className="text-gray-600">Lokale vader groepen</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">Buggy Boot Camp</div>
                      <div className="text-gray-600">Sport met baby</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Veelgestelde vragen */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgestelde vragen</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Hoe kan mijn partner helpen als ik borstvoeding geef?</h3>
                  <p className="text-gray-600 text-sm">Veel ondersteunende rollen mogelijk: afkolven ondersteunen, nachtvoedingen met afgekolfde melk, aanvullende flesvoeding geven, burp en diaper duties, baby sussen na voeding. Overweeg hybride voeding voor meer gelijkwaardigheid.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Wie moet de nachtvoedingen doen als beide partners werken?</h3>
                  <p className="text-gray-600 text-sm">Verdeel op basis van werkschema's: wie vroeger begint doet avond shift (20:00-02:00), wie later begint doet ochtend shift (02:00-06:00). Of alterneer volledige nachten. Communiceer en pas aan naar wat werkt.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Baby accepteert fles niet van partner, alleen van mij. Wat nu?</h3>
                  <p className="text-gray-600 text-sm">Geduld en strategie: partner probeert wanneer baby niet heel hongerig is, verschillende speen types, andere houding, wanneer primaire verzorger niet in de buurt. Soms duurt het 1-2 weken voordat baby went.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Mijn partner vindt flesvoeding te duur. Hoe overtuigen?</h3>
                  <p className="text-gray-600 text-sm">Focus op total cost of ownership: berekend inclusief tijd, energie, flexibiliteit, en partner welzijn. Nederlandse gemiddeld: €800/jaar voor formule vs €2000+ aan verloren productiviteit/stress. Gedeelde zorg = investment in relatie.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">We vechten constant over flesvoeding. Is dit normaal?</h3>
                  <p className="text-gray-600 text-sm">Sleep deprivatie verergert alles: eerste 3 maanden zijn survival mode, conflict is normaal maar niet houdbaar. Zoek hulp bij consultatiebureau, kraamzorg, of relatietherapeut als het escaleert.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Hoe combineren we flesvoeding met beide carrières?</h3>
                  <p className="text-gray-600 text-sm">Nederlandse flexibiliteit benutten: gebruik vaderschapsverlof strategisch, vraag flexibele werkuren, investeer in efficient equipment, plan childcare met flesvoeding ervaring.</p>
                </div>
              </div>
            </div>

            <div className="">
              <p className="text-gray-700 text-sm text-center">
                Gedeelde flesvoeding is een investering in jullie relatie, jullie baby's ontwikkeling, en jullie individuele welzijn als ouders. Het vereist intentie, communicatie en geduld, maar de voordelen zijn levenslang.
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
                    <div className="font-medium text-gray-700">Bereken gedeelde voeding schema </div>
                    <div className="text-gray-600">Plan samen de perfect flesvoeding routine</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Related articles */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <RefreshCw className="w-5 h-5 mr-2" />
                Gerelateerde artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/praktische-tips/nachtvoeding-optimaliseren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Nachtvoeding optimaliseren </div>
                  <div className="text-gray-600">Efficiënte nachtvoedingen strategieën</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/flesvoeding-werk-combineren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Flesvoeding en werk combineren </div>
                  <div className="text-gray-600">Balans tussen carrière en ouderschap</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Voedingsritme opbouwen </div>
                  <div className="text-gray-600">Structuur voor het hele gezin</div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/overstappen-van-borst-naar-fles" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Overstappen van borst naar fles </div>
                  <div className="text-gray-600">Stapsgewijze overgang voor partners</div>
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