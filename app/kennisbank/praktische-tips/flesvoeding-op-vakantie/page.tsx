import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Plane, ArrowRight, Home, MapPin, CheckCircle, AlertTriangle, Calculator, Thermometer } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding op vakantie: complete reisgids voor ouders',
  description: 'Ontspannen reizen met baby en flesvoeding. Alle praktische tips voor vliegtuig, auto en internationale reizen. Van paklijsten tot noodplannen voor een zorgeloze vakantie.',
}


  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/drinkende-baby.webp",
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
    'Geen kolfspullen nodig, dat scheelt ruimte',
    'Je partner kan het voeden tijdens de reis volledig overnemen',
    'Voorspelbare routines zijn makkelijker vol te houden',
    'Niet afhankelijk van het dieet of de stress van de moeder',
    'Wereldwijd verkrijgbaar, dus internationaal goed beschikbaar',
    'Meer flexibiliteit in je planning'
  ]

  const transportTypes = [
    {
      type: 'Met het vliegtuig',
      icon: '',
      pros: ['Poeder mag zonder beperking mee in de handbagage', 'Kant-en-klare melk boven 100 ml is toegestaan als je een baby bij je hebt', 'De meeste luchtvaartmaatschappijen warmen een fles voor je op'],
      cons: ['De veiligheidscontrole kost extra tijd (15 tot 30 minuten)', 'Drukverandering kan de oortjes van je baby belasten', 'Beperkte ruimte om een fles te bereiden'],
      tips: 'Geef een voeding bij het opstijgen en landen tegen de oordruk, en neem extra poeder mee voor vertragingen. Maak de fles vers klaar, neem geen kant-en-klaar bereide fles mee.'
    },
    {
      type: 'Met de auto',
      icon: '',
      pros: ['Volledige controle over je voorzieningen', 'Je bepaalt zelf wanneer je stopt', 'Onbeperkte ruimte voor bagage'],
      cons: ['Koeling regelen is lastig', 'Weersafhankelijk', 'Lange reistijden voor je baby'],
      tips: 'Neem een 12V-koelbox mee, stop elke 2 tot 3 uur en plan reserveroutes. Vervoer poeder en water apart en maak de fles onderweg vers klaar.'
    },
    {
      type: 'Met de trein',
      icon: '',
      pros: ['Meer bewegingsruimte', 'Voorzieningen aan boord', 'Minder veiligheidsrestricties'],
      cons: ['Beperkt warm water bij de NS', 'Druk tijdens de spits', 'Overstaptijd is cruciaal'],
      tips: 'Reserveer een rustig gezinsrijtuig, neem een thermosfles mee en kies flexibele tickets.'
    }
  ]

  const accommodationTypes = [
    {
      type: 'Hotel',
      features: ['Roomservice dag en nacht', 'Minikoelkast op de kamer', 'Fles laten opwarmen', 'Babybedje beschikbaar'],
      setup: ['Vraag een kamer dicht bij de ijsmachine', 'Gebruik de minibar voor het poeder', 'Gebruik de badkamer als bereidingsplek', 'Noteer de noodnummers'],
      advantages: 'Comfort en service, je hoeft weinig zelf voor te bereiden'
    },
    {
      type: 'Vakantiehuis',
      features: ['Volledig ingerichte keuken', 'Wasmachine en droger', 'Meer ruimte', 'Voordelig'],
      setup: ['Richt een babyhoek in de keuken in', 'Zet een vaste routine voor het reinigen op', 'Maak een lokale boodschappenlijst', 'Leg een noodvoorraad aan'],
      advantages: 'Comfort als thuis, vertrouwde routines, en je kunt spullen vooruit klaarzetten'
    },
    {
      type: 'Camping',
      features: ['Een goede koelbox is onmisbaar', 'Draagbare manieren om op te warmen', 'Bescherming tegen het weer', 'Communicatie bij nood'],
      setup: ['Controleer de waterbron', 'Zorg voor een reservestroombron', 'Weet hoe ver de dichtstbijzijnde huisarts is', 'Maak een noodplan'],
      advantages: 'Avontuurlijk, dicht bij de natuur en budgetvriendelijk'
    }
  ]

  const internationalTips = [
    {
      region: 'Zuid-Europa (Spanje, Italië)',
      climate: 'Warm',
      considerations: ['Hitte maakt het bewaren van poeder en fles lastiger', 'De siësta verschuift de dagindeling', 'Er wordt laat gegeten', 'Wisselende openingstijden van apotheken'],
      solutions: ['Neem extra manieren om te koelen mee', 'Pas het schema aan', 'Kies een accommodatie met airco', 'Houd rekening met een grotere vochtbehoefte']
    },
    {
      region: 'Frankrijk',
      climate: 'Gematigd',
      considerations: ['Babyproducten zijn goed verkrijgbaar', 'Goede flesvoeding (bijvoorbeeld Gallia)', 'Kindvriendelijke cultuur', 'Apotheken met veel kennis'],
      solutions: ['Verken de lokale producten', 'Doe boodschappen bij Monoprix of Carrefour', 'Waardeer de cultuur', 'Goed medisch systeem']
    },
    {
      region: 'Verre bestemmingen',
      climate: 'Wisselend',
      considerations: ['Zorgen over de waterkwaliteit', 'Beperkte beschikbaarheid van flesvoeding', 'Wisselende medische voorzieningen', 'Taalbarrières'],
      solutions: ['Neem voldoende poeder voor de hele reis mee', 'Bij twijfel over het water: kook het of gebruik speciaal babywater (flessenwater is niet steriel)', 'Sluit een reisverzekering met repatriëring af', 'Registreer je bij de ambassade']
    }
  ]

  const emergencyProtocols = [
    {
      scenario: 'Poeder kwijt of beschadigd',
      immediate: ['Bekijk hoeveel voorraad je nog hebt', 'Zoek de dichtstbijzijnde apotheek', 'Neem contact op met een lokale kinderarts'],
      noodplan: ['Zoek uit welke lokale merken veilig zijn', 'Vraag hulp bij de ambassade', 'Houd je verzekeringsdocumenten bij de hand'],
      prevention: 'Neem altijd zo\'n 25% extra voorraad mee en verdeel die over meerdere plekken in je bagage'
    },
    {
      scenario: 'Baby ziek tijdens de reis',
      immediate: ['Houd de temperatuur in de gaten', 'Zorg dat je baby genoeg blijft drinken', 'Raadpleeg een arts'],
      noodplan: ['Weet waar het ziekenhuis is', 'Activeer je reisverzekering', 'Regel steun van familie'],
      prevention: 'Neem een goede EHBO-set mee, noteer de contactgegevens van een lokale kinderarts en spreek een noodplan af'
    },
    {
      scenario: 'Baby weigert de fles in de nieuwe omgeving',
      immediate: ['Probeer een andere temperatuur', 'Laat een andere verzorger het proberen', 'Herstel de vertrouwde routine'],
      noodplan: ['Raadpleeg een arts', 'Laat je baby stap voor stap wennen', 'Gebruik vertrouwde troostspullen'],
      prevention: 'Oefen veranderingen thuis, neem vertrouwde troostspullen mee en bouw overgangen rustig op'
    }
  ]

  const packingEssentials = {
    handLuggage: [
      'Poeder voor minstens 48 uur',
      'Drie keer zoveel flessen als normaal',
      'Reservespenen in verschillende types',
      'Draagbare flessenwarmer',
      'Thermosfles met heet water',
      'Reinigingsdoekjes of handgel',
      'Noodnummers en contactgegevens',
      'Medische documenten van je baby'
    ],
    checkedLuggage: [
      'Poeder voor de hele reis, plus 25% extra',
      'Draagbare set om te steriliseren',
      'Extra flessen en tuitbekers',
      'Voldoende reinigingsspullen',
      'Reservekleding voor knoeien',
      'Vertrouwde spulletjes (dekentje, knuffel)',
      'Uitgebreide EHBO-set',
      'Vooraf uitgezochte lokale apotheek'
    ]
  }

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Praktische tips • Vakantie</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Plane className="w-6 h-6 mr-3 text-primary" />
                Flesvoeding op vakantie: complete reisgids
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Reizen met baby en flesvoeding hoeft geen stress te zijn. Leer alle praktische tips 
                voor zorgeloze vakanties met je baby.
              </p>
            </div>

            {/* Let op: veilig reisadvies */}
            <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-amber-800 mb-2">Let op: neem geen klaargemaakte fles mee onderweg</h3>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Neem onderweg geen kant-en-klaar bereide fles mee. Vervoer het poeder en het water
                    apart en maak de fles pas vlak voor de voeding vers klaar. Een klaargemaakte fles kun
                    je hooguit een half uur op kamertemperatuur bewaren, of maximaal 8 uur achterin de
                    koelkast bij 4°C. Twijfel je in het buitenland over de kwaliteit van het water? Kook
                    het dan, of gebruik speciaal babywater. Flessenwater is namelijk niet steriel.
                  </p>
                </div>
              </div>
            </div>

            {/* Why bottle feeding is easier for travel */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Plane className="w-5 h-5 mr-2" />
                Waarom vakantie met flesvoeding makkelijker is
              </h2>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-4">
                  Veel gezinnen reizen al in het eerste jaar met hun baby.
                  Gezinnen met flesvoeding ervaren over het algemeen minder reisstress dankzij <Link href="/kennisbank/hygiene-bereiding/houdbaarheid-flesvoeding" className="text-primary hover:underline font-medium">goede houdbaarheidstips</Link> en <Link href="/kennisbank/hygiene-bereiding/flesvoeding-bewaren" className="text-primary hover:underline font-medium">veilige bewaartechnieken</Link>.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Voordelen van flesvoeding op reis</h3>
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
                  <h3 className="font-medium text-primary mb-3">Hoe gezinnen vaak reizen</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Zomervakanties:</strong> de meeste gezinnen reizen in de zomermaanden</div>
                    <div><strong>Korte trips:</strong> weekendjes weg zijn populair</div>
                    <div><strong>Familiebezoek:</strong> gemiddeld een paar keer per jaar</div>
                    <div><strong>Buitenland:</strong> een deel van de gezinnen reist naar het buitenland</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <p className="text-gray-600 text-sm">
                  <strong>Uit ervaring:</strong> gezinnen met flesvoeding ervaren over het algemeen minder
                  reisstress dan gezinnen die op vakantie kolven.
                </p>
              </div>
            </div>

            {/* Transport-specific strategies */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Tips per vervoermiddel</h2>
              
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
                            <li key={idx} className="flex items-start space-x-2">
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
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="p-2 bg-white rounded text-sm text-gray-600">
                      <strong>Tips:</strong> {transport.tips}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accommodation types */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Accommodatie en flesvoeding klaarzetten
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
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Zo pak je het aan:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {accommodation.setup.map((tip, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
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
              <h2 className="text-lg font-medium text-primary mb-4">Internationaal reizen: tips per bestemming</h2>
              
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
                            <li key={idx} className="flex items-start space-x-2">
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
                            <li key={idx} className="flex items-start space-x-2">
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
                Voorbereid zijn op noodgevallen
              </h2>
              
              <div className="space-y-6">
                {emergencyProtocols.map((protocol, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-3">{protocol.scenario}</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Wat je meteen doet:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {protocol.immediate.map((action, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
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
                            <li key={idx} className="flex items-start space-x-2">
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
              <h2 className="text-lg font-medium text-primary mb-4">Paklijsten voor onderweg</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">In de handbagage</h3>
                  <div className="space-y-2">
                    {packingEssentials.handLuggage.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">In de ruimbagage</h3>
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

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-medium text-primary mb-2">Handige reis-apps</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-primary mb-1">Navigatie en planning:</h5>
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
                Waar je per seizoen op let
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Zomervakanties (juni tot augustus)</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Uitdagingen:</strong> de bewaartemperatuur en het risico op bederf</div>
                    <div><strong>Oplossingen:</strong> geïsoleerde tassen, koelelementen wisselen, plekken in de schaduw</div>
                    <div><strong>Extra nodig:</strong> meer aandacht voor vocht en reservekoeling</div>
                    <div><strong>Planning:</strong> een accommodatie met airco is een uitkomst</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Wintervakanties (december tot februari)</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Uitdagingen:</strong> bevriezing en betrouwbare verwarming</div>
                    <div><strong>Oplossingen:</strong> een thermosfles en voeden binnen</div>
                    <div><strong>Voordelen:</strong> geen zorgen over bederf, gezellige routines binnen</div>
                    <div><strong>Planning:</strong> een reserveverwarmingsbron en het weer in de gaten houden</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final checklist */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Checklist: de laatste 48 uur voor vertrek</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">24 uur voor vertrek:</h3>
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
                  <h3 className="font-medium text-primary mb-3">Op de dag van vertrek:</h3>
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


            {/* Handige producten */}
            <AffiliateProductWidget
              pageId="praktische-tips_flesvoeding-op-vakantie"
              title="Handige producten"
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
                Bereken hoeveel flesvoeding je nodig hebt
              </h2>
              <p className="text-white/90 mb-4">
                Plan je vakantievoeding goed. Bereken precies hoeveel flesvoeding je voor je reis nodig
                hebt, met een ruime buffer voor onderweg.
              </p>
              <Link
                href="/"
                className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-medium py-3 px-6 rounded-xl transition-all inline-flex items-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Naar de calculator
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
                src: "/drinkende-baby.webp",
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