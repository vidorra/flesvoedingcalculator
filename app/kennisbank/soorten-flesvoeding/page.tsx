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

        {/* Header */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
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
          <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium">1</div>
              <div>
                <h2 className="text-lg font-medium text-primary">Startvoeding (Nummer 1)</h2>
                <p className="text-gray-600">0 tot 6 maanden</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-primary mb-3">Kenmerken:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Volledige zuigelingenvoeding vanaf geboorte</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Bevat alle essentiële voedingsstoffen</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Eiwitgehalte: 1.2-1.8g per 100ml</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>IJzergehalte: 0.5-1.0mg per 100ml</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Mag tot 12 maanden gebruikt worden</span>
                </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-3">Populaire merken in Nederland:</h3>
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
          <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium">2</div>
              <div>
                <h2 className="text-lg font-medium text-primary">Opvolgmelk (Nummer 2)</h2>
                <p className="text-gray-600">6 tot 12 maanden</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-primary mb-3">Kenmerken:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Vanaf 6 maanden naast vaste voeding</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Hoger ijzergehalte: ongeveer 6mg per 100ml</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Meer vitamine D voor groei</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Aangepaste eiwitsamenstelling</span>
                </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-600 font-medium">NIET geschikt voor baby&apos;s jonger dan 6 maanden</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-3">Wanneer overstappen:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Baby is 6 maanden oud</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Start met vaste voeding</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Op advies van consultatiebureau</span>
                </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Peutermelk (3) */}
          <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium">3</div>
              <div>
                <h2 className="text-lg font-medium text-primary">Peutermelk (Nummer 3)</h2>
                <p className="text-gray-600">12+ maanden</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-primary mb-3">Kenmerken:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Vanaf 1 jaar als aanvulling</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Verrijkt met vitamines en mineralen</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>OPTIONEEL - gewone volle melk kan ook</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Vaak duurder dan gewone melk</span>
                </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-3">Afweging maken:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Gewone volle melk is vanaf 1 jaar prima</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Peutermelk bij slechte eters</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Overleg met consultatiebureau</span>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Flesvoeding Typen Vergelijking</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Eiwitgehalte</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">IJzergehalte</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Gebruik</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Noodzakelijk</th>
                </tr>
              </thead>
              <tbody>
                {formulaComparison.map((item, index) => (
                  <tr key={index} className={index % 2 === 1 ? "bg-white" : ""}>
                    <td className="border border-gray-300 px-4 py-2 font-medium">{item.type}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.protein}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.iron}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.usage}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.required}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Nederlandse Merken */}
        <div className="bg-default rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Populaire Nederlandse Merken</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-primary mb-3">Breed verkrijgbaar:</h3>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded-lg">
                  <div className="font-medium text-gray-700">Nutrilon</div>
                  <div className="text-gray-600">Nederlandse ontwikkeling, marktleider</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="font-medium text-gray-700">Hero Baby</div>
                  <div className="text-gray-600">Swiss kwaliteit, goede prijs-kwaliteit</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="font-medium text-gray-700">Kruidvat</div>
                  <div className="text-gray-600">Budget optie, zelfde EU-standaarden</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-3">Biologisch:</h3>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded-lg">
                  <div className="font-medium text-gray-700">HIPP Bio</div>
                  <div className="text-gray-600">100% biologisch, Europese kwaliteit</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="font-medium text-gray-700">Aptamil</div>
                  <div className="text-gray-600">Focus op hersensontwikkeling</div>
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
          <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            Speciale voeding (op medisch advies)
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-amber-800 mb-2">Hypoallergene (HA) voeding:</h3>
              <ul className="space-y-1 text-sm text-amber-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Bij hoog allergie-risico in familie</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Gedeeltelijk afgebroken eiwitten</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Alleen op advies kinderarts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Beschikbaar in type 1 en 2</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Anti-reflux (AR) voeding:</h3>
              <ul className="space-y-1 text-sm text-amber-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Bij overmatig spugen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Verdikt automatisch in maag</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Alleen op medisch advies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Johannesbroodpitmeel als verdikker</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Lactosevrije voeding:</h3>
              <ul className="space-y-1 text-sm text-amber-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Bij lactose-intolerantie</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Zeer zeldzaam bij baby's</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Diagnose door kinderarts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Soja of lactase-behandeld</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-primary mb-2">Wanneer overstappen van nummer 1 naar 2?</h3>
              <p className="text-gray-600">
                Pas vanaf 6 maanden en alleen wanneer je baby ook vaste voeding krijgt. 
                Nummer 1 mag je tot 12 maanden blijven gebruiken.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Is peutermelk (nummer 3) nodig?</h3>
              <p className="text-gray-600">
                Nee, vanaf 12 maanden kan je baby gewone volle melk drinken. 
                Peutermelk is alleen nuttig bij zeer selectieve eters.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Kan ik tussen merken wisselen?</h3>
              <p className="text-gray-600">
                Ja, alle merken voldoen aan dezelfde EU-richtlijnen. 
                Wissel geleidelijk over 3-5 dagen om maagklachten te voorkomen.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Wat betekenen de cijfers precies?</h3>
              <p className="text-gray-600">
                Nummer 1: 0-6 maanden (startvoeding), Nummer 2: 6-12 maanden (opvolgmelk), 
                Nummer 3: 12+ maanden (peutermelk, optioneel).
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Hoeveel ml van elk type per voeding?</h3>
              <p className="text-gray-600">
                De hoeveelheid hangt af van gewicht en leeftijd van je baby. 
                <Link href="/" className="text-primary hover:underline font-medium">
                  Gebruik onze gratis calculator
                </Link> om de exacte hoeveelheid voor jouw baby te berekenen.
              </p>
            </div>
          </div>
        </div>

        {/* Complete switching guide */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Complete Overstap Gids</h2>
          
          <div className="space-y-6">
            {/* Why switch */}
            <div>
              <h3 className="font-medium text-gray-600 mb-3">Waarom overstappen tussen types?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-600 mb-2">Van 1 naar 2 (6+ maanden):</h4>
                  <div className="space-y-1 text-gray-700">
                    <div> Hoger ijzergehalte voor groei</div>
                    <div> Aangepast aan groeiende behoefte</div>
                    <div> Meer vitaminen voor ontwikkeling</div>
                    <div> Maar: type 1 kan ook tot 12 maanden</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-600 mb-2">Van 2 naar gewone melk (12+ maanden):</h4>
                  <div className="space-y-1 text-gray-700">
                    <div> Volle koemelk is vanaf 12 maanden prima</div>
                    <div> Peutermelk alleen bij slecht eten</div>
                    <div> Goedkoper dan peutermelk</div>
                    <div> Deel van gevarieerd dieet</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Switching timeline */}
            <div>
              <h3 className="font-medium text-gray-600 mb-3">Praktische overstap strategie</h3>
              <div className="bg-white p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-gray-600 font-medium text-sm">1</div>
                    <div>
                      <div className="font-medium text-gray-700">Week 1: Geleidelijk introduceren</div>
                      <div className="text-gray-600">Mix 75% oude voeding + 25% nieuwe voeding</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-gray-600 font-medium text-sm">2</div>
                    <div>
                      <div className="font-medium text-gray-700">Week 2: Verhogen naar 50/50</div>
                      <div className="text-gray-600">Baby went aan nieuwe smaak en samenstelling</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-gray-600 font-medium text-sm">3</div>
                    <div>
                      <div className="font-medium text-gray-700">Week 3: Volledig overstappen</div>
                      <div className="text-gray-600">100% nieuwe voeding, oude pot bewaren als backup</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schema Infographic Highlight */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Voedingsschema Overzicht</h2>
          <p className="text-gray-700 mb-4">
            Bekijk onze visuele tijdlijn met alle voedingsschema's per leeftijd en flesvoeding type.
          </p>
          <Link 
            href="/infographics"
            className="bg-white hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all inline-flex items-center"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Bekijk Schema Tijdlijn
          </Link>
        </div>

        {/* Navigation */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Meer informatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link 
              href="/kennisbank/basis-flesvoeding"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="font-medium text-gray-700">Basis Flesvoeding </div>
              <div className="text-gray-600">Beginnen met flesvoeding</div>
            </Link>
            <Link 
              href="/kennisbank/voedingstechnieken"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="font-medium text-gray-700">Voedingstechnieken </div>
              <div className="text-gray-600">Hoe bereid je flesvoeding?</div>
            </Link>
            <Link 
              href="/kennisbank/problemen-oplossen"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="font-medium text-gray-700">Problemen Oplossen </div>
              <div className="text-gray-600">Hulp bij veelvoorkomende problemen</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}