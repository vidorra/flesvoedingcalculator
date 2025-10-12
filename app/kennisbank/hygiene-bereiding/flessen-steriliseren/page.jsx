import Layout from '../../../../components/Layout'
import Link from 'next/link'
import Script from 'next/script'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Shield, Clock, DollarSign, Users, CheckCircle, AlertTriangle } from 'lucide-react'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'

export default function FlessenSteriligerenPage() {
  const sidebarImages = [
    {
      src: "/sterilisator-babyflessen.webp",
      alt: "Sterilisator met babyflessen",
      caption: "Professionele sterilisatie van babyflessen"
    },
    {
      src: "/difrax-fles-kunstvoeding.webp", 
      alt: "Schone babyflessen klaar voor gebruik",
      caption: "Stap voor stap sterilisatie proces"
    },
    {
      src: "/flesvoeding-close-up.webp",
      alt: "Veilig voorbereidde flesvoeding",
      caption: "Perfect schone bereiding voor baby"
    }
  ]

  const adTopics = ["Flessen steriliseren", "Baby hygiëne", "Sterilisator"]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Hygiëne & Bereiding  Sterilisatie</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-primary" />
                Flessen steriliseren: Complete gids voor veilige hygiëne
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Alles over het steriliseren van babyflessen en spenen - methoden, timing en praktische tips
              </p>
            </div>

            {/* Waarom steriliseren belangrijk is */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Waarom steriliseren belangrijk is</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Baby's hebben een nog ontwikkelend immuunsysteem dat kwetsbaar is voor bacteriën, virussen en schimmels. Steriliseren van flessen en spenen elimineert gevaarlijke micro-organismen die kunnen leiden tot ernstige infecties zoals gastro-enteritis.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Risico's zonder sterilisatie:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Gastro-enteritis (maag-darminfecties)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Diarree en braken</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Dehydratie</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Groeiachterstand</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Ziekenhuisopname in ernstige gevallen</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Tot wanneer steriliseren?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>0-6 maanden:</strong> Absoluut noodzakelijk</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>6-12 maanden:</strong> Aanbevolen, zeker bij ziekte</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>12+ maanden:</strong> Goed wassen meestal voldoende</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Wanneer en hoe vaak */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Wanneer en hoe vaak steriliseren
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Altijd steriliseren:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Nieuwe flessen en spenen (eerste gebruik)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Na elke gebruik tot 6 maanden</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Bij ziekte van baby (elk leeftijd)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Na langere opslag</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Als fles/speen vies of bedorven ruikt</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium text-primary mb-3">Frequentie schema</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">0-6 maanden:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm">Na elke voeding steriliseren</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm">Dagelijks: alle gebruikte items</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm">Wekelijks: doseerschepjes en accessoires</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">6-12 maanden:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm">Dagelijks of na elke gebruik</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm">Bij ziekte: terug naar elke voeding</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm">Spenen: altijd na gebruik</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">12+ maanden:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm">Wekelijks of bij ziekte</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm">Nieuwe items: altijd eerst</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm">Goede was meestal voldoende</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sterilisatie methoden vergelijking */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Sterilisatie methoden vergelijking</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="">
                    <h3 className="font-medium text-gray-700 mb-3">Methode 1: Koken in pan (klassiek)</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Voordelen:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Geen extra apparaat nodig</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">100% effectief</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Goedkoopste methode</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Altijd beschikbaar</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Nadelen:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Tijdrovend (15-20 minuten)</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Meer energieverbruik</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Spenen kunnen sneller verslijten</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Stap-voor-stap:</h4>
                        <ol className="space-y-1 text-sm">
                          <li className="flex space-x-2">
                            <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">1</span>
                            <span className="text-gray-700 text-sm">Vul grote pan met water</span>
                          </li>
                          <li className="flex space-x-2">
                            <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">2</span>
                            <span className="text-gray-700 text-sm">Leg items volledig ondergedompeld</span>
                          </li>
                          <li className="flex space-x-2">
                            <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">3</span>
                            <span className="text-gray-700 text-sm">Breng aan de kook</span>
                          </li>
                          <li className="flex space-x-2">
                            <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">4</span>
                            <span className="text-gray-700 text-sm">Laat 5 minuten doorkoken</span>
                          </li>
                          <li className="flex space-x-2">
                            <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">5</span>
                            <span className="text-gray-700 text-sm">Laat afkoelen in het water</span>
                          </li>
                          <li className="flex space-x-2">
                            <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">6</span>
                            <span className="text-gray-700 text-sm">Haal eruit met schone tang</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <h3 className="font-medium text-gray-700 mb-3">Methode 2: Elektrische sterilisator (populairst)</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Voordelen:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Snelste methode (6-15 minuten)</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Automatische uitschakeling</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Economisch energiegebruik</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Items blijven 24 uur steriel</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Makkelijk en betrouwbaar</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Nadelen:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Aanschafkosten (€25-80)</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Neemt keukenplek in</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Enkel babyspullen</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Kalkaanslag bij hard water</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Populaire modellen:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Philips Avent: €35-50, snelle stoom</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">MAM sterilisator: €25-40, compact</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Chicco: €30-45, grote capaciteit</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="">
                    <h3 className="font-medium text-gray-700 mb-3">Methode 3: Magnetron sterilisatie</h3>
                    
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Voordelen:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Zeer snel (2-8 minuten)</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Gebruikt bestaande magnetron</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Goedkope sterilisatorzakken</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Praktisch onderweg</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Nadelen:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Niet alle materialen geschikt</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Risico oververhitting</span></li>
                          <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">Zakken zijn wegwerp</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-primary mb-3">Methode 4: Sterilisatie tabletten</h3>
                    
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Voordelen:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-600 text-sm">Makkelijk onderweg</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-600 text-sm">Geen apparaat nodig</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-600 text-sm">Koude sterilisatie mogelijk</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-600 text-sm">Lange houdbaarheid tabletten</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Nadelen:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-600 text-sm">Chemische methode</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-600 text-sm">Langere wachttijd (30 minuten)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-600 text-sm">Kosten per gebruik</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-600 text-sm">Moet goed afspoelen</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Sterilizers and Accessories */}
            <AffiliateProductWidget
              pageId="hygiene-bereiding_flessen-steriliseren"
              category="sterilisatoren"
              title="Populaire Sterilisatoren en Accessoires"
              maxProducts={4}
            />

            {/* Test Bol.com Script - Using direct injection */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Test Bol.com Widget</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="bol-script-container" data-product-id="test-bol-widget">
                  {/* Fallback content with image, title, bol-widget-content, and button */}
                  <div className="fallback-content text-center">
                    {/* Product image */}
                    <div className="mb-3">
                      <img
                        src="https://media.s-bol.com/NKX9XZWN3RGL/0RNmv15/550x707.jpg"
                        alt="Philips Avent Flessterilisator"
                        className="mx-auto rounded-lg max-w-full h-auto"
                        style={{ maxHeight: '200px' }}
                      />
                    </div>
                    
                    {/* Product title */}
                    <h4 className="font-medium text-primary text-sm mb-2 line-clamp-2 min-h-[40px] flex items-center justify-center">
                      Philips Avent Flessterilisator
                    </h4>
                    
                    {/* Bol.com script execution container */}
                    <div 
                      className="bol-widget-content"
                      dangerouslySetInnerHTML={{ 
                        __html: `
                          <script type="text/javascript">var bol_sitebar_v2={"id":"bol_1759937475554", "baseUrl":"partner.bol.com","productId":"9300000062682298","familyId":"","siteId":"1472968","target":true,"rating":true,"price":true,"deliveryDescription":true,"button":false,"linkName":"Philips%20Avent%20Flessterilisator%20Damp%20Droger%20-%20D...","linkSubId":""};</script>
                          <script type="text/javascript" src="https://partner.bol.com/promotion/static/js/partnerProductlinkV2.js" id="bol_1759937475554"></script>
                        `
                      }}
                    />
                    
                    {/* Fallback button */}
                    <a 
                      href="https://www.bol.com/nl/p/philips-avent-flessterilisator/9300000062682298/"
                      target="_blank"
                      rel="nofollow noopener"
                      className="bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors inline-block"
                    >
                      Bekijk op bol.com →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stap-voor-stap elektrische sterilisator */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Stap-voor-stap: Elektrische sterilisator (meest gebruikt)</h2>
              
              <div className="space-y-6">
                <div className="mb-4">
                  <h3 className="font-medium text-primary mb-3">Voorbereiding</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Flessen en spenen schoonmaken:</h4>
                      <ol className="space-y-1">
                        <li className="flex space-x-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">1</span>
                          <span className="text-gray-600 text-sm">Spoel direct na gebruik met koud water</span>
                        </li>
                        <li className="flex space-x-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">2</span>
                          <span className="text-gray-600 text-sm">Was grondig met warm soapwater</span>
                        </li>
                        <li className="flex space-x-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">3</span>
                          <span className="text-gray-600 text-sm">Gebruik flessenborstel voor alle hoekjes</span>
                        </li>
                        <li className="flex space-x-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">4</span>
                          <span className="text-gray-600 text-sm">Demonteer spenen volledig</span>
                        </li>
                        <li className="flex space-x-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">5</span>
                          <span className="text-gray-600 text-sm">Spoel alles goed na</span>
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Sterilisator voorbereiden:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Check of sterilisator schoon is</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Voeg juiste hoeveelheid water toe (zie handleiding)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Plaats rekken correct in sterilisator</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium text-primary mb-3">Laden van sterilisator</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Optimale plaatsing:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Flessen: opening naar beneden op rek</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Spenen: met opening naar beneden</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Kleine onderdelen: in speciaal rekje</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Niets mag overlappen voor goede stoomcirculatie</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Capaciteit benutten:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Vul sterilisator volledig voor efficiëntie</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Groepeer vergelijkbare items</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Zware items onderop</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium text-primary mb-3">Sterilisatieproces</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Proces starten:</h4>
                      <ol className="space-y-1">
                        <li className="flex space-x-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">1</span>
                          <span className="text-gray-600 text-sm">Sluit deksel goed af</span>
                        </li>
                        <li className="flex space-x-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">2</span>
                          <span className="text-gray-600 text-sm">Selecteer juiste programma</span>
                        </li>
                        <li className="flex space-x-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">3</span>
                          <span className="text-gray-600 text-sm">Start sterilisator</span>
                        </li>
                        <li className="flex space-x-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">4</span>
                          <span className="text-gray-600 text-sm">Wacht tot proces compleet is</span>
                        </li>
                        <li className="flex space-x-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">5</span>
                          <span className="text-gray-600 text-sm">Laat 3-5 minuten afkoelen</span>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Tijdsduur per merk:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Philips Avent: 6 minuten</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">MAM: 5 minuten</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Chicco: 8 minuten</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Budget merken: 10-15 minuten</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kostenberekening */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Kostenberekening verschillende methoden
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-primary mb-3">Initiële kosten</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Koken in pan:</span>
                        <span className="text-gray-600 text-sm">€0 (bestaande spullen)</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Elektrische sterilisator:</span>
                        <span className="text-gray-600 text-sm">€25-80</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Magnetron accessoires:</span>
                        <span className="text-gray-600 text-sm">€8-25</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Starterkit tabletten:</span>
                        <span className="text-gray-600 text-sm">€6-15</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-primary mb-3">Maandelijkse kosten (6 maanden gebruik)</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Koken:</span>
                        <span className="text-gray-600 text-sm">€8-13/maand</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Elektrische sterilisator:</span>
                        <span className="text-gray-600 text-sm">€2-3/maand</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Magnetron:</span>
                        <span className="text-gray-600 text-sm">€8.50-12.50/maand</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Tabletten:</span>
                        <span className="text-gray-600 text-sm">€16-21/maand</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="">
                  <h3 className="font-medium text-gray-700 mb-2">Conclusie kosten:</h3>
                  <p className="text-gray-700 text-sm">
                    Elektrische sterilisator is na 3-4 maanden de goedkoopste optie en meest praktisch voor dagelijks gebruik.
                  </p>
                </div>
              </div>
            </div>

            {/* Veelgestelde vragen */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelgestelde vragen</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Tot welke leeftijd moet ik steriliseren?</h3>
                  <p className="text-gray-600 text-sm">A: Minimaal tot 6 maanden, bij premature baby's of ziekte langer.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Kan ik sterilisator overslaan als ik alles goed was?</h3>
                  <p className="text-gray-600 text-sm">A: Niet voor baby's onder 6 maanden. Wassen alleen is niet voldoende.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Zijn dure sterilisatoren beter dan goedkope?</h3>
                  <p className="text-gray-600 text-sm">A: Functionaliteit is vergelijkbaar. Duurdere modellen zijn vaak sneller en duurzamer.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Wat als ik sterilisator vergeet aan te zetten?</h3>
                  <p className="text-gray-600 text-sm">A: Begin opnieuw. Bacteriën groeien snel op ongesteunde items.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Kan ik verschillende merken flessen samen steriliseren?</h3>
                  <p className="text-gray-600 text-sm">A: Ja, zolang alle onderdelen hittebestendig zijn.</p>
                </div>
              </div>
            </div>

            <div className="">
              <p className="text-gray-700 text-sm text-center">
                Steriliseren is een essentiële vaardigheid voor veilige flesvoeding. Met de juiste methode en routine bescherm je je baby tegen gevaarlijke infecties.
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
                    <div className="font-medium text-gray-700">Hulp nodig bij het organiseren van je flesvoeding routine? </div>
                    <div className="text-gray-600">Gebruik onze flesvoeding calculator voor een gepersonaliseerd voedingsschema</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Related articles */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Gerelateerde artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Fles bereiden stap voor stap →</div>
                  <div className="text-gray-600">Veilige bereiding na sterilisatie</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Hygiëne & Bereiding overzicht →</div>
                  <div className="text-gray-600">Alle hygiëne aspecten</div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Eerste keer flesvoeding →</div>
                  <div className="text-gray-600">Complete beginnersgids</div>
                </Link>
                <Link href="/kennisbank/veiligheid" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Veiligheidsrichtlijnen →</div>
                  <div className="text-gray-600">Alle veiligheidsaspecten</div>
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