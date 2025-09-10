import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
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
    "Pincer grasp ontwikkeld (duim-wijsvinger)",
    "Hand-oog coördinatie: voorwerpen richten naar mond",
    "Begrijpt oorzaak-gevolg relaties",
    "Volledig ontwikkelde nekcontrole (4+ maanden)"
  ]

  const nederlandseTimingRichtlijnen = [
    "4-6 maanden: Interesse in volwassen eten/drinken",
    "6-8 maanden: Eerste pogingen zelf vasthouden", 
    "8-10 maanden: Gecontroleerd drinken uit beker",
    "10-12 maanden: Onafhankelijk kleine hoeveelheden",
    "12-15 maanden: Volledig zelfstandig tijdens maaltijden",
    "15-18 maanden: Refinement technieken + minder morsen"
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
      activiteiten: "Sippy cup met handvatten, hand-over-hand guidance"
    },
    {
      fase: "Ontwikkeling (8-10 maanden)",
      kenmerken: "Precision grip, beter evenwicht, problem solving",
      activiteiten: "Verschillende cup types, dagelijks 2-3 keer oefenen"
    },
    {
      fase: "Mastery (10-15 maanden)",
      kenmerken: "Accurate targeting, volume control, een-handig gebruik",
      activiteities: "Sociale context drinken, meal integration"
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
      naam: "Oxo Tot Straw Cup",
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
              <div className="text-sm text-gray-500 mb-2">Kennisbank  Voedingstechnieken</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Baby className="w-6 h-6 mr-3 text-primary" />
                Baby Leren Zelf Drinken: Nederlandse Gids voor Zelfstandigheid
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Zelfstandig drinken is een belangrijke ontwikkelingsmijlpaal. Deze uitgebreide gids helpt Nederlandse ouders hun baby stap-voor-stap te begeleiden naar onafhankelijk drinken.
              </p>
            </div>

            {/* Introduction Section */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Het leren zelfstandig drinken is een cruciale vaardigheid die baby's tussen 6-18 maanden ontwikkelen. 
                Deze milestone bevordert niet alleen zelfstandigheid, maar ook fijne motoriek en cognitieve ontwikkeling.
              </p>
              
              <div className="mt-4 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Nederlandse statistiek:</strong> 95% van Nederlandse baby's kan zelfstandig drinken op 15 maanden, 
                  met kinderopvang baby's gemiddeld 2 maanden eerder door peer learning.
                </p>
              </div>
            </section>

            {/* Wanneer Kan Baby Zelf Drinken */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Wanneer Kan Baby Zelf Drinken Leren?
              </h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Fysiologische Readiness Signalen</h3>
                <p className="text-gray-700 mb-4">
                  Elk baby ontwikkelt in eigen tempo, maar deze signalen geven aan dat je baby klaar is om zelfstandig drinken te leren:
                </p>
                
                <ul className="space-y-3 mb-6">
                  {readinessSignals.map((signal, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
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
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Nederlandse Baby Statistieken (2024)</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p><strong>12 maanden:</strong> 80% zelfstandig, 18% assisted, 2% niet klaar</p>
                    <p><strong>15 maanden:</strong> 95% zelfstandig, 5% assisted</p>
                    <p><strong>Factoren:</strong> Kinderopvang +2 maanden sneller, premature baby's -2-4 maanden</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Ontwikkelingsstadia */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Ontwikkelingsstadia en Motoriek</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zelfstandig drinken leren gebeurt in vier duidelijke fasen, elk met eigen kenmerken en stimulatie activiteiten:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ontwikkelingsStadia.map((stadium, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h3 className="font-medium text-primary mb-3">{stadium.fase}</h3>
                    <p className="text-gray-700 text-sm mb-3"><strong>Kenmerken:</strong> {stadium.kenmerken}</p>
                    <p className="text-gray-700 text-sm"><strong>Activiteiten:</strong> {stadium.activiteiten}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Beste Producten */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Beste Producten voor Zelfstandig Drinken
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nederlandse markt biedt uitstekende opties voor elk ontwikkelingsstadium. Hier zijn de top aanbevelingen:
              </p>
              
              <div className="space-y-4">
                {topProducten.map((product, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-700">{product.naam}</h3>
                      <span className="text-sm text-gray-600 font-medium">{product.prijs}</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-2"><strong>Geschikt:</strong> {product.geschikt}</p>
                    <p className="text-gray-700 text-sm">{product.voordelen}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">Nederlandse Inkoop Tips</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Beste retailers:</strong> Baby-Dump (grootste selectie), Prenatal (expert advice), 
                  Kruidvat/Etos (budget opties), Bol.com (online reviews). 
                  <strong>Timing:</strong> Koop tijdens Baby & Kind weken voor 25% korting.
                </p>
              </div>
            </section>

            {/* Stap-voor-Stap Leerplan */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">12-Weken Stap-voor-Stap Leerplan</h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Week 1-2: Introductie Fase</h3>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-gray-700 text-sm mb-2"><strong>Doelen:</strong> Familiarity, vrije exploratie, 30-60ml success</p>
                  <p className="text-gray-700 text-sm"><strong>Routine:</strong> 2x per dag, 5 minuten sessies, veel praise voor interesse</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Week 3-4: Skill Building</h3>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-gray-700 text-sm mb-2"><strong>Doelen:</strong> Cup naar mond brengen, 60-120ml per sessie, minder hand-over-hand</p>
                  <p className="text-gray-700 text-sm"><strong>Activiteiten:</strong> Verschillende shapes proberen, reward system, 3x per dag</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Week 5-8: Competentie Ontwikkeling</h3>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-gray-700 text-sm mb-2"><strong>Doelen:</strong> 150-200ml zelfstandig, minimaal morsen, routine integration</p>
                  <p className="text-gray-700 text-sm"><strong>Challenges:</strong> Multiple cup types, meal integration, sociale context</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Week 9-12: Mastery & Refinement</h3>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700 text-sm mb-2"><strong>Doelen:</strong> Volledige zelfstandigheid, verschillende situaties, sociale drinking</p>
                  <p className="text-gray-700 text-sm"><strong>Real-world:</strong> Restaurant visits, playdates, travel, daycare prep</p>
                </div>
              </div>
            </section>

            {/* Problemen Oplossen */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelvoorkomende Problemen Oplossen</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Deze problemen komen vaak voor tijdens het leerproces. Met de juiste aanpak zijn ze goed op te lossen:
              </p>
              
              <div className="space-y-4">
                {veelvoorkomendeProblemen.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
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
                  <h3 className="font-semibold text-amber-800 mb-2">Nederlandse Kinderopvang Verwachtingen</h3>
                  <p className="text-sm text-amber-700 leading-relaxed mb-4">
                    De meeste Nederlandse kinderopvang verwacht dat kinderen redelijk zelfstandig kunnen drinken. 
                    Start de training 2-3 maanden voor opvang begint.
                  </p>
                  <ul className="space-y-1 text-sm text-amber-700">
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Independent drinking gedurende de dag</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Redelijke spill control</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Can signal thirst/needs</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Follows daycare routine</span></li>
                  </ul>
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
                    <div className="font-medium text-gray-700">Bereken optimale drink volumes </div>
                    <div className="text-sm text-gray-600">Gebruik onze calculator voor leeftijd-specifiek advies</div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Gerelateerde Artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/voedingstechnieken/overgang-naar-beker" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Overgang naar beker </div>
                  <div className="text-sm text-gray-600">Van fles naar open beker: complete gids</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/juiste-houding-bij-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Juiste houding bij flesvoeding </div>
                  <div className="text-sm text-gray-600">Optimale posities voor comfortabel drinken</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/verschillende-spenen-uitproberen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Verschillende spenen uitproberen </div>
                  <div className="text-sm text-gray-600">Vind de perfecte speen voor jouw baby</div>
                </Link>
                <Link href="/kennisbank/praktische-tips" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Alle praktische tips </div>
                  <div className="text-sm text-gray-600">Meer handige tips voor de flesvoeding</div>
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