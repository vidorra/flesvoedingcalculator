import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Activity, AlertTriangle, Clock, Users, CheckCircle } from 'lucide-react'

export default function BabyDrinktNietGenoegPage() {
  const sidebarImages = [
    {
      src: "/difrax-fles-kunstvoeding.webp",
      alt: "Baby fles voor voedingshoeveelheden monitoring",
      caption: "Normale voedingshoeveelheden herkennen"
    },
    {
      src: "/close-up-baby.webp", 
      alt: "Close-up baby voor honger signalen herkenning",
      caption: "Herken wanneer baby echt honger heeft"
    },
    {
      src: "/baby-voeten.webp",
      alt: "Baby voeten als teken van gezonde groei",
      caption: "Groei is belangrijkste indicator"
    }
  ]

  const adTopics = ["Baby drinkt weinig", "Voedingsproblemen", "Groei baby"]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Problemen Oplossen • Voedingshoeveelheden</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Activity className="w-6 h-6 mr-3 text-primary" />
                Baby drinkt niet genoeg: Oorzaken, signalen en praktische oplossingen
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Complete troubleshooting gids voor ouders met een baby die weinig drinkt
              </p>
            </div>

            {/* Hoeveel is genoeg */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Hoeveel is "genoeg"? Realistische verwachtingen</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Voor je in paniek raakt, is het belangrijk te weten wat normale voedingshoeveelheden zijn. Baby's verschillen enorm in hun voedingsbehoeften, en deze veranderen constant tijdens groeiperiodes.
              </p>
              
              <div className="mb-4">
                <h3 className="font-medium text-primary mb-3">Normale dagelijkse hoeveelheden:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>0-1 maand:</strong> 150-200ml per kg lichaamsgewicht</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>1-3 maanden:</strong> 150-180ml per kg lichaamsgewicht</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>3-6 maanden:</strong> 120-160ml per kg lichaamsgewicht</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>6+ maanden:</strong> 100-120ml per kg lichaamsgewicht (bijvoeding compenseert)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-2">Voorbeeldberekening 3 maanden oude baby (5kg):</h3>
                <ul className="space-y-1">
                  <li className="text-gray-700 text-sm"><strong>Dagelijkse behoefte:</strong> 5kg × 150ml = 750ml per dag</li>
                  <li className="text-gray-700 text-sm"><strong>Per voeding (6x per dag):</strong> 750ml ÷ 6 = 125ml per keer</li>
                  <li className="text-gray-700 text-sm"><strong>Variatie normaal:</strong> 100-150ml per voeding</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2 font-medium">
                  Belangrijke waarschuwing: Dit zijn richtlijnen. Sommige baby's hebben meer nodig, andere minder.
                </p>
              </div>
            </div>

            {/* Waarschuwingssignalen */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Waarschuwingssignalen: Wanneer zorgen maken?</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Acute signalen - direct medisch contact
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Dehydratie waarschuwingen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Minder dan 3 natte luiers per dag (na eerste week)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Droge mond en tong</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Ingevallen fontanel (zachte plek op hoofd)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Geen tranen bij huilen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Lethargie of extreme slaperigheid</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Gewichtsverlies signalen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Meer dan 10% gewichtsverlies na geboorte</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Niet terug op geboortegewicht na 2 weken</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Gewichtsverlies na initiële herstel</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Geen gewichtstoename 2 weken achter elkaar</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Signalen voor extra aandacht</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Langzame gewichtstoename: &lt;150g per week eerste 4 maanden</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Frequente weigering fles zonder duidelijke reden</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Zeer korte voedingen: &lt;10 minuten en lijkt niet voldaan</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Onrustig gedrag kort na voeding</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Veelvoorkomende oorzaken */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelvoorkomende oorzaken en oplossingen</h2>
              
              <div className="space-y-6">
                <div className="mb-4">
                  <h3 className="font-medium text-primary mb-3">Categorie 1: Fles en speen problemen</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Probleem: Verkeerde speengrootte</h4>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Te klein: baby wordt moe van zuigen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Te groot: melk stroomt te snel, baby raakt overweldigd</span>
                        </li>
                      </ul>
                      
                      <div className="mt-2 p-3 bg-gray-100 rounded">
                        <h5 className="font-medium text-gray-700 mb-1">Oplossing:</h5>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Test verschillende maten: Start met size 1, probeer size 2 bij langzame voeding</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Let op flow: 1 druppel per seconde bij omgekeerde fles is ideaal</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Wissel geleidelijk naar nieuwe speen</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Probleem: Fles of speen smaak</h4>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Plastic vs glas: sommige baby's hebben voorkeur</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Nieuwe speen: siliconen smaakt anders dan latex</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Ongewassen residuen: zeeprestanten kunnen afstoten</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium text-primary mb-3">Categorie 2: Temperatuur en smaak issues</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Probleem: Temperatuur niet optimaal</h4>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Te koud: onnatuurlijk, baby weigert</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Te warm: verbrandt mond, baby wordt angstig</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Inconsistente temperatuur: baby wordt onzeker</span>
                        </li>
                      </ul>
                      
                      <div className="mt-2 p-3 bg-gray-100 rounded">
                        <h5 className="font-medium text-gray-700 mb-1">Oplossing:</h5>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Altijd testen op pols: moet lauwwarm aanvoelen</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Gebruik thermometer: 37°C is ideaal</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Consistentie: zelfde temperatuur elke voeding</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stap-voor-stap probleemoplossing */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Stap-voor-stap probleemoplossing
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Stap 1: Basis checklist (24 uur)</h3>
                  
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm font-medium mb-3">Direct controleren:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Temperatuur fles: 37°C, test op pols</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Speen conditie: niet gescheurd, goede flow</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Voedingstiming: baby toont honger signalen?</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Omgeving: rustig, geen afleidingen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                        <span className="text-gray-700 text-sm">Eigen rust: ben je ontspannen en geduldig?</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 text-sm mt-3 font-medium">
                      Als geen verbetering na 24 uur: Ga naar stap 2
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Stap 2: Equipment aanpassingen (2-3 dagen)</h3>
                  
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm font-medium mb-3">Systematisch testen:</p>
                    <ul className="space-y-1">
                      <li className="text-gray-700 text-sm"><strong>Dag 1:</strong> Andere speen maat/type proberen</li>
                      <li className="text-gray-700 text-sm"><strong>Dag 2:</strong> Andere fles gebruiken (materiaal/vorm)</li>
                      <li className="text-gray-700 text-sm"><strong>Dag 3:</strong> Andere voedingspositie proberen</li>
                    </ul>
                    
                    <div className="mt-3">
                      <p className="text-gray-700 text-sm font-medium mb-2">Bijhouden wat werkt:</p>
                      <ul className="space-y-1">
                        <li className="text-gray-700 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Welke speen: merk, maat, materiaal</span></li>
                        <li className="text-gray-700 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Welke positie: zittend, staand, in beweging</span></li>
                        <li className="text-gray-700 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Welke timing: interval tussen voedingen</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Stap 3: Diepere analyse (1 week)</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 text-sm font-medium mb-2">Voedingsdagboek bijhouden:</p>
                      <div className="bg-white border border-gray-300 rounded p-3 font-mono text-xs">
                        <div>Datum: _______</div>
                        <div>Tijd: _______</div>
                        <div>Aangeboden: ___ml</div>
                        <div>Gedronken: ___ml</div>
                        <div>Duur voeding: ___min</div>
                        <div>Gedrag: ___________</div>
                        <div>Bijzonderheden: ___</div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 text-sm font-medium mb-2">Patronen zoeken:</p>
                      <ul className="space-y-1">
                        <li className="text-gray-700 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Tijden van dag: drinkt baby beter 's ochtends/avonds?</span></li>
                        <li className="text-gray-700 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Dagen van week: weekend vs doordeweeks verschil?</span></li>
                        <li className="text-gray-700 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Na activiteiten: na bad, wandeling, spelen?</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Stap 4: Medische consultatie</h3>
                  
                  <div>
                    <p className="text-gray-700 text-sm font-medium mb-2">Contact huisarts/consultatiebureau bij:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Geen verbetering na 1 week systematisch proberen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Gewichtsverlies of stagnatie</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Tekenen van dehydratie</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Ouderlijke stress wordt te groot</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Key reminders */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Remember: Belangrijke punten</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm"><strong>Groei belangrijker dan volume</strong> - een baby die groeit krijgt genoeg</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm"><strong>Elk kind is anders</strong> - vergelijk niet met andere baby's</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm"><strong>Patience is key</strong> - voedingsproblemen lossen meestal zichzelf op</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm"><strong>Professional help is er</strong> - schroom niet om hulp te vragen</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-gray-700 text-sm text-center italic">
                  Baby's die weinig drinken zijn meestal gewoon efficient drinkers of hebben minder nodig. Met patience, systematische aanpak en professionele ondersteuning wanneer nodig, lost dit probleem zich meestal binnen enkele weken op.
                </p>
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
                    <div className="font-medium text-primary">Hulp nodig bij bepalen of je baby genoeg drinkt? →</div>
                    <div className="text-sm text-gray-600">Gebruik onze flesvoeding calculator voor gepersonaliseerd advies op basis van leeftijd en gewicht</div>
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
                <Link href="/kennisbank/basis-flesvoeding/baby-weigert-de-fles" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Baby weigert de fles →</div>
                  <div className="text-sm text-gray-600">Als baby helemaal niet wil drinken</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/juiste-houding-bij-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Juiste houding bij flesvoeding →</div>
                  <div className="text-sm text-gray-600">Optimale positionering voor betere intake</div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Eerste keer flesvoeding →</div>
                  <div className="text-sm text-gray-600">Basis technieken perfectioneren</div>
                </Link>
                <Link href="/kennisbank/problemen-oplossen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Meer probleemoplossing →</div>
                  <div className="text-sm text-gray-600">Overzicht alle voedingsproblemen</div>
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