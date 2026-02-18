import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Refrigerator, Clock, AlertTriangle, CheckCircle, Thermometer, Shield, ArrowRight, } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding Bewaren: Complete Veiligheidsgids voor Nederlandse Ouders 2026',
  description: 'Veilig bewaren van flesvoeding voorkomt voedselinfecties en voorkomt verspilling. Leer alle regels voor koelkast, vriezer en kamertemperatuur bewaring, plus praktische tips voor onderweg en nachtvoeding.',
}


  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/flesvoeding.webp",
      alt: "Proper flesvoeding bewaring",
      caption: "Veilige bewaring van flesvoeding"
    },
    {
      src: "/mother_and_baby.webp",
      alt: "Moeder bereidt flesvoeding hygiënisch voor",
      caption: "Hygiëne en veiligheid voorop"
    },
    {
      src: "/baby.webp",
      alt: "Baby krijgt veilig bewaarde flesvoeding",
      caption: "Verse en veilige voeding"
    }
  ]

  const adTopics = ["Voeding Bewaring", "Baby Veiligheid", "Hygiëne", "Flesvoeding Accessoires"]

export default function FlesvoedingBewarenPage() {
  const storageRisks = [
    'Salmonella infectie - Koorts, braken, diarree',
    'E.coli besmetting - Ernstige darminfectie',
    'Chronobacter sakazakii - Vooral gevaarlijk voor premature baby\'s',
    'Voedingsvergiftiging - Kan ziekenhuisopname vereisen'
  ]

  const powderStorage = [
    {
      type: 'Geopende Bus/Doos',
      location: 'Koele, droge plaats (niet koelkast!)',
      temperature: 'Kamertemperatuur (18-22°C)',
      duration: '3-4 weken na opening',
      tips: [
        'Altijd goed dichtdoen na gebruik',
        'Nooit natte lepel in poeder',
        'Droge omgeving essentieel'
      ]
    },
    {
      type: 'Ongeopende Verpakking',
      location: 'Pantry of keukenkast',
      temperature: 'Stabiel onder 25°C',
      duration: 'Tot vervaldatum op verpakking',
      tips: [
        'Droge omgeving',
        'Temperatuur stabiel houden'
      ]
    }
  ]

  const readyMadeStorage = [
    {
      condition: 'Kamertemperatuur (20°C)',
      items: [
        { situation: 'Net klaargemaakt', maxTime: '2 uur', warning: 'Daarna weggooien' },
        { situation: 'Baby heeft gedronken', maxTime: '1 uur', warning: 'Speeksel bevordert bacteriegroei' },
        { situation: 'Warme dag (25°C+)', maxTime: '1 uur', warning: 'Bacteriën groeien sneller' }
      ]
    },
    {
      condition: 'Koelkast (2-4°C)',
      items: [
        { situation: 'Verse voeding', maxTime: '24 uur', warning: 'Houdbaar' },
        { situation: 'Angebroken fles', maxTime: '0 uur', warning: 'Direct weggooien na voeding' },
        { situation: 'Bewaarlocatie', maxTime: 'Midden/onderste schap', warning: 'Stabielste temperatuur' }
      ]
    },
    {
      condition: 'Vriezer (-18°C)',
      items: [
        { situation: 'Klaar gemaakte voeding', maxTime: 'NIET AANBEVOLEN', warning: 'Textuur en voedingswaarde veranderen' },
        { situation: 'Uitzondering', maxTime: '24 uur max', warning: 'Alleen bij absolute noodzaak' }
      ]
    }
  ]

  const safePreparationSteps = [
    'Was handen grondig (20 seconden)',
    'Steriliseer fles en speen',
    'Kook water en laat afkoelen tot 70°C',
    'Meet exacte hoeveelheid water',
    'Voeg poeder toe volgens instructies',
    'Schud goed en test temperatuur',
    'Geef direct aan baby'
  ]

  const fridgeStorageSteps = [
    'Volg stappen 1-6 hierboven',
    'Koel snel af onder koud stromend water',
    'Plaats binnen 30 minuten in koelkast',
    'Label met tijd van bereiding',
    'Gebruik binnen 24 uur',
    'Verwarm alleen de benodigde hoeveelheid'
  ]

  const heatingMethods = [
    {
      method: 'Flessenwarmer',
      rating: 'BEST GECONTROLEERD',
      benefits: [
        'Gelijkmatige warmteverdeling',
        'Voorkomt oververhitting',
        'Behoud van voedingsstoffen'
      ],
      time: '3-5 minuten gemiddeld'
    },
    {
      method: 'Warm Waterbad',
      benefits: [
        'Pan met warm water (niet kokend!)',
        'Fles erin zetten, regelmatig draaien',
        'Temperatuur water: 40-45°C'
      ],
      time: '5-8 minuten'
    },
    {
      method: 'Stromend Warm Water',
      benefits: [
        'Houd fles onder warme kraan',
        'Draai regelmatig voor gelijkmatige verwarming'
      ],
      time: '2-4 minuten'
    }
  ]

  const dangerousMethods = [
    { method: 'Magnetron', reason: 'Ongelijke hitte, hotspots', consequence: 'Brandwonden in mond' },
    { method: 'Kokend water', reason: 'Te heet, vernietigt vitamines', consequence: 'Voedingswaarde verlies' },
    { method: 'Directe vuur', reason: 'Oncontroleerbaar heet', consequence: 'Plastiek kan smelten' }
  ]

  const travelTips = [
    {
      situation: 'In de Auto - Korte Ritten (< 2 uur)',
      tips: [
        'Koeltas met ijspacks',
        'Fles in thermosfles bewaren',
        'Poedermelk apart meenemen',
        'Water in thermokan'
      ]
    },
    {
      situation: 'In de Auto - Lange Ritten',
      tips: [
        'Elektrische koelbox (12V aansluiting)',
        'Extra ijspacks als reserve',
        'Plan stops voor verse bereiding',
        'Neem extra poedermelk mee'
      ]
    },
    {
      situation: 'Op Vakantie - Vliegtuig',
      tips: [
        'Poedermelk in handbagage (geen vloeistofbeperking)',
        'Lege flessen meenemen',
        'Water kopen na security',
        'Vraag cabinepersoneel om warm water'
      ]
    },
    {
      situation: 'Op Vakantie - Hotel/Vakantiepark',
      tips: [
        'Vraag om koelkast op kamer',
        'Controleer temperatuur koelkast (2-4°C)',
        'Gebruik hotel magnetron NIET',
        'Vraag warm water bij receptie'
      ]
    }
  ]

  const nightPreparation = [
    {
      method: 'Koelkast Voorbereiding',
      steps: [
        'Maak 2-3 flessen klaar voor het slapen',
        'Bewaar in koelkast',
        'Zet flessenwarmer klaar',
        'Houd thermosfles warm water bij bed'
      ]
    },
    {
      method: 'Poeder Portionering',
      steps: [
        'Verdeel poeder in portie containers',
        'Zet thermosfles warm water (70°C) klaar',
        'Maak verse fles in 2 minuten',
        'Veiliger dan opwarmen uit koelkast'
      ]
    }
  ]

  const seasonalTips = [
    {
      season: 'Zomer (25°C+)',
      tips: [
        'Bewaar korter: Maximum 1 uur bij kamertemperatuur',
        'Extra koeling: Dubbele ijspacks in koeltas',
        'Schaduw: Houd flesvoeding uit direct zonlicht',
        'Airco: Let op temperatuurschommelingen in auto'
      ]
    },
    {
      season: 'Winter',
      tips: [
        'Houdbaarheid: Maximaal 1 uur bij kamertemperatuur (ook in de winter)',
        'Opwarmen duurt langer: Plan extra tijd',
        'Verwarming: Niet naast radiator bewaren',
        'Vorstbeveiliging: Voorkom bevriezen in auto'
      ]
    }
  ]

  const safetyChecklist = [
    'Handen gewassen voor bereiding',
    'Flessen en spenen schoon',
    'Water gekookt en afgekoeld tot 70°C',
    'Juiste poeder-water verhouding',
    'Temperatuur getest voor geven',
    'Restjes weggegooid na voeding',
    'Koelkasttemperatuur gecontroleerd (2-4°C)'
  ]

  const redFlags = [
    'Zure geur',
    'Klontjes in voeding',
    'Veranderde kleur',
    'Langer dan toegestane tijd bewaard',
    'Twijfel over bewaartijd',
    'Fles gevallen of beschadigd'
  ]

  const commonMistakes = [
    {
      mistake: 'Ik bewaar angebroken fles voor later',
      problem: 'Speeksel introduceert bacteriën',
      solution: 'Gooi altijd weg na voeding, maak verse fles'
    },
    {
      mistake: 'Ik warm dezelfde fles meerdere keren op',
      problem: 'Bacteriegroei bij elke opwarmcyclus',
      solution: 'Warm alleen op wat baby gaat drinken'
    },
    {
      mistake: 'Poedermelk in koelkast bewaren',
      problem: 'Vocht zorgt voor klontering en bacteriegroei',
      solution: 'Droge, koele plaats bij kamertemperatuur'
    },
    {
      mistake: 'Klaar gemaakte voeding mengen met verse',
      problem: 'Verschillende bewaartijden, verhoogd infectierisico',
      solution: 'Nooit mengen, altijd apart bewaren'
    }
  ]

  const faqData = [
    {
      question: 'Kan ik flesvoeding van gisteren nog gebruiken?',
      answer: 'Nee, klaar gemaakte flesvoeding is maximaal 24 uur houdbaar in de koelkast. Na deze tijd weggooien vanwege bacteriegroei risico.'
    },
    {
      question: 'Hoe weet ik of de flesvoeding nog goed is?',
      answer: 'Let op geur (moet neutraal), kleur (geen verkleuring) en textuur (geen klontertjes). Bij twijfel altijd weggooien.'
    },
    {
      question: 'Kan ik flesvoeding invriezen voor later?',
      answer: 'Dit wordt afgeraden omdat textuur en voedingswaarde achteruitgaan. Alleen bij absolute noodzaak, maximaal 24 uur.'
    },
    {
      question: 'Hoelang kan poedermelk open blijven staan?',
      answer: 'Geopende verpakking is 3-4 weken houdbaar op droge, koele plaats. Sluit altijd goed af na gebruik.'
    },
    {
      question: 'Is het erg als ik per ongeluk te lang bewaard heb?',
      answer: 'Gooi direct weg, ook al ziet het er normaal uit. Bacteriën zijn niet altijd zichtbaar of ruikbaar maar kunnen wel gevaarlijk zijn.'
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
              <div className="text-sm text-gray-500 mb-2">Hygiëne & Bereiding • Flesvoeding Bewaren</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Refrigerator className="w-6 h-6 mr-3 text-primary" />
                Flesvoeding Bewaren: Complete Veiligheidsgids voor Nederlandse Ouders
              </h1>
              <p className="text-gray-600">
                Veilig bewaren van flesvoeding voorkomt voedselinfecties en voorkomt verspilling. 
                Leer alle regels voor koelkast, vriezer en kamertemperatuur bewaring, plus praktische 
                tips voor onderweg en nachtvoeding.
              </p>
            </div>

            {/* Why Important */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Waarom Correct Bewaren Levensbelangrijk Is</h2>

              <p className="text-gray-700 mb-4">
                Verkeerd bewaarde flesvoeding kan binnen uren gevaarlijke bacteriën ontwikkelen die
                ernstige voedselinfecties veroorzaken bij baby's. Hun immuunsysteem is nog niet volgroeid,
                waardoor ze extra kwetsbaar zijn. Dit geldt zowel voor <Link href="/kennisbank/hygiene-bereiding/houdbaarheid-flesvoeding" className="text-primary hover:underline font-medium">verse bereide flesvoeding</Link> als voor bewaarde voeding.
              </p>
              
              <div className="mb-4">
                <h3 className="font-medium text-primary mb-3">Risico's van Verkeerd Bewaren:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {storageRisks.map((risk, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <p className="text-gray-700">
                  <strong>Belangrijk:</strong> verkeerd bewaarde babyvoeding kan ernstige infecties veroorzaken bij zuigelingen. Volg altijd de bewaarrichtlijnen.
                </p>
              </div>
            </div>

            {/* Powder Storage */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Poedermelk Bewaren</h2>
              
              <div className="space-y-6">
                {powderStorage.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-3">{item.type}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-gray-600">Locatie:</span>
                          <span className="text-sm text-gray-700 ml-2">{item.location}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-600">Temperatuur:</span>
                          <span className="text-sm text-gray-700 ml-2">{item.temperature}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-600">Houdbaar:</span>
                          <span className="text-sm text-gray-700 ml-2">{item.duration}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-primary mb-2">Belangrijke tips:</h4>
                        <ul className="space-y-1">
                          {item.tips.map((tip, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {index < powderStorage.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Ready Made Storage */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Klaar gemaakte Flesvoeding</h2>
              
              <div className="space-y-6">
                {readyMadeStorage.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-3">{section.condition}</h3>
                    
                    {section.condition === 'Kamertemperatuur (20°C)' ? (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-white">
                              <th className="border border-gray-300 px-4 py-2 text-left">Situatie</th>
                              <th className="border border-gray-300 px-4 py-2 text-left">Maximum Tijd</th>
                              <th className="border border-gray-300 px-4 py-2 text-left">Waarschuwing</th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.items.map((item, itemIndex) => (
                              <tr key={itemIndex} className={itemIndex % 2 === 1 ? "bg-white" : ""}>
                                <td className="border border-gray-300 px-4 py-2 font-medium">{item.situation}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.maxTime}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.warning}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">
                              <strong>{item.situation}:</strong> {item.maxTime} - {item.warning}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {index < readyMadeStorage.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Safe Preparation */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Stap-voor-Stap Veilige Bereiding</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Voor Directe Consumptie (VEILIGSTE METHODE)
                  </h3>
                  <ol className="space-y-2">
                    {safePreparationSteps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-gray-600 font-medium text-sm">{index + 1}.</span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary mb-3">Voor Bewaring in Koelkast</h3>
                  <ol className="space-y-2">
                    {fridgeStorageSteps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-gray-600 font-medium text-sm">{index + 1}.</span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Heating Methods */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Thermometer className="w-5 h-5 mr-2" />
                Opwarmen: Veilig en Effectief
              </h2>
              
              <div className="mb-6">
                <h3 className="font-medium text-primary mb-3">Veilige Opwarmmethoden</h3>
                <p className="text-gray-600 mb-4">
                  Voor meer details over alle veilige opwarmmethoden, zie onze uitgebreide <Link href="/kennisbank/hygiene-bereiding/veilig-verwarmen-flesvoeding" className="text-primary hover:underline font-medium">gids voor veilig verwarmen</Link>.
                </p>
                <div className="space-y-4">
                  {heatingMethods.map((method, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-700">{method.method}</h4>
                        {method.rating && (
                          <span className="text-xs bg-white text-gray-700 px-2 py-1 rounded-full">
                            {method.rating}
                          </span>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-1">
                          {method.benefits.map((benefit, benefitIndex) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div>
                          <span className="text-sm font-medium text-gray-600">Tijd: </span>
                          <span className="text-gray-700">{method.time}</span>
                        </div>
                      </div>
                      
                      {index < heatingMethods.length - 1 && (
                        <div className="border-b border-gray-200 mt-3"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-3">NOOIT Opwarmen Met:</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-white">
                        <th className="border border-gray-300 px-4 py-2 text-left">Methode</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Waarom Gevaarlijk</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Gevolg</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dangerousMethods.map((item, index) => (
                        <tr key={index} className={index % 2 === 1 ? "bg-white" : ""}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{item.method}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.reason}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.consequence}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Travel Tips */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Onderweg: Veilig Bewaren Buiten Huis</h2>

              <p className="text-gray-600 mb-4">
                Voor uitgebreide tips over flesvoeding op reis, zie onze artikelen over <Link href="/kennisbank/praktische-tips/flesvoeding-op-vakantie" className="text-primary hover:underline font-medium">flesvoeding op vakantie</Link> en <Link href="/kennisbank/praktische-tips/flesvoeding-werk-combineren" className="text-primary hover:underline font-medium">werk combineren met flesvoeding</Link>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {travelTips.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-3">{section.situation}</h3>
                    <ul className="space-y-2">
                      {section.tips.map((tip, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Night Preparation */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Nachtvoeding Voorbereiden
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nightPreparation.map((method, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-3">{method.method}</h3>
                    
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      {method.method === 'Koelkast Voorbereiding' && (
                        <p className="text-sm text-gray-700 mb-3">Voor het slapen:</p>
                      )}
                      <ul className="space-y-2">
                        {method.steps.map((step, stepIndex) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Seasonal Tips */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Seizoensgebonden Bewaartips</h2>
              
              <div className="space-y-6">
                {seasonalTips.map((season, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-3">{season.season}</h3>
                    <ul className="space-y-2">
                      {season.tips.map((tip, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {index < seasonalTips.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Checklist */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Voedselveiligheid Checklist</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Dagelijkse Veiligheidscheck</h3>
                  <ul className="space-y-2">
                    {safetyChecklist.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary mb-3">Waarschuwingssignalen - Gooi Weg Bij:</h3>
                  <ul className="space-y-2">
                    {redFlags.map((flag, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelgemaakte Fouten & Oplossingen</h2>
              
              <div className="space-y-6">
                {commonMistakes.map((mistake, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-2">Fout: "{mistake.mistake}"</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium text-gray-600">Probleem: </span>
                        <span className="text-gray-700">{mistake.problem}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Oplossing: </span>
                        <span className="text-gray-700">{mistake.solution}</span>
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
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelgestelde Vragen (FAQ)</h2>
              
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
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Conclusie: Veiligheid Staat Voorop</h2>
              
              <p className="text-gray-700 mb-4">
                Correct bewaren van flesvoeding is een van de belangrijkste vaardigheden voor elke ouder. 
                <strong>Bij twijfel altijd weggooien</strong> - het risico op voedselinfectie is het nooit waard. 
                Investeer in goede bewaarmaterialen zoals koeltassen en flessenwarmers - ze betalen zichzelf 
                terug door verspilling te voorkomen.
              </p>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <p className="text-gray-700">
                  <strong>Onthoud de gouden regel:</strong> Als je twijfelt over de bewaartijd of -methode, 
                  maak een verse fles. De gezondheid van je baby is belangrijker dan de kosten van weggegooid voeding.
                </p>
              </div>
            </div>

            {/* Flesvoeding Bewaar Producten */}
            <AffiliateProductWidget
              pageId="hygiene-bereiding_flesvoeding-bewaren"
              title="Flesvoeding Bewaar Producten"
            />

            {/* Navigation */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Gerelateerde Artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link
                  href="/kennisbank/hygiene-bereiding/houdbaarheid-flesvoeding"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Houdbaarheid flesvoeding →</div>
                  <div className="text-sm text-gray-600">Wanneer moet je flesvoeding weggooien</div>
                </Link>
                <Link
                  href="/kennisbank/hygiene-bereiding/veilig-verwarmen-flesvoeding"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Veilig verwarmen →</div>
                  <div className="text-sm text-gray-600">Alle methoden voor veilig opwarmen</div>
                </Link>
                <Link
                  href="/kennisbank/praktische-tips/flesvoeding-op-vakantie"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Flesvoeding op vakantie →</div>
                  <div className="text-sm text-gray-600">Tips voor bewaren onderweg</div>
                </Link>
                <Link
                  href="/"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Flesvoeding Calculator →</div>
                  <div className="text-sm text-gray-600">Bereken juiste hoeveelheden</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar 
          images={[
            {
              src: "/flesvoeding-close-up.webp",
              alt: "Veilige flesvoeding bereiding",
              caption: "Veilige bereiding en bewaring van flesvoeding"
            },
            {
              src: "/sterilisator-babyflessen.webp", 
              alt: "Hygiëne bij flesvoeding",
              caption: "Hygiëne voorkomt voedselinfecties"
            },
            {
              src: "/difrax-fles-kunstvoeding.webp",
              alt: "Verse babyflessen",
              caption: "Verse bereiding voor optimale veiligheid"
            }
          ]}
          adTopics={["Baby Veiligheid", "Hygiëne Producten"]}
        />
      </div>
    </Layout>
  )
}