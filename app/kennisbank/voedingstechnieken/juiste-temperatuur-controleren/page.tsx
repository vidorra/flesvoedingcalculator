import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Thermometer, AlertCircle, ArrowRight } from 'lucide-react'
import BolProductSection from '../../../../components/BolProductLink'

export const metadata = {
  title: 'Juiste Temperatuur Controleren: Veilig en Comfortabel Voeden',
  description: 'Complete gids voor perfecte flesvoeding temperatuur - van meten tot aanpassen. Leer hoe je 37°C bereikt met verschillende meetmethoden.',
  keywords: 'flesvoeding temperatuur, baby melk temperatuur, thermometer baby, pols test, veilige voeding temperatuur',
}

export default function JuisteTemperatuurControleren() {
  const sidebarImages = [
    {
      src: "/flesvoeding-close-up.webp",
      alt: "Temperatuur controleren flesvoeding close-up",
      caption: "Perfecte temperatuur"
    },
    {
      src: "/kunstvoeding.webp", 
      alt: "Veilige baby voeding temperatuur",
      caption: "Veiligheid voorop"
    },
    {
      src: "/close-up-baby.webp",
      alt: "Baby wacht op juiste temperatuur voeding",
      caption: "Geduld voor perfecte warmte"
    }
  ]

  const adTopics = [
    "Baby thermometers",
    "Flessenwarmer",
    "Temperatuur strips",
    "Baby flessen", 
    "Infrarood thermometer"
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            
            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Voedingstechnieken • Temperatuur Controleren</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Thermometer className="w-6 h-6 mr-3 text-primary" />
                Juiste Temperatuur Controleren: Veilig en Comfortabel Voeden
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Complete gids voor perfecte flesvoeding temperatuur - van meten tot aanpassen
              </p>
            </div>

            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed">
                De juiste temperatuur van flesvoeding is cruciaal voor de veiligheid en het comfort van je baby. Te hete melk kan brandwonden veroorzaken, terwijl te koude melk slecht wordt opgenomen en je baby oncomfortabel maakt.
                Net als bij <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="text-primary hover:underline font-medium">de bereiding van de fles</Link> en
                <Link href="/kennisbank/hygiene-bereiding/veilig-verwarmen-flesvoeding" className="text-primary hover:underline font-medium"> het veilig verwarmen</Link>,
                is temperatuurcontrole een essentiële vaardigheid.
              </p>
            </section>

            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">De perfecte temperatuur: 37°C</h2>

              <div className="space-y-6">
                <div>
                <h3 className="font-medium text-primary mb-3">Waarom lichaamstemperatuur ideaal is</h3>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">37°C: Het natuurlijke referentiepunt</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Moedermelk temperatuur</strong>: Komt direct uit het lichaam op 37°C</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Optimale opname</strong>: Voedingsstoffen worden best opgenomen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Comfortabel slikken</strong>: Geen schok voor baby's mond en keel</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Natuurlijk gevoel</strong>: Bootst borstvoeding perfect na</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Wetenschappelijke onderbouwing</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Nederlandse onderzoeken</strong>: UMCG toonde aan dat 37°C optimale vertering geeft</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Europese richtlijnen</strong>: EU voedingsveiligheid adviseert 35-40°C als veilige range</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>TNO studies</strong>: Baby's accepteren 37°C het best, minder stress</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Consultatiebureau consensus</strong>: Alle Nederlandse JGZ centra hanteren 37°C als standaard</span>
                    </li>
                  </ul>
                </div>
              </div>

                <div>
                <h3 className="font-medium text-primary mb-3">Veilige temperatuur range</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Acceptabele temperaturen</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Ideaal</strong>: 37°C (lichaamstemperatuur)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Veilig bereik</strong>: 35-40°C</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Minimum</strong>: 32°C (kouder wordt slecht geaccepteerd)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Maximum</strong>: 42°C (warmer wordt gevaarlijk)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Gevaarlijke temperaturen vermijden</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <span className="text-gray-600"></span>
                        <span className="text-gray-700"><strong>Boven 45°C</strong>: Risico op brandwonden mond en keel</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-gray-600"></span>
                        <span className="text-gray-700"><strong>Onder 30°C</strong>: Slechte opname voedingsstoffen, baby weigert</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-gray-600"></span>
                        <span className="text-gray-700"><strong>Ongelijkmatig</strong>: Hot spots door magnetron verhitting</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-gray-600"></span>
                        <span className="text-gray-700"><strong>Te snelle wisseling</strong>: Van koud naar heet stresst spijsvertering</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Meetmethoden: Van traditioneel tot modern</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-primary mb-3">1. Pols test - De klassieke methode</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium text-primary mb-3">Hoe doe je dit? </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Druppel op pols</strong>: Niet op hand of vingers</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Onderkant pols</strong>: Gevoeligste deel van pols</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Gevoel beoordelen</strong>: Moet lauw aanvoelen, niet warm of koud</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Beide polsen</strong>: Controleren (mensen hebben verschillende gevoeligheid)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-primary mb-3">Pols test perfectioneren</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Warme handen</strong>: Eerst handen opwarmen voor accuraat gevoel</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Meerdere druppels</strong>: 2-3 druppels voor betrouwbaar beeld</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Vergelijken</strong>: Met water van bekende temperatuur oefenen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Partner check</strong>: Laat ook partner controleren als back-up</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Voordelen pols test:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Altijd beschikbaar</strong>: Geen apparatuur nodig</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Gratis</strong>: Kost niets extra</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Snel</strong>: In 2 seconden gedaan</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Betrouwbaar</strong>: Eeuwenlang bewezen methode</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Nadelen pols test:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Subjectief</strong>: Iedereen voelt anders</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Minder nauwkeurig</strong>: Geen exacte graden</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Beïnvloed door omgeving</strong>: Koude handen geven verkeerd gevoel</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Leerproces</strong>: Ervaring nodig voor goede inschatting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">2. Digitale thermometer - Meest nauwkeurig</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium text-primary mb-3">Standaard digitale thermometer</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Prijs</strong>: €5-15</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Nauwkeurigheid</strong>: ±0,1°C</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Snelheid</strong>: 10-30 seconden</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Voordelen</strong>: Zeer nauwkeurig, objectief, makkelijk af te lezen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Nadelen</strong>: Extra apparaat, batterij nodig</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-primary mb-3">Snelle digitale thermometer</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Prijs</strong>: €15-25</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Nauwkeurigheid</strong>: ±0,2°C</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Snelheid</strong>: 3-10 seconden</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Voordelen</strong>: Snel, nauwkeurig</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Nadelen</strong>: Duurder</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Gebruikstips digitale thermometer:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Diep in melk</strong>: Niet alleen aan oppervlak meten</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Roeren</strong>: Melk eerst roeren voor gelijkmatige temperatuur</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Schoon houden</strong>: Na gebruik goed schoonmaken</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Batterij</strong>: Regelmatig checken en vervangen</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">3. Infrarood thermometer - Contactloos</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-primary mb-3">Hoe werkt infrarood?</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Afstand meten</strong>: 3-5 cm van fles oppervlak</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Oppervlakte temperatuur</strong>: Meet alleen buitenkant</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Snelle meting</strong>: 1-2 seconden resultaat</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Geen contact</strong>: Hygiënisch, geen vervuiling</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Voordelen IR thermometer:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Snel</strong>: Instant resultaat</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Hygiënisch</strong>: Geen contact met melk</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Meerdere doelen</strong>: Ook voor bad, kamer, baby</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Modern</strong>: Technologisch geavanceerd</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Nadelen IR thermometer:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Duur</strong>: €20-50 voor goede kwaliteit</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Oppervlakte alleen</strong>: Niet de binnentemperatuur</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Omgevingsgevoelig</strong>: Reflectie kan resultaat beïnvloeden</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Leerproces</strong>: Juiste afstand en hoek vinden</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">4. Temperatuur strips - Visuele controle</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-primary mb-3">Hoe werken temperatuurstrips?</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Plakken op fles</strong>: Aan buitenkant fles bevestigen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Kleur verandering</strong>: Verschillende kleuren voor verschillende temperaturen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Visuele aflezing</strong>: Direct zien of temperatuur goed is</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Herbruikbaar</strong>: Meerdere keren gebruiken</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-primary mb-3">Types temperatuurstrips:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Basic strips</strong>: €3-8, simpele kleurverandering</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Digitale strips</strong>: €8-15, met exacte temperatuur weergave</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Glow strips</strong>: €10-20, lichten op bij juiste temperatuur</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Smart strips</strong>: €15-30, koppeling met smartphone app</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Temperatuur aanpassen: Snel en veilig</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-primary mb-3">Te hete melk afkoelen</h3>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Koud water bad - Beste methode</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Procedure</strong>: Fles in kom koud water, niet ijskoud</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Tijd</strong>: 2-5 minuten afhankelijk van hoeveelheid</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Voordeel</strong>: Gelijkmatige afkoeling, goed controleerbaar</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Let op</strong>: Water niet over fles top laten komen</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Onder koude kraan</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Procedure</strong>: Fles draaien onder koud stromend water</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Tijd</strong>: 1-3 minuten met regelmatige controle</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Voordeel</strong>: Snel en effectief</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Let op</strong>: Fles goed vasthouden, kan glad worden</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-primary mb-3">Natuurlijke afkoeling</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Procedure</strong>: Fles op aanrecht laten staan</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Tijd</strong>: 10-15 minuten (te lang voor hongerige baby)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Voordeel</strong>: Geen extra apparatuur</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Nadeel</strong>: Duurt te lang, temperatuur daalt onder ideaal</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
                      <h4 className="font-medium text-amber-800 mb-2">NIET doen bij afkoelen:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>IJsblokjes toevoegen</strong>: Verdunt de melk</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>In vriezer</strong>: Te snelle afkoeling, kan melk laten scheiden</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Blazen</strong>: Onhygiënisch, bacteriën uit mond</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Schudden met koud</strong>: Kan melk laten klonteren</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Te koude melk opwarmen</h3>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Warm water bad - Meest gecontroleerd</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Setup</strong>: Kom met warm water (50-60°C)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Procedure</strong>: Fles erin, regelmatig draaien</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Tijd</strong>: 3-8 minuten afhankelijk van starttemperatuur</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700"><strong>Controle</strong>: Elke 2 minuten temperatuur checken</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Flessenwarmer - Meest convenient</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700"><strong>Stoom warmers</strong>: Snelst, 2-4 minuten</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700"><strong>Water bad warmers</strong>: Langzamer maar gelijkmatiger, 5-8 minuten</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700"><strong>Reis warmers</strong>: Voor in auto, 8-12 minuten</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700"><strong>Smart warmers</strong>: Met temperatuur controle, 3-6 minuten</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
                      <h4 className="font-medium text-amber-800 mb-2">ABSOLUUT NIET doen:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Magnetron</strong>: Creëert gevaarlijke hot spots</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Direct op fornuis</strong>: Overmatige verhitting, melk kan scheiden</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Kokend water</strong>: Te heet, vernietigt voedingsstoffen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Hete radiator</strong>: Ongelijkmatige verhitting, oncontroleerbaar</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veiligheidsrisico&apos;s en gevaren</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Brandwonden voorkomen</h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Hoe ontstaan brandwonden?</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Te hete melk</strong>: Boven 45°C direct gevaarlijk</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Hot spots</strong>: Magnetron verhitting creëert lokale hete plekken</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Oneerlijke verdeling</strong>: Buitenkant koel, binnenkant heet</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Snelle temperatuur wisseling</strong>: Baby verwacht koele melk, krijgt hete</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Symptomen brandwonden baby:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Direct herkenbaar</strong>: Schreeuwen, terugtrekken, rode lippen/mond</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Latere symptomen</strong>: Witte vlekjes in mond, weigeren drinken</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Ernstige gevallen</strong>: Blaren, zwelling, extreme pijn</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Eerste hulp brandwonden:</h4>
                    <ol className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-medium">1.</span>
                        <span className="text-gray-700"><strong>Stop de voeding onmiddellijk</strong>: Geen verdere schade</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-medium">2.</span>
                        <span className="text-gray-700"><strong>Koel water</strong>: Voorzichtig spoelen mond met lauw water</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-medium">3.</span>
                        <span className="text-gray-700"><strong>Geen ijs</strong>: Te koud kan extra schade veroorzaken</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-medium">4.</span>
                        <span className="text-gray-700"><strong>Direct arts</strong>: Bij meer dan lichte roodheid</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-medium">5.</span>
                        <span className="text-gray-700"><strong>Comfort</strong>: Baby kalmeren, veel knuffels</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Bacteriële groei bij verkeerde temperatuur</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Gevaarlijke temperatuur zones</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>20-50°C</strong>: Ideaal voor bacteriële groei</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>35-42°C</strong>: Snelste groei Cronobacter sakazakii</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Lauw water</strong>: Perfect broeihaard voor schadelijke bacteriën</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Lang bewaren</strong>: Tijd verergert probleem exponentieel</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Preventie bacteriële groei:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Verse bereiding</strong>: Elke fles vers maken</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Juiste temperatuur</strong>: Direct op 37°C brengen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Snel consumeren</strong>: Binnen 1 uur na bereiding</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Bij twijfel weggooien</strong>: Veiligheid boven kosten</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Praktische tips voor dagelijks gebruik</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Routine ontwikkelen</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-primary mb-3">Consistente procedure opbouwen </h4>
                      <ol className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <span className="text-primary font-medium">1.</span>
                          <span className="text-gray-700"><strong>Zelfde volgorde</strong>: Altijd dezelfde stappen volgen</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-primary font-medium">2.</span>
                          <span className="text-gray-700"><strong>Vaste meetmethode</strong>: Niet steeds wisselen tussen thermometer en pols</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-primary font-medium">3.</span>
                          <span className="text-gray-700"><strong>Standby warm water</strong>: Thermoskan met 40°C water klaar hebben</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-primary font-medium">4.</span>
                          <span className="text-gray-700"><strong>Timer gebruik</strong>: Voor opwarmen en afkoelen niet vergeten</span>
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-medium text-primary mb-3">Efficiëntie tips:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Batch voorbereiding</strong>: Water voor meerdere flessen voorbereiden</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Dubbele controle</strong>: Altijd twee keer temperatuur checken</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Partner training</strong>: Beide ouders zelfde methode gebruiken</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Reserveplan</strong>: Voor als thermometer stuk is, etc.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Conclusie: Perfecte temperatuur elke keer</h2>

              <div>
                <h4 className="font-medium text-primary mb-4">Belangrijkste takeaways:</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-primary mb-2">De basis:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>37°C is ideaal</strong>: Lichaamstemperatuur voor optimaal comfort</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>35-40°C is veilig</strong>: Acceptabel bereik voor baby's</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Consistentie belangrijk</strong>: Zelfde temperatuur elke voeding</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-primary mb-2">De methoden:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Pols test</strong>: Altijd beschikbaar, gratis, betrouwbaar</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Thermometer</strong>: Nauwkeurigst, objectief</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Combinatie</strong>: Thermometer + pols controle = zekerheid</span>
                      </li>
                    </ul>
                  </div>
                </div>

 <div className="mt-6">
                  <p className="text-gray-700">
                    <strong>Onthoud</strong>: Een baby die rustig drinkt en niet reageert op de temperatuur heeft een perfecte fles gekregen. Vertrouw op je instinct en de signalen van je baby - zij vertellen je of de temperatuur goed is.
                  </p>
                </div>
              </div>

              {/* Medical Disclaimer */}
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 mt-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-amber-800 mb-1">Medische Disclaimer</h3>
                    <p className="text-sm text-amber-700">
                      De informatie op deze pagina is alleen voor informatieve doeleinden en vervangt geen professioneel medisch advies.
                      Raadpleeg altijd uw kinderarts of een gekwalificeerde zorgverlener voor specifieke medische vragen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Affiliate Product Recommendations */}
            <BolProductSection
              productNames={[
                'baby thermometer',
                'melk temperatuur tester',
                'digitale baby thermometer',
                'infrarood thermometer baby'
              ]}
              title="Temperatuur Meet Apparatuur"
              variant="card"
              maxProducts={4}
            />

            {/* Temperatuur Controleer Producten */}
            <AffiliateProductWidget
              pageId="voedingstechnieken_juiste-temperatuur-controleren"
              title="Temperatuur Controleer Producten"
            />

            {/* Call to action */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <p className="text-gray-700 mb-4">
                  De juiste temperatuur is een belangrijk onderdeel van veilige flesvoeding. Gebruik onze calculator voor gepersonaliseerd voedingsadvies.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-primary">Hulp nodig bij het berekenen van de juiste hoeveelheden?</div>
                    <div className="flex items-center justify-between"><span className="text-gray-600">Gebruik onze flesvoeding calculator voor gepersonaliseerd advies</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Gerelateerde artikelen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Fles bereiden stap voor stap</div>
                  <div className="flex items-center justify-between"><span className="text-gray-600">Complete bereidingsgids</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/veilig-verwarmen-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Veilig verwarmen flesvoeding</div>
                  <div className="flex items-center justify-between"><span className="text-gray-600">Opwarmen zonder risico</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/flesvoeding-bewaren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Flesvoeding bewaren</div>
                  <div className="flex items-center justify-between"><span className="text-gray-600">Bewaarrichtlijnen</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/juiste-houding-bij-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Juiste houding bij flesvoeding</div>
                  <div className="flex items-center justify-between"><span className="text-gray-600">Veilig en comfortabel voeden</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}