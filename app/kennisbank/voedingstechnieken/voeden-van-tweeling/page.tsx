import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { BookOpen, ArrowRight, Home, Users, Clock, Package, Heart, Euro, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding voor Tweeling: Complete gids | Nederlandse Ouders',
  description: 'Praktische tips, tijdsbesparing en equipment voor Nederlandse ouders van een tweeling. Van gelijktijdige voeding tot kostenoverzicht, alles voor het voeden van een tweeling.',
}

export default function TweelingVoedenPage() {
  const practicalHacks = [
    {
      title: 'De Gelijktijdige Voeding',
      description: 'Een veelgebruikte methode bij tweelingen',
      tips: ['Beide baby\'s tegelijk voeden', 'Scheelt tijd per dag', 'Tweelingvoedingskussen gebruiken', 'V-houding of parallelle houding']
    },
    {
      title: 'Vers klaarmaken per voeding',
      description: 'De veiligste basis voor bereiding',
      tips: ['Maak flesvoeding het liefst vers per voeding klaar', 'Voorbereiden? Gebruik koud kraanwater', 'Bewaar maximaal 8 uur achterin de koelkast bij 4°C', 'Vul poeder en water apart voor onderweg']
    },
    {
      title: 'Het Afwisselingssysteem',
      description: 'Beide ouders krijgen aaneengesloten slaap',
      tips: ['Nachtvoeding verdelen', 'Ouder 1: 22:00 en 02:00', 'Ouder 2: 06:00 en 10:00', 'Wisseling per week mogelijk']
    }
  ]

  const equipmentEssentials = [
    {
      category: 'Essentiële items (Eerste 6 Maanden)',
      items: [
        { name: 'Philips Avent Anti-Colic', price: '€6 per stuk', description: 'Vermindert spugen' },
        { name: 'MAM Easy Start', price: '€5 per stuk', description: 'Makkelijk vast te houden' },
        { name: 'Philips Avent 3-in-1 Sterilisator', price: '€80', description: 'Plaats voor 12 flessen' },
        { name: 'Tommee Tippee Dubbele Flessenwarmer', price: '€45', description: 'Gelijktijdig 2 flessen' }
      ]
    },
    {
      category: 'Handige extras',
      items: [
        { name: 'Twin Z Kussen', price: '€85', description: 'Ergonomisch voeden' },
        { name: 'Extra spenen en flessendeksels', price: '€15', description: 'Handig als reserve' },
        { name: 'Voedingsdagboek of app', price: '€0', description: 'Inname per baby bijhouden' }
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
      details: ['Sterkste baby bepaalt schema', 'Compromis methode: schema in het midden', 'Veel tweelingen synchroniseren na verloop van tijd vanzelf']
    },
    {
      problem: 'Beide baby\'s wakker houden elkaar wakker',
      solution: 'Tag-team en witte ruis',
      details: ['Separate kamers indien mogelijk', 'Witte ruis machines (€25)', 'Dream feeding: voeden zonder volledig wakker maken']
    }
  ]

  const budgetBreakdown = [
    {
      category: 'Voordelige variant (Kruidvat)',
      periods: [
        { age: '0-3 maanden', cost: '€70-90/maand', details: '6-8 blikken' },
        { age: '3-6 maanden', cost: '€90-120/maand', details: '8-10 blikken' },
        { age: '6-12 maanden', cost: '€60-90/maand', details: '6-8 blikken' }
      ],
      yearly: '€900-1100'
    },
    {
      category: 'Hoogwaardige variant (Nutrilon)',
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
          <div className="text-sm text-gray-500 mb-2">Voedingstechnieken • Tweeling</div>
          <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
            <Users className="w-6 h-6 mr-3 text-primary" />
            Flesvoeding voor Tweeling: Complete gids
          </h1>
          <p className="text-gray-700">
            Praktische tips, tijdsbesparing en equipment voor Nederlandse ouders van een tweeling.
            Van gelijktijdige voeding tot kostenoptimalisatie.
          </p>
        </div>

        {/* Realiteitscheck */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">De Realiteit: Dubbele Uitdaging</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">
                Flesvoeding geven aan een tweeling betekent <strong>16-20 voedingen per dag</strong> in plaats van 8-10.
                Dit vraagt om slimme strategieën zoals <Link href="/kennisbank/praktische-tips/geld-besparen-flesvoeding" className="text-primary hover:underline font-medium">kostenbesparende technieken</Link> en
                <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="text-primary hover:underline font-medium"> efficiënte bereiding</Link>.
              </p>
              
              <div className="border border-gray-200 bg-white rounded-xl p-4">
                <h3 className="font-medium text-primary mb-3">Tweeling flesvoeding in de praktijk:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Veel tweelingen krijgen (deels) flesvoeding in de eerste maanden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Voedingen kosten samen een flink deel van de dag</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>De meeste ouders gebruiken tijdbesparende technieken</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-3">Voordelen specifiek voor tweeling:</h3>
              <div className="space-y-3">
                <div className="p-3 border border-gray-200">
                  <h4 className="font-medium text-gray-700">Synchroon voeden mogelijk</h4>
                  <p className="text-gray-600">Beide baby's tegelijk voeden bespaart enorm veel tijd</p>
                </div>
                <div className="p-3 border border-gray-200">
                  <h4 className="font-medium text-gray-700">Meetbare inname per baby</h4>
                  <p className="text-gray-600">Precies bijhouden hoeveel elke baby drinkt met onze <Link href="/" className="text-primary hover:underline font-medium">flesvoeding calculator</Link></p>
                </div>
                <div className="p-3 border border-gray-200">
                  <h4 className="font-medium text-gray-700">Verdeling van nachtvoedingen</h4>
                  <p className="text-gray-600"><Link href="/kennisbank/praktische-tips/partner-betrekken-flesvoeding" className="text-primary hover:underline font-medium">Partner kan helpen</Link> met voedingen</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Hacks */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Praktische Hacks die Werken</h2>
          
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

        {/* Waarschuwing gelijktijdig voeden */}
        <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Let op</h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                Voed twee baby's nooit tegelijk met vastgezette of ondersteunde flessen zonder dat je erbij blijft.
                Een baby kan zich verslikken of stikken. Houd de fles altijd zelf vast en blijf toezicht houden.
              </p>
            </div>
          </div>
        </div>

        {/* Time Saving */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Tijdsbesparing: Van 12 naar 5 Uur per Dag</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 bg-white rounded-xl p-4">
              <h3 className="font-medium text-primary mb-3">Traditionele methode (1 voor 1):</h3>
              <div className="space-y-2 text-gray-600">
                <div>Voeding klaarmaken: 10 min × 16 = <strong>160 min</strong></div>
                <div>Voeden zelf: 30 min × 16 = <strong>480 min</strong></div>
                <div>Opruimen: 5 min × 16 = <strong>80 min</strong></div>
                <div className="border-t pt-2 font-medium">Totaal: 12 uur per dag</div>
              </div>
            </div>
            
            <div className="border border-gray-200 bg-white rounded-xl p-4">
              <h3 className="font-medium text-primary mb-3">Geoptimaliseerde methode:</h3>
              <div className="space-y-2 text-gray-600">
                <div>Poeder en water klaarzetten: <strong>45 min</strong> per dag</div>
                <div>Gelijktijdig voeden: 30 min × 8 = <strong>240 min</strong></div>
                <div>Opruimen: 3 min × 8 = <strong>24 min</strong></div>
                <div className="border-t pt-2 font-medium">Totaal: 5 uur per dag</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-primary text-white rounded-xl text-center">
            <div className="text-2xl font-medium">Slim werken scheelt flink wat tijd</div>
            <p className="text-sm text-white/90 mt-1">Meer tijd voor rust, jezelf en aandachtstijd met de baby's</p>
          </div>
        </div>

        {/* Benodigde Apparatuur */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
            <Package className="w-5 h-5 mr-2" />
            Benodigde Apparatuur
          </h2>
          
          {equipmentEssentials.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-medium text-primary mb-3">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.items.map((item, itemIndex) => (
                  <div key={index}>
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
            <div className="border border-gray-200 p-4">
              <h4 className="font-medium text-primary mb-2">Starter pakket (€200-300):</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>16 flessen: €60-80</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Sterilisator: €40-80</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Flessenwarmer: €35-45</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Tweelingkussen: €85</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Accessoires: €30-50</span></li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h4 className="font-medium text-primary mb-2">Hoogwaardig pakket (€400-600):</h4>
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
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Basis Schema Tweeling (0-2 maanden)
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-300 px-4 py-2 text-left">Tijd</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Activiteit</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Hoeveelheid</th>
                </tr>
              </thead>
              <tbody>
                {scheduleExample.map((entry, index) => (
                  <tr key={index} className={index % 2 === 1 ? "bg-white" : ""}>
                    <td className="border border-gray-300 px-4 py-2 font-medium">{entry.time}</td>
                    <td className="border border-gray-300 px-4 py-2">{entry.activity}</td>
                    <td className="border border-gray-300 px-4 py-2">{entry.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 space-y-2">
            <p className="text-gray-600">
              <strong>Totaal per dag:</strong> dit voorbeeld komt uit op ongeveer 1720ml (860ml per baby).
              De hoeveelheid hangt af van het gewicht van elke baby (ongeveer 150 ml per kilo per dag).
              Tweelingen zijn vaak lichter; reken per baby en <Link href="/" className="text-primary hover:underline font-medium">bereken per baby</Link> met onze calculator.
            </p>
            <p className="text-gray-600">
              <strong>Tip:</strong> Flexibiliteit binnen 30 minuten is prima.
            </p>
          </div>
        </div>

        {/* Common Problems */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Veelvoorkomende Problemen</h2>
          
          <div className="space-y-4">
            {commonProblems.map((item, index) => (
              <div key={index}>
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
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
            <Euro className="w-5 h-5 mr-2" />
            Kosten Overzicht Tweeling
          </h2>

          <p className="text-gray-600 mb-4">De onderstaande bedragen zijn indicatief en verschillen per merk, winkel en actie.</p>

          <div className="space-y-6">
            {budgetBreakdown.map((budget, index) => (
              <div key={index}>
                <h3 className="font-medium text-primary mb-3">{budget.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                  {budget.periods.map((period, periodIndex) => (
 <div key={index} className="p-3">
                      <div className="font-medium text-gray-700">{period.age}</div>
                      <div className="text-gray-700 font-medium">{period.cost}</div>
                      <div className="text-xs text-gray-600">{period.details}</div>
                    </div>
                  ))}
                </div>
                <div className="text-right">
                  <span className="text-lg font-medium text-gray-700">Jaarkosten: {budget.yearly}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 border border-gray-200 bg-white rounded-xl p-4">
            <h3 className="font-medium text-primary mb-3">Bespaartips:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <h4 className="font-medium">Grootverpakingen kopen:</h4>
                <ul className="space-y-1 mt-1">
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Action/Kruidvat: 2e gratis acties</span></li>
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Albert Heijn: Bonusbox kortingen</span></li>
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Online: Abonnement 10% korting</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Tweede hands:</h4>
                <ul className="space-y-1 mt-1">
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Equipment via Marktplaats</span></li>
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Tweelingkussens tweedehands</span></li>
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Besparing: 30-50% op startkosten</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="border border-gray-200 bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Ervaringen van Ouders
          </h2>

          <p className="text-gray-600 mb-4">Onderstaande voorbeelden zijn illustratief en bedoeld om herkenbare situaties te schetsen.</p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-primary mb-2">Vers klaarmaken houdt het overzichtelijk</h3>
              <p className="text-gray-600">
                Poeder en koud kraanwater apart klaarzetten en de fles ter plekke afmaken.
                Zo kan een partner meteen helpen en blijft de voeding veilig en vers.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-primary mb-2">Een tweelingkussen geeft rust</h3>
              <p className="text-gray-600">
                Beide baby's tegelijk voeden gaat comfortabeler met een goed kussen.
                Houd de flessen wel altijd zelf vast en blijf erbij.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-primary mb-2">Een schema helpt na de eerste weken</h3>
              <p className="text-gray-600">
                De eerste periode is vaak zoeken. Een globaal ritme brengt daarna meer rust,
                zolang je ruimte houdt voor de behoefte van elke baby.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium text-primary mb-2">Meest waardevolle tip:</h4>
            <p className="text-gray-600 italic">
              Perfectie bestaat niet bij een tweeling. Goed genoeg is echt goed genoeg.
            </p>
          </div>
        </div>


        {/* Next Steps */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Jouw Tweeling Succes Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-gray-200 p-4">
              <h3 className="font-medium text-gray-700">Week 1</h3>
              <p className="text-gray-600">Basis equipment aanschaffen</p>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-medium text-gray-700">Week 2</h3>
              <p className="text-gray-600">Gelijktijdig voeden oefenen</p>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-medium text-gray-700">Week 3</h3>
              <p className="text-gray-600">Schema implementeren</p>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-medium text-gray-700">Week 4</h3>
              <p className="text-gray-600">Verfijnen en automatiseren</p>
            </div>
          </div>
          
 <div className="mt-6">
            <h4 className="font-medium text-primary mb-2">Belangrijkste Takeaways:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                <span>Gelijktijdig voeden scheelt flink wat tijd</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                <span>Vers klaarmaken per voeding is de veiligste basis</span>
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

        {/* Tweeling Voeding Producten */}
        <AffiliateProductWidget
          pageId="voedingstechnieken_voeden-van-tweeling"
          title="Tweeling Voeding Producten"
        />

        {/* Navigation */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Gerelateerde Artikelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link
              href="/kennisbank/praktische-tips/geld-besparen-flesvoeding"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Geld besparen op flesvoeding →</div>
              <div className="text-sm text-gray-600">Kostenbesparende tips voor tweeling</div>
            </Link>
            <Link
              href="/kennisbank/praktische-tips/partner-betrekken-flesvoeding"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Partner betrekken bij flesvoeding →</div>
              <div className="text-sm text-gray-600">Verdeling van taken en verantwoordelijkheden</div>
            </Link>
            <Link
              href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Fles bereiden stap voor stap →</div>
              <div className="text-sm text-gray-600">Efficiënte bereiding voor meerdere flessen</div>
            </Link>
            <Link
              href="/"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Flesvoeding Calculator →</div>
              <div className="text-sm text-gray-600">Bereken hoeveelheden per baby</div>
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