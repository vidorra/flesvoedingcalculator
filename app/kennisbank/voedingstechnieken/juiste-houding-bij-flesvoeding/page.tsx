import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { User, AlertCircle, ArrowRight } from 'lucide-react'
import BolProductSection from '../../../../components/BolProductLink'

export const metadata = {
  title: 'Juiste Houding bij Flesvoeding: Veilig en Comfortabel Voeden',
  description: 'Complete gids voor ergonomische en veilige voedingshoudingen - voor jou en je baby. Voorkom verslikking, rug- en nekklachten met de juiste techniek.',
  keywords: 'flesvoeding houding, ergonomisch voeden, veilig fles geven, voedingshouding baby, rug pijn voorkomen',
}

export default function JuisteHoudingBijFlesvoeding() {
  const sidebarImages = [
    {
      src: "/flesvoeding-door-mama.webp",
      alt: "Ergonomische voedingshouding moeder en baby",
      caption: "Comfortabel voeden"
    },
    {
      src: "/borstvoeding.webp",
      alt: "Veilige baby houding tijdens voeding",
      caption: "Veiligheid voorop"
    },
    {
      src: "/slapende-baby-2.webp",
      alt: "Ontspannen baby na juiste voedingshouding",
      caption: "Tevreden na goede voeding"
    }
  ]

  const adTopics = [
    "Voedingskussens",
    "Baby flesjes",
    "Ergonomische stoelen",
    "Baby hulpmiddelen",
    "Voeding accessoires"
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Voedingstechnieken • Juiste Houding</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <User className="w-6 h-6 mr-3 text-primary" />
                Juiste Houding bij Flesvoeding: Veilig en Comfortabel Voeden
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Complete gids voor ergonomische en veilige voedingshoudingen - voor jou en je baby
              </p>
            </div>

            {/* Inleiding */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Inleiding</h2>
              <p className="text-gray-600 leading-relaxed">
                De juiste houding bij flesvoeding is cruciaal voor de veiligheid van je baby en jouw eigen comfort. Een goede voedingshouding voorkomt verslikking, oorontstekingen, rug- en nekklachten, en bevordert de band tussen jou en je baby.
                Samen met <Link href="/kennisbank/voedingstechnieken/boertje-laten-tijdens-voeding" className="text-primary hover:underline font-medium">goed boertje laten</Link> en
                <Link href="/kennisbank/problemen-oplossen/spugen-na-de-fles" className="text-primary hover:underline font-medium"> het voorkomen van spugen</Link>,
                vormt de juiste houding de basis voor comfortabele voedingen.
              </p>
            </div>

            {/* Veilige houding voor je baby */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veilige houding voor je baby</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">De perfecte baby positie: 45 graden regel</h3>

                  <h4 className="font-medium text-gray-700 mb-2">Waarom 45 graden?</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Zwaartekracht helpt</strong>: Melk stroomt natuurlijk naar maag</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Voorkomt verslikking</strong>: Luchtpijp blijft vrij van melk</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Minder oorproblemen</strong>: Voorkomt melk in Eustachische buizen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Beter verteren</strong>: Maag kan melk goed verwerken</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Baby voelt veilig</strong>: Lijkt op natuurlijke borstvoeding houding</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Stap-voor-stap: Baby positioneren</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">1. Hoofd en nek ondersteuning</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Hoofd iets hoger dan lichaam houden</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Nek recht, niet gebogen naar achteren/voorwaarts</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Stevige ondersteuning met je hand/arm</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Zorg dat hoofd niet opzij valt</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">2. Lichaamshouding</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Baby tegen je aan, buik tegen buik</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Ruggetje recht, niet krom</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Beentjes vrij bewegend</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Armpjes niet ingeklemd</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">3. Ademruimte controleren</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Neus en mond vrij</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Geen druk op keel of borst</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Baby kan hoofd bewegen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Ademhaling hoorbaar en regelmatig</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
                  <p className="text-amber-800 text-sm">
                    <strong>Veiligheidswaarschuwing</strong>: Voer je baby NOOIT liggend. Dit verhoogt het risico op verslikking, oorontsteking en wiegendood aanzienlijk.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Verschillende baby houdingen</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Klassieke wieghouding</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Positie</strong>: Baby in arm wegholte, hoofd bij elleboog</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Voordeel</strong>: Meest natuurlijk, goed oogcontact</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Nadeel</strong>: Kan vermoeiend zijn voor langere voedingen</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Geschikt voor</strong>: Alle leeftijden, vooral jonge baby&apos;s</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Voetbal houding</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Positie</strong>: Baby onder arm, hoofd in hand</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Voordeel</strong>: Meer controle, minder druk op buik</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Nadeel</strong>: Minder intiem contact</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Geschikt voor</strong>: Na keizersnede, reflux baby&apos;s, grote borsten</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Cross-cradle houding</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Positie</strong>: Tegenovergestelde arm ondersteunt baby</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Voordeel</strong>: Meer hoofdcontrole mogelijk</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Nadeel</strong>: Iets onnatuurlijker</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Geschikt voor</strong>: Moeilijke drinkers, premature baby&apos;s</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Rechtop zitten</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Positie</strong>: Baby rechtop tegen je borst</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Voordeel</strong>: Uitstekend tegen reflux en koliek</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Nadeel</strong>: Meer inspanning nodig</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 text-sm"><strong>Geschikt voor</strong>: Baby&apos;s 3+ maanden, spugers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ergonomische houding voor jezelf */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Ergonomische houding voor jezelf</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Jouw houding: Net zo belangrijk als die van baby</h3>

                  <h4 className="font-medium text-gray-700 mb-2">Waarom ergonomie belangrijk is:</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Voorkomt rug-, nek- en schouderklachten</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Vermindert spanning tijdens voeding</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Zorgt voor betere melkstroom (bij borstvoeding)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Laat je langer comfortabel voeden</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Vermijdt chronische houding problemen</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">De perfecte zithouding</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Ruggengraat uitgelijnd</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm"><strong>Rechte rug</strong>: Ondersteund door rugleuning</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm"><strong>Ontspannen schouders</strong>: Niet opgetrokken</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm"><strong>Voeten plat</strong>: Op vloer of voetsteun</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm"><strong>Hoofd neutraal</strong>: Niet naar beneden/voorwaarts</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Armondersteuning</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm"><strong>Beide armen ondersteund</strong>: Kussens onder ellebogen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm"><strong>Niet zwevend houden</strong>: Baby&apos;s gewicht verdelen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm"><strong>Wissel van arm</strong>: Voorkom eenzijdige belasting</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm"><strong>Ontspannen grip</strong>: Niet verkrampt vasthouden</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Voedingskussens en hulpmiddelen</h3>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Voedingskussen voordelen:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm"><strong>Juiste hoogte</strong>: Baby op borst niveau</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm"><strong>Armontlasting</strong>: Minder spiervermoeidheid</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm"><strong>Stabiele basis</strong>: Baby ligt veilig</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm"><strong>Langere voedingen</strong>: Comfortabel volhouden</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Populaire Nederlandse merken:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm"><strong>Doomoo Buddy</strong>: memory foam, wasbare hoes</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm"><strong>Chicco Boppy</strong>: klassieke vorm, veelzijdig</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm"><strong>Babymoov Mum</strong>: opblaasbaar, reisvriendelijk</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm"><strong>Pregnancy Pillow</strong>: budgetoptie</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">DIY alternatieven:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Gewoon kussen onder elleboog</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Opgerolde handdoek onder baby</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Bank kussens als ondersteuning</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Dekbed opgevouwen als basis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fles houding en techniek */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Fles houding en techniek</h2>

              <div>
                <h3 className="font-medium text-primary mb-3">De fles correct vasthouden</h3>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Fles positie</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 text-sm"><strong>Schuin omhoog</strong>: 45 graden hoek of steiler</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 text-sm"><strong>Speen vol melk</strong>: Voorkomt lucht inslikken</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 text-sm"><strong>Niet te steil</strong>: Baby kan tempo niet bijhouden</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 text-sm"><strong>Controleerbaar</strong>: Jij bepaalt flow snelheid</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Speen plaatsing</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 text-sm"><strong>Aan lippen tikken</strong>: Laat baby speen zoeken</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 text-sm"><strong>Niet forceren</strong>: In mond duwen verhoogt stress</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 text-sm"><strong>Diep genoeg</strong>: Volledige speen in mond</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 text-sm"><strong>Lipjes naar buiten</strong>: Geen naar binnen zuigen</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Flow controle</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 text-sm"><strong>Baby bepaalt tempo</strong>: Niet te snel laten drinken</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 text-sm"><strong>Pauzes inlassen</strong>: Voor boeren en ademhalen</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 text-sm"><strong>Let op signalen</strong>: Hoesten, proesten, melk uit neus</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 text-sm"><strong>Aanpassen indien nodig</strong>: Andere speen of positie</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Veelgemaakte fouten voorkomen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelgemaakte fouten voorkomen</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-primary mb-3">Gevaarlijke houdingen vermijden</h3>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">NOOIT doen:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm"><strong>Baby plat leggen</strong>: Verhoogt verslikking risico</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm"><strong>Fles vastzetten</strong>: Baby kan niet aangeven bij problemen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm"><strong>Baby alleen laten</strong>: Altijd blijven bij voeding</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm"><strong>Te snel voeden</strong>: Dwingen tot snel drinken</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm"><strong>Verkeerde armhouding</strong>: Eigen nek/rug belasten</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Waarschuwingssignalen herkennen:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm"><strong>Stop direct bij</strong>: Hoesten, proesten, blauw worden</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm"><strong>Pas aan bij</strong>: Onrust, melk uit neus, gulzig drinken</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm"><strong>Zoek hulp bij</strong>: Structurele voedingsproblemen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Veelgestelde vragen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelgestelde vragen</h2>

              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-100">
                  <h3 className="font-medium text-primary mb-2">Hoe lang kan ik in dezelfde houding voeden?</h3>
                  <p className="text-gray-600 text-sm">Wissel elke 10-15 minuten van houding als voeding langer duurt. Luister naar je lichaam - pijn is signaal om te bewegen.</p>
                </div>

                <div className="pb-4 border-b border-gray-100">
                  <h3 className="font-medium text-primary mb-2">Mijn baby valt altijd in slaap tijdens voeding, wat nu?</h3>
                  <p className="text-gray-600 text-sm">Zacht tegen wangen strelen, voetjes kriebelen, of korte pauze. Sommige baby&apos;s hebben dit nodig - forceer niet.</p>
                </div>

                <div className="pb-4 border-b border-gray-100">
                  <h3 className="font-medium text-primary mb-2">Kan ik liggen tijdens nachtvoeding?</h3>
                  <p className="text-gray-600 text-sm">Alleen als je 100% wakker bent en baby veilig 45 graden ondersteund is. Risico op in slaap vallen is te groot.</p>
                </div>

                <div className="pb-4 border-b border-gray-100">
                  <h3 className="font-medium text-primary mb-2">Mijn rug doet pijn na voedingen, wat doe ik fout?</h3>
                  <p className="text-gray-600 text-sm">Waarschijnlijk rug gebogen, schouders opgetrokken, of baby te ver weg. Investeer in voedingskussen en check zithouding.</p>
                </div>

                <div className="pb-4 border-b border-gray-100">
                  <h3 className="font-medium text-primary mb-2">Baby weigert bepaalde houdingen, is dat normaal?</h3>
                  <p className="text-gray-600 text-sm">Ja, baby&apos;s hebben voorkeuren. Respecteer dit en zoek alternatieven. Comfort voor baby is belangrijker dan &apos;juiste&apos; techniek.</p>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-2">Hoe voorkom ik oorontstekingen?</h3>
                  <p className="text-gray-600 text-sm">Voer nooit liggend, houd hoofd altijd hoger dan lichaam, laat baby boeren na voeding om druk op oren te verminderen.</p>
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

            {/* Conclusie */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Conclusie: Juiste houding = betere voeding</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">De belangrijkste uitgangspunten:</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm"><strong>Veiligheid eerst</strong>: 45 graden minimum, nooit liggend voeden</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm"><strong>Comfort voor beiden</strong>: Ergonomische houding voorkomt problemen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm"><strong>Flexibiliteit</strong>: Verschillende houdingen leren voor verschillende situaties</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm"><strong>Luister naar signalen</strong>: Van baby en je eigen lichaam</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Praktische samenvatting:</h3>
                  <ul className="space-y-1 mb-4">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-600 text-sm"><strong>Baby</strong>: Hoofd hoger dan lichaam, stevige ondersteuning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-600 text-sm"><strong>Jezelf</strong>: Rechte rug, ontspannen schouders, armen ondersteund</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-600 text-sm"><strong>Fles</strong>: Schuin omhoog, speen vol melk, baby bepaalt tempo</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-600 text-sm"><strong>Omgeving</strong>: Rustig, goed verlicht, alles binnen handbereik</span>
                    </li>
                  </ul>

                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Onthoud</strong>: De perfecte houding bestaat niet - wat werkt voor jou en je baby is de juiste houding. Vertrouw op je instinct en pas aan waar nodig.
                  </p>

                  <p className="text-gray-600 text-sm">
                    <strong>Het belangrijkst</strong>: Een ontspannen ouder voedt beter dan een gespannen ouder met de &apos;perfecte&apos; techniek. Zorg goed voor jezelf, dan zorg je automatisch goed voor je baby.
                  </p>
                </div>
              </div>
            </div>

            {/* Affiliate Product Recommendations */}
            <BolProductSection
              productNames={[
                'voeding kussen baby',
                'baby ondersteuning kussen',
                'spuugdoekjes',
                'comfortabele baby stoel'
              ]}
              title="Producten voor Juiste Voedingshouding"
              variant="card"
              maxProducts={4}
            />

            {/* Voedingshouding Producten */}
            <AffiliateProductWidget
              pageId="voedingstechnieken_juiste-houding-bij-flesvoeding"
              title="Voedingshouding Producten"
            />

            {/* Call to action */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <p className="text-gray-700 mb-4">
                  De juiste houding maakt een groot verschil in hoe comfortabel en veilig je baby drinkt. Gebruik onze calculator voor gepersonaliseerd voedingsadvies.
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
                <Link href="/kennisbank/voedingstechnieken/boertje-laten-tijdens-voeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Boertje laten tijdens voeding</div>
                  <div className="flex items-center justify-between"><span className="text-gray-600">Tips voor na de fles</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/verschillende-spenen-uitproberen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Verschillende spenen uitproberen</div>
                  <div className="flex items-center justify-between"><span className="text-gray-600">De juiste speen kiezen</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/baby-weigert-de-fles" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Baby weigert de fles</div>
                  <div className="flex items-center justify-between"><span className="text-gray-600">Oorzaken en oplossingen</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                </Link>
                <Link href="/kennisbank/problemen-oplossen/spugen-na-de-fles" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Spugen na de fles</div>
                  <div className="flex items-center justify-between"><span className="text-gray-600">Wanneer is het normaal?</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
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
