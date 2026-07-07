import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Users, Heart, Clock, MessageCircle, CheckCircle, AlertTriangle, RefreshCw, ArrowRight, } from 'lucide-react'

export const metadata = {
  title: 'Partner betrekken bij flesvoeding: Nederlandse gids voor gedeelde zorg 2026',
  description: 'Flesvoeding biedt unieke kansen voor beide ouders om te binden met baby. Gedeelde voedingsverantwoordelijkheid versterkt partnerrelaties en baby ontwikkeling.',
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
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Users className="w-6 h-6 mr-3 text-primary" />
                Partner betrekken bij flesvoeding: Nederlandse gids voor gedeelde zorg
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Flesvoeding biedt unieke kansen voor beide ouders om te binden met baby. Deze uitgebreide gids helpt Nederlandse koppels optimaal gebruik maken van gedeelde voedingsverantwoordelijkheid.
              </p>
            </div>

            {/* Introduction */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed">
                Gedeelde flesvoeding geeft beide ouders de kans om te binden met de baby en om de zorg eerlijker te verdelen. Veel ouders ervaren dat het samen oppakken van de voedingen de taakverdeling makkelijker maakt, terwijl de baby went aan het gevoed worden door beide ouders. Hoe dat voor jullie uitpakt, verschilt per gezin.
              </p>
            </section>

            {/* Voordelen van gedeelde flesvoeding */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
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
                          <span className="text-gray-700 text-sm">Hechting gelegenheid beide ouders</span>
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
                          <span className="text-gray-700 text-sm">Flexibiliteit: beide ouders kunnen voeden</span>
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
                      <h4 className="font-medium text-gray-700 mb-2">Ervaringen van ouders:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Vaak een gelijkwaardiger gevoel in de zorg</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Betere taakverdeling</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Meer tevredenheid met de ouderrol</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Positieve sociale ontwikkeling baby</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Baby's wennen sneller aan meerdere verzorgers</span>
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
                          <span className="text-gray-600 text-sm">Continuïteit in de loopbaan</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Minder schuldgevoel over werken</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Voordelen voor de partner:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Geboorteverlof en partnerverlof zinvoller besteed</span>
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
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Taken eerlijk verdelen: praktische tips</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Taken rondom flesvoeding</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="font-medium text-gray-700">Flessen klaarmaken</div>
                      <div className="text-gray-600">Wie, wanneer, hoeveel</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-700">Steriliseren</div>
                      <div className="text-gray-600">Dagelijkse routine</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-700">Boodschappen</div>
                      <div className="text-gray-600">Melkpoeder en benodigdheden</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-700">Bijhouden</div>
                      <div className="text-gray-600">Hoeveelheden en tijden noteren</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-700">Temperatuur controleren</div>
                      <div className="text-gray-600">Veiligheidscontrole</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-700">Voorraad</div>
                      <div className="text-gray-600">Voorraadbeheer</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Voorbeelden van verdeling</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Scenario 1: beide fulltime werk, gelijke verdeling (50/50)</h4>
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
                          <span className="text-gray-600 text-sm">Voedingsapp bijhouden</span>
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
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Scenario 2: één ouder parttime of thuis, verdeeld naar draagkracht (70/30)</h4>
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
                          <span className="text-gray-600 text-sm">Voedingen bijhouden</span>
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
                          <span className="text-gray-600 text-sm">Grote sterilisatiebeurten</span>
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
                      <h4 className="font-medium text-gray-700 mb-2">Handige apps:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Een gedeelde gezinskalender (gratis)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Een voedingsapp om voedingen bij te houden (gratis)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Een gedeelde takenlijst-app</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Google Agenda (gratis)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Afspraken over communicatie:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">'s Ochtends (5 min): de dag doornemen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">'s Avonds (10 min): de dag evalueren</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Tussendoor: korte updates via app of appje</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Wekelijks (30 min): terugblik en bijstellen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nachtvoedingen strategisch verdelen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Nachtvoedingen strategisch verdelen
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Diensten verdelen</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-primary mb-2">Optie 1: vaste tijdsblokken</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Verdeling:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Eerste deel van de nacht (20:00-02:00): ouder A</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Tweede deel van de nacht (02:00-06:00): ouder B</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Duidelijke afspraken</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Beiden krijgen 4-6 uur ononderbroken slaap</span></li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Nadelen:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Lastig bij een onvoorspelbaar ritme</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Soms twee keer wakker per persoon</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-medium text-primary mb-2">Optie 2: om en om hele nachten</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Schema:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Ma, wo, vr: ouder A</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Di, do, za: ouder B</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Zondag: flexibel samen</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">De ander heeft die nacht helemaal vrij</span></li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Overwegingen:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Diepe slaap mogelijk</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Makkelijke planning</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Mogelijk minder consistent voor de baby</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-medium text-primary mb-2">Optie 3: naar draagkracht</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Factoren:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Wie de baby beter tot rust krijgt</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Wie meer slaap nodig heeft</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Wie zwaarder werk heeft</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Wie nachten minder erg vindt</span></li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Voorbeeldverdeling:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Ouder A (lichte slaper): 40%</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-700 text-sm">Ouder B (diepe slaper): 60%</span></li>
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
                      <h4 className="font-medium text-gray-700 mb-2">Zo werk je efficiënter:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Voorbereide flessen in de koelkast</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Flessenwarmer voor snel opwarmen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Gedimd (rood) nachtlampje voor minimale verstoring</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Luiers en spullen binnen handbereik</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Slaapkwaliteit beschermen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Wie dienst heeft: babyfoon bij het bed</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Wie vrij is: oordopjes of aparte kamer</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Afspraken over de telefoon 's nachts</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Afspreken hoe je 's ochtends overdraagt</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Communicatie en verwachtingen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Communicatie en verwachtingen
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Praktische communicatie-afspraken</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Dagelijkse momenten</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-1">'s Ochtends (5 min):</h5>
                          <ul className="space-y-1">
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Hoe ging de nacht?</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Wie doet wat vandaag?</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Zijn er extra aandachtspunten?</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Hoe voelen we ons?</span>
                        </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-1">'s Avonds (10 min):</h5>
                          <ul className="space-y-1">
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Wat ging goed en wat was moeilijk?</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Bijzonderheden bij de baby</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Planning voor morgen</span>
                        </li>
                            <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Waardering uitspreken naar elkaar</span>
                        </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-4">
                      <h4 className="font-medium text-amber-800 mb-2">Conflicten voorkomen</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium text-amber-700 mb-1">Vooraf regelen:</h5>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">Duidelijke, liefst opgeschreven afspraken</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">Flexibiliteit: ruimte om bij te sturen</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">Een plan B bij ziekte of stress</span></li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-amber-700 mb-1">Als team:</h5>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">Regelmatig samen evalueren</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">Elkaar waarderen</span></li>
                            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-amber-700">'Samen sta je sterker'-mentaliteit</span></li>
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
                      <h4 className="font-medium text-gray-700 mb-2">Veelvoorkomende conflicten:</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-gray-700">"Ik doe meer dan jij"</h5>
                          <p className="text-gray-600 text-sm">Oplossing: houd een week objectief bij wie wat doet, spreek af wat jullie 'eerlijk' vinden en wissel taken af.</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-700">"Je doet het verkeerd"</h5>
                          <p className="text-gray-600 text-sm">Oplossing: leer het samen, accepteer dat er meerdere goede manieren zijn en benoem wat er wel goed gaat.</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-700">"De baby houdt meer van jou"</h5>
                          <p className="text-gray-600 text-sm">Oplossing: geef beide ouders evenveel gelegenheid, wissel van rol en laat de minder ervaren ouder rustig oefenen.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-amber-800 mb-2">Let op</h3>
                          <p className="text-amber-700 leading-relaxed">Zoek professionele hulp bij aanhoudende ruzies, een relatie die eronder lijdt, extreme uitputting of zorgen over de veiligheid. In Nederland kun je terecht bij het consultatiebureau, de kraamzorg of een relatietherapeut.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nederlandse vaderrol */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Nederlandse vaderrol en flesvoeding</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Het veranderende Nederlandse vaderschap</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Nederlandse vaders nu:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Steeds meer actieve dagelijkse babyzorg</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Bij flesvoeding geven vaders regelmatig de fles</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Veel vaders delen de nachtvoedingen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Geboorteverlof en partnerverlof worden steeds vaker volledig benut</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Verschuivingen in de cultuur:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Van 'kostwinner' naar 'verzorger'</span>
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
                  <h3 className="font-medium text-primary mb-3">Vastgeroeste beelden doorbreken</h3>
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
                    
                    <div className="p-3">
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
                  <h3 className="font-medium text-primary mb-3">Herkenbare vaderrollen in Nederland</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="font-medium text-gray-700">De bakfietspapa</div>
                      <div className="text-gray-600">Actieve vader met de kinderen</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-700">In de draagdoek</div>
                      <div className="text-gray-600">Draagdoek en flesvoeding</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-700">Terrasjes met de baby</div>
                      <div className="text-gray-600">Vader-baby uitjes</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-700">Bij het speelgroepje</div>
                      <div className="text-gray-600">Ook als enige vader aanwezig</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-700">Papa-appgroep</div>
                      <div className="text-gray-600">Lokale vadergroepen</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-700">Sporten met de kinderwagen</div>
                      <div className="text-gray-600">Bewegen met de baby erbij</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Widget */}
            <AffiliateProductWidget
              pageId="praktische-tips_partner-betrekken-flesvoeding"
              title="Partner Voeding Producten"
            />

            {/* Veelgestelde vragen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelgestelde vragen</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Hoe kan mijn partner helpen als ik borstvoeding geef?</h3>
                  <p className="text-gray-600 text-sm">Er zijn veel ondersteunende rollen mogelijk: helpen bij het afkolven, nachtvoedingen met afgekolfde melk, aanvullende flesvoeding geven, laten boeren en verschonen, en de baby sussen na de voeding. Combivoeding kan helpen om de zorg gelijkwaardiger te verdelen.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Wie doet de nachtvoedingen als beide ouders werken?</h3>
                  <p className="text-gray-600 text-sm">Verdeel op basis van jullie werkschema's: wie vroeger begint doet het eerste deel van de nacht (20:00-02:00), wie later begint het tweede deel (02:00-06:00). Of doe om en om hele nachten. Bespreek het en stel bij naar wat werkt.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Baby accepteert fles niet van partner, alleen van mij. Wat nu?</h3>
                  <p className="text-gray-600 text-sm">Geduld en strategie: partner probeert wanneer baby niet heel hongerig is, verschillende speen types, andere houding, wanneer primaire verzorger niet in de buurt. Soms duurt het 1-2 weken voordat baby went.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Mijn partner vindt flesvoeding te duur. Hoe bespreek je dat?</h3>
                  <p className="text-gray-600 text-sm">Kijk naar het totale plaatje, niet alleen naar de prijs van het poeder: reken ook tijd, energie, flexibiliteit en het welzijn van beide ouders mee. Flesvoeding kost in Nederland grofweg enkele honderden euro's per jaar. Het gemak en de mogelijkheid om de zorg te delen wegen daar voor veel gezinnen tegenop.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">We hebben constant ruzie over flesvoeding. Is dat normaal?</h3>
                  <p className="text-gray-600 text-sm">Slaaptekort maakt alles zwaarder: de eerste 3 maanden voelen vaak als overlevingsmodus en wat wrijving is normaal, maar op de lange duur niet houdbaar. Zoek hulp bij het consultatiebureau, de kraamzorg of een relatietherapeut als het escaleert.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Hoe combineren we flesvoeding met twee banen?</h3>
                  <p className="text-gray-600 text-sm">Benut de Nederlandse mogelijkheden: zet geboorteverlof en partnerverlof slim in, vraag flexibele werkuren aan, investeer in handige hulpmiddelen en kies opvang die vertrouwd is met flesvoeding.</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-700 text-sm text-center">
                Gedeelde flesvoeding kan bijdragen aan jullie relatie, aan de band van beide ouders met de baby en aan jullie eigen welzijn. Het vraagt om afspraken, communicatie en geduld, maar veel ouders ervaren het als de moeite waard.
              </p>
            </div>

            {/* Call to action */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link 
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-primary">Bereken gedeelde voeding schema</div>
                    <div className="flex items-center justify-between"><span className="text-gray-600">Plan samen de perfecte flesvoedingroutine</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Related articles */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <RefreshCw className="w-5 h-5 mr-2" />
                Gerelateerde artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/praktische-tips/nachtvoeding-optimaliseren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Nachtvoeding optimaliseren</div>
                  <div className="flex items-center justify-between"><span className="text-gray-600">Efficiënte nachtvoedingen strategieën</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                </Link>
                <Link href="/kennisbank/praktische-tips/flesvoeding-werk-combineren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Flesvoeding en werk combineren</div>
                  <div className="flex items-center justify-between"><span className="text-gray-600">Balans tussen carrière en ouderschap</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                </Link>
                <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Voedingsritme opbouwen</div>
                  <div className="flex items-center justify-between"><span className="text-gray-600">Structuur voor het hele gezin</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/overstappen-van-borst-naar-fles" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Overstappen van borst naar fles</div>
                  <div className="flex items-center justify-between"><span className="text-gray-600">Stapsgewijze overgang voor partners</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
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