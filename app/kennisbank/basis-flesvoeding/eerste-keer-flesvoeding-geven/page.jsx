import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { BookOpen, ArrowRight, Home, CheckCircle, AlertTriangle, Clock, Baby } from 'lucide-react'

export const metadata = {
  title: 'Eerste keer flesvoeding geven: Complete Stap-voor-stap Gids 2025',
  description: 'Complete handleiding voor Nederlandse ouders die voor het eerst flesvoeding gaan geven. Van voorbereiding tot hygiëne - alles wat je moet weten voor een succesvolle start.',
}

export default function EersteKeerFlesvoedingPage() {
  // Custom sidebar content
  const sidebarImages = [
    {
      src: "/eerste-fles-geven.png",
      alt: "Eerste keer flesvoeding geven",
      caption: "Stap-voor-stap eerste flesvoeding"
    },
    {
      src: "/baby-fles-houding.png",
      alt: "Juiste houding flesvoeding",
      caption: "Veilige en comfortabele voedingshouding"
    }
  ]

  const adTopics = ["Flesvoeding Starter Sets", "Baby Voedingsbenodigdheden"]

  const essentialItems = [
    "2-6 babyflessen (150-250ml voor startfase)",
    "Spenen (maat 1 voor pasgeborenen)", 
    "Flesvoeding poeder (startvoeding nummer 1)",
    "Sterilisator (magnetron of elektrisch model)",
    "Afwasborstel voor flessen",
    "Maatbeker voor water afmeten",
    "Thermometer voor temperatuur checken"
  ]

  const handigItems = [
    "Flessenwarmer (niet essentieel, maar handig)",
    "Isolerende tas voor onderweg",
    "Spuugdoekjes (veel spuugdoekjes!)",
    "Fopspenen (als je deze wilt gebruiken)"
  ]

  const waterPreparation = [
    { age: "0-3 maanden", instruction: "Water altijd eerst koken, laten afkoelen tot 40-50°C" },
    { age: "3-6 maanden", instruction: "Koken aanbevolen, kan ook koud water gebruiken bij goed immuunsysteem" },
    { age: "6+ maanden", instruction: "Kraanwater direct uit kraan kan (kamertemperatuur of lauw)" }
  ]

  const feedingGuide = [
    { age: "0-1 week", perFeeding: "50-90ml", frequency: "6-8x", total: "400-600ml" },
    { age: "1-4 weken", perFeeding: "60-120ml", frequency: "6-7x", total: "500-750ml" },
    { age: "1-2 maanden", perFeeding: "90-150ml", frequency: "5-7x", total: "600-900ml" },
    { age: "2-4 maanden", perFeeding: "120-180ml", frequency: "5-6x", total: "700-1000ml" },
    { age: "4-6 maanden", perFeeding: "150-220ml", frequency: "4-5x", total: "750-1000ml" }
  ]

  const transitionSchedule = [
    { week: "Week 1", action: "Vervang 1 borstvoeding door flesvoeding" },
    { week: "Week 2", action: "Vervang 2 borstvoedingen" },
    { week: "Week 3", action: "Vervang 3-4 borstvoedingen" },
    { week: "Week 4", action: "Volledig flesvoeding" }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-7">
        <div className="space-y-6">
          

          {/* Header */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="text-sm text-gray-600 mb-2">Basis Flesvoeding • Beginners Gids</div>
            <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
              <Baby className="w-6 h-6 mr-3 text-primary" />
              Eerste keer flesvoeding geven
            </h1>
            <p className="text-gray-600 mb-6">
              Complete stap-voor-stap handleiding voor Nederlandse ouders die voor het eerst 
              flesvoeding gaan geven. Of je nu overstapt van borstvoeding of direct begint - 
              van voorbereiding tot hygiëne, alles voor een succesvolle start.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>Leestijd: 10 minuten</span>
              <span>Geschikt vanaf: Geboorte</span>
              <span>Stap-voor-stap gids</span>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-medium text-primary mb-2">Timing voor eerste fles:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• <strong>Bij volledige flesvoeding:</strong> direct na geboorte mogelijk</li>
                <li>• <strong>Bij combinatie met borst:</strong> ideaal tussen 2-4 weken</li>
                <li>• <strong>Bij overstap van borst:</strong> elk moment mogelijk, meer geduld nodig</li>
              </ul>
            </div>
          </div>

          {/* Introduction */}
          <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <p className="text-gray-600 leading-relaxed">
              Ben je klaar om je baby voor de eerste keer flesvoeding te geven? Dat kan spannend zijn! 
              Of je nu overstapt van borstvoeding, begint met combivoeeding, of direct start met flesvoeding - 
              deze stap-voor-stap gids helpt je om het veilig en succesvol te doen.
            </p>
          </section>

          {/* What you need */}
          <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">Wat heb je nodig?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-gray-600 mr-2" />
                  Essentiële benodigdheden
                </h3>
                <ul className="space-y-2">
                  {essentialItems.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4 flex items-center">
                  <Baby className="w-5 h-5 text-gray-600 mr-2" />
                  Handig om te hebben
                </h3>
                <ul className="space-y-2">
                  {handigItems.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Water preparation */}
          <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">Water: De basis van goede flesvoeding</h2>
            
            <div className="border border-gray-200 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-primary mb-3">Nederlands kraanwater: Veilig voor baby's</h3>
              <p className="text-gray-700 mb-4">
                In Nederland is kraanwater uitstekend geschikt voor flesvoeding:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Streng gecontroleerd door waterbedrijven</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Lage nitraat- en fluoridegehaltes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Optimale mineralensamenstelling voor baby's</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-4">Watervoorbereiding per leeftijd</h3>
              <div className="space-y-3">
                {waterPreparation.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200">
                    <div className="font-medium text-primary min-w-24">{item.age}:</div>
                    <div className="text-gray-700">{item.instruction}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 border border-gray-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary">Let op:</strong>
                    <span className="text-gray-700"> Gebruik nooit water uit de warmwaterboiler - dit kan bacteriën bevatten.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step by step guide */}
          <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">Stap-voor-stap: Je eerste fles klaarmaken</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4 flex items-center">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Voorbereiding (5 minuten)
                </h3>
                <ol className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Was je handen</strong> grondig met zeep (30 seconden)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Steriliseer fles en speen</strong> volgens instructies sterilisator</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Meet het water af</strong> - gebruik onze <Link href="/" className="text-primary hover:underline">flesvoeding calculator</Link> voor de juiste hoeveelheid</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Verwarm water</strong> tot juiste temperatuur (40-50°C voor baby's onder 3 maanden)</span>
                  </li>
                </ol>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4 flex items-center">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Poeder toevoegen (2 minuten)
                </h3>
                <ol className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Lees verpakking</strong> - elk merk heeft iets andere verhoudingen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Meet poeder af</strong> met bijgeleverde maatschep</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Strijk schep af</strong> met mesje voor exacte maat</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Voeg poeder toe</strong> aan het water (NIET andersom!)</span>
                  </li>
                </ol>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4 flex items-center">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Mengen en temperatuur checken (3 minuten)
                </h3>
                <ol className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Plaats speen en dop</strong> op fles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Schud voorzichtig</strong> tot poeder volledig opgelost is</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Check temperatuur</strong> op pols - moet lauw aanvoelen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Test doorstroming</strong> - er moeten druppels uitkomen, geen straal</span>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Feeding amounts table */}
          <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">Juiste hoeveelheden per leeftijd</h2>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-primary">Leeftijd</th>
                      <th className="text-left py-3 px-2 font-semibold text-primary">Per voeding</th>
                      <th className="text-left py-3 px-2 font-semibold text-primary">Voedingen/dag</th>
                      <th className="text-left py-3 px-2 font-semibold text-primary">Totaal/dag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedingGuide.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-2 font-medium text-primary">{row.age}</td>
                        <td className="py-3 px-2 text-gray-700">{row.perFeeding}</td>
                        <td className="py-3 px-2 text-gray-700">{row.frequency}</td>
                        <td className="py-3 px-2 text-gray-700">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 p-3 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Persoonlijke berekening:</strong> Gebruik onze <Link href="/" className="text-primary hover:underline">calculator</Link> voor exacte hoeveelheden op basis van gewicht en leeftijd van je baby.
                </p>
              </div>
            </div>
          </section>

          {/* Transition from breastfeeding */}
          <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">Van borstvoeding naar flesvoeding</h2>
            
            <div className="border border-gray-200 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-primary mb-4">Geleidelijke overstap (aanbevolen)</h3>
              <div className="space-y-3">
                {transitionSchedule.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200">
                    <div className="font-medium text-primary min-w-20">{item.week}:</div>
                    <div className="text-gray-700">{item.action}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-4">Tips voor succesvolle overstap</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Begin met middag voeding (baby meestal minder honger)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Laat partner flesvoeding geven (baby ruikt moedermelk niet)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Verschillende spenen proberen tot je de juiste vindt</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Geduldig blijven - sommige baby's hebben weken nodig</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Baby voorbereiden */}
          <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">Baby voorbereiden voor eerste fles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4">Herken honger signalen</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Zuigbewegingen met mond</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Handje naar mond brengen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Zoekreflex (hoofd draaien naar aanraking)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Zachte hongergeluiden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Wakker worden en alert zijn</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4">Optimale omgeving</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Rustige setting - stil of zachte muziek</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Gedimde verlichting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Comfortabele temperatuur (20-22°C)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Telefoon op stil</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Andere kinderen bezighouden</span>
                  </li>
                </ul>
                
                <div className="mt-4 p-3 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Vermijd:</strong> Voeden tijdens huilbui, wanneer baby te moe is, of bij koorts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Voedingstechniek */}
          <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">De perfecte voedingstechniek</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4">Juiste houding</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Voor baby:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Houd baby semi-rechtop (45-60 graden)</li>
                      <li>• Ondersteun hoofd en nek goed</li>
                      <li>• Hoofd iets hoger dan lichaam</li>
                      <li>• Hou baby dicht tegen je aan</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Voor jezelf:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Ga comfortabel zitten met rugsteun</li>
                      <li>• Arm ondersteunen met kussen</li>
                      <li>• Zorg dat je ontspannen bent</li>
                      <li>• Varieer soms van arm (goede ontwikkeling)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4">De fles introduceren</h3>
                <ol className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-gray-700">Laat baby de speen met lippen verkennen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-gray-700">Raak zachtjes onderlip aan met speen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-gray-700">Wacht tot baby mond opent</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    <span className="text-gray-700">Plaats speen zachtjes in mond (niet forceren)</span>
                  </li>
                </ol>
                
                <div className="mt-4 p-3 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-primary mb-2">Tijdens het voeden:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Houd fles licht schuin (speen gevuld met melk)</li>
                    <li>• Laat baby eigen tempo bepalen</li>
                    <li>• Boertje laten na elke 60-90ml</li>
                    <li>• Praat of zing zachtjes tijdens voeding</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* When to seek help */}
          <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">Wanneer hulp zoeken?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-600 mb-4">Direct contact opnemen</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Baby weigert alle voedingen langer dan 6 uur</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Tekenen van uitdroging (droge mond, geen tranen)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Voortdurend overgeven</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Koorts boven 38°C</span>
                  </li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-600 mb-4">Binnen 1-2 dagen contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Structurele voedingsproblemen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Onrust na elke voeding</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Onverwachte gewichtsverandering</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Twijfels over groei en ontwikkeling</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">Belangrijkste tips</h2>
            <ol className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <span className="text-gray-700"><strong>Bereid goed voor</strong> - juiste spullen en kennis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <span className="text-gray-700"><strong>Start rustig</strong> - forceer niets</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <span className="text-gray-700"><strong>Volg je baby</strong> - signalen zijn belangrijker dan schema's</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <span className="text-gray-700"><strong>Zoek hulp</strong> bij twijfels</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                <span className="text-gray-700"><strong>Heb geduld</strong> - routine komt vanzelf</span>
              </li>
            </ol>
            
            <div className="mt-6 p-4 border border-gray-200 rounded-lg text-center">
              <p className="font-medium text-primary">Onthoud: Je doet het geweldig!</p>
              <p className="text-gray-600">Flesvoeding geven is een liefdevolle manier om je baby te voeden en te koesteren. 
              De eerste fles geven is een mijlpaal - met voorbereiding, geduld en de juiste technieken 
              wordt het al snel een natuurlijke routine.</p>
            </div>
          </section>

        </div>
      </div>

      <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}