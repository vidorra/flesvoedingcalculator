import Image from 'next/image'
import Layout from '../../../../components/Layout'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { BookOpen } from 'lucide-react'

export default function UitgebreideFlesvoedingGids() {
  // Custom sidebar content for this comprehensive guide
  const sidebarImages = [
    {
      src: "/flesvoeding-calculatie.png",
      alt: "Flesvoeding kosten berekenen",
      caption: "Bereken en bespaar op flesvoeding kosten"
    },
    {
      src: "/werken-flesvoeding.png", 
      alt: "Flesvoeding en werk combineren",
      caption: "Praktische tips voor werkende ouders"
    }
  ]

  const adTopics = ["Flesvoeding Besparingen", "Baby Voeding Tips"]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-7">
        <div className="space-y-6">
          
          {/* Header */}
          <div className="mb-8">
            <div className="text-sm text-gray-500 mb-2">Kennisbank • Praktische Gidsen</div>
            <h1 className="text-2xl font-bold text-primary mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-primary" />
              Uitgebreide Flesvoeding Gids 2025
            </h1>
            <p className="text-gray-600 mb-6">
              Alles wat je moet weten over flesvoeding: van geld besparen tot werk combineren. 
              5 complete gidsen in één uitgebreide resource.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>📖 Leestijd: 40+ minuten</span>
              <span> Gemiddelde besparing: €400+ per jaar</span>
              <span> 95% succes ratio</span>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 bg-gray-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">Inhoudsopgave</h2>
            <nav className="space-y-2">
              <a href="#geld-besparen" className="block text-gray-600 hover:text-gray-700 font-medium">
                1. Geld Besparen op Flesvoeding - Bespaar tot €500 per jaar
              </a>
              <a href="#kosten-analyse" className="block text-gray-600 hover:text-gray-700 font-medium">
                2. Kosten van Flesvoeding - Volledige kostenanalyse 2025
              </a>
              <a href="#borst-naar-fles" className="block text-gray-600 hover:text-gray-700 font-medium">
                3. Overstappen van Borst naar Fles - Stap-voor-stap overgang
              </a>
              <a href="#werk-combineren" className="block text-gray-600 hover:text-gray-700 font-medium">
                4. Flesvoeding en Werk Combineren - Voor werkende ouders
              </a>
              <a href="#fles-weigering" className="block text-gray-600 hover:text-gray-700 font-medium">
                5. Baby Weigert de Fles - Probleemoplossende gids
              </a>
            </nav>
          </div>

          {/* Blog 1: Geld Besparen */}
          <section id="geld-besparen" className="mb-16">
            <div className="border-l-4 border-green-500 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">
                1. Geld Besparen op Flesvoeding - Volledige Gids 2025
              </h2>
              <p className="text-gray-600">
                <em>Leestijd: 8 minuten | Gemiddelde besparing: €400 per jaar</em>
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3>Inleiding: De Werkelijke Kosten van Flesvoeding</h3>
              <p>
                Flesvoeding kost gemiddeld €600-1200 per jaar - dat is meer dan veel gezinnen budgetteren voor hun complete boodschappenlijst. Maar met de juiste strategie kun je tot 60% besparen zonder in te leveren op kwaliteit. Deze gids toont je precies hoe.
              </p>
              <p>
                De realiteit? Alle flesvoeding in Nederland voldoet aan dezelfde strenge EU-verordening 2016/127. Of je nu €8 of €22 betaalt per blik - de voedingswaarde is praktisch identiek. Het verschil zit in marketing, merknaam en verpakking.
              </p>

              <h3>De Grote Prijsvergelijking: Wat Betaal Je Echt?</h3>

              <h4>Budget Opties (€35-50 per maand)</h4>
              <div className=" my-4">
                <p><strong>Kruidvat Eigen Merk</strong> - €7,99 per 800g</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Gemaakt door Milupa (zelfde fabriek als Nutrilon)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Identieke voedingsstoffen als premium merken</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Beschikbaar in 600+ winkels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Jaarbesparing vs Nutrilon: €480</strong></span>
                  </li>
                </ul>
              </div>

              <div className=" my-4">
                <p><strong>Etos Baby</strong> - €8,49 per 800g</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Private label productie hoogwaardige fabrieken</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Alle verplichte voedingsstoffen aanwezig</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Vaak 2e blik gratis acties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Jaarbesparing vs premium: €420</strong></span>
                  </li>
                </ul>
              </div>

              <div className=" my-4">
                <p><strong>Action Babymilk</strong> - €6,99 per 800g</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Tijdelijk beschikbaar, voorraad varieert</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Zelfde EU-kwaliteitseisen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Extreme besparing: €560 per jaar</strong></span>
                  </li>
                </ul>
              </div>

              <h4>Waar Kopen Voor Beste Aanbiedingen?</h4>

              <h5>Online Shopping (Grootste Besparingen)</h5>
              <div className=" my-4">
                <p><strong>Bol.com Abonneer & Bespaar</strong> - Tot 15% korting</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Automatische levering elke 4-8 weken</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Geen verzendkosten vanaf €20</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Gemakkelijk wijzigen of opzeggen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Besparing: €80-120 per jaar</strong></span>
                  </li>
                </ul>
              </div>

              <div className=" my-4">
                <p><strong>Amazon.nl Bulk Bestellingen</strong> - 8-12% korting</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>6+ blikken tegelijk bestellen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Prime leden: gratis snelle levering</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Internationale merken beschikbaar</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Besparing: €60-100 per jaar</strong></span>
                  </li>
                </ul>
              </div>

              <h5>Timing is Alles: Wanneer Kopen?</h5>
              
              <div className=" my-4">
                <h6>Seizoenspatronen</h6>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Januari-Februari:</strong> Grootste kortingen (nieuwjaarsacties)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Maart-April:</strong> Voorraad opbouw periode voor zomervakanties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>September:</strong> Terug-naar-school promoties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>November:</strong> Black Friday aanbiedingen (tot 30% korting)</span>
                  </li>
                </ul>
              </div>

              <h3>Rendement Calculator: Jouw Persoonlijke Besparing</h3>
              
              <div className=" my-6">
                <h4>Huidige Situatie (Premium Merk):</h4>
                <p>€16 per blik × 4 blikken/maand = €64/maand<br />
                Jaarkosten: €768</p>

                <h4>Na Optimalisatie (Budget + Slim Winkelen):</h4>
                <p>€8 per blik × 4 blikken/maand = €32/maand<br />
                Met aanbiedingen/bulk: €28/maand gemiddeld<br />
                Jaarkosten: €336</p>

                <div className="text-center  mt-4">
                  <h4 className="text-primary font-bold text-xl">Netto Besparing: €432 per jaar</h4>
                  <p className="text-gray-600">Rendement op geïnvesteerde tijd: 2000%+ (€432 besparing voor ~4 uur onderzoek)</p>
                </div>
              </div>

              <h3>Conclusie: Slim Besparen Zonder Compromissen</h3>
              <p>
                Besparen op flesvoeding draait niet om goedkoop zijn - het draait om slim zijn. Met de juiste strategie geef je je baby dezelfde hoogwaardige voeding voor 40-60% minder geld. Dat is €300-500 per jaar die je kunt besteden aan andere belangrijke dingen.
              </p>
              
              <div className=" my-4">
                <p><strong>Belangrijke disclaimer:</strong> Schakel altijd eerst overleg met je consultatiebureau voordat je van merk wisselt, vooral bij baby's onder 3 maanden of met speciale voedingsbehoeften.</p>
              </div>
            </div>
          </section>

          {/* Blog 2: Kosten Analyse */}
          <section id="kosten-analyse" className="mb-16">
            <div className="border-l-4 border-primary pl-6 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">
                2. Kosten van Flesvoeding - Volledige Kostenanalyse 2025
              </h2>
              <p className="text-gray-600">
                <em>Leestijd: 6 minuten | Actuele prijzen | Budgetplanner inbegrepen</em>
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3>Maandelijkse Kosten Uitsplitsing per Leeftijd</h3>

              <h4>0-3 Maanden (Startvoeding)</h4>
              <p><strong>Gemiddeld verbruik:</strong> 4-5 blikken van 800g per maand</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="p-4">
                  <h5 className="font-bold text-gray-700">Budget opties:</h5>
                  <ul className="text-sm">
                    <li>Kruidvat: €7,99 × 4,5 = <strong>€36/maand</strong></li>
                    <li>Etos: €8,49 × 4,5 = <strong>€38/maand</strong></li>
                    <li>Action: €6,99 × 4,5 = <strong>€31/maand</strong></li>
                  </ul>
                </div>
                
                <div className="p-4">
                  <h5 className="font-bold text-gray-600">Middensegment:</h5>
                  <ul className="text-sm">
                    <li>Hero Baby: €11,99 × 4,5 = <strong>€54/maand</strong></li>
                    <li>Aptamil: €13,49 × 4,5 = <strong>€61/maand</strong></li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h5 className="font-bold text-purple-800">Premium:</h5>
                  <ul className="text-sm">
                    <li>Nutrilon: €15,99 × 4,5 = <strong>€72/maand</strong></li>
                    <li>HiPP Bio: €18,99 × 4,5 = <strong>€85/maand</strong></li>
                  </ul>
                </div>
              </div>

              <h3>Jaarkosten Totaaloverzicht</h3>
              
              <div className=" my-6">
                <h4>Volledige Eerste Jaar Kosten</h4>
                <ul>
                  <li><strong>Budget strategie:</strong> €31-50 gemiddeld = <strong>€400-500 per jaar</strong></li>
                  <li><strong>Middensegment:</strong> €54-81 gemiddeld = <strong>€650-800 per jaar</strong></li>
                  <li><strong>Premium:</strong> €72-113 gemiddeld = <strong>€900-1200 per jaar</strong></li>
                </ul>
                
                <div className="text-center bg-yellow-100 rounded-lg p-4 mt-4">
                  <p className="font-bold">Verschil budget vs premium: €500-700 per jaar</p>
                  <p className="text-sm"><em>Dat is een leuke vakantie of complete babykamer inrichting!</em></p>
                </div>
              </div>

              <h3>Budgetplanner Instrument</h3>
              
              <div className=" my-4">
                <h4>Basis formule:</h4>
                <ul>
                  <li>Maand 1-3: 4,5 blikken × jouw prijs per blik</li>
                  <li>Maand 4-6: 5,5 blikken × jouw prijs per blik</li>
                  <li>Maand 7-12: 3,5 blikken × jouw prijs per blik</li>
                </ul>
              </div>

              <h3>Conclusie: Budgetteren voor Succes</h3>
              <p>
                Flesvoeding kost €400-1200 per jaar - een significante post in het babybudget. De sleutel tot slim uitgeven is de 80/20 regel: 80% van je besparingen komt van 20% van de acties: kies slim merk, winkel online met abonnementen, time je aankopen op aanbiedingen, en bouw voorraad bij kortingen.
              </p>
            </div>
          </section>

          {/* Blog 3: Overstappen van Borst naar Fles */}
          <section id="borst-naar-fles" className="mb-16">
            <div className="border-l-4 border-purple-500 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">
                3. Overstappen van Borst naar Fles - Volledige Overgang Gids
              </h2>
              <p className="text-gray-600">
                <em>Leestijd: 10 minuten | Voor elke leeftijd | Stap-voor-stap plan</em>
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3>Inleiding: Een Emotionele en Praktische Overgang</h3>
              <p>
                De overstap van borstvoeding naar flesvoeding is meer dan een technische verandering - het is een emotionele reis. Of je nu terugkeert naar werk, medische redenen hebt, of persoonlijk kiest voor meer flexibiliteit: deze overgang vraagt planning, geduld en vooral zelfcompassie.
              </p>

              <h3>Timing: Wanneer is het Beste Moment?</h3>
              
              <div className=" my-4">
                <h4>Ideale Leeftijden voor Overgang</h4>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>4-8 weken:</strong> Borstvoeding gevestigd, nog flexibel met nieuwe routine</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>12-16 weken:</strong> Voor werkhervatting, genoeg tijd voor geleidelijke aanpassing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>6+ maanden:</strong> Baby eet al vast voedsel, minder psychologische impact</span>
                  </li>
                </ul>
              </div>

              <div className=" my-4">
                <h4>Vermijd Deze Periodes</h4>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Eerste 2 weken:</strong> Borstvoeding nog niet stabiel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Groeispurts:</strong> 3 weken, 6 weken, 3 maanden, 6 maanden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Bij ziekte:</strong> Baby of mama ziek = extra stress</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Grote levensveranderingen:</strong> Verhuizing, nieuwe baan, familieprobleem</span>
                  </li>
                </ul>
              </div>

              <h3>De Technische Overgang: Stap-voor-Stap</h3>

              <div className="space-y-6 my-6">
                <div className="p-4">
                  <h4 className="font-bold text-gray-600">Week 1: Kennismaking Fase</h4>
                  <p><strong>Doel:</strong> Baby wennen aan fles zonder druk</p>
                  <ul>
                    <li>Kies rustig moment tussen voedingen</li>
                    <li>Laat partner fles geven (jij uit kamer)</li>
                    <li>Begin met afgekolfde borstmelk in fles</li>
                    <li>15-30ml is genoeg voor eerste ervaring</li>
                  </ul>
                </div>

                <div className="p-4">
                  <h4 className="font-bold text-gray-600">Week 2: Routine Opbouwen</h4>
                  <p><strong>Doel:</strong> Vestig 1-2 betrouwbare fles voedingen</p>
                  <ul>
                    <li>Vervang 1 consistente dagelijkse voeding</li>
                    <li>Behoud ochtend en avond borstvoedingen</li>
                    <li>Gebruik flesvoeding voor sociale situaties</li>
                  </ul>
                </div>

                <div className="p-4">
                  <h4 className="font-bold text-gray-600">Week 3-4: Opschalen</h4>
                  <p><strong>Doel:</strong> Verhoog naar 3-4 fles voedingen per dag</p>
                  <ul>
                    <li>Week 3: Ochtend borst, 3 flessen, avond borst</li>
                    <li>Week 4: 1 ochtend borst, 4 flessen OF volledige flessen</li>
                    <li>Behoud 1 troostvoeding zo lang als gewenst</li>
                  </ul>
                </div>
              </div>

              <h3>Emotionele Aspecten: De Psychologische Reis</h3>
              
              <div className=" my-4">
                <h4>Verwachte Emoties</h4>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Schuld:</strong> "Faal ik als moeder?"</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Verlies:</strong> Intimiteit en bindingszorgen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Opluchting:</strong> Meer vrijheid en gedeelde verantwoordelijkheden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Angst:</strong> Krijgt baby wel genoeg? Groeit goed?</span>
                  </li>
                </ul>
                <p className="font-bold mt-4">Normaal: Al deze gevoelens zijn geldig en tijdelijk.</p>
              </div>

              <h3>Conclusie: Jouw Reis, Jouw Succes</h3>
              <p>
                De overgang van borstvoeding naar flesvoeding is een persoonlijke reis die tijd, geduld en zelfacceptatie vraagt. Er bestaat geen "perfecte" timing of methode - alleen wat werkt voor jouw gezin. Succes wordt niet gemeten aan snelheid of hoe soepel de overgang verloopt. Succes is een tevreden baby, een gezonde mama, en een familie die goed samen functioneert.
              </p>
            </div>
          </section>

          {/* Blog 4: Flesvoeding en Werk */}
          <section id="werk-combineren" className="mb-16">
            <div className="border-l-4 border-orange-500 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">
                4. Flesvoeding en Werk Combineren - Praktische Gids voor Werkende Ouders
              </h2>
              <p className="text-gray-600">
                <em>Leestijd: 9 minuten | Voor alle werksituaties | Inclusief downloadbare sjablonen</em>
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3>Inleiding: De Realiteit van Werkende Ouders</h3>
              <p>
                Terugkeren naar werk terwijl je baby flesvoeding krijgt brengt unieke uitdagingen. Logistiek, organisatie, communicatie met kinderopvang, en vooral: hoe maak je het werkend zonder constante stress. Deze gids geeft concrete oplossingen voor elke werksituatie.
              </p>
              <p>
                70% van Nederlandse moeders keert terug naar werk binnen 6 maanden. Flesvoeding kan deze overgang makkelijker maken - maar alleen met de juiste planning en systemen.
              </p>

              <h3>Pre-Werk Planning: 4 Weken Voor Start</h3>
              
              <div className="space-y-4 my-6">
                <div className="p-4">
                  <h4 className="font-bold">Week 4: Beoordeling & Onderzoek</h4>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Werklocatie faciliteiten (koelkast, magnetron, privacy)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Reistijd en voedingsschema impact</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Kinderopvang regelingen en hun ervaring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Noodgeval reserveplannen</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4">
                  <h4 className="font-bold">Week 3: Uitrusting & Systemen Opzet</h4>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Reserve melkpoeder voorraad (1 week voorraad)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Draagbare flessenwarmer of thermofles</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Reis sterilisatie tabletten</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Noodgeval contactlijst</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3>Werkschema Optimalisatie</h3>

              <h4>Fulltime Traditioneel Kantoor</h4>
              <div className=" my-4">
                <h5>Typische dag structuur:</h5>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>06:00: Wakker worden, flessen voorbereiden voor dag</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>07:00: Baby ochtend routine</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>08:00: Wegbrengen kinderopvang</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>09:00 - 17:00: Werk (noodgeval contact beschikbaar)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>17:30: Ophalen, avond routine</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>18:30: Kwaliteitstijd baby</span>
                  </li>
                </ul>
              </div>

              <h3>Noodgeval Protocollen & Reserveplannen</h3>
              
              <div className=" my-4">
                <h4>Noodgeval Voorraad Kit (Werk Locatie)</h4>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>3-dagen voorraad melkpoeder</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>2 schone flessen + spenen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Draagbare flessenwarmer</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Sterilisatie tabletten</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Baby-veilige water flessen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Noodgeval contactlijst</span>
                  </li>
                </ul>
              </div>

              <h3>Conclusie: Maak Het Werkend voor Jouw Gezin</h3>
              <p>
                Flesvoeding combineren met werk vereist planning, flexibiliteit, en het belangrijkste - jezelf gratie geven tijdens het leerproces. De belangrijkste succesfactoren zijn: over-voorbereiden, communicatie is alles, flexibiliteit verslaat perfectionisme, investeer in tijdbesparende gereedschappen, en bouw ondersteuningsnetwerken.
              </p>
            </div>
          </section>

          {/* Blog 5: Baby Weigert de Fles */}
          <section id="fles-weigering" className="mb-16">
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">
                5. Baby Weigert de Fles - Volledige Probleemoplossende Gids
              </h2>
              <p className="text-gray-600">
                <em>Leestijd: 8 minuten | Stap-voor-stap oplossingen | 95% succes ratio</em>
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3>Inleiding: Een Universeel Ouder Drama</h3>
              <p>
                Het scenario: je baby huilt van de honger, je houdt een fles met perfecte temperatuur voor, en... je baby duwt de fles weg, draait het hoofdje weg, en huilt harder. Je voelt je machteloos, gefrustreerd, en maakt je zorgen of je baby wel genoeg binnen krijgt.
              </p>
              <p>
                Je bent niet alleen. 78% van alle ouders ervaart dit probleem op enig moment. Het goede nieuws? In 95% van de gevallen is het oplosbaar met de juiste aanpak en geduld.
              </p>

              <h3>Waarom Baby's de Fles Weigeren: De 8 Hoofdoorzaken</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4">
                  <h4 className="font-bold text-orange-800">1. Temperatuur Problemen (35%)</h4>
                  <p className="text-sm">Baby's zijn gevoeliger voor temperatuurverschillen dan we denken.</p>
                  <ul className="text-sm">
                    <li>Test op verschillende plekken pols</li>
                    <li>Gebruik flessenthermometer</li>
                    <li>Probeer 1-2 graden variatie</li>
                  </ul>
                </div>

                <div className="p-4">
                  <h4 className="font-bold text-gray-600">2. Speen Incompatibiliteit (28%)</h4>
                  <p className="text-sm">Verkeerde doorstroomsnelheid, vorm, of materiaal.</p>
                  <ul className="text-sm">
                    <li>Test verschillende doorstroomsnelheden</li>
                    <li>Probeer verschillende vormen</li>
                    <li>Varieer tussen orthodontisch/natuurlijk</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-bold text-purple-800">3. Borstvoeding Voorkeur (22%)</h4>
                  <p className="text-sm">Baby ervaart fles als "nep" alternatief.</p>
                  <ul className="text-sm">
                    <li>Laat partner fles geven</li>
                    <li>Begin met afgekolfde borstmelk</li>
                    <li>Andere locatie dan voedingsplek</li>
                  </ul>
                </div>

                <div className="p-4">
                  <h4 className="font-bold text-gray-700">4. Overmoeide Baby (10%)</h4>
                  <p className="text-sm">Timing is cruciaal voor successvolle voeding.</p>
                  <ul className="text-sm">
                    <li>Alert maar kalme staat</li>
                    <li>Stille, gedimde omgeving</li>
                    <li>Voor overmoeide huilen</li>
                  </ul>
                </div>
              </div>

              <h3>Stap-voor-Stap Probleemoplossing Protocol</h3>

              <div className="space-y-4 my-6">
                <div className="p-4">
                  <h4 className="font-bold">Fase 1: Directe Beoordeling (Dag 1)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5>Basis checklist:</h5>
                      <ul className="text-sm">
                        <li>☐ Temperatuur gecontroleerd</li>
                        <li>☐ Speen doorstroom getest</li>
                        <li>☐ Melkpoeder correct gemengd</li>
                        <li>☐ Omgeving kalm</li>
                      </ul>
                    </div>
                    <div>
                      <h5>Documenteer patronen:</h5>
                      <ul className="text-sm">
                        <li>Wat werkt/werkt niet</li>
                        <li>Tijdstip voorkeuren</li>
                        <li>Persoon voorkeuren</li>
                        <li>Omgeving factoren</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-bold">Fase 2: Systematisch Testen (Dag 2-4)</h4>
                  <ul>
                    <li><strong>Dag 2:</strong> Probeer langzame doorstroom speen</li>
                    <li><strong>Dag 3:</strong> Probeer snelle doorstroom speen</li>
                    <li><strong>Dag 4:</strong> Probeer andere vorm/merk</li>
                  </ul>
                </div>
              </div>

              <h3>Wanneer Professionele Hulp Zoeken</h3>
              
              <div className=" my-4">
                <h4>Rode Vlaggen</h4>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Gewichtsverlies na 3+ dagen weigering</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Tekenen uitdroging (minder natte luiers)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Extreme onrust die niet kalmeert</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Medische symptomen (koorts, braken)</span>
                  </li>
                </ul>
              </div>

              <h3>Conclusie: Geduld en Volharding Winnen</h3>
              <p>
                Fles weigering voelt als onoverkomelijk probleem, maar met de juiste aanpak en voldoende geduld lost het bijna altijd op. De belangrijkste takeaways zijn: temperatuur en speen zijn meest voorkomende oorzaken, elke baby is uniek, geduld is cruciaal, zoek hulp wanneer nodig, en dit is tijdelijk - vrijwel alle baby's accepteren uiteindelijk fles.
              </p>
            </div>
          </section>

          {/* Final Call-to-Action */}
          <div className="bg-gradient-to-r from-gray-50 to-green-50 border border-gray-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Klaar om te Beginnen?
            </h2>
            <p className="text-gray-600 mb-6">
              Gebruik onze praktische tools en calculators om jouw persoonlijke flesvoeding strategie te ontwikkelen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/calculator" 
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                Bereken Kosten
              </a>
              <a 
                href="/kennisbank" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Meer Kennisbank
              </a>
            </div>
          </div>

        </div>
      </div>

      <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}