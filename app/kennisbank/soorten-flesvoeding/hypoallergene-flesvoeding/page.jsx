import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Heart, ArrowRight, Home, Shield, AlertTriangle, CheckCircle, Package, Calculator, Stethoscope } from 'lucide-react'

export const metadata = {
  title: 'Hypoallergene Flesvoeding: Complete Gids voor Nederlandse Ouders 2025',
  description: 'Alles over hypoallergene (HA) flesvoeding. Van koemelkallergie herkenning tot beste Nederlandse merken, medische begeleiding en praktische tips. Expert advies voor allergie-veilige voeding.',
}

export default function HypoallergeneVoedingPage() {
  const allergySigns = [
    { sign: 'Eczeem en huiduitslag', severity: 'mild', description: 'Rode, jeukende plekken huid' },
    { sign: 'Maag-darm problemen', severity: 'moderate', description: 'Diarree, braken, bloederige ontlasting' },
    { sign: 'Ademhalingsproblemen', severity: 'severe', description: 'Wheezing, chronische hoest' },
    { sign: 'Groeistagnatie', severity: 'severe', description: 'Slechte voedselopname' },
    { sign: 'Extreme onrust', severity: 'moderate', description: '>3 uur huilen per dag' },
    { sign: 'Zwelling gezicht/lippen', severity: 'emergency', description: 'Directe medische hulp!' }
  ]

  const haFormulas = [
    {
      brand: 'Nutrilon HA',
      type: 'Preventief (pHA)',
      price: '€16-18/800g',
      effectiveness: '50% minder allergie risico',
      pros: ['Nederlandse ontwikkeling', 'PronutriPlus prebiotica', 'Breed verkrijgbaar'],
      cons: ['Duurder dan gewone voeding', 'Bittere smaak']
    },
    {
      brand: 'Hero Baby HA',
      type: 'Preventief (pHA)',
      price: '€14-16/800g',
      effectiveness: 'Bewezen allergie preventie',
      pros: ['Beste prijs-kwaliteit', 'Milde smaak', 'Swiss kwaliteit'],
      cons: ['Minder breed verkrijgbaar', 'Beperkte varianten']
    },
    {
      brand: 'Nutricia Pepti',
      type: 'Therapeutisch (eHA)',
      price: '€25-30/400g',
      effectiveness: '90% symptoom verlichting',
      pros: ['Op recept vergoed', 'Bewezen allergie', 'Medische begeleiding'],
      cons: ['Zeer duur zonder recept', 'Sterke smaak', 'Alleen op advies']
    }
  ]

  const riskFactors = [
    'Beide ouders allergie (60% kans)',
    'Een ouder + broer/zus allergie (40% kans)',
    'Familie eczeem/astma geschiedenis',
    'Premature geboorte',
    'Antibiotica vroeg levensjaar',
    'Keizersnede geboorte'
  ]

  const implementationSteps = [
    {
      week: 'Week 1',
      focus: 'Test Acceptatie',
      actions: ['1 fles HA per dag (middag)', 'Observeer acceptatie smaak', 'Monitor vertering', 'Bijhouden symptomen dagboek']
    },
    {
      week: 'Week 2-4',
      focus: 'Geleidelijke Overstap',
      actions: ['Verhogen naar 3 flessen/dag', 'Symptoom verbetering meten', 'Gewichtstoename controleren', 'Medisch overleg planning']
    },
    {
      week: 'Week 4-12',
      focus: 'Evaluatie & Optimalisatie',
      actions: ['Volledige HA voeding', 'Maandelijkse medische check', 'Groei monitoring', 'Toekomst planning bespreken']
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Soorten Flesvoeding  Hypoallergeen</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-primary" />
                Hypoallergene Flesvoeding: Complete Medische Gids
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Hypoallergene flesvoeding kan levensreddend zijn voor baby's met koemelkallergie. Leer wanneer HA-voeding nodig is, 
                welke Nederlandse merken werken, en hoe je veilig overstapt met medische begeleiding.
              </p>
            </div>

            {/* When HA feeding is needed */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Stethoscope className="w-5 h-5 mr-2" />
                Wanneer is Hypoallergene Voeding Nodig?
              </h2>
              
              <div className="mb-6">
                <h3 className="font-medium text-primary mb-3">8% van Nederlandse baby's ontwikkelt koemelkallergie</h3>
                <p className="text-gray-700 mb-4">
                  Voor deze groep is hypoallergene (HA) flesvoeding niet alleen een voorkeur - het is een medische noodzaak 
                  die ernstige allergische reacties kan voorkomen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-primary mb-3">Medische Indicaties</h4>
                  <div className="space-y-3">
                    {allergySigns.slice(0, 3).map((sign, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <AlertTriangle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-700">{sign.sign}</div>
                          <div className="text-sm text-gray-600">{sign.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-3">Hoog Risico Groepen</h4>
                  <div className="space-y-2">
                    {riskFactors.slice(0, 4).map((factor, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-primary mb-1">Belangrijk: Medische Diagnose Vereist</h4>
                    <p className="text-gray-700 text-sm">
                      Start nooit zelf met HA-voeding zonder medisch advies. Diagnose door kinderarts/allergoloog 
                      is essentieel voor juiste behandeling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of HA formulas */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Nederlandse HA-Voeding Merken & Vergelijking</h2>
              
              <div className="space-y-4 mb-6">
                {haFormulas.map((formula, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-primary">{formula.brand}</h3>
                        <span className="text-sm text-gray-600">{formula.type}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-gray-700">{formula.price}</div>
                        <div className="text-sm text-gray-600">{formula.effectiveness}</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Voordelen:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {formula.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Nadelen:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {formula.cons.map((con, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <AlertTriangle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {index < haFormulas.length - 1 && (
                      <div className="border-t border-gray-200 mt-6 pt-6"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-medium text-primary mb-2">Kosten & Vergoeding</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-primary mb-1">Volledig Vergoed:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Therapeutische formules op recept</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Bij bewezen diagnose kinderarts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Aminozuur formules (Neocate)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary mb-1">Eigen Kosten:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Preventieve HA-voeding</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Exploratie zonder diagnose</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>€200-500 extra per jaar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation guide */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Overstap naar HA-Voeding: Stap voor Stap</h2>
              
              <div className="space-y-6">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-primary mb-2">{step.week}: {step.focus}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.actions.map((action, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-gray-700">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6 mt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Let op</h3>
                    <div className="text-sm text-amber-700 leading-relaxed space-y-1">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Bij bewezen allergie: onmiddellijke volledige overstap</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Baby weigert HA? Probeer andere temperatuur/speen</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Medicijnbaby: altijd eerst medisch overleg</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Symptomen erger? Direct contact kinderarts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency protocol */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Noodprotocol: Allergische Reacties
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Milde Reactie</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div><strong>Symptomen:</strong> Rode vlekken, jeuk, lichte diarree</div>
                    <div><strong>Actie:</strong> Stop voeding, observeer, contact medisch team</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary mb-3">Ernstige Reactie - BEL 112</h3>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Zwelling gezicht/lippen/tong</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Moeilijke ademhaling/wheezing</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Blauw worden huid/lippen</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Extreme lethargie/bewusteloosheid</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-medium text-primary mb-2">Noodplan Template (voor koelkast/oppas)</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <div><strong>Bekende allergieën:</strong> Koemelk</div>
                  <div><strong>Toegestane voeding:</strong> [HA-merk] + borstvoeding</div>
                  <div><strong>Bij reactie:</strong> Stop voeding  Bel ouders  Bij ernstig: 112</div>
                  <div><strong>Kinderarts:</strong> [naam + telefoon]</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/problemen-oplossen/krampjes-na-flesvoeding" className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default">
                  <div className="font-medium text-gray-700">Krampjes na flesvoeding </div>
                  <div className="text-sm text-gray-600">HA-voeding als oplossing voor krampen</div>
                </Link>
                <Link href="/kennisbank/soorten-flesvoeding/anti-reflux-flesvoeding" className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default">
                  <div className="font-medium text-gray-700">Anti-reflux flesvoeding </div>
                  <div className="text-sm text-gray-600">Specialistische voeding voor reflux</div>
                </Link>
                <Link href="/kennisbank/soorten-flesvoeding/verschil-startvoeding-opvolgmelk" className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default">
                  <div className="font-medium text-gray-700">Verschil startvoeding/opvolgmelk </div>
                  <div className="text-sm text-gray-600">HA-voeding door verschillende leeftijden</div>
                </Link>
                <Link href="/kennisbank/soorten-flesvoeding" className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default">
                  <div className="font-medium text-gray-700">Alle soorten flesvoeding </div>
                  <div className="text-sm text-gray-600">Overzicht alle flesvoeding types</div>
                </Link>
              </div>
            </div>

            {/* Calculator CTA */}
            <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                HA-Voeding Dosering Berekenen
              </h2>
              <p className="text-white/90 mb-4">
                Ook bij hypoallergene voeding zijn de juiste hoeveelheden belangrijk. 
                Bereken exact hoeveel ml HA-voeding jouw baby nodig heeft.
              </p>
              <Link 
                href="/"
                className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-medium py-3 px-6 rounded-xl transition-all inline-flex items-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Gratis Calculator Gebruiken
              </Link>
            </div>

          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <KennisbankSidebar 
            images={[
              {
                src: "/kunstsvoeding-2.webp",
                alt: "Hypoallergene flesvoeding opties",
                caption: "Speciale formules voor allergische baby's"
              },
              {
                src: "/close-up-baby.webp",
                alt: "Baby met allergie signalen herkenning",
                caption: "Vroege symptomen herkennen"
              },
              {
                src: "/slapende-babe.webp",
                alt: "Rustige baby na juiste hypoallergene voeding",
                caption: "Comfort na de juiste voeding"
              }
            ]}
            adTopics={[
              'HA-voeding merken vergelijken',
              'Allergietest baby laten doen',
              'Kinderarts allergoloog vinden'
            ]}
          />
        </div>
      </div>
    </Layout>
  )
}