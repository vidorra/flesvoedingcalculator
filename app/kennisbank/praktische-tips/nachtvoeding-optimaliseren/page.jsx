import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { BookOpen, ArrowRight, Home, Moon, Clock, Lightbulb, Calculator, Coffee, Zap } from 'lucide-react'

export const metadata = {
  title: 'Nachtvoeding Optimaliseren: Efficiënt Voeden in het Donker 2025',
  description: 'Praktische tips voor nachtvoeding bij flesvoeding. Van 30 naar 10 minuten per nachtvoeding. Complete gids voor uitgeruste Nederlandse ouders.',
}

export default function NachtvoedingOptimaliserenPage() {
  const optimizationStrategies = [
    {
      strategy: 'De 10-Minuten Methode',
      timeReduction: '30min → 10min',
      steps: [
        'Alles binnen handbereik klaarzetten',
        'Pre-made flessen in thermosfles',
        'Minimaal licht gebruiken',
        'Geen luier verschonen tenzij nodig'
      ],
      effectiveness: '85% tijdsbesparing'
    },
    {
      strategy: 'Batch Nachtbereiding',
      timeReduction: '20min → 5min bereiding',
      steps: [
        '4 flessen \'s avonds maken',
        'Bewaren in koelkast',
        'Flessenwarmer naast bed',
        'Timer voor opwarmen'
      ],
      effectiveness: '75% minder nachtwerk'
    },
    {
      strategy: 'Partner Tag-Team',
      timeReduction: 'Volledige nacht slaap om de beurt',
      steps: [
        'Verdeel nachten of voedingen',
        'Een ouder slaapt door',
        'Wisseling elke 2-3 nachten',
        'Weekend = gezamenlijk'
      ],
      effectiveness: '50% meer slaap per ouder'
    }
  ]

  const equipmentEssentials = [
    {
      category: 'Must-Haves (€50-80)',
      items: [
        { name: 'Rode nachtlamp', price: '€15', benefit: 'Melatonine productie behouden' },
        { name: 'Thermosfles dubbelwandig', price: '€25', benefit: '6u warm water beschikbaar' },
        { name: 'Nachtkastje organizer', price: '€20', benefit: 'Alles binnen handbereik' },
        { name: 'Stille flessenwarmer', price: '€35', benefit: 'Geen geluid, partner slaapt door' }
      ]
    },
    {
      category: 'Nice-to-Haves (€40-100)',
      items: [
        { name: 'Baby Perfect Prep machine', price: '€180', benefit: 'Perfect temperatuur in 2 minuten' },
        { name: 'Draadloze thermometer', price: '€30', benefit: 'Temperatuur checken zonder bewegen' },
        { name: 'Voeding station op wielen', price: '€60', benefit: 'Mobiele nachtvoeding setup' },
        { name: 'White noise machine', price: '€40', benefit: 'Baby slaapt beter door' }
      ]
    }
  ]

  const ageBasedStrategies = [
    {
      age: '0-3 maanden',
      frequency: '2-3x per nacht',
      strategy: 'Survival Modus',
      tips: [
        'Accepteer dat nachten zwaar zijn',
        'Elk 2-3 uur voeden normaal',
        'Focus op efficiency, niet perfectie',
        'Dream feeding proberen na 6 weken'
      ],
      sleepExpectation: '4-6u onderbrokken slaap'
    },
    {
      age: '3-6 maanden', 
      frequency: '1-2x per nacht',
      strategy: 'Optimalisatie Fase',
      tips: [
        'Langere nachten mogelijk',
        'Schema consistency belangrijk',
        'Laatste voeding later (23:00)',
        'Eerste voeding vroeger uitstellen'
      ],
      sleepExpectation: '5-7u onderbrokken slaap'
    },
    {
      age: '6+ maanden',
      frequency: '0-1x per nacht',
      strategy: 'Doorslapen Stimuleren',
      tips: [
        'Nachtvoeding afbouwen mogelijk',
        'Baby kan 6-8u zonder eten',
        'Water in plaats van melk proberen',
        'Slaaproutine belangrijker dan voeding'
      ],
      sleepExpectation: '6-8u ononderbroken slaap'
    }
  ]

  const commonChallenges = [
    {
      challenge: 'Baby wordt volledig wakker tijdens nachtvoeding',
      solution: 'Dream feeding techniek',
      steps: [
        'Voeden terwijl baby half slaapt',
        'Minimaal licht en geluid',
        'Baby niet volledig rechtop tillen',
        'Zachte bewegingen gebruiken'
      ]
    },
    {
      challenge: 'Partner wordt wakker van nachtvoeding',
      solution: 'Geluidsreductie strategie', 
      steps: [
        'Stille flessenwarmer gebruiken',
        'Baby naar andere kamer brengen',
        'Fluistermodus in huis',
        'Partner oordopjes laten dragen'
      ]
    },
    {
      challenge: 'Te lang wakker na nachtvoeding',
      solution: 'Snelle terugval techniek',
      steps: [
        'Routine minimaal houden',
        'Geen oogcontact maken',
        'Niet praten tegen baby',
        'Direct terug naar bed na voeding'
      ]
    }
  ]

  const timeComparison = [
    {
      method: 'Traditioneel',
      steps: [
        { action: 'Opstaan', time: '1 min' },
        { action: 'Fles maken', time: '8 min' },
        { action: 'Opwarmen', time: '4 min' },
        { action: 'Voeden', time: '15 min' },
        { action: 'Boertje/verschonen', time: '5 min' },
        { action: 'Opruimen', time: '2 min' }
      ],
      total: '35 minuten',
      wakefulness: 'Volledig wakker'
    },
    {
      method: 'Geoptimaliseerd',
      steps: [
        { action: 'Fles pakken', time: '30 sec' },
        { action: 'In warmer', time: '30 sec' },  
        { action: 'Opwarmen (automatisch)', time: '3 min' },
        { action: 'Dream feeding', time: '8 min' },
        { action: 'Terug leggen', time: '30 sec' }
      ],
      total: '12 minuten',
      wakefulness: 'Half slapend'
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
          <div className="text-sm text-primary mb-2">Praktische Tips • Nachtvoeding</div>
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Moon className="w-6 h-6 mr-3 text-primary" />
            Nachtvoeding Optimaliseren: Efficiënt Voeden in het Donker
          </h1>
          <p className="text-primary">
            Van 30 naar 10 minuten per nachtvoeding. Praktische strategieën voor uitgeruste Nederlandse ouders 
            die het maximum uit hun nachtslaap willen halen.
          </p>
        </div>

        {/* Reality Check */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">De Nachtvoeding Realiteit</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-4 mb-4">
                <h3 className="font-medium text-primary mb-3">Zonder optimalisatie:</h3>
                <ul className="space-y-2 text-sm text-primary">
                  <li className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4" />
                    <span>30-45 minuten per nachtvoeding</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4" />
                    <span>2-3 uur totaal wakker per nacht</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4" />
                    <span>Volledig wakker worden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4" />
                    <span>Moeilijk weer inslapen</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-4">
                <h3 className="font-medium text-primary mb-3">Nederlandse slaapstatistieken ouders:</h3>
                <ul className="space-y-1 text-sm text-primary">
                  <li>• 73% ouders slaapt minder dan 6u per nacht eerste 3 maanden</li>
                  <li>• 41% voelt zich chronisch uitgeput</li>
                  <li>• 28% heeft nachtvoeding-gerelateerde stress</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-4">
                <h3 className="font-medium text-primary mb-3">Met optimalisatie:</h3>
                <ul className="space-y-2 text-sm text-primary">
                  <li className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>10-15 minuten per nachtvoeding</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>45 minuten totaal wakker per nacht</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Half slapend blijven</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Snel weer inslapen</span>
                  </li>
                </ul>
                
                <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                  <div className="text-primary font-bold text-lg">Besparing: 1.5-2 uur slaap per nacht!</div>
                  <div className="text-sm text-primary">= 10-14 uur meer slaap per week</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Time Comparison */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Tijd Vergelijking: Voor & Na Optimalisatie
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timeComparison.map((method, index) => (
              <div key={index} className="rounded-xl p-4 border border-gray-200 bg-gray-50">
                <h3 className="font-medium mb-3 text-primary">
                  {method.method} Methode
                </h3>
                
                <div className="space-y-2 mb-4">
                  {method.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex justify-between items-center text-sm">
                      <span className={method.method === 'Traditioneel' ? 'text-primary' : 'text-primary'}>
                        {step.action}
                      </span>
                      <span className={`font-medium ${method.method === 'Traditioneel' ? 'text-primary' : 'text-primary'}`}>
                        {step.time}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-3 border-gray-200">
                  <div className="font-bold text-lg text-primary">
                    Totaal: {method.total}
                  </div>
                  <div className="text-sm text-primary">
                    Status: {method.wakefulness}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Strategies */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Lightbulb className="w-5 h-5 mr-2" />
            Top 3 Optimalisatie Strategieën
          </h2>
          
          <div className="space-y-4">
            {optimizationStrategies.map((strategy, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-primary">{strategy.strategy}</h3>
                  <div className="text-right">
                    <div className="text-primary font-bold text-sm">{strategy.timeReduction}</div>
                    <div className="text-primary text-xs">{strategy.effectiveness}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Implementatie stappen:</h4>
                    <ul className="space-y-1">
                      {strategy.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-sm text-primary flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Essentials */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Nachtvoeding Equipment</h2>
          
          {equipmentEssentials.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-medium text-primary mb-3">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-primary">{item.name}</h4>
                      <span className="text-primary font-medium text-sm">{item.price}</span>
                    </div>
                    <p className="text-sm text-primary">{item.benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-primary mb-2">DIY Nachtvoeding Station Checklist:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-primary">
              <div>
                <h5 className="font-medium">Naast het bed:</h5>
                <ul className="space-y-1 mt-1">
                  <li>• Thermosfles met warm water</li>
                  <li>• 2-3 flesjes met poeder</li>
                  <li>• Tissues en doekjes</li>
                  <li>• Rode nachtlamp</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium">In slaapkamer baby:</h5>
                <ul className="space-y-1 mt-1">
                  <li>• Stille flessenwarmer</li>
                  <li>• Extra speen en luiers</li>
                  <li>• White noise machine</li>
                  <li>• Comfortabele stoel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Age-Based Strategies */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Strategieën per Leeftijd</h2>
          
          <div className="space-y-4">
            {ageBasedStrategies.map((phase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-bold text-primary text-lg">{phase.age}</h3>
                    <div className="text-sm text-primary mt-1">
                      <div>Frequentie: {phase.frequency}</div>
                      <div>Verwachting: {phase.sleepExpectation}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-2">{phase.strategy}</h4>
                    <ul className="space-y-1">
                      {phase.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-primary flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Challenges */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Veelvoorkomende Uitdagingen</h2>
          
          <div className="space-y-4">
            {commonChallenges.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-primary mb-2">Probleem:</h3>
                    <p className="text-sm text-primary">{item.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary mb-2">Oplossing: {item.solution}</h3>
                    <ul className="text-sm text-primary space-y-1">
                      {item.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Reference Guide */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Quick Reference: Perfect Nachtvoeding</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-primary mb-3"> Wel doen:</h3>
              <ul className="space-y-2 text-sm text-primary">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                  <span>Alles binnen handbereik klaarzetten</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                  <span>Minimaal licht gebruiken (rood)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                  <span>Dream feeding proberen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                  <span>Routine kort en saai houden</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                  <span>Partner laten uitslapen om de beurt</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-3"> Niet doen:</h3>
              <ul className="space-y-2 text-sm text-primary">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                  <span>Felle verlichting aandoen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                  <span>Praten tegen baby tijdens voeding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                  <span>Luier verschonen tenzij nodig</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                  <span>Spelen of stimuleren</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-gray-200 bg-primary rounded-full"></div>
                  <span>Perfectie nastreven - efficiency is key</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="border border-gray-200 bg-gray-50 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-primary mb-2">"Van 45 naar 12 minuten!" - Michelle, Den Haag</h3>
              <p className="text-sm text-primary">
                "Thermosfles naast bed + pre-made flessen was game-changer. Dream feeding werkt perfect bij Lotte. 
                Ik word nauwelijks meer wakker."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-primary mb-2">"Tag-team redde ons huwelijk" - Jeroen & Sara, Eindhoven</h3>
              <p className="text-sm text-primary">
                "Ik doe maandag/woensdag/vrijdag nachten, Sara di/do/zat. Zondag samen. 
                We slapen nu echt weer en zijn veel gelukkiger."
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h4 className="font-medium text-primary mb-2">Tips van ervaren ouders:</h4>
            <ul className="text-sm text-primary space-y-1">
              <li>• "Perfect Prep machine kopen was beste investering"</li>
              <li>• "Rode nachtlamp werkt echt - geen wit licht meer"</li>  
              <li>• "Dream feeding vanaf week 6 proberen, patience is key"</li>
              <li>• "Luier alleen verschonen bij poop, niet bij plassen"</li>
            </ul>
          </div>
        </div>

        {/* Calculator Link */}
        <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-lg font-semibold text-white mb-3 flex items-center">
            <Calculator className="w-5 h-5 mr-2" />
            Bereken Uw Nachtvoeding Schema
          </h2>
          <p className="text-white/90 mb-4">
            Gebruik onze calculator om een gepersonaliseerd nachtvoeding schema te maken 
            dat past bij de leeftijd en slaappatroon van uw baby.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            <Calculator className="w-4 h-4" />
            <span>Naar Nacht Calculator</span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde Artikelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/praktische-tips"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Praktische Tips →</div>
              <div className="text-sm text-primary">Alle handige tips voor flesvoeding</div>
            </Link>
            <Link 
              href="/kennisbank/voedingstechnieken"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Voedingstechnieken →</div>
              <div className="text-sm text-primary">Juiste technieken voor flesvoeding</div>
            </Link>
          </div>
        </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar 
          images={[
            {
              src: "/mother_and_baby.png",
              alt: "Nachtvoeding optimaliseren",
              caption: "Efficiënte nachtvoeding technieken"
            },
            {
              src: "/baby_feeding.png", 
              alt: "Baby slaap ondersteuning",
              caption: "Meer slaap voor uitgeruste ouders"
            }
          ]}
          adTopics={["Nacht Voeding Producten", "Slaap Hulpmiddelen"]}
        />
      </div>
    </Layout>
  )
}