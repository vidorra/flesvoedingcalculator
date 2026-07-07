import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Baby, Target, ShoppingCart, Calendar, AlertTriangle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Baby Leren Zelf Drinken: Nederlandse Gids voor Zelfstandigheid',
  description: 'Complete Nederlandse gids voor het leren zelfstandig drinken. Van ontwikkelingsmijlpalen tot beste producten - alles wat ouders moeten weten.',
}

export default function BabyLerenZelfDrinkenPage() {
  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/baby-voeten.webp",
      alt: "Baby voeten tonen ontwikkeling en zelfstandigheid",
      caption: "Stapsgewijze begeleiding naar zelfstandigheid"
    },
    {
      src: "/difrax-fles-kunstvoeding.webp", 
      alt: "Transitie van fles naar zelfstandig drinken",
      caption: "Van fles naar zelfstandige beker"
    },
    {
      src: "/close-up-baby.webp",
      alt: "Baby concentratie tijdens leerproces",
      caption: "Ontwikkeling van vaardigheden"
    }
  ]

  // Ad targeting keywords
  const adTopics = ["Baby Ontwikkeling", "Drinkbekers", "Zelfstandigheid Baby"]

  // Data arrays
  const readinessSignals = [
    "Stabiele gewichtstoename (meestal > 6kg)",
    "Kan zelfstandig rechtop zitten (6+ maanden)",
    "Hand-oog coördinatie: voorwerpen richten naar mond",
    "Begrijpt oorzaak-gevolg relaties",
    "Volledig ontwikkelde nekcontrole (4+ maanden)",
    "Grijpen met duim en wijsvinger komt later (rond 9-10 maanden) en verfijnt het zelf drinken"
  ]

  const nederlandseTimingRichtlijnen = [
    "4-6 maanden: Interesse in volwassen eten/drinken",
    "Rond 6 maanden: Beginnen met oefenen uit een (tuit)beker, water leren drinken uit een beker",
    "6-9 maanden: Eerste pogingen zelf vasthouden en slokjes nemen",
    "9-12 maanden: De fles geleidelijk afbouwen richting het eerste jaar",
    "Rond 12 maanden: Melk en water zelfstandig uit een beker drinken",
    "12-15 maanden: Volledig zelfstandig tijdens maaltijden, minder morsen"
  ]

  const ontwikkelingsStadia = [
    {
      fase: "Exploratie (4-6 maanden)",
      kenmerken: "Visuele interesse, tactiele exploratie, alles naar mond",
      activiteiten: "Plastic flessen laten exploreren, water spel (supervised)"
    },
    {
      fase: "Eerste Pogingen (6-8 maanden)", 
      kenmerken: "Bilateral control, betere mondcoördinatie",
      activiteiten: "Tuitmondbekers met handvatten, hand-in-hand begeleiding"
    },
    {
      fase: "Ontwikkeling (8-10 maanden)",
      kenmerken: "Fijnere greep, beter evenwicht, oplossingsgericht",
      activiteiten: "Verschillende soorten bekers, dagelijks 2-3 keer oefenen"
    },
    {
      fase: "Beheersing (10-15 maanden)",
      kenmerken: "Nauwkeurig richten, hoeveelheid doseren, een-handig gebruik",
      activiteiten: "Drinken in sociale context, integratie bij maaltijden"
    }
  ]

  const topProducten = [
    {
      naam: "MAM Trainer+",
      prijs: "€8-12",
      voordelen: "Anti-spill valve, Nederlandse design, BPA-vrij",
      geschikt: "6-12 maanden"
    },
    {
      naam: "EZPZ Mini Cup", 
      prijs: "€12-16",
      voordelen: "Weighted bottom, moeilijk omvallen, perfecte maat",
      geschikt: "8+ maanden"
    },
    {
      naam: "Oxo Tot Rietjesbeker",
      prijs: "€14-18", 
      voordelen: "Completely leak-proof, promotes proper swallowing",
      geschikt: "10+ maanden"
    }
  ]

  const veelvoorkomendeProblemen = [
    {
      probleem: "Baby weigert cup volledig",
      oorzaak: "Overwelm, sterke flesvoorkeur, verkeerde timing",
      oplossing: "Langzamer introduceren, cup als speelgoed, geen druk"
    },
    {
      probleem: "Excessief morsen", 
      oorzaak: "Normale leercurve, verkeerde cupkeuze",
      oplossing: "Anti-spill features, minder vloeistof, beschermde omgeving"
    },
    {
      probleem: "Baby drinkt te weinig",
      oorzaak: "Ongewende textuur, timing issues",
      oplossing: "Flavor enhancement, optimale timing, kleine targets"
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            
            {/* Header - ALWAYS outside of card containers */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Kennisbank • Voedingstechnieken</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Baby className="w-6 h-6 mr-3 text-primary" />
                Baby Leren Zelf Drinken: Nederlandse Gids voor Zelfstandigheid
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Zelfstandig drinken is een belangrijke ontwikkelingsmijlpaal. Deze uitgebreide gids helpt Nederlandse ouders hun baby stap-voor-stap te begeleiden naar onafhankelijk drinken.
              </p>
            </div>

            {/* Introduction Section */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Het leren zelfstandig drinken is een cruciale vaardigheid die baby's tussen 6-18 maanden ontwikkelen.
                Deze milestone bevordert niet alleen zelfstandigheid, maar ook fijne motoriek en cognitieve ontwikkeling.
                Net zoals bij <Link href="/kennisbank/voedingstechnieken/overgang-naar-beker" className="text-primary hover:underline font-medium">de overgang naar een beker</Link>,
                is geduld en de juiste aanpak essentieel voor succes.
              </p>

 <div className="mt-4">
                <p className="text-gray-700">
                  Het Voedingscentrum adviseert om rond 6 maanden te beginnen met oefenen uit een (tuit)beker en je baby water uit een beker te leren drinken.
                  Bouw de fles daarna geleidelijk af richting het eerste jaar. De meeste baby's drinken rond hun eerste verjaardag melk en water uit een beker,
                  maar elk kind ontwikkelt zich in eigen tempo.
                </p>
              </div>
            </section>

            {/* Wanneer Kan Baby Zelf Drinken */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Wanneer Kan Baby Zelf Drinken Leren?
              </h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Fysiologische Readiness Signalen</h3>
                <p className="text-gray-700 mb-4">
                  Elke baby ontwikkelt zich in eigen tempo, maar deze signalen geven aan dat je baby klaar is om zelfstandig drinken te leren.
                  Vergelijk dit met <Link href="/kennisbank/voedingstechnieken/verschillende-spenen-uitproberen" className="text-primary hover:underline font-medium">het vinden van de juiste speen</Link> -
                  observatie en aanpassing zijn key:
                </p>
                
                <ul className="space-y-3 mb-6">
                  {readinessSignals.map((signal, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Nederlandse Consultatiebureau Mijlpalen</h3>
                <ul className="space-y-3">
                  {nederlandseTimingRichtlijnen.map((timing, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Calendar className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{timing}</span>
                    </li>
                  ))}
                </ul>
                
 <div className="mt-6">
                  <h4 className="font-medium text-gray-700 mb-2">Wat mag je verwachten</h4>
                  <p className="text-gray-700">
                    De meeste baby's beginnen rond 6 maanden met oefenen en drinken rond hun eerste jaar melk en water uit een beker.
                    Sommige baby's hebben er wat langer voor nodig, en dat is prima. Te vroeg geboren baby's hebben vaak wat meer tijd nodig.
                    Kijk naar de ontwikkeling van je eigen kind en niet naar een vaste leeftijd.
                  </p>
                </div>
              </div>
            </section>

            {/* Ontwikkelingsstadia */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Ontwikkelingsstadia en Motoriek</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zelfstandig drinken leren gebeurt in vier duidelijke fasen, elk met eigen kenmerken en stimulatie activiteiten:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ontwikkelingsStadia.map((stadium, index) => (
 <div key={index} className="p-4">
                    <h3 className="font-medium text-primary mb-3">{stadium.fase}</h3>
                    <p className="text-gray-700 text-sm mb-3"><strong>Kenmerken:</strong> {stadium.kenmerken}</p>
                    <p className="text-gray-700 text-sm"><strong>Activiteiten:</strong> {stadium.activiteiten}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Beste Producten */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Beste Producten voor Zelfstandig Drinken
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nederlandse markt biedt uitstekende opties voor elk ontwikkelingsstadium. Hier zijn de top aanbevelingen:
              </p>
              
              <div className="space-y-4">
                {topProducten.map((product, index) => (
 <div key={index} className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-700">{product.naam}</h3>
                      <span className="text-sm text-gray-600 font-medium">{product.prijs}</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-2"><strong>Geschikt:</strong> {product.geschikt}</p>
                    <p className="text-gray-700 text-sm">{product.voordelen}</p>
                  </div>
                ))}
              </div>
              
 <div className="mt-6">
                <h4 className="font-medium text-gray-700 mb-2">Nederlandse Inkoop Tips</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Beste retailers:</strong> Baby-Dump (grootste selectie), Prenatal (expert advice), 
                  Kruidvat/Etos (budget opties), Bol.com (online beoordelingen).
                  <strong>Timing:</strong> Let op acties tijdens de Baby & Kind weken voor scherpere prijzen.
                </p>
              </div>
            </section>

            {/* Stap-voor-Stap Leerplan */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">12-Weken Stap-voor-Stap Leerplan</h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Week 1-2: Introductie Fase</h3>
 <div className="p-4 mb-4">
                  <p className="text-gray-700 text-sm mb-2"><strong>Doelen:</strong> Wennen aan de beker, vrij verkennen, 30-60ml lukt</p>
                  <p className="text-gray-700 text-sm"><strong>Routine:</strong> 2x per dag, sessies van 5 minuten, veel complimenten voor interesse</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Week 3-4: Vaardigheid Ontwikkelen</h3>
 <div className="p-4 mb-4">
                  <p className="text-gray-700 text-sm mb-2"><strong>Doelen:</strong> Beker naar mond brengen, 60-120ml per sessie, minder hand-in-hand begeleiding</p>
                  <p className="text-gray-700 text-sm"><strong>Activiteiten:</strong> Verschillende vormen proberen, belonen bij succes, 3x per dag</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Week 5-8: Competentie Ontwikkeling</h3>
 <div className="p-4 mb-4">
                  <p className="text-gray-700 text-sm mb-2"><strong>Doelen:</strong> 150-200ml zelfstandig, minimaal morsen, opnemen in de routine</p>
                  <p className="text-gray-700 text-sm"><strong>Uitdagingen:</strong> Meerdere soorten bekers, integratie bij maaltijden, sociale context</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Week 9-12: Mastery & Refinement</h3>
 <div className="p-4">
                  <p className="text-gray-700 text-sm mb-2"><strong>Doelen:</strong> Volledige zelfstandigheid, verschillende situaties, drinken in gezelschap</p>
                  <p className="text-gray-700 text-sm"><strong>In de praktijk:</strong> Restaurantbezoek, speelafspraakjes, onderweg, voorbereiding op de opvang</p>
                </div>
              </div>
            </section>

            {/* Problemen Oplossen */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelvoorkomende Problemen Oplossen</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Deze problemen komen vaak voor tijdens het leerproces. Met de juiste aanpak zijn ze goed op te lossen:
              </p>
              
              <div className="space-y-4">
                {veelvoorkomendeProblemen.map((item, index) => (
 <div key={index} className="p-4">
                    <h3 className="font-medium text-primary mb-2">{item.probleem}</h3>
                    <p className="text-gray-700 text-sm mb-2"><strong>Mogelijke oorzaak:</strong> {item.oorzaak}</p>
                    <p className="text-gray-700 text-sm"><strong>Oplossing:</strong> {item.oplossing}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Nederlandse Normen */}
            <section className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-amber-800 mb-2">Nederlandse Kinderopvang Verwachtingen</h3>
                  <p className="text-sm text-amber-700 leading-relaxed mb-4">
                    De meeste Nederlandse kinderopvang verwacht dat kinderen redelijk zelfstandig kunnen drinken. 
                    Start de training 2-3 maanden voor opvang begint.
                  </p>
                  <ul className="space-y-1 text-sm text-amber-700">
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Zelfstandig drinken gedurende de dag</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Redelijke morsen controle</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Kan dorst/behoefte aangeven</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Volgt opvang routine</span></li>
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
                    <div className="font-medium text-primary">Bereken optimale drink volumes</div>
                    <div className="flex items-center justify-between"><span className="text-gray-600">Gebruik onze calculator voor leeftijd-specifiek advies</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Zelf Drinken Producten */}
            <AffiliateProductWidget
              pageId="voedingstechnieken_baby-leren-zelf-drinken"
              title="Zelf Drinken Producten"
            />

            {/* Related Articles */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Gerelateerde Artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/voedingstechnieken/overgang-naar-beker" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Overgang naar beker →</div>
                  <div className="text-sm text-gray-600">Van fles naar open beker: complete gids</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/verschillende-spenen-uitproberen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Verschillende spenen uitproberen →</div>
                  <div className="text-sm text-gray-600">Vind de perfecte speen voor jouw baby</div>
                </Link>
                <Link href="/kennisbank/soorten-flesvoeding/wanneer-overstappen-opvolgmelk" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Wanneer overstappen opvolgmelk →</div>
                  <div className="text-sm text-gray-600">Timing en ontwikkeling van voeding</div>
                </Link>
                <Link href="/" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Flesvoeding Calculator →</div>
                  <div className="text-sm text-gray-600">Bereken de juiste hoeveelheden voor je baby</div>
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