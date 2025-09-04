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
      <div className="grid grid-cols-12 gap-6 min-h-screen">
      <div className="col-span-12 lg:col-span-7">
        <div className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-gray-200">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-primary flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <ArrowRight className="w-4 h-4" />
            <Link href="/kennisbank" className="hover:text-primary">Kennisbank</Link>
            <ArrowRight className="w-4 h-4" />
            <Link href="/kennisbank/basis-flesvoeding" className="hover:text-primary">Basis Flesvoeding</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-gray-800">Eerste keer flesvoeding geven</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="text-sm text-blue-600 mb-2">Basis Flesvoeding • Beginners Gids</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Eerste keer flesvoeding geven
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Complete stap-voor-stap handleiding voor Nederlandse ouders die voor het eerst 
              flesvoeding gaan geven. Van voorbereiding tot hygiëne - alles voor een succesvolle start.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>Leestijd: 8 minuten</span>
              <span>Geschikt vanaf: Geboorte</span>
              <span>Stap-voor-stap gids</span>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ben je klaar om je baby voor de eerste keer flesvoeding te geven? Dat kan spannend zijn! 
              Of je nu overstapt van borstvoeding, begint met combivoeeding, of direct start met flesvoeding - 
              deze stap-voor-stap gids helpt je om het veilig en succesvol te doen.
            </p>
          </section>

          {/* What you need */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Wat heb je nodig?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-gray-600 mr-2" />
                  Essentiële benodigdheden
                </h3>
                <ul className="space-y-2">
                  {essentialItems.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <Baby className="w-5 h-5 text-blue-600 mr-2" />
                  Handig om te hebben
                </h3>
                <ul className="space-y-2">
                  {handigItems.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Water preparation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Water: De basis van goede flesvoeding</h2>
            
            <div className="border border-gray-200 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Nederlands kraanwater: Veilig voor baby's</h3>
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
              <h3 className="font-semibold text-gray-800 mb-4">Watervoorbereiding per leeftijd</h3>
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
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800">Let op:</strong>
                    <span className="text-gray-700"> Gebruik nooit water uit de warmwaterboiler - dit kan bacteriën bevatten.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step by step guide */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Stap-voor-stap: Je eerste fles klaarmaken</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
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
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
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
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
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
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Juiste hoeveelheden per leeftijd</h2>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-800">Leeftijd</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-800">Per voeding</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-800">Voedingen/dag</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-800">Totaal/dag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedingGuide.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-2 font-medium text-gray-800">{row.age}</td>
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
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Van borstvoeding naar flesvoeding</h2>
            
            <div className="border border-gray-200 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Geleidelijke overstap (aanbevolen)</h3>
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
              <h3 className="font-semibold text-gray-800 mb-4">Tips voor succesvolle overstap</h3>
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

          {/* When to seek help */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Wanneer hulp zoeken?</h2>
            
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
                <h3 className="font-semibold text-amber-600 mb-4">Binnen 1-2 dagen contact</h3>
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
          <section className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Belangrijkste tips</h2>
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
              <p className="text-lg font-medium text-gray-800">Onthoud: Je doet het geweldig!</p>
              <p className="text-gray-600">Flesvoeding geven is een liefdevolle manier om je baby te voeden en te koesteren.</p>
            </div>
          </section>

        </div>
      </div>

      <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}