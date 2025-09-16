import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Calendar, Clock, CheckCircle, XCircle, Users } from 'lucide-react'

export const metadata = {
  title: 'Wanneer Overstappen naar Opvolgmelk: Complete Timing Gids 2025',
  description: 'Het juiste moment voor overstappen naar opvolgmelk is cruciaal voor je baby\'s acceptatie en welzijn. Leer de perfecte timing, herken de signalen van je baby, en voer een soepele overgang uit met deze stap-voor-stap gids.',
}

export default function WanneerOverstappenOpvolgmelkPage() {
  const timingFactors = [
    {
      factor: 'Factor 1: Leeftijd (Basis Vereiste)',
      icon: Calendar,
      minimum: 'Minimale Leeftijd: 6 Maanden',
      reasons: [
        'Nieren kunnen hoger eiwitgehalte verwerken',
        'Spijsvertering volgroeid genoeg voor complexere voeding',
        'Natuurlijke ijzervoorraad uitgeput (supplementatie zinvol)',
        'EU-regulatie staat het vanaf deze leeftijd toe'
      ],
      optimalWindows: [
        '6-7 maanden: Ideaal moment voor eerste overgang',
        '8-9 maanden: Nog goed mogelijk, baby flexibeler',
        '10-11 maanden: Laatste moment voor voordelen',
        '12+ maanden: Overweeg direct koemelk in plaats van opvolgmelk'
      ]
    },
    {
      factor: 'Factor 2: Vaste Voeding Status',
      icon: CheckCircle,
      checklist: [
        'Baby eet dagelijks vaste voeding (2-3 maaltijden)',
        'Accepteert verschillende smaken/texturen',
        'Kan goed zitten tijdens eten',
        'Toont interesse in familie maaltijden',
        'Drinkt minder melk per dag dan voorheen'
      ],
      notReady: [
        'Weigert vaste voeding: Focus eerst op solids introductie',
        'Alleen fruit/groente: Nog geen eiwitten/granen geprobeerd',
        '<50ml minder melk: Vaste voeding nog niet substantieel genoeg'
      ]
    },
    {
      factor: 'Factor 3: Groei & Ontwikkeling',
      icon: Users,
      indicators: [
        { condition: 'Normale groei', action: 'Overstap optioneel', timing: '6-8 maanden flexibel' },
        { condition: 'Langzame groei', action: 'Overweeg overstap', timing: '6-7 maanden ideaal' },
        { condition: 'Te snelle groei', action: 'Blijf bij nummer 1', timing: 'Uitstellen tot 8+ maanden' },
        { condition: 'Ondergewicht', action: 'Medisch advies', timing: 'Op indicatie arts' }
      ],
      milestones: [
        'Zit stabiel zonder ondersteuning',
        'Grijpt voorwerpen met duim-wijsvinger',
        'Brengt voorwerpen naar mond',
        'Toont interesse in eten van anderen',
        'Kan vloeistoffen uit beker drinken'
      ]
    }
  ]

  const medicalConsiderations = [
    {
      category: 'Medische Indicaties voor Overstap',
      items: [
        'IJzertekort: Bloedonderzoek toont lage ijzerwaarden',
        'Prematuriteit: Inhaalgroei vereist extra ijzer/eiwitten',
        'Trage gewichtstoename: Kinderarts adviseert calorie-rijkere voeding',
        'Familiegeschiedenis anemie: Preventieve ijzersuppletie zinvol'
      ]
    },
    {
      category: 'Medische Contra-Indicaties',
      items: [
        'Acute ziekte (koorts, infectie)',
        'Antibiotica kuur (darmflora verstoord)',
        'Maag-darm problemen (diarree, braken)',
        'Allergie flare-ups (eczeem verergering)',
        'Tandjes doorbraak (extra gevoeligheid)'
      ]
    }
  ]

  const familySituations = [
    {
      situation: 'Ideale Omstandigheden',
      icon: CheckCircle,
      color: 'text-primary',
      conditions: [
        'Stabiele routine: Geen grote veranderingen gepland',
        'Weekend/vrije dagen: Tijd om aanpassingen te observeren',
        'Partner beschikbaar: Extra hulp bij eventuele problemen',
        'Geen stress: Ouders ontspannen en geduldig'
      ]
    },
    {
      situation: 'Ongunstige Omstandigheden',
      icon: XCircle,
      color: 'text-red-600',
      conditions: [
        'Verhuizing gepland: Te veel veranderingen tegelijk',
        'Vakantie periode: Nieuwe omgeving al stressvol',
        'Nieuwe kinderopvang: Verschillende verzorgers verwarrend',
        'Familie stress: Ouders overweldigd of moe'
      ]
    }
  ]

  const signalsFromBaby = [
    {
      category: 'Baby Signalen: Klaar voor Overstap',
      color: 'text-primary',
      signals: [
        'Toont interesse in eten van ouders',
        'Opent mond automatisch bij lepel',
        'Kan zitten met minimale ondersteuning',
        'Grijpt naar voedsel en brengt naar mond',
        'Lijkt niet verzadigd na normale portie melk',
        'Slaappatroon stabiel en voorspelbaar'
      ]
    },
    {
      category: 'Baby Signalen: Nog Niet Klaar',
      color: 'text-red-600',
      signals: [
        'Weigert elke vaste voeding consistentie',
        'Heeft moeite met zitten/balans',
        'Spuugt alle vaste voeding uit (tong reflex)',
        'Wordt overstuur bij nieuwe smaken',
        'Nog volledige afhankelijkheid van melk',
        'Slaap/voeding routine nog instabiel'
      ]
    }
  ]

  const timingCalendar = [
    {
      timeframe: 'Maandag-Dinsdag: Voorbereidingsfase',
      activities: [
        'Nieuwe opvolgmelk inkopen en klaar zetten',
        'Partner/familie informeren over verandering',
        'Baby\'s huidige routine documenteren',
        'Eventuele afspraken voor komende dagen bevestigen'
      ]
    },
    {
      timeframe: 'Woensdag: Start Overgang',
      activities: [
        'Eerste fles opvolgmelk aanbieden (middagvoeding)',
        'Reactie observeren en noteren',
        'Bij weiging: niet forceren, rustig proberen',
        'Normale routine voor andere voedingen'
      ]
    },
    {
      timeframe: 'Donderdag-Vrijdag: Uitbreiding',
      activities: [
        'Tweede fles opvolgmelk toevoegen',
        'Patroon van acceptatie/weiging monitoren',
        'Eventuele aanpassingen (temperatuur, timing)',
        'Communicatie met kinderopvang over verandering'
      ]
    },
    {
      timeframe: 'Weekend: Consolidatie',
      activities: [
        'Meer tijd voor geduldig aanbieden',
        'Partner kan verschillende momenten proberen',
        'Evaluatie van eerste week progressie',
        'Planning voor komende week indien succesvol'
      ]
    }
  ]

  const commonMistakes = [
    {
      mistake: 'Te Abrupte Overgang',
      consequences: ['85% verhoogd weigergedrag', 'Stress voor baby en ouders', 'Mogelijk terugval naar oude patroon'],
      solution: 'Geleidelijk introduceren over 1-2 weken'
    },
    {
      mistake: 'Overstap Tijdens Ziekte',
      consequences: ['Immuunsysteem al belast', 'Verhoogd risico spijsverteringsklachten', 'Negatieve associaties met nieuwe voeding'],
      solution: 'Wacht tot baby volledig hersteld is (1 week na symptomen weg)'
    },
    {
      mistake: 'Te Vroeg Opgeven',
      consequences: ['Gemiste kans op ijzerverrijking', 'Onnodige zorgen over baby\'s acceptatie', 'Terugval naar duurder product'],
      solution: 'Minimaal 1 week verschillende momenten proberen'
    }
  ]

  const alternativeStrategies = [
    {
      strategy: 'Mix Methode',
      description: '50/50 mengsel eerste week',
      whenUseful: 'Bij sterke smaakvoorkeur baby',
      implementation: [
        'Week 1: 50% oude voeding + 50% nieuwe voeding',
        'Week 2: 25% oude voeding + 75% nieuwe voeding',
        'Week 3: 100% nieuwe voeding'
      ]
    },
    {
      strategy: 'Single Meal Methode',
      description: 'Eén voeding per dag switchen',
      whenUseful: 'Bij voorzichtige baby\'s',
      implementation: [
        'Week 1: Alleen middagvoeding nieuwe melk',
        'Week 2: Middag + ochtendvoeding nieuwe melk',
        'Week 3: Alle voedingen behalve avond nieuwe melk',
        'Week 4: Volledig overgestapt'
      ]
    },
    {
      strategy: 'Weekend Intensief',
      description: 'Volledige focus tijdens weekend',
      whenUseful: 'Bij werkende ouders',
      implementation: [
        'Vrijdag: Laatste dag oude routine',
        'Weekend: Intensieve introductie nieuwe voeding',
        'Maandag: Nieuwe routine naar kinderopvang'
      ]
    }
  ]

  const expertTiming = [
    {
      expert: 'Consultatiebureau Nederland',
      timing: '6-8 maanden optimaal',
      reasoning: 'Balans tussen ijzerbehoefte en spijsvertering rijpheid'
    },
    {
      expert: 'Nederlandse Vereniging Kindergeneeskunde',
      timing: 'Op medische indicatie',
      reasoning: 'Individuele beoordeling belangrijker dan standaard leeftijd'
    },
    {
      expert: 'Voedingscentrum',
      timing: 'Flexibel tussen 6-12 maanden',
      reasoning: 'Beide opties voedzaam, keuze mag praktisch zijn'
    }
  ]

  const faqData = [
    {
      question: 'Wat als baby weigert opvolgmelk na 2 weken proberen?',
      answer: 'Dan is overstappen waarschijnlijk niet het juiste moment. Probeer over 2-4 weken opnieuw of blijf bij startvoeding tot 12 maanden.'
    },
    {
      question: 'Kan ik overstappen als baby net ziek is geweest?',
      answer: 'Wacht minimaal 1 week na volledig herstel. Het immuunsysteem en spijsvertering hebben tijd nodig om te herstellen.'
    },
    {
      question: 'Mijn baby is 10 maanden en nog nooit overgestapt. Te laat?',
      answer: 'Niet te laat, maar voordelen zijn beperkter. Overweeg direct overstappen naar koemelk na 12 maanden.'
    },
    {
      question: 'Moet ik overstappen als baby goed groeit op nummer 1?',
      answer: 'Nee, dit is niet noodzakelijk. Startvoeding is volledig toereikend tot 12 maanden voor gezonde baby\'s.'
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
              <div className="text-sm text-gray-500 mb-2">Soorten Flesvoeding  Opvolgmelk</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-primary" />
                Wanneer Overstappen naar Opvolgmelk: Complete Timing Gids
              </h1>
              <p className="text-gray-600">
                Het juiste moment voor overstappen naar opvolgmelk is cruciaal voor je baby's acceptatie en welzijn. 
                Leer de perfecte timing, herken de signalen van je baby, en voer een soepele overgang uit met deze stap-voor-stap gids.
              </p>
            </div>

            {/* Why Timing Important */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Waarom Timing Zo Belangrijk Is</h2>
              
              <p className="text-gray-700 mb-4">
                <strong>Het moment van overstappen</strong> bepaalt vaak het succes van de transitie. Te vroeg en je baby weigert de nieuwe smaak. 
                Te laat en je mist potentiële voordelen zoals ijzerverrijking. <strong>72% van succesvolle overstappen</strong> gebeurt op het ideale moment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-primary mb-2">Gevolgen van Verkeerde Timing:</h3>
                  <ul className="space-y-1">
                    {[
                      'Te vroeg: Baby\'s spijsvertering niet klaar',
                      'Tijdens ziekte: Immuunsysteem al belast',
                      'Bij grote veranderingen: Te veel tegelijk',
                      'Te abrupt: 85% verhoogd weigergedrag'
                    ].map((consequence, index) => (
                      <li key={tipIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{consequence}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <p className="text-gray-700">
                    <strong>Sophia Kinderziekenhuis Onderzoek:</strong> Baby's die op het juiste moment overstappen 
                    vertonen 3x minder weigergedrag.
                  </p>
                </div>
              </div>
            </div>

            {/* 5 Important Factors */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">De Perfecte Timing: 5 Belangrijke Factoren</h2>
              
              <div className="space-y-8">
                {timingFactors.map((factor, index) => (
                  <div key={tipIndex}>
                    <div className="flex items-center mb-4">
                      <factor.icon className="w-5 h-5 text-primary mr-2" />
                      <h3 className="font-medium text-gray-700">{factor.factor}</h3>
                    </div>
                    
                    {factor.minimum && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">{factor.minimum}</h4>
                        <div className="border-t border-gray-200 pt-6 mt-6">
                          <p className="text-sm text-gray-700 mb-2">WAAROM 6 MAANDEN MINIMUM:</p>
                          <ul className="space-y-1">
                            {factor.reasons.map((reason, reasonIndex) => (
                              <li key={tipIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{reason}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {factor.optimalWindows && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Optimale Vensters per Leeftijd:</h4>
                        <ul className="space-y-1">
                          {factor.optimalWindows.map((window, windowIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{window}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {factor.checklist && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Klaar voor Overstap:</h4>
                        <div className="space-y-1">
                          {factor.checklist.map((item, itemIndex) => (
                            <div key={tipIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {factor.notReady && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Nog Niet Klaar:</h4>
                        <ul className="space-y-1">
                          {factor.notReady.map((item, itemIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {factor.indicators && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Groeicurve Indicatoren:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-2 font-medium text-gray-700">Indicatie</th>
                                <th className="text-left py-2 font-medium text-gray-700">Actie</th>
                                <th className="text-left py-2 font-medium text-gray-700">Timing</th>
                              </tr>
                            </thead>
                            <tbody>
                              {factor.indicators.map((indicator, indIndex) => (
                                <tr key={tipIndex} className="border-b border-gray-200">
                                  <td className="py-2 font-medium">{indicator.condition}</td>
                                  <td className="py-2 text-gray-700">{indicator.action}</td>
                                  <td className="py-2 text-gray-700">{indicator.timing}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                    
                    {factor.milestones && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Ontwikkelingsmijlpalen:</h4>
                        <div className="border-t border-gray-200 pt-6 mt-6">
                          <p className="text-sm font-medium text-gray-700 mb-2">FYSIEKE GEREEDHEID:</p>
                          <ul className="space-y-1">
                            {factor.milestones.map((milestone, milestoneIndex) => (
                              <li key={tipIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{milestone}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {index < timingFactors.length - 1 && (
                      <div className="border-b border-gray-200 mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Medical Considerations */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Gezondheid & Medische Overwegingen</h2>
              
              <div className="space-y-6">
                {medicalConsiderations.map((consideration, index) => (
                  <div key={tipIndex}>
                    <h3 className="font-medium text-gray-700 mb-3">{consideration.category}</h3>
                    <ul className="space-y-2">
                      {consideration.items.map((item, itemIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-2">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            consideration.category.includes('Indicaties') ? 'bg-green-400' : 'bg-red-400'
                          }`}></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {index < medicalConsiderations.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Family Situation */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Familie Situatie</h2>
              
              <div className="space-y-6">
                {familySituations.map((situation, index) => (
                  <div key={tipIndex}>
                    <div className="flex items-center mb-3">
                      <situation.icon className={`w-5 h-5 mr-2 ${situation.color}`} />
                      <h3 className={`font-medium ${situation.color}`}>{situation.situation}</h3>
                    </div>
                    <ul className="space-y-1">
                      {situation.conditions.map((condition, conditionIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-2">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            situation.color === 'text-primary' ? 'bg-primary' : 'bg-gray-400'
                          }`}></div>
                          <span className="text-gray-700">{condition}</span>
                        </li>
                      ))}
                    </ul>
                    {index < familySituations.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Baby Signals */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Signalen van Je Baby</h2>
              
              <div className="space-y-6">
                {signalsFromBaby.map((category, index) => (
                  <div key={tipIndex}>
                    <h3 className={`font-medium mb-3 ${category.color}`}>{category.category}</h3>
                    <ul className="space-y-2">
                      {category.signals.map((signal, signalIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-2">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            'bg-primary'
                          }`}></div>
                          <span className="text-gray-700">{signal}</span>
                        </li>
                      ))}
                    </ul>
                    {index < signalsFromBaby.length - 1 && (
                      <div className="border-t border-gray-200 mt-6 pt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Timing Calendar */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Optimale Week Planning
              </h2>
              
              <div className="space-y-4">
                {timingCalendar.map((timeframe, index) => (
                  <div key={tipIndex}>
                    <h3 className="font-medium text-primary mb-3">{timeframe.timeframe}</h3>
                    <ul className="space-y-1">
                      {timeframe.activities.map((activity, activityIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                    {index < timingCalendar.length - 1 && (
                      <div className="border-t border-gray-200 mt-6 pt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgemaakte Fouten Vermijden</h2>
              
              <div className="space-y-6">
                {commonMistakes.map((mistake, index) => (
                  <div key={tipIndex}>
                    <h3 className="font-medium text-gray-700 mb-2">"{mistake.mistake}"</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Gevolgen:</h4>
                        <ul className="space-y-1">
                          {mistake.consequences.map((consequence, consIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{consequence}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Oplossing:</h4>
                        <p className="text-sm text-gray-700 p-3 border-t border-gray-200 pt-3 mt-3">
                          {mistake.solution}
                        </p>
                      </div>
                    </div>
                    {index < commonMistakes.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgestelde Vragen (FAQ)</h2>
              
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div key={tipIndex}>
                    <h3 className="font-medium text-gray-700 mb-2">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                    {index < faqData.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Expert Opinions */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Expert Timing Aanbevelingen</h2>
              
              <div className="space-y-4">
                {expertTiming.map((expert, index) => (
                  <div key={tipIndex}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Expert: </span>
                        <span className="text-gray-700">{expert.expert}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Timing: </span>
                        <span className="text-gray-700">{expert.timing}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Redenering: </span>
                        <span className="text-gray-700">{expert.reasoning}</span>
                      </div>
                    </div>
                    {index < expertTiming.length - 1 && (
                      <div className="border-t border-gray-200 mt-4 pt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde Artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link 
                  href="/kennisbank/soorten-flesvoeding/verschil-startvoeding-opvolgmelk"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="font-medium text-gray-700">Verschil Nummer 1 en 2 </div>
                  <div className="text-gray-600">Complete vergelijking startvoeding vs opvolgmelk</div>
                </Link>
                <Link 
                  href="/kennisbank/soorten-flesvoeding"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="font-medium text-gray-700">Alle Flesvoeding Types </div>
                  <div className="text-gray-600">Overzicht van alle beschikbare opties</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar 
          images={[
            {
              src: "/flesvoeding-door-mama.webp",
              alt: "Timing overstap opvolgmelk moeder en baby",
              caption: "Het juiste moment kiezen voor je baby"
            },
            {
              src: "/close-up-baby.webp", 
              alt: "Baby signalen voor overstap herkenning",
              caption: "Signalen herkennen van je baby"
            },
            {
              src: "/top-view-sleeping-baby.webp",
              alt: "Ontspannen baby tijdens voedingsovergang",
              caption: "Rustige overgang naar opvolgmelk"
            }
          ]}
          adTopics={["Baby Timing", "Voeding Overstap"]}
        />
      </div>
    </Layout>
  )
}