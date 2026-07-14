import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Moon, Clock, Baby, AlertTriangle, Thermometer, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding en Slapen: Nederlandse Gids voor Betere Babyslaap',
  description: 'Complete Nederlandse gids voor optimaal gebruik van flesvoeding voor betere slaappatronen. Van nachtvoedingen tot slaaptraining: alles wat ouders moeten weten.',
}

export default function FlesvoedingEnSlapenPage() {
  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/slapende-baby-2.webp",
      alt: "Baby slaap routine met flesvoeding",
      caption: "Optimale timing voor betere nachtrust"
    },
    {
      src: "/top-view-sleeping-baby.webp", 
      alt: "Geleidelijke afbouw nachtvoedingen",
      caption: "Stapsgewijse aanpak voor doorslapen"
    },
    {
      src: "/slapende-babe.webp",
      alt: "Perfecte slaapomgeving voor baby",
      caption: "Ideale setup voor rustgevende voeding"
    }
  ]

  // Ad targeting keywords
  const adTopics = ["Baby Slaap", "Nachtvoeding", "Ouder Welzijn"]

  // Data arrays
  const flesvoedingVoordelen = [
    "Soms langere slaapperiodes, al verschilt dit per baby",
    "Voorspelbaardere timing en volumes", 
    "Beide ouders kunnen nachtvoeding doen",
    "Duidelijkere saturatie signalen van baby",
    "Stabielere bloedsuiker = rustiger slaap",
    "Veel ouders voelen zich meer uitgerust"
  ]

  const leeftijdSpecifiekeSchemas = [
    {
      leeftijd: "0-3 Maanden",
      schema: "06:00, 09:00, 12:00, 15:00, 18:00, 21:00, 00:00, 03:00",
      nachtvoedingen: "2-4x per nacht normaal",
      volumes: "120-210ml per voeding"
    },
    {
      leeftijd: "3-6 Maanden", 
      schema: "07:00, 10:30, 13:30, 17:00, 20:00, 23:00 (optioneel)",
      nachtvoedingen: "1-2x per nacht",
      volumes: "150-210ml per voeding"
    },
    {
      leeftijd: "6+ Maanden",
      schema: "07:00, 11:00, 15:00, 19:30",
      nachtvoedingen: "0x ideaal, max 1x",
      volumes: "150-250ml per voeding"
    }
  ]

  const nachtvoedingAfbouwStappen = [
    "Houd het huidige patroon bij - noteer een week lang voeding en slaap",
    "Controleer of je baby eraan toe is - >5kg, stabiele groei, 4+ uur tussen dagvoedingen",
    "Kies een methode - minder volume, timing verschuiven, of je partner neemt over",
    "Start geleidelijk - verminder 30ml per week of verschuif de timing",
    "Houd het gewicht in de gaten - controleer wekelijks tijdens het proces",
    "Wees consistent - houd je aanpak minimaal 1 week vol"
  ]

  const slaapinducerendeTechnieken = [
    "Gedimd/rood licht - behoudt de melatonineproductie",
    "Rustige omgeving - 18-20°C, geen tv of telefoon",
    "Langzaam voeden - 20-30 minuten voor een verzadigd gevoel",
    "Consistente routine - elke avond dezelfde volgorde",
    "Optimale timing - 30-45 min voor de gewenste slaaptijd",
    "Ritueel na de voeding - boertje, schone luier, rustige overgang naar bed"
  ]

  const veelvoorkomendeProblemen = [
    {
      probleem: "Baby valt in slaap tijdens voeding",
      oorzaak: "Te warme omgeving, langzame speen, timing als je baby oververmoeid is",
      oplossing: "Koelere kamer (18-19°C), speen met snellere doorstroom, eerder voeden"
    },
    {
      probleem: "Kan alleen slapen na voeding",
      oorzaak: "Sterke voeding-slaap koppeling",
      oplossing: "Geleidelijk ontkoppelen - voeding 15-30 min voor slaap"
    },
    {
      probleem: "Frequent nachtwakker voor voeding", 
      oorzaak: "Te kleine dagvolumes, verkeerde timing van de laatste voeding",
      oplossing: "Verhoog de dagvoeding met 30-50ml, geef de laatste voeding 30 min later"
    }
  ]

  const nederlandseSlaapCultuur = [
    "Vroeg naar bed - 19:00-20:00 bedtijd standaard",
    "Eigen kamer eerder - 3-6 maanden vs internationale norm",
    "Zachte slaaptraining - voorkeur voor zachte methoden",
    "Partner gelijkheid - beide ouders delen nacht duties",
    "Consultatiebureau ondersteuning - deskundige professionele begeleiding",
    "Nadruk op routine - sterke nadruk op consistentie"
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            
            {/* Header - ALWAYS outside of card containers */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Kennisbank • Praktische Tips</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Moon className="w-6 h-6 mr-3 text-primary" />
                Flesvoeding en Slapen: Nederlandse Gids voor Betere Babyslaap
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Slaap is cruciaal voor baby's ontwikkeling en ouders' welzijn. Deze uitgebreide gids helpt Nederlandse ouders optimaal gebruik maken van flesvoeding voor betere slaappatronen.
              </p>
            </div>

            {/* Introduction Section */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Flesvoeding kan invloed hebben op de slaappatronen van baby's. Sommige ouders merken dat flesvoeding-baby's
                iets langer achter elkaar slapen, maar dit verschilt sterk per baby.
              </p>
              
 <div className="mt-4">
                <p className="text-gray-700">
                  <strong>Uit de praktijk:</strong> Flesvoeding baby's slapen soms wat eerder door dan borstvoeding baby's.
                  Veel ouders merken langere aaneengesloten slaap met een vaste flesvoeding routine, maar dit verschilt per baby.
                </p>
              </div>
            </section>

            {/* Let op: veilig slapen */}
            <section className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Let op: veilig slapen</h3>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Leg je baby altijd op de rug te slapen, op een stevig matras zonder losse dekens, kussens of knuffels. Geef je baby nooit een fles mee in bed en laat de baby niet met de fles in slaap vallen: dat geeft kans op verslikken en op tandbederf. Voed je baby en leg hem daarna pas terug in bed.
                  </p>
                </div>
              </div>
            </section>

            {/* Hoe Flesvoeding Slaap Beïnvloedt */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Hoe Flesvoeding Slaap Beïnvloedt</h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Wat weten we hierover</h3>
                <p className="text-gray-700 mb-4">
                  Sommige ouders ervaren dat flesvoeding het slaappatroon beïnvloedt, maar dit verschilt per baby. Een <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen" className="text-primary hover:underline font-medium">consistent voedingsritme</Link> kan hierbij helpen:
                </p>
                <ul className="space-y-3 mb-6">
                  {flesvoedingVoordelen.map((voordeel, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Verzadiging en slaap</h3>
 <div className="p-4">
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Verzadiging:</strong> na een voeding voelt je baby zich vaak verzadigd en slaperig, maar hoe lang dat aanhoudt verschilt per baby
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Stabielere bloedsuiker:</strong> een goede voeding kan nachtelijke hongerpieken verminderen, al is dat niet bij elke baby hetzelfde
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Rust en routine:</strong> een rustige, vaste avondroutine helpt veel baby's om makkelijker in slaap te vallen
                  </p>
                </div>
              </div>
            </section>

            {/* Optimale Voedingstiming */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Optimale voedingstiming voor de slaap
              </h2>
              
              <div className="space-y-4">
                {leeftijdSpecifiekeSchemas.map((schema, index) => (
 <div key={index} className="p-4">
                    <h3 className="font-medium text-primary mb-3">{schema.leeftijd}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-700"><strong>Schema:</strong></p>
                        <p className="text-gray-700">{schema.schema}</p>
                      </div>
                      <div>
                        <p className="text-gray-700"><strong>Nacht:</strong></p>
                        <p className="text-gray-700">{schema.nachtvoedingen}</p>
                      </div>
                      <div>
                        <p className="text-gray-700"><strong>Volumes:</strong></p>
                        <p className="text-gray-700">{schema.volumes}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
 <div className="mt-6">
                <h4 className="font-medium text-gray-700 mb-2">De ideale voeding voor het slapengaan</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Timing:</strong> 30-45 min voor de gewenste slaaptijd →{' '}
                  <strong>Volume:</strong> de grootste voeding van de dag →{' '}
                  <strong>Omgeving:</strong> gedimd licht, melk van 37°C, rustige routine
                </p>
              </div>
            </section>

            {/* Nachtvoedingen Stoppen */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Nachtvoedingen: Wanneer en Hoe Stoppen?</h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Signalen dat je baby eraan toe is</h3>
 <div className="p-4 mb-6">
                  <p className="text-gray-700 text-sm mb-2"><strong>Biologische indicatoren:</strong></p>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Gewicht &gt;5kg (voldoende reserves)</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Stabiele groei curve</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>&gt;180ml per voeding overdag</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>4+ uur tussen dag voedingen</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Bewuste week/slaap cyclus (3-6 maanden)</span></li>
                  </ul>
                </div>
                
                <h3 className="font-medium text-primary mb-4">Geleidelijke Afbouw Strategie</h3>
                <ul className="space-y-3">
                  {nachtvoedingAfbouwStappen.map((stap, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{stap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Slaapinducerende Technieken */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Slaapbevorderende voedingstechnieken</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                De juiste omgeving en technieken kunnen flesvoeding optimaal inzetten voor betere slaap:
              </p>
              
              <ul className="space-y-3 mb-6">
                {slaapinducerendeTechnieken.map((techniek, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Moon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{techniek}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Routine voor de voeding (30 minuten voor bedtijd)</h3>
 <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                      <p><strong>Voorbereiding:</strong></p>
                      <p className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Warm bad (optioneel)</span></p>
                      <p className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Pyjama aantrekken</span></p>
                      <p className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Lichten dimmen</span></p>
                    </div>
                    <div>
                      <p><strong>Na voeding:</strong></p>
                      <p className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Rustig een boertje laten</span></p>
                      <p className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Rustige overgang naar bed</span></p>
                      <p className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Knuffel of vertrouwd voorwerp</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Veelvoorkomende Problemen */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelvoorkomende Slaap-Voeding Problemen</h2>
              
              <div className="space-y-4">
                {veelvoorkomendeProblemen.map((item, index) => (
 <div key={index} className="p-4">
                    <h3 className="font-medium text-primary mb-2">{item.probleem}</h3>
                    <p className="text-gray-700 text-sm mb-2"><strong>Mogelijke oorzaak:</strong> {item.oorzaak}</p>
                    <p className="text-gray-700 text-sm"><strong>Oplossing:</strong> {item.oplossing}</p>
                  </div>
                ))}
              </div>
              
 <div className="mt-6">
                <h4 className="font-medium text-primary mb-2">Gas/Boertjes Verstoren Slaap</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Preventie:</strong> anti-colic flessen, juiste temperatuur (37°C), pauzes tijdens de voeding, houd je baby in een hoek van 45° →{' '}
                  <strong>Behandeling:</strong> laat je baby 3x boertjes tijdens de voeding, buikmassage, fietsbeweging met de beentjes
                </p>
              </div>
            </section>

            {/* Leeftijd-Specifieke Strategieën */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Baby className="w-5 h-5 mr-2" />
                Leeftijdsspecifieke slaapstrategieën
              </h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">0-8 weken: overlevingsmodus</h3>
 <div className="p-4 mb-6">
                  <p className="text-gray-700 text-sm mb-2"><strong>Realistische verwachtingen:</strong></p>
                  <p className="text-gray-700 text-sm mb-2">16-20 uur slaap per dag, max 2-4 uur aaneengesloten, 2-4x nachtvoeding is normaal</p>
                  <p className="text-gray-700 text-sm"><strong>Strategie:</strong> dag = licht, nacht = donker, zo min mogelijk interactie 's nachts, wissel de nachten met je partner af</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">4-6 maanden: periode van slaaptraining</h3>
 <div className="p-4 mb-6">
                  <p className="text-gray-700 text-sm mb-2"><strong>Nederlandse voorkeur voor slaaptraining:</strong></p>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Stoelmethode: stoel naast bed, elke 3 dagen verder (2-3 weken)</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Oppakken en neerleggen: oppakken bij huilen, neerleggen als je baby rustig is</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Zachte aanpak: minder stress voor je baby én voor jullie als ouders</span></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">6+ maanden: consistentie en onderhoud</h3>
 <div className="p-4">
                  <p className="text-gray-700 text-sm">
                    <strong>Capaciteiten:</strong> 10-12 uur doorslapen mogelijk, geen nachtvoeding nodig, 3-4x overdag voldoende →{' '}
                    <strong>Uitdagingen:</strong> tandjes komen, wennen aan reizen, afstemmen met de kinderopvang
                  </p>
                </div>
              </div>
            </section>

            {/* Nederlandse Slaap Cultuur */}
            <section className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-amber-800 mb-2">Nederlandse slaapcultuur</h3>
                  <p className="text-sm text-amber-700 leading-relaxed mb-4">
                    Nederland heeft een eigen slaapcultuur die je als flesvoedingouder kan helpen:
                  </p>
                  <ul className="space-y-2">
                    {nederlandseSlaapCultuur.map((aspect, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                        <span className="text-amber-700">{aspect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link 
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-white transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-primary">Bereken optimale bedtijd voeding</div>
                    <div className="flex items-center justify-between"><span className="text-gray-600">Gebruik onze calculator voor perfecte volumes</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Handige producten */}
            <AffiliateProductWidget
              pageId="praktische-tips_flesvoeding-en-slapen"
              title="Handige producten"
            />

            {/* Related Articles */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Gerelateerde Artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/praktische-tips/nachtvoeding-optimaliseren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Nachtvoeding optimaliseren →</div>
                  <div className="text-sm text-gray-600">Specifieke technieken voor betere nachten</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Voedingsritme opbouwen →</div>
                  <div className="text-sm text-gray-600">Structuur creëren voor hele familie</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/partner-betrekken-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Partner betrekken flesvoeding →</div>
                  <div className="text-sm text-gray-600">Verdeel nachtvoedingen eerlijk</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/juiste-houding-bij-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Juiste houding bij flesvoeding →</div>
                  <div className="text-sm text-gray-600">Comfortable posities voor slaap-voeding</div>
                </Link>
                <a href="https://togwaarde.nl" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Welke slaapzak en kleding bij welke kamertemperatuur →</div>
                  <div className="text-sm text-gray-600">Op onze zustersite TOGWaarde.nl</div>
                </a>
              </div>
            </section>

          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}