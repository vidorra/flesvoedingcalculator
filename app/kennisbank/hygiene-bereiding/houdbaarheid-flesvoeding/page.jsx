import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Clock, AlertTriangle, Thermometer, Shield, CheckCircle, XCircle } from 'lucide-react'

export const metadata = {
  title: 'Houdbaarheid van Flesvoeding: Wanneer Weggooien? Complete Nederlandse Veiligheidsgids 2025',
  description: 'Weten wanneer flesvoeding nog veilig is voorkomt voedselvergiftiging en spaart geld. Deze uitgebreide gids geeft exacte tijdslimieten en praktische tips voor Nederlandse ouders.',
}

export default function HoudbaarheidFlesvoedingPage() {
  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/flesvoeding-close-up.webp",
      alt: "Veilige flesvoeding bewaring",
      caption: "Juiste bewaring voorkomt voedselvergiftiging"
    },
    {
      src: "/sterilisator-babyflessen.webp", 
      alt: "Baby krijgt veilige fles",
      caption: "Veiligheid staat altijd voorop"
    },
    {
      src: "/difrax-fles-kunstvoeding.webp",
      alt: "Flesvoeding tijdslimieten",
      caption: "Ken de exacte bewaarregels"
    }
  ]

  // Ad targeting keywords
  const adTopics = ["Voedselveiligheid", "Baby Verzorging", "Flesvoeding Tips"]

  // Time limits data
  const timeLimits = [
    {
      situation: "Kamertemperatuur (18-22°C)",
      freshMade: "1 uur maximum",
      babyDrunk: "30 minuten",
      untouched: "45 minuten",
      warning: "Na 1 uur altijd weggooien"
    },
    {
      situation: "Koelkast (2-4°C)", 
      freshMade: "24 uur maximum",
      babyDrunk: "Direct weggooien",
      untouched: "24 uur",
      warning: "Na 24 uur altijd weggooien"
    },
    {
      situation: "Onderweg (auto/tas)",
      freshMade: "30 minuten",
      babyDrunk: "15 minuten", 
      untouched: "30 minuten",
      warning: "Warme auto verkort tijd drastisch"
    }
  ]

  // Danger bacteria
  const dangerBacteria = [
    {
      name: "Salmonella",
      symptoms: "Diarree, koorts, braken",
      severity: "Hoog",
      duration: "3-7 dagen"
    },
    {
      name: "E. coli", 
      symptoms: "Bloedige diarree",
      severity: "Zeer hoog",
      duration: "5-10 dagen"
    },
    {
      name: "Cronobacter",
      symptoms: "Hersenvliesontsteking", 
      severity: "Levensbedreigend",
      duration: "14+ dagen"
    },
    {
      name: "Clostridium",
      symptoms: "Ernstige buikkrampen",
      severity: "Hoog", 
      duration: "2-5 dagen"
    }
  ]

  // Signs of spoilage
  const spoilageSigns = [
    {
      category: "Visueel",
      signs: [
        "Klontjes of scheiding van vloeistof",
        "Verandering van kleur (gelig/groenig)",
        "Vlokken of deeltjes in melk",
        "Dikke consistentie"
      ]
    },
    {
      category: "Geur", 
      signs: [
        "Zure, wrange geur",
        "Ongewoon sterke melkgeur",
        "Metalige of chemische geur",
        "Rotte eieren geur"
      ]
    },
    {
      category: "Smaak",
      signs: [
        "Zuur of bitter",
        "Metalige bijsmaak", 
        "Ongewoon zoet",
        "Wrange nasmaak"
      ]
    }
  ]

  // Storage tips
  const storageTips = [
    "Gebruik altijd schone flessen en spenen",
    "Koelkast temperatuur: 2-4°C controleren",
    "Bereid alleen wat nodig is voor die voeding",
    "Schrijf tijd op fles/container",
    "Gebruik koeltas onderweg met koelelementen",
    "Nooit opwarmen in magnetron",
    "Bij twijfel: wegooien en nieuw maken"
  ]

  // Common mistakes
  const commonMistakes = [
    {
      mistake: "Restjes bewaren voor later",
      why: "Baby's speeksel bevat bacteriën die zich snel vermeerderen",
      solution: "Gooi restjes direct weg na voeding"
    },
    {
      mistake: "Fles laten staan bij kamertemperatuur",
      why: "Bacteriën verdubbelen elke 20 minuten bij 20°C+",
      solution: "Direct koelkast in of weggooien na 1 uur"
    },
    {
      mistake: "Verwarmen in magnetron",
      why: "Ongelijke warmte, hete plekken kunnen baby verbranden",
      solution: "Warm op in warm water of flessenwarmer"
    },
    {
      mistake: "Te lang vooruit bereiden",
      why: "Risico op bacteriegroei, verlies van voedingsstoffen",
      solution: "Bereid max 24 uur vooruit, bewaar gekoeld"
    }
  ]

  // FAQ data
  const faqData = [
    {
      question: "Hoe lang mag flesvoeding in de auto blijven?",
      answer: "Maximum 30 minuten bij normale temperatuur. In warme auto (25°C+) slechts 15 minuten. Gebruik altijd koeltas met koelelementen voor langere ritten."
    },
    {
      question: "Kan ik flesvoeding twee keer opwarmen?",
      answer: "Nee, nooit. Eenmaal opgewarmd moet de fles binnen 1 uur gebruikt of weggegooid worden. Herhaald opwarmen vergroot bacterierisico exponentieel."
    },
    {
      question: "Wat als mijn baby de fles niet leeg drinkt?",
      answer: "Gooi restjes direct weg. Baby's speeksel introduceert bacteriën in de melk die zich snel vermeerderen, ook in de koelkast."
    },
    {
      question: "Hoe controleer ik of mijn koelkast koud genoeg is?",
      answer: "Gebruik een koelkastthermometer. Optimale temperatuur is 2-4°C. Controleer maandelijks en stel bij indien nodig."
    },
    {
      question: "Mag kant-en-klare flesvoeding langer bewaard worden?",
      answer: "Nee, dezelfde regels gelden. Geopende kant-en-klare flesvoeding is zelfs gevoeliger voor bacteriën dan zelf gemaakte."
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Kennisbank  Hygiëne & Bereiding</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-primary" />
                Houdbaarheid van Flesvoeding: Wanneer Weggooien?
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Weten wanneer flesvoeding nog veilig is voorkomt voedselvergiftiging en spaart geld. 
                Deze uitgebreide gids geeft exacte tijdslimieten en praktische tips voor Nederlandse ouders.
              </p>
            </div>

            {/* Why crucial section */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Waarom Houdbaarheid Cruciaal is voor Baby's
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Baby's zijn extra kwetsbaar voor voedselvergiftiging door hun onderontwikkelde immuunsysteem. 
                Nederlandse ziekenhuis data toont jaarlijks 2.400 zuigelingen opgenomen door verkeerd bewaarde flesvoeding.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Baby's Zijn Kwetsbaarder:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">50% lagere weerstand eerste 6 maanden</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Minder zuur maagzuur (pH 3-4 vs 1-2)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Darmflora nog in ontwikkeling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Beperkte eigen antistof aanmaak</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Bacteriegroei Snelheid:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">0-1 uur: Veilig niveau</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">1-2 uur: Verhoogd risico</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <XCircle className="w-4 h-4 text-gray-700 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">2-4 uur: Gevaarlijk niveau</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <XCircle className="w-4 h-4 text-gray-700 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">4+ uur: Zeer gevaarlijk</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Danger bacteria table */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Gevaarlijke Bacteriën in Bedorven Melk</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-white">
                      <th className="text-left p-3 font-medium">Bacterie</th>
                      <th className="text-left p-3 font-medium">Symptomen</th>
                      <th className="text-left p-3 font-medium">Ernstgraad</th>
                      <th className="text-left p-3 font-medium">Opnameduur</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dangerBacteria.map((bacteria, index) => (
                      <tr key={index}>
                        <td className="p-3 font-medium text-gray-700">{bacteria.name}</td>
                        <td className="p-3 text-gray-700">{bacteria.symptoms}</td>
                        <td className="p-3">
                          <span className={`text-sm font-medium ${
                            bacteria.severity === 'Levensbedreigend' ? 'text-gray-800' :
                            bacteria.severity === 'Zeer hoog' ? 'text-gray-700' :
                            'text-gray-600'
                          }`}>
                            {bacteria.severity}
                          </span>
                        </td>
                        <td className="p-3 text-gray-700">{bacteria.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Time limits */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Exacte Tijdslimieten per Situatie
              </h2>
              
              <div className="space-y-6">
                {timeLimits.map((limit, index) => (
                  <div key={index} className="p-4">
                    <h3 className="font-medium text-primary mb-3">{limit.situation}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Vers klaargemaakt: {limit.freshMade}</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Baby heeft gedronken: {limit.babyDrunk}</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Niet aangeraakt: {limit.untouched}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-3">
                        <p className="text-sm text-amber-700 font-medium">
                           {limit.warning}
                        </p>
                      </div>
                    </div>
                    {index < timeLimits.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Signs of spoilage */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Herkennen van Bedorven Flesvoeding
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {spoilageSigns.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-3">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.signs.map((sign, signIndex) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-700">
                  <strong>Gouden regel:</strong> Bij twijfel over houdbaarheid, gooi de fles weg en maak nieuwe. 
                  De kosten van nieuwe melk zijn veel lager dan medische kosten bij voedselvergiftiging.
                </p>
              </div>
            </section>

            {/* Storage tips */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Thermometer className="w-5 h-5 mr-2" />
                Praktische Bewaartips
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Essentiële Regels:</h3>
                  <ul className="space-y-2">
                    {storageTips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-3">Temperatuur Richtlijnen:</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-medium text-gray-700 mb-1">Koelkast:</h4>
                      <p className="text-gray-600">2-4°C - Controleer met thermometer</p>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <h4 className="font-medium text-gray-700 mb-1">Kamertemperatuur:</h4>
                      <p className="text-gray-600">18-22°C - Maximum 1 uur</p>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <h4 className="font-medium text-gray-700 mb-1">Warm weer:</h4>
                      <p className="text-gray-600">25°C+ - Maximum 30 minuten</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Common mistakes */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgemaakte Houdbaarheidsfouten</h2>
              
              <div className="space-y-4">
                {commonMistakes.map((mistake, index) => (
                  <div key={index} className="p-4">
                    <h3 className="font-medium text-primary mb-2"> {mistake.mistake}</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Waarom gevaarlijk:</strong> {mistake.why}
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong> Juiste aanpak:</strong> {mistake.solution}
                    </p>
                    {index < commonMistakes.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Warning section */}
            <section className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Wanneer Direct Medische Hulp Zoeken</h3>
                  <p className="text-sm text-amber-700 leading-relaxed mb-3">
                    Contact opnemen met huisarts of spoedeisende hulp bij deze symptomen na mogelijk bedorven voeding:
                  </p>
                  <ul className="space-y-1 text-sm text-amber-700">
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Koorts hoger dan 38°C</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Aanhoudend braken (meer dan 6 uur)</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Bloedige diarree</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Tekenen van uitdroging (droge luier, slapheid)</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Ongewoon veel huilen of slapheid</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgestelde Vragen</h2>
              
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
            </section>

            {/* Call to action */}
            <section className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link 
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-gray-700">Bereken de juiste hoeveelheden </div>
                    <div className="text-gray-600">Gebruik onze calculator voor veilige voedingsschemas</div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Related articles */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Gerelateerde Artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/hygiene-bereiding/flessen-steriliseren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Flessen steriliseren </div>
                  <div className="text-gray-600">Complete gids voor veilige fles reiniging</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/flesvoeding-bewaren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Flesvoeding bewaren </div>
                  <div className="text-gray-600">Alle bewaar en opwarming tips</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Fles bereiden stap voor stap </div>
                  <div className="text-gray-600">Veilige bereiding van A tot Z</div>
                </Link>
                <Link href="/kennisbank/problemen-oplossen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Problemen oplossen </div>
                  <div className="text-gray-600">Hulp bij veelvoorkomende problemen</div>
                </Link>
              </div>
            </section>

          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}