'use client'
import Layout from '../../../components/Layout'
import Link from 'next/link'
import { Package, ArrowRight, Home, Info, AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding 1, 2, 3: Verschil Startvoeding, Opvolgmelk & Peutermelk',
  description: 'Ontdek het verschil tussen startvoeding (1), opvolgmelk (2) en peutermelk (3). Wanneer overstappen? Welke merken? Complete vergelijking 2025.',
}

export default function SoortenFlesvoedingPage() {
  const formula1Brands = ['Nutrilon 1', 'Hero Baby 1', 'Kruidvat Zuigelingenmelk 1', 'HIPP Bio 1']
  
  const formulaComparison = [
    { type: 'Nummer 1 (0-6m)', protein: '1.2-1.8g/100ml', iron: '0.5-1.0mg/100ml', usage: 'Hoofdvoeding', required: 'Ja, als geen borstvoeding' },
    { type: 'Nummer 2 (6-12m)', protein: '1.6-2.2g/100ml', iron: '4-6mg/100ml', usage: 'Met vaste voeding', required: 'Optioneel' },
    { type: 'Nummer 3 (12m+)', protein: '2.0-2.5g/100ml', iron: '6-8mg/100ml', usage: 'Aanvulling op dieet', required: 'Optioneel' }
  ]

  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ArrowRight className="w-4 h-4" />
          <Link href="/kennisbank" className="hover:text-primary">Kennisbank</Link>
          <ArrowRight className="w-4 h-4" />
          <span className="text-primary">Soorten Flesvoeding</span>
        </div>

        {/* Header */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Package className="w-6 h-6 mr-3 text-primary" />
            Flesvoeding Nummer 1, 2, 3: Complete Gids voor Nederlandse Ouders
          </h1>
          <p className="text-gray-600">
            Ontdek het verschil tussen startvoeding, opvolgmelk en peutermelk. Inclusief vergelijking van Nederlandse merken en overstap-advies volgens officiële richtlijnen.
          </p>
        </div>

        {/* Formula Types */}
        <div className="space-y-6">
          {/* Startvoeding (1) */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Startvoeding (Nummer 1)</h2>
                <p className="text-sm text-gray-600">0 tot 6 maanden</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Kenmerken:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Volledige zuigelingenvoeding vanaf geboorte</li>
                  <li>• Bevat alle essentiële voedingsstoffen</li>
                  <li>• Eiwitgehalte: 1.2-1.8g per 100ml</li>
                  <li>• IJzergehalte: 0.5-1.0mg per 100ml</li>
                  <li>• Mag tot 12 maanden gebruikt worden</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Populaire merken in Nederland:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {formula1Brands.map((brand, index) => (
                    <div key={index} className="bg-default px-3 py-2 rounded-lg text-sm text-primary">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Opvolgmelk (2) */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-green-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Opvolgmelk (Nummer 2)</h2>
                <p className="text-sm text-gray-600">6 tot 12 maanden</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Kenmerken:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Vanaf 6 maanden naast vaste voeding</li>
                  <li>• Hoger ijzergehalte: ongeveer 6mg per 100ml</li>
                  <li>• Meer vitamine D voor groei</li>
                  <li>• Aangepaste eiwitsamenstelling</li>
                  <li className="text-red-600 font-medium">• NIET geschikt voor baby&apos;s jonger dan 6 maanden</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Wanneer overstappen:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Baby is 6 maanden oud</li>
                  <li>• Start met vaste voeding</li>
                  <li>• Op advies van consultatiebureau</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Peutermelk (3) */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-purple-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Peutermelk (Nummer 3)</h2>
                <p className="text-sm text-gray-600">12+ maanden</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Kenmerken:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Vanaf 1 jaar als aanvulling</li>
                  <li>• Verrijkt met vitamines en mineralen</li>
                  <li>• OPTIONEEL - gewone volle melk kan ook</li>
                  <li>• Vaak duurder dan gewone melk</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Afweging maken:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Gewone volle melk is vanaf 1 jaar prima</li>
                  <li>• Peutermelk bij slechte eters</li>
                  <li>• Overleg met consultatiebureau</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Flesvoeding Typen Vergelijking</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-medium text-gray-800">Type</th>
                  <th className="text-left py-2 font-medium text-gray-800">Eiwitgehalte</th>
                  <th className="text-left py-2 font-medium text-gray-800">IJzergehalte</th>
                  <th className="text-left py-2 font-medium text-gray-800">Gebruik</th>
                  <th className="text-left py-2 font-medium text-gray-800">Noodzakelijk</th>
                </tr>
              </thead>
              <tbody>
                {formulaComparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 font-medium text-primary">{item.type}</td>
                    <td className="py-2 text-gray-700">{item.protein}</td>
                    <td className="py-2 text-gray-700">{item.iron}</td>
                    <td className="py-2 text-gray-700">{item.usage}</td>
                    <td className="py-2 text-gray-700">{item.required}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Nederlandse Merken */}
        <div className="bg-default rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Populaire Nederlandse Merken</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Breed verkrijgbaar:</h3>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded-lg">
                  <div className="font-medium text-gray-800">Nutrilon</div>
                  <div className="text-sm text-gray-600">Nederlandse ontwikkeling, marktleider</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="font-medium text-gray-800">Hero Baby</div>
                  <div className="text-sm text-gray-600">Swiss kwaliteit, goede prijs-kwaliteit</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="font-medium text-gray-800">Kruidvat</div>
                  <div className="text-sm text-gray-600">Budget optie, zelfde EU-standaarden</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Biologisch:</h3>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded-lg">
                  <div className="font-medium text-gray-800">HIPP Bio</div>
                  <div className="text-sm text-gray-600">100% biologisch, Europese kwaliteit</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="font-medium text-gray-800">Aptamil</div>
                  <div className="text-sm text-gray-600">Focus op hersensontwikkeling</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Alle merken voldoen aan dezelfde EU-verordening 2016/127
              </p>
            </div>
          </div>
        </div>

        {/* Special Formula */}
        <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
          <h2 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            Speciale voeding (op medisch advies)
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-amber-800 mb-2">Hypoallergene (HA) voeding:</h3>
              <ul className="space-y-1 text-sm text-amber-700">
                <li>• Bij hoog allergie-risico in familie</li>
                <li>• Gedeeltelijk afgebroken eiwitten</li>
                <li>• Alleen op advies kinderarts</li>
                <li>• Beschikbaar in type 1 en 2</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-amber-800 mb-2">Anti-reflux (AR) voeding:</h3>
              <ul className="space-y-1 text-sm text-amber-700">
                <li>• Bij overmatig spugen</li>
                <li>• Verdikt automatisch in maag</li>
                <li>• Alleen op medisch advies</li>
                <li>• Johannesbroodpitmeel als verdikker</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-amber-800 mb-2">Lactosevrije voeding:</h3>
              <ul className="space-y-1 text-sm text-amber-700">
                <li>• Bij lactose-intolerantie</li>
                <li>• Zeer zeldzaam bij baby's</li>
                <li>• Diagnose door kinderarts</li>
                <li>• Soja of lactase-behandeld</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Wanneer overstappen van nummer 1 naar 2?</h3>
              <p className="text-sm text-gray-600">
                Pas vanaf 6 maanden en alleen wanneer je baby ook vaste voeding krijgt. 
                Nummer 1 mag je tot 12 maanden blijven gebruiken.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Is peutermelk (nummer 3) nodig?</h3>
              <p className="text-sm text-gray-600">
                Nee, vanaf 12 maanden kan je baby gewone volle melk drinken. 
                Peutermelk is alleen nuttig bij zeer selectieve eters.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Kan ik tussen merken wisselen?</h3>
              <p className="text-sm text-gray-600">
                Ja, alle merken voldoen aan dezelfde EU-richtlijnen. 
                Wissel geleidelijk over 3-5 dagen om maagklachten te voorkomen.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Wat betekenen de cijfers precies?</h3>
              <p className="text-sm text-gray-600">
                Nummer 1: 0-6 maanden (startvoeding), Nummer 2: 6-12 maanden (opvolgmelk), 
                Nummer 3: 12+ maanden (peutermelk, optioneel).
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Hoeveel ml van elk type per voeding?</h3>
              <p className="text-sm text-gray-600">
                De hoeveelheid hangt af van gewicht en leeftijd van je baby. 
                <Link href="/" className="text-primary hover:underline font-medium">
                  Gebruik onze gratis calculator
                </Link> om de exacte hoeveelheid voor jouw baby te berekenen.
              </p>
            </div>
          </div>
        </div>

        {/* Schema Infographic Highlight */}
        <div className="bg-green-50 rounded-2xl border border-green-200 p-6">
          <h2 className="text-lg font-semibold text-green-800 mb-4">Voedingsschema Overzicht</h2>
          <p className="text-green-700 mb-4">
            Bekijk onze visuele tijdlijn met alle voedingsschema's per leeftijd en flesvoeding type.
          </p>
          <Link 
            href="/infographics"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-medium py-3 px-6 rounded-xl transition-all inline-flex items-center"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Bekijk Schema Tijdlijn
          </Link>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Meer informatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link 
              href="/kennisbank/basis-flesvoeding"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Basis Flesvoeding →</div>
              <div className="text-sm text-gray-600">Beginnen met flesvoeding</div>
            </Link>
            <Link 
              href="/kennisbank/voedingstechnieken"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Voedingstechnieken →</div>
              <div className="text-sm text-gray-600">Hoe bereid je flesvoeding?</div>
            </Link>
            <Link 
              href="/kennisbank/problemen-oplossen"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Problemen Oplossen →</div>
              <div className="text-sm text-gray-600">Hulp bij veelvoorkomende problemen</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}