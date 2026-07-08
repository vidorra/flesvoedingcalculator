import Layout from '../../components/Layout'
import Link from 'next/link'
import { Calculator, AlertCircle, Info, Baby, ArrowRight, Home } from 'lucide-react'
import { generateFAQSchema } from '../../lib/structured-data'
import SchepjesCalculatorTool from '../../components/SchepjesCalculatorTool'

export const metadata = {
  title: 'Schepjes Flesvoeding Calculator: Hoeveel Schepjes per ML? | FlesvoedingCalculator.nl',
  description: 'Bereken hoeveel afgestreken schepjes flesvoeding je nodig hebt voor elke hoeveelheid ml. Standaard 1 schepje per 30 ml. Met snel-referentietabel en veelgestelde vragen.',
  keywords: 'schepjes flesvoeding, hoeveel schepjes, schepjes calculator, ml per schepje, flesvoeding mengverhouding, maatschepje flesvoeding',
  alternates: { canonical: '/schepjes-calculator' }
}

// Snelle referentie bij de standaard van 1 afgestreken schepje per 30 ml.
const REFERENCE = [
  { ml: 60, scoops: 2 },
  { ml: 90, scoops: 3 },
  { ml: 120, scoops: 4 },
  { ml: 150, scoops: 5 },
  { ml: 180, scoops: 6 },
  { ml: 210, scoops: 7 }
]

const faqSchema = [
  {
    question: 'Hoeveel ml zit er in één schepje flesvoeding?',
    answer: 'De meeste Nederlandse merken (Nutrilon, Hero Baby, Kruidvat, HiPP) gebruiken 1 afgestreken schepje per 30 ml water. Controleer altijd de verpakking, want de schepgrootte kan per merk verschillen.'
  },
  {
    question: 'Hoeveel schepjes heb ik nodig voor 90 ml?',
    answer: 'Voor 90 ml heb je 3 afgestreken schepjes op 90 ml water nodig, bij de standaard van 1 schepje per 30 ml.'
  },
  {
    question: 'Wat als de gewenste hoeveelheid niet precies uitkomt?',
    answer: 'Rond af op hele schepjes en pas het water daarop aan. Gebruik geen halve schepjes. Een baby drinkt een fles zelden helemaal leeg, dus een klein verschil is geen probleem.'
  },
  {
    question: 'Mag ik extra poeder toevoegen om de voeding voedzamer te maken?',
    answer: 'Nee. Te veel poeder belast de nieren van je baby en kan uitdroging geven; te weinig poeder geeft ondervoeding. Houd je altijd aan de verhouding op de verpakking.'
  },
  {
    question: 'Moet ik het maatschepje afstrijken?',
    answer: 'Ja. Gebruik een afgestreken maatschepje: strijk het overtollige poeder af met de rand of een mesje. Druk het poeder niet aan en maak geen kopjes, want dan komt er te veel poeder in de fles.'
  }
]

export default function SchepjesCalculatorPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqSchema)) }}
      />
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary flex items-center">
            <Home className="w-4 h-4 mr-1" />Home
          </Link>
          <ArrowRight className="w-4 h-4" />
          <span className="text-primary">Schepjes calculator</span>
        </div>

        {/* Header */}
        <div>
          <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
            <Calculator className="w-6 h-6 mr-3 text-primary" />
            Schepjes flesvoeding calculator
          </h1>
          <p className="text-gray-500 leading-relaxed">
            Bereken hoeveel afgestreken schepjes flesvoeding je nodig hebt voor de hoeveelheid ml die je wilt maken. Handig als de standaardhoeveelheden op de verpakking niet precies uitkomen.
          </p>
        </div>

        {/* Interactive tool */}
        <SchepjesCalculatorTool />

        {/* Snel-referentietabel */}
        <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Snel overzicht: ml naar schepjes</h2>
          <p className="text-gray-600 mb-4">
            Bij de standaard van 1 afgestreken schepje per 30 ml water:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-300 px-4 py-2 text-left">Hoeveelheid</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Water</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Afgestreken schepjes</th>
                </tr>
              </thead>
              <tbody>
                {REFERENCE.map((r) => (
                  <tr key={r.ml} className="bg-white">
                    <td className="border border-gray-300 px-4 py-2 font-medium">{r.ml} ml</td>
                    <td className="border border-gray-300 px-4 py-2">{r.ml} ml</td>
                    <td className="border border-gray-300 px-4 py-2">{r.scoops}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Controleer altijd de verpakking van jouw merk; de schepgrootte kan afwijken.
          </p>
        </section>

        {/* Hoe werkt het */}
        <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Hoe zit de verhouding precies?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            De meeste populaire Nederlandse merken (Nutrilon, Hero Baby, Kruidvat, HiPP, Aptamil) gebruiken 1 afgestreken maatschepje per 30 ml water. Zo weet je zeker dat de voeding niet te sterk of te slap is.
          </p>
          <h3 className="font-medium text-primary mb-3">Belangrijk voor een juiste verhouding:</h3>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600">Gebruik het maatschepje dat in de verpakking zit, niet een schepje van een ander merk.</span></li>
            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600">Strijk elk schepje af met de rand of een mesje: niet aandrukken, geen kopjes.</span></li>
            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600">Doe eerst het water in de fles, dan het poeder.</span></li>
            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600">Warm de fles daarna op tot 30 à 35°C en test op de binnenkant van je pols.</span></li>
            <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span className="text-gray-600">Geef de fles het liefst vers; bewaar een klaargemaakte fles maximaal 8 uur achterin de koelkast (4°C) en gooi restjes weg.</span></li>
          </ul>
        </section>

        {/* Veiligheid */}
        <section className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-amber-800 mb-2">Nooit extra of minder poeder</h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                Houd je altijd exact aan de verhouding. Extra poeder belast de nieren en kan uitdroging geven; te weinig poeder geeft ondervoeding. Deze calculator is een hulpmiddel; volg altijd de instructies op de verpakking en raadpleeg bij twijfel het consultatiebureau of de huisarts.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faqSchema.map((f, i) => (
              <div key={i}>
                <h3 className="font-medium text-primary mb-2">{f.question}</h3>
                <p className="text-gray-600">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interne links */}
        <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2" />Meer over flesvoeding maken
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
              <div className="font-medium text-primary">Fles bereiden stap voor stap →</div>
              <div className="text-sm text-gray-600">De complete bereiding van a tot z</div>
            </Link>
            <Link href="/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
              <div className="font-medium text-primary">Eerste keer flesvoeding →</div>
              <div className="text-sm text-gray-600">Beginnersgids voor de eerste fles</div>
            </Link>
            <Link href="/kennisbank/hygiene-bereiding/water-koken-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
              <div className="font-medium text-primary">Water koken voor flesvoeding →</div>
              <div className="text-sm text-gray-600">Moet dat in Nederland?</div>
            </Link>
            <Link href="/" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
              <div className="flex items-center justify-between"><span className="font-medium text-primary">Flesvoeding calculator</span><Baby className="w-4 h-4 text-primary flex-shrink-0" /></div>
              <div className="text-sm text-gray-600">Bereken hoeveel ml je baby nodig heeft</div>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}
