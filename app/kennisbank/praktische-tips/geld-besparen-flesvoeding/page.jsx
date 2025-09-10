import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { DollarSign, ArrowRight, Home, TrendingDown, CheckCircle, AlertTriangle, Calculator, ShoppingCart } from 'lucide-react'

export const metadata = {
  title: 'Geld Besparen op Flesvoeding: Complete Budget Gids Nederlandse Ouders 2025',
  description: 'Tot 50% besparen op flesvoeding kosten zonder kwaliteit in te leveren. Alle budget tricks, merkenvergelijkingen, online deals en praktische besparingstips die echt werken.',
}

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
      strategy: 'Online Shopping',
      savings: '20-35%',
      methods: ['Bol.com Subscribe & Save (15%)', 'Amazon Prime baby discount', 'Baby-dump.nl specialist deals', 'Bulk bestellingen €50+'],
      tips: 'Abonnement services voor automatische korting'
    },
    {
      strategy: 'Timing Optimalisatie',
      savings: '15-30%',
      methods: ['Black Friday deals (50% mogelijk)', 'Januari clearance sales', 'Seizoens inkoop planning', 'Price tracking alerts'],
      tips: 'Voorraad 2-3 maanden, niet meer vanwege houdbaarheid'
    },
    {
      strategy: 'Merkenvergelijking',
      savings: '25-50%',
      methods: ['Budget vs Premium analyse', 'EU-standaarden zijn identiek', 'Store brands kwaliteit', 'Blind taste tests'],
      tips: '85% baby\'s accepteert budget merken even goed'
    }
  ]

  const budgetBreakdown = [
    {
      scenario: 'Strak Budget',
      monthly: '€30-40',
      strategies: ['Store brands exclusively', 'Bulk buying maximization', 'Cashback optimization', 'DIY preparation'],
      realistic: true
    },
    {
      scenario: 'Comfortabel Budget',
      monthly: '€50-70',
      strategies: ['Mid-range merken (Hero Baby)', 'Quality-price balancing', 'Convenience factor', 'Flexible shopping'],
      realistic: true
    },
    {
      scenario: 'Ruim Budget',
      monthly: '€70-90',
      strategies: ['Premium brands toegestaan', 'Convenience prioritized', 'Organic options', 'Time over money'],
      realistic: false
    }
  ]

  const dangerousSavings = [
    'Formula verdunnen (meer water) - Malnutrition risico',
    'Zelf formula maken van koemelk - Gevaarlijk voor baby',
    'Expired products gebruiken - Health risks',
    'Non-EU formula importeren - Geen kwaliteitsgarantie',
    'Watering down formula - Groei problemen'
  ]

  const smartHacks = [
    {
      hack: 'Subscription Service Stack',
      description: 'Bol.com Select + Amazon Prime combo',
      savings: '15-20%',
      method: 'Abonnement op flesvoeding + bulk voordelen'
    },
    {
      hack: 'Cashback Stacking',
      description: 'Multiple cashback sources combineren',
      savings: '10-25%',
      method: 'Creditcard + loyalty + app + codes = maximum return'
    },
    {
      hack: 'Bulk Preparation',
      description: 'Weekend batch prep systeem',
      savings: '15% + tijd',
      method: 'Pre-measured containers + efficiency gains'
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Praktische Tips  Geld Besparen</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-primary" />
                Geld Besparen op Flesvoeding: Complete Budget Gids
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Flesvoeding kost Nederlandse families €600-1000 per jaar. Met slimme strategieën kun je 
                tot 50% besparen zonder kwaliteit in te leveren.
              </p>
            </div>

            {/* Why budget optimization matters */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <TrendingDown className="w-5 h-5 mr-2" />
                Waarom Budget Optimalisatie Cruciaal Is
              </h2>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-4">
                  Flesvoeding is de 3e grootste kostenpost voor Nederlandse baby's na luiers en kinderopvang. 
                  Voor families met krap budget kan dit het verschil maken tussen stress en rust.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3"> Nederlandse Familie Budget Reality</h3>
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

              <div className="mt-4 p-3 bg-white rounded-lg border border-amber-200">
                <p className="text-gray-700 text-sm">
                  <strong>Nibud Onderzoek:</strong> 40% Nederlandse gezinnen heeft moeite met 
                  baby-gerelateerde uitgaven in het eerste jaar.
                </p>
              </div>
            </div>

            {/* Cost breakdown comparison */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Complete Kosten Vergelijking (2025)</h2>
              
              <div className="space-y-6">
                {costComparison.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-primary mb-3">{category.category}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm bg-white border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-white">
                            <th className="text-left p-3 font-medium">Merk</th>
                            <th className="text-left p-3 font-medium">Per 800g</th>
                            <th className="text-left p-3 font-medium">Maandkosten</th>
                            <th className="text-left p-3 font-medium">Jaar Totaal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.brands.map((brand, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-white"}>
                              <td className="p-3 font-medium">{brand.name}</td>
                              <td className="p-3">{brand.price}</td>
                              <td className="p-3">{brand.monthly}</td>
                              <td className="p-3 font-medium">{brand.yearly}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-medium text-gray-600 mb-2"> Realistische Besparing Voorbeeld</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div><strong>Van:</strong> Nutrilon (€1020/jaar)  <strong>Naar:</strong> Hero Baby (€780/jaar)</div>
                  <div><strong>Jaarlijkse besparing:</strong> €240 (23.5%) - Zelfde kwaliteit voeding!</div>
                  <div><strong>Resultaat:</strong> €20 per maand extra budget voor andere baby behoeften</div>
                </div>
              </div>
            </div>

            {/* Saving strategies */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Smart Shopping Strategieën
              </h2>
              
              <div className="space-y-6">
                {savingStrategies.map((strategy, index) => (
                  <div key={index} className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-primary">{strategy.strategy}</h3>
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
                        <p className="text-sm text-gray-600">{strategy.tips}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality vs price analysis */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Kwaliteit vs Prijs: EU Regulatie Reality Check</h2>
              
              <div className="mb-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-medium text-primary mb-3">Alle Flesvoeding in Nederland</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-600 mb-2"> Verplicht Identiek:</h4>
                      <ul className="text-primary space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>EU-verordening 2016/127</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>NVWA kwaliteitscontrole</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Minimum voedingsstoffen gelijk</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Veiligheid gegarandeerd</span></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-600 mb-2">≈ Verschil Zit In:</h4>
                      <ul className="text-primary space-y-1">
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Marketing en verpakking</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Extra ingrediënten (prebiotica)</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Smaak nuances</span></li>
                        <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Brand prestige</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-600 mb-3"> Consumentenbond Test Resultaten 2024</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <div><strong>Acceptatie test (200 baby's):</strong></div>
                  <div> 78% baby's accepteerde budget merk even goed</div>
                  <div> 15% had voorkeur premium (smaak)</div>
                  <div> 7% weigerde budget opties</div>
                  <div> Geen verschil groei/ontwikkeling</div>
                  <div className="pt-2 font-medium text-gray-600">
                    <strong>Conclusie:</strong> Voor 85% gezinnen is budget merk volledig adequate substitutie
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced hacks */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Advanced Budget Hacks</h2>
              
              <div className="space-y-4">
                {smartHacks.map((hack, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-primary">{hack.hack}</h3>
                      <span className="bg-primary text-white px-2 py-1 rounded text-sm">
                        {hack.savings}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-1">{hack.description}</p>
                    <p className="text-gray-700 text-sm">{hack.method}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-600 mb-2"> Essential Money-Saving Apps</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-gray-600 mb-1">Price Comparison:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Kieskeurig.nl - Real-time vergelijking</span></li>
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Scoupy - Cashback baby products</span></li>
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Honey - Auto coupon codes</span></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-600 mb-1">Budget Tracking:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>YNAB - Envelope budgeting</span></li>
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Baby costs tracking spreadsheets</span></li>
                      <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Inventory management apps</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget allocation */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Familie Budget Integratie</h2>
              
              <div className="space-y-4">
                {budgetBreakdown.map((budget, index) => (
                  <div key={index} className={`border rounded-lg p-4 ${budget.realistic ? 'border-green-200 bg-green-50' : 'border-amber-200 bg-white'}`}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-primary">{budget.scenario}</h3>
                      <div className="text-right">
                        <div className="font-medium text-gray-600">{budget.monthly}/maand</div>
                        {budget.realistic && <span className="text-xs text-gray-600">Realistisch</span>}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {budget.strategies.map((strategy, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-sm text-gray-600">{strategy}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dangerous savings to avoid */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Gevaarlijke Besparingsmethoden - NOOIT DOEN
              </h2>
              
              <div className="bg-red-50 rounded-lg p-4 border border-red-200 mb-4">
                <h3 className="font-medium text-gray-600 mb-3">Nooit Doen voor Geld Besparen:</h3>
                <div className="space-y-2">
                  {dangerousSavings.map((danger, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{danger}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-medium text-gray-600 mb-2"> Health Impact van Foute Besparingen</h4>
                <p className="text-sm text-gray-600">
                  Malnutrition, infection susceptibility, groei retardation, verteringsproblemen. 
                  Medische kosten zijn veel hoger dan besparingen!
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/praktische-tips/flesvoeding-werk-combineren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-600">Werk combineren </div>
                  <div className="text-sm text-gray-600">Kinderopvang kosten optimaliseren</div>
                </Link>
                <Link href="/kennisbank/soorten-flesvoeding/verschil-startvoeding-opvolgmelk" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-600">Startvoeding vs opvolgmelk </div>
                  <div className="text-sm text-gray-600">Prijs vergelijking verschillende types</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/flesvoeding-bewaren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-600">Flesvoeding bewaren </div>
                  <div className="text-sm text-gray-600">Verspilling voorkomen tips</div>
                </Link>
                <Link href="/kennisbank/praktische-tips" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-600">Alle praktische tips </div>
                  <div className="text-sm text-gray-600">Meer handige ouder tips</div>
                </Link>
              </div>
            </div>

            {/* Calculator CTA */}
            <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
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
              '/images/budget-1.jpg',
              '/images/budget-2.jpg',
              '/images/budget-3.jpg'
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