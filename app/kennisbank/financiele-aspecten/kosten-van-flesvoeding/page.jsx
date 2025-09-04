import Layout from '../../../../components/Layout'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'

export const metadata = {
  title: 'Kosten van Flesvoeding: Complete Budgetgids Nederland 2025',
  description: 'Alle kosten op een rij + tips om geld te besparen zonder kwaliteit in te leveren. Van €575 tot €1580 per jaar - ontdek wat past bij jouw budget.',
  keywords: 'kosten flesvoeding, prijzen babyvoeding, budget baby, flesvoeding besparen, goedkope flesvoeding Nederland',
}

export default function KostenVanFlesvoeding() {
  const sidebarImages = [
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&h=300",
      alt: "Baby budget planning",
      title: "Smart budgetteren"
    },
    {
      src: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=400&h=300", 
      alt: "Flesvoeding merken vergelijken",
      title: "Prijzen vergelijken"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&h=300",
      alt: "Geld besparen op baby spullen",
      title: "Slim besparen"
    }
  ]

  const adTopics = [
    "Babyflesjes",
    "Flesvoeding",
    "Baby budget",
    "Sterilisatoren", 
    "Babyvoeding spullen"
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6 min-h-screen">
        <div className="col-span-12 lg:col-span-7">
          <div className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-gray-200">
            
            <h1 className="text-4xl font-bold text-primary mb-6">
              Kosten van Flesvoeding: Complete Budgetgids Nederland 2025
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 italic">
              Alle kosten op een rij + tips om geld te besparen zonder kwaliteit in te leveren
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed">
                Hoeveel kost flesvoeding nou eigenlijk? Deze vraag houdt veel aanstaande ouders bezig. Deze complete budgetgids geeft je alle Nederlandse prijzen van 2025, van goedkoopste tot duurste opties. Plus: praktische bespaartips die kunnen opleveren tot €300 per jaar, zonder in te leveren op kwaliteit of veiligheid.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Totaal overzicht kosten eerste jaar</h2>
              
              <h3 className="text-xl font-semibold text-primary mb-4">Complete kosten flesvoeding (0-12 maanden)</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Categorie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Budget optie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Gemiddeld</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Flesvoeding poeder</td>
                      <td className="border border-gray-300 px-4 py-2">€480-600</td>
                      <td className="border border-gray-300 px-4 py-2">€650-800</td>
                      <td className="border border-gray-300 px-4 py-2">€850-1000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Flessen & spenen</td>
                      <td className="border border-gray-300 px-4 py-2">€40-60</td>
                      <td className="border border-gray-300 px-4 py-2">€80-120</td>
                      <td className="border border-gray-300 px-4 py-2">€150-200</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Sterilisator</td>
                      <td className="border border-gray-300 px-4 py-2">€25-40</td>
                      <td className="border border-gray-300 px-4 py-2">€60-100</td>
                      <td className="border border-gray-300 px-4 py-2">€120-180</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Accessoires</td>
                      <td className="border border-gray-300 px-4 py-2">€30-50</td>
                      <td className="border border-gray-300 px-4 py-2">€70-100</td>
                      <td className="border border-gray-300 px-4 py-2">€150-200</td>
                    </tr>
                    <tr className="bg-primary/10">
                      <td className="border border-gray-300 px-4 py-2 font-bold">TOTAAL JAAR 1</td>
                      <td className="border border-gray-300 px-4 py-2 font-bold">€575-750</td>
                      <td className="border border-gray-300 px-4 py-2 font-bold">€860-1120</td>
                      <td className="border border-gray-300 px-4 py-2 font-bold">€1270-1580</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg font-semibold text-primary mb-4">
                <strong>Gemiddelde maandkosten:</strong> €50-130 afhankelijk van keuzes
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Vergelijking</strong>: Borstvoeding kost €40-80 per maand (extra voeding moeder + hulpmiddelen)
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Flesvoeding poeder: Prijsoverzicht per merk</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Budget vriendelijke merken (€12-18 per 900g blik)</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Kruidvat Baby Melkpoeder</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Startvoeding: €12.99/900g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Opvolgmelk: €12.49/900g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Maandkosten</strong>: €45-55</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Jaar 1 totaal</strong>: €480-580</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">AH Basic Babyvoeding</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Startvoeding: €13.49/900g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Opvolgmelk: €12.99/900g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Maandkosten</strong>: €48-58</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Jaar 1 totaal</strong>: €520-620</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Jumbo Baby</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Startvoeding: €14.99/900g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Opvolgmelk: €14.49/900g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Maandkosten</strong>: €52-62</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Jaar 1 totaal</strong>: €560-660</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Mainstream merken (€18-25 per 800g blik)</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Nutrilon (Nederlandse marktleider)</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Profutura 1: €21.99/800g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Profutura 2: €20.99/800g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Maandkosten</strong>: €65-75</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Jaar 1 totaal</strong>: €720-820</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Hero Baby Nutradefense</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Startvoeding: €19.99/800g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Opvolgmelk: €18.99/800g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Maandkosten</strong>: €58-68</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Jaar 1 totaal</strong>: €640-740</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Aptamil Pronutra</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Startvoeding: €22.99/800g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Opvolgmelk: €21.99/800g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Maandkosten</strong>: €68-78</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Jaar 1 totaal</strong>: €750-850</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Premium/Biologisch (€25-35 per 600-800g blik)</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">HIPP Biologisch</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Bio Combiotik 1: €28.99/600g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Bio Combiotik 2: €27.99/600g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Maandkosten</strong>: €85-100</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Jaar 1 totaal</strong>: €950-1100</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Holle Biologisch</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Startvoeding: €31.99/600g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Opvolgmelk: €30.99/600g</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Maandkosten</strong>: €95-115</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700"><strong>Jaar 1 totaal</strong>: €1050-1250</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Flessen en spenen: Wat heb je nodig?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Minimum benodigdheden</h3>
                  <p className="text-gray-700 mb-4"><strong>4-6 flessen</strong>: Voor pasgeborenen voldoende</p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Budget opties</strong>: €3-5 per fles (Kruidvat, Action)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Mainstream</strong>: €8-12 per fles (MAM, Avent, Dr Brown's)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>Premium</strong>: €15-20 per fles (Tommee Tippee Advanced)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Aanbevolen hoeveelheden per leeftijd</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>0-3 maanden</strong>: 6-8 flessen (150ml)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>3-6 maanden</strong>: 6-8 flessen (250ml)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700"><strong>6+ maanden</strong>: 4-6 flessen + drinkbekers</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Kosten overzicht flessen</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-2 text-left">Merk</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Starterset</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Per fles</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Speen</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Kruidvat</td>
                          <td className="border border-gray-300 px-4 py-2">€25 (6 flessen)</td>
                          <td className="border border-gray-300 px-4 py-2">€4</td>
                          <td className="border border-gray-300 px-4 py-2">€1.50</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2">MAM</td>
                          <td className="border border-gray-300 px-4 py-2">€60 (4 flessen)</td>
                          <td className="border border-gray-300 px-4 py-2">€12</td>
                          <td className="border border-gray-300 px-4 py-2">€2.50</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Philips Avent</td>
                          <td className="border border-gray-300 px-4 py-2">€70 (4 flessen)</td>
                          <td className="border border-gray-300 px-4 py-2">€15</td>
                          <td className="border border-gray-300 px-4 py-2">€3.00</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2">Dr Brown's</td>
                          <td className="border border-gray-300 px-4 py-2">€80 (4 flessen)</td>
                          <td className="border border-gray-300 px-4 py-2">€18</td>
                          <td className="border border-gray-300 px-4 py-2">€3.50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">25 Bespaartips zonder kwaliteitsverlies</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Inkooptips (besparing: €150-200/jaar)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Bulk inkopen</strong>: 3+ blikken tegelijk voor korting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Aanbiedingen volgen</strong>: Apps zoals Prospectus gebruiken</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Huismerk kiezen</strong>: 40% goedkoper dan A-merken</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Online vergelijken</strong>: Bol.com vaak goedkoper dan fysieke winkel</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Lidmaatschappen</strong>: Kruidvat/Etos voordeel cards</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Slim gebruik (besparing: €50-100/jaar)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Juiste hoeveelheden</strong>: Calculator gebruiken tegen verspilling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Restjes bewaren</strong>: Maximaal 2 uur bij kamertemperatuur</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Niet teveel maken</strong>: Start met minimale hoeveelheid</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Temperatuur checken</strong>: Voorkomen weggooien te hete melk</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Schema bijhouden</strong>: Voorkomt overvoeding</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Equipment besparing (besparing: €100-150 eenmalig)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Tweedehands flessen</strong>: Goed reinigen, nieuwe spenen</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Basis sterilisator</strong>: Magnetron versie ipv elektrisch</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Geen flessenwarmer</strong>: Warm water bad werkt ook</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Simpele flessen</strong>: Fancy designs zijn niet nodig</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700"><strong>Minder flessen</strong>: 4-6 stuks is voldoende</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">🛒 Waar het goedkoopst winkelen?</h2>
              
              <h3 className="text-xl font-semibold text-primary mb-4">Prijs vergelijking Nederlandse retailers</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Winkel</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Prijs/blik</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Voordeel</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Nadeel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Action</td>
                      <td className="border border-gray-300 px-4 py-2">€11-14</td>
                      <td className="border border-gray-300 px-4 py-2">Goedkoopst</td>
                      <td className="border border-gray-300 px-4 py-2">Beperkt assortiment</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Kruidvat</td>
                      <td className="border border-gray-300 px-4 py-2">€12-16</td>
                      <td className="border border-gray-300 px-4 py-2">Eigen merk + acties</td>
                      <td className="border border-gray-300 px-4 py-2">Kwaliteit variabel</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Albert Heijn</td>
                      <td className="border border-gray-300 px-4 py-2">€18-24</td>
                      <td className="border border-gray-300 px-4 py-2">Groot assortiment</td>
                      <td className="border border-gray-300 px-4 py-2">Duurder</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Jumbo</td>
                      <td className="border border-gray-300 px-4 py-2">€16-22</td>
                      <td className="border border-gray-300 px-4 py-2">Goede acties</td>
                      <td className="border border-gray-300 px-4 py-2">Wisselende voorraad</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Bol.com</td>
                      <td className="border border-gray-300 px-4 py-2">€15-20</td>
                      <td className="border border-gray-300 px-4 py-2">Groot assortiment</td>
                      <td className="border border-gray-300 px-4 py-2">Verzendkosten</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Drogisterij.net</td>
                      <td className="border border-gray-300 px-4 py-2">€14-19</td>
                      <td className="border border-gray-300 px-4 py-2">Online voordeel</td>
                      <td className="border border-gray-300 px-4 py-2">Geen fysieke winkel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Veelgestelde vragen over kosten</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Wat als ik per ongeluk te dure flesvoeding heb gekocht?</h4>
                  <p className="text-gray-700">Alle Nederlandse flesvoeding voldoet aan dezelfde voedingsnormen. Je betaalt vooral voor merk, marketing en extra toegevoegde ingrediënten zoals prebiotica.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Kan ik geld terugkrijgen van de zorgverzekering?</h4>
                  <p className="text-gray-700">Bij medische noodzaak (bijv. hypoallergene voeding) kan dit vergoed worden. Check met je verzekeraar en zorgverlener.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Hoeveel bespaar ik als ik huismerk koop?</h4>
                  <p className="text-gray-700">Gemiddeld 40-50% besparing ten opzichte van A-merken. Voor een jaar kan dit €200-300 schelen.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Zijn goedkope flessen even veilig?</h4>
                  <p className="text-gray-700">Ja, alle flessen in Nederland moeten voldoen aan EU veiligheidsnormen. Het verschil zit in design, gebruiksgemak en duurzaamheid.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">Wat kost flesvoeding vergeleken met borstvoeding?</h4>
                  <p className="text-gray-700">Flesvoeding kost €575-1500 eerste jaar. Borstvoeding €400-800 (extra voeding moeder + hulpmiddelen).</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-6">Conclusie: Slim budgetteren voor flesvoeding</h2>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Flesvoeding hoeft niet duur te zijn als je slimme keuzes maakt. Met de juiste aanpak kun je <strong>€200-400 per jaar</strong> besparen zonder in te leveren op kwaliteit of veiligheid.
                </p>

                <h4 className="font-semibold text-primary mb-3">Belangrijkste bespaartips samengevat:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Huismerk kiezen</strong>: 40% besparing op voedingskosten</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Minimale equipment</strong>: Basis sterilisator en 4-6 flessen volstaat</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Bulk inkopen</strong>: Bij aanbiedingen meerdere blikken tegelijk</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Calculator gebruiken</strong>: Voorkom verspilling door juiste hoeveelheden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Online vergelijken</strong>: 10-15% goedkoper dan fysieke winkels</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-primary">Realistisch budget plannen:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Budget bewust</strong>: €575-750 eerste jaar</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Gemiddeld comfort</strong>: €860-1120 eerste jaar</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Premium keuzes</strong>: €1270-1580 eerste jaar</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>Onthoud</strong>: Het belangrijkste is dat je baby goed gevoed wordt en jij je financieel comfortabel voelt bij je keuzes. Dure flesvoeding maakt je niet tot een betere ouder.
                </p>
                
                <h4 className="font-semibold text-primary mb-3">Volgende stappen:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700"><strong>Bereken</strong> je specifieke behoeften met onze <a href="/" className="text-primary hover:underline">flesvoeding calculator</a></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700"><strong>Maak</strong> een maandbudget op basis van je financiële situatie</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700"><strong>Start</strong> met budget opties - je kunt altijd upgraden</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700"><strong>Monitor</strong> je verbruik eerste maanden om budget bij te stellen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700"><strong>Profiteer</strong> van aanbiedingen en bulk inkopen</span>
                  </li>
                </ul>
              </div>
            </section>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-gray-700">
                Met de juiste planning en bewuste keuzes zorg je ervoor dat flesvoeding past binnen je budget, zodat je kunt focussen op het belangrijkste: genieten van je baby!
              </p>
            </div>
          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}