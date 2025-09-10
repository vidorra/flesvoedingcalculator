import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Clock, Calendar, TrendingUp, Moon, Sun, Users, Target } from 'lucide-react'

export const metadata = {
  title: 'Voedingsritme Opbouwen: Complete Gids voor Nederlandse Ouders 2025',
  description: 'Een goed voedingsritme is de basis voor beter slapen, voor zowel baby als ouders. Leer hoe je stap-voor-stap een voorspelbaar schema opbouwt dat past bij jouw gezin, met praktische tips voor elke leeftijd.',
}

export default function VoedingsritmeOpbouwenPage() {
  const benefits = [
    { stat: '40% betere nachtrust', description: 'voor baby\'s met consistent schema' },
    { stat: '60% minder huilbuien', description: 'door voorspelbare honger/slaap cyclus' },
    { stat: 'Meer vrijheid', description: 'voor ouders door planbare dagen' },
    { stat: 'Beter groeipatroon', description: 'door regelmatige voedselinname' },
    { stat: 'Makkelijkere kinderopvang', description: 'door duidelijke routine' }
  ]

  const ageSpecificSchedules = [
    {
      age: '0-6 Weken',
      phase: 'Foundation Building',
      frequency: 'Elke 2-3 uur (8-12x per dag)',
      amount: '50-90ml per voeding',
      flexibility: 'Volg baby\'s signalen, begin met basis',
      nightFeeding: '2-3x verwacht',
      schedule: [
        { time: '06:00', activity: 'Ochtendvoeding (90ml)' },
        { time: '09:00', activity: 'Voeding + speeltijd' },
        { time: '12:00', activity: 'Middagvoeding' },
        { time: '15:00', activity: 'Middag voeding' },
        { time: '18:00', activity: 'Avondvoeding + bad routine' },
        { time: '21:00', activity: 'Laatste voeding + bed' },
        { time: '00:00', activity: 'Nachtvoeding (indien nodig)' },
        { time: '03:00', activity: 'Nachtvoeding (indien nodig)' }
      ],
      tip: 'Begin met 2-3 vaste momenten (ochtend, middag, avond) en vul de tussentijd in naar behoefte.'
    },
    {
      age: '6-12 Weken',
      phase: 'Structuur Aanbrengen',
      frequency: 'Elke 3-4 uur (6-8x per dag)',
      amount: '90-150ml per voeding',
      flexibility: 'Langere periodes tussen voedingen',
      nightFeeding: '1-2x normaal',
      schedule: [
        { time: '06:30', activity: 'Wake-up voeding (150ml)' },
        { time: '10:00', activity: 'Ochtendvoeding (120ml)' },
        { time: '13:30', activity: 'Lunchvoeding (140ml)' },
        { time: '17:00', activity: 'Avondvoeding (130ml)' },
        { time: '20:30', activity: 'Bedtijd voeding (150ml)' },
        { time: '02:00', activity: 'Nachtvoeding (100ml) - optioneel' }
      ],
      tip: 'Vaste bedtijd en wake-up tijd worden belangrijker.'
    },
    {
      age: '3-6 Maanden',
      phase: 'Consolidatie',
      frequency: 'Elke 4 uur (5-6x per dag)',
      amount: '150-200ml per voeding',
      flexibility: 'Doorslapen wordt mogelijk',
      nightFeeding: '0-1x gemiddeld',
      schedule: [
        { time: '07:00', activity: 'Ochtendvoeding (180ml)' },
        { time: '11:00', activity: 'Late ochtend (160ml)' },
        { time: '15:00', activity: 'Middagvoeding (170ml)' },
        { time: '19:00', activity: 'Avondvoeding (180ml)' },
        { time: '22:30', activity: 'Dreamfeed (150ml) - optioneel' }
      ],
      tip: 'Baby kan 6-8 uur doorslapen tussen laatste en eerste voeding.'
    },
    {
      age: '6-12 Maanden',
      phase: 'Integratie Vaste Voeding',
      frequency: '4-5 flessen + 2-3 maaltijden',
      amount: '180-220ml per fles',
      flexibility: 'Vaste voeding: Ontbijt, lunch, diner',
      nightFeeding: 'Melkvoeding: Ochtend, middag, avond, bedtijd',
      schedule: [
        { time: '07:00', activity: 'Ochtendvoeding (200ml)' },
        { time: '08:30', activity: 'Ontbijt (vaste voeding)' },
        { time: '12:00', activity: 'Lunch + fles (150ml)' },
        { time: '15:30', activity: 'Tussenfles (180ml)' },
        { time: '17:30', activity: 'Diner (vaste voeding)' },
        { time: '20:00', activity: 'Bedtijdfles (200ml)' }
      ],
      tip: 'Combinatie van melkvoeding en vaste voeding vereist meer flexibiliteit in schema.'
    }
  ]

  const implementationSteps = [
    {
      period: 'Week 1-2',
      phase: 'Observatie Fase',
      tasks: [
        'Bijhouden huidige voedings- en slaaptijden',
        'Herkennen natuurlijke patronen van je baby',
        'Identificeren beste tijden voor voeding',
        'Nog geen forcering - gewoon observeren'
      ],
      tips: [
        'Gebruik voedingsdagboek of app voor nauwkeurige bijhouding',
        'Let op natuurlijke slaaptijden na voeding',
        'Noteer hoeveelheden en reacties van baby'
      ],
      progression: [
        'Week 1: Alleen observeren en noteren',
        'Week 2: Patronen herkennen en identificeren'
      ],
      example: 'Dag 1: 05:30 - Baby wakker, voeding 80ml; 08:45 - Honger signalen, voeding 90ml'
    },
    {
      period: 'Week 3-4',
      phase: 'Zachte Structuur',
      tasks: [
        'Kies 3 vaste tijden (bijv. 7:00, 13:00, 19:00)',
        'Werk naar deze tijden toe (±30 minuten flexibiliteit)',
        'Behoud responsive feeding tussen vaste momenten',
        'Introduceer bedtime routine'
      ],
      tips: [
        'Te vroeg honger? Afleiden met speeltje/wandeling',
        'Te laat honger? Gently wakker maken voor voeding',
        'Huilen voor vaste tijd? Kleine snack, grote voeding op tijd'
      ],
      progression: [
        'Week 3: Introduceer 3 vaste voedingstijden',
        'Week 4: Verfijn bedtime routine en interval timing'
      ]
    },
    {
      period: 'Week 5-8',
      phase: 'Verfijning',
      tasks: [
        'Verlengen intervallen tussen voedingen',
        'Reduceren flexibiliteit tot ±15 minuten',
        'Toevoegen middagactiviteiten rond voedingen',
        'Werken naar langere nachtrust'
      ],
      progression: [
        'Week 5: 3 uur intervallen nastreven',
        'Week 6: Vaste wake-up tijd (7:00)',
        'Week 7: Vaste bedtijd (20:00)',
        'Week 8: Minder nachtvoedingen'
      ]
    }
  ]

  const techniques = [
    {
      name: 'De 15-Minuten Regel',
      description: 'Flexibiliteit binnen smalle marges',
      rules: [
        'Te vroeg honger: Wacht 15 min, probeer afleiden',
        'Te laat honger: Max 15 min uitstellen',
        'Flexibiliteit behouden binnen smalle marges',
        'Geleidelijke aanpassing naar ideale tijden'
      ],
      windows: [],
      details: [],
      approach: []
    },
    {
      name: 'Wake Windows Gebruiken',
      description: 'Optimale waaktijden per leeftijd',
      rules: [],
      windows: [
        { age: '0-6 weken', wakePeriod: '45-60 min', sequence: 'Voeding  Slaap' },
        { age: '6-12 weken', wakePeriod: '60-90 min', sequence: 'Voeding  Spelen  Slaap' },
        { age: '3-6 maanden', wakePeriod: '90-120 min', sequence: 'Meer speeltijd mogelijk' }
      ],
      details: [],
      approach: []
    },
    {
      name: 'Dreamfeeding Techniek',
      description: 'Voeding zonder baby wakker maken',
      rules: [],
      windows: [],
      details: [
        'Tijdstip: 22:00-23:00 (vlak voor jouw bedtijd)',
        'Methode: Voeding geven zonder baby wakker maken',
        'Doel: Langere nachtrust voor iedereen',
        'Succes: Werkt bij 70% van baby\'s'
      ],
      approach: []
    },
    {
      name: 'Cluster Feeding Management',
      description: 'Meerdere voedingen kort na elkaar',
      rules: [],
      windows: [],
      details: [],
      approach: [
        'Wat: Meerdere voedingen kort na elkaar (avond)',
        'Timing: Meestal 17:00-21:00',
        'Doel: Baby "vult tank" voor nacht',
        'Schema aanpassing: Plan extra voedingen in'
      ]
    }
  ]

  const commonChallenges = [
    {
      challenge: 'Baby Wil Niet Wachten op Schema',
      causes: [
        'Growth spurt (meer honger)',
        'Te kleine porties',
        'Onvolledige voeding vorige keer',
        'Dorst (warm weer)'
      ],
      solutions: [
        'Tijdelijk verhogen voeding hoeveelheden',
        'Extra tussenvoeding tijdens groeiperiodes',
        'Controleren of baby volledig leegdrinkt',
        'Water aanbieden bij warm weer (6+ maanden)'
      ],
      workdaySchedule: [],
      communicationTips: [],
      balanceStrategy: []
    },
    {
      challenge: 'Schema Werkt niet met Werk/Kinderopvang',
      causes: [],
      solutions: [],
      workdaySchedule: [
        { time: '06:30', activity: 'Thuis ochtendvoeding' },
        { time: '08:00', activity: 'Naar kinderopvang' },
        { time: '10:00', activity: 'Voeding kinderopvang' },
        { time: '13:00', activity: 'Voeding kinderopvang' },
        { time: '16:00', activity: 'Voeding kinderopvang' },
        { time: '18:30', activity: 'Thuiskomst voeding' },
        { time: '21:00', activity: 'Bedtijd voeding' }
      ],
      communicationTips: [
        'Deel schema met kinderopvang',
        'Flexibiliteit afspreken voor overgangsmomenten',
        'Bijhouden hoe schema werkt op opvang',
        'Aanpassen indien nodig voor werkdagen'
      ],
      balanceStrategy: []
    },
    {
      challenge: 'Weekend Verstoort heel Schema',
      causes: [],
      solutions: [],
      workdaySchedule: [],
      communicationTips: [],
      balanceStrategy: [
        'Behoud vaste bedtijd ook in weekend',
        'Wake-up tijd max 1 uur later',
        'Sociale activiteiten plannen rond voedingen',
        'Maandag reset - terug naar weekschema'
      ]
    }
  ]

  const specialSituations = [
    {
      situation: 'Onderweg Schema - Auto Reizen',
      planning: [
        'Voor vertrek: Volledige voeding',
        'Onderweg: Plan stops rond voedingstijden',
        'Bestemming: Eerste voeding op normale tijd',
        'Terugkeer: Schema zo snel mogelijk hervatten'
      ],
      approach: [],
      babyIll: [],
      parentIll: []
    },
    {
      situation: 'Vakantie Schema - Tijdzone Aanpassing',
      planning: [],
      approach: [
        'Geleidelijk verschuiven 30 min per dag',
        'Licht blootstelling helpt biologische klok',
        'Eerste dagen flexibeler zijn',
        'Schema aanpassen aan lokale tijd'
      ],
      babyIll: [],
      parentIll: []
    },
    {
      situation: 'Ziekte & Schema',
      planning: [],
      approach: [],
      babyIll: [
        'Meer responsive feeding tijdens ziekte',
        'Kleinere, frequentere voedingen',
        'Hydratatie prioriteit (extra water 6+ maanden)',
        'Terug naar schema na herstel'
      ],
      parentIll: [
        'Partner involvement cruciaal',
        'Minimale schema handhaven',
        'Hulp inschakelen voor voorbereiding',
        'Rust nemen waar mogelijk'
      ]
    }
  ]

  const growthAdjustments = [
    {
      phase: 'Growth Spurts (Groeispurts)',
      timing: [
        '2-3 weken: Extra voedingen 2-3 dagen',
        '6 weken: Langere periode (4-5 dagen)',
        '3 maanden: Korter maar intensiever',
        '6 maanden: Met vaste voeding minder impact'
      ],
      modifications: [
        'Normale week: 5 voedingen',
        'Growth spurt week: 6-7 voedingen',
        'Herstel week: Geleidelijk terug naar 5'
      ],
      impact: [],
      strategy: []
    },
    {
      phase: 'Tandjes Komen',
      timing: [],
      modifications: [],
      impact: [
        'Meer comfort voeding nodig',
        'Kleinere hoeveelheden per keer',
        'Koude voeding kan helpen (niet ijskoud)',
        'Extra geduld nodig'
      ],
      strategy: [
        'Behoud hoofdstructuur (timing)',
        'Flexibiliteit in hoeveelheden',
        'Comfort prioriteit over perfecte schema',
        'Herstel verwachten na tandjes door'
      ]
    }
  ]

  const technologyTracking = {
    freeApps: [
      { name: 'Baby Tracker', features: 'Voeding, slaap, luiers' },
      { name: 'Glow Baby', features: 'Uitgebreide tracking mogelijk' },
      { name: 'Baby Daybook', features: 'Eenvoudig dagboek' }
    ],
    premiumFeatures: [
      'Growth tracking: Gewicht/lengte curves',
      'Sync partners: Beide ouders kunnen bijhouden',
      'Medical export: Data delen met consultatiebureau',
      'Pattern analysis: Automatische schema herkenning'
    ]
  }

  const familySocialAspects = [
    {
      aspect: 'Partner Samenwerking',
      roleDivision: [
        'Nachtvoedingen: Beurten maken',
        'Weekend: Een ouder slaapt uit, andere vroege shift',
        'Schema communicatie: Beide ouders moeten routine kennen',
        'Backup plannen: Voor wanneer een ouder weg is'
      ],
      conflictPrevention: [
        'Schriftelijk schema voorkomt miscommunicatie',
        'Flexibiliteit afspraken maken vooraf',
        'Verschillende benaderingen respecteren',
        'Regelmatige evaluatie samen'
      ],
      managingExpectations: [],
      socialActivities: []
    },
    {
      aspect: 'Familie & Vrienden',
      roleDivision: [],
      conflictPrevention: [],
      managingExpectations: [
        'Uitleg geven waarom schema belangrijk is',
        'Flexibiliteit tonen voor speciale momenten',
        'Compromissen zoeken (bijv. 30 min later)',
        'Begrip vragen voor aanpassingsperiode'
      ],
      socialActivities: [
        'Lunch afspraak: Plan rond 11:00-13:00 voeding',
        'Diner uitje: Vroege reservering (17:30-18:00)',
        'Familie bezoek: Communiceer schema van tevoren',
        'Verjaardagen: Plan late middag bezoek'
      ]
    }
  ]

  const longTermPerspective = {
    evolution: [
      '6 maanden: 4 flessen + 3 maaltijden',
      '9 maanden: 3 flessen + 3 maaltijden + snacks',
      '12 maanden: 2-3 flessen + reguliere maaltijden',
      '18 maanden: Meestal alleen bedtijd fles'
    ],
    transitionPlanning: [
      'Vaste voeding integratie geleidelijk',
      'Fles reductie stap voor stap',
      'Peuter schema voorbereiden',
      'Flexibiliteit behouden voor groei'
    ],
    successMetrics: [
      'Baby is vrolijk tussen voedingen',
      'Voorspelbare slaaptijden',
      'Ouders kunnen plannen maken',
      'Gewichtstoename normaal',
      'Minder stress rond voedingen'
    ]
  }

  const faqData = [
    {
      question: 'Hoe lang duurt het om een schema te vestigen?',
      answer: 'Gemiddeld 2-4 weken voor een basis schema, 6-8 weken voor een stabiel ritme. Elke baby is anders.'
    },
    {
      question: 'Moet ik baby wakker maken voor voedingen?',
      answer: 'In de eerste weken tijdens de dag wel, vooral als baby meer dan 4 uur slaapt. \'s Nachts niet.'
    },
    {
      question: 'Kan een schema te rigid zijn?',
      answer: 'Ja, behoud altijd flexibiliteit voor groeiperiodes, ziekte, en individuele behoeften van je baby.'
    },
    {
      question: 'Wat als schema niet werkt na 4 weken?',
      answer: 'Evalueer of tijden realistisch zijn voor jouw baby. Sommige baby\'s hebben andere natuurlijke ritmes.'
    },
    {
      question: 'Hoe combineer ik borstvoeding en flesvoeding in schema?',
      answer: 'Zelfde tijden handhaven, maar borstvoeding kan vaker nodig zijn door snellere vertering.'
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
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-primary" />
                Voedingsritme Opbouwen: Complete Gids voor Nederlandse Ouders
              </h1>
              <p className="text-gray-600">
                Een goed voedingsritme is de basis voor beter slapen, voor zowel baby als ouders. 
                Leer hoe je stap-voor-stap een voorspelbaar schema opbouwt dat past bij jouw gezin, 
                met praktische tips voor elke leeftijd.
              </p>
            </div>

            {/* Why Life Changing */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Waarom een Voedingsritme Levensveranderend Is</h2>
              
              <p className="text-gray-700 mb-4">
                Een consistent voedingsritme biedt <strong>voorspelbaarheid</strong> voor je baby en 
                <strong>structuur</strong> voor het hele gezin. Baby's gedijen bij routine - het geeft 
                hen veiligheid en helpt hun biologische klok ontwikkelen.
              </p>
              
              <div className="mb-4">
                <h3 className="font-medium text-primary mb-3">Bewezen Voordelen van een Vast Ritme:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border border-gray-200 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{benefit.stat}</span>
                      <span className="text-sm text-gray-700">{benefit.description}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-700">
                  <strong>Onderzoek van de Vrije Universiteit Amsterdam</strong> toont aan dat baby's 
                  met een vast voedingsritme vanaf 8 weken 2 uur langer doorslapen dan baby's zonder routine.
                </p>
              </div>
            </div>

            {/* Age Specific Schedules */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Leeftijd-Specifieke Voedingsschema's
              </h2>
              
              <div className="space-y-8">
                {ageSpecificSchedules.map((ageGroup, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-gray-900">{ageGroup.age}</h3>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {ageGroup.phase}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-gray-600">Frequentie: </span>
                          <span className="text-sm text-gray-700">{ageGroup.frequency}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-600">Hoeveelheid: </span>
                          <span className="text-sm text-gray-700">{ageGroup.amount}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-600">Doelstelling: </span>
                          <span className="text-sm text-gray-700">{ageGroup.flexibility}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-600">Nachtvoeding: </span>
                          <span className="text-sm text-gray-700">{ageGroup.nightFeeding}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-primary mb-3">
                          {ageGroup.age === '6-12 Maanden' ? 'Gemengd Schema' : 'Basis Schema'}
                        </h4>
                        <div className="space-y-2">
                          {ageGroup.schedule.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex justify-between items-center text-sm">
                              <span className="font-medium text-gray-700">{item.time}</span>
                              <span className="text-gray-600">{item.activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {ageGroup.tip && (
                      <div className="p-3 border border-gray-200 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>Tip:</strong> {ageGroup.tip}
                        </p>
                      </div>
                    )}
                    
                    {index < ageSpecificSchedules.length - 1 && (
                      <div className="border-b border-gray-200 mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step by Step Implementation */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Stap-voor-Stap Ritme Opbouwen
              </h2>
              
              <div className="space-y-6">
                {implementationSteps.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900">{step.period}</h3>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {step.phase}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-primary mb-2">Wat te doen:</h4>
                      <ul className="space-y-1">
                        {step.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {step.example && (
                      <div className="p-3 border border-gray-200 bg-gray-50 rounded-lg mb-4">
                        <h4 className="font-medium text-primary mb-1">Dagboek Voorbeeld:</h4>
                        <p className="text-sm text-gray-700 font-mono">{step.example}</p>
                      </div>
                    )}
                    
                    {step.tips && Array.isArray(step.tips) && step.tips.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Praktische Aanpak:</h4>
                        <ul className="space-y-1">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2">
                              <span className="text-gray-600 font-medium text-sm"></span>
                              <span className="text-sm text-gray-700">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {step.progression && Array.isArray(step.progression) && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Schema Aanscherping:</h4>
                        <ul className="space-y-1">
                          {step.progression.map((prog, progIndex) => (
                            <li key={progIndex} className="flex items-start space-x-2">
                              <span className="text-gray-600 font-medium text-sm"></span>
                              <span className="text-sm text-gray-700">{prog}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {index < implementationSteps.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Techniques */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Praktische Implementatie Strategieën</h2>
              
              <div className="space-y-6">
                {techniques.map((technique, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-2">{technique.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{technique.description}</p>
                    
                    {technique.rules && Array.isArray(technique.rules) && technique.rules.length > 0 && (
                      <ul className="space-y-1">
                        {technique.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {technique.windows && Array.isArray(technique.windows) && technique.windows.length > 0 && (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-2 text-sm font-medium text-gray-700">Leeftijd</th>
                              <th className="text-left py-2 text-sm font-medium text-gray-700">Wakker Periode</th>
                              <th className="text-left py-2 text-sm font-medium text-gray-700">Voor Volgende Slaap</th>
                            </tr>
                          </thead>
                          <tbody>
                            {technique.windows.map((window, windowIndex) => (
                              <tr key={windowIndex} className="border-b border-gray-200">
                                <td className="py-2 text-sm text-gray-700">{window.age}</td>
                                <td className="py-2 text-sm text-gray-700">{window.wakePeriod}</td>
                                <td className="py-2 text-sm text-gray-700">{window.sequence}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    
                    {technique.details && Array.isArray(technique.details) && technique.details.length > 0 && (
                      <ul className="space-y-1">
                        {technique.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {technique.approach && Array.isArray(technique.approach) && technique.approach.length > 0 && (
                      <ul className="space-y-1">
                        {technique.approach.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {index < techniques.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Common Challenges */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelvoorkomende Uitdagingen & Oplossingen</h2>
              
              <div className="space-y-6">
                {commonChallenges.map((challenge, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-3">"{challenge.challenge}"</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Mogelijke oorzaken:</h4>
                        <ul className="space-y-1">
                          {(challenge.causes || []).map((cause, causeIndex) => (
                            <li key={causeIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-primary mb-2">Oplossingen:</h4>
                        <ul className="space-y-1">
                          {(challenge.solutions || []).map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {challenge.workdaySchedule && Array.isArray(challenge.workdaySchedule) && challenge.workdaySchedule.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Werkdag Schema:</h4>
                        <div className="space-y-2">
                          {challenge.workdaySchedule.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex justify-between items-center text-sm p-2 border border-gray-200 bg-gray-50 rounded">
                              <span className="font-medium text-gray-700">{item.time}</span>
                              <span className="text-gray-600">{item.activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {challenge.communicationTips && Array.isArray(challenge.communicationTips) && challenge.communicationTips.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Communicatie Tips:</h4>
                        <ul className="space-y-1">
                          {challenge.communicationTips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {challenge.balanceStrategy && Array.isArray(challenge.balanceStrategy) && challenge.balanceStrategy.length > 0 && (
                      <div>
                        <h4 className="font-medium text-primary mb-2">Balans Strategie:</h4>
                        <ul className="space-y-1">
                          {challenge.balanceStrategy.map((strategy, strategyIndex) => (
                            <li key={strategyIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{strategy}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {index < commonChallenges.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Special Situations */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Schema's voor Speciale Situaties</h2>
              
              <div className="space-y-6">
                {specialSituations.map((situation, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-3">{situation.situation}</h3>
                    
                    {situation.planning && Array.isArray(situation.planning) && situation.planning.length > 0 && (
                      <ul className="space-y-2 text-sm text-gray-700">
                        {situation.planning.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {situation.approach && Array.isArray(situation.approach) && situation.approach.length > 0 && (
                      <ul className="space-y-2 text-sm text-gray-700">
                        {situation.approach.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {situation.babyIll && situation.parentIll && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-primary mb-2">Baby Ziek:</h4>
                          <ul className="space-y-1">
                            {(situation.babyIll || []).map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-primary mb-2">Ouder Ziek:</h4>
                          <ul className="space-y-1">
                            {(situation.parentIll || []).map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {index < specialSituations.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Adjustments */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Schema Aanpassingen per Ontwikkelingsfase</h2>
              
              <div className="space-y-6">
                {growthAdjustments.map((adjustment, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-3">{adjustment.phase}</h3>
                    
                    {adjustment.timing && Array.isArray(adjustment.timing) && adjustment.timing.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Timing Verwachtingen:</h4>
                        <ul className="space-y-1">
                          {adjustment.timing.map((time, timeIndex) => (
                            <li key={timeIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{time}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {adjustment.modifications && Array.isArray(adjustment.modifications) && adjustment.modifications.length > 0 && (
                      <div className="p-3 border border-gray-200 bg-white rounded-lg mb-4">
                        <h4 className="font-medium text-primary mb-2">Schema Modificaties:</h4>
                        <ul className="space-y-1">
                          {adjustment.modifications.map((mod, modIndex) => (
                            <li key={modIndex} className="text-sm text-gray-700 font-mono">{mod}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {adjustment.impact && Array.isArray(adjustment.impact) && adjustment.impact.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Schema Impact:</h4>
                        <ul className="space-y-1">
                          {adjustment.impact.map((impact, impactIndex) => (
                            <li key={impactIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{impact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {adjustment.strategy && Array.isArray(adjustment.strategy) && adjustment.strategy.length > 0 && (
                      <div>
                        <h4 className="font-medium text-primary mb-2">Aanpassingsstrategie:</h4>
                        <ul className="space-y-1">
                          {adjustment.strategy.map((strat, stratIndex) => (
                            <li key={stratIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{strat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {index < growthAdjustments.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Family Social Aspects */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Familie & Sociale Aspecten
              </h2>
              
              <div className="space-y-6">
                {familySocialAspects.map((aspect, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-3">{aspect.aspect}</h3>
                    
                    {aspect.roleDivision && Array.isArray(aspect.roleDivision) && aspect.roleDivision.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Rol Verdeling:</h4>
                        <ul className="space-y-1">
                          {aspect.roleDivision.map((role, roleIndex) => (
                            <li key={roleIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {aspect.conflictPrevention && Array.isArray(aspect.conflictPrevention) && aspect.conflictPrevention.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Conflict Preventie:</h4>
                        <ul className="space-y-1">
                          {aspect.conflictPrevention.map((prevention, prevIndex) => (
                            <li key={prevIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{prevention}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {aspect.managingExpectations && Array.isArray(aspect.managingExpectations) && aspect.managingExpectations.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-primary mb-2">Verwachtingen Manageren:</h4>
                        <ul className="space-y-1">
                          {aspect.managingExpectations.map((expectation, expIndex) => (
                            <li key={expIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{expectation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {aspect.socialActivities && Array.isArray(aspect.socialActivities) && aspect.socialActivities.length > 0 && (
                      <div>
                        <h4 className="font-medium text-primary mb-2">Sociale Activiteiten:</h4>
                        <div className="space-y-2">
                          {aspect.socialActivities.map((activity, actIndex) => (
                            <div key={actIndex} className="text-sm text-gray-700 p-2 border border-gray-200 bg-gray-50 rounded font-mono">
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {index < familySocialAspects.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Long Term Perspective */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Lange Termijn Perspectief
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">6-12 Maanden Vooruitzicht</h3>
                  <div className="space-y-2">
                    {longTermPerspective.evolution.map((evolution, index) => (
                      <div key={index} className="text-sm text-gray-700 p-2 border border-gray-200 bg-gray-50 rounded">
                        {evolution}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary mb-3">Overgang Planning</h3>
                  <ul className="space-y-2">
                    {longTermPerspective.transitionPlanning.map((plan, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{plan}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary mb-3">Success Metrics</h3>
                  <ul className="space-y-2">
                    {longTermPerspective.successMetrics.map((metric, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Target className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <h2 className="text-lg font-semibold text-primary mb-4">Conclusie: Geduld en Consistentie</h2>
              
              <p className="text-gray-700 mb-4">
                Een voedingsritme opbouwen is <strong>een proces, geen bestemming</strong>. Het vereist 
                geduld, consistentie, en de bereidheid om aan te passen wanneer nodig. <strong>Elk kind 
                is uniek</strong> - wat bij het ene kind werkt, hoeft bij het andere niet te werken.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Onthoud:</strong> Het doel is niet een perfect schema, maar een 
                    <strong>voorspelbare routine</strong> die werkt voor jouw gezin.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Start klein,</strong> bouw geleidelijk op, en <strong>vier kleine 
                    overwinningen</strong>. Voor je het weet heb je een routine die iedereen helpt 
                    beter te slapen.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde Artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link 
                  href="/kennisbank/praktische-tips"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="font-medium text-gray-700">Praktische Tips </div>
                  <div className="text-sm text-gray-600">Alle praktische voedingstips</div>
                </Link>
                <Link 
                  href="/kennisbank/voedingstechnieken"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="font-medium text-gray-700">Voedingstechnieken </div>
                  <div className="text-sm text-gray-600">Technieken voor succesvol voeden</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar 
          images={[
            {
              src: "/borstvoeding.webp",
              alt: "Voedingsritme opbouwen moeder en baby",
              caption: "Structuur en routine voor baby en ouders"
            },
            {
              src: "/kunstvoeding.webp", 
              alt: "Baby met voedingsschema",
              caption: "Een tevreden baby met voorspelbaar ritme"
            },
            {
              src: "/top-view-sleeping-baby.webp",
              alt: "Slapende baby door goed ritme",
              caption: "Rust door een goed voedingsritme"
            }
          ]}
          adTopics={["Baby Planning", "Ouder Ondersteuning"]}
        />
      </div>
    </Layout>
  )
}