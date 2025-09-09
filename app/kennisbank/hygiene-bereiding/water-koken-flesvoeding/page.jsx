import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Droplets, Thermometer, Clock, Shield, AlertTriangle, CheckCircle, Home, Coffee } from 'lucide-react'

export const metadata = {
  title: 'Water Koken voor Flesvoeding: Complete Veiligheidsgids 2025',
  description: 'Het juist voorbereiden van water voor flesvoeding is cruciaal voor de veiligheid van je baby. Deze uitgebreide gids legt uit wanneer, hoe en waarom je water moet koken voor flesvoeding.',
}

export default function WaterKokenFlesvoedingPage() {
  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/sterilisator-babyflessen.webp",
      alt: "Veilige water bereiding voor flesvoeding",
      caption: "Altijd water eerst volledig laten koken voor optimale veiligheid"
    },
    {
      src: "/flesvoeding-close-up.webp", 
      alt: "Correct bereide flesvoeding",
      caption: "Water van 70°C is de perfecte temperatuur voor flesvoeding"
    },
    {
      src: "/difrax-fles-kunstvoeding.webp",
      alt: "Nederlandse flesvoeding kwaliteit", 
      caption: "Nederlands kraanwater voldoet aan alle EU-veiligheidsnormen"
    }
  ]

  // Ad targeting keywords
  const adTopics = ["Water Koken", "Flesvoeding Veiligheid", "Baby Hygiëne"]

  // Data arrays for content
  const waaromKokenRedenen = [
    "Cronobacter sakazakii elimineren - gevaarlijke bacterie die hersenvliesontsteking kan veroorzaken",
    "Salmonella uitschakelen - voorkomt ernstige darminfecties bij baby's",
    "E. coli doden - vermindert risico op nierfalen bij zeer jonge baby's",
    "Flesvoeding steriliseren - poeder is niet steriel en bevat mogelijk bacteriën",
    "Infectierisico verlagen met 50-70% volgens medische studies"
  ]

  const veiligheidsLeeftijden = [
    {
      leeftijd: "0-3 maanden",
      risico: "Hoog",
      advies: "Verplicht koken (70°C+)",
      details: "Immuunsysteem nog niet ontwikkeld"
    },
    {
      leeftijd: "3-6 maanden", 
      risico: "Gemiddeld",
      advies: "Koken geadviseerd",
      details: "Bij twijfel blijf koken tot 6 maanden"
    },
    {
      leeftijd: "6-12 maanden",
      risico: "Laag", 
      advies: "Kraanwater toegestaan",
      details: "Immuunsysteem voldoende ontwikkeld"
    },
    {
      leeftijd: "12+ maanden",
      risico: "Zeer laag",
      advies: "Kraanwater veilig", 
      details: "Volledig ontwikkeld immuunsysteem"
    }
  ]

  const kookStappen = [
    "Vul waterkoker met vers kraanwater",
    "Laat koken tot volledige kookpunt (100°C)",
    "Laat afkoelen tot 70°C (5-10 minuten)",
    "Controleer temperatuur - moet voelbaar warm zijn",
    "Voeg flesvoeding toe aan het 70°C water",
    "Roer goed tot volledig opgelost",
    "Koel verder af tot drinktemperatuur (37°C)"
  ]

  const kraanwaterVoordelen = [
    "EU-kwaliteitsstandaarden - dagelijks gecontroleerd door waterbedrijven",
    "Lage mineralengehalte - geschikt en veilig voor baby's",
    "Fluoridegehalte binnen veilige grenzen (0,1-0,3mg/L)",
    "Geen conserveringsmiddelen nodig - natuurlijk zuiver",
    "Goedkoop - €0,001 per liter vs €0,50+ voor flessenwater",
    "Milieuvriendelijk - geen plastic afval van flessen"
  ]

  const veelgemaakteFouten = [
    {
      fout: "Water niet volledig laten koken",
      correct: "Eerst laten koken, dan afkoelen tot 70°C",
      gevaar: "Bacteriën overleven bij onvoldoende verhitting"
    },
    {
      fout: "Te koud water gebruiken (40-50°C)",
      correct: "Minimaal 70°C voor poeder toevoegen", 
      gevaar: "Bacteriën in poeder blijven leven"
    },
    {
      fout: "Gekookt water dagen bewaren",
      correct: "Binnen 24 uur gebruiken, bij voorkeur direct",
      gevaar: "Herbesmetting door bacteriën uit de lucht"
    },
    {
      fout: "Water meerdere keren opnieuw koken",
      correct: "Altijd vers water per kookbeurt",
      gevaar: "Mineralenconcentratie wordt te hoog"
    },
    {
      fout: "Koud water mengen vóór poeder toevoegen",
      correct: "Eerst poeder toevoegen, dan pas afkoelen",
      gevaar: "Poeder wordt niet gesteriliseerd"
    }
  ]

  const alternatieven = [
    {
      methode: "Perfect Prep Machine",
      kosten: "€150-200 + €30/3mnd filters",
      snelheid: "2 minuten",
      voordelen: "Instant 70°C water, geen wachttijd, consistente temperatuur",
      nadelen: "Hoge aanschafkosten, filter onderhoud, elektriciteitsverbruik"
    },
    {
      methode: "Babybrezza/Tommee Tippee",
      kosten: "€200-400",
      snelheid: "1-2 minuten", 
      voordelen: "All-in-one oplossing, vooraf geprogrammeerd, nachtlamp",
      nadelen: "Zeer duur, afhankelijk van specifieke merken poeder"
    },
    {
      methode: "Thermoskan methode",
      kosten: "€20-40",
      snelheid: "Direct",
      voordelen: "Perfect voor onderweg, 24u warm, geen elektriciteit",
      nadelen: "Moet thuis voorbereid worden, beperkte hoeveelheid"
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Kennisbank • Hygiëne & Bereiding</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Droplets className="w-6 h-6 mr-3 text-primary" />
                Water Koken voor Flesvoeding: Complete Veiligheidsgids
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Het juist voorbereiden van water voor flesvoeding is cruciaal voor de veiligheid van je baby. 
                Deze uitgebreide gids legt uit wanneer, hoe en waarom je water moet koken voor flesvoeding, 
                gebaseerd op Nederlandse gezondheidsrichtlijnen.
              </p>
            </div>

            {/* Introduction */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Waarom Water Koken Essentieel Is</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Water koken voor flesvoeding heeft twee belangrijke veiligheidsdoelen: het elimineren van gevaarlijke bacteriën 
                en het steriliseren van flesvoeding. Baby's onder 3 maanden hebben nog geen volledig ontwikkeld immuunsysteem 
                en zijn daarom extra kwetsbaar voor bacteriële infecties.
              </p>
              
              <h3 className="font-medium text-primary mb-3">Hoofdredenen voor Water Koken:</h3>
              <ul className="space-y-2">
                {waaromKokenRedenen.map((reden, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700">{reden}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Nederlandse Richtlijnen */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Nederlandse Richtlijnen per Leeftijd
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                De Nederlandse gezondheidsrichtlijnen maken onderscheid tussen verschillende leeftijdsgroepen 
                omdat het immuunsysteem van baby's geleidelijk ontwikkelt.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-3 font-medium text-primary">Leeftijd</th>
                      <th className="text-left p-3 font-medium text-primary">Infectierisico</th>
                      <th className="text-left p-3 font-medium text-primary">Advies Waterbereiding</th>
                    </tr>
                  </thead>
                  <tbody>
                    {veiligheidsLeeftijden.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="p-3 text-gray-700 font-medium">{item.leeftijd}</td>
                        <td className="p-3 text-gray-600">{item.risico}</td>
                        <td className="p-3 text-gray-600">{item.advies}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Stap-voor-Stap Guide */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Thermometer className="w-5 h-5 mr-2" />
                Stap-voor-Stap: Water Koken voor Flesvoeding
              </h2>
              
              <h3 className="font-medium text-primary mb-4">Traditionele Methode (Meest Veilig)</h3>
              <p className="text-gray-600 mb-4">
                Deze methode duurt ongeveer 20-25 minuten van begin tot eind, maar garandeert optimale veiligheid.
              </p>
              
              <div className="space-y-3">
                {kookStappen.map((stap, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{stap}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-medium text-primary mb-4">Timing Overzicht</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-gray-700">Koken: 3-5 minuten</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span className="text-gray-700">Afkoelen tot 70°C: 5-7 minuten</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4 text-primary" />
                    <span className="text-gray-700">Mixen: 1 minuut</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-gray-700">Afkoelen drinktemp: 10-15 minuten</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Kraanwater vs Flessenwater */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Nederlands Kraanwater: Uitstekende Kwaliteit</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nederlands kraanwater voldoet aan strenge EU-kwaliteitsstandaarden en wordt dagelijks gecontroleerd. 
                Voor flesvoeding is het vaak een betere keuze dan duur flessenwater.
              </p>
              
              <h3 className="font-medium text-primary mb-3">Voordelen Nederlands Kraanwater:</h3>
              <ul className="space-y-2 mb-6">
                {kraanwaterVoordelen.map((voordeel, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{voordeel}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Nederlandse Kraanwaterkwaliteit</h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-700">Nitraat: &lt;50mg/L (EU-norm)</div>
                      <div className="font-medium text-gray-700">Fluoride: 0,1-0,3mg/L (baby-veilig)</div>
                      <div className="font-medium text-gray-700">Calcium: 30-150mg/L (geschikt)</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700">Natrium: &lt;20mg/L (laag)</div>
                      <div className="font-medium text-gray-700">Bacteriën: 0 (steriel na koken)</div>
                      <div className="font-medium text-gray-700">Controle: Dagelijks (waterbedrijven)</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Veelgemaakte Fouten */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Veelgemaakte Fouten Vermijden
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Deze fouten kunnen de veiligheid van je baby in gevaar brengen. 
                Zorg dat je deze veelvoorkomende vergissingen vermijdt.
              </p>
              
              <div className="space-y-4">
                {veelgemaakteFouten.map((item, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="font-medium text-gray-700 mb-1">Fout: {item.fout}</h3>
                    <p className="text-gray-600 text-sm mb-1">Correct: {item.correct}</p>
                    <p className="text-gray-500 text-sm">Waarom gevaarlijk: {item.gevaar}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Alternatieven */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Alternatieven voor Traditioneel Koken</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Voor ouders die regelmatig flesvoeding geven, zijn er praktische alternatieven 
                die tijd besparen zonder de veiligheid in gevaar te brengen.
              </p>
              
              <div className="space-y-4">
                {alternatieven.map((alt, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-primary mb-2">{alt.methode}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600 mb-1"><strong>Kosten:</strong> {alt.kosten}</div>
                        <div className="text-gray-600 mb-1"><strong>Snelheid:</strong> {alt.snelheid}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1"><strong>Voordelen:</strong> {alt.voordelen}</div>
                        <div className="text-gray-600"><strong>Nadelen:</strong> {alt.nadelen}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Warning Section */}
            <section className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Let op: Belangrijke Veiligheidsrichtlijnen</h3>
                  <div className="text-sm text-amber-700 leading-relaxed space-y-2">
                    <p>Water moet altijd eerst volledig gekookt hebben voordat je het laat afkoelen tot 70°C. 
                    Alleen verwarmen tot 70°C is onvoldoende om alle bacteriën te doden.</p>
                    <p>Voor baby's onder 3 maanden is water koken verplicht. Bij premature baby's kan dit langer nodig zijn 
                    op advies van de kinderarts.</p>
                    <p>Raadpleeg altijd je consultatiebureau bij specifieke vragen over de gezondheid van je baby.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgestelde Vragen</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Hoe weet ik of water 70°C is zonder thermometer?</h3>
                  <p className="text-gray-600 text-sm">A: Vuistregel: 5-7 minuten na koken van kraanwater. Het water moet nog duidelijk warm aanvoelen op je pols, maar niet brandend heet. Bij twijfel: investeer in een thermometer (€5-10).</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Kan ik gekookt water bewaren voor later gebruik?</h3>
                  <p className="text-gray-600 text-sm">A: Beperkt. Gekookt water kan maximaal 24 uur bewaard worden in een steriele, afgesloten fles in de koelkast. Bij voorkeur gebruik je het direct voor optimale veiligheid.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Is water koken duur qua energiekosten?</h3>
                  <p className="text-gray-600 text-sm">A: Verwaarloosbaar. Per fles ongeveer €0,02 elektriciteit. Per maand circa €3-4 extra op energierekening voor een gemiddelde baby.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Hoe lang moet ik dit volhouden?</h3>
                  <p className="text-gray-600 text-sm">A: 0-3 maanden: verplicht koken. 3-6 maanden: koken aanbevolen. 6+ maanden: kraanwater toegestaan. Premature baby's: langer op medisch advies.</p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link 
                  href="/calculator"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-primary">Hulp nodig met flesvoeding berekeningen? →</div>
                    <div className="text-sm text-gray-600">Gebruik onze calculator voor gepersonaliseerd advies</div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Gerelateerde Artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/hygiene-bereiding/veilig-verwarmen-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Veilig verwarmen van flesvoeding →</div>
                  <div className="text-sm text-gray-600">Leer hoe je flesvoeding veilig verwarmt</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/houdbaarheid-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Houdbaarheid flesvoeding →</div>
                  <div className="text-sm text-gray-600">Hoelang kun je flesvoeding bewaren?</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/flessen-steriliseren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Flessen steriliseren →</div>
                  <div className="text-sm text-gray-600">Complete gids voor het steriliseren van babyflessen</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Fles bereiden stap-voor-stap →</div>
                  <div className="text-sm text-gray-600">Volledige handleiding voor fles bereiding</div>
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