import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Droplets, AlertTriangle, Phone, Shield, Thermometer, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Diarree en Flesvoeding: Nederlandse Gids voor Ouders',
  description: 'Complete gids voor het herkennen, behandelen en voorkomen van diarree bij baby\'s op flesvoeding. Nederlandse medische richtlijnen en praktische tips.',
}

export default function DiarreeEnFlesvoedingPage() {
  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/baby-met-fopspeen.webp",
      alt: "Baby met fopspeen voor comfort bij diarree",
      caption: "Comfort bieden tijdens ziekteperiodes"
    },
    {
      src: "/slapende-baby-2.webp", 
      alt: "Slapende baby tijdens herstel van diarree",
      caption: "Rust is belangrijk voor herstel"
    },
    {
      src: "/flesvoeding-close-up.webp",
      alt: "Close-up flesvoeding bereiding voor diarree behandeling",
      caption: "Juiste voedingsbereiding voorkomt problemen"
    }
  ]

  // Ad targeting keywords
  const adTopics = ["Baby Gezondheid", "Medische Zorg", "Eerste Hulp Baby"]

  // Data arrays
  const diarreeKenmerken = [
    "Waterig met veel vrij vocht in luier",
    "Abnormaal geel, groen, of bloederig",
    "Meer dan 6x per dag (plotse toename)",
    "Zeer zure, penetrante geur",
    "Explosieve ontlasting",
    "Veel grotere hoeveelheden dan normaal",
    "Buiten normale routine timing"
  ]

  const voedingGerelateerdeOorzaken = [
    "Verkeerde concentratie poeder (te veel/weinig)",
    "Temperatuur shock (te warme/koude melk)",
    "Onhygiënische bereiding of besmetting",
    "Vervallen product of oud water",
    "Te snelle formule wissel tussen merken",
    "IJzer overdosis of vitamine bijwerkingen"
  ]

  const dehydratieSignalen = [
    {
      ernst: "Mild (3-5% gewichtsverlies)",
      symptomen: "Iets droge mond, verminderde urine, iets minder energiek"
    },
    {
      ernst: "Matig (6-9% gewichtsverlies)", 
      symptomen: "Droge mond, weinig urine, lusteloos, licht ingevallen fontanel"
    },
    {
      ernst: "Ernstig (>10% gewichtsverlies)",
      symptomen: "Zeer droge mond, geen urine >6 uur, lethargie, diep ingevallen fontanel"
    }
  ]

  const preventiestrategieen = [
    "Strikte hand hygiëne - 20 seconden warm water + zeep",
    "Steriliseer flessen tot baby 6 maanden oud",
    "Kook water tot baby 6 maanden oud",
    "Juiste poeder-water ratio volgens instructies",
    "Verse bereiding - niet langer dan 1 uur bewaren",
    "Controleer vervaldatums en bewaaromstandigheden"
  ]

  const medischeHulpCriteria = [
    {
      urgentie: "112 (Emergency)",
      symptomen: "Ernstige dehydratie, bewustzijnsverlies, koorts >40°C"
    },
    {
      urgentie: "Huisartsenpost (24u)",
      symptomen: "Matige dehydratie, koorts >38.5°C baby <3 mnd, bloed in ontlasting"
    },
    {
      urgentie: "Huisarts (2-3 dagen)",
      symptomen: "Diarree >3 dagen, abnormale ontlasting kleur/geur"
    }
  ]

  const behandelingsProtocol = [
    "Start ORS (Oral Rehydration Solution) - 5ml elke 5-10 minuten",
    "Continue flesvoeding - Nederlandse richtlijn blijven voeden", 
    "Monitor dehydratie signalen - fontanel, urine, gedrag",
    "Juiste bil verzorging - frequent verschonen + barrier crème",
    "Temperatuur monitoring - rectaal meten bij koorts",
    "Professionele hulp zoeken bij waarschuwingssignalen"
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            
            {/* Header - ALWAYS outside of card containers */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Kennisbank  Problemen Oplossen</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Droplets className="w-6 h-6 mr-3 text-primary" />
                Diarree en Flesvoeding: Nederlandse Gids voor Ouders
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Diarree bij baby's op flesvoeding kan verontrustend zijn voor ouders. Deze uitgebreide gids helpt Nederlandse families herkennen, behandelen en voorkomen van diarree gerelateerd aan flesvoeding.
              </p>
            </div>

            {/* Introduction Section */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Diarree komt voor bij 15-20% van Nederlandse baby's op flesvoeding in de eerste 6 maanden. 
                Vroege herkenning en juiste behandeling zijn essentieel voor het welzijn van je baby en het voorkomen van dehydratie.
              </p>
              
              <div className="mt-4 p-4 bg-white rounded-lg">
                <p className="text-gray-700">
                  <strong>Nederlandse statistiek:</strong> 60% infectieus, 25% voeding-gerelateerd, 
                  8% antibiotica gerelateerd. Meeste gevallen zijn zelf-limiterend binnen 3-7 dagen.
                </p>
              </div>
            </section>

            {/* Diarree Herkennen */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Diarree Herkennen Bij Flesvoeding Baby's
              </h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Normale vs Abnormale Ontlasting</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-primary mb-3">Normale Flesvoeding Ontlasting:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Kleur: Geel-bruin tot lichtbruin</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Consistentie: Peurig, zacht-gevormd</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Frequentie: 1-4x per dag</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Geur: Mild, niet overweldigend</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-medium text-amber-800 mb-3">Diarree Waarschuwingssignalen:</h4>
                    <ul className="space-y-2">
                      {diarreeKenmerken.map((kenmerk, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span className="text-amber-700 text-sm">{kenmerk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Oorzaken van Diarree */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Oorzaken van Diarree Bij Flesvoeding</h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Voeding Gerelateerde Oorzaken</h3>
                <p className="text-gray-700 mb-4">
                  25% van baby diarree gevallen is direct gerelateerd aan flesvoeding bereiding, samenstelling of timing:
                </p>
                <ul className="space-y-3 mb-6">
                  {voedingGerelateerdeOorzaken.map((oorzaak, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{oorzaak}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Infectieuze Oorzaken</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-primary mb-3">Virale Infecties (60% gevallen):</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Rotavirus: 3-7 dagen waterige diarree</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Norovirus: Explosieve diarree + braken</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Adenovirus: Langdurige diarree (7-14 dagen)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-3">Bacteriële Infecties:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Salmonella: Bloederige diarree + hoge koorts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">E. coli: Variabel van mild tot ernstig</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">C. difficile: Na antibiotica gebruik</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Wanneer Stoppen Met Flesvoeding */}
            <section className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-amber-800 mb-2">Wanneer Stoppen Met Flesvoeding?</h3>
                  <p className="text-sm text-amber-700 leading-relaxed mb-4">
                    Nederlandse richtlijnen adviseren continue voeding tijdens diarree, maar er zijn situaties waarbij tijdelijk stoppen noodzakelijk is:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-amber-100/50 rounded-lg p-3">
                      <h4 className="font-medium text-amber-800 text-sm mb-2">Direct Stoppen Bij:</h4>
                      <ul className="space-y-1 text-xs text-amber-700">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Bloed in diarree + koorts</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Heftig braken elke voeding</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Tekenen ernstige dehydratie</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Koorts &gt;39°C bij baby &lt;3 maanden</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-amber-100/50 rounded-lg p-3">
                      <h4 className="font-medium text-amber-800 text-sm mb-2">Tijdelijke Pauze Overwegen:</h4>
                      <ul className="space-y-1 text-xs text-amber-700">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Waterige diarree &gt;6x per dag</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Braken na meerdere voedingen</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Koorts 38-39°C combinatie</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Verminderde urine productie</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Dehydratie Herkenning */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Droplets className="w-5 h-5 mr-2" />
                Dehydratie Herkenning en Behandeling
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dehydratie is het grootste risico bij baby diarree. Vroege herkenning kan levensreddend zijn.
              </p>
              
              <div className="space-y-4">
                {dehydratieSignalen.map((stadium, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h3 className="font-medium text-primary mb-2">{stadium.ernst}</h3>
                    <p className="text-gray-700 text-sm">{stadium.symptomen}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">Nederlandse ORS Opties</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Verkrijgbaar bij:</strong> apotheek (op recept vergoed), drogist, online
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Toediening:</strong> 5-10ml elke 5-10 minuten, continue kleine slokjes, kamertemperatuur
                </p>
              </div>
            </section>

            {/* Wanneer Medische Hulp */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Wanneer Medische Hulp Zoeken
              </h2>
              
              <div className="space-y-4">
                {medischeHulpCriteria.map((criterium, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h3 className="font-medium text-primary mb-2">{criterium.urgentie}</h3>
                    <p className="text-gray-700 text-sm">{criterium.symptomen}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">Nederlandse Hulpnummers</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p><strong>Spoed:</strong> 112</p>
                    <p><strong>Huisartsenpost:</strong> 088-003-0600</p>
                  </div>
                  <div>
                    <p><strong>Vergiftiging:</strong> 030-274 88 88</p>
                    <p><strong>Ouder telefoonie:</strong> 0900-1628</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Behandeling en Thuiszorg */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Behandeling en Thuiszorg Protocol
              </h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Eerste 24 Uur Actieplan</h3>
                <ul className="space-y-3">
                  {behandelingsProtocol.map((stap, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{stap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Geleidelijke Herstart Flesvoeding</h3>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700 text-sm mb-3"><strong>Stapsgewijze hervatting:</strong></p>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Dag 1-2: Alleen ORS + water</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Dag 3: 25% formule + 75% ORS</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Dag 4: 50% formule + 50% ORS</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Dag 5: 75% formule + 25% ORS</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Dag 6: 100% formule (als goed verdragen)</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Preventie Strategieën */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Preventie Strategieën</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Strikte hygiëne en juiste bereiding kunnen 80% van voeding-gerelateerde diarree voorkomen:
              </p>
              
              <ul className="space-y-3 mb-6">
                {preventiestrategieen.map((strategie, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{strategie}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Nederlandse Water Veiligheid</h3>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    <strong>Kraanwater is veilig</strong> in heel Nederland, maar kook het tot baby 6 maanden oud is. 
                    Geen additieven nodig - Nederlands water heeft uitstekende kwaliteit.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link 
                  href="/calculator"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-white transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-gray-700">Bereken veilige voeding hoeveelheden </div>
                    <div className="text-gray-600">Voorkom overvoeding die diarree kan veroorzaken</div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Gerelateerde Artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/problemen-oplossen/allergische-reacties-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Allergische reacties flesvoeding </div>
                  <div className="text-gray-600">Onderscheid tussen allergie en diarree</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/flesvoeding-bewaren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Flesvoeding bewaren </div>
                  <div className="text-gray-600">Voorkom besmetting door juiste bewaring</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/veilig-verwarmen-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Veilig verwarmen flesvoeding </div>
                  <div className="text-gray-600">Juiste temperatuur voorkomt maagproblemen</div>
                </Link>
                <Link href="/kennisbank/problemen-oplossen/krampjes-na-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Krampjes na flesvoeding </div>
                  <div className="text-gray-600">Andere maag-darm problemen herkennen</div>
                </Link>
              </div>
            </section>

          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}