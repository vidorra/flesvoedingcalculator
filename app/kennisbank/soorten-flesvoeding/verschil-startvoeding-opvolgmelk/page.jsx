import Layout from '../../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../../components/KennisbankSidebar'
import { Scale, Euro, Calendar, AlertCircle, CheckCircle, XCircle } from 'lucide-react'

export const metadata = {
  title: 'Verschil tussen Startvoeding en Opvolgmelk: Complete Nederlandse Gids 2025',
  description: 'Wat is het verschil tussen flesvoeding nummer 1 en 2? Wanneer moet je overstappen? Deze complete vergelijking legt uit welke melk wanneer te gebruiken, inclusief kosten, voedingswaarden en Nederlandse merkenvergelijking.',
}

export default function VerschilStartvoedingOpvolgmelkPage() {
  const nutritionComparison = [
    {
      component: 'Leeftijd',
      startvoeding: '0-12 maanden',
      opvolgmelk: '6+ maanden',
      verschil: '6 maanden overlap'
    },
    {
      component: 'Eiwitten',
      startvoeding: '1.2-1.4g/100ml',
      opvolgmelk: '1.6-2.2g/100ml',
      verschil: '+40% meer eiwit'
    },
    {
      component: 'Koolhydraten',
      startvoeding: '7.0-7.5g/100ml',
      opvolgmelk: '7.2-8.0g/100ml',
      verschil: 'Vergelijkbaar'
    },
    {
      component: 'Vetten',
      startvoeding: '3.4-3.6g/100ml',
      opvolgmelk: '3.2-3.8g/100ml',
      verschil: 'Vergelijkbaar'
    },
    {
      component: 'IJzer',
      startvoeding: '0.5-1.0mg/100ml',
      opvolgmelk: '4.0-6.0mg/100ml',
      verschil: '6x meer ijzer'
    },
    {
      component: 'Calcium',
      startvoeding: '50-70mg/100ml',
      opvolgmelk: '60-90mg/100ml',
      verschil: '+30% meer'
    },
    {
      component: 'Vitamine D',
      startvoeding: '1.0-1.8μg/100ml',
      opvolgmelk: '1.2-2.0μg/100ml',
      verschil: 'Iets meer'
    },
    {
      component: 'Prijs',
      startvoeding: '€0.85-1.20/100ml',
      opvolgmelk: '€0.75-1.10/100ml',
      verschil: '10-15% goedkoper'
    }
  ]

  const brandComparison = [
    {
      category: 'Startvoeding (Nummer 1)',
      brands: [
        {
          name: 'Nutrilon 1',
          rating: 5,
          price: '€13.50-15.00 per 800g',
          costPerLiter: '€1.15',
          features: ['PronutriPlus (prebiotica + nucleotiden)', 'Nederlandse R&D (40 jaar ervaring)', 'Immunofortis voor afweersysteem'],
          availability: 'Alle supermarkten, drogisterijen',
          marketShare: '45% Nederlandse markt'
        },
        {
          name: 'Hero Baby 1',
          rating: 4,
          price: '€10.50-12.00 per 800g',
          costPerLiter: '€0.95',
          features: ['Swiss kwaliteit sinds 1886', 'Natuurlijke prebiotica (GOS/FOS)', 'Geen palmitinezuur'],
          availability: 'Supermarkten, online',
          marketShare: '25% Nederlandse markt'
        },
        {
          name: 'Kruidvat Zuigelingenmelk 1',
          rating: 3,
          price: '€7.50-8.50 per 800g',
          costPerLiter: '€0.75',
          features: ['Beste prijs/kwaliteit Nederland', 'Zelfde EU-standaarden als duurdere merken', 'Lactosevrije variant beschikbaar'],
          availability: 'Kruidvat winkels',
          marketShare: '15% Nederlandse markt'
        }
      ]
    },
    {
      category: 'Opvolgmelk (Nummer 2)',
      brands: [
        {
          name: 'Nutrilon 2',
          rating: 5,
          price: '€12.50-14.00 per 800g',
          costPerLiter: '€1.05',
          features: ['+50% meer ijzer (6.2mg vs 4.1mg)', '+30% meer eiwit', 'Vanille smaakje toegevoegd'],
          availability: 'Geleidelijk over 1 week',
          marketShare: 'Marktleider'
        },
        {
          name: 'Hero Baby 2',
          rating: 4,
          price: '€9.50-11.00 per 800g',
          costPerLiter: '€0.85',
          features: ['Iron+ formule (5.8mg ijzer)', 'Calcium boost voor botjes', 'Iets zoetere smaak'],
          availability: '15% goedkoper dan nummer 1',
          marketShare: 'Tweede plaats'
        },
        {
          name: 'Kruidvat Opvolgmelk 2',
          rating: 3,
          price: '€6.50-7.50 per 800g',
          costPerLiter: '€0.65',
          features: ['40% goedkoper dan A-merken', 'Zelfde EU-vereisten', 'Basis ijzer/vitamin supplementatie'],
          availability: 'Budget Winner',
          marketShare: 'Groeisegment'
        }
      ]
    }
  ]

  const switchDecision = [
    {
      category: 'JA, Overstappen naar Nummer 2',
      icon: CheckCircle,
      color: 'text-green-600',
      reasons: [
        {
          type: 'Medische Indicaties',
          items: [
            'IJzertekort risico: Baby eet weinig vlees/vis na 8 maanden',
            'Langzame groei: Kinderarts adviseert meer eiwitten/mineralen',
            'Premature baby: Extra ijzer nodig voor inhaalgroei',
            'Specifiek advies: Consultatiebureau/kinderarts raadt aan'
          ]
        },
        {
          type: 'Praktische Redenen',
          items: [
            'Kosten besparing: Opvolgmelk is 10-15% goedkoper',
            'Voorbereiding koemelk: Wennen aan hoger eiwitgehalte',
            'Nieuwe smaak: Baby wordt kieskeurig, variant proberen'
          ]
        }
      ]
    },
    {
      category: 'NEE, Niet Overstappen',
      icon: XCircle,
      color: 'text-red-600',
      reasons: [
        {
          type: 'Baby Gedijt Goed',
          items: [
            'Normale groei: Volgt groeicurve netjes',
            'Goede eetlust: Eet voldoende vaste voeding',
            'Geen tekorten: Consultatiebureau tevreden over ontwikkeling',
            'Tevreden ouders: Huidige routine werkt perfect'
          ]
        },
        {
          type: 'Praktische Overwegingen',
          items: [
            'Startvoeding werkt goed: Geen problemen met vertering/acceptatie',
            'Kosten geen issue: Budget ruimte voor duurdere optie',
            'Eenvoud: Minder verwarring, een type melk'
          ]
        }
      ]
    }
  ]

  const transitionProcess = [
    {
      week: 'Week 1: Introductie Fase',
      days: [
        'DAG 1-2: 1 fles nummer 2 per dag (middagvoeding)',
        'DAG 3-4: 2 flessen nummer 2 per dag',
        'DAG 5-7: 3 flessen nummer 2 per dag'
      ],
      notes: 'BEHOUD: Ochtend en avondvoeding nummer 1'
    },
    {
      week: 'Week 2: Uitbreiding',
      days: [
        'DAG 8-10: 4 flessen nummer 2 per dag',
        'DAG 11-14: Volledig overstappen naar nummer 2'
      ],
      notes: 'LAATSTE: Avondvoeding (meest vertrouwde moment)'
    }
  ]

  const commonProblems = [
    {
      problem: 'Baby Weigert Opvolgmelk',
      causes: ['Smaak verschil: Opvolgmelk vaak zoeter/anders', 'Textuur: Kan iets dikker zijn', 'Timing: Te plotselinge overgang'],
      solutions: [
        'STAP 1: Langzamere overgang (2 weken i.p.v. 1)',
        'STAP 2: Meng 50/50 oude en nieuwe voeding 3 dagen',
        'STAP 3: Probeer ander merk opvolgmelk',
        'STAP 4: Warm opvolgmelk iets meer (smaak milder)',
        'LAATSTE OPTIE: Blijf bij startvoeding tot 12 maanden'
      ]
    },
    {
      problem: 'Meer Spugen na Overstap',
      causes: ['Hoger eiwitgehalte: Zwaarder verteerbaar', 'Andere samenstelling: Maag moet wennen', 'Te grote porties: Zelfde volume, meer calorieën'],
      solutions: [
        'Kleinere porties geven (10-15ml minder)',
        'Langzamer voeden met meer pauzes',
        'Extra boertje laten proberen',
        'Anti-reflux speen overwegen'
      ]
    },
    {
      problem: 'Verandering in Ontlasting',
      causes: ['Normale veranderingen door hoger ijzergehalte', 'Frequentie kan 1-2x per dag minder', 'Consistentie iets steviger'],
      solutions: [
        'Monitor: Kleur iets donkerder is normaal',
        'Let op verstopping: >3 dagen geen ontlasting',
        'Zorgelijk: Diarree, bloed, of slijm → arts'
      ]
    }
  ]

  const costComparison = [
    {
      scenario: 'Scenario 1: Alleen Startvoeding (0-12 maanden)',
      calculation: '65 blikken per jaar',
      costs: [
        'Nutrilon 1: 65 x €14 = €910',
        'Hero Baby 1: 65 x €11 = €715',
        'Kruidvat 1: 65 x €8 = €520',
        'HIPP Bio 1: 65 x €15 = €975'
      ]
    },
    {
      scenario: 'Scenario 2: Overstap naar Opvolgmelk (6 maanden)',
      calculation: '32 blikken startvoeding + 33 blikken opvolgmelk',
      costs: [
        'Nutrilon route: €448 + €429 = €877 (€33 besparing)',
        'Hero Baby route: €352 + €330 = €682 (€33 besparing)'
      ]
    },
    {
      scenario: 'Scenario 3: Budget Optimaal (Mix Strategie)',
      calculation: 'Kruidvat voor beide fases',
      costs: [
        '32 x €8 + 33 x €7 = €487',
        'BESPARING vs premium: €400-500 per jaar'
      ]
    }
  ]

  const expertRecommendations = [
    {
      organization: 'JGZ Nederland Officieel Standpunt',
      recommendation: 'Startvoeding voorziet in alle behoeften tot 12 maanden. Opvolgmelk kan voordelig zijn bij verhoogd ijzertekort risico, beperkte vaste voeding inname na 8 maanden, of specifieke groeicurve zorgen.'
    },
    {
      organization: 'Kinderartsen Nederlandse Vereniging (NVK)',
      recommendation: 'Medische indicaties voor overstap: IJzergebreksanemie, groeistoornissen, prematuriteit. NIET routinematig bij alle baby\'s van 6 maanden.'
    },
    {
      organization: 'Voedingscentrum Nederland',
      recommendation: 'Zowel startvoeding als opvolgmelk zijn veilig. Keuze mag gebaseerd zijn op praktische overwegingen, baby\'s acceptatie, ouder voorkeur, of medische indicaties.'
    }
  ]

  const myths = [
    {
      myth: 'Na 6 maanden is startvoeding niet meer voldoende',
      fact: 'Startvoeding bevat alle benodigde voedingsstoffen tot 12 maanden. WHO bevestigt dit.'
    },
    {
      myth: 'Opvolgmelk bevordert betere groei',
      fact: 'Gezonde baby\'s groeien even goed op startvoeding. Meer eiwit ≠ betere groei.'
    },
    {
      myth: 'Alle merken nummer 2 zijn hetzelfde',
      fact: 'Significante verschillen in ijzergehalte, eiwittype, en prijzen tussen merken.'
    },
    {
      myth: 'Dure merken zijn altijd beter',
      fact: 'Budget merken voldoen aan zelfde EU-standaarden. Marketing bepaalt vaak prijsverschil.'
    }
  ]

  const faqData = [
    {
      question: 'Moet ik per se overstappen naar nummer 2?',
      answer: 'Nee, startvoeding mag tot 12 maanden gebruikt worden. Overstappen is optioneel en hangt af van baby\'s behoeften en ouder voorkeuren.'
    },
    {
      question: 'Kan ik direct overstappen zonder geleidelijke overgang?',
      answer: 'Dit kan, maar wordt afgeraden. Geleidelijke overgang vermindert kans op weigergedrag en spijsverteringsproblemen.'
    },
    {
      question: 'Is opvolgmelk echt beter voor baby\'s >6 maanden?',
      answer: 'Voor gezonde baby\'s die gevarieerd eten is het verschil minimaal. Bij ijzertekort risico kan opvolgmelk voordelig zijn.'
    },
    {
      question: 'Waarom is opvolgmelk goedkoper?',
      answer: 'Minder strenge EU-regulatie, groter volume verkoop, en concurrentie tussen merken zorgen voor lagere prijzen.'
    },
    {
      question: 'Hoelang duurt het voor baby went aan nieuwe smaak?',
      answer: 'Meestal 3-7 dagen. Bij volledige weigering na 2 weken is overstappen waarschijnlijk niet geschikt.'
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
                <Scale className="w-6 h-6 mr-3 text-primary" />
                Verschil tussen Startvoeding en Opvolgmelk: Complete Nederlandse Gids
              </h1>
              <p className="text-gray-600">
                Wat is het verschil tussen flesvoeding nummer 1 en 2? Wanneer moet je overstappen? 
                Deze complete vergelijking legt uit welke melk wanneer te gebruiken, inclusief kosten, 
                voedingswaarden en Nederlandse merkenvergelijking.
              </p>
            </div>

            {/* Why Confusion */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Waarom Deze Verwarring Zo Groot Is</h2>
              
              <p className="text-gray-700 mb-4">
                <strong>78% van Nederlandse ouders</strong> is onzeker over het verschil tussen startvoeding (nummer 1) 
                en opvolgmelk (nummer 2). Marketing en winkelschappen suggereren dat overstappen verplicht is, 
                maar dat klopt niet altijd.
              </p>
              
              <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                <h3 className="font-medium text-primary mb-2">Belangrijkste Misverstand:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-gray-700"><strong>Mythe:</strong> "Na 6 maanden MOET je overstappen naar nummer 2"</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-gray-700"><strong>Feit:</strong> Startvoeding mag tot 12 maanden gebruikt worden</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">ℹ️</span>
                    <span className="text-gray-700"><strong>Waarom verwarring:</strong> Marketing en winkelindeling suggereren overstap noodzakelijk</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 border border-gray-200 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Voedingscentrum Onderzoek:</strong> 60% van ouders stapt te vroeg of onnodig over naar opvolgmelk.
                </p>
              </div>
            </div>

            {/* Nutrition Comparison */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Complete Vergelijking: Nummer 1 vs Nummer 2</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Component</th>
                      <th className="text-left py-3 px-4 font-medium text-primary">Startvoeding (1)</th>
                      <th className="text-left py-3 px-4 font-medium text-primary">Opvolgmelk (2)</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Verschil</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutritionComparison.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium text-gray-900">{item.component}</td>
                        <td className="py-3 px-4 text-gray-700">{item.startvoeding}</td>
                        <td className="py-3 px-4 text-gray-700">{item.opvolgmelk}</td>
                        <td className="py-3 px-4 text-gray-700 font-medium">
                          {item.verschil.includes('meer') && item.verschil.includes('6x') ? (
                            <span className="text-primary font-bold">{item.verschil}</span>
                          ) : item.verschil.includes('goedkoper') ? (
                            <span className="text-green-600 font-medium">{item.verschil}</span>
                          ) : (
                            item.verschil
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                  <h3 className="font-medium text-primary mb-2">Waarom Meer Eiwit in Opvolgmelk?</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Baby's >6 maanden groeien sneller</li>
                    <li>• Vaste voeding bevat al veel koolhydraten</li>
                    <li>• Eiwitten ondersteunen spierontwikkeling</li>
                    <li>• Voorbereiden op koemelk (3.3g eiwit/100ml)</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                  <h3 className="font-medium text-primary mb-2">IJzer Boost Verklaard</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Baby's geboren met ijzervoorraad voor 6 maanden</li>
                    <li>• Na 6 maanden natuurlijke voorraad opgebruikt</li>
                    <li>• Compenseert tekort als vaste voeding beperkt</li>
                    <li>• Vooral belangrijk als baby weinig vlees/vis eet</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Brand Comparison */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Nederlandse Merken Vergelijking</h2>
              
              <div className="space-y-8">
                {brandComparison.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="font-medium text-gray-900 mb-4">{category.category}</h3>
                    <div className="space-y-4">
                      {category.brands.map((brand, brandIndex) => (
                        <div key={brandIndex} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-primary">{brand.name}</h4>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className={`w-4 h-4 ${i < brand.rating ? 'text-primary' : 'text-gray-300'}`}>
                                  ⭐
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-3">
                            <div>
                              <span className="font-medium text-gray-700">Prijs: </span>
                              <span className="text-gray-600">{brand.price}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Kosten per liter: </span>
                              <span className="text-gray-600 font-medium">{brand.costPerLiter}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Verkrijgbaar: </span>
                              <span className="text-gray-600">{brand.availability}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Marktaandeel: </span>
                              <span className="text-gray-600">{brand.marketShare}</span>
                            </div>
                          </div>
                          
                          <div>
                            <span className="font-medium text-gray-700">Unique Selling Points:</span>
                            <ul className="mt-1 space-y-1">
                              {brand.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start space-x-2">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    {categoryIndex < brandComparison.length - 1 && (
                      <div className="border-b border-gray-200 mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* When to Switch */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Wanneer Overstappen? Beslissingshulp</h2>
              
              <div className="space-y-6">
                {switchDecision.map((decision, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-4">
                      <decision.icon className={`w-5 h-5 mr-2 ${decision.color}`} />
                      <h3 className={`font-medium ${decision.color}`}>{decision.category}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {decision.reasons.map((reason, reasonIndex) => (
                        <div key={reasonIndex}>
                          <h4 className="font-medium text-primary mb-2">{reason.type}:</h4>
                          <ul className="space-y-1">
                            {reason.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2">
                                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                  decision.color === 'text-green-600' ? 'bg-green-400' : 'bg-red-400'
                                }`}></div>
                                <span className="text-sm text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    
                    {index < switchDecision.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 border border-gray-200 bg-gray-50 rounded-xl">
                <h3 className="font-medium text-primary mb-2">NEUTRAAL - Beiden Kunnen</h3>
                <p className="text-sm text-gray-700 mb-2">Situaties waarin beide opties prima zijn:</p>
                <div className="space-y-1">
                  {[
                    'Baby 6-8 maanden, groeit normaal',
                    'Vaste voeding gaat geleidelijk',
                    'Geen specifieke medische indicaties',
                    'Budget/voorkeur bepaalt keuze',
                    'Partner meningsverschil over timing'
                  ].map((situation, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-primary">□</span>
                      <span className="text-sm text-gray-700">{situation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Transition Process */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Overstap Proces: Stap-voor-Stap
              </h2>
              
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Geleidelijke Overgang (Aanbevolen)</h3>
                <div className="space-y-4">
                  {transitionProcess.map((week, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-3">{week.week}</h4>
                      <div className="space-y-2 mb-3">
                        {week.days.map((day, dayIndex) => (
                          <div key={dayIndex} className="text-sm text-gray-700 font-mono p-2 bg-gray-50 rounded">
                            {day}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 font-medium">{week.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                <h3 className="font-medium text-primary mb-2">Beste Momenten voor Overstap:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 6-7 maanden: Ideale leeftijd, vaste voeding gestart</li>
                  <li>• Niet tijdens ziekte: Wacht tot baby weer gezond is</li>
                  <li>• Weekend start: Meer tijd om aanpassingen te observeren</li>
                  <li>• Geen andere veranderingen: Niet tegelijk met nieuwe speen/routine</li>
                </ul>
              </div>
            </div>

            {/* Common Problems */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Veelvoorkomende Problemen & Oplossingen
              </h2>
              
              <div className="space-y-6">
                {commonProblems.map((problem, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-3">"{problem.problem}"</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Oorzaken:</h4>
                        <ul className="space-y-1">
                          {problem.causes.map((cause, causeIndex) => (
                            <li key={causeIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-primary mb-2">Stapsgewijze Oplossingen:</h4>
                        <ul className="space-y-1">
                          {problem.solutions.map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="text-sm text-gray-700 p-2 border border-gray-200 bg-gray-50 rounded font-mono">
                              {solution}
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

            {/* Cost Comparison */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Euro className="w-5 h-5 mr-2" />
                Kosten Vergelijking: Financiële Impact
              </h2>
              
              <div className="space-y-6">
                {costComparison.map((scenario, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{scenario.scenario}</h3>
                    <p className="text-sm text-gray-600 mb-3">{scenario.calculation}</p>
                    <div className="space-y-1">
                      {scenario.costs.map((cost, costIndex) => (
                        <div key={costIndex} className="text-sm text-gray-700 p-2 bg-gray-50 rounded font-mono">
                          {cost}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expert Recommendations */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Expert Aanbevelingen Nederlandse Professionals</h2>
              
              <div className="space-y-4">
                {expertRecommendations.map((expert, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-primary mb-2">{expert.organization}</h3>
                    <p className="text-sm text-gray-700 italic">"{expert.recommendation}"</p>
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
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="mb-2">
                      <span className="text-red-600 font-medium">❌ "{myth.myth}"</span>
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
              <h2 className="text-lg font-semibold text-primary mb-4">Conclusie: Informed Choice, Not Pressure</h2>
              
              <p className="text-gray-700 mb-4">
                Het verschil tussen startvoeding en opvolgmelk is <strong>minder groot dan marketing doet geloven</strong>. 
                Voor de meeste Nederlandse baby's is <strong>zowel nummer 1 als nummer 2 een prima keuze</strong> na 6 maanden.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-primary mb-2">Beslissingsfactoren in volgorde van belang:</h3>
                  <ol className="space-y-1 text-sm">
                    <li>1. <strong>Baby's welzijn</strong> (groei, acceptatie, vertering)</li>
                    <li>2. <strong>Medische indicaties</strong> (ijzertekort, groeiproblemen)</li>
                    <li>3. <strong>Praktische overwegingen</strong> (kosten, beschikbaarheid)</li>
                    <li>4. <strong>Ouder voorkeur</strong> (eenvoud, vertrouwdheid)</li>
                  </ol>
                </div>
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Onthoud:</strong> Er is <strong>geen verkeerde keuze</strong> tussen nummer 1 en 2. 
                    Beide zijn veilig, voedzaam, en geschikt voor gezonde baby's. Het belangrijkste is een 
                    <strong>gelukkige, groeiende baby</strong> op welke melk dan ook.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde Artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link 
                  href="/kennisbank/soorten-flesvoeding"
                  className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Soorten Flesvoeding →</div>
                  <div className="text-sm text-gray-600">Complete overzicht van alle flesvoeding types</div>
                </Link>
                <Link 
                  href="/kennisbank/financiele-aspecten/kosten-van-flesvoeding"
                  className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Kosten van Flesvoeding →</div>
                  <div className="text-sm text-gray-600">Budgettering en kostenvergelijking</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar 
          images={[
            {
              src: "/baby_feeding.png",
              alt: "Startvoeding vs opvolgmelk vergelijking",
              caption: "De juiste keuze voor jouw baby"
            },
            {
              src: "/mother_and_baby.png", 
              alt: "Flesvoeding keuze maken",
              caption: "Informed choice zonder druk"
            }
          ]}
          adTopics={["Baby Voeding", "Flesvoeding Merken"]}
        />
      </div>
    </Layout>
  )
}