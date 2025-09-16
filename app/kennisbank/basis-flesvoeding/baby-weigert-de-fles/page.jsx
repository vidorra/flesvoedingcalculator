import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { AlertTriangle, Heart, Clock, Users } from 'lucide-react'

export default function BabyWeigertFlespagePage() {
  const sidebarImages = [
    {
      src: "/flesvoeding-door-mama.webp",
      alt: "Moeder geeft fles aan baby",
      caption: "Tips voor baby die fles weigert"
    },
    {
      src: "/difrax-fles-kunstvoeding.webp", 
      alt: "Verschillende flesvoeding opties",
      caption: "Verschillende flessen kunnen helpen"
    },
    {
      src: "/close-up-baby.webp",
      alt: "Close-up van baby's gezicht",
      caption: "Rustige benadering bevordert acceptatie"
    }
  ]

  const adTopics = ["Flesvoeding tips", "Baby voeding", "Voedingsproblemen"]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Basis Flesvoeding  Problemen Oplossen</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                Baby weigert de fles: Oorzaken en praktische oplossingen
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Complete gids voor ouders wiens baby plotseling of persistent de fles weigert
              </p>
            </div>

            {/* Waarom weigert je baby de fles */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Waarom weigert je baby de fles?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Een baby die de fles weigert kan frustrerend en zorgwekkend zijn. Of je nu net begint met flesvoeding of je baby plotseling stopt met drinken - er zijn altijd concrete oorzaken en effectieve oplossingen.
              </p>
              
              <div className="mb-4">
                <h3 className="font-medium text-primary mb-3">De meest voorkomende scenario's:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Baby heeft nog nooit een fles geaccepteerd</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Baby dronk voorheen wel uit de fles, maar weigert nu plotseling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Baby drinkt slechts kleine hoeveelheden en lijkt ontevreden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Baby huilt bij het zien van de fles</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hoofdoorzaken */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Hoofdoorzaken van flesweigering</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-primary mb-3">1. Speen en flestype problemen</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Verkeerde speenvorm of -grootte</h4>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Te kleine opening: baby moet te hard zuigen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Te grote opening: melk stroomt te snel, baby raakt overweldigd</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Verkeerde vorm: past niet bij baby's mondstructuur</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Materiaal en textuur</h4>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Sommige baby's hebben voorkeur voor siliconen vs. latex</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Textuur voelt anders dan borst (bij overstap van borstvoeding)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Smaak van nieuwe speen kan afstotend werken</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">2. Temperatuur en smaak</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Temperatuurproblemen</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Te warm: baby verbrandt tong/gehemelte</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Te koud: onnatuurlijk en onaangenaam</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Wisselende temperaturen: gebrek aan consistentie</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Smaakveranderingen</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Ander flesvoedingsmerk</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Flesvoeding te lang bewaard</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Medicijnen die smaak beïnvloeden</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stap-voor-stap oplossingsplan */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Stap-voor-stap oplossingsplan
              </h2>
              
              <div className="space-y-6">
                <div className="mb-4">
                  <h3 className="font-medium text-primary mb-3">Fase 1: Directe aanpassingen (1-3 dagen)</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Speen en fles optimaliseren</h4>
                      <ol className="space-y-2">
                        <li className="flex space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">1</span>
                          <div>
                            <strong className="text-gray-700">Probeer verschillende speentypes:</strong>
                            <div className="text-gray-600 text-sm mt-1 space-y-1">
                              <div> Anti-koliek spenen (Avent, MAM, NUK)</div>
                              <div> Verschillende materialen (siliconen/latex)</div>
                              <div> Andere opening-groottes</div>
                            </div>
                          </div>
                        </li>
                        <li className="flex space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">2</span>
                          <div>
                            <strong className="text-gray-700">Test alternatieve flessen:</strong>
                            <div className="text-gray-600 text-sm mt-1 space-y-1">
                              <div> Brede hals vs. smalle hals</div>
                              <div> Anti-koliek systemen</div>
                              <div> Verschillende vormen en maten</div>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Temperatuur perfectioneren</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Controleer altijd op pols (moet lauwwarm aanvoelen)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Gebruik betrouwbare thermometer</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Consistent voorverwarmen tot 37°C</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium text-primary mb-3">Fase 2: Gedrag en timing (3-7 dagen)</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Optimale voedingsmomenten</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Let op vroege hongersignalen (mond openen, zoekreflex)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Voer niet tijdens huilbuien</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Creëer rustige, voorspelbare routine</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Houding en positie</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Houd baby semi-rechtop (45-60 graden)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Ondersteun hoofdje goed</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Zorg voor oogcontact en kalmte</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Laat baby speen met tong verkennen voor acceptatie</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wanneer professionele hulp */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Wanneer professionele hulp zoeken?</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Direct contact opnemen met huisarts/consultatiebureau bij:</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Baby verliest gewicht of groeit niet volgens curve</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Meer dan 48 uur zeer weinig vocht binnen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Tekenen van uitdroging (droge luier, slapheid)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Koorts in combinatie met weigeren</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Overleg binnen 1 week bij:</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Geen vooruitgang na alle bovenstaande stappen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Baby lijkt hongerig maar blijft weigeren</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Stress voor hele gezin wordt te groot</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Praktische tips */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Praktische tips voor volharding
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Voor de ouders</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Wees geduldig: flesweigering is tijdelijk en oplosbaar</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Vraag hulp: laat partner of familie meehelpen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Blijf kalm: baby voelt jouw stress aan</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Hou routine aan: consistentie helpt bij acceptatie</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Alternatieve voedingsmethoden (tijdelijk)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Lepeltje of bekertje voor kleine hoeveelheden</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Spuitje zonder naald (onder begeleiding)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Vinger-feeding met sonde (ziekenhuistechniek)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <p className="text-gray-700 mb-4">
                  Flesweigering is frustrerend maar bijna altijd tijdelijk. Met geduld, de juiste aanpak en eventueel professionele ondersteuning gaat vrijwel elke baby uiteindelijk de fles accepteren.
                </p>
                <Link 
                  href="/calculator"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-gray-700">Hulp nodig bij het berekenen van de juiste hoeveelheden? </div>
                    <div className="text-gray-600">Gebruik onze flesvoeding calculator voor gepersonaliseerd advies</div>
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
                <Link href="/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Eerste keer flesvoeding geven </div>
                  <div className="text-gray-600">Complete beginnersgids</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/juiste-houding-bij-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Juiste houding bij flesvoeding </div>
                  <div className="text-gray-600">Optimale positionering</div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/flesvoeding-vs-borstvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Flesvoeding vs borstvoeding </div>
                  <div className="text-gray-600">Eerlijke vergelijking</div>
                </Link>
                <Link href="/kennisbank/problemen-oplossen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Meer probleemoplossing </div>
                  <div className="text-gray-600">Overzicht alle problemen</div>
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