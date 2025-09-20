import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Wind, Clock, Heart, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Boertje Laten Tijdens Voeding: Complete Gids voor Nederlandse Ouders 2025',
  description: 'Een boertje laten tijdens en na de flesvoeding is essentieel voor je baby\'s comfort. Leer de beste technieken, juiste timing en praktische tips om lucht effectief te verwijderen en oncomfortabele buikpijn te voorkomen.',
}

export default function BoertjeLatenPage() {
  const techniques = [
    {
      name: 'De Klassieke Schoudertechniek',
      popularity: 'MEEST POPULAIR',
      steps: [
        'Leg baby rechtop tegen je schouder',
        'Ondersteun het hoofdje met je hand', 
        'Klop zacht maar stevig op de rug (midden tussen schouderbladen)',
        'Gebruik een luier op je schouder voor bescherming'
      ],
      benefits: [
        'Zwaartekracht helpt lucht omhoog',
        'Baby voelt zich veilig tegen je aan',
        'Gemakkelijk vol te houden'
      ],
      tip: 'Beweeg langzaam heen en weer - de zachte beweging stimuleert de spijsvertering'
    },
    {
      name: 'De Zittende Techniek', 
      popularity: 'BESTE VOOR REFLUX',
      steps: [
        'Zet baby rechtop op je schoot',
        'Ondersteun borst en kin met je hand (niet de keel!)',
        'Laat baby iets voorover leunen',
        'Klop met je andere hand zacht op de rug'
      ],
      benefits: [
        'Ideaal voor baby\'s met reflux of veel spugen',
        'Goed voor nieuwgeborenen die nog hoofdsteun nodig hebben',
        'Effectief wanneer de schoudertechniek niet werkt'
      ]
    },
    {
      name: 'De Buiktechniek',
      popularity: 'VOOR HARDNEKKIGE LUCHT', 
      steps: [
        'Leg baby op je schoot, buik naar beneden',
        'Hoofd iets hoger dan lichaam (gebruik je dij)',
        'Steun het hoofd goed met je hand',
        'Wrijf in cirkelvormige bewegingen over de rug'
      ],
      benefits: [
        'Effectief voor hardnekkige lucht',
        'Goede variatie als andere methoden niet werken'
      ],
      warning: 'Alleen gebruiken bij baby\'s die hun hoofdje al kunnen optillen (vanaf 6-8 weken)'
    }
  ]

  const timingGuide = [
    { age: '0-6 weken', interval: 'Na elke 30ml', reason: 'Kleine maag, veel lucht' },
    { age: '6-12 weken', interval: 'Na elke 60ml', reason: 'Betere controle, minder vaak' },
    { age: '3+ maanden', interval: 'Halverwege fles', reason: 'Minder gevoelig voor lucht' }
  ]

  const commonProblems = [
    {
      problem: 'Mijn Baby Laat Geen Boertje',
      causes: [
        'Baby heeft weinig lucht ingeslikt',
        'Lucht zit nog vast in de slokdarm', 
        'Baby is te moe of gespannen'
      ],
      solutions: [
        'Probeer verschillende houdingen - Wissel tussen technieken',
        'Beweeg de baby - Zachte wiegbeweging kan helpen',
        'Masseer de buik - Cirkelvormige bewegingen met de klok mee',
        'Wacht even - Soms komt het boertje later vanzelf'
      ]
    },
    {
      problem: 'Baby Spuugt Ondanks Boertje',
      causes: [
        'Te veel melk gedronken',
        'Te snel gedronken',
        'Nog lucht in maag na boertje'
      ],
      solutions: [
        'Kleinere porties geven',
        'Langzamer voeden met pauzes',
        'Langer rechtop houden na voeding',
        'Overweeg anti-koliek speen'
      ]
    },
    {
      problem: 'Boertje Duurt Erg Lang',
      causes: [
        'Baby is gespannen',
        'Verkeerde techniek', 
        'Te veel lucht ingeslikt'
      ],
      solutions: [
        'Begin met buikmassage',
        'Probeer baby in beweging (wandelen)',
        'Controleer speen - misschien te veel lucht door gat',
        'Blijf geduldig - forceren werkt niet'
      ]
    }
  ]

  const practicalTips = [
    {
      category: 'Thuis Routine',
      tips: [
        'Warm doekje klaarleggen (tegen spugen)',
        'Rustige omgeving creëren (dimmen licht)',
        'Zachte achtergrondmuziek (kalmeert baby)',
        'Verschillende technieken proberen',
        'Geduld houden - soms duurt het even'
      ]
    },
    {
      category: 'Nachtvoeding Tips', 
      tips: [
        'Gebruik dimmer licht',
        'Blijf zitten/liggen tijdens boertje laten',
        'Probeer de zittende techniek (minder beweging)',
        'Maximum 10 minuten proberen'
      ]
    },
    {
      category: 'Onderweg Tips',
      tips: [
        'Stop veilig voor boertje laten (in de auto)',
        'Gebruik draagzak voor hands-free',
        'Luier altijd bij de hand',
        'Zoek rustige plek in het openbaar'
      ]
    }
  ]

  const speenTypes = [
    {
      type: 'Anti-Koliek Spenen',
      brands: ['MAM Easy Start', 'Philips Avent Natural', 'Tommee Tippee Closer to Nature'],
      benefits: [
        'Speciaal ventilatie systeem',
        'Minder lucht inslikken', 
        'Minder boertje laten nodig'
      ]
    },
    {
      type: 'Standaard Spenen',
      attention: [
        'Regelmatiger boertje laten',
        'Langzamer voeden',
        'Speen vervangen bij slijtage'
      ]
    }
  ]

  const warningSignsDoctor = [
    'Baby huilt excessief na elke voeding (3+ uren per dag)',
    'Gewichtsverlies ondanks voldoende voeding', 
    'Projectielspugen (krachtig spugen over grote afstand)',
    'Chronische buikpijn die niet verbetert',
    'Verandering in huil- of slaappatroon'
  ]

  const faqData = [
    {
      question: 'Hoe lang moet ik proberen een boertje te krijgen?',
      answer: '5-15 minuten is normaal. Als er na 15 minuten geen boertje komt, stop dan. De lucht komt vaak later vanzelf nog.'
    },
    {
      question: 'Is het erg als mijn baby geen boertje laat?',
      answer: 'Niet alle baby\'s hebben na elke voeding een boertje nodig. Zolang je baby tevreden is en niet huilt van buikpijn, is het prima.'
    },
    {
      question: 'Kan ik teveel kloppen op de rug?',
      answer: 'Klop stevig maar niet hard. Het moet aanvoelen als het tempo van een hartslag. Baby\'s zijn steviger dan je denkt.'
    },
    {
      question: 'Moet ik \'s nachts ook boertje laten?',
      answer: 'Ja, ook \'s nachts. Probeer wel rustiger technieken en dimmer licht om de baby niet teveel wakker te maken.'
    },
    {
      question: 'Wanneer stoppen met boertje laten?',
      answer: 'De meeste baby\'s hebben na 6 maanden minder hulp nodig. Rond 9-12 maanden kunnen ze vaak zelf boeren.'
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Voedingstechnieken  Boertje Laten</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Wind className="w-6 h-6 mr-3 text-primary" />
                Boertje Laten Tijdens Voeding: Complete Gids voor Nederlandse Ouders
              </h1>
              <p className="text-gray-600">
                Een boertje laten tijdens en na de flesvoeding is essentieel voor je baby's comfort. 
                Leer de beste technieken, juiste timing en praktische tips om lucht effectief te verwijderen 
                en oncomfortabele buikpijn te voorkomen.
              </p>
            </div>

            {/* Why Important */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Waarom is Boertje Laten Zo Belangrijk?</h2>
              
              <p className="text-gray-500 mb-4">
                Tijdens het drinken van flesvoeding slikt je baby onvermijdelijk lucht mee. 
                Deze ingesloten lucht kan leiden tot verschillende ongemakken:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Buikpijn en krampjes</strong> - Luchtbellen in de maag veroorzaken oncomfort</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Overmatig spugen</strong> - Te veel lucht zorgt voor druk in de maag</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Onrustige slaap</strong> - Lucht in het darmstelsel houdt baby's wakker</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Vervroegd stoppen met drinken</strong> - Een volle maag door lucht beperkt de voedselinname</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 border border-gray-200 bg-white rounded-xl">
                <p className="text-gray-700">
                  <strong>Onderzoek toont aan</strong> dat baby's die regelmatig een boertje laten tot 40% minder last hebben van koliekklachten.
                </p>
              </div>
            </div>

            {/* Best Techniques */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">De Beste Technieken voor Boertje Laten</h2>
              
              <div className="space-y-6">
                {techniques.map((technique, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-700">{technique.name}</h3>
                      <span className="text-xs bg-white text-gray-700 px-2 py-1 rounded-full">
                        {technique.popularity}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Stappen:</h4>
                        <ol className="space-y-1 text-gray-700">
                          {technique.steps.map((step, stepIndex) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-primary font-medium">{stepIndex + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-primary mb-2">Voordelen:</h4>
                        <ul className="space-y-1 text-gray-700">
                          {technique.benefits.map((benefit, benefitIndex) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {technique.tip && (
                      <div className="p-3 border border-gray-200 bg-white rounded-lg">
                        <p className="text-gray-700">
                          <strong>Tip:</strong> {technique.tip}
                        </p>
                      </div>
                    )}
                    
                    {technique.warning && (
                      <div className="p-3 border border-gray-200 bg-white rounded-lg">
                        <p className="text-gray-700">
                          <strong>Let op:</strong> {technique.warning}
                        </p>
                      </div>
                    )}
                    
                    {index < techniques.length - 1 && (
                      <div className="border-b border-gray-200 mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Timing Guide */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Timing: Wanneer Boertje Laten?
              </h2>
              
              <div className="mb-6">
                <h3 className="font-medium text-primary mb-3">Tijdens de Voeding (Preventief)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-white">
                        <th className="border border-gray-300 px-4 py-2 text-left">Leeftijd Baby</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Boertje Moment</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Reden</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timingGuide.map((item, index) => (
                        <tr key={index} className={index % 2 === 1 ? "bg-white" : ""}>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">{item.age}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.interval}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-3">Na de Voeding (Altijd)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Minimaal 5-10 minuten</strong> proberen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Maximaal 15 minuten</strong> - anders wordt baby moe</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Blijf proberen ook als er geen boertje komt</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Practical Tips */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Praktische Tips van Ervaren Ouders</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {practicalTips.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-3">{section.category}</h3>
                    <ul className="space-y-2">
                      {section.tips.map((tip, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Problems */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelvoorkomende Problemen & Oplossingen</h2>
              
              <div className="space-y-6">
                {commonProblems.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-3">{item.problem}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Normale oorzaken:</h4>
                        <ul className="space-y-1 text-gray-700">
                          {item.causes.map((cause, causeIndex) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Oplossingen:</h4>
                        <ul className="space-y-1 text-gray-700">
                          {item.solutions.map((solution, solutionIndex) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {index < commonProblems.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Speen Types */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Boertje Laten en Verschillende Spenen</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {speenTypes.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-3">{item.type}</h3>
                    
                    {item.brands && (
                      <div className="mb-3">
                        <h4 className="font-medium text-primary mb-2">Populaire merken:</h4>
                        <ul className="space-y-1 text-gray-700">
                          {item.brands.map((brand, brandIndex) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{brand}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.benefits && (
                      <div>
                        <h4 className="font-medium text-primary mb-2">Voordelen:</h4>
                        <ul className="space-y-1 text-gray-700">
                          {item.benefits.map((benefit, benefitIndex) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.attention && (
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Extra aandacht voor:</h4>
                        <ul className="space-y-1 text-gray-700">
                          {item.attention.map((point, pointIndex) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* When to See Doctor */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Wanneer Naar de Huisarts?
              </h2>
              
              <p className="text-gray-700 mb-4">
                Contact opnemen bij:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {warningSignsDoctor.map((sign, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-4 border border-gray-200 bg-white rounded-lg">
                <p className="text-gray-700">
                  <strong>Vertrouw altijd op je ouderinstinct</strong> - je kent je baby het beste.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgestelde Vragen (FAQ)</h2>
              
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-2">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                    {index < faqData.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Conclusie: Geduld en Oefening</h2>
              
              <p className="text-gray-700 mb-4">
                Boertje laten is een vaardigheid die je als ouder ontwikkelt. Elke baby is anders - 
                wat bij de ene baby werkt, hoeft bij de andere niet te werken. <strong>Geduld, 
                verschillende technieken proberen en vertrouwen op je instinct</strong> zijn de sleutels tot succes.
              </p>
              
              <div className="p-4 border border-gray-200 bg-white rounded-xl">
                <p className="text-gray-700">
                  <strong>Onthoud:</strong> Een tevreden baby die goed drinkt en groeit, doet het goed - 
                  ook al laat niet elke keer een perfect boertje.
                </p>
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
                  href="/kennisbank/problemen-oplossen"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="font-medium text-gray-700">Problemen Oplossen </div>
                  <div className="text-gray-600">Hulp bij voedingsproblemen</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar 
          images={[
            {
              src: "/borstvoeding-3.webp",
              alt: "Boertje laten technieken tijdens voeding",
              caption: "Juiste technieken voor effectief boertje laten"
            },
            {
              src: "/slapende-baby-2.webp", 
              alt: "Tevreden baby na boertje",
              caption: "Een tevreden baby na succesvolle voeding"
            },
            {
              src: "/baby-met-fopspeen.webp",
              alt: "Baby comfort na voeding",
              caption: "Comfort en rust na de voeding"
            }
          ]}
          adTopics={["Baby Comfort", "Voedingstechnieken"]}
        />
      </div>
    </Layout>
  )
}