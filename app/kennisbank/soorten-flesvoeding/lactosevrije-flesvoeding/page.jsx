import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Milk, Heart, AlertCircle, CheckCircle, Star, Euro, Users } from 'lucide-react'

export const metadata = {
  title: 'Lactosevrije Flesvoeding: Complete Nederlandse Gids 2025 - Wanneer Nodig & Beste Merken',
  description: 'Alles over lactosevrije flesvoeding in Nederland: wanneer nodig, beste merken, kosten, overstappen en waar te kopen. Complete gids voor ouders met lactose-intolerante baby\'s.',
}

export default function LactosevrijeFlesvoedingPage() {
  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/flesvoeding.webp",
      alt: "Baby met lactosevrije flesvoeding",
      caption: "Lactosevrije voeding voor gevoelige buikjes"
    },
    {
      src: "/flesvoeding-door-mama.webp", 
      alt: "Moeder voert baby met lactosevrije fles",
      caption: "Rust en vertrouwen met de juiste voeding"
    },
    {
      src: "/difrax-fles-kunstvoeding.webp",
      alt: "Lactosevrije flesvoeding merken en flessen",
      caption: "Keuze uit verschillende lactosevrije opties"
    }
  ]

  // Ad targeting keywords
  const adTopics = ["Lactosevrije Voeding", "Speciale Babyvoeding", "Medische Flesvoeding"]

  // Premium lactose-free options
  const premiumOptions = [
    {
      name: "Nutrilon Lactosevrij",
      price: "€16-22 per 400g",
      availability: "Alle Nederlandse apotheken",
      quality: "Medisch gevalideerd",
      unique: "PronutriPlus complex behouden",
      age: "0-12 maanden",
      pros: [
        "Nederlandse standaard (consultatiebureau erkend)",
        "Uitgebreid klinisch onderzoek",
        "Vergoed door zorgverzekeraar (op recept)",
        "Smaakverschil minimaal"
      ],
      cons: [
        "Duurste optie",
        "Alleen via apotheek verkrijgbaar"
      ],
      composition: {
        carbs: "Glucose siroop + maltodextrine",
        proteins: "Whey + caseïne (onveranderd)",
        fats: "LCPs (DHA/ARA) volledig",
        vitamins: "Identiek aan reguliere Nutrilon"
      }
    },
    {
      name: "Aptamil Lactose Free",
      price: "€14-20 per 400g", 
      availability: "Apotheek + online",
      quality: "Milupa/Danone research",
      unique: "Prebiotische vezels (GOS/FOS)",
      age: "0-12 maanden",
      pros: [
        "Uitstekende verteerbaarheid",
        "Prebiotica voor darmflora", 
        "Europese research backing",
        "Goede smaakacceptatie"
      ],
      cons: [
        "Beperkte Nederlandse distributie",
        "Iets zoeter dan reguliere melk"
      ],
      composition: {
        carbs: "Glucose siroop (primair)",
        prebiotics: "GOS/FOS mix voor darmgezondheid",
        proteins: "Optimale whey/caseïne ratio",
        nucleotides: "Immuunsysteem ondersteuning"
      }
    },
    {
      name: "HiPP Lactosevrij",
      price: "€18-25 per 500g",
      availability: "Gespecialiseerde winkels + online", 
      quality: "Biologisch + lactosevrij",
      unique: "Enige bio lactosevrije optie",
      age: "0-12 maanden",
      pros: [
        "Biologische kwaliteit behouden",
        "Geen kunstmatige toevoegingen",
        "Milieuvriendelijke productie",
        "Premium kwaliteit eiwitten"
      ],
      cons: [
        "Duurste lactosevrije optie",
        "Zeer beperkte beschikbaarheid Nederland"
      ],
      composition: {
        carbs: "Bio glucose + maltodextrine", 
        proteins: "Van bio melk (lactose verwijderd)",
        fats: "Biologische plantaardige oliën",
        vitamins: "Natuurlijke vitamines waar mogelijk"
      }
    }
  ]

  // When lactose-free is needed
  const needIndicators = [
    {
      category: "Primaire Lactose-intolerantie",
      symptoms: [
        "Diarree binnen 30 min na flesvoeding",
        "Buikpijn en krampen na elke voeding", 
        "Excessieve winderigheid",
        "Spugen en braakneigingen",
        "Onrust tijdens/na voeding"
      ],
      severity: "Zeldzaam bij baby's onder 1 jaar"
    },
    {
      category: "Secundaire Lactose-intolerantie",
      symptoms: [
        "Na maag-darminfectie",
        "Na antibioticakuur",
        "Bij langdurige diarree",
        "Tijdelijke intolerantie na ziekte"
      ],
      severity: "Meest voorkomende vorm bij baby's"
    },
    {
      category: "Transitoire Lactase-deficiëntie",
      symptoms: [
        "Premature baby's",
        "Zeer lage geboortegewicht",
        "Ontwikkeling nog niet voltooid",
        "Tijdelijk probleem"
      ],
      severity: "Lost zich vaak spontaan op"
    }
  ]

  // Transition steps
  const transitionSteps = [
    {
      step: "Week 1: Medisch Consult",
      tasks: [
        "Consulteer huisarts/consultatiebureau",
        "Bespreek symptomen en observaties", 
        "Vraag recept voor lactosevrije voeding",
        "Plan geleidelijke overgang"
      ]
    },
    {
      step: "Week 2: Geleidelijke Introductie", 
      tasks: [
        "Begin met 50/50 mix (regulier/lactosevrij)",
        "Observeer reacties en verbeteringen",
        "Verhoog lactosevrije percentage dagelijks",
        "Bijhouden voedingsdagboek"
      ]
    },
    {
      step: "Week 3: Volledige Overstap",
      tasks: [
        "100% lactosevrije voeding",
        "Monitor gewichtstoename", 
        "Controleer ontlastingspatroon",
        "Evalueer algemeen welzijn baby"
      ]
    },
    {
      step: "Week 4+: Stabilisatie & Vervolgafspraken",
      tasks: [
        "Regelmatige check-ups consultatiebureau",
        "Monitoren groei en ontwikkeling",
        "Overwegen terugkeer naar reguliere voeding (indien mogelijk)",
        "Voorbereiding op vaste voeding"
      ]
    }
  ]

  // Cost comparison 
  const costComparison = [
    {
      brand: "Nutrilon Lactosevrij",
      monthlyUsage: "4-5 blikken",
      costPerTin: "€16-22",
      monthlyCost: "€64-110",
      yearlyTotal: "€768-1320",
      insurance: "Vergoed op recept"
    },
    {
      brand: "Aptamil Lactose Free", 
      monthlyUsage: "4-5 blikken",
      costPerTin: "€14-20", 
      monthlyCost: "€56-100",
      yearlyTotal: "€672-1200",
      insurance: "Deels vergoed"
    },
    {
      brand: "HiPP Lactosevrij",
      monthlyUsage: "3-4 blikken (500g)",
      costPerTin: "€18-25",
      monthlyCost: "€54-100", 
      yearlyTotal: "€648-1200",
      insurance: "Niet vergoed"
    }
  ]

  // Common mistakes
  const commonMistakes = [
    {
      mistake: "Zelf diagnoseren zonder medisch advies",
      why: "Symptomen kunnen andere oorzaken hebben",
      solution: "Altijd eerst consulteren met huisarts/consultatiebureau"
    },
    {
      mistake: "Abrupt stoppen met reguliere voeding",
      why: "Kan spijsverteringsklachten verergeren", 
      solution: "Geleidelijke overgang over 7-10 dagen"
    },
    {
      mistake: "Te vroeg terugkeren naar reguliere voeding",
      why: "Darmen hebben tijd nodig om te herstellen",
      solution: "Minimaal 4-6 weken lactosevrij, dan onder medische begeleiding testen"
    },
    {
      mistake: "Verkeerde bereiding van lactosevrije voeding",
      why: "Concentratie kan anders zijn dan reguliere voeding",
      solution: "Volg instructies op verpakking nauwkeurig"
    }
  ]

  // FAQ data
  const faqData = [
    {
      question: "Hoe lang duurt het voordat verbetering zichtbaar is?",
      answer: "Bij echte lactose-intolerantie zie je vaak binnen 24-48 uur verbetering van symptomen. Volledige darmherstel kan 2-4 weken duren."
    },
    {
      question: "Kunnen baby's lactose-intolerantie 'ontgroeien'?",
      answer: "Ja, vooral secundaire lactose-intolerantie na ziektes is vaak tijdelijk. Primaire lactose-intolerantie bij baby's is zeldzaam maar kan permanent zijn."
    },
    {
      question: "Is lactosevrije voeding even voedzaam?",
      answer: "Ja, lactosevrije flesvoeding bevat alle noodzakelijke voedingsstoffen. Alleen lactose wordt vervangen door andere suikers zoals glucose."
    },
    {
      question: "Wat kost lactosevrije voeding vergeleken met reguliere?",
      answer: "Lactosevrije voeding is 40-80% duurder. Echter, op doktersrecept wordt het vaak (deels) vergoed door de zorgverzekeraar."
    },
    {
      question: "Waar kan ik lactosevrije flesvoeding kopen?",
      answer: "Apotheek (ruimste keuze), online, sommige drogisterijen. Voor vergoeding via zorgverzekeraar moet je het via de apotheek halen."
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Kennisbank  Soorten Flesvoeding</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Milk className="w-6 h-6 mr-3 text-primary" />
                Lactosevrije Flesvoeding: Complete Nederlandse Gids
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Alles over lactosevrije flesvoeding in Nederland: wanneer nodig, beste merken, kosten, 
                overstappen en waar te kopen. Complete gids voor ouders met lactose-intolerante baby's.
              </p>
            </div>

            {/* When needed */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Wanneer is Lactosevrije Flesvoeding Nodig?
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Lactose-intolerantie bij baby's is zeldzamer dan vaak gedacht. Echte primaire lactose-intolerantie 
                komt bij minder dan 1% van baby's voor. Secundaire intolerantie na ziekte is wel relatief veelvoorkomend.
              </p>

              <div className="space-y-6">
                {needIndicators.map((indicator, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-medium text-gray-700">{indicator.category}</h3>
                      <span className="text-sm bg-white text-gray-700 px-2 py-1 rounded">
                        {indicator.severity}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {indicator.symptoms.map((symptom, symIndex) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                    {index < needIndicators.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Premium options */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Beste Lactosevrije Flesvoeding Merken Nederland
              </h2>
              
              <div className="space-y-8">
                {premiumOptions.map((option, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-primary text-lg mb-1">{option.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center space-x-1"><Euro className="w-3 h-3" /><span>{option.price}</span></span>
                          <span className="flex items-center space-x-1"><Users className="w-3 h-3" /><span>{option.availability}</span></span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-700">{option.quality}</div>
                        <div className="text-xs text-gray-500">{option.age}</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 mb-4">
                      <h4 className="font-medium text-gray-700 mb-1"> Uniek kenmerk:</h4>
                      <p className="text-gray-600">{option.unique}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-medium text-primary mb-2"> Voordelen:</h4>
                        <ul className="space-y-1">
                          {option.pros.map((pro, proIndex) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2"> Nadelen:</h4>
                        <ul className="space-y-1">
                          {option.cons.map((con, conIndex) => (
                            <li key={index} className="flex items-start space-x-2">
                              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-medium text-gray-700 mb-2">Samenstelling highlights:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                        {Object.entries(option.composition).map(([key, value]) => (
                          <div key={index}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                          </div>
                        ))}
                      </div>
                    </div>

                    {index < premiumOptions.length - 1 && (
                      <div className="border-b border-gray-200 mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Transition steps */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Stap-voor-Stap Overstappen naar Lactosevrije Voeding
              </h2>
              
              <div className="space-y-6">
                {transitionSteps.map((step, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-3">{step.step}</h3>
                    <ul className="space-y-2">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                            {taskIndex + 1}
                          </span>
                          <span className="text-gray-700 text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                    {index < transitionSteps.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Cost comparison */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Euro className="w-5 h-5 mr-2" />
                Kosten Vergelijking Lactosevrije Flesvoeding
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Merk</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Per Blik</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Per Maand</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Per Jaar</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Verzekering</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costComparison.map((cost, index) => (
                      <tr key={index} className={index % 2 === 1 ? "bg-white" : ""}>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">{cost.brand}</td>
                        <td className="border border-gray-300 px-4 py-2">{cost.costPerTin}</td>
                        <td className="border border-gray-300 px-4 py-2">{cost.monthlyCost}</td>
                        <td className="border border-gray-300 px-4 py-2">{cost.yearlyTotal}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className={`text-xs px-2 py-1 rounded font-medium ${
                            cost.insurance === 'Vergoed op recept' ? 'bg-white text-primary' :
                            cost.insurance === 'Deels vergoed' ? 'bg-amber-100 text-amber-700' :
                            'bg-amber-50 text-amber-700'
                          }`}>
                            {cost.insurance}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 p-4 bg-white rounded-lg">
                <p className="text-sm text-primary">
                  <strong>Tip:</strong> Vraag je huisarts om een recept voor lactosevrije flesvoeding. 
                  Dit kan €200-400 per jaar besparen via zorgverzekeraar vergoeding.
                </p>
              </div>
            </section>

            {/* Common mistakes */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgemaakte Fouten Vermijden</h2>
              
              <div className="space-y-4">
                {commonMistakes.map((mistake, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-2"> {mistake.mistake}</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Waarom problematisch:</strong> {mistake.why}
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
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Belangrijk: Medische Begeleiding</h3>
                  <p className="text-sm text-amber-700 leading-relaxed mb-3">
                    Ga nooit zelfstandig over op lactosevrije voeding zonder medisch advies. 
                    Symptomen die lijken op lactose-intolerantie kunnen andere oorzaken hebben:
                  </p>
                  <ul className="space-y-1 text-sm text-amber-700">
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Koemelkallergie (veel ernstiger dan lactose-intolerantie)</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Reflux of andere spijsverteringsproblemen</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Verkeerde flesvoeding bereiding</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Andere medische condities</span></li>
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
                    <div className="font-medium text-gray-700">Bereken juiste hoeveelheden </div>
                    <div className="text-gray-600">Ook voor lactosevrije flesvoeding</div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Related articles */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Gerelateerde Artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/soorten-flesvoeding/hypoallergene-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Hypoallergene flesvoeding </div>
                  <div className="text-gray-600">Voor baby's met koemelkallergie</div>
                </Link>
                <Link href="/kennisbank/problemen-oplossen/constipatie-door-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Constipatie door flesvoeding </div>
                  <div className="text-gray-600">Oorzaken en oplossingen</div>
                </Link>
                <Link href="/kennisbank/soorten-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Alle soorten flesvoeding </div>
                  <div className="text-gray-600">Overzicht van alle flesvoeding types</div>
                </Link>
                <Link href="/kennisbank/problemen-oplossen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Problemen oplossen </div>
                  <div className="text-gray-600">Hulp bij flesvoeding problemen</div>
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