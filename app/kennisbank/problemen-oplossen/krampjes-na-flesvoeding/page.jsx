import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { AlertTriangle, Clock, Heart, Thermometer, Search, Shield } from 'lucide-react'

export const metadata = {
  title: 'Krampjes na Flesvoeding: Complete Gids voor Nederlandse Ouders 2025',
  description: 'Krampjes na flesvoeding zijn de #2 zorg van Nederlandse ouders na spugen. Leer de oorzaken herkennen, effectieve oplossingen toepassen, en wanneer je medische hulp moet zoeken. Praktische tips die echt werken.',
}

export default function KrampjesNaFlesvoedingPage() {
  const recognitionSignals = [
    {
      category: 'Lichamelijke Signalen',
      signals: [
        'Benen optrekken naar buik tijdens huilen',
        'Boog maken met rug (hyperextensie)',
        'Gebalde vuistjes tijdens huilbuien',
        'Harde, gespannen buik bij aanraking',
        'Rood aangezicht door persen en huilen'
      ]
    },
    {
      category: 'Timing Patronen',
      signals: [
        'Start 30-60 minuten na voeding',
        'Duurt 15-45 minuten per episode',
        'Vooral \'s avonds tussen 17:00-22:00',
        'Piek rond 6-8 weken leeftijd',
        'Vermindert na 3-4 maanden'
      ]
    },
    {
      category: 'Gedragskenmerken',
      signals: [
        'Ontroosstbaar huilen ondanks honger/slaap/luier ok',
        'Cyclisch patroon - zelfde tijd elke dag',
        'Verlichting na winden/poepen laten',
        'Rusteloos bewegen met benen',
        'Moeilijk in slaap komen na voeding'
      ]
    }
  ]

  const differentialDiagnosis = [
    {
      symptom: 'Timing',
      krampjes: 'Na voeding',
      reflux: 'Direct na voeding',
      honger: 'Voor voeding',
      overstimulatie: 'Willekeurig'
    },
    {
      symptom: 'Lichaamshouding',
      krampjes: 'Benen opgetrokken',
      reflux: 'Rug strak',
      honger: 'Zuigbewegingen',
      overstimulatie: 'Wegkijken'
    },
    {
      symptom: 'Troost',
      krampjes: 'Moeilijk',
      reflux: 'Rechtop houden',
      honger: 'Voeding',
      overstimulatie: 'Rustige omgeving'
    },
    {
      symptom: 'Duur',
      krampjes: '15-45 min',
      reflux: 'Kort na voeding',
      honger: 'Tot voeding',
      overstimulatie: 'Variabel'
    }
  ]

  const causes = [
    {
      category: 'Voeding-Gerelateerde Oorzaken',
      causes: [
        {
          cause: 'Lucht in Maag/Darmen',
          percentage: '40%',
          description: 'Verkeerde speen of voedingstechniek',
          solution: 'Anti-koliek spenen en betere boertje techniek'
        },
        {
          cause: 'Moeilijke Vertering',
          percentage: '25%',
          description: 'Koemelkeiwitten, caseine is zwaarder verteerbaar',
          solution: 'Overweeg speciale voeding na 2 weken'
        },
        {
          cause: 'Verkeerde Temperatuur',
          percentage: '15%',
          description: 'Te koud veroorzaakt maagkrampen',
          solution: 'Consistent lichaamswarmte aanhouden'
        }
      ]
    },
    {
      category: 'Biologische Factoren',
      causes: [
        {
          cause: 'Onvolgroeide Spijsvertering',
          percentage: '60%',
          description: 'Enzymsysteem ontwikkelt tot 3-4 maanden',
          solution: 'Geduld en comfort maatregelen'
        },
        {
          cause: 'Microbioom Ontwikkeling',
          percentage: '20%',
          description: 'Darmflora stabiliseert rond 2-3 maanden',
          solution: 'Overweeg infant probiotics'
        }
      ]
    }
  ]

  const solutions = [
    {
      category: 'Anti-Koliek Speen Upgrade',
      effectiveness: 'MEEST EFFECTIEF',
      options: [
        {
          name: 'Dr. Brown\'s Options',
          features: 'Volledig vacuum eliminatie systeem',
          effectiveness: '85% minder lucht inslikken',
          price: '€6-8 per speen'
        },
        {
          name: 'MAM Easy Start',
          features: 'Zelf-steriliserend systeem, Silk-texture',
          effectiveness: 'Breed geaccepteerd door baby\'s',
          price: '€4-6 per speen'
        },
        {
          name: 'Tommee Tippee Anti-Colic',
          features: 'Star valve technologie',
          effectiveness: 'Goede prijs/kwaliteit',
          price: '€3-5 per speen'
        }
      ]
    }
  ]

  const feedingTechnique = [
    {
      phase: 'VOOR VOEDING',
      steps: [
        'Rustige omgeving creëren',
        'Baby niet te hongerig laten worden',
        'Speen controleren op beschadigingen'
      ]
    },
    {
      phase: 'TIJDENS VOEDING',
      steps: [
        '45° hoek aanhouden (niet plat)',
        'Elke 30-40ml pauzeren voor boertje',
        'Langzaam voeden (15-20 min totaal)',
        'Fles draaien om lucht te voorkomen'
      ]
    },
    {
      phase: 'NA VOEDING',
      steps: [
        'Minimaal 10 minuten boertje proberen',
        '20-30 minuten rechtop houden',
        'Zachte buikmassage geven',
        'Rustige activiteiten (geen wild spelen)'
      ]
    }
  ]

  const physicalComfort = [
    {
      technique: 'Buikmassage Protocol',
      effectiveness: 'DIRECT EFFECT',
      steps: [
        'Start rechtsonder (appendix gebied)',
        'Massage met klok mee omhoog (5 cirkels)',
        'Dwars over buik van rechts naar links',
        'Omlaag langs linkerzijde',
        'Herhaal 3-5 minuten zacht'
      ],
      timing: [
        '30 min na voeding (niet direct)',
        'Bij eerste krampje signalen',
        'Voor slaap als preventie',
        'Met warme handen (opwarmen eerst)'
      ]
    },
    {
      technique: 'Positie Therapie',
      effectiveness: 'COMFORT',
      positions: [
        {
          name: 'Colic Carry',
          description: 'Baby op buik langs onderarm, hoofd bij elleboog',
          duration: 'Max 10-15 minuten'
        },
        {
          name: 'Bicycle Legs',
          description: 'Voorzichtig benen bewegen alsof fietsen',
          duration: '30 seconden per richting'
        }
      ]
    }
  ]

  const ageSpecificApproach = [
    {
      age: '0-6 Weken: Survival Mode',
      expectations: [
        'Peak periode: Krampjes zijn normaal en frequent',
        'Duur: Kan 3-4 uur per dag zijn',
        'Timing: Vooral \'s avonds (purple crying period)',
        'Focus: Comfort en overleven, niet "oplossen"'
      ],
      toolkit: [
        'Anti-koliek spenen (2-3 verschillende)',
        'Infant gas drops (Infacol/Espumisan)',
        'Draagzak voor hands-free troost',
        'White noise app',
        'Support netwerk (familie/vrienden)',
        'Professionele backup (consultatiebureau nummer)'
      ]
    },
    {
      age: '6-12 Weken: Verbetering Zoeken',
      approach: [
        'Week 6: Focus op voedingstechniek',
        'Week 8: Comfort maatregelen',
        'Week 10: Medische evaluatie bij geen verbetering'
      ],
      actions: [
        'Nieuwe spenen proberen',
        'Voedingsfrequentie aanpassen',
        'Fysieke technieken toevoegen',
        'Bij geen verbetering: arts consulteren'
      ]
    },
    {
      age: '3-4 Maanden: Uitfasering',
      improvements: [
        'Spijsvertering volgroeid: Minder krampjes',
        'Microbioom stabiel: Betere vertering',
        'Meer alertheid: Afleiding mogelijk',
        'Betere communicatie: Signalen duidelijker'
      ],
      strategy: [
        'Behoud wat werkt (niet te vroeg stoppen)',
        'Geleidelijk afbouwen hulpmiddelen',
        'Nieuwe uitdagingen (vaste voeding voorbereiden)'
      ]
    }
  ]

  const medicalHelp = [
    {
      urgency: 'DIRECT MEDISCHE HULP (Binnen 24 uur)',
      icon: AlertTriangle,
      color: 'text-red-600',
      symptoms: [
        'Projectielspugen + krampjes',
        'Koorts (>38°C rectaal)',
        'Geen natte luiers 6+ uur',
        'Gewichtsverlies of geen groei',
        'Bloederig spuugsel of ontlasting',
        'Extreme lethargie tussen huilbuien'
      ]
    },
    {
      urgency: 'REGULIERE CONSULTATIE (Binnen week)',
      icon: Clock,
      color: 'text-orange-600',
      symptoms: [
        '>3 uur huilen per dag voor 3+ weken',
        'Geen verbetering na 2 weken anti-koliek maatregelen',
        'Familie stress wordt onhoudbaar',
        'Slaap deprivatie ouders extreme niveau'
      ]
    },
    {
      urgency: 'ZELF BEHANDELING VOORTZETTEN',
      icon: Heart,
      color: 'text-green-600',
      symptoms: [
        'Krampjes <2 uur per dag gemiddeld',
        'Verbetering zichtbaar week op week',
        'Baby groeit normaal (groeicurve)',
        'Vrolijke periodes tussen krampjes'
      ]
    }
  ]

  const dailyRoutine = [
    {
      timeframe: 'Ochtend Routine (6:00-12:00)',
      tasks: [
        'Rustige ochtendvoeding (geen haast)',
        'Uitgebreide boertje tijd (10+ min)',
        'Buikmassage na voeding',
        'Actieve speeltijd (bevorert vertering)',
        'Observeer stemming/comfort level'
      ]
    },
    {
      timeframe: 'Middag Routine (12:00-17:00)',
      tasks: [
        'Consistent voedingsschema aanhouden',
        'Preventieve buikmassage voor voeding',
        'Anti-koliek speen controleren',
        'Korte wandeling na voeding (beweging helpt)',
        'Rustige middag activiteiten'
      ]
    },
    {
      timeframe: 'Avond Routine (17:00-22:00)',
      tasks: [
        'Extra langzame voeding (prime krampje tijd)',
        'Dimmer licht (vermindert overstimulatie)',
        'Langere boertje sessies',
        'Comfort maatregelen ready',
        'Partner support organiseren'
      ]
    }
  ]

  const faqData = [
    {
      question: 'Hoe lang duren krampjes gemiddeld?',
      answer: 'De meeste baby\'s hebben de ergste krampjes tussen 6-12 weken. Verbetering is meestal zichtbaar na 16 weken, volledig weg rond 4-5 maanden.'
    },
    {
      question: 'Kunnen krampjes worden voorkomen?',
      answer: 'Volledig voorkomen niet, maar met anti-koliek spenen, goede voedingstechniek en comfort maatregelen kunnen ze tot 70% worden verminderd.'
    },
    {
      question: 'Is speciale voeding altijd nodig?',
      answer: 'Nee, de meeste krampjes zijn niet voeding-gerelateerd maar door onvolgroeide spijsvertering. Start eerst met techniek aanpassingen.'
    },
    {
      question: 'Kunnen probiotics helpen?',
      answer: 'Ja, specifieke infant probiotics (Lactobacillus reuteri) tonen 50% verbetering in studies. Altijd eerst arts raadplegen.'
    },
    {
      question: 'Wanneer worden krampjes zorgelijk?',
      answer: 'Als baby >3 uur per dag huilt, niet groeit, koorts heeft, of extreme symptomen toont. Bij twijfel altijd medische hulp zoeken.'
    }
  ]

  const myths = [
    {
      myth: 'Krampjes zijn altijd door de voeding',
      fact: '60% van krampjes komt door onvolgroeide spijsvertering, niet specifieke voeding problemen.'
    },
    {
      myth: 'Anti-koliek flessen zijn marketing',
      fact: 'Wetenschappelijk bewezen dat ze luchtinname met 80% kunnen verminderen.'
    },
    {
      myth: 'Krampjes duuren tot 1 jaar',
      fact: 'Echte koliek/krampjes verdwijnen meestal rond 4-5 maanden. Langer kan andere oorzaken hebben.'
    },
    {
      myth: 'Borstvoeding baby\'s krijgen geen krampjes',
      fact: 'Ook borstvoeding baby\'s kunnen krampjes hebben, wel 50% minder frequent.'
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
              <div className="text-sm text-gray-500 mb-2">Problemen Oplossen  Krampjes</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                Krampjes na Flesvoeding: Complete Gids voor Nederlandse Ouders
              </h1>
              <p className="text-gray-500">
                Krampjes na flesvoeding zijn de #2 zorg van Nederlandse ouders na spugen. 
                Leer de oorzaken herkennen, effectieve oplossingen toepassen, en wanneer je medische hulp moet zoeken. 
                Praktische tips die echt werken.
              </p>
            </div>

            {/* Why So Common */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Waarom Krampjes zo Veelvoorkomend Zijn</h2>
              
              <p className="text-gray-700 mb-4">
                <strong>65% van flesvoeding baby's</strong> ervaart regelmatig krampjes in de eerste 4 maanden. 
                Bij borstvoeding baby's is dit slechts 35%. Het verschil ligt in de vertering van flesvoeding 
                en de hoeveelheid lucht die wordt ingeslikt.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-primary mb-2">Waarom Flesvoeding Meer Krampjes Veroorzaakt:</h3>
                  <ul className="space-y-1">
                    {[
                      'Andere eiwitstructuur - Koemelkeiwitten zijn moeilijker te verteren',
                      'Lucht inslikken - Speen en fles bevorderen luchtinname',
                      'Snellere voeding - Baby\'s drinken vaak sneller dan borst',
                      'Lactose concentratie - Kunstmatige lactose kan anders verteren',
                      'Temperatuur verschillen - Niet altijd lichaamswarmte'
                    ].map((cause, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Erasmus MC Onderzoek:</strong> Anti-koliek maatregelen kunnen krampjes met 70% verminderen 
                    wanneer systematisch toegepast.
                  </p>
                </div>
              </div>
            </div>

            {/* Recognition Signals */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Krampjes Herkennen: Signalen & Symptomen
              </h2>
              
              <div className="space-y-6">
                {recognitionSignals.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-3">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.signals.map((signal, signalIndex) => (
                        <li key={signalIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{signal}</span>
                        </li>
                      ))}
                    </ul>
                    {index < recognitionSignals.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 border border-gray-200 bg-gray-50 rounded-xl font-mono text-sm">
                <h4 className="font-medium text-primary mb-2">TYPISCH KRAMPJE PATROON:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Start 30-60 minuten na voeding</span></li>
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Duurt 15-45 minuten per episode</span></li>
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Vooral 's avonds tussen 17:00-22:00</span></li>
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Piek rond 6-8 weken leeftijd</span></li>
                  <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Vermindert na 3-4 maanden</span></li>
                </ul>
              </div>
            </div>

            {/* Differential Diagnosis */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Verschil: Krampjes vs Andere Problemen</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Symptoom</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Krampjes</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Reflux</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Honger</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Overstimulatie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {differentialDiagnosis.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium text-gray-900">{item.symptom}</td>
                        <td className="py-3 px-4 text-gray-700 font-medium">{item.krampjes}</td>
                        <td className="py-3 px-4 text-gray-700">{item.reflux}</td>
                        <td className="py-3 px-4 text-gray-700">{item.honger}</td>
                        <td className="py-3 px-4 text-gray-700">{item.overstimulatie}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Causes */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Oorzaken van Krampjes na Flesvoeding</h2>
              
              <div className="space-y-6">
                {causes.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="font-medium text-gray-900 mb-4">{category.category}</h3>
                    <div className="space-y-4">
                      {category.causes.map((cause, causeIndex) => (
                        <div key={causeIndex} className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-700">{cause.cause}</h4>
                            <span className="text-sm font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {cause.percentage}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{cause.description}</p>
                          <p className="text-sm font-medium text-gray-900">
                            <strong>Oplossing:</strong> {cause.solution}
                          </p>
                        </div>
                      ))}
                    </div>
                    {categoryIndex < causes.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Effectieve Oplossingen per Oorzaak</h2>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">Anti-Koliek Speen Upgrade</h3>
                  <span className="text-sm font-medium bg-primary text-white px-2 py-1 rounded">
                    MEEST EFFECTIEF
                  </span>
                </div>
                
                <div className="space-y-4">
                  {solutions[0].options.map((option, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-700">{option.name}</h4>
                        <span className="text-sm text-gray-600">{option.price}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">{option.features}</p>
                      <p className="text-sm font-medium text-gray-900">{option.effectiveness}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feeding Technique */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Voedingstechniek Optimalisatie</h3>
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl font-mono text-sm">
                  <h4 className="font-medium text-primary mb-3">STAP-VOOR-STAP KRAMPJE PREVENTIE:</h4>
                  <div className="space-y-4">
                    {feedingTechnique.map((phase, index) => (
                      <div key={index}>
                        <h5 className="font-medium text-gray-900 mb-2">{phase.phase}:</h5>
                        <ul className="space-y-1 ml-4">
                          {phase.steps.map((step, stepIndex) => (
                            <li key={stepIndex}>- {step}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Comfort */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Fysieke Comfort Technieken</h2>
              
              <div className="space-y-6">
                {physicalComfort.map((comfort, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-gray-900">{comfort.technique}</h3>
                      <span className="text-sm font-medium bg-primary text-white px-2 py-1 rounded">
                        {comfort.effectiveness}
                      </span>
                    </div>
                    
                    {comfort.steps && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Techniek "CLOCKWISE COMFORT":</h4>
                        <ol className="space-y-1">
                          {comfort.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start space-x-2">
                              <span className="font-medium text-gray-700">{stepIndex + 1}.</span>
                              <span className="text-sm text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                    
                    {comfort.timing && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Timing:</h4>
                        <ul className="space-y-1">
                          {comfort.timing.map((time, timeIndex) => (
                            <li key={timeIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{time}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {comfort.positions && (
                      <div>
                        <h4 className="font-medium text-primary mb-2">Posities:</h4>
                        <div className="space-y-3">
                          {comfort.positions.map((position, posIndex) => (
                            <div key={posIndex} className="p-3 border border-gray-200 bg-gray-50 rounded">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium text-gray-900">"{position.name}"</span>
                                <span className="text-sm text-gray-600">{position.duration}</span>
                              </div>
                              <p className="text-sm text-gray-700">{position.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {index < physicalComfort.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Age Specific Approach */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Leeftijd-Specifieke Aanpak</h2>
              
              <div className="space-y-6">
                {ageSpecificApproach.map((age, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-3">{age.age}</h3>
                    
                    {age.expectations && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Verwachtingen Bijstellen:</h4>
                        <ul className="space-y-1">
                          {age.expectations.map((expectation, expIndex) => (
                            <li key={expIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{expectation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {age.toolkit && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Essential Toolkit:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {age.toolkit.map((tool, toolIndex) => (
                            <div key={toolIndex} className="flex items-center space-x-2">
                              <span className="text-gray-600">□</span>
                              <span className="text-sm text-gray-700">{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {age.approach && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Systematische Aanpak:</h4>
                        <ul className="space-y-1">
                          {age.approach.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-gray-700 font-mono p-2 border border-gray-200 bg-gray-50 rounded">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {age.improvements && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Natuurlijke Verbetering:</h4>
                        <ul className="space-y-1">
                          {age.improvements.map((improvement, impIndex) => (
                            <li key={impIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{improvement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {age.actions && (
                      <div>
                        <h4 className="font-medium text-primary mb-2">Acties:</h4>
                        <ul className="space-y-1">
                          {age.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {age.strategy && (
                      <div>
                        <h4 className="font-medium text-primary mb-2">Overgangsstrategie:</h4>
                        <ul className="space-y-1">
                          {age.strategy.map((item, stratIndex) => (
                            <li key={stratIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Medical Help */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Wanneer Professionele Hulp Zoeken</h2>
              
              <div className="space-y-6">
                {medicalHelp.map((help, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-3">
                      <help.icon className={`w-5 h-5 mr-2 ${help.color}`} />
                      <h3 className={`font-medium ${help.color}`}>{help.urgency}</h3>
                    </div>
                    <ul className="space-y-2">
                      {help.symptoms.map((symptom, symptomIndex) => (
                        <li key={symptomIndex} className="flex items-start space-x-2">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            help.color === 'text-red-600' ? 'bg-red-400' : 
                            help.color === 'text-orange-600' ? 'bg-orange-400' : 'bg-green-400'
                          }`}></div>
                          <span className="text-sm text-gray-700">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                    {index < medicalHelp.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Routine */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Dagelijkse Routine Anti-Krampjes
              </h2>
              
              <div className="space-y-4">
                {dailyRoutine.map((routine, index) => (
                  <div key={index} className="p-4">
                    <h3 className="font-medium text-primary mb-3">{routine.timeframe}</h3>
                    <div className="space-y-2">
                      {routine.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center space-x-2">
                          <span className="text-gray-600">□</span>
                          <span className="text-sm text-gray-700">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgestelde Vragen (FAQ)</h2>
              
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-sm text-gray-700">{item.answer}</p>
                    {index < faqData.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Myths Debunked */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Mythen Ontkracht</h2>
              
              <div className="space-y-4">
                {myths.map((myth, index) => (
                  <div key={index} className="p-4">
                    <div className="mb-2">
                      <span className="text-red-600 font-medium"> "{myth.myth}"</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      <strong>Feit:</strong> {myth.fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Conclusie: Geduld, Systematiek en Steun</h2>
              
              <p className="text-gray-700 mb-4">
                Krampjes na flesvoeding zijn een <strong>tijdelijke maar intense fase</strong> in het ouderschap. 
                <strong>Systematische aanpak</strong> met de juiste tools en technieken kan het verschil maken 
                tussen overleven en gedijen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-primary mb-2">Kernprincipes:</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Start met basics: Anti-koliek spenen en goede voedingstechniek</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Wees geduldig: Meeste oplossingen hebben 1-2 weken nodig</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Zoek steun: Je hoeft dit niet alleen te doen</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Vertrouw je instinct: Bij twijfel altijd medische hulp zoeken</span></li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Dit gaat voorbij.</strong> Elke week wordt het iets makkelijker. 
                    De investering in de juiste aanpak nu betekent meer slaap en minder stress voor het hele gezin.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde Artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link 
                  href="/kennisbank/problemen-oplossen"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="font-medium text-gray-700">Problemen Oplossen </div>
                  <div className="text-sm text-gray-600">Alle oplossingen voor flesvoeding problemen</div>
                </Link>
                <Link 
                  href="/kennisbank/voedingstechnieken/verschillende-spenen-uitproberen"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="font-medium text-gray-700">Spenen Uitproberen </div>
                  <div className="text-sm text-gray-600">Anti-koliek spenen voor minder krampjes</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar 
          images={[
            {
              src: "/borstvoeding-2.webp",
              alt: "Rustige baby tijdens voeding voor krampjes preventie",
              caption: "Comfort technieken voor een tevreden baby"
            },
            {
              src: "/baby-met-fopspeen.webp", 
              alt: "Baby met fopspeen tegen krampjes",
              caption: "Comfort maatregelen die werken"
            },
            {
              src: "/top-view-sleeping-baby.webp",
              alt: "Ontspannen slapende baby",
              caption: "Rust na succesvol comfort"
            }
          ]}
          adTopics={["Baby Comfort", "Anti-Koliek Producten"]}
        />
      </div>
    </Layout>
  )
}