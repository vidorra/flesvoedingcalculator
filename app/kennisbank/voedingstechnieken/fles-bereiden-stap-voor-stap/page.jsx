import Layout from '../../../../components/Layout'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'

export const metadata = {
  title: 'Fles Bereiden Stap voor Stap: Perfect Flesvoeding Elke Keer',
  description: 'Complete handleiding voor veilige en correcte flesbereiding - van poeder tot klare fles. Nederlandse veiligheidsnormen en stap-voor-stap instructies.',
  keywords: 'fles bereiden, flesvoeding maken, baby fles klaarmaken, veilig poeder bereiden, stap voor stap fles',
}

export default function FlesBerenStapVoorStap() {
  const sidebarImages = [
    {
      src: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=400&h=300",
      alt: "Fles bereiding stap voor stap",
      title: "Perfecte bereiding"
    },
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&h=300", 
      alt: "Veilige flesbereiding",
      title: "Veiligheid voorop"
    },
    {
      src: "https://images.unsplash.com/photo-1585435465980-8a64522d0a7e?auto=format&fit=crop&w=400&h=300",
      alt: "Flesvoeding hulpmiddelen",
      title: "Benodigde spullen"
    }
  ]

  const adTopics = [
    "Flessenwarmer",
    "Thermometers baby",
    "Sterilisatoren",
    "Baby flessen", 
    "Flesvoeding poeder"
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-gray-200">
            
            <h1 className="text-4xl font-bold text-primary mb-6">
              Fles Bereiden Stap voor Stap: Perfect Flesvoeding Elke Keer
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 italic">
              Complete handleiding voor veilige en correcte flesbereiding - van poeder tot klare fles
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed">
                Het correct bereiden van een fles is een vaardigheid die elke ouder onder de knie moet hebben. Een goed bereide fles zorgt niet alleen voor optimale voeding, maar voorkomt ook gezondheidsrisico's zoals bacteriële infecties en voedingsproblemen. Deze uitgebreide stap-voor-stap gids laat zien hoe je elke keer perfect flesvoeding bereidt, volgens Nederlandse veiligheidsnormen.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Voorbereiding: De basis van veilige flesbereiding</h2>
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Hygiëne: Het fundament</h3>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">Handen wassen - Stap 1 🖐️</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Minimaal 20 seconden</strong>: Tel langzaam tot 20</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Met zeep</strong>: Antibacteriële zeep is niet nodig, gewone zeep volstaat</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Warm water</strong>: Helpt bij het verwijderen van bacteriën</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Goed afdrogen</strong>: Met schone handdoek of luchtdrogen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Nagels kort</strong>: Lange nagels kunnen bacteriën vasthouden</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">Werkoppervlak voorbereiden 🧽</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Schoon en droog</strong>: Afnemen met desinfecterende doekjes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Geen kruisbesmetting</strong>: Weg van rauwe voeding/afwas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Goede verlichting</strong>: Voor nauwkeurig afmeten</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Alles binnen handbereik</strong>: Poeder, water, fles, thermometer</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">Benodigdheden checken </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Fles en speen</strong>: Schoon en gesteriliseerd (tot 6 maanden)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Maatbeker</strong>: Voor nauwkeurig water afmeten</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Maatschep</strong>: Bijgeleverde schep van poederblik</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Mes of lepel</strong>: Voor afstrijken schep</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Thermometer</strong>: Voor temperatuur controleren</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Schone theedoek</strong>: Voor afvegen en afdrogen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Water: De basis van goede flesvoeding</h3>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-primary mb-3">Nederlands kraanwater: Uitstekend geschikt </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Hoge kwaliteit</strong>: Streng gecontroleerd door waterbedrijven</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Optimale samenstelling</strong>: Juiste mineralenbalans voor baby's</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Geen flessenwater nodig</strong>: Tenzij medisch geadviseerd</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Goedkoop</strong>: Geen extra kosten voor speciaal water</span>
                    </li>
                  </ul>
                </div>

                <h4 className="text-xl font-semibold text-primary mb-4">Water voorbereiding per leeftijd:</h4>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h5 className="font-semibold text-primary mb-3">0-3 maanden: Koken verplicht 🔥</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Vers water</strong>: Altijd verse kraan water gebruiken</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Volledig koken</strong>: Minimaal 1 minuut hard koken</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Afkoelen</strong>: Tot 40-50°C voor poeder toevoegen</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Niet te lang bewaren</strong>: Gekookt water binnen 24 uur gebruiken</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h5 className="font-semibold text-primary mb-3">3-6 maanden: Koken aanbevolen ♨️</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Nog steeds koken</strong>: Voor extra veiligheid</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Alternatief</strong>: Direct kraanwater als immuunsysteem sterk</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Individueel</strong>: Overleg met consultatiebureau</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Bij twijfel</strong>: Altijd koken is veiliger</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h5 className="font-semibold text-primary mb-3">6+ maanden: Kraanwater direct mogelijk 🚿</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Immuunsysteem sterker</strong>: Kan normale bacteriën aan</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Temperatuur aanpassen</strong>: Lauw kraanwater (25-30°C)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Nog steeds koken mogelijk</strong>: Als je dat prettiger vindt</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700"><strong>Tijdens ziekte</strong>: Terug naar koken voor extra veiligheid</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-6">
                  <p className="text-gray-700">
                    <strong>Belangrijke uitzondering</strong>: Gebruik nooit water uit de warmwater boiler - dit kan bacteriën bevatten zoals Legionella.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Stap-voor-stap: De perfecte fles bereiden</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Stap 1: Water afmeten en temperatuur</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-primary mb-3">Juiste hoeveelheid bepalen 🧮</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Gebruik calculator</strong>: <a href="/" className="text-primary hover:underline">Flesvoeding Calculator</a> voor persoonlijke berekening</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Standaard formule</strong>: 150ml per kg lichaamsgewicht per dag</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Verdeel over voedingen</strong>: Aantal voedingen per dag</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Rond af naar boven</strong>: Altijd iets meer dan te weinig</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-primary mb-3">Water temperatuur checken 🌡️</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Ideale temperatuur</strong>: 40-50°C voor poeder oplossen</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Te heet</strong>: Vernietigt voedingsstoffen, brandgevaar</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Te koud</strong>: Poeder lost niet goed op, klonterig</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Controleren</strong>: Thermometer of druppel op pols</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Stap 2: Poeder toevoegen - De kritieke fase</h3>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-primary mb-3">Poeder afmeten - Nauwkeurigheid is cruciaal ⚖️</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-primary mb-2">Perfect afmeten techniek</h5>
                        <ol className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <span className="text-primary font-semibold">1.</span>
                            <span className="text-gray-700"><strong>Schep vol maken</strong>: Ruim vullen met poeder</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-primary font-semibold">2.</span>
                            <span className="text-gray-700"><strong>Afstrijken</strong>: Met mes of lepel afstrijken (niet aandrukken!)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-primary font-semibold">3.</span>
                            <span className="text-gray-700"><strong>Niet aankloppen</strong>: Dit comprimeert poeder = verkeerde dosering</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-primary font-semibold">4.</span>
                            <span className="text-gray-700"><strong>Niveau controle</strong>: Schep moet precies vol zijn, niet bol of hol</span>
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h5 className="font-semibold text-primary mb-2">Dosering volgens instructies</h5>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700"><strong>Standaard</strong>: 1 afgestreken schep per 30ml water</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700"><strong>Nooit extra</strong>: "Voor de zekerheid" is gevaarlijk</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700"><strong>Nooit minder</strong>: Baby krijgt te weinig voeding</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700"><strong>Bij twijfel</strong>: Opnieuw beginnen</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-primary mb-3">Poeder toevoegen aan water 🥛</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Water eerst</strong>: Poeder altijd na water toevoegen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Niet andersom</strong>: Poeder eerst geeft verkeerde concentratie</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Voorzichtig</strong>: Poeder zacht in water strooien</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700"><strong>Niet morsen</strong>: Verlies van poeder = verkeerde dosering</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Stap 3: Mengen tot perfecte oplossing</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-primary mb-3">Fles sluiten en schudden 🤝</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Speen en dop</strong>: Goed vastschroeven maar niet te strak</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Lektest</strong>: Korte schok om lekken te checken</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Schudden</strong>: Krachtig maar gecontroleerd</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Richting</strong>: Op en neer, niet rond (maakt teveel schuim)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-primary mb-3">Oplossen controle checklist </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Geen klontjes</strong>: Vloeistof moet volledig glad zijn</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Uniforme kleur</strong>: Geen lichte/donkere plekken</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Geen bezinksel</strong>: Niets op de bodem</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>Goede flow</strong>: Melk stroomt normaal uit speen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Stap 4: Temperatuur finale controle</h3>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-primary mb-3">Eindtemperatuur: 37°C (lichaamstemperatuur) 🌡️</h4>
                    
                    <h5 className="font-semibold text-primary mb-2">Controlmethoden rangschikking:</h5>
                    <ol className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-semibold">1.</span>
                        <span className="text-gray-700"><strong>Thermometer</strong>: Meest betrouwbaar (36-38°C)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-semibold">2.</span>
                        <span className="text-gray-700"><strong>Pols test</strong>: Druppel op pols, moet lauw aanvoelen</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-semibold">3.</span>
                        <span className="text-gray-700"><strong>Temperatuurstrip</strong>: Op fles plakken, visuele controle</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-semibold">4.</span>
                        <span className="text-gray-700"><strong>Baby's reactie</strong>: Drinkt rustig = goede temperatuur</span>
                      </li>
                    </ol>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                      <h4 className="font-semibold text-primary mb-3">Te heet - wat doen? 🔥</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Afkoelen</strong>: Koud water bad rondom fles</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Geduld hebben</strong>: Niet haasten met ijsblokjes</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Regelmatig testen</strong>: Elke 30 seconden controleren</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Veiligheid</strong>: Liever 5 minuten wachten dan brandwonden</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                      <h4 className="font-semibold text-primary mb-3">Te koud - snel opwarmen </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Warm water bad</strong>: Fles in kom warm water</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Flessenwarmer</strong>: Als je die hebt</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Onder warme kraan</strong>: Draaiend bewegen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-gray-600"></span>
                          <span className="text-gray-700"><strong>NOOIT magnetron</strong>: Creëert gevaarlijke hot spots</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Veiligheid en gezondheidsrisico's</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Veelvoorkomende fouten voorkomen</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                      <h4 className="font-semibold text-primary mb-3">Dosering fouten - Ernstige gevolgen </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Te veel poeder</strong>: Dehydratie, nierbelasting, obstipatie</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Te weinig poeder</strong>: Ondervoeding, groeiachterstand</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Geschatte hoeveelheden</strong>: Altijd nauwkeurig meten</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Verkeerde schep</strong>: Alleen bijgeleverde schep gebruiken</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                      <h4 className="font-semibold text-primary mb-3">Temperatuur gevaren 🌡️</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Brandwonden</strong>: Hete melk beschadigt mond en keel</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Ongelijkmatige verhitting</strong>: Magnetron creëert hot spots</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Te koude melk</strong>: Slechte opname voedingsstoffen</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700"><strong>Bacteriële groei</strong>: Lauw water ideaal voor bacteriën</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Troubleshooting: Problemen oplossen</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Poeder lost niet op 🌊</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Oorzaak</strong>: Water te koud, te weinig schudden, oud poeder</p>
                      <p className="text-gray-700"><strong>Oplossing</strong>: Warmer water (max 50°C), langer schudden</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Preventie</strong>: Vers poeder, juiste water temperatuur</p>
                      <p className="text-gray-700"><strong>Laatste redmiddel</strong>: Nieuwe fles beginnen</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Melk is klonterig 🥛</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Oorzaak</strong>: Poeder eerst toegevoegd, verkeerde mengtechniek</p>
                      <p className="text-gray-700"><strong>Oplossing</strong>: Door fijn zeefje gieten, opnieuw maken</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Voorkomen</strong>: Altijd water eerst, dan poeder</p>
                      <p className="text-gray-700"><strong>Veiligheid</strong>: Bij twijfel nieuwe fles maken</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Verkeerde concentratie ⚖️</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Te dik</strong>: Baby krijgt dorst, kan obstipatie veroorzaken</p>
                      <p className="text-gray-700"><strong>Te dun</strong>: Ondervoeding, hongerig blijven</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Herkennen</strong>: Baby's drinkgedrag verandert</p>
                      <p className="text-gray-700"><strong>Actie</strong>: Nieuwe fles maken met correcte dosering</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
                <h4 className="font-semibold text-primary mb-3">Maak nieuwe fles bij:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Twijfel over dosering of hygiëne</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Klontjes die niet opgaan</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Verkeerde temperatuur die niet corrigeert</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Fles langer dan 10 minuten onderbroken</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Baby weigert na het proeven</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Veelgestelde vragen flesbereiding</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Mag ik flesvoeding op voorraad maken?</h4>
                  <p className="text-gray-700">Niet aanbevolen. Elke fles bij voorkeur vers bereiden. Voor noodsituaties kun je maximaal 1 fles in de koelkast bewaren voor maximaal 24 uur.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Kan ik gekookt water laten afkoelen voor later?</h4>
                  <p className="text-gray-700">Ja, gekookt afgekoeld water kan 24 uur bewaard worden in een schone, afgesloten fles of thermoskan.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Wat als baby niet alles opdrinkt?</h4>
                  <p className="text-gray-700">Restjes altijd weggooien na de voeding. Speeksel in de fles zorgt voor bacteriegroei, dus bewaren is gevaarlijk.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Mag ik de magnetron gebruiken?</h4>
                  <p className="text-gray-700">Nee, nooit. Magnetrons verwarmen ongelijkmatig en creëren gevaarlijke hot spots die je baby kunnen verbranden, zelfs als de fles van buiten koel aanvoelt.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Hoe weet ik of de dosering klopt?</h4>
                  <p className="text-gray-700">Volg altijd de instructies op de verpakking. Standaard is 1 afgestreken schep per 30ml water. Gebruik alleen de bijgeleverde schep.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Conclusie: Routine ontwikkelen voor perfecte bereiding</h2>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-primary mb-3">Het leerproces:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Week 1-2: Volg elke stap nauwkeurig, duurt 8-10 minuten</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Week 3-4: Routine ontwikkelt zich, 5-6 minuten</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Maand 2+: Automatische procedure, 3-4 minuten</span>
                  </li>
                </ul>

                <h4 className="font-semibold text-primary mb-3">Belangrijkste succesfactoren:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-semibold">1.</span>
                    <span className="text-gray-700"><strong>Hygiëne altijd</strong>: Schone handen, schone spullen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-semibold">2.</span>
                    <span className="text-gray-700"><strong>Nauwkeurigheid</strong>: Exacte dosering en temperatuur</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-semibold">3.</span>
                    <span className="text-gray-700"><strong>Veiligheid eerst</strong>: Bij twijfel opnieuw beginnen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-semibold">4.</span>
                    <span className="text-gray-700"><strong>Routine ontwikkelen</strong>: Zelfde volgorde, minder fouten</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-semibold">5.</span>
                    <span className="text-gray-700"><strong>Flexibel blijven</strong>: Verschillende situaties, zelfde principes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>Onthoudt</strong>: Een perfect bereide fles is liefde in actie. Je geeft je baby niet alleen voeding, maar ook veiligheid en zorg. Elke keer dat je zorgvuldig een fles bereidt, investeer je in de gezondheid en het welzijn van je kindje.
                </p>
                
                <h4 className="font-semibold text-primary mb-3">Handige hulpmiddelen:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><a href="/" className="text-primary hover:underline">Flesvoeding Calculator</a> - Bereken exacte hoeveelheden voor jouw baby</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Poederdoseerdozen - Voor onderweg en nachtvoedingen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Thermometer - Voor veilige temperatuurcontrole</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Timer app - Voor bijhouden voedingstijden en bewaartermijnen</span>
                  </li>
                </ul>

                <p className="text-gray-700 mt-4">
                  Met de juiste techniek, goede voorbereiding en wat oefening wordt flesbereiding een natuurlijk onderdeel van je dagelijkse routine. Vertrouw op jezelf - je doet het geweldig! 💚
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