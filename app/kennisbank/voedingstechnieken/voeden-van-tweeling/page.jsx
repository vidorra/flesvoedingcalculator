import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { BookOpen, ArrowRight, Home, Users, Clock, Package, Calculator, Heart, Euro } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding voor Tweeling: Complete Survival Gids 2025 | Nederlandse Ouders',
  description: 'Praktische hacks, tijdsbesparing en equipment voor Nederlandse ouders van een tweeling. Van gelijktijdige voeding tot kosten overzicht - alles voor succesvol tweeling voeden.',
}

export default function TweelingVoedenPage() {
  const practicalHacks = [
    {
      title: 'De Gelijktijdige Voeding',
      description: '60% van ouders gebruikt deze methode',
      tips: ['Beide baby\'s tegelijk voeden', 'Bespaart 4-6 uur per dag', 'Twin feeding pillow gebruiken', 'V-houding of parallelle houding']
    },
    {
      title: 'De Productielijn Methode', 
      description: '75% tijdsbesparing op bereiding',
      tips: ['6-8 flessen tegelijk maken', 'Bewaren in koelkast (24u houdbaar)', 'Label met naam en tijd', 'Batch-bereiding voeding']
    },
    {
      title: 'Het Tag-Team Systeem',
      description: 'Beide ouders krijgen 4-5 uur slaap',
      tips: ['Nachtvoeding verdelen', 'Ouder 1: 22:00 en 02:00', 'Ouder 2: 06:00 en 10:00', 'Wisseling per week mogelijk']
    }
  ]

  const equipmentEssentials = [
    {
      category: 'Must-Haves (Eerste 6 Maanden)',
      items: [
        { name: 'Philips Avent Anti-Colic', price: '€6 per stuk', description: 'Vermindert spugen' },
        { name: 'MAM Easy Start', price: '€5 per stuk', description: 'Makkelijk vast te houden' },
        { name: 'Philips Avent 3-in-1 Sterilisator', price: '€80', description: 'Plaats voor 12 flessen' },
        { name: 'Tommee Tippee Dubbele Flessenwarmer', price: '€45', description: 'Gelijktijdig 2 flessen' }
      ]
    },
    {
      category: 'Nice-to-Haves',
      items: [
        { name: 'Twin Z Pillow', price: '€85', description: 'Ergonomisch voeden' },
        { name: 'Bottle Buddy', price: '€25', description: 'Fleshouder per baby' },
        { name: 'Baby gym met fleshouders', price: '€60', description: 'Entertainment tijdens voeden' }
      ]
    }
  ]

  const scheduleExample = [
    { time: '06:00', activity: 'Voeding beide baby\'s', amount: '200ml totaal' },
    { time: '09:00', activity: 'Voeding beide baby\'s', amount: '240ml totaal' },
    { time: '12:00', activity: 'Voeding beide baby\'s', amount: '280ml totaal' },
    { time: '15:00', activity: 'Voeding beide baby\'s', amount: '240ml totaal' },
    { time: '18:00', activity: 'Voeding beide baby\'s', amount: '220ml totaal' },
    { time: '21:00', activity: 'Voeding beide baby\'s', amount: '200ml totaal' },
    { time: '00:00', activity: 'Nachtvoeding', amount: '120ml totaal' },
    { time: '03:00', activity: 'Nachtvoeding', amount: '120ml totaal' }
  ]

  const commonProblems = [
    {
      problem: 'Een baby drinkt meer dan de ander',
      solution: 'Individuele hoeveelheden aanpassen',
      details: ['Groeicurve bijhouden per baby', 'Consultatiebureau raadplegen bij >20% verschil', 'Niet dwingend gelijk houden']
    },
    {
      problem: 'Baby\'s hebben verschillende schema\'s', 
      solution: 'Dominantie methode gebruiken',
      details: ['Sterkste baby bepaalt schema', 'Compromis methode: schema in het midden', '80% van tweelingen sync automatisch binnen 6 weken']
    },
    {
      problem: 'Beide baby\'s wakker houden elkaar wakker',
      solution: 'Tag-team en white noise',
      details: ['Separate kamers indien mogelijk', 'White noise machines (€25)', 'Dream feeding: voeden zonder volledig wakker maken']
    }
  ]

  const budgetBreakdown = [
    {
      category: 'Budget variant (Kruidvat)',
      periods: [
        { age: '0-3 maanden', cost: '€70-90/maand', details: '6-8 blikken' },
        { age: '3-6 maanden', cost: '€90-120/maand', details: '8-10 blikken' },
        { age: '6-12 maanden', cost: '€60-90/maand', details: '6-8 blikken' }
      ],
      yearly: '€900-1100'
    },
    {
      category: 'Premium variant (Nutrilon)',
      periods: [
        { age: '0-3 maanden', cost: '€130-160/maand', details: '10-12 blikken' },
        { age: '3-6 maanden', cost: '€160-200/maand', details: '12-14 blikken' },
        { age: '6-12 maanden', cost: '€120-150/maand', details: '10-12 blikken' }
      ],
      yearly: '€1700-2100'
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content - 7 columns on desktop, full width on mobile */}
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

        {/* Header */}
        <div className="mb-6">
          <div className="text-sm text-gray-500 mb-2">Voedingstechnieken  Tweeling</div>
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Users className="w-6 h-6 mr-3 text-primary" />
            Flesvoeding voor Tweeling: Complete Survival Gids 2025
          </h1>
          <p className="text-gray-700">
            Praktische hacks, tijdsbesparing en equipment voor Nederlandse ouders van een tweeling. 
            Van gelijktijdige voeding tot kostenoptimalisatie.
          </p>
        </div>

        {/* Reality Check */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">De Realiteit: Dubbele Uitdaging</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">
                Flesvoeding geven aan een tweeling betekent <strong>16-20 voedingen per dag</strong> in plaats van 8-10. 
                Dit vraagt om slimme strategieën en de juiste aanpak.
              </p>
              
              <div className="border border-gray-200 bg-white rounded-xl p-4">
                <h3 className="font-medium text-primary mb-3">Nederlandse cijfers tweeling flesvoeding:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>78% van tweelingen krijgt (deels) flesvoeding vanaf 3 maanden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Gemiddeld 2,5 uur per dag besteed aan voedingen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>85% van ouders gebruikt tijdbesparende technieken</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-3">Voordelen specifiek voor tweeling:</h3>
              <div className="space-y-3">
                <div className="p-3 border border-gray-200 bg-white rounded-lg">
                  <h4 className="font-medium text-gray-700">Synchroon voeden mogelijk</h4>
                  <p className="text-gray-600">Beide baby's tegelijk voeden bespaart enorm veel tijd</p>
                </div>
                <div className="p-3 border border-gray-200 bg-white rounded-lg">
                  <h4 className="font-medium text-gray-700">Meetbare inname per baby</h4>
                  <p className="text-gray-600">Precies bijhouden hoeveel elke baby drinkt</p>
                </div>
                <div className="p-3 border border-gray-200 bg-white rounded-lg">
                  <h4 className="font-medium text-gray-700">Verdeling van nachtvoedingen</h4>
                  <p className="text-gray-600">Partner kan helpen met voedingen</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Hacks */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Praktische Hacks die Werken</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {practicalHacks.map((hack, index) => (
              <div key={index} className="bg-white rounded-xl p-4">
                <h3 className="font-medium text-primary mb-2">{hack.title}</h3>
                <p className="text-sm text-gray-600 font-medium mb-3">{hack.description}</p>
                <ul className="space-y-2">
                  {hack.tips.map((tip, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Time Saving */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Tijdsbesparing: Van 12 naar 5 Uur per Dag</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 bg-white rounded-xl p-4">
              <h3 className="font-medium text-primary mb-3">Traditionele methode (1 voor 1):</h3>
              <div className="space-y-2 text-gray-600">
                <div>Voeding klaarmaken: 10 min × 16 = <strong>160 min</strong></div>
                <div>Voeden zelf: 30 min × 16 = <strong>480 min</strong></div>
                <div>Opruimen: 5 min × 16 = <strong>80 min</strong></div>
                <div className="border-t pt-2 font-bold">Totaal: 12 uur per dag</div>
              </div>
            </div>
            
            <div className="border border-gray-200 bg-white rounded-xl p-4">
              <h3 className="font-medium text-primary mb-3">Geoptimaliseerde methode:</h3>
              <div className="space-y-2 text-gray-600">
                <div>Batch klaarmaken: <strong>45 min</strong> per dag</div>
                <div>Gelijktijdig voeden: 30 min × 8 = <strong>240 min</strong></div>
                <div>Opruimen: 3 min × 8 = <strong>24 min</strong></div>
                <div className="border-t pt-2 font-bold">Totaal: 5 uur per dag</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-primary text-white rounded-xl text-center">
            <div className="text-2xl font-bold">Tijdsbesparing: 7 uur per dag!</div>
            <p className="text-sm text-white/90 mt-1">Meer tijd voor rust, jezelf en quality time met de baby's</p>
          </div>
        </div>

        {/* Equipment Essentials */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Package className="w-5 h-5 mr-2" />
            Equipment Essentials
          </h2>
          
          {equipmentEssentials.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-medium text-primary mb-3">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.items.map((item, itemIndex) => (
                  <div key={index} className="p-3">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-gray-700">{item.name}</h4>
                      <span className="text-gray-600 font-medium text-sm">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-gray-200 bg-white rounded-lg p-4">
              <h4 className="font-medium text-primary mb-2">Starter pakket (€200-300):</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>16 flessen: €60-80</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Sterilisator: €40-80</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Flessenwarmer: €35-45</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Twin pillow: €85</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Accessoires: €30-50</span></li>
              </ul>
            </div>
            <div className="border border-gray-200 bg-white rounded-lg p-4">
              <h4 className="font-medium text-primary mb-2">Premium pakket (€400-600):</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Hoogwaardige flessen: €120</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Elektrische sterilisator: €80</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Dubbele flessenwarmer: €65</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Complete twin set: €150</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Extra accessoires: €85</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Schema Example */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Basis Schema Tweeling (0-2 maanden)
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Tijd</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Activiteit</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Hoeveelheid</th>
                </tr>
              </thead>
              <tbody>
                {scheduleExample.map((entry, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-2 font-medium text-gray-700">{entry.time}</td>
                    <td className="py-3 px-2 text-gray-700">{entry.activity}</td>
                    <td className="py-3 px-2 text-gray-700">{entry.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 p-3 bg-white rounded-lg">
            <p className="text-gray-600">
              <strong>Totaal per dag:</strong> 1720ml (860ml per baby)  
              <strong>Tip:</strong> Flexibiliteit binnen 30 minuten is prima
            </p>
          </div>
        </div>

        {/* Common Problems */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Veelvoorkomende Problemen</h2>
          
          <div className="space-y-4">
            {commonProblems.map((item, index) => (
              <div key={index} className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-primary mb-2">Probleem:</h3>
                    <p className="text-gray-700">{item.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary mb-2">Oplossing:</h3>
                    <p className="text-sm text-gray-700 mb-2">{item.solution}</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {item.details.map((detail, detailIndex) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Overview */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Euro className="w-5 h-5 mr-2" />
            Kosten Overzicht Tweeling
          </h2>
          
          <div className="space-y-6">
            {budgetBreakdown.map((budget, index) => (
              <div key={index} className="p-4">
                <h3 className="font-medium text-primary mb-3">{budget.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                  {budget.periods.map((period, periodIndex) => (
                    <div key={index} className="bg-white rounded-lg p-3">
                      <div className="font-medium text-gray-700">{period.age}</div>
                      <div className="text-gray-700 font-medium">{period.cost}</div>
                      <div className="text-xs text-gray-600">{period.details}</div>
                    </div>
                  ))}
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-gray-700">Jaarkosten: {budget.yearly}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 border border-gray-200 bg-white rounded-xl p-4">
            <h3 className="font-medium text-primary mb-3">Bespaartips:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <h4 className="font-medium">Bulk inkopen:</h4>
                <ul className="space-y-1 mt-1">
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Action/Kruidvat: 2e gratis acties</span></li>
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Albert Heijn: Bonusbox kortingen</span></li>
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Online: Subscription 10% korting</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Tweede hands:</h4>
                <ul className="space-y-1 mt-1">
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Equipment via Marktplaats</span></li>
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Twin pillows tweedehands</span></li>
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Besparing: 30-50% op startkosten</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="border border-gray-200 bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Ervaringen van Ouders
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-primary mb-2">"De productielijn redde ons leven" - Marieke, Almere</h3>
              <p className="text-gray-600">
                "Iedere avond 8 flessen maken voor de volgende dag. Partner kan direct helpen zonder instructies. 
                Nachtvoedingen duren nu 10 minuten in plaats van 30."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-primary mb-2">"Twin pillow = game changer" - Patrick, Utrecht</h3>
              <p className="text-gray-600">
                "€85 beste investering ooit. Beide baby's tegelijk voeden terwijl ik koffie drink. 
                Mijn rug doet niet meer zeer en baby's zijn rustiger."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-primary mb-2">"Schema discipline werkt echt" - Lisa, Rotterdam</h3>
              <p className="text-gray-600">
                "Eerste maand chaos, tweede maand strict schema. Beide baby's slapen nu door. 
                Vrienden begrijpen niet hoe relaxed wij zijn."
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <h4 className="font-medium text-primary mb-2">Meest waardevolle tip:</h4>
            <p className="text-gray-600 italic">
              "Perfectie bestaat niet bij tweeling. 80% goed is uitstekend." - Ervaren tweelingmoeder
            </p>
          </div>
        </div>

        {/* Calculator Link */}
        <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-lg font-semibold text-white mb-3 flex items-center">
            <Calculator className="w-5 h-5 mr-2" />
            Bereken Voedingshoeveelheden voor Uw Tweeling
          </h2>
          <p className="text-white/90 mb-4">
            Gebruik onze speciale tweeling-modus in de calculator om de exacte hoeveelheden 
            per baby te berekenen en een gepersonaliseerd voedingsschema te maken.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-white transition-colors font-medium"
          >
            <Calculator className="w-4 h-4" />
            <span>Naar Tweeling Calculator</span>
          </Link>
        </div>

        {/* Next Steps */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Jouw Tweeling Succes Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-gray-200 bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-700">Week 1</h3>
              <p className="text-gray-600">Basis equipment aanschaffen</p>
            </div>
            <div className="border border-gray-200 bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-700">Week 2</h3>
              <p className="text-gray-600">Gelijktijdig voeden oefenen</p>
            </div>
            <div className="border border-gray-200 bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-700">Week 3</h3>
              <p className="text-gray-600">Schema implementeren</p>
            </div>
            <div className="border border-gray-200 bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-700">Week 4</h3>
              <p className="text-gray-600">Verfijnen en automatiseren</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <h4 className="font-medium text-primary mb-2">Belangrijkste Takeaways:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                <span>Gelijktijdig voeden bespaart 7 uur per dag</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                <span>Batch-bereiding elimineert stress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                <span>Juiste equipment is investering waard</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                <span>Tag-team zorgt voor uitgeruste ouders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde Artikelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/voedingstechnieken"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="font-medium text-gray-700">Voedingstechnieken </div>
              <div className="text-gray-600">Alle technieken voor flesvoeding</div>
            </Link>
            <Link 
              href="/kennisbank/praktische-tips"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="font-medium text-gray-700">Praktische Tips </div>
              <div className="text-gray-600">Time-saving tips en organisatie</div>
            </Link>
          </div>
        </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar 
          images={[
            {
              src: "/borstvoeding-4.webp",
              alt: "Tweeling voeding technieken",
              caption: "Praktische tips voor het voeden van een tweeling"
            },
            {
              src: "/sterilisator-babyflessen.webp", 
              alt: "Sterilisator voor tweeling voeding equipment",
              caption: "Essentieel equipment voor tweeling voeding"
            },
            {
              src: "/baby-voeten.webp",
              alt: "Twee baby voeten voor tweeling",
              caption: "Dubbele zorg, dubbele vreugde"
            }
          ]}
          adTopics={["Tweeling Producten", "Baby Equipment"]}
        />
      </div>
    </Layout>
  )
}