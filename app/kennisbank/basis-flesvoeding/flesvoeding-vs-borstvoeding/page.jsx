import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { BookOpen, ArrowRight, Home, Scale, Heart, Calculator, TrendingUp, Users } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding vs Borstvoeding: Complete Vergelijking 2025',
  description: 'Eerlijke, wetenschappelijke vergelijking tussen flesvoeding en borstvoeding. Alle feiten, kosten, en praktische overwegingen voor Nederlandse ouders.',
}

export default function FlesvoedingVsBorstvoedingPage() {
  const sidebarImages = [
    {
      src: "/flesvoeding-vs-borstvoeding.png",
      alt: "Vergelijking flesvoeding en borstvoeding",
      caption: "Objectieve vergelijking beide methoden"
    },
    {
      src: "/ouder-keuze-voeding.png",
      alt: "Ouders maken voeding keuze",
      caption: "De juiste keuze voor jouw gezin"
    }
  ]

  const adTopics = ["Voeding Vergelijking", "Ouderschap Keuzes"]

  const nederlandseStats = [
    "94% van baby's krijgt bij geboorte borstvoeding",
    "85% krijgt op 6 maanden (deels) flesvoeding",
    "65% combineert borst- en flesvoeding",
    "35% geeft uitsluitend flesvoeding na 3 maanden"
  ]

  const voedingswaarden = [
    { component: "Eiwitten", borst: "0.9-1.2g/100ml", fles: "1.2-1.8g/100ml", opmerking: "Flesvoeding iets hoger" },
    { component: "Koolhydraten", borst: "6.7-7.8g/100ml", fles: "7.0-7.5g/100ml", opmerking: "Vergelijkbaar" },
    { component: "Vetten", borst: "3.2-3.6g/100ml", fles: "3.4-3.7g/100ml", opmerking: "Vergelijkbaar" },
    { component: "IJzer", borst: "0.04mg/100ml", fles: "0.5-1.0mg/100ml", opmerking: "Flesvoeding veel hoger" },
    { component: "DHA", borst: "Variabel", fles: "Verplicht 100mg/100ml", opmerking: "Flesvoeding consistenter" },
    { component: "Vitamine D", borst: "0-2.5μg/100ml", fles: "10-25μg/100ml", opmerking: "Flesvoeding hoger" }
  ]

  const kostenvergelijking = {
    borstvoeding: [
      { item: "Extra voeding moeder", kosten: "€300-500" },
      { item: "Kolfa-apparatuur", kosten: "€150-300" },
      { item: "Borstvoeding BH's", kosten: "€60-100" },
      { item: "Tepelcrème, zoogkompressen", kosten: "€50-80" }
    ],
    flesvoeding: [
      { item: "Flesvoeding poeder", kosten: "€600-900" },
      { item: "Flessen en spenen", kosten: "€80-150" },
      { item: "Sterilisator", kosten: "€50-150" },
      { item: "Flessenwarmer", kosten: "€30-60" }
    ]
  }

  const decisionFactors = [
    {
      factor: "Kies voor borstvoeding als:",
      criteria: [
        "Je graag de gezondheidsvoordelen wilt meemaken",
        "Kostenaspect belangrijk is",
        "Je thuis bent/flexibel kunt werken",
        "Duurzaamheid hoge prioriteit heeft",
        "Je het speciaal vindt om alleen te kunnen voeden"
      ]
    },
    {
      factor: "Kies voor flesvoeding als:",
      criteria: [
        "Je partner gelijk wilt betrekken",
        "Voorspelbaarheid belangrijk is",
        "Je fulltime werkt",
        "Je medicijnen gebruikt die niet kunnen met borstvoeding",
        "Je borstvoeding hebt geprobeerd maar problemen ondervindt"
      ]
    },
    {
      factor: "Kies voor combivoeeding als:",
      criteria: [
        "Je voordelen van beide wilt combineren",
        "Je flexibiliteit wilt maar ook gezondheidsvoordelen",
        "Je partner wilt betrekken maar ook wilt borstvoeden",
        "Je geleidelijk wilt overstappen"
      ]
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-gray-200">
          

          {/* Header */}
          <div className="mb-8">
            <div className="text-sm text-gray-600 mb-2">Basis Flesvoeding • Vergelijking</div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              Flesvoeding vs Borstvoeding
            </h1>
            <p className="text-gray-600 mb-6">
              Een eerlijke, wetenschappelijke vergelijking gebaseerd op Nederlands en internationaal 
              onderzoek. Alle feiten om een weloverwogen keuze te maken die past bij jouw situatie.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>Leestijd: 12 minuten</span>
              <span><CheckCircle className="w-4 h-4" /></span>
              <span>Objectieve vergelijking</span>
            </div>
          </div>

          {/* Nederlandse statistieken */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-primary" />
              Feiten en cijfers Nederland 2025
            </h2>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-4">Nederlandse statistieken</h3>
              <ul className="space-y-2">
                {nederlandseStats.map((stat, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{stat}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Gemiddelde duur exclusieve borstvoeding:</strong> 3.2 maanden
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Nederland scoort gemiddeld vergeleken met andere Europese landen 
                  (Noorwegen: 95%, Frankrijk: 60%, EU gemiddeld: 78% borstvoeding op 6 maanden)
                </p>
              </div>
            </div>
          </section>

          {/* Voedingswaarde vergelijking */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <Scale className="w-6 h-6 mr-3 text-primary" />
              Wetenschappelijke vergelijking
            </h2>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-4">Voedingswaarde vergelijking</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-primary">Component</th>
                      <th className="text-left py-3 px-2 font-semibold text-primary">Borstvoeding</th>
                      <th className="text-left py-3 px-2 font-semibold text-primary">Flesvoeding</th>
                      <th className="text-left py-3 px-2 font-semibold text-primary">Opmerking</th>
                    </tr>
                  </thead>
                  <tbody>
                    {voedingswaarden.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-2 font-medium text-primary">{row.component}</td>
                        <td className="py-3 px-2 text-gray-700">{row.borst}</td>
                        <td className="py-3 px-2 text-gray-700">{row.fles}</td>
                        <td className="py-3 px-2 text-sm text-gray-600">{row.opmerking}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Voordelen en nadelen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Voordelen en nadelen overzicht</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Borstvoeding */}
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-500" />
                  Borstvoeding
                </h3>
                
                <h4 className="font-medium text-gray-700 mb-3">Voordelen:</h4>
                <ul className="space-y-1 mb-4">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Antistoffen en immuunfactoren</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Perfecte samenstelling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Altijd beschikbaar en goedkoop</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Milieuvriendelijk</span>
                  </li>
                </ul>
                
                <h4 className="font-medium text-gray-700 mb-3">Nadelen:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Tijdrovend (8-12x per dag)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Beperkte vrijheid moeder</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Onzekerheid over hoeveelheid</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Mogelijk pijnlijke tepels/infecties</span>
                  </li>
                </ul>
              </div>

              {/* Flesvoeding */}
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4">
                  Flesvoeding
                </h3>
                
                <h4 className="font-medium text-gray-700 mb-3">Voordelen:</h4>
                <ul className="space-y-1 mb-4">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Flexibiliteit en voorspelbaarheid</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Partner kan voeden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Meetbare hoeveelheden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Hoger ijzer- en vitamine D gehalte</span>
                  </li>
                </ul>
                
                <h4 className="font-medium text-gray-700 mb-3">Nadelen:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Geen antistoffen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Voorbereidingstijd en kosten</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Iets hoger risico infecties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Organisatie en afwas</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Kosten vergelijking */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <Calculator className="w-6 h-6 mr-3 text-primary" />
              Kosten vergelijking (12 maanden)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4">Borstvoeding kosten</h3>
                <ul className="space-y-3">
                  {kostenvergelijking.borstvoeding.map((item, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{item.item}</span>
                      <span className="font-medium text-primary">{item.kosten}</span>
                    </li>
                  ))}
                  <li className="border-t border-gray-200 pt-3 flex justify-between items-center font-bold">
                    <span className="text-primary">Totaal</span>
                    <span className="text-primary">€560-980</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4">Flesvoeding kosten</h3>
                <ul className="space-y-3">
                  {kostenvergelijking.flesvoeding.map((item, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{item.item}</span>
                      <span className="font-medium text-primary">{item.kosten}</span>
                    </li>
                  ))}
                  <li className="border-t border-gray-200 pt-3 flex justify-between items-center font-bold">
                    <span className="text-primary">Totaal</span>
                    <span className="text-primary">€760-1260</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 border border-gray-200 rounded-lg text-center">
              <p className="font-medium text-primary mb-2">
                <strong>Verschil: €200-280 duurder voor flesvoeding</strong>
              </p>
              <p className="text-sm text-gray-600">
                Gebruik onze <Link href="/" className="text-primary hover:underline">flesvoeding calculator</Link> om je specifieke kosten te berekenen.
              </p>
            </div>
          </section>

          {/* Langetermijn onderzoek */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Langetermijn ontwikkeling: Onderzoek resultaten</h2>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-4">Nederlandse longitudinale studies (2020-2024)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-medium text-primary mb-2">Cognitieve ontwikkeling (5 jaar)</h4>
                  <p className="text-sm text-gray-600">Borstvoeding 6+ maanden: IQ 101.2</p>
                  <p className="text-sm text-gray-600">Flesvoeding vanaf geboorte: IQ 100.8</p>
                  <p className="text-xs font-medium text-primary mt-2">Verschil: 0.4 punt (niet significant)</p>
                </div>
                
                <div className="text-center">
                  <h4 className="font-medium text-primary mb-2">Sociale-emotionele ontwikkeling</h4>
                  <p className="text-sm text-gray-600">Geen verschil in gehechtheid op 2 jaar</p>
                  <p className="text-sm text-gray-600">Geen verschil in gedragsproblemen</p>
                  <p className="text-xs font-medium text-primary mt-2">Geen significant verschil</p>
                </div>
                
                <div className="text-center">
                  <h4 className="font-medium text-primary mb-2">Fysieke gezondheid</h4>
                  <p className="text-sm text-gray-600">Infecties eerste 2 jaar: 15% meer bij flesvoeding</p>
                  <p className="text-sm text-gray-600">Allergieën: 8% hoger bij flesvoeding</p>
                  <p className="text-xs font-medium text-primary mt-2">Kleine maar meetbare verschillen</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Onderzoek conclusie:</strong> Langetermijn verschillen zijn kleiner dan vaak gedacht. 
                  Sociaal-economische factoren hebben meer invloed dan voedingsmethode.
                </p>
              </div>
            </div>
          </section>

          {/* Beslissingswijzer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-primary" />
              Beslissingswijzer: Wat past bij jou?
            </h2>
            
            <div className="space-y-6">
              {decisionFactors.map((factor, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-primary mb-4">{factor.factor}</h3>
                  <ul className="space-y-2">
                    {factor.criteria.map((criterion, criterionIndex) => (
                      <li key={criterionIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusie */}
          <section className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusie</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Er is geen "beste" keuze tussen borst- en flesvoeding - er is alleen de beste keuze voor jouw 
              unieke situatie. Beide methoden kunnen zorgen voor gezonde, gelukkige baby's en een positieve 
              ouder-kind relatie.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-3">Belangrijkste inzichten:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Langetermijn verschillen zijn kleiner dan vaak gedacht</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Jouw welzijn als ouder is cruciaal voor je baby</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Flexibiliteit is mogelijk - je kunt altijd aanpassen</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-3">Volgende stappen:</h3>
                <ol className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-gray-700">Bespreek overwegingen met partner en zorgverleners</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-gray-700">Probeer de methode die bij je voelt</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-gray-700">Blijf flexibel - aanpassingen zijn altijd mogelijk</span>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="mt-6 p-4 border border-gray-200 rounded-lg text-center">
              <p className="text-lg font-medium text-primary mb-2">Uiteindelijk:</p>
              <p className="text-gray-600">
                Een gelukkige, ontspannen ouder die vol vertrouwen voedt, is het belangrijkste voor 
                een baby's ontwikkeling - ongeacht de methode.
              </p>
            </div>
          </section>

          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}