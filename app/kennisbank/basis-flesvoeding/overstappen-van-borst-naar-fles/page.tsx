import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { ArrowRight, Clock, Heart, Users, CheckCircle, AlertTriangle } from 'lucide-react'

export default function OverstappenBorstNaarFlesPage() {
  const sidebarImages = [
    {
      src: "/borstvoeding-2.webp",
      alt: "Overstappen van borstvoeding naar fles",
      caption: "Stapsgewijze overgang naar flesvoeding"
    },
    {
      src: "/difrax-fles-kunstvoeding.webp", 
      alt: "Verschillende flesvoeding opties",
      caption: "Verschillende flessen die overstap vergemakkelijken"
    },
    {
      src: "/flesvoeding-door-mama.webp",
      alt: "Partner geeft fles aan baby",
      caption: "Partner kan helpen bij overstap"
    }
  ]

  const adTopics = ["Overstappen flesvoeding", "Borstvoeding stoppen", "Fles acceptatie"]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Basis Flesvoeding • Overstap</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <ArrowRight className="w-6 h-6 mr-3 text-primary" />
                Overstappen van borstvoeding naar fles: Stapsgewijze gids
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Complete handleiding voor een soepele overgang zonder stress voor baby en moeder
              </p>
            </div>

            {/* Wanneer en waarom overstappen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Wanneer en waarom overstappen?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                De beslissing om over te stappen van borst naar fles is persoonlijk en kan verschillende redenen hebben. Belangrijk is dat je dit op je eigen tempo doet en je geen schuld voelt over deze keuze. Overweeg je nog? Lees onze <Link href="/kennisbank/basis-flesvoeding/flesvoeding-vs-borstvoeding" className="text-primary hover:underline font-medium">objectieve vergelijking tussen flesvoeding en borstvoeding</Link> voor meer inzicht.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Veel voorkomende redenen:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Terugkeer naar werk (meest voorkomende reden)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Medische noodzaak (medicijnen, ziekte moeder)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Onvoldoende melkproductie ondanks inspanningen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Persoonlijke keuze voor meer vrijheid/flexibiliteit</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Partner wil ook kunnen voeden</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Uitputting door nachtvoedingen</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Ideale timing voor overstap:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Niet te vroeg: minimaal 2-3 weken voor goede borstvoeding opbouw</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Niet tijdens groeispurt: baby is dan onrustiger</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Plan vooruit: begin 2-4 weken voor deadline (werk)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Geen stress periode: vermijd drukke tijden</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overstap strategieën */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Overstap strategieën: 3 verschillende benaderingen</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Strategie 1: Geleidelijke overstap (2-4 weken)
                  </h3>
                  <p className="text-gray-700 text-sm mb-3 italic">Beste optie voor meeste moeders en baby's</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Week 1: Eén voeding vervangen</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Kies middag voeding (meestal minste melkproductie)</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Geef fles op vast tijdstip elke dag</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Kolven niet nodig - lichaam past productie aan</span></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Week 2: Tweede voeding toevoegen</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Vervang ochtendsupplement of avondvoeding</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Houd belangrijkste voedingen (ochtend/nacht) intact</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Let op tekenen van verstopte melkkanalen</span></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Week 3: Uitbreiden naar meer voedingen</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Vervang nog 1-2 voedingen per dag</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Hou 1-2 borstvoedingen voor binding</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Kolven indien nodig om ongemak te voorkomen</span></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Week 4: Volledige overstap of behoud laatste voeding</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Laatste borstvoeding(en) vervangen</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Of behoud 1 voeding voor binding (vaak avond)</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Strategie 2: Snelle overstap (3-7 dagen)
                  </h3>
                  <p className="text-gray-700 text-sm mb-3 italic">Bij medische noodzaak of acute situaties</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Dag 1-2: Alle voedingen vervangen</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Direct volledig overstappen op fles</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Kolven indien borsten te vol/pijnlijk worden</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Kolven geleidelijk verminderen</span></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Dag 3-7: Melkproductie afbouwen</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Kolven alleen bij ongemak</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Koude kompressen tegen zwelling</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Paracetamol bij pijn</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Strategie 3: Gedeeltelijke overstap (combi-voeding)</h3>
                  <p className="text-gray-700 text-sm mb-3 italic">Voor moeders die deels willen blijven geven</p>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Blijvende verdeling:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Ochtend en avond: borstvoeding</span></li>
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Middag en nacht: flesvoeding</span></li>
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Of werkdagen fles, weekend borst</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Affiliate Products */}
            <AffiliateProductWidget
              pageId="voedingstechnieken_overstappen-van-borst-naar-fles"
              title="Aanbevolen Producten voor de Overstap"
            />

            {/* Stap-voor-stap uitvoering */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Stap-voor-stap uitvoering
              </h2>
              
              <div className="space-y-6">
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="font-medium text-primary mb-3">Fase 1: Voorbereiding (1 week voor start)</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Equipment verzamelen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">4-6 flessen (250ml formaat)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Verschillende spenen proberen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Flesvoeding kopen (start klein)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Sterilisatie systeem opzetten</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Baby voorbereiden:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Introduceer fles met afgekolfde melk (zie onze <Link href="/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven" className="text-primary hover:underline font-medium">eerste keer flesvoeding gids</Link>)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Laat partner/familie fles geven</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Kies rustig moment, niet hongrig</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Begin met kleine hoeveelheden</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Jezelf voorbereiden:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Comfortabele, ondersteunende beha's</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Pijnstillers (paracetamol/ibuprofen)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Plan rustmomenten in</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Informeer partner over proces</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="font-medium text-primary mb-3">Fase 2: Eerste vervangingen</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Kies de juiste voeding om te vervangen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm"><strong>Makkelijkst:</strong> Middag voeding (minste melk)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm"><strong>Moeilijkst:</strong> Ochtend of voor het slapen (veel melk/binding)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm"><strong>Praktisch:</strong> Begin met voeding die partner kan overnemen</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Eerste fles successen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Zorg dat baby echt hongerig is</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Gebruik afgekolfde moedermelk of mix met formule</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Laat iemand anders de fles geven (baby ruikt moedermelk)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Probeer verschillende posities en omgevingen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="font-medium text-primary mb-3">Fase 3: Uitbreiding</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Tweede voeding toevoegen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Wacht 3-5 dagen tussen nieuwe vervangingen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Kies voeding die 6+ uur na eerste ligt</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Let op reactie van baby en je eigen lichaam</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Formule introductie:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Begin met 25% formule, 75% moedermelk</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Verhoog geleidelijk naar 100% formule</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Let op allergische reacties of maagklachten</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Uitdagingen en oplossingen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Uitdagingen en oplossingen</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Baby accepteert fles niet
                  </h3>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Meest effectieve oplossingen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm"><strong>Laat iemand anders geven</strong> - baby associeert jou met borst</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm"><strong>Andere speen proberen</strong> - vorm en materiaal maken verschil (lees <Link href="/kennisbank/voedingstechnieken/verschillende-spenen-uitproberen" className="text-primary hover:underline font-medium">welke speen past bij jouw baby</Link>)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm"><strong>Temperatuur aanpassen</strong> - precies lichaamstemperatuur</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm"><strong>Timing veranderen</strong> - niet te hongerig, niet te vol</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm"><strong>Positie variëren</strong> - staand, zittend, wandelend</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-700 mb-2">Alternatieve methoden:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">Bekertje voeding (tijdelijk)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">Lepeltje kleine hoeveelheden</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">Mix afgekolfde melk met formule</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">Verschillende omgevingen proberen</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Overvol/pijnlijke borsten</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Verlichting zoeken:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Kolven minimaal - alleen tot comfort</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Koude kompressen tussen voedingen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Warme douche voor kolfing</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">Savooikool bladeren in beha</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Wanneer arts bellen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Koorts boven 38,5°C</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Rode, warme plekken op borst</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Griepachtige symptomen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Harde, pijnlijke knopen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3 flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Emotionele aspecten
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Normale gevoelens:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Schuld over stoppen met borstvoeding</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Verdriet om gemiste binding</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Opluchting over meer vrijheid</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Twijfel over juiste beslissing</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Ondersteuning zoeken:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Praat met partner over gevoelens</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Zoek contact met andere moeders</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Overweeg professionele hulp bij sterke emoties</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Onthoud: gelukkige moeder = gelukkige baby</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline en hoeveelheden */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Timeline en hoeveelheden</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Leeftijd-specifieke hoeveelheden</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">0-3 maanden:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-600 text-sm">60-120ml per voeding</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-600 text-sm">8-12 voedingen per dag</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-600 text-sm">Totaal: 480-720ml per dag</span></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">3-6 maanden:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-600 text-sm">120-180ml per voeding</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-600 text-sm">6-8 voedingen per dag</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-600 text-sm">Totaal: 720-960ml per dag</span></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">6+ maanden:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-600 text-sm">180-240ml per voeding</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-600 text-sm">4-6 voedingen per dag</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-600 text-sm">Totaal: 480-720ml per dag (door bijvoeding)</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Verwachte tijdlijn volledige overstap</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      <div>
                        <h4 className="font-medium text-gray-700">Week 1:</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>1 flesvoeding per dag succesvol</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Mogelijk enige weerstand baby</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Lichte ongemak borsten</span></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      <div>
                        <h4 className="font-medium text-gray-700">Week 2:</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>2-3 flesvoedingen per dag</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Baby went aan nieuwe routine</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Melkproductie begint af te nemen</span></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                      <div>
                        <h4 className="font-medium text-gray-700">Week 3:</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Meerderheid voedingen via fles</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Nog 1-2 borstvoedingen per dag</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Borsten minder vol</span></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
                      <div>
                        <h4 className="font-medium text-gray-700">Week 4:</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Volledige overstap mogelijk</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Of bewust behoud 1 borstvoeding</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Nieuwe routine ingesteld</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Veelgestelde vragen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelgestelde vragen</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Kan ik weer beginnen met borstvoeding na overstap?</h3>
                  <p className="text-gray-600 text-sm">A: Binnen enkele weken is dit vaak nog mogelijk, maar wordt moeilijker naarmate tijd verstrijkt.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Moet ik medicijnen nemen om melkproductie te stoppen?</h3>
                  <p className="text-gray-600 text-sm">A: Meestal niet nodig. Geleidelijke afbouw en comfort maatregelen zijn voldoende.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Hoe lang duurt het voordat melkproductie stopt?</h3>
                  <p className="text-gray-600 text-sm">A: Hoofdproductie stopt binnen 1-2 weken, kleine hoeveelheden kunnen maanden blijven.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Is het normaal dat baby anders poept met flesvoeding?</h3>
                  <p className="text-gray-600 text-sm">A: Ja, consistentie en kleur veranderen. Dit is normaal en meestal binnen paar dagen gestabiliseerd.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Kan ik overstappen terwijl ik zwanger ben?</h3>
                  <p className="text-gray-600 text-sm">A: Ja, dit is veilig. Veel moeders doen dit in tweede trimester.</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-700 text-sm text-center">
                Overstappen van borst naar fles is een grote verandering voor beide. Met de juiste aanpak, geduld en ondersteuning verloopt deze overgang voor de meeste gezinnen succesvol. Heb je de overstap gemaakt? Lees hoe je een <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen" className="text-primary hover:underline font-medium">vast voedingsritme opbouwt</Link> voor voorspelbare dagen.
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
                    <div className="font-medium text-primary">Hulp nodig bij bepalen van juiste hoeveelheden na overstap?</div>
                    <div className="flex items-center justify-between"><span className="text-gray-600">Gebruik onze flesvoeding calculator voor gepersonaliseerd advies</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Related articles */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Gerelateerde artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/basis-flesvoeding/baby-weigert-de-fles" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Baby weigert de fles →</div>
                  <div className="text-sm text-gray-600">Als baby geen fles wil accepteren</div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Eerste keer flesvoeding →</div>
                  <div className="text-sm text-gray-600">Complete beginnersgids</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/verschillende-spenen-uitproberen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Verschillende spenen uitproberen →</div>
                  <div className="text-sm text-gray-600">Vind de perfecte speen voor je baby</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Voedingsritme opbouwen →</div>
                  <div className="text-sm text-gray-600">Voorspelbare voedingsroutine creëren</div>
                </Link>
                <Link href="/" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Flesvoeding Calculator →</div>
                  <div className="text-sm text-gray-600">Bereken juiste hoeveelheden na overstap</div>
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