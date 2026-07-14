import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { DollarSign, ArrowRight, Home, TrendingDown, CheckCircle, AlertTriangle, Calculator, ShoppingCart } from 'lucide-react'

export const metadata = {
  title: 'Geld Besparen op Flesvoeding: Complete Budget Gids Nederlandse Ouders 2026',
  description: 'Tot 40% besparen op flesvoeding kosten zonder kwaliteit in te leveren. Alle budget tricks, merkenvergelijkingen, online deals en praktische besparingstips die echt werken.',
}

export default function GeldBesparenPage() {
  const costComparison = [
    {
      category: 'A-merken',
      brands: [
        { name: 'Nutrilon', price: '€13,50-15,00', monthly: '€75-85', yearly: '€900-1020' },
        { name: 'Aptamil', price: '€12,00-14,00', monthly: '€65-75', yearly: '€780-900' },
        { name: 'Hero Baby', price: '€10,50-12,00', monthly: '€60-70', yearly: '€720-840' }
      ]
    },
    {
      category: 'Huismerken',
      brands: [
        { name: 'Kruidvat', price: '€7,50-8,50', monthly: '€45-50', yearly: '€540-600' },
        { name: 'Etos', price: '€8,00-9,00', monthly: '€50-55', yearly: '€600-660' },
        { name: 'Jumbo', price: '€7,00-8,00', monthly: '€40-45', yearly: '€480-540' }
      ]
    }
  ]

  const savingStrategies = [
    {
      strategy: 'Online Winkelen',
      savings: 'variabel',
      methods: ['Abonneren en besparen (herhaalkorting)', 'Babykortingen bij grote webshops', 'Aanbiedingen bij babyspeciaalzaken', 'Voordeel bij grotere bestellingen'],
      tips: 'Abonnementsdiensten voor automatische herhaalkorting'
    },
    {
      strategy: 'Timing Optimalisatie',
      savings: 'variabel',
      methods: ['Actieperiodes zoals Black Friday', 'Opruimingsacties in januari', 'Seizoensgebonden inkoopplanning', 'Prijswaarschuwingen instellen'],
      tips: 'Voorraad 2-3 maanden, niet meer vanwege houdbaarheid'
    },
    {
      strategy: 'Merkenvergelijking',
      savings: 'tot ca. 40%',
      methods: ['Huismerk versus A-merk vergelijken', 'Alle voeding voldoet aan dezelfde EU-eisen', 'Kwaliteit van huismerken', 'Zelf uitproberen wat je baby accepteert'],
      tips: 'De meeste baby\'s accepteren een huismerk even goed'
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
      hack: 'Abonnementsdiensten combineren',
      description: 'Vaste herhaalbestelling bij een grote webshop',
      savings: 'herhaalkorting',
      method: 'Abonnement op flesvoeding gecombineerd met voordeel bij grotere hoeveelheden'
    },
    {
      hack: 'Cashback stapelen',
      description: 'Meerdere cashback-bronnen combineren',
      savings: 'variabel',
      method: 'Combineer bijvoorbeeld je betaalkaart, een klantenkaart, een cashback-app en actiecodes'
    },
    {
      hack: 'Zelf afmeten en voorbereiden',
      description: 'In het weekend poeder vooraf afmeten',
      savings: 'vooral tijd',
      method: 'Poeder vooraf in doseerbakjes voor efficiëntiewinst overdag'
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
                Flesvoeding kost Nederlandse families grofweg €600-1000 per jaar, afhankelijk van merk. Met slimme strategieën kun je
                tot ongeveer 40% besparen zonder kwaliteit in te leveren.
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
                    <div><strong>Baby kosten totaal:</strong> €500-800/maand</div>
                    <div><strong>Flesvoeding aandeel:</strong> 15-20% baby budget</div>
                    <div><strong>Besparing potentieel:</strong> €200-500/jaar</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Impact van €300 Besparing</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Een week extra vakantie mogelijk</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Ongeveer 6 maanden luiers gedekt</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Buffer voor onverwachte uitgaven</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Start van een spaarrekening voor je kind</span></li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 text-sm mt-6">
                Veel Nederlandse gezinnen merken dat baby-gerelateerde uitgaven in het eerste jaar flink kunnen oplopen.
              </p>
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
                <h4 className="font-medium text-gray-600 mb-2">Realistisch besparingsvoorbeeld</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div><strong>Van:</strong> Nutrilon (€1020/jaar) <strong>naar</strong> Hero Baby (€780/jaar)</div>
                  <div><strong>Jaarlijkse besparing:</strong> €240 (ongeveer 24%), voeding die aan dezelfde eisen voldoet</div>
                  <div><strong>Resultaat:</strong> zo'n €20 per maand extra budget voor andere babybehoeften</div>
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
                            <li key={idx} className="flex items-center space-x-2">
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
              
              <p className="text-gray-700 mb-4">
                Alle zuigelingenvoeding die in Nederland verkocht wordt, huismerk of A-merk, moet voldoen aan dezelfde
                EU-eisen (verordening 2016/127) en valt onder dezelfde NVWA-controle. De precieze samenstelling mag binnen
                de wettelijke marges verschillen, maar elk product voldoet aan dezelfde minimumeisen voor veiligheid en
                voedingswaarde.
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <h4 className="font-medium text-gray-600 mb-2">Voldoet aan dezelfde eisen:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>EU-verordening 2016/127</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>NVWA-kwaliteitscontrole</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Minimumgehalten voedingsstoffen</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Wettelijke veiligheidseisen</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600 mb-2">Verschil zit vooral in:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Marketing en verpakking</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Extra ingrediënten (zoals prebiotica)</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Smaaknuances</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Merkprestige</span></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-medium text-gray-600 mb-3">Kwaliteitsvergelijking huismerk versus A-merk</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>De meeste baby's accepteren een huismerk even goed</span></li>
                  <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Sommige baby's hebben een smaakvoorkeur voor een A-merk</span></li>
                  <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Een klein deel weigert een ander merk in eerste instantie</span></li>
                  <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Er is geen aangetoond verschil in groei of ontwikkeling</span></li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Conclusie:</strong> voor de meeste gezinnen is een huismerk een volledig adequate keuze.
                </p>
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
                <h4 className="font-medium text-gray-600 mb-2">Onmisbare Bespaar-Apps</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-gray-600 mb-1">Prijsvergelijking:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Kieskeurig.nl: realtime prijsvergelijking</span></li>
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Scoupy: cashback op babyproducten</span></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-600 mb-1">Budget bijhouden:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>YNAB: envelop-budgetmethode</span></li>
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
                        <div key={idx} className="flex items-center space-x-2">
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

              <p className="text-gray-700">
                <strong>Gezondheidsimpact van foute besparingen:</strong> ondervoeding, hogere infectiegevoeligheid,
                groeivertraging en verteringsproblemen. De medische kosten daarvan zijn veel hoger dan wat je bespaart.
              </p>
            </div>

            {/* Handige producten */}
            <AffiliateProductWidget
              pageId="praktische-tips_geld-besparen-flesvoeding"
              title="Handige producten"
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
              { src: '/flesvoeding.webp', alt: 'Budgetvriendelijke flesvoeding', caption: 'Kwaliteit hoeft niet duur te zijn' },
              { src: '/mother_and_baby.webp', alt: 'Bewuste keuzes in flesvoeding', caption: 'Slim besparen zonder kwaliteitsverlies' },
              { src: '/baby.webp', alt: 'Tevreden baby met budgetvriendelijke voeding', caption: 'Gezonde groei binnen budget' }
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