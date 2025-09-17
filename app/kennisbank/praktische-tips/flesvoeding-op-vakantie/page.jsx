import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Plane, ArrowRight, Home, MapPin, CheckCircle, AlertTriangle, Calculator, Thermometer } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding op Vakantie: Complete Reis Gids Nederlandse Ouders 2025',
  description: 'Stress-vrij reizen met baby en flesvoeding. Alle praktische tips voor vliegtuig, auto, internationale reizen. Van packing lists tot noodplannen voor zorgeloze vakantie.',
}

export default function VakantiePage() {
  const travelAdvantages = [
    'Geen kolf equipment nodig (ruimte besparing)',
    'Partner kan volledig overnemen tijdens reis',
    'Voorspelbare routines makkelijker vol te houden',
    'Geen afhankelijkheid mama\'s dieet of stress',
    'International availability - wereldwijd verkrijgbaar',
    'Meer flexibiliteit in planning'
  ]

  const transportTypes = [
    {
      type: 'Vliegtuig Reizen',
      icon: '',
      pros: ['Formule poeder geen beperking handbagage', 'Pre-mixed >100ml toegestaan met baby', 'Bottle warming service meeste airlines'],
      cons: ['Security extra tijd (15-30 min)', 'Pressure changes baby oren', 'Limited preparation space'],
      tips: 'Takeoff/landing feeding voor ear pressure, extra formule voor delays'
    },
    {
      type: 'Auto Reizen',
      icon: '',
      pros: ['Volledige controle over voorzieningen', 'Flexibele stops schema', 'Onbeperkte bagage ruimte'],
      cons: ['Koeling management uitdaging', 'Weather dependent', 'Long travel times baby'],
      tips: '12V koelbox, stops elke 2-3 uur, reserve routes plannen'
    },
    {
      type: 'Trein Reizen',
      icon: '',
      pros: ['More space movement', 'Onboard facilities', 'Less security restrictions'],
      cons: ['Limited hot water NS', 'Crowded during peak', 'Connection timing critical'],
      tips: 'Family carriages reserveren, thermos meenemen, flexibele tickets'
    }
  ]

  const accommodationTypes = [
    {
      type: 'Hotels',
      features: ['24/7 room service', 'Mini fridge in-room', 'Bottle warming service', 'Baby cot provision'],
      setup: ['Request room near ice machine', 'Mini-bar space formula', 'Bathroom prep counter', 'Emergency contact procedures'],
      advantages: 'Comfort & service, no preparation needed'
    },
    {
      type: 'Vacation Rentals',
      features: ['Full kitchen facilities', 'Washer/dryer', 'More space', 'Cost effective'],
      setup: ['Organize kitchen baby zone', 'Sterilizing routine', 'Local shopping list', 'Emergency supplies plan'],
      advantages: 'Home comfort, familiar routines, bulk preparation'
    },
    {
      type: 'Camping',
      features: ['High-quality cooler essential', 'Portable heating options', 'Weather protection', 'Emergency communication'],
      setup: ['Water source verification', 'Reserve stroomsystemen', 'Medical facility distance', 'Emergency evacuation plan'],
      advantages: 'Adventure experience, nature connection, budget friendly'
    }
  ]

  const internationalTips = [
    {
      region: 'Zuid-Europa (Spanje, Italië)',
      climate: 'Warm/Hot',
      considerations: ['Heat formula storage challenges', 'Siesta timing impact', 'Late dining culture', 'Pharmacy hours variation'],
      solutions: ['Extra cooling methods', 'Schedule adjustment', 'Air conditioning accommodation', 'Increased hydration needs']
    },
    {
      region: 'Frankrijk',
      climate: 'Temperate',
      considerations: ['Excellent baby product availability', 'High-quality formulas (Gallia)', 'Baby-friendly culture', 'Pharmacy expertise'],
      solutions: ['Local product exploration', 'Monoprix/Carrefour shopping', 'Cultural appreciation', 'Medical system excellent']
    },
    {
      region: 'Exotische Bestemmingen',
      climate: 'Variable',
      considerations: ['Water quality concerns', 'Limited formula availability', 'Medical facilities variable', 'Language barriers'],
      solutions: ['100% formula supply bring', 'Bottled water only', 'Emergency evacuation insurance', 'Embassy registration']
    }
  ]

  const emergencyProtocols = [
    {
      scenario: 'Lost/Damaged Formula',
      immediate: ['Assess remaining supply', 'Locate nearest pharmacy', 'Contact local pediatrician'],
      noodplan: ['Research local brands safety', 'Embassy assistance', 'Insurance documentation'],
      prevention: '25% extra supply always, multiple storage locations'
    },
    {
      scenario: 'Baby Illness During Travel',
      immediate: ['Temperature monitoring', 'Hydration maintenance', 'Medical consultation'],
      noodplan: ['Hospital preparation', 'Travel insurance activation', 'Family support coordination'],
      prevention: 'Comprehensive medical kit, local pediatrician contacts, emergency protocols'
    },
    {
      scenario: 'Formula Rejection New Environment',
      immediate: ['Different temperature try', 'Other caregiver attempt', 'Familiar routine restore'],
      noodplan: ['Medical consultation', 'Gradual environment adaptation', 'Comfort items utilization'],
      prevention: 'Practice changes at home, bring comfort items, gradual transitions'
    }
  ]

  const packingEssentials = {
    handLuggage: [
      '48-hour formula supply minimum',
      '3x more bottles than normal',
      'Speen backups verschillende types',
      'Portable bottle warmer',
      'Thermos pre-filled hot water',
      'Cleaning wipes/sanitizer',
      'Emergency contact information',
      'Medical documents baby'
    ],
    checkedLuggage: [
      'Bulk formula (trip + 25% extra)',
      'Sterilizing equipment portable',
      'Extra bottles/sippy cups',
      'Cleaning supplies bulk',
      'Reserve kleding voor spills',
      'Comfort items (blankets/toys)',
      'Medical kit comprehensive',
      'Local pharmacy research'
    ]
  }

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Praktische Tips • Vakantie</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Plane className="w-6 h-6 mr-3 text-primary" />
                Flesvoeding op Vakantie: Complete Reis Gids
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Reizen met baby en flesvoeding hoeft geen stress te zijn. Leer alle praktische tips 
                voor zorgeloze vakanties met je baby.
              </p>
            </div>

            {/* Why bottle feeding is easier for travel */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Plane className="w-5 h-5 mr-2" />
                Waarom Vakantie met Flesvoeding Makkelijker Is
              </h2>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-4">
                  68% van Nederlandse families reist binnen het eerste jaar na geboorte. 
                  Flesvoeding families ervaren 30% minder reis-stress dan families die kolven.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Flesvoeding Travel Advantages</h3>
                  <div className="space-y-2">
                    {travelAdvantages.map((advantage, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Nederlandse Reis Patronen</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Zomer vakanties:</strong> 80% families juni-augustus</div>
                    <div><strong>Kort breaks:</strong> Weekend trips populair</div>
                    <div><strong>Familie bezoek:</strong> 3x per jaar gemiddeld</div>
                    <div><strong>Buitenland:</strong> 45% internationale destinaties</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-600 text-sm">
                  <strong>ANWB Onderzoek:</strong> Families met flesvoeding ervaren 30% minder 
                  reis-stress dan families die kolven tijdens vakantie.
                </p>
              </div>
            </div>

            {/* Transport-specific strategies */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Transport-Specifieke Strategieën</h2>
              
              <div className="space-y-6">
                {transportTypes.map((transport, index) => (
                  <div key={index} className="p-4">
                    <h3 className="font-semibold text-primary mb-3">
                      {transport.type}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Voordelen:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {transport.pros.map((pro, idx) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Uitdagingen:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {transport.cons.map((con, idx) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="p-2 bg-white rounded text-sm text-gray-600">
                      <strong>Success Tips:</strong> {transport.tips}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accommodation types */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Accommodatie Types & Flesvoeding Setup
              </h2>
              
              <div className="space-y-6">
                {accommodationTypes.map((accommodation, index) => (
                  <div key={index} className="p-4">
                    <h3 className="font-semibold text-primary mb-3">{accommodation.type}</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {accommodation.features.map((feature, idx) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Setup Tips:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {accommodation.setup.map((tip, idx) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="p-2 bg-white rounded text-sm text-gray-600">
                      <strong>Voordeel:</strong> {accommodation.advantages}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* International travel tips */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Internationale Reizen: Land-Specifieke Tips</h2>
              
              <div className="space-y-4">
                {internationalTips.map((region, index) => (
                  <div key={index} className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-primary">{region.region}</h3>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                        {region.climate}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Considerations:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {region.considerations.map((consideration, idx) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{consideration}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Solutions:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {region.solutions.map((solution, idx) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency preparedness */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Emergency Preparedness & Crisis Management
              </h2>
              
              <div className="space-y-6">
                {emergencyProtocols.map((protocol, index) => (
                  <div key={index} className="p-4">
                    <h3 className="font-semibold text-primary mb-3">{protocol.scenario}</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Immediate Response:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {protocol.immediate.map((action, idx) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Noodplan:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {protocol.noodplan.map((plan, idx) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{plan}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="p-2 bg-white rounded text-sm text-gray-600">
                      <strong>Prevention:</strong> {protocol.prevention}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Packing strategies */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Packing Strategies: Complete Lists</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-medium text-primary mb-3">Hand Luggage Essentials</h3>
                  <div className="space-y-2">
                    {packingEssentials.handLuggage.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-medium text-primary mb-3">Checked Luggage Must-Haves</h3>
                  <div className="space-y-2">
                    {packingEssentials.checkedLuggage.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                <h4 className="font-medium text-primary mb-2">Essential Travel Apps</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-primary mb-1">Navigation & Planning:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Google Maps offline (pharmacy locations)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Google Translate (baby/medical terms)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Baby Tracker (feeding schedules)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Weather apps (climate planning)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary mb-1">Baby Care:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>White noise app (sleep routine)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>First aid app (emergency guidance)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Formula calculator (local measurements)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span>Time zone converter (schedules)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasonal considerations */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Thermometer className="w-5 h-5 mr-2" />
                Seizoensgebonden Vakantie Overwegingen
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-medium text-primary mb-3">Zomer Vakanties (Juni-Augustus)</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Uitdagingen:</strong> Formula storage temperature, spoilage risk</div>
                    <div><strong>Oplossingen:</strong> Insulated bags, ice pack rotation, shaded areas</div>
                    <div><strong>Extra behoeften:</strong> Verhoogde hydratatie, cooling reserve</div>
                    <div><strong>Planning:</strong> Climate-controlled accommodation essentieel</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-medium text-primary mb-3">Winter Vakanties (December-Februari)</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Uitdagingen:</strong> Formula freezing, heating reliability</div>
                    <div><strong>Oplossingen:</strong> Thermos equipment, indoor feeding areas</div>
                    <div><strong>Voordelen:</strong> No spoilage concerns, cozy indoor routines</div>
                    <div><strong>Planning:</strong> Reserve verwarmingsbronnen, weather monitoring</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final checklist */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Reis Checklist: 48 Uur Voor Vertrek</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">24 Uur Voor Vertrek:</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Weather forecast check bestemming</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Flight/transport status confirmation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Emergency contacts programmed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Formula expiry dates verified</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-3">Vertrek Dag:</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Normal feeding schedule maintain</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Travel documents easily accessible</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Emergency supplies double-check</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>Positive mindset - vacation mode!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/hygiene-bereiding/flesvoeding-bewaren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Flesvoeding bewaren →</div>
                  <div className="text-gray-600">Reis veiligheid en opslag tips</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Voedingsritme opbouwen →</div>
                  <div className="text-gray-600">Vakantie schema aanpassingen</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/nachtvoeding-optimaliseren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Nachtvoeding optimaliseren →</div>
                  <div className="text-gray-600">Hotel en reis optimalisatie</div>
                </Link>
                <Link href="/kennisbank/praktische-tips" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Alle praktische tips →</div>
                  <div className="text-gray-600">Meer handige ouder tips</div>
                </Link>
              </div>
            </div>

            {/* Calculator CTA */}
            <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Bereken je Reis Formule Behoeften
              </h2>
              <p className="text-white/90 mb-4">
                Plan je vakantie voeding perfect. Bereken exact hoeveel formula je nodig hebt 
                voor je reis, plus emergency buffer.
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
              {
                src: "/difrax-fles-kunstvoeding.webp",
                alt: "Flesvoeding onderweg",
                caption: "Praktisch reizen met flesvoeding"
              },
              {
                src: "/flesvoeding-door-mama.webp",
                alt: "Reizen met baby",
                caption: "Stress-vrij reizen met baby"
              },
              {
                src: "/mother_and_baby.png",
                alt: "Familie vakantie",
                caption: "Gezellige familie tijd op vakantie"
              }
            ]}
            adTopics={[
              'Baby reisuitrusting kopen',
              'Reisverzekering baby vergelijken',
              'Baby-friendly hotels zoeken'
            ]}
          />
        </div>
      </div>
    </Layout>
  )
}