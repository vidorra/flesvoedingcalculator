import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Heart, AlertTriangle, CheckCircle, TrendingUp, Clock, Phone } from 'lucide-react'

export const metadata = {
  title: 'Spugen na de Fles: Wanneer Normaal en Wanneer Zorgen? 2025',
  description: 'Spugen na flesvoeding is de #1 zorg van Nederlandse ouders. Leer het verschil tussen normaal spugen en reflux, praktische oplossingen om spugen te verminderen, en wanneer je de huisarts moet bellen.',
}

export default function SpugenNaDeFlesPage() {
  const reassuringStats = [
    { stat: '70% van baby\'s', description: 'spuugt regelmatig de eerste 6 maanden' },
    { stat: '95% hiervan', description: 'is volkomen normaal en onschuldig' },
    { stat: '5% kan reflux', description: 'of andere medische oorzaken hebben' },
    { stat: 'Meeste baby\'s stoppen', description: 'met spugen rond 12-18 maanden' }
  ]

  const normalSpitting = {
    characteristics: [
      'Hoeveelheid: 1-2 eetlepels per keer',
      'Consistentie: Vloeibaar, zoals melk',
      'Timing: Direct na voeding of binnen 30 minuten',
      'Baby\'s reactie: Blijft tevreden en vrolijk',
      'Frequentie: Paar keer per dag',
      'Geur: Zuur maar niet onaangenaam'
    ],
    reasons: [
      'Onvolgroeide sluitspier tussen slokdarm en maag',
      'Baby\'s maag is nog klein (50ml bij geboorte)',
      'Liggende houding bevordert terugstroming',
      'Overvulling van maag door te snel drinken',
      'Ingesloten lucht drukt voeding omhoog'
    ]
  }

  const warningSignsReflux = [
    'Projectielspugen: Krachtig spugen over grote afstand',
    'Veel hoeveelheid: Meer dan halve voeding',
    'Groene kleur: Gal in het spuugsel',
    'Bloed: Rode vlekjes of bruine kleur',
    'Gewichtsverlies: Baby groeit niet goed',
    'Excessief huilen: Voor/na elke voeding',
    'Weigergedrag: Baby wil niet meer drinken',
    'Ademhalingsproblemen: Hoesten, kokhalzen'
  ]

  const feedingTechniques = [
    {
      technique: 'Langzamer Voeden',
      effectiveness: 'MEEST EFFECTIEF',
      methods: [
        'Pauzes elke 30-40ml',
        'Laat baby zelf het tempo bepalen',
        'Stop wanneer baby wegkijkt of speen wegduwt',
        'Gebruik kleinere gaten in speen',
        'Kies anti-koliek spenen'
      ]
    },
    {
      technique: 'Optimale Houding',
      methods: [
        '45° hoek tijdens voeding (niet plat liggen)',
        'Rechtop houden 20-30 minuten na voeding',
        'Schommelstoel kan helpen door zachte beweging',
        'Draagzak voor hands-free rechtop houden'
      ]
    },
    {
      technique: 'Boertje Laten Optimaliseren',
      methods: [
        'Halverwege voeding altijd boertje laten',
        'Na voeding minimaal 10 minuten proberen',
        'Verschillende technieken gebruiken',
        'Geduldig blijven - soms duurt het even'
      ]
    }
  ]

  const speenSelection = [
    {
      type: 'Anti-koliek',
      benefit: 'Minder lucht inslikken',
      brand: 'MAM Easy Start'
    },
    {
      type: 'Langzame flow',
      benefit: 'Voorkomt overvulling',
      brand: 'Philips Avent 1'
    },
    {
      type: 'Natuurlijke vorm',
      benefit: 'Betere mondafsluiting',
      brand: 'Tommee Tippee'
    },
    {
      type: 'Variabele flow',
      benefit: 'Baby bepaalt snelheid',
      brand: 'NUK First Choice'
    }
  ]

  const ageExpectations = [
    {
      age: '0-3 Maanden',
      phase: 'Piek Periode',
      frequency: '3-5x per dag normaal',
      amount: '1-2 eetlepels per keer',
      reason: 'Sluitspier nog niet volgroeid',
      approach: 'Extra geduld, veel boertje laten'
    },
    {
      age: '3-6 Maanden', 
      phase: 'Verbetering',
      frequency: '1-3x per dag',
      amount: 'Vaak minder',
      reason: 'Sluitspier wordt sterker',
      approach: 'Zittende houding helpt'
    },
    {
      age: '6-12 Maanden',
      phase: 'Grote Verbetering', 
      frequency: 'Soms nog 1x per dag',
      amount: 'Vaste voeding helpt tegen spugen',
      reason: 'Meer rechtop zitten',
      approach: 'Meeste baby\'s stoppen'
    },
    {
      age: '12+ Maanden',
      phase: 'Zeldzaam',
      frequency: 'Af en toe nog wel',
      amount: 'Bij ziekte: Tijdelijk meer',
      reason: 'Persisteert: Overleg met arts',
      approach: 'Nieuwe voeding: Kan spugen veroorzaken'
    }
  ]

  const medicalConditions = [
    {
      condition: 'GERD (Gastro-Esofageale Reflux)',
      symptoms: [
        'Pijnlijk huilen tijdens/na voeding',
        'Boogrug maken tijdens drinken',
        'Weigeren van fles',
        'Slechte gewichtstoename',
        'Slaapproblemen door oncomfort'
      ],
      treatment: [
        'Medicatie: Protonpompremmers (op recept)',
        'Voedingsaanpassingen: Kleinere, frequentere voedingen',
        'Verdikte voeding: Speciaal AR-voeding',
        'Follow-up: Regelmatige controles kinderarts'
      ]
    },
    {
      condition: 'Pylorusstenose (Zeldzaam maar Ernstig)',
      symptoms: [
        'Projectielspugen na elke voeding',
        'Gewichtsverlies ondanks goede eetlust',
        'Zichtbare maagbewegingen op buik',
        'Leeftijd: Meestal 2-8 weken',
        'SPOED: Direct naar spoedeisende hulp'
      ]
    }
  ]

  const whenToCallDoctor = {
    immediate: [
      'Projectielspugen bij elke voeding',
      'Gewichtsverlies of geen gewichtstoename',
      'Groen of bloederig spuugsel',
      'Baby weigert consequent te drinken',
      'Tekenen van uitdroging (droge luier >6 uur)',
      'Koorts + spugen combinatie'
    ],
    regular: [
      'Toename in frequentie spugen',
      'Baby lijkt pijn te hebben',
      'Verandering in spuugpatroon',
      'Onzekerheid over gewichtstoename',
      'Slecht slapen door spugen'
    ],
    monitor: [
      'Normaal spugen zonder andere symptomen',
      'Baby groeit en gedijt goed',
      'Blijft vrolijk tussen voedingen',
      'Eet/drinkt normaal'
    ]
  }

  const practicalTips = [
    {
      category: 'Schoonmaak & Voorbereiding',
      subcategory: 'Spuugluiers Strategie',
      tips: [
        'Minimum 10 stuks altijd voorradig',
        'Verschillende locaties: Elke kamer een luier',
        'Auto: Extra set in luiertas',
        'Nachtkastje: Voor nachtvoeding',
        'Was routine: Dagelijks wassen'
      ]
    },
    {
      category: 'Familie & Sociale Situaties',
      subcategory: 'Bij Familie/Vrienden',
      tips: [
        'Leg uit dat spugen normaal is',
        'Vraag om begrip en luiers',
        'Bied aan om schoon te maken',
        'Neem extra kleding mee'
      ]
    },
    {
      category: 'Nachtvoeding & Spugen',
      subcategory: 'Minimaliseer Spugen \'s Nachts',
      tips: [
        'Voeding in donkere/rustige omgeving',
        'Langzamer voeden (baby is slaperig)',
        'Extra lang boertje laten proberen',
        'Langer rechtop houden voor terugleggen',
        'Hoger hoofdeinde bedje (veilig verhogen)'
      ]
    }
  ]

  const arFormula = [
    {
      brand: 'Nutrilon AR',
      description: 'Meest voorgeschreven',
      indication: 'Op advies van arts/consultatiebureaudokter'
    },
    {
      brand: 'Hero Baby AR',
      description: 'Budget vriendelijk'
    },
    {
      brand: 'HIPP AR',
      description: 'Organische variant'
    }
  ]

  const monitoringGuide = {
    weekly: [
      'Gewicht (zelfde weegschaal, zelfde tijd)',
      'Aantal natte luiers per dag (6+ normaal)',
      'Algemene vrolijkheid baby',
      'Eetlust en drinkgedrag',
      'Slaappatroon veranderingen'
    ],
    growthSigns: [
      'Gewichtstoename: 150-200g per week eerste maanden',
      'Lengtegroei: Volgt percentiel lijn',
      'Hoofdomtrek: Normale toename',
      'Ontwikkelingsmijlpalen: Op schema'
    ]
  }

  const myths = [
    {
      myth: 'Spugen betekent te veel voeding',
      fact: 'Baby\'s kunnen spugen ook bij correcte hoeveelheden door onvolgroeide sluitspier.'
    },
    {
      myth: 'Anti-koliek flessen voorkomen alle spugen',
      fact: 'Ze verminderen spugen door minder lucht, maar elimineren het niet volledig.'
    },
    {
      myth: 'Spugende baby\'s groeien slechter',
      fact: 'Zolang gewichtstoename normaal is, heeft spugen geen invloed op groei.'
    },
    {
      myth: 'Na 6 maanden moet spugen stoppen',
      fact: 'Variëert per baby. Sommige spugen tot 12-18 maanden.'
    }
  ]

  const emotionalSupport = [
    {
      category: 'Normale Gevoelens',
      feelings: [
        'Bezorgdheid over baby\'s welzijn',
        'Frustratie door constante schoonmaken',
        'Onzekerheid of je iets verkeerd doet',
        'Vermoeidheid door extra werk'
      ]
    },
    {
      category: 'Praktische Steun',
      support: [
        'Deel zorgen met partner/familie',
        'Consultatiebureaudokter voor geruststelling',
        'Online communities van Nederlandse ouders',
        'Praktische hulp bij schoonmaken accepteren'
      ]
    },
    {
      category: 'Stress Management',
      strategies: [
        'Normaliseer dat het tijdelijk is',
        'Focus op baby\'s algemene welzijn',
        'Zoek steun bij andere ouders',
        'Vier kleine overwinningen (minder spugen dagen)'
      ]
    }
  ]

  const faqData = [
    {
      question: 'Hoeveel spugen is te veel?',
      answer: 'Meer dan halve voeding per keer, of zo veel dat gewichtstoename stagneert. Normaal is 1-2 eetlepels per voeding.'
    },
    {
      question: 'Wanneer stopt spugen definitief?',
      answer: 'Meeste baby\'s stoppen tussen 6-12 maanden. Sommige kunnen tot 18 maanden af en toe spugen.'
    },
    {
      question: 'Kan ik spugen voorkomen door minder te voeden?',
      answer: 'Nee, baby\'s hebben volledige voeding nodig voor groei. Beter is langzamer voeden met pauzes.'
    },
    {
      question: 'Is spugen pijnlijk voor baby\'s?',
      answer: 'Normaal spugen is niet pijnlijk. Als baby huilt of oncomfortabel lijkt, kan reflux de oorzaak zijn.'
    },
    {
      question: 'Moet ik na spugen extra voeding geven?',
      answer: 'Alleen als baby nog honger toont. Forceer nooit extra voeding na spugen.'
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
              <div className="text-sm text-gray-500 mb-2">Problemen Oplossen • Spugen</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-primary" />
                Spugen na de Fles: Wanneer Normaal en Wanneer Zorgen?
              </h1>
              <p className="text-gray-500">
                Spugen na flesvoeding is de #1 zorg van Nederlandse ouders. Leer het verschil tussen 
                normaal spugen en reflux, praktische oplossingen om spugen te verminderen, en wanneer 
                je de huisarts moet bellen.
              </p>
            </div>

            {/* Why Such a Big Concern */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Waarom Spugen Zo'n Grote Zorg Is</h2>
              
              <p className="text-gray-700 mb-4">
                Spugen na de fles komt voor bij <strong>70% van alle baby's</strong> in de eerste maanden. 
                Toch maken ouders zich zorgen over gewichtstoename, comfort van hun baby, en of er iets mis is. 
                Deze gids helpt je onderscheid maken tussen normaal spugen en medische problemen.
              </p>
              
              <div className="mb-4">
                <h3 className="font-medium text-primary mb-3">Cijfers die Geruststellen:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reassuringStats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border border-gray-200 bg-gray-50 rounded-lg">
                      <span className="font-bold text-primary">{stat.stat}</span>
                      <span className="text-sm text-gray-700">{stat.description}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-700">
                  <strong>Onderzoek van het Sophia Kinderziekenhuis</strong> toont aan dat slechts 3% 
                  van spugende baby's daadwerkelijk medische interventie nodig heeft.
                </p>
              </div>
            </div>

            {/* Normal vs Medical Problems */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Normaal Spugen vs. Medische Problemen</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    NORMAAL SPUGEN (Posseting)
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Kenmerken:</h4>
                    <ul className="space-y-1">
                      {normalSpitting.characteristics.map((char, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Waarom het Gebeurt:</h4>
                    <ol className="space-y-1">
                      {normalSpitting.reasons.map((reason, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary font-medium text-sm">{index + 1}.</span>
                          <span className="text-sm text-gray-700">{reason}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary mb-3 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    ZORGEN BIJ (Mogelijk Reflux/GERD)
                  </h3>
                  
                  <h4 className="font-medium text-gray-700 mb-2">Rode Vlaggen:</h4>
                  <ul className="space-y-2">
                    {warningSignsReflux.map((sign, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Practical Solutions */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Praktische Oplossingen om Spugen te Verminderen</h2>
              
              <div className="space-y-6">
                {feedingTechniques.map((technique, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900">{technique.technique}</h3>
                      {technique.effectiveness && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {technique.effectiveness}
                        </span>
                      )}
                    </div>
                    
                    <ul className="space-y-2">
                      {technique.methods.map((method, methodIndex) => (
                        <li key={methodIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{method}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {index < feedingTechniques.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Speen Selection */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Speen Selectie</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-sm font-medium text-gray-700">Speentype</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-700">Voordeel tegen Spugen</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-700">Aanbevolen Merk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {speenSelection.map((speen, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 text-sm font-medium text-gray-900">{speen.type}</td>
                        <td className="py-2 text-sm text-gray-700">{speen.benefit}</td>
                        <td className="py-2 text-sm text-gray-600">{speen.brand}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Age Expectations */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Leeftijd-Specifieke Verwachtingen
              </h2>
              
              <div className="space-y-6">
                {ageExpectations.map((age, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900">{age.age}</h3>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {age.phase}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-primary">Frequentie: </span>
                          <span className="text-sm text-gray-700">{age.frequency}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-primary">Hoeveelheid: </span>
                          <span className="text-sm text-gray-700">{age.amount}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-primary">Reden: </span>
                          <span className="text-sm text-gray-700">{age.reason}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-primary">Aanpak: </span>
                          <span className="text-sm text-gray-700">{age.approach}</span>
                        </div>
                      </div>
                    </div>
                    
                    {index < ageExpectations.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Medical Conditions */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Medische Aandoeningen: Wanneer Zorgen?</h2>
              
              <div className="space-y-6">
                {medicalConditions.map((condition, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-3">{condition.condition}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Symptomen:</h4>
                        <ul className="space-y-1">
                          {condition.symptoms.map((symptom, symptomIndex) => (
                            <li key={symptomIndex} className="flex items-start space-x-2">
                              <AlertTriangle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {condition.treatment && (
                        <div>
                          <h4 className="font-medium text-primary mb-2">Behandeling:</h4>
                          <ul className="space-y-1">
                            {condition.treatment.map((treatment, treatmentIndex) => (
                              <li key={treatmentIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{treatment}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    {index < medicalConditions.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* When to Call Doctor */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Wanneer Bellen met Huisarts?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">DIRECT CONTACT (Binnen 24 uur)</h3>
                  <ul className="space-y-2">
                    {whenToCallDoctor.immediate.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary mb-3">REGULIER CONSULT (Binnen week)</h3>
                  <ul className="space-y-2">
                    {whenToCallDoctor.regular.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary mb-3">THUIS MONITOREN</h3>
                  <ul className="space-y-2">
                    {whenToCallDoctor.monitor.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Practical Daily Life Tips */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Praktische Tips voor het Dagelijks Leven</h2>
              
              <div className="space-y-6">
                {practicalTips.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-2">{section.category}</h3>
                    <h4 className="font-medium text-primary mb-3">{section.subcategory}</h4>
                    
                    <ul className="space-y-2">
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {index < practicalTips.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* AR Formula */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Voedingsalternatieven bij Veel Spugen</h2>
              
              <div className="mb-4">
                <h3 className="font-medium text-primary mb-3">AR-Voeding (Anti-Reflux)</h3>
                <p className="text-gray-700 mb-4">
                  Verdikte flesvoeding met rijststijfsel die beter in de maag blijft liggen. 
                  Alleen gebruiken op advies van arts/consultatiebureaudokter.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {arFormula.map((formula, index) => (
                    <div key={index} className="p-4 border border-gray-200 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-1">{formula.brand}</h4>
                      <p className="text-sm text-gray-700">{formula.description}</p>
                      {formula.indication && (
                        <p className="text-xs text-gray-600 mt-2">{formula.indication}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                <h4 className="font-medium text-primary mb-2">Wanneer Overwegen:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Normaal spugen werkt niet af</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Gewichtstoename stagneert</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Op advies medische professional</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Monitoring */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Spugen en Gewichtstoename Monitoren</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Wekelijkse Check:</h3>
                  <ul className="space-y-2">
                    {monitoringGuide.weekly.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary mb-3">Normale Groei Tekenen:</h3>
                  <ul className="space-y-2">
                    {monitoringGuide.growthSigns.map((sign, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Myths */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Mythes over Spugen Ontkracht</h2>
              
              <div className="space-y-4">
                {myths.map((myth, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-2">"{myth.myth}"</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Feit:</strong> {myth.fact}
                    </p>
                    {index < myths.length - 1 && (
                      <div className="border-b border-gray-200 mt-3"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Emotional Support */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Emotionele Impact op Ouders</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {emotionalSupport.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-3">{category.category}</h3>
                    <ul className="space-y-2">
                      {(category.feelings || category.support || category.strategies).map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
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

            {/* Conclusion */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Conclusie: Geduld en Observatie</h2>
              
              <p className="text-gray-700 mb-4">
                Spugen na de fles is voor de meeste baby's een normale ontwikkelingsfase die vanzelf overgaat. 
                <strong>Observeer je baby's algemene welzijn</strong> - een vrolijke, groeiende baby die af 
                en toe spuugt heeft waarschijnlijk niets om je zorgen over te maken.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Vertrouw op je ouderinstinct:</strong> Als iets niet goed voelt, aarzel niet om 
                    medische hulp te zoeken.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Onthoud:</strong> Deze fase gaat voorbij. De meeste ouders kijken er later op 
                    terug als een kleine hindernis in de mooie reis van het ouderschap.
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
                  <div className="font-medium text-primary">Problemen Oplossen →</div>
                  <div className="text-sm text-gray-600">Alle voedingsproblemen</div>
                </Link>
                <Link 
                  href="/kennisbank/voedingstechnieken"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="font-medium text-primary">Voedingstechnieken →</div>
                  <div className="text-sm text-gray-600">Technieken tegen spugen</div>
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
              alt: "Baby spugen na voeding herkennen",
              caption: "Begrijpen wanneer spugen normaal is"
            },
            {
              src: "/kunstvoeding.webp", 
              alt: "Anti-reflux voedingstechnieken",
              caption: "Technieken om spugen te verminderen"
            },
            {
              src: "/slapende-baby-2.webp",
              alt: "Tevreden baby na voeding",
              caption: "Rust na succesvolle voeding"
            }
          ]}
          adTopics={["Baby Comfort", "Voedingshulp"]}
        />
      </div>
    </Layout>
  )
}