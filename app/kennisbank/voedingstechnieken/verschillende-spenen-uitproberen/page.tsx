import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { TestTube, Target, Search, ShoppingCart, AlertCircle } from 'lucide-react'
import BolProductSection from '../../../../components/BolProductLink'
import { generateFAQSchema } from '../../../../lib/structured-data'

export const metadata = {
  title: 'Verschillende Spenen Uitproberen: Complete Gids voor Nederlandse Ouders 2026',
  description: 'De juiste speen kan het verschil maken tussen een tevreden baby en urenlang gefrustreerd huilen. Leer welke spenen het beste werken voor verschillende problemen, hoe je de perfecte match vindt, en wanneer je moet overstappen.',
  alternates: { canonical: '/kennisbank/voedingstechnieken/verschillende-spenen-uitproberen/' },
}
export default function VerschillendeSpenenUitproberenPage() {
  const speenTypes = [
    {
      category: 'Doorstroomsnelheden',
      types: [
        {
          name: 'Maat 0 / Traagste doorstroom',
          flow: '1-2 druppels per seconde',
          ideal: 'Baby die snel verslikt of erg gulzig drinkt',
          duration: 'Voeding mag rustig 20-30 minuten duren',
          brands: 'Philips Avent 0, MAM 0, NUK Newborn'
        },
        {
          name: 'Maat 1 / Langzaam',
          flow: '2-3 druppels per seconde',
          ideal: 'Rustige drinkers, veel voorkomende startkeuze',
          duration: 'Voeding rond 15-25 minuten',
          brands: 'Tommee Tippee Size 1, Hero Baby Slow'
        },
        {
          name: 'Maat 2 / Medium',
          flow: '3-4 druppels per seconde',
          ideal: 'Baby die de vorige maat leeg zuigt zonder te verslikken',
          duration: 'Voeding rond 10-20 minuten',
          brands: 'Overweeg deze maat als de voeding structureel >30 min duurt'
        },
        {
          name: 'Maat 3 / Snel',
          flow: '4-6 druppels per seconde',
          ideal: 'Vlotte, ongeduldige drinkers die dikkere voeding aankunnen',
          duration: 'Voeding rond 8-15 minuten',
          brands: 'Niet sneller kiezen dan je baby aankan'
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
          name: 'Natuurlijke/Borstachtige Speen',
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
          solutions: ['Probeer verschillende vormen (orthodontisch vs rond)', 'Check de doorstroomsnelheid (misschien te snel of te langzaam)', 'Test materiaal (siliconen vs latex)']
        },
        {
          issue: 'Baby verslikt zich/spuugt',
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
      strengths: 'Betrouwbaar, breed assortiment',
      flows: 'Maat 0, 1, 2, 3, 4 en verstelbaar',
      types: 'Natuurlijk, Klassiek, Anti-koliek',
      price: '€3-6 per speen',
      availability: 'Overal verkrijgbaar (Etos, Kruidvat, online)'
    },
    {
      brand: 'MAM',
      strengths: 'Innovatief anti-koliek systeem, extra zachte speen',
      flows: 'Maat 0 tot X (extra snel)',
      types: 'Easy Start (zelf-steriliserend)',
      price: '€4-7 per speen',
      availability: 'Ruim verkrijgbaar in NL'
    },
    {
      brand: 'NUK',
      strengths: 'Orthodontisch design, natuurlijke mondpositie',
      flows: 'Maat 1, 2 en 3',
      types: 'First Choice, Perfect Match',
      price: '€3-5 per speen',
      availability: 'Ruim verkrijgbaar in NL'
    },
    {
      brand: 'Tommee Tippee',
      strengths: 'Borstachtig ontwerp',
      flows: 'Maat 1, 2, 3 en variabel',
      types: 'Closer to Nature, Anti-koliek',
      price: '€4-6 per speen',
      availability: 'Ruim verkrijgbaar in NL'
    },
    {
      brand: 'Dr. Brown\'s',
      strengths: 'Geavanceerd anti-koliek systeem, veel gebruikt in ziekenhuizen',
      flows: 'Maat 0 tot 4',
      types: 'Options+, Original (met ventielsysteem)',
      price: '€5-8 per speen',
      availability: 'Verkrijgbaar in NL, meer onderdelen om schoon te maken'
    }
  ]

  const specificProblems = [
    {
      problem: 'Baby weigert de fles volledig',
      causes: ['Overgang van borstvoeding', 'Flow te snel/langzaam', 'Verkeerde vorm', 'Temperatuur issues'],
      solutions: [
        'Stap 1: Calma speen proberen (Medela), lijkt het meest op borstvoeding',
        'Stap 2: Verschillende doorstroomsnelheden testen, begin langzamer dan verwacht',
        'Stap 3: Timing optimaliseren, niet te hongerig en in een rustige omgeving',
        'Stap 4: Partner laten proberen, minder associatie met borstvoeding'
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
      problem: 'Koliek & overmatig huilen',
      causes: ['Lucht inslikken', 'Te snelle voeding', 'Verkeerde speen'],
      solutions: [
        'MAM Easy Start: zelf-steriliserend, extra zachte speen',
        'Dr. Brown\'s Original: uitgebreid ventielsysteem',
        'Tommee Tippee Advanced Anti-Colic: goede prijs-kwaliteitverhouding'
      ]
    }
  ]

  const ageRecommendations = [
    {
      age: '0-6 Weken: Startfase',
      primary: 'Philips Avent Natuurlijk Maat 1',
      backup: 'MAM Easy Start Size 0',
      duration: '20-30 minuten normaal',
      notes: 'Breed geaccepteerd + anti-koliek optie'
    },
    {
      age: '6-12 Weken: Bijstellen',
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
      age: '6+ Maanden: Voorbereiding op vast voedsel',
      primary: 'Size 3 voor dikke voeding',
      backup: 'Comfort belangrijker dan snelheid',
      duration: 'Minder flessen per dag',
      notes: 'Voorbereiding op vast voedsel'
    }
  ]

  const shoppingTips = [
    {
      package: 'Basispakket (€25-35)',
      items: ['3x Philips Avent Natuurlijk Maat 1', '2x MAM Easy Start Size 1', '1x NUK First Choice Size 1']
    },
    {
      package: 'Testpakket (€15-20)',
      items: ['1x Dr. Brown\'s Opties Size 1', '1x Tommee Tippee Size 1', '1x Verstelbare doorstroom speen']
    },
    {
      package: 'Backup-pakket (€10-15)',
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
      quickFix: ['Is het gaatje verstopt door melkresten? Speen goed schoonmaken', 'Is de speen oud of hard geworden? Vervangen', 'Zuigt baby wel effectief?'],
      permanentSolution: ['Wissel naar een speen met grotere doorstroom', 'Maak nooit zelf het gaatje groter met een naald (onbeheersbare flow, verslikkingsrisico)', 'Anti-koliek speen overwegen (kost minder moeite)']
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqData)) }} />
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Voedingstechnieken • Speen Keuze</div>
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
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Waarom de Juiste Speen Cruciaal Is</h2>

              <p className="text-gray-700 mb-4">
                De speen is het enige contact tussen je baby en de flesvoeding. Een verkeerde speen kan leiden tot
                frustratie, spugen, koliekklachten, en zelfs <Link href="/kennisbank/basis-flesvoeding/baby-weigert-de-fles" className="text-primary hover:underline font-medium">weigering van de fles</Link>.
                <strong>Veel flesvoeding problemen</strong> zoals <Link href="/kennisbank/problemen-oplossen/baby-drinkt-niet-genoeg" className="text-primary hover:underline font-medium">te weinig drinken</Link> kunnen
                opgelost worden door de juiste speen te vinden.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-primary mb-2">Impact van Verkeerde Speen:</h3>
                  <ul className="space-y-1">
                    {[
                      'Te snelle flow: Baby verslikt zich, spuugt, krijgt te veel lucht binnen',
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
                <div>
                  <h3 className="font-medium text-primary mb-2">Waarom het uitproberen loont:</h3>
                  <p className="text-gray-700">
                    Een speen die past bij het drinkgedrag van je baby kan onrust tijdens het voeden
                    verminderen. Koliek en huilen hebben vaak meerdere oorzaken, dus een andere speen
                    is niet altijd de oplossing, maar wel het proberen waard.
                  </p>
                </div>
              </div>
            </div>

            {/* Speen Types */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Complete Speen Types & Wanneer Gebruiken</h2>

              <p className="text-gray-700 mb-6">
                Kies een speen op basis van het <strong>drinkgedrag</strong> van je baby, niet puur op leeftijd. Verslikt je baby zich of drinkt hij erg gulzig, kies dan een kleiner gaatje (tragere doorstroom). Drinkt je baby juist langzaam en raakt hij gefrustreerd, dan kan een groter gaatje helpen. De leeftijdsindeling hieronder is slechts een ruwe indicatie.
              </p>

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
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
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
                          <div key={problemIndex}>
                            <h4 className="font-medium text-primary mb-2">{problem.issue}:</h4>
                            <ul className="space-y-1">
                              {problem.solutions.map((solution, solutionIndex) => (
                                <li key={solutionIndex} className="flex items-start space-x-2">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700">{solution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {step.protocol && (
                      <ul className="space-y-2">
                        {step.protocol.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
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
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Nederlandse Merk Vergelijking</h2>
              
              <div className="space-y-4">
                {brandComparison.map((brand, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-700">{brand.brand}</h3>
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
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
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
                            <li key={solutionIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{solution}</span>
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
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
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
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    'Multipacks: goedkoper per stuk',
                    'Online: vaak 20-30% goedkoper',
                    'Huismerken: prima voor backup en testen',
                    'Acties: sla in tijdens aanbiedingen'
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
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
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
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
                <div>
                  <h3 className="font-medium text-primary mb-2">Handige tip:</h3>
                  <p className="text-gray-700">
                    Bewaar spenen die werken, zelfs als je baby eruit groeit.
                    Bij ziekte, tandjes of regressies kunnen oude vertrouwde spenen tijdelijk uitkomst bieden.
                  </p>
                </div>
              </div>
            </div>

            {/* Affiliate Product Recommendations */}
            <BolProductSection
              productNames={[
                'Philips Avent speen',
                'MAM anti colic speen',
                'NUK baby speen',
                'Tommee Tippee speen',
                'Dr Browns speen',
                'baby speen variatie set'
              ]}
              title="Verschillende Spenen om te Testen"
              variant="card"
              maxProducts={6}
            />

            {/* Spenen Selectie Producten */}
            <AffiliateProductWidget
              pageId="voedingstechnieken_verschillende-spenen-uitproberen"
              title="Spenen Selectie Producten"
            />

            {/* Navigation */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Gerelateerde Artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link
                  href="/kennisbank/basis-flesvoeding/baby-weigert-de-fles"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Baby weigert de fles →</div>
                  <div className="text-sm text-gray-600">Oorzaken en oplossingen voor flesweigering</div>
                </Link>
                <Link
                  href="/kennisbank/problemen-oplossen/baby-drinkt-niet-genoeg"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Baby drinkt niet genoeg →</div>
                  <div className="text-sm text-gray-600">Herkennen en aanpakken van drinkproblemen</div>
                </Link>
                <Link
                  href="/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Eerste keer flesvoeding geven →</div>
                  <div className="text-sm text-gray-600">Alles wat je moet weten voor de start</div>
                </Link>
                <Link
                  href="/"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Flesvoeding Calculator →</div>
                  <div className="text-sm text-gray-600">Bereken de juiste hoeveelheden</div>
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