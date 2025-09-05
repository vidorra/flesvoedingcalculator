import Layout from '../../../../components/Layout'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'

export const metadata = {
  title: 'Juiste Houding bij Flesvoeding: Veilig en Comfortabel Voeden',
  description: 'Complete gids voor ergonomische en veilige voedingshoudingen - voor jou en je baby. Voorkom verslikking, rug- en nekklachten met de juiste techniek.',
  keywords: 'flesvoeding houding, ergonomisch voeden, veilig fles geven, voedingshouding baby, rug pijn voorkomen',
}

export default function JuisteHoudingBijFlesvoeding() {
  const sidebarImages = [
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&h=300",
      alt: "Ergonomische voedingshouding",
      title: "Comfortabel voeden"
    },
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&h=300", 
      alt: "Veilige baby houding",
      title: "Veiligheid voorop"
    },
    {
      src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=400&h=300",
      alt: "Voedingskussens hulpmiddelen",
      title: "Handige hulpmiddelen"
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
            
            <h1 className="text-4xl font-bold text-primary mb-6">
              Juiste Houding bij Flesvoeding: Veilig en Comfortabel Voeden
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 italic">
              Complete gids voor ergonomische en veilige voedingshoudingen - voor jou en je baby
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed">
                De juiste houding bij flesvoeding is cruciaal voor de veiligheid van je baby en jouw eigen comfort. Een goede voedingshouding voorkomt verslikking, oorontstekingen, rug- en nekklachten, en bevordert de band tussen jou en je baby. Deze uitgebreide gids legt uit hoe je ergonomisch en veilig voedt, welke houdingen het beste werken, en hoe je veelvoorkomende problemen voorkomt.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Veilige houding voor je baby</h2>
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">De perfecte baby positie: 45 graden regel</h3>
                
                <h4 className="text-xl font-semibold text-primary mb-3">Waarom 45 graden?</h4>
                <ul className="space-y-2 mb-6">
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
                    <span className="text-gray-700"><strong>Baby voelt veilig</strong>: Gelijkt op natuurlijke borstvoeding houding</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Stap-voor-stap: Baby positioneren</h3>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">1. Hoofd en nek ondersteuning</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Hoofd iets hoger dan lichaam houden</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Nek recht, niet gebogen naar achteren/voorwaarts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Stevige ondersteuning met je hand/arm</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Zorg dat hoofd niet opzij valt</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">2. Lichaamshouding</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Baby tegen je aan, buik tegen buik</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Ruggetje recht, niet krom</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Beentjes vrij bewegend</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Armpjes niet ingeklemd</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">3. Ademruimte controleren</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Neus en mond vrij</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Geen druk op keel of borst</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Baby kan hoofd bewegen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Ademhaling hoorbaar en regelmatig</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-gray-700">
                  <strong>Veiligheidswaarschuwing</strong>: Voer je baby NOOIT liggend. Dit verhoogt het risico op verslikking, oorontsteking en wiegendood aanzienlijk.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Verschillende baby houdingen</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">Klassieke wieghouding 👑</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Positie</strong>: Baby in arm wegholte, hoofd bij elleboog</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Voordeel</strong>: Meest natuurlijk, goed oogcontact</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Nadeel</strong>: Kan vermoeiend zijn voor langere voedingen</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Geschikt voor</strong>: Alle leeftijden, vooral jonge baby's</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">Voetbal houding 🏈</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Positie</strong>: Baby onder arm, hoofd in hand</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Voordeel</strong>: Meer controle, minder druk op buik</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Nadeel</strong>: Minder intiem contact</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Geschikt voor</strong>: Na keizersnede, reflux baby's, grote borsten</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">Cross-cradle houding ↔️</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Positie</strong>: Tegenovergestelde arm ondersteunt baby</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Voordeel</strong>: Meer hoofdcontrole mogelijk</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Nadeel</strong>: Iets onnatuurlijker</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Geschikt voor</strong>: Moeilijke drinkers, premature baby's</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">Rechtop zitten 🪑</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Positie</strong>: Baby rechtop tegen je borst</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Voordeel</strong>: Uitstekend tegen reflux en koliek</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Nadeel</strong>: Meer inspanning nodig</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Geschikt voor</strong>: Baby's 3+ maanden, spugers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">🧘‍♀️ Ergonomische houding voor jezelf</h2>
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Jouw houding: Net zo belangrijk als die van baby</h3>
                
                <h4 className="text-xl font-semibold text-primary mb-3">Waarom ergonomie belangrijk is:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Voorkomt rug-, nek- en schouderklachten</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Vermindert spanning tijdens voeding</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Zorgt voor betere melkstroom (bij borstvoeding)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Laat je langer comfortabel voeden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Vermijdt chronische houding problemen</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">De perfecte zithouding</h3>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">Ruggengraat uitgelijnd 🏗️</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Rechte rug</strong>: Ondersteund door rugleuning</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Ontspannen schouders</strong>: Niet opgetrokken</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Voeten plat</strong>: Op vloer of voetsteun</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Hoofd neutraal</strong>: Niet naar beneden/voorwaarts</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">Armondersteuning </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Beide armen ondersteund</strong>: Kussens onder ellebogen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Niet zwevend houden</strong>: Baby's gewicht verdelen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Wissel van arm</strong>: Voorkom eenzijdige belasting</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Ontspannen grip</strong>: Niet verkrampt vasthouden</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Voedingskussens en hulpmiddelen</h3>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-primary mb-3">Voedingskussen voordelen:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="text-gray-600"></span>
                      <span className="text-gray-700"><strong>Juiste hoogte</strong>: Baby op borst niveau</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-gray-600"></span>
                      <span className="text-gray-700"><strong>Armontlasting</strong>: Minder spiervermoeidheid</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-gray-600"></span>
                      <span className="text-gray-700"><strong>Stabiele basis</strong>: Baby ligt veilig</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-gray-600"></span>
                      <span className="text-gray-700"><strong>Langere voedingen</strong>: Comfortabel volhouden</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Populaire Nederlandse merken:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Doomoo Buddy</strong>: €35-45, memory foam, wasbare hoes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Chicco Boppy</strong>: €25-35, klassieke vorm, veelzijdig</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Babymoov Mum</strong>: €20-30, opblaasbaar, reisvriendelijk</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Pregnancy Pillow</strong>: €15-25, budgetoptie</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">DIY alternatieven:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Gewoon kussen onder elleboog</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Opgerolde handdoek onder baby</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Bank kussens als ondersteuning</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Dekbed opgevouwen als basis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Fles houding en techniek</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">De fles correct vasthouden</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-primary mb-3">Fles positie 📐</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Schuin omhoog</strong>: 45 graden hoek of steiler</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Speen vol melk</strong>: Voorkomt lucht inslikken</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Niet te steil</strong>: Baby kan tempo niet bijhouden</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Controleerbaar</strong>: Jij bepaalt flow snelheid</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-primary mb-3">Speen plaatsing 👄</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Aan lippen tikken</strong>: Laat baby speen zoeken</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Niet forceren</strong>: In mond duwen verhoogt stress</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Diep genoeg</strong>: Volledige speen in mond</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Lipjes naar buiten</strong>: Geen naar binnen zuigen</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-primary mb-3">Flow controle </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Baby bepaalt tempo</strong>: Niet te snel laten drinken</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Pauzes inlassen</strong>: Voor boeren en ademhalen</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Let op signalen</strong>: Hoesten, proesten, melk uit neus</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Aanpassen indien nodig</strong>: Andere speen of positie</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Veelgemaakte fouten voorkomen</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Gevaarlijke houdingen vermijden</h3>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-primary mb-3">NOOIT doen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <span className="text-gray-600"></span>
                        <span className="text-gray-700"><strong>Baby plat leggen</strong>: Verhoogt verslikking risico</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-gray-600"></span>
                        <span className="text-gray-700"><strong>Fles vastzetten</strong>: Baby kan niet aangeven bij problemen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-gray-600"></span>
                        <span className="text-gray-700"><strong>Baby alleen laten</strong>: Altijd blijven bij voeding</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-gray-600"></span>
                        <span className="text-gray-700"><strong>Te snel voeden</strong>: Dwingen tot snel drinken</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-gray-600"></span>
                        <span className="text-gray-700"><strong>Verkeerde armhouding</strong>: Eigen nek/rug belasten</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-primary mb-3">Waarschuwingssignalen herkennen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <span className="text-gray-600">🚨</span>
                        <span className="text-gray-700"><strong>Stop direct bij</strong>: Hoesten, proesten, blauw worden</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-gray-600">🚨</span>
                        <span className="text-gray-700"><strong>Pas aan bij</strong>: Onrust, melk uit neus, gulzig drinken</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-gray-600">🚨</span>
                        <span className="text-gray-700"><strong>Zoek hulp bij</strong>: Structurele voedingsproblemen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Veelgestelde vragen</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Hoe lang kan ik in dezelfde houding voeden?</h4>
                  <p className="text-gray-700">Wissel elke 10-15 minuten van houding als voeding langer duurt. Luister naar je lichaam - pijn is signaal om te bewegen.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Mijn baby valt altijd in slaap tijdens voeding, wat nu?</h4>
                  <p className="text-gray-700">Zacht tegen wangen strelen, voetjes kriebelen, of korte pauze. Sommige baby's hebben dit nodig - forceer niet.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Kan ik liggen tijdens nachtvoeding?</h4>
                  <p className="text-gray-700">Alleen als je 100% wakker bent en baby veilig 45 graden ondersteund is. Risico op in slaap vallen is te groot.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Mijn rug doet pijn na voedingen, wat doe ik fout?</h4>
                  <p className="text-gray-700">Waarschijnlijk rug gebogen, schouders opgetrokken, of baby te ver weg. Investeer in voedingskussen en check zithouding.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Baby weigert bepaalde houdingen, is dat normaal?</h4>
                  <p className="text-gray-700">Ja, baby's hebben voorkeuren. Respecteer dit en zoek alternatieven. Comfort voor baby is belangrijker dan 'juiste' techniek.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Hoe voorkom ik oorontstekingen?</h4>
                  <p className="text-gray-700">Voer nooit liggend, houd hoofd altijd hoger dan lichaam, laat baby boeren na voeding om druk op oren te verminderen.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Conclusie: Juiste houding = betere voeding</h2>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-primary mb-3">De belangrijkste uitgangspunten:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Veiligheid eerst</strong>: 45 graden minimum, nooit liggend voeden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Comfort voor beiden</strong>: Ergonomische houding voorkomt problemen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Flexibiliteit</strong>: Verschillende houdingen leren voor verschillende situaties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Luister naar signalen</strong>: Van baby en je eigen lichaam</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-primary mb-3">Praktische samenvatting:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700"><strong>Baby</strong>: Hoofd hoger dan lichaam, stevige ondersteuning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700"><strong>Jezelf</strong>: Rechte rug, ontspannen schouders, armen ondersteund</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700"><strong>Fles</strong>: Schuin omhoog, speen vol melk, baby bepaalt tempo</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700"><strong>Omgeving</strong>: Rustig, goed verlicht, alles binnen handbereik</span>
                  </li>
                </ul>

                <p className="text-gray-700 mb-4">
                  <strong>Onthoud</strong>: De perfecte houding bestaat niet - wat werkt voor jou en je baby is de juiste houding. Vertrouw op je instinct en pas aan waar nodig.
                </p>

                <p className="text-gray-700">
                  <strong>Het belangrijkst</strong>: Een ontspannen ouder voedt beter dan een gespannen ouder met de 'perfecte' techniek. Zorg goed voor jezelf, dan zorg je automatisch goed voor je baby.
                </p>
              </div>
            </section>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-gray-700">
                <strong>Hulpmiddelen:</strong> <a href="/" className="text-primary hover:underline">Flesvoeding Calculator</a> - Bereken optimale hoeveelheden | Consultatiebureau - Advies bij voedingsproblemen | Kraamverzorgster - Praktische begeleiding eerste weken
              </p>
            </div>
          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}