import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Plane, ArrowRight, Home, MapPin, CheckCircle, AlertTriangle, Calculator, Thermometer } from 'lucide-react'
import BolProductSection from '../../../../components/BolProductLink'

export const metadata = {
  title: 'Flesvoeding op Vakantie: Complete Reis Gids Nederlandse Ouders 2026',
  description: 'Stress-vrij reizen met baby en flesvoeding. Alle praktische tips voor vliegtuig, auto, internationale reizen. Van packing lists tot noodplannen voor zorgeloze vakantie.',
}


  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/flesvoeding-door-mama.webp",
      alt: "Flesvoeding geven tijdens vakantie",
      caption: "Ontspannen voeden, ook op vakantie"
    },
    {
      src: "/baby.webp",
      alt: "Baby geniet van fles op vakantie",
      caption: "Vertrouwde routine, nieuwe omgeving"
    },
    {
      src: "/mother_and_baby.webp",
      alt: "Reizen met baby en flesvoeding",
      caption: "Goed voorbereid op reis"
    }
  ]

  const adTopics = ["Reizen met Baby", "Vakantie Voeding", "Baby Reisartikelen", "Onderweg Voeden"]

export default function VakantiePage() {
  const travelAdvantages = [
    'Geen kolf equipment nodig (ruimte besparing)',
    'Partner kan volledig overnemen tijdens reis',
    'Voorspelbare routines makkelijker vol te houden',
    'Geen afhankelijkheid mama\'s dieet of stress',
    'Wereldwijd verkrijgbaar - internationale beschikbaarheid',
    'Meer flexibiliteit in planning'
  ]

  const transportTypes = [
    {
      type: 'Vliegtuig Reizen',
      icon: '',
      pros: ['Formule poeder geen beperking handbagage', 'Kant-en-klare melk >100ml toegestaan met baby', 'Flesopwarmservice bij meeste airlines'],
      cons: ['Veiligheidscontrole extra tijd (15-30 min)', 'Drukverandering baby oren', 'Beperkte bereidingsruimte'],
      tips: 'Voeding geven bij opstijgen/landen tegen oordruk, extra formule voor vertragingen'
    },
    {
      type: 'Auto Reizen',
      icon: '',
      pros: ['Volledige controle over voorzieningen', 'Flexibele stops schema', 'Onbeperkte bagage ruimte'],
      cons: ['Koeling management uitdaging', 'Weerafhankelijk', 'Lange reistijden baby'],
      tips: '12V koelbox, stops elke 2-3 uur, reserve routes plannen'
    },
    {
      type: 'Trein Reizen',
      icon: '',
      pros: ['Meer bewegingsruimte', 'Faciliteiten aan boord', 'Minder veiligheidsrestricties'],
      cons: ['Beperkt warm water bij NS', 'Druk tijdens spitsuren', 'Overstaptijd cruciaal'],
      tips: 'Family carriages reserveren, thermos meenemen, flexibele tickets'
    }
  ]

  const accommodationTypes = [
    {
      type: 'Hotels',
      features: ['24/7 roomservice', 'Minikoelkast op kamer', 'Flesopwarmservice', 'Babybedje beschikbaar'],
      setup: ['Vraag kamer dichtbij ijsmachine', 'Minibar ruimte voor formule', 'Badkamer als bereidingsruimte', 'Noodcontact procedures'],
      advantages: 'Comfort en service, geen voorbereiding nodig'
    },
    {
      type: 'Vakantiehuizen',
      features: ['Volledige keukenfaciliteiten', 'Wasmachine/droger', 'Meer ruimte', 'Voordelig'],
      setup: ['Keuken baby-zone inrichten', 'Sterilisatie routine opzetten', 'Lokale boodschappenlijst', 'Noodvoorraad plan'],
      advantages: 'Thuiscomfort, vertrouwde routines, bereiden in bulk'
    },
    {
      type: 'Camping',
      features: ['Goede koelbox essentieel', 'Draagbare verwarmingsopties', 'Weerbescherming', 'Noodcommunicatie'],
      setup: ['Waterbron verificatie', 'Reserve stroomsystemen', 'Afstand medische faciliteit', 'Nood evacuatieplan'],
      advantages: 'Avontuurlijke ervaring, natuurbeleving, budgetvriendelijk'
    }
  ]

  const internationalTips = [
    {
      region: 'Zuid-Europa (Spanje, Italië)',
      climate: 'Warm/Hot',
      considerations: ['Hitte-uitdagingen bij opslag formule', 'Siësta timing impact', 'Laat eetcultuur', 'Wisselende apotheekopeningstijden'],
      solutions: ['Extra koelmethoden', 'Schema aanpassen', 'Airconditioning accommodatie', 'Verhoogde vochtbehoefte']
    },
    {
      region: 'Frankrijk',
      climate: 'Temperate',
      considerations: ['Uitstekende beschikbaarheid babyproducten', 'Hoogwaardige formules (Gallia)', 'Babyvriendelijke cultuur', 'Apotheek expertise'],
      solutions: ['Lokale producten verkennen', 'Monoprix/Carrefour winkelen', 'Culturele waardering', 'Uitstekend medisch systeem']
    },
    {
      region: 'Exotische Bestemmingen',
      climate: 'Variable',
      considerations: ['Waterkwaliteit zorgen', 'Beperkte formule beschikbaarheid', 'Wisselende medische faciliteiten', 'Taalbarrières'],
      solutions: ['100% formule voorraad meenemen', 'Alleen flessenwater gebruiken', 'Noodevacuatie verzekering', 'Ambassade registratie']
    }
  ]

  const emergencyProtocols = [
    {
      scenario: 'Verloren/beschadigde formule',
      immediate: ['Resterende voorraad beoordelen', 'Dichtstbijzijnde apotheek zoeken', 'Lokale kinderarts contacteren'],
      noodplan: ['Veiligheid lokale merken onderzoeken', 'Ambassade hulp', 'Verzekeringsdocumentatie'],
      prevention: 'Altijd 25% extra voorraad, meerdere opslaglocaties'
    },
    {
      scenario: 'Baby ziek tijdens reis',
      immediate: ['Temperatuur monitoren', 'Hydratatie op peil houden', 'Medisch consult'],
      noodplan: ['Ziekenhuis voorbereiding', 'Reisverzekering activeren', 'Familie ondersteuning coördineren'],
      prevention: 'Uitgebreide medische kit, lokale kinderarts contacten, noodprotocollen'
    },
    {
      scenario: 'Formule weigering nieuwe omgeving',
      immediate: ['Andere temperatuur proberen', 'Andere verzorger laten proberen', 'Vertrouwde routine herstellen'],
      noodplan: ['Medisch consult', 'Geleidelijke omgevingsaanpassing', 'Troostartikelen inzetten'],
      prevention: 'Veranderingen thuis oefenen, troostartikelen meenemen, geleidelijke overgangen'
    }
  ]

  const packingEssentials = {
    handLuggage: [
      '48-hour formula supply minimum',
      '3x more bottles than normal',
      'Speen backups verschillende types',
      'Portable bottle warmer',
      'Thermos pre-filled hot water',
      'Cleaning wipes/sanitizer',
      'Emergency contact information',
      'Medical documents baby'
    ],
    checkedLuggage: [
      'Bulk formula (trip + 25% extra)',
      'Sterilizing equipment portable',
      'Extra bottles/sippy cups',
      'Cleaning supplies bulk',
      'Reserve kleding voor spills',
      'Comfort items (blankets/toys)',
      'Medical kit comprehensive',
      'Local pharmacy research'
    ]
  }

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Praktische Tips • Vakantie</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Plane className="w-6 h-6 mr-3 text-primary" />
                Flesvoeding op Vakantie: Complete Reis Gids
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Reizen met baby en flesvoeding hoeft geen stress te zijn. Leer alle praktische tips 
                voor zorgeloze vakanties met je baby.
              </p>
            </div>

            {/* Why bottle feeding is easier for travel */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Plane className="w-5 h-5 mr-2" />
                Waarom Vakantie met Flesvoeding Makkelijker Is
              </h2>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-4">
                  Veel Nederlandse families reizen binnen het eerste jaar na geboorte.
                  Flesvoeding families ervaren over het algemeen minder reis-stress dankzij <Link href="/kennisbank/hygiene-bereiding/houdbaarheid-flesvoeding" className="text-primary hover:underline font-medium">goede houdbaarheidstips</Link> en <Link href="/kennisbank/hygiene-bereiding/flesvoeding-bewaren" className="text-primary hover:underline font-medium">veilige bewaartechnieken</Link>.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Voordelen Flesvoeding op Reis</h3>
                  <div className="space-y-2">
                    {travelAdvantages.map((advantage, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Nederlandse Reis Patronen</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Zomer vakanties:</strong> 80% families juni-augustus</div>
                    <div><strong>Kort breaks:</strong> Weekend trips populair</div>
                    <div><strong>Familie bezoek:</strong> 3x per jaar gemiddeld</div>
                    <div><strong>Buitenland:</strong> 45% internationale destinaties</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 border border-gray-200">
                <p className="text-gray-600 text-sm">
                  <strong>Uit ervaring:</strong> Families met flesvoeding ervaren over het algemeen minder
                  reis-stress dan families die kolven tijdens vakantie.
                </p>
              </div>
            </div>

            {/* Transport-specific strategies */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Transport-Specifieke Strategieën</h2>
              
              <div className="space-y-6">
                {transportTypes.map((transport, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-3">
                      {transport.type}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Voordelen:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {transport.pros.map((pro, idx) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Uitdagingen:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {transport.cons.map((con, idx) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="p-2 bg-white rounded text-sm text-gray-600">
                      <strong>Succestips:</strong> {transport.tips}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accommodation types */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Accommodatie Types & Flesvoeding Setup
              </h2>
              
              <div className="space-y-6">
                {accommodationTypes.map((accommodation, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-3">{accommodation.type}</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Kenmerken:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {accommodation.features.map((feature, idx) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Setup Tips:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {accommodation.setup.map((tip, idx) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="p-2 bg-white rounded text-sm text-gray-600">
                      <strong>Voordeel:</strong> {accommodation.advantages}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* International travel tips */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Internationale Reizen: Land-Specifieke Tips</h2>
              
              <div className="space-y-4">
                {internationalTips.map((region, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-medium text-primary">{region.region}</h3>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                        {region.climate}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Aandachtspunten:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {region.considerations.map((consideration, idx) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{consideration}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Oplossingen:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {region.solutions.map((solution, idx) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency preparedness */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Noodvoorbereiding & Crisisbeheer
              </h2>
              
              <div className="space-y-6">
                {emergencyProtocols.map((protocol, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-3">{protocol.scenario}</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Directe Actie:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {protocol.immediate.map((action, idx) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Noodplan:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {protocol.noodplan.map((plan, idx) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{plan}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="p-2 bg-white rounded text-sm text-gray-600">
                      <strong>Preventie:</strong> {protocol.prevention}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Packing strategies */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Inpakstrategieën: Complete Lijsten</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200">
                  <h3 className="font-medium text-primary mb-3">Handbagage Essentials</h3>
                  <div className="space-y-2">
                    {packingEssentials.handLuggage.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 border border-gray-200">
                  <h3 className="font-medium text-primary mb-3">Ruimbagage Essentiële Items</h3>
                  <div className="space-y-2">
                    {packingEssentials.checkedLuggage.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 border border-gray-200">
                <h4 className="font-medium text-primary mb-2">Onmisbare Reis Apps</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-primary mb-1">Navigatie & Planning:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Google Maps offline (apotheek locaties)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Google Translate (baby/medische termen)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Baby Tracker (voedingsschema)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Weer apps (klimaat planning)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary mb-1">Babyverzorging:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Witte ruis app (slaaproutine)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>EHBO app (noodhulp)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Formule calculator (lokale maten)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Tijdzone omrekener (schema's)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasonal considerations */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Thermometer className="w-5 h-5 mr-2" />
                Seizoensgebonden Vakantie Overwegingen
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200">
                  <h3 className="font-medium text-primary mb-3">Zomer Vakanties (Juni-Augustus)</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Uitdagingen:</strong> Formule bewaartemperatuur, bederfrisico</div>
                    <div><strong>Oplossingen:</strong> Geïsoleerde tassen, koelelementen roteren, schaduwplekken</div>
                    <div><strong>Extra behoeften:</strong> Verhoogde hydratatie, cooling reserve</div>
                    <div><strong>Planning:</strong> Accommodatie met klimaatbeheersing essentieel</div>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-200">
                  <h3 className="font-medium text-primary mb-3">Winter Vakanties (December-Februari)</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Uitdagingen:</strong> Formule bevriezing, betrouwbaarheid verwarming</div>
                    <div><strong>Oplossingen:</strong> Thermos uitrusting, binnen voedingsplekken</div>
                    <div><strong>Voordelen:</strong> Geen bederfzorgen, gezellige binnenroutines</div>
                    <div><strong>Planning:</strong> Reserve verwarmingsbronnen, weerbewaking</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final checklist */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Reis Checklist: 48 Uur Voor Vertrek</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">24 Uur Voor Vertrek:</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Weersvoorspelling bestemming checken</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Vlucht/transport status bevestiging</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Noodcontacten geprogrammeerd</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Formule houdbaarheidsdatums gecontroleerd</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-3">Vertrek Dag:</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Normaal voedingsschema aanhouden</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Reisdocumenten makkelijk bereikbaar</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Noodvoorraad dubbel gecheckt</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Positieve instelling - vakantiemodus!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Affiliate Product Recommendations */}
            <BolProductSection
              productNames={[
                'draagbare flessenwarmer',
                'reis sterilisator',
                'geïsoleerde baby tas',
                'koelbox baby',
                'reis formule container',
                'baby reis accessoires'
              ]}
              title="Reis Essentials voor Flesvoeding"
              variant="card"
              maxProducts={6}
            />

            {/* Vakantie Voeding Producten */}
            <AffiliateProductWidget
              pageId="praktische-tips_flesvoeding-op-vakantie"
              title="Vakantie Voeding Producten"
            />

            {/* Navigation */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/hygiene-bereiding/houdbaarheid-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Houdbaarheid flesvoeding →</div>
                  <div className="text-sm text-gray-600">Bewaren tijdens reis en vakantie</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/flesvoeding-bewaren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Flesvoeding bewaren →</div>
                  <div className="text-sm text-gray-600">Veilige opslag op vakantie</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/veilig-verwarmen-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Veilig verwarmen →</div>
                  <div className="text-sm text-gray-600">Opwarmen zonder microgolf onderweg</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Voedingsritme opbouwen →</div>
                  <div className="text-sm text-gray-600">Schema behouden op vakantie</div>
                </Link>
              </div>
            </div>

            {/* Calculator CTA */}
            <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Bereken je Reis Formule Behoeften
              </h2>
              <p className="text-white/90 mb-4">
                Plan je vakantie voeding perfect. Bereken exact hoeveel formula je nodig hebt 
                voor je reis, plus emergency buffer.
              </p>
              <Link
                href="/"
                className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-medium py-3 px-6 rounded-xl transition-all inline-flex items-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Gratis Calculator Gebruiken
              </Link>
            </div>

          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <KennisbankSidebar 
            images={[
              {
                src: "/difrax-fles-kunstvoeding.webp",
                alt: "Flesvoeding onderweg",
                caption: "Praktisch reizen met flesvoeding"
              },
              {
                src: "/flesvoeding-door-mama.webp",
                alt: "Reizen met baby",
                caption: "Stress-vrij reizen met baby"
              },
              {
                src: "/mother_and_baby.webp",
                alt: "Familie vakantie",
                caption: "Gezellige familie tijd op vakantie"
              }
            ]}
            adTopics={[
              'Baby reisuitrusting kopen',
              'Reisverzekering baby vergelijken',
              'Baby-friendly hotels zoeken'
            ]}
          />
        </div>
      </div>
    </Layout>
  )
}