import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { TestTube, Clock, Target, Search, ShoppingCart, AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'Verschillende Spenen Uitproberen: Complete Gids voor Nederlandse Ouders 2025',
  description: 'De juiste speen kan het verschil maken tussen een tevreden baby en urenlang gefrustreerd huilen. Leer welke spenen het beste werken voor verschillende problemen, hoe je de perfecte match vindt, en wanneer je moet overstappen.',
}

export default function VerschillendeSpenenUitproberenPage() {
  const speenTypes = [
    {
      category: 'Doorstroomsnelheden',
      types: [
        {
          name: 'Maat 0/Pasgeborene (0-1 maand)',
          flow: '1-2 druppels per seconde',
          ideal: 'Premature baby\'s, pasgeborenen',
          duration: '20-30 minuten normaal',
          brands: 'Philips Avent 0, MAM 0, NUK Newborn'
        },
        {
          name: 'Maat 1/Langzaam (0-3 maanden)',
          flow: '2-3 druppels per seconde',
          ideal: 'Meeste nieuwe baby\'s',
          duration: '15-25 minuten',
          brands: 'Tommee Tippee Size 1, Hero Baby Slow'
        },
        {
          name: 'Maat 2/Medium (3-6 maanden)',
          flow: '3-4 druppels per seconde',
          ideal: 'Groeiende baby\'s, betere zuigkracht',
          duration: '10-20 minuten',
          brands: 'Overstap wanneer voeding >30 min duurt'
        },
        {
          name: 'Maat 3/Snel (6+ maanden)',
          flow: '4-6 druppels per seconde',
          ideal: 'Oudere baby\'s, dikke voeding',
          duration: '8-15 minuten',
          brands: 'Niet te vroeg overstappen'
        }
      ]
    },
    {
      category: 'Speen Vormen',
      types: [
        {
          name: 'Orthodontische Speen',
          form: 'Plat aan onderkant, rond aan bovenkant',
          benefit: 'Natuurlijke mondpositie',
          suitable: 'Baby\'s die moeite hebben met afsluiting',
          brands: 'NUK First Choice, MAM Perfect'
        },
        {
          name: 'Ronde/Klassieke Speen',
          form: 'Traditioneel rond',
          benefit: 'Universeel, makkelijk te accepteren',
          suitable: 'Meeste baby\'s, switchen tussen borst/fles',
          brands: 'Philips Avent Classic, Kruidvat Basic'
        },
        {
          name: 'Natuurlijke/Breast-like Speen',
          form: 'Brede basis, zachte textuur',
          benefit: 'Lijkt op moederborst',
          suitable: 'Gecombineerde borstvoeding/flesvoeding',
          brands: 'Tommee Tippee Closer to Nature, Lansinoh'
        },
        {
          name: 'Anti-Koliek Speen',
          form: 'Speciaal ventilatie systeem',
          benefit: 'Voorkomt vacuüm, minder lucht',
          suitable: 'Baby\'s met koliekklachten',
          brands: 'MAM Easy Start, Dr. Brown\'s Opties'
        }
      ]
    }
  ]

  const selectionSteps = [
    {
      step: 'Stap 1: Probleem Identificatie',
      icon: Search,
      problems: [
        {
          issue: 'Baby weigert fles',
          solutions: ['Probeer verschillende vormen (ortodontisch vs rond)', 'Check flow speed (misschien te snel/langzaam)', 'Test materiaal (silicone vs latex)']
        },
        {
          issue: 'Baby verslijkt/spuugt',
          solutions: ['Langzamere flow proberen (size omlaag)', 'Anti-koliek speen overwegen', 'Voeding positie controleren']
        },
        {
          issue: 'Baby wordt gefrustreerd',
          solutions: ['Snellere flow proberen (size omhoog)', 'Verschillende vorm testen', 'Check of gat niet verstopt is']
        },
        {
          issue: 'Baby krijgt lucht binnen',
          solutions: ['Anti-koliek systeem proberen', 'Orthodontische vorm testen', 'Fles hoek aanpassen']
        }
      ]
    },
    {
      step: 'Stap 2: Systematisch Testen',
      icon: TestTube,
      protocol: [
        'Week 1: Huidige speen baseline meten - Voedingsduur, spuug frequentie, huilgedrag',
        'Week 2: Test Speen A (andere flow) - Zelfde metingen, vergelijk met baseline',
        'Week 3: Test Speen B (andere vorm) - Continue meting, combinaties proberen',
        'Week 4: Beslissing & implementatie - Beste optie kiezen, geleidelijk overstappen'
      ]
    },
    {
      step: 'Stap 3: Transitie Beheer',
      icon: Target,
      strategies: [
        'Intro tijdens hongerige momenten (niet te hongerig)',
        'Oude + nieuwe speen combineren eerste dagen',
        'Geduld houden - kan 3-5 dagen duren',
        'Niet terugvallen bij eerste weerstand',
        'Consistency - alle verzorgers zelfde speen'
      ]
    }
  ]

  const brandComparison = [
    {
      brand: 'Philips Avent',
      rating: 5,
      strengths: 'Betrouwbaar, breed assortiment',
      flows: '0, 1, 2, 3, 4, Verstelbaar',
      types: 'Natuurlijk, Klassiek, Anti-koliek',
      price: '€3-6 per speen',
      availability: 'Overal (Etos, Kruidvat, online)'
    },
    {
      brand: 'MAM',
      rating: 5,
      strengths: 'Innovatief anti-koliek systeem',
      flows: '0-X (extra fast)',
      types: 'Easy Start (zelf-steriliserend)',
      price: '€4-7 per speen',
      availability: 'Silk teat (extra zacht)'
    },
    {
      brand: 'NUK',
      rating: 4,
      strengths: 'Orthodontisch design',
      flows: 'Duitse precisie engineering',
      types: 'Eerste Choice, Perfecte Match',
      price: '€3-5 per speen',
      availability: 'Natuurlijke mondpositie focus'
    },
    {
      brand: 'Tommee Tippee',
      rating: 4,
      strengths: 'Breast-like design',
      flows: 'Closer to Nature serie',
      types: 'Advanced Anti-Colic',
      price: '€4-6 per speen',
      availability: 'Sterk in Nederland'
    },
    {
      brand: 'Dr. Brown\'s',
      rating: 5,
      strengths: 'Meest geavanceerde anti-koliek',
      flows: 'Volledige vacuum preventie',
      types: 'Veel ziekenhuizen gebruiken dit',
      price: '€5-8 per speen',
      availability: 'Meer onderdelen om schoon te maken'
    }
  ]

  const specificProblems = [
    {
      problem: 'Baby Weigert Fles Compleet',
      causes: ['Overgang van borstvoeding', 'Flow te snel/langzaam', 'Verkeerde vorm', 'Temperatuur issues'],
      solutions: [
        'STAP 1: Calma speen proberen (Medela) - Meest lijkt op borstvoeding',
        'STAP 2: Verschillende flows testen - Begin langzamer dan verwacht',
        'STAP 3: Timing optimaliseren - Niet te hongerig, rustige omgeving',
        'STAP 4: Partner laten proberen - Minder associatie met borstvoeding'
      ]
    },
    {
      problem: 'Overmatig Spugen/Reflux',
      causes: ['Te snelle flow', 'Lucht inslikken', 'Verkeerde positie'],
      solutions: [
        'Dr. Brown\'s Opties: Beste vacuum preventie',
        'MAM Easy Start: Goede lucht controle',
        'Langzamere flow: Size 0 of 1 gebruiken langer',
        'Orthodontische vorm: Betere afsluiting'
      ]
    },
    {
      problem: 'Koliek & Excessive Crying',
      causes: ['Lucht inslikken', 'Te snelle voeding', 'Verkeerde speen'],
      solutions: [
        'LEVEL 1: MAM Easy Start - Zelf-steriliserend, silk teat',
        'LEVEL 2: Dr. Brown\'s Original - Meest geavanceerd systeem',
        'LEVEL 3: Tommee Tippee Advanced Anti-Colic - Goede prijs/kwaliteit'
      ]
    }
  ]

  const ageRecommendations = [
    {
      age: '0-6 Weken: Getting Started',
      primary: 'Philips Avent Natuurlijk Maat 1',
      backup: 'MAM Easy Start Size 0',
      duration: '20-30 minuten normaal',
      notes: 'Breed geaccepteerd + anti-koliek optie'
    },
    {
      age: '6-12 Weken: Optimization',
      primary: 'Evalueer huidige speen',
      backup: 'Anti-koliek alternatieven',
      duration: 'Misschien tijd voor Size 2',
      notes: 'Test indien problemen'
    },
    {
      age: '3-6 Maanden: Efficiëntie Fase',
      primary: 'Size 2 of 3 overwegen',
      backup: 'Anti-koliek nog belangrijk',
      duration: '15-20 minuten ideaal',
      notes: 'Performance focus'
    },
    {
      age: '6+ Maanden: Transition Planning',
      primary: 'Size 3 voor dikke voeding',
      backup: 'Comfort belangrijker dan snelheid',
      duration: 'Minder flessen per dag',
      notes: 'Voorbereiding op vast voedsel'
    }
  ]

  const shoppingTips = [
    {
      package: 'BASIS PAKKET (€25-35)',
      items: ['3x Philips Avent Natuurlijk Maat 1', '2x MAM Easy Start Size 1', '1x NUK First Choice Size 1']
    },
    {
      package: 'TESTPAKKET (€15-20)',
      items: ['1x Dr. Brown\'s Opties Size 1', '1x Tommee Tippee Size 1', '1x Verstelbare doorstroom speen']
    },
    {
      package: 'BACKUP PAKKET (€10-15)',
      items: ['2x Kruidvat basic Size 1', '1x Size 0 (voor problemen)', '1x Size 2 (groei planning)']
    }
  ]

  const troubleshootingGuide = [
    {
      problem: 'Speen Gaat Te Snel',
      quickFix: ['Fles meer horizontaal houden', 'Pauzes maken tijdens voeding', 'Kleinere porties geven'],
      permanentSolution: ['Langzamere flow speen kopen', 'Verstelbare doorstroom proberen', 'Orthodontische vorm testen']
    },
    {
      problem: 'Speen Gaat Te Langzaam',
      quickFix: ['Is gat verstopt? (naald doorprikken)', 'Is speen oud/hard geworden?', 'Zuigt baby wel effectief?'],
      permanentSolution: ['Snellere flow proberen', 'Gat voorzichtig vergroten (naald)', 'Anti-koliek overwegen (minder moeite)']
    },
    {
      problem: 'Baby Bijt op Speen',
      quickFix: ['Tandjes komen door', 'Verkeerde flow (frustratie)', 'Speelgedrag (ouder dan 6 maanden)'],
      permanentSolution: ['Koude speen (kouwe ring)', 'Orthodontische vorm', 'Silicone ipv latex (harder)']
    }
  ]

  const faqData = [
    {
      question: 'Hoe lang proberen voordat switchen?',
      answer: 'Geef een nieuwe speen minimaal 3-5 voedingen de kans. Sommige baby\'s hebben tot een week nodig om te wennen.'
    },
    {
      question: 'Kan ik verschillende merken door elkaar gebruiken?',
      answer: 'Ja, maar probeer consistent te blijven binnen voedingen. Wisselen tussen voedingen is prima.'
    },
    {
      question: 'Zijn dure spenen echt beter?',
      answer: 'Niet altijd. Dure spenen hebben vaak betere anti-koliek functies, maar basis spenen werken voor veel baby\'s prima.'
    },
    {
      question: 'Wanneer overstappen naar snellere flow?',
      answer: 'Als voeding langer dan 25-30 minuten duurt en baby gefrustreerd raakt. Gradueel overstappen.'
    },
    {
      question: 'Hoeveel spenen heb ik nodig?',
      answer: 'Minimum 6-8 spenen voor dagelijks gebruik, plus 2-3 backup. Meer als je niet dagelijks kunt wassen.'
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
              <div className="text-sm text-gray-500 mb-2">Voedingstechnieken  Speen Keuze</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <TestTube className="w-6 h-6 mr-3 text-primary" />
                Verschillende Spenen Uitproberen: Complete Gids voor Nederlandse Ouders
              </h1>
              <p className="text-gray-600">
                De juiste speen kan het verschil maken tussen een tevreden baby en urenlang gefrustreerd huilen. 
                Leer welke spenen het beste werken voor verschillende problemen, hoe je de perfecte match vindt, 
                en wanneer je moet overstappen.
              </p>
            </div>

            {/* Why Critical */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Waarom de Juiste Speen Cruciaal Is</h2>
              
              <p className="text-gray-700 mb-4">
                De speen is het enige contact tussen je baby en de flesvoeding. Een verkeerde speen kan leiden tot 
                frustratie, spugen, koliekklachten, en zelfs gewigering van de fles. <strong>85% van flesvoeding 
                problemen</strong> kan opgelost worden door de juiste speen te vinden.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-primary mb-2">Impact van Verkeerde Speen:</h3>
                  <ul className="space-y-1">
                    {[
                      'Te snelle flow: Baby verslijkt, spuugt, krijgt te veel lucht binnen',
                      'Te langzame flow: Frustratie, moeheid, onvolledige voedingen',
                      'Verkeerde vorm: Slechte mondafsluiting, lucht inslikken',
                      'Onjuist materiaal: Allergische reacties, smaakproblemen'
                    ].map((impact, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 bg-white rounded-xl">
                  <p className="text-gray-700">
                    <strong>TNO Onderzoek:</strong> Baby's met de juiste speen hebben 60% minder last van 
                    koliekklachten en slapen 40% langer door.
                  </p>
                </div>
              </div>
            </div>

            {/* Speen Types */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Complete Speen Types & Wanneer Gebruiken</h2>
              
              <div className="space-y-8">
                {speenTypes.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="font-medium text-gray-700 mb-4">{category.category}</h3>
                    <div className="space-y-4">
                      {category.types.map((type, typeIndex) => (
                        <div key={typeIndex}>
                          <h4 className="font-medium text-primary mb-2">{type.name}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">Doorstroom/Vorm: </span>
                              <span className="text-gray-600">{type.flow || type.form}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Voordeel: </span>
                              <span className="text-gray-600">{type.ideal || type.benefit}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Geschikt voor: </span>
                              <span className="text-gray-600">{type.duration || type.suitable}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Merken: </span>
                              <span className="text-gray-600">{type.brands}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {categoryIndex < speenTypes.length - 1 && (
                      <div className="border-b border-gray-200 mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Selection Process */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Stap-voor-Stap Speen Selectie Proces</h2>
              
              <div className="space-y-6">
                {selectionSteps.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-4">
                      <step.icon className="w-5 h-5 text-primary mr-2" />
                      <h3 className="font-medium text-gray-700">{step.step}</h3>
                    </div>
                    
                    {step.problems && (
                      <div className="space-y-3">
                        {step.problems.map((problem, problemIndex) => (
                          <div key={problemIndex} className="border border-gray-200 bg-white rounded-lg p-3">
                            <h4 className="font-medium text-primary mb-2">{problem.issue}:</h4>
                            <ul className="space-y-1">
                              {problem.solutions.map((solution, solutionIndex) => (
                                <li key={solutionIndex} className="flex items-start space-x-2">
                                  <span className="text-gray-600"></span>
                                  <span className="text-gray-700">{solution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {step.protocol && (
                      <div className="space-y-2">
                        {step.protocol.map((item, itemIndex) => (
                          <div key={itemIndex} className="p-3 border border-gray-200 bg-white rounded font-mono text-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {step.strategies && (
                      <div>
                        <h4 className="font-medium text-primary mb-2">Overstap Strategie:</h4>
                        <ul className="space-y-1">
                          {step.strategies.map((strategy, strategyIndex) => (
                            <li key={strategyIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{strategy}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {index < selectionSteps.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Comparison */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Nederlandse Merk Vergelijking</h2>
              
              <div className="space-y-4">
                {brandComparison.map((brand, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-700">{brand.brand}</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div key={i}>
                            
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="font-medium text-gray-600">Sterkste punten: </span>
                        <span className="text-gray-700">{brand.strengths}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Flows: </span>
                        <span className="text-gray-700">{brand.flows}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Types: </span>
                        <span className="text-gray-700">{brand.types}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Prijs: </span>
                        <span className="text-gray-700">{brand.price}</span>
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-gray-600">Beschikbaarheid: </span>
                        <span className="text-gray-700">{brand.availability}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specific Problems */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Specifieke Problemen & Speen Oplossingen</h2>
              
              <div className="space-y-6">
                {specificProblems.map((problem, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-3">{problem.problem}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Mogelijke oorzaken:</h4>
                        <ul className="space-y-1">
                          {problem.causes.map((cause, causeIndex) => (
                            <li key={causeIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-primary mb-2">Bewezen oplossingen:</h4>
                        <ul className="space-y-1">
                          {problem.solutions.map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="text-sm text-gray-700 p-2 border border-gray-200 bg-white rounded font-mono">
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {index < specificProblems.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Age Recommendations */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Leeftijd-Specifieke Aanbevelingen</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ageRecommendations.map((age, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-700 mb-3">{age.age}</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-600">Primair: </span>
                        <span className="text-gray-700">{age.primary}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Backup: </span>
                        <span className="text-gray-700">{age.backup}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Duur: </span>
                        <span className="text-gray-700">{age.duration}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Notities: </span>
                        <span className="text-gray-700">{age.notes}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shopping Strategy */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Slimme boodschappenstrategie
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {shoppingTips.map((tip, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-3">{tip.package}</h3>
                    <ul className="space-y-1">
                      {tip.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <h3 className="font-medium text-primary mb-2">Kostenbesparende tips:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Multi-packs: Goedkoper per stuk',
                    'Online: Vaak 20-30% goedkoper',
                    'Huismerken: Voor backup/testing',
                    'Sales: Stock up tijdens acties'
                  ].map((tip, index) => (
                    <div key={index} className="text-sm text-gray-700 p-2 border border-gray-200 bg-white rounded">
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Probleemoplossingshandleiding
              </h2>
              
              <div className="space-y-6">
                {troubleshootingGuide.map((guide, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-3">{guide.problem}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Snelle oplossingen:</h4>
                        <ul className="space-y-1">
                          {guide.quickFix.map((fix, fixIndex) => (
                            <li key={fixIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{fix}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-primary mb-2">Permanente oplossing:</h4>
                        <ul className="space-y-1">
                          {guide.permanentSolution.map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="flex items-start space-x-2">
                              <span className="text-gray-600"></span>
                              <span className="text-gray-700">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {index < troubleshootingGuide.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
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
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Conclusie: Geduld Loont</h2>
              
              <p className="text-gray-700 mb-4">
                Het vinden van de perfecte speen is een <strong>proces van eliminatie en observatie</strong>. 
                Wat bij de ene baby fantastisch werkt, kan bij de andere totaal niet aansluiten. 
                <strong>Systematisch testen</strong> en <strong>geduldig observeren</strong> zijn je beste instrumenten.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-primary mb-2">Kernprincipes:</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Start simpel met breed geaccepteerde merken</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Test één variabele tegelijk (flow OF vorm)</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Geef nieuwe spenen tijd (3-5 voedingen minimum)</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Documenteer wat werkt voor toekomstige referentie</span></li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 bg-white rounded-xl">
                  <p className="text-gray-700">
                    <strong>Success tip:</strong> Bewaar spenen die werken, zelfs als je baby eruit groeit. 
                    Bij ziekte, tandjes, of regressies kunnen oude vertrouwde spenen tijdelijk uitkomst bieden.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Gerelateerde Artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link 
                  href="/kennisbank/voedingstechnieken"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="font-medium text-gray-700">Voedingstechnieken </div>
                  <div className="text-gray-600">Alle voedingstechnieken op een rij</div>
                </Link>
                <Link 
                  href="/kennisbank/problemen-oplossen"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="font-medium text-gray-700">Problemen Oplossen </div>
                  <div className="text-gray-600">Oplossingen voor veelvoorkomende problemen</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar 
          images={[
            {
              src: "/difrax-fles-kunstvoeding.webp",
              alt: "Verschillende flessen en spenen vergelijken",
              caption: "Vind de perfecte speen voor je baby"
            },
            {
              src: "/close-up-baby.webp", 
              alt: "Baby concentratie tijdens speenacceptatie",
              caption: "Een tevreden baby met de juiste speen"
            },
            {
              src: "/flesvoeding-close-up.webp",
              alt: "Close-up van speen en voeding",
              caption: "Details van speenkeuze en gebruik"
            }
          ]}
          adTopics={["Baby Uitrusting", "Voeding Accessoires"]}
        />
      </div>
    </Layout>
  )
}