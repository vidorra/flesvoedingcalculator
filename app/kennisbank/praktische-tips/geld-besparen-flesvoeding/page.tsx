import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { DollarSign, ArrowRight, Home, TrendingDown, CheckCircle, AlertTriangle, Calculator, ShoppingCart } from 'lucide-react'

export const metadata = {
  title: 'Geld Besparen op Flesvoeding: Complete Budget Gids Nederlandse Ouders 2026',
  description: 'Tot 50% besparen op flesvoeding kosten zonder kwaliteit in te leveren. Alle budget tricks, merkenvergelijkingen, online deals en praktische besparingstips die echt werken.',
}


  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/flesvoeding.webp",
      alt: "Budgetvriendelijke flesvoeding opties",
      caption: "Kwaliteit hoeft niet duur te zijn"
    },
    {
      src: "/mother_and_baby.webp",
      alt: "Bewuste keuzes in flesvoeding",
      caption: "Slim besparen zonder kwaliteitsverlies"
    },
    {
      src: "/baby.webp",
      alt: "Tevreden baby met budgetvriendelijke voeding",
      caption: "Gezonde groei binnen budget"
    }
  ]

  const adTopics = ["Budget Flesvoeding", "Besparen Baby", "Voordelige Voeding", "Geld Besparen"]

export default function GeldBesparenPage() {
  const costComparison = [
    {
      category: 'Premium Merken',
      brands: [
        { name: 'Nutrilon', price: '€13.50-15.00', monthly: '€75-85', yearly: '€900-1020' },
        { name: 'Hero Baby', price: '€10.50-12.00', monthly: '€60-70', yearly: '€720-840' },
        { name: 'Aptamil', price: '€12.00-14.00', monthly: '€65-75', yearly: '€780-900' }
      ]
    },
    {
      category: 'Budget Merken',
      brands: [
        { name: 'Kruidvat', price: '€7.50-8.50', monthly: '€45-50', yearly: '€540-600' },
        { name: 'Etos', price: '€8.00-9.00', monthly: '€50-55', yearly: '€600-660' },
        { name: 'Jumbo', price: '€7.00-8.00', monthly: '€40-45', yearly: '€480-540' }
      ]
    }
  ]

  const savingStrategies = [
    {
      strategy: 'Online Winkelen',
      savings: '20-35%',
      methods: ['Bol.com abonneer & bespaar (15%)', 'Amazon Prime babykorting', 'Baby-dump.nl specialistische aanbiedingen', 'Bulk bestellingen €50+'],
      tips: 'Abonnement services voor automatische korting'
    },
    {
      strategy: 'Timing Optimalisatie',
      savings: '15-30%',
      methods: ['Black Friday aanbiedingen (50% mogelijk)', 'Januari opruimingsacties', 'Seizoensgebonden inkoopplanning', 'Prijswaarschuwingen instellen'],
      tips: 'Voorraad 2-3 maanden, niet meer vanwege houdbaarheid'
    },
    {
      strategy: 'Merkenvergelijking',
      savings: '25-50%',
      methods: ['Budget versus premium analyse', 'EU-standaarden zijn identiek', 'Huismerken kwaliteit', 'Blinde smaaktests'],
      tips: 'De meeste baby\'s accepteren budget merken even goed'
    }
  ]

  const budgetBreakdown = [
    {
      scenario: 'Strak Budget',
      monthly: '€30-40',
      strategies: ['Uitsluitend huismerken', 'Grootverpakingen optimaal inkopen', 'Cashback optimalisatie', 'Zelf bereiden'],
      realistic: true
    },
    {
      scenario: 'Comfortabel Budget',
      monthly: '€50-70',
      strategies: ['Mid-range merken (Hero Baby)', 'Kwaliteit-prijs balanceren', 'Gemaksfactor', 'Flexibel winkelen'],
      realistic: true
    },
    {
      scenario: 'Ruim Budget',
      monthly: '€70-90',
      strategies: ['Premium merken toegestaan', 'Gemak geprioriteerd', 'Biologische opties', 'Tijd boven geld'],
      realistic: false
    }
  ]

  const dangerousSavings = [
    'Flesvoeding verdunnen (meer water) - Ondervoeding risico',
    'Zelf flesvoeding maken van koemelk - Gevaarlijk voor baby',
    'Verlopen producten gebruiken - Gezondheidsrisico\'s',
    'Niet-EU flesvoeding importeren - Geen kwaliteitsgarantie',
    'Flesvoeding aanlengen met extra water - Groeiproblemen'
  ]

  const smartHacks = [
    {
      hack: 'Abonnement diensten combineren',
      description: 'Bol.com Select + Amazon Prime combo',
      savings: '15-20%',
      method: 'Abonnement op flesvoeding + bulk voordelen'
    },
    {
      hack: 'Cashback stapelen',
      description: 'Meerdere cashback bronnen combineren',
      savings: '10-25%',
      method: 'Creditcard + loyalty + app + codes = maximum return'
    },
    {
      hack: 'Bulk bereiding',
      description: 'Weekend batch bereiding systeem',
      savings: '15% + tijd',
      method: 'Voorgemeten containers + efficiëntiewinst'
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Praktische Tips • Geld Besparen</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-primary" />
                Geld Besparen op Flesvoeding: Complete Budget Gids
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Flesvoeding kost Nederlandse families €600-1000 per jaar. Met slimme strategieën kun je 
                tot 50% besparen zonder kwaliteit in te leveren.
              </p>
            </div>

            {/* Why budget optimization matters */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <TrendingDown className="w-5 h-5 mr-2" />
                Waarom Budget Optimalisatie Cruciaal Is
              </h2>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-4">
                  <Link href="/kennisbank/financiele-aspecten/kosten-van-flesvoeding" className="text-primary hover:underline font-medium">Flesvoeding is de 3e grootste kostenpost</Link> voor Nederlandse baby's na luiers en kinderopvang.
                  Voor families met krap budget kan dit het verschil maken tussen stress en rust.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3"><Link href="/kennisbank/financiele-aspecten/kosten-van-flesvoeding" className="text-primary hover:underline font-medium">Nederlandse Familie Budget Reality</Link></h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Besteedbaar inkomen:</strong> €3.200/maand (gemiddeld)</div>
                    <div><strong>Baby kosten totaal:</strong> €500-800/maand</div>
                    <div><strong>Flesvoeding aandeel:</strong> 15-20% baby budget</div>
                    <div><strong>Besparing potentieel:</strong> €200-500/jaar</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3"> Impact van €300 Besparing</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div> 1 week vakantie extra mogelijk</div>
                    <div> 6 maanden luiers gedekt</div>
                    <div> 3 maanden kinderopvang</div>
                    <div> Buffer onverwachte uitgaven</div>
                    <div> Start spaarrekening kind</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 border border-gray-200">
                <p className="text-gray-700 text-sm">
                  <strong>Uit de praktijk:</strong> Veel Nederlandse gezinnen ervaren dat
                  baby-gerelateerde uitgaven in het eerste jaar flink kunnen oplopen.
                </p>
              </div>
            </div>

            {/* Cost breakdown comparison */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Complete Kosten Vergelijking (2026)</h2>
              
              <div className="space-y-6">
                {costComparison.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-3">{category.category}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-white">
                            <th className="border border-gray-300 px-4 py-2 text-left">Merk</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Per 800g</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Maandkosten</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Jaar Totaal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.brands.map((brand, idx) => (
                            <tr key={idx} className={idx % 2 === 1 ? "bg-white" : ""}>
                              <td className="border border-gray-300 px-4 py-2 font-medium">{brand.name}</td>
                              <td className="border border-gray-300 px-4 py-2">{brand.price}</td>
                              <td className="border border-gray-300 px-4 py-2">{brand.monthly}</td>
                              <td className="border border-gray-300 px-4 py-2">{brand.yearly}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-600 mb-2"> Realistische Besparing Voorbeeld</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div><strong>Van:</strong> Nutrilon (€1020/jaar)  <strong>Naar:</strong> Hero Baby (€780/jaar)</div>
                  <div><strong>Jaarlijkse besparing:</strong> €240 (23.5%) - Zelfde kwaliteit voeding!</div>
                  <div><strong>Resultaat:</strong> €20 per maand extra budget voor andere baby behoeften</div>
                </div>
              </div>
            </div>

            {/* Saving strategies */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Slimme Winkelstrategieën
              </h2>
              
              <div className="space-y-6">
                {savingStrategies.map((strategy, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-medium text-primary">{strategy.strategy}</h3>
                      <span className="bg-white text-primary px-2 py-1 rounded text-sm font-medium">
                        {strategy.savings} besparing
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-600 mb-2">Methoden:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {strategy.methods.map((method, idx) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{method}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-600 mb-2">Pro Tip:</h4>
                        <p className="text-gray-600">{strategy.tips}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality vs price analysis */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Kwaliteit vs Prijs: EU Regulatie Realiteitscheck</h2>
              
              <div className="mb-6">
                <div className="p-4 border border-gray-200">
                  <h3 className="font-medium text-primary mb-3">Alle Flesvoeding in Nederland</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-600 mb-2"> Verplicht Identiek:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>EU-verordening 2016/127</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>NVWA kwaliteitscontrole</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Minimum voedingsstoffen gelijk</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Veiligheid gegarandeerd</span></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-600 mb-2">≈ Verschil Zit In:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Marketing en verpakking</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Extra ingrediënten (prebiotica)</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Smaak nuances</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Merkprestige</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

 <div className="p-4">
                <h4 className="font-medium text-gray-600 mb-3"> Kwaliteitsvergelijking budget vs. premium</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <div><strong>Ervaring leert dat:</strong></div>
                  <div> De meeste baby's accepteren budget merken even goed</div>
                  <div> Sommige baby's hebben een smaakvoorkeur voor premium</div>
                  <div> Een klein deel weigert budget opties</div>
                  <div> Er is geen aangetoond verschil in groei/ontwikkeling</div>
                  <div className="pt-2 font-medium text-gray-600">
                    <strong>Conclusie:</strong> Voor de meeste gezinnen is een budget merk een volledig adequate keuze
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced hacks */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Geavanceerde Budget Tips</h2>
              
              <div className="space-y-4">
                {smartHacks.map((hack, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-primary">{hack.hack}</h3>
                      <span className="bg-primary text-white px-2 py-1 rounded text-sm">
                        {hack.savings}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-1">{hack.description}</p>
                    <p className="text-gray-700 text-sm">{hack.method}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 border border-gray-200">
                <h4 className="font-medium text-gray-600 mb-2"> Onmisbare Bespaar-Apps</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-gray-600 mb-1">Prijsvergelijking:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Kieskeurig.nl - Realtime vergelijking</span></li>
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Scoupy - Cashback babyproducten</span></li>
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Honey - Automatische kortingscodes</span></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-600 mb-1">Budget bijhouden:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>YNAB - Envelop budgetmethode</span></li>
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Babykosten bijhouden in spreadsheets</span></li>
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Voorraadbeheerapps</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget allocation */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Familie Budget Integratie</h2>
              
              <div className="space-y-4">
                {budgetBreakdown.map((budget, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-medium text-primary">{budget.scenario}</h3>
                      <div className="text-right">
                        <div className="font-medium text-gray-600">{budget.monthly}/maand</div>
                        {budget.realistic && <span className="text-xs text-gray-600">Realistisch</span>}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {budget.strategies.map((strategy, idx) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-gray-600">{strategy}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dangerous savings to avoid */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Gevaarlijke Besparingsmethoden - NOOIT DOEN
              </h2>
              
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 mb-4">
                <h3 className="font-medium text-amber-800 mb-3">Nooit Doen voor Geld Besparen:</h3>
                <div className="space-y-2">
                  {dangerousSavings.map((danger, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-700">{danger}</span>
                    </div>
                  ))}
                </div>
              </div>

 <div className="p-4">
                <h4 className="font-medium text-amber-800 mb-2"> Gezondheidsimpact van Foute Besparingen</h4>
                <p className="text-gray-600">
                  Ondervoeding, infectiegevoeligheid, groeivertraging, verteringsproblemen.
                  Medische kosten zijn veel hoger dan besparingen!
                </p>
              </div>
            </div>

            {/* Budget Voeding Producten */}
            <AffiliateProductWidget
              pageId="praktische-tips_geld-besparen-flesvoeding"
              title="Budget Voeding Producten"
            />

            {/* Navigation */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/financiele-aspecten/kosten-van-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Kosten van flesvoeding →</div>
                  <div className="text-sm text-gray-600">Complete kostenanalyse en budgetplanner</div>
                </Link>
                <Link href="/kennisbank/soorten-flesvoeding/bio-organische-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Bio organische flesvoeding →</div>
                  <div className="text-sm text-gray-600">Prijs-kwaliteit vergelijking biologische merken</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/voeden-van-tweeling" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Voeden van tweeling →</div>
                  <div className="text-sm text-gray-600">Dubbele budgettering en bespaartips</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/flesvoeding-werk-combineren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Werk combineren →</div>
                  <div className="text-sm text-gray-600">Kinderopvang kosten optimaliseren</div>
                </Link>
              </div>
            </div>

            {/* Calculator CTA */}
            <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Bereken je Exacte Besparingen
              </h2>
              <p className="text-white/90 mb-4">
                Optimaliseer je budget door de juiste hoeveelheden te berekenen. 
                Weet precies hoeveel je nodig hebt - geen verspilling meer!
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
              { src: '/images/budget-1.jpg', alt: 'Budget tips 1', caption: '' },
              { src: '/images/budget-2.jpg', alt: 'Budget tips 2', caption: '' },
              { src: '/images/budget-3.jpg', alt: 'Budget tips 3', caption: '' }
            ]}
            adTopics={[
              'Goedkope flesvoeding merken',
              'Baby budget apps downloaden',
              'Bulk flesvoeding aanbiedingen'
            ]}
          />
        </div>
      </div>
    </Layout>
  )
}