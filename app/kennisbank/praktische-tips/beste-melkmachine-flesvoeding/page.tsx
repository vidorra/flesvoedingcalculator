import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Milk, CheckCircle, AlertTriangle, HelpCircle, ArrowRight, ExternalLink, Users } from 'lucide-react'

export default function BesteMelkmachineFlesvoedingPage() {
  const sidebarImages = [
    {
      src: "/flesvoeding-close-up.webp",
      alt: "Flesvoeding bereiden",
      caption: "Een melkmachine maakt elke fles exact hetzelfde"
    },
    {
      src: "/kunstvoeding.webp",
      alt: "Melkpoeder voor flesvoeding",
      caption: "Compatibiliteit met jouw merk melkpoeder is cruciaal"
    },
    {
      src: "/difrax-fles-kunstvoeding.webp",
      alt: "Babyfles met kunstvoeding",
      caption: "De meeste melkmachines werken met gangbare babyflessen"
    }
  ]

  const adTopics = ["Melkmachine flesvoeding", "Baby flesbereidingsapparaat", "Automatische flessenbereider"]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Praktische Tips • Apparaten & Accessoires</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Milk className="w-6 h-6 mr-3 text-primary" />
                Beste melkmachine voor flesvoeding in 2026
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Eerlijke vergelijking van de vijf populairste melkmachines in Nederland op prijs, betrouwbaarheid, gebruiksgemak en hygiëne.
              </p>
            </div>

            {/* Wat is een melkmachine */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Wat is een melkmachine voor flesvoeding?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Een melkmachine — ook wel flesvoedingsapparaat of automatische flessenbereider genoemd — is een apparaat dat water verwarmt, de juiste hoeveelheid melkpoeder doseert en beide automatisch mengt tot een kant-en-klare fles. Je kunt het vergelijken met een koffiezetapparaat, maar dan voor babyvoeding: één druk op de knop en de fles is klaar.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Het grote verschil met een gewone flessenwarmer is dat een melkmachine het complete bereidingsproces overneemt. Een flessenwarmer verwarmt alleen een al klaargemaakte fles. Een melkmachine meet het water af, doseert het poeder en mengt alles automatisch. Dat scheelt meerdere handmatige stappen, wat vooral in het holst van de nacht een merkbaar verschil maakt.
              </p>
            </section>

            {/* Voor wie */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Voor wie is een melkmachine geschikt?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Een melkmachine is niet voor iedereen nodig. Als je baby twee of drie flessen per dag drinkt en je overdag voldoende tijd hebt om ze klaar te maken, kun je prima zonder. Maar er zijn situaties waarin een melkmachine het overwegen waard is.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-700 mb-1">Ouders die volledig flesvoeding geven</h3>
                    <p className="text-gray-600">Bij zes tot acht flessen per dag bespaar je per fles enkele minuten bereidingstijd. Over een dag telt dat op, vooral als je de nachtvoedingen meetelt.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-700 mb-1">Ouders van een tweeling</h3>
                    <p className="text-gray-600">Twee flessen tegelijk klaarmaken terwijl beide baby's huilen is een van de meest stressvolle momenten voor tweelingouders. Een melkmachine reduceert de bereidingstijd tot onder de dertig seconden per fles. Lees ook onze <Link href="/kennisbank/voedingstechnieken/voeden-van-tweeling" className="text-primary hover:underline font-medium">complete gids voor het voeden van een tweeling</Link>.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-700 mb-1">Wie 's nachts moeite heeft met de bereiding</h3>
                    <p className="text-gray-600">In het donker schepjes tellen, water afmeten en de juiste temperatuur bereiken is foutgevoelig als je zelf half slaapt. Een melkmachine elimineert die foutbronnen. Meer tips vind je in ons artikel over <Link href="/kennisbank/praktische-tips/nachtvoeding-optimaliseren" className="text-primary hover:underline font-medium">nachtvoeding optimaliseren</Link>.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-700 mb-1">Oppas, grootouders of gastouders</h3>
                    <p className="text-gray-600">Niet iedereen is even vertrouwd met het bereiden van flesvoeding. Een melkmachine maakt het proces eenvoudiger en consistenter voor iedereen die jouw baby voedt.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Waar let je op */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Waar let je op bij de keuze?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Voordat we de apparaten vergelijken, is het belangrijk om te weten welke factoren er echt toe doen. Niet alles wat fabrikanten benadrukken is even relevant.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-2">Doseernauwkeurigheid</h3>
                  <p className="text-gray-600">Dit is veruit het belangrijkste criterium. De verhouding tussen water en melkpoeder moet kloppen. Te weinig poeder betekent dat je baby onvoldoende voedingsstoffen binnenkrijgt. Te veel poeder belast de nieren en kan tot uitdroging leiden. Kies een apparaat dat bewezen nauwkeurig doseert en waarvoor de fabrikant de instellingen per merk melkpoeder heeft getest.</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-medium text-primary mb-2">Hygiëne en schoonmaak</h3>
                  <p className="text-gray-600">Melkpoeder is een voedingsbodem voor bacteriën als het vochtig wordt. Het onderdeel waar poeder en water samenkomen — meestal de trechter of het doseermechanisme — moet regelmatig en grondig gereinigd worden. Hoe makkelijker de onderdelen losgemaakt en schoongemaakt kunnen worden, hoe beter.</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-medium text-primary mb-2">Compatibiliteit met melkpoeder</h3>
                  <p className="text-gray-600">Niet elk apparaat werkt met elk merk. Dieetvoeding zoals Nutrilon Pepti en Nutricia Neocate is dikker dan regulier melkpoeder en kan het doseermechanisme verstoppen. Controleer vooraf of jouw merk compatible is.</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-medium text-primary mb-2">Geluid</h3>
                  <p className="text-gray-600">Als het apparaat naast het bedje staat voor nachtvoedingen, is het geluidsniveau relevant. Sommige machines maken een hoorbaar pompgeluid bij het doseren. Geen van de huidige apparaten is volledig stil.</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-medium text-primary mb-2">Bereidingstijd</h3>
                  <p className="text-gray-600">De meeste machines bereiden een fles in zeven tot dertig seconden. Het echte tijdvoordeel zit in het wegvallen van de handmatige stappen: waterkoker, afmeten, schepjes tellen, schudden, temperatuur controleren.</p>
                </div>
              </div>
            </section>

            {/* Vergelijkingstabel */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">De vijf populairste melkmachines vergeleken</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Eigenschap</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Baby Brezza</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Babylatte Pro</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Easybaby</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Born Lucky</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Béaba</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Prijs</td>
                      <td className="border border-gray-300 px-4 py-2">€290–€330</td>
                      <td className="border border-gray-300 px-4 py-2">€230–€270</td>
                      <td className="border border-gray-300 px-4 py-2">€190–€220</td>
                      <td className="border border-gray-300 px-4 py-2">€140–€170</td>
                      <td className="border border-gray-300 px-4 py-2">€180–€200</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Bereidingstijd</td>
                      <td className="border border-gray-300 px-4 py-2">ca. 10 sec</td>
                      <td className="border border-gray-300 px-4 py-2">ca. 7 sec</td>
                      <td className="border border-gray-300 px-4 py-2">ca. 8 sec</td>
                      <td className="border border-gray-300 px-4 py-2">10–30 sec</td>
                      <td className="border border-gray-300 px-4 py-2">ca. 20 sec</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">App-bediening</td>
                      <td className="border border-gray-300 px-4 py-2">Nee</td>
                      <td className="border border-gray-300 px-4 py-2">Ja</td>
                      <td className="border border-gray-300 px-4 py-2">Ja</td>
                      <td className="border border-gray-300 px-4 py-2">Nee</td>
                      <td className="border border-gray-300 px-4 py-2">Nee</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Waterreservoir</td>
                      <td className="border border-gray-300 px-4 py-2">1,5 liter</td>
                      <td className="border border-gray-300 px-4 py-2">1,1 liter</td>
                      <td className="border border-gray-300 px-4 py-2">1,1 liter</td>
                      <td className="border border-gray-300 px-4 py-2">1,3 liter</td>
                      <td className="border border-gray-300 px-4 py-2">1,1 liter</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Poederopslag</td>
                      <td className="border border-gray-300 px-4 py-2">ca. 700 g</td>
                      <td className="border border-gray-300 px-4 py-2">ca. 400 g</td>
                      <td className="border border-gray-300 px-4 py-2">ca. 400 g</td>
                      <td className="border border-gray-300 px-4 py-2">ca. 400 g</td>
                      <td className="border border-gray-300 px-4 py-2">ca. 500 g</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Auto-reiniging</td>
                      <td className="border border-gray-300 px-4 py-2">Nee</td>
                      <td className="border border-gray-300 px-4 py-2">Ja</td>
                      <td className="border border-gray-300 px-4 py-2">Ja</td>
                      <td className="border border-gray-300 px-4 py-2">Ja</td>
                      <td className="border border-gray-300 px-4 py-2">Nee</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Garantie</td>
                      <td className="border border-gray-300 px-4 py-2">2 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">2 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">2 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">1 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">2 jaar</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Bol.com score</td>
                      <td className="border border-gray-300 px-4 py-2">4,4/5</td>
                      <td className="border border-gray-300 px-4 py-2">4,5+/5</td>
                      <td className="border border-gray-300 px-4 py-2">4,3/5</td>
                      <td className="border border-gray-300 px-4 py-2">Beperkt</td>
                      <td className="border border-gray-300 px-4 py-2">Beperkt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Product reviews */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Per apparaat: eerlijke beoordeling</h2>

              <div className="space-y-8">
                {/* Baby Brezza */}
                <div>
                  <h3 className="font-medium text-primary mb-3">1. Baby Brezza Formula Pro Advanced</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    De Baby Brezza is het bekendste en langst bestaande merk op de Nederlandse markt. Het apparaat is getest met vrijwel alle merken melkpoeder die in Nederland verkrijgbaar zijn, inclusief hypoallergene varianten. Met ruim honderden reviews op Bol.com en een gemiddelde van 4,4 sterren weet je wat je kunt verwachten.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Het apparaat heeft een groot waterreservoir van 1,5 liter en een poederopslag voor ongeveer twintig flessen, waardoor je het niet na elke voeding hoeft bij te vullen. De keerzijde is de prijs — met een richtprijs rond de driehonderd euro is dit het duurste apparaat in de vergelijking. Daarnaast verplicht het apparaat je om na elke vier flessen de trechter schoon te maken.
                  </p>
                  <p className="text-gray-700 text-sm italic mb-4">Geschikt voor: ouders die bereid zijn meer te investeren voor een bewezen, betrouwbaar apparaat met de meeste gebruikerservaring.</p>
                  <a
                    href="https://www.bol.com/nl/nl/p/formula-pro-advanced-automatische-baby-fles-maker-fles-voeding-apparaat-baby-senseo/9300000013173476/"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center space-x-2 text-primary hover:underline font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Bekijk de Baby Brezza op Bol.com</span>
                  </a>
                </div>

                {/* Babylatte */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="font-medium text-primary mb-3">2. Babylatte Pro</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    De Babylatte Pro is een nieuwer apparaat op de Nederlandse markt en heeft snel aan populariteit gewonnen. Het apparaat bereidt een fles in ongeveer zeven seconden en is op afstand bedienbaar via een smartphone-app. Je kunt vanuit bed de fles alvast laten klaarmaken terwijl je je baby uit het bedje haalt.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Een sterk punt is de fijnere dosering: de Babylatte werkt met stappen van tien milliliter (vanaf dertig milliliter), terwijl de meeste concurrenten stappen van dertig milliliter hanteren. Het apparaat beschikt ook over een automatisch reinigingsprogramma. De keerzijde is het beperkte aantal reviews en de incompatibiliteit met Nutrilon Pepti en Nutricia Neocate.
                  </p>
                  <p className="text-gray-700 text-sm italic mb-4">Geschikt voor: ouders die app-bediening en fijne dosering belangrijk vinden, en bereid zijn een nieuwer merk een kans te geven.</p>
                  <a
                    href="https://www.bol.com/nl/nl/p/babylatte-pro-automatische-baby-melkmachine-flesvoeding-apparaat-bereidt-een-melkfles-in-7-seconden-bedienbaar-met-smartphone/9300000231029406/"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center space-x-2 text-primary hover:underline font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Bekijk de Babylatte Pro op Bol.com</span>
                  </a>
                </div>

                {/* Easybaby */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="font-medium text-primary mb-3">3. Easybaby Milk Maker</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    De Easybaby Milk Maker is een Nederlands product dat zich positioneert als betrouwbare middenklasser. Het apparaat bereidt een fles in circa acht seconden en is zowel handmatig als via een smartphone-app te bedienen. De instelbare temperatuur loopt van vijfendertig tot zeventig graden.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Het apparaat werkt met vrijwel alle gangbare flessen — van Dr. Brown's en Difrax tot Philips Avent en MAM — en met alle reguliere merken melkpoeder, waaronder Nutrilon, Hero Baby en Kabrita. De klantenservice is Nederlandstalig, wat een voordeel is als je hulp nodig hebt bij het instellen.
                  </p>
                  <p className="text-gray-700 text-sm italic mb-4">Geschikt voor: ouders die een goede prijs-kwaliteitverhouding zoeken met app-bediening en Nederlandse ondersteuning.</p>
                  <a
                    href="https://www.bol.com/nl/nl/p/easybaby-milk-maker-flesvoeding-apparaat-baby-senseo-baby-fles-maker-flessenwarmer-flesverwarmer/9300000019381197/"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center space-x-2 text-primary hover:underline font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Bekijk de Easybaby Milk Maker op Bol.com</span>
                  </a>
                </div>

                {/* Born Lucky */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="font-medium text-primary mb-3">4. Born Lucky Babycinno</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    De Born Lucky Babycinno is het budgetvriendelijkste apparaat in deze vergelijking. Met een richtprijs rond de honderdveertig euro kost het minder dan de helft van een Baby Brezza. Het waterreservoir van 1,3 liter is ruim en het apparaat beschikt over een zelfreinigingsfunctie en vier temperatuurstanden.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    De keerzijde: de Born Lucky Babycinno is nog relatief nieuw en heeft op dit moment nauwelijks reviews. De bereidingstijd van tien tot dertig seconden is trager dan de concurrentie en de garantieperiode van één jaar is korter dan de twee jaar die de meeste andere merken bieden.
                  </p>
                  <p className="text-gray-700 text-sm italic mb-4">Geschikt voor: ouders met een beperkter budget die een automatische flessenbereider willen uitproberen.</p>
                  <a
                    href="https://www.bol.com/nl/nl/p/born-lucky-automatische-baby-fles-maker-zwart/9300000188444298/"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center space-x-2 text-primary hover:underline font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Bekijk de Born Lucky Babycinno op Bol.com</span>
                  </a>
                </div>

                {/* Béaba */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="font-medium text-primary mb-3">5. Béaba Milkeo Plus</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    De Béaba Milkeo Plus is afkomstig van het gevestigde Franse babymerk Béaba, bekend van hun voedingsbereiders en flessenwarmers. Het apparaat bereidt een fles in circa twintig seconden en biedt drie temperatuurstanden. De poederopslag is met vijfhonderd gram iets groter dan bij de meeste concurrenten.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Het voordeel van Béaba is de merkreputatie en het minimalistische design dat goed past in een moderne keuken of slaapkamer. De Milkeo Plus mist app-bediening en een automatisch reinigingsprogramma — functies die goedkopere concurrenten wel bieden. De bereidingstijd van twintig seconden is trager dan de meeste alternatieven.
                  </p>
                  <p className="text-gray-700 text-sm italic mb-4">Geschikt voor: ouders die de voorkeur geven aan een gevestigd merk met bewezen kwaliteit en minder waarde hechten aan app-bediening.</p>
                  <a
                    href="https://www.bol.com/nl/nl/s/?searchtext=beaba+milkeo+plus"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center space-x-2 text-primary hover:underline font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Bekijk de Béaba Milkeo Plus op Bol.com</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Eerlijk advies */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Eerlijk advies: heb je een melkmachine nodig?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Laten we eerlijk zijn. Een melkmachine is een luxeproduct. Je kunt prima flesvoeding bereiden met een waterkoker, een maatschepje en dertig seconden schudden. Ouders doen dit al decennia met uitstekend resultaat.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                De meerwaarde zit niet in de kwaliteit van de bereide voeding — die is gelijk aan handmatig bereid — maar in het gemak en de consistentie. Reken voor jezelf uit of de investering past. Als je zes maanden flesvoeding geeft met zes flessen per dag, maak je in totaal ongeveer duizend flessen. Bij een apparaat van tweehonderd euro komt dat neer op twintig cent per fles aan extra kosten — vergelijkbaar met de prijs van een kop koffie per week.
              </p>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Alternatieven voor een melkmachine</h3>
                <p className="text-gray-600 mb-4">Als je het gemak wilt maar niet de volledige investering, zijn er twee praktische alternatieven.</p>

                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-medium text-gray-700">Een thermosfles met vooraf gekookt water.</span>
                      <span className="text-gray-600"> Kook 's avonds water, vul een thermosfles en zet deze met het blikje melkpoeder op je nachtkastje. 's Nachts hoef je dan alleen het water af te meten, poeder toe te voegen en te schudden. Kosten: circa tien tot vijftien euro.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-medium text-gray-700">Een flessenwarmer met warmhoudfunctie.</span>
                      <span className="text-gray-600"> Vul de flessenwarmer 's avonds met water op de juiste temperatuur. 's Nachts hoef je alleen de fles erin te zetten. Dit kost rond de dertig tot zestig euro, afhankelijk van het merk.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Hygiëne waarschuwing */}
            <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Let op: hygiëne bij gebruik van een melkmachine</h3>
                  <p className="text-sm text-amber-700 leading-relaxed mb-4">
                    Ongeacht welk apparaat je kiest, hygiëne is cruciaal. Melkpoeder is niet steriel en kan bacteriën bevatten, waaronder Cronobacter sakazakii. Het correct schoonhouden van je melkmachine is geen optionele stap.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0 mt-1.5"></div>
                      <p className="text-sm text-amber-700"><span className="font-medium">Dagelijks:</span> spoel de trechter, het doseermechanisme en de flessenstandaard af met warm water en mild afwasmiddel. Laat alle onderdelen volledig drogen.</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0 mt-1.5"></div>
                      <p className="text-sm text-amber-700"><span className="font-medium">Wekelijks:</span> gebruik het automatische reinigingsprogramma als je apparaat dit heeft. Reinig het waterreservoir en controleer op kalkafzetting.</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0 mt-1.5"></div>
                      <p className="text-sm text-amber-700"><span className="font-medium">Maandelijks:</span> ontkalk het apparaat volgens de instructies van de fabrikant. Bij hard kraanwater kan dit vaker nodig zijn.</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0 mt-1.5"></div>
                      <p className="text-sm text-amber-700"><span className="font-medium">Bij dieetvoeding:</span> reinig de trechter na elke twee tot drie flessen. Dieetvoeding is dikker en blijft sneller plakken.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                Veelgestelde vragen
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Maakt een melkmachine de fles even goed als handmatig bereiden?</h3>
                  <p className="text-gray-600">Ja, mits het apparaat correct is ingesteld en schoongehouden. De samenstelling van de bereide voeding is identiek. Het verschil zit in het gemak, niet in de voedingswaarde. Een goed gecalibreerd apparaat doseert zelfs nauwkeuriger dan de meeste ouders met een maatschepje.</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-gray-700 mb-2">Kan ik elk merk melkpoeder gebruiken in een melkmachine?</h3>
                  <p className="text-gray-600">De meeste apparaten werken met alle gangbare merken zoals Nutrilon, Hero Baby, Aptamil, Kabrita en HIPP. De uitzondering is dieetvoeding: Nutrilon Pepti en Nutricia Neocate zijn dikker en kunnen het doseermechanisme verstoppen. Controleer bij de fabrikant of jouw specifieke voeding compatible is.</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-gray-700 mb-2">Is een melkmachine veilig voor mijn baby?</h3>
                  <p className="text-gray-600">Alle apparaten in deze vergelijking zijn BPA-vrij en CE-gecertificeerd. De veiligheid hangt verder af van correct gebruik: stel het apparaat in volgens de instructies, houd het schoon en controleer regelmatig of de dosering nog klopt.</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-gray-700 mb-2">Welke melkmachine is de beste keuze?</h3>
                  <p className="text-gray-600">Kies de Baby Brezza als je de meeste zekerheid wilt. Kies de Babylatte Pro voor app-bediening en fijne dosering. Kies de Easybaby voor de beste prijs-kwaliteitverhouding met Nederlandse ondersteuning. Kies de Born Lucky als je budget beperkt is. En kies de Béaba als je de voorkeur geeft aan een gevestigd merk.</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-gray-700 mb-2">Hoeveel bespaar ik aan tijd met een melkmachine?</h3>
                  <p className="text-gray-600">Een handmatig bereide fles kost gemiddeld twee tot vier minuten. Een melkmachine reduceert dit tot zeven tot dertig seconden. Bij zes flessen per dag bespaar je ruwweg tien tot twintig minuten — en dat vooral op stressmomenten in de nacht.</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-gray-700 mb-2">Kan ik een melkmachine ook gebruiken voor moedermelk?</h3>
                  <p className="text-gray-600">Nee, de apparaten in deze vergelijking zijn ontworpen voor poedervormige flesvoeding. Voor het opwarmen van moedermelk heb je een flessenwarmer nodig.</p>
                </div>
              </div>
            </section>

            {/* Calculator CTA */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-primary">Bereken de juiste hoeveelheid per voeding</div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ongeacht hoe je de fles bereidt: de hoeveelheid blijft gelijk</span>
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 ml-2" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Gerelateerde artikelen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Gerelateerde artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Fles bereiden stap voor stap →</div>
                  <div className="text-sm text-gray-600">De complete handleiding voor veilige bereiding</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/flessen-steriliseren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Flessen steriliseren →</div>
                  <div className="text-sm text-gray-600">Tot wanneer en welke methode is het beste</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/nachtvoeding-optimaliseren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Nachtvoeding optimaliseren →</div>
                  <div className="text-sm text-gray-600">Hoe je nachtvoedingen zo soepel mogelijk maakt</div>
                </Link>
                <Link href="/kennisbank/financiele-aspecten/kosten-van-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Kosten van flesvoeding →</div>
                  <div className="text-sm text-gray-600">Complete budgetgids voor alle merken</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/voeden-van-tweeling" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Voeden van een tweeling →</div>
                  <div className="text-sm text-gray-600">Complete survival gids voor tweelingouders</div>
                </Link>
                <Link href="/" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Flesvoeding Calculator →</div>
                  <div className="text-sm text-gray-600">Bereken hoeveel ml jouw baby per voeding nodig heeft</div>
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
