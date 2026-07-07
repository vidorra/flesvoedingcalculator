import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Droplets, Thermometer, Clock, Shield, AlertTriangle, CheckCircle, Home, Coffee, ArrowRight, } from 'lucide-react'
import BolProductSection from '../../../../components/BolProductLink'
import { generateFAQSchema } from '../../../../lib/structured-data'

export const metadata = {
  title: 'Water Koken voor Flesvoeding: Moet Dat in Nederland? (2026)',
  description: 'Moet je water koken voor flesvoeding? In Nederland is dat volgens het Voedingscentrum niet nodig: koud kraanwater is veilig. Lees wanneer koken wel verstandig is en hoe je de fles veilig klaarmaakt.',
  alternates: { canonical: '/kennisbank/hygiene-bereiding/water-koken-flesvoeding/' }
}

export default function WaterKokenFlesvoedingPage() {
  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/sterilisator-babyflessen.webp",
      alt: "Veilige bereiding van flesvoeding met kraanwater",
      caption: "In Nederland is koud kraanwater veilig; koken is niet nodig"
    },
    {
      src: "/flesvoeding-close-up.webp",
      alt: "Correct bereide flesvoeding op drinktemperatuur",
      caption: "Warm de fles tot 30 à 35°C, niet warmer"
    },
    {
      src: "/difrax-fles-kunstvoeding.webp",
      alt: "Nederlandse flesvoeding kwaliteit",
      caption: "Nederlands kraanwater voldoet aan alle EU-veiligheidsnormen"
    }
  ]

  // Ad targeting keywords
  const adTopics = ["Water Koken", "Flesvoeding Veiligheid", "Baby Hygiëne"]

  // Data arrays for content
  const wanneerWelKoken = [
    "Bij baby's die te vroeg geboren zijn, een laag geboortegewicht hebben of ziek zijn, en alleen op advies van de arts of het consultatiebureau",
    "Op reis of in het buitenland, waar de kwaliteit van het kraanwater niet gegarandeerd is",
    "Als je waterbedrijf een kookadvies geeft, bijvoorbeeld bij een tijdelijke besmetting van het leidingnet",
    "Bij loden leidingen in huis: gebruik dan flessenwater dat op het etiket geschikt is voor babyvoeding"
  ]

  const situatieAdvies = [
    {
      situatie: "Gezonde, voldragen baby in Nederland",
      water: "Koud kraanwater",
      advies: "Koken is niet nodig"
    },
    {
      situatie: "Prematuur, laag geboortegewicht of ziek",
      water: "Op advies van arts",
      advies: "Soms water van 70°C geadviseerd"
    },
    {
      situatie: "Op reis / onbekende waterkwaliteit",
      water: "Gekookt water of flessenwater",
      advies: "Koken of geschikt flessenwater"
    },
    {
      situatie: "Loden leidingen in huis",
      water: "Flessenwater voor babyvoeding",
      advies: "Geen kraanwater gebruiken"
    }
  ]

  const bereidingsStappen = [
    "Was je handen en gebruik een schone, goed omgespoelde fles",
    "Vul de fles met koud kraanwater (geen warm kraanwater uit de kraan)",
    "Voeg het juiste aantal afgestreken maatschepjes poeder toe volgens de verpakking",
    "Sluit de fles en schud tot het poeder helemaal is opgelost",
    "Warm de fles daarna op tot 30 à 35°C, niet warmer",
    "Test op de binnenkant van je pols; ongeveer even warm als je huid is precies goed"
  ]

  const kraanwaterVoordelen = [
    "Voldoet aan strenge EU-kwaliteitseisen en wordt dagelijks gecontroleerd door de waterbedrijven",
    "Laag mineralengehalte, geschikt en veilig voor baby's",
    "Geen conserveringsmiddelen nodig, van nature schoon",
    "Goedkoop: ongeveer €0,001 per liter, tegen €0,50 of meer voor flessenwater",
    "Milieuvriendelijk: geen plastic afval van waterflessen"
  ]

  const veelgemaakteFouten = [
    {
      fout: "Warm kraanwater gebruiken om sneller op te warmen",
      correct: "Gebruik altijd koud kraanwater en warm de fles daarna op",
      gevaar: "Warm kraanwater kan meer metalen uit de leidingen bevatten"
    },
    {
      fout: "De fles te warm maken (boven 35°C)",
      correct: "Warm op tot 30 à 35°C en test op je pols",
      gevaar: "Te hete melk kan de mond verbranden en voedingsstoffen afbreken"
    },
    {
      fout: "Klaargemaakte flesvoeding te lang bewaren",
      correct: "Maximaal 8 uur achterin de koelkast bij 4°C, en direct koelen",
      gevaar: "Bij warmere of langere bewaring kunnen bacteriën groeien"
    },
    {
      fout: "Een restje van de vorige voeding bewaren en hergebruiken",
      correct: "Gooi restjes na een voeding altijd weg",
      gevaar: "Speeksel uit de mond brengt bacteriën in de melk"
    },
    {
      fout: "In de magnetron opwarmen zonder te schudden en te testen",
      correct: "Magnetron mag (maximaal 600 Watt): schud goed en test op je pols",
      gevaar: "De magnetron warmt ongelijk op, met hete plekken in de melk"
    }
  ]

  const alternatieven = [
    {
      methode: "Perfect Prep Machine",
      kosten: "€150-200 + €30 per 3 maanden filters",
      snelheid: "2 minuten",
      voordelen: "Water direct op de ingestelde temperatuur, geen wachttijd",
      nadelen: "Hoge aanschafkosten, filteronderhoud, elektriciteitsverbruik"
    },
    {
      methode: "Babybrezza / Tommee Tippee",
      kosten: "€200-400",
      snelheid: "1-2 minuten",
      voordelen: "All-in-one oplossing, vooraf ingesteld, handig 's nachts",
      nadelen: "Duur, soms afgestemd op specifieke merken poeder"
    },
    {
      methode: "Thermoskan voor onderweg",
      kosten: "€20-40",
      snelheid: "Direct",
      voordelen: "Handig op reis, houdt water lang warm, geen stopcontact nodig",
      nadelen: "Moet je thuis voorbereiden, beperkte hoeveelheid"
    }
  ]

  const faqSchema = [
    {
      question: 'Moet ik water koken voor flesvoeding in Nederland?',
      answer: 'Nee. Het Voedingscentrum geeft aan dat koud kraanwater in Nederland veilig is; je hoeft het niet te koken. De tekst op het pak is bedoeld voor landen waar de waterkwaliteit niet overal gegarandeerd is.'
    },
    {
      question: 'Mag ik warm water uit de kraan gebruiken?',
      answer: 'Nee. Gebruik koud kraanwater en warm de fles daarna op. Warm kraanwater kan meer metalen uit de leidingen bevatten.'
    },
    {
      question: 'Hoelang kan ik een klaargemaakte fles bewaren?',
      answer: 'Zet de fles meteen achterin de koelkast bij 4°C en gebruik hem binnen 8 uur. Restjes na een voeding gooi je altijd weg.'
    },
    {
      question: 'Op welke temperatuur geef ik de fles?',
      answer: 'Warm de fles op tot 30 à 35°C, niet warmer. Test met een druppeltje op de binnenkant van je pols: ongeveer even warm als je huid is precies goed.'
    },
    {
      question: 'Wanneer is koken of 70°C-water dan wél nodig?',
      answer: 'Bij premature, te lichte of zieke baby\'s op advies van de arts, op reis met onbekende waterkwaliteit, bij een kookadvies van je waterbedrijf, of bij loden leidingen (gebruik dan flessenwater voor babyvoeding).'
    }
  ]

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqSchema)) }} />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Kennisbank • Hygiëne & Bereiding</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Droplets className="w-6 h-6 mr-3 text-primary" />
                Water Koken voor Flesvoeding: Moet Dat in Nederland?
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Op veel pakken kunstvoeding staat dat je het water moet koken. Toch is dat in Nederland
                volgens het Voedingscentrum niet nodig: koud kraanwater is veilig voor je baby.
                Deze gids legt uit wanneer koken wél verstandig is en hoe je de fles stap voor stap veilig klaarmaakt.
              </p>
            </div>

            {/* Introduction */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Moet je water koken in Nederland?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kort antwoord: nee. Nederlands kraanwater voldoet aan strenge EU-eisen en wordt dagelijks
                gecontroleerd. Het Voedingscentrum adviseert daarom om de fles gewoon met koud kraanwater klaar
                te maken; koken is niet nodig. De tekst op de verpakking is bedoeld voor landen waar de
                waterkwaliteit niet overal gegarandeerd is. Meer over de complete bereiding lees je in onze <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="text-primary hover:underline font-medium">stap-voor-stap gids</Link>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Twee dingen worden vaak door elkaar gehaald. Het <strong>water</strong> in Nederland hoeft niet
                gekookt te worden. Het <strong>poeder</strong> is niet steriel: daarom adviseert de WHO
                internationaal om water van minstens 70°C te gebruiken, zodat eventuele bacteriën in het poeder
                (zoals Cronobacter) worden gedood. Voor gezonde, voldragen baby's in Nederland is dat volgens het
                Voedingscentrum niet nodig, maar bij extra kwetsbare baby's kan het wel worden aangeraden.
              </p>

              <h3 className="font-medium text-primary mb-3">Wanneer koken of 70°C-water wél verstandig is:</h3>
              <ul className="space-y-2">
                {wanneerWelKoken.map((reden, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700">{reden}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Situatie en advies */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Kraanwater of koken: wat geldt in jouw situatie?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Voor de meeste ouders in Nederland is koud kraanwater de eenvoudigste en veilige keuze.
                In een paar situaties is koken of flessenwater wel verstandig.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Situatie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Welk water</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Advies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {situatieAdvies.map((item, index) => (
                      <tr key={index} className={index % 2 === 1 ? "bg-white" : ""}>
                        <td className="border border-gray-300 px-4 py-2 font-medium">{item.situatie}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.water}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.advies}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Stap-voor-Stap Guide */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Thermometer className="w-5 h-5 mr-2" />
                De fles klaarmaken met kraanwater (Nederlandse methode)
              </h2>
              <p className="text-gray-600 mb-4">
                Zo maak je de fles snel en veilig klaar met koud kraanwater. Zie ook onze volledige <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="text-primary hover:underline font-medium">stap-voor-stap gids</Link>.
              </p>

              <div className="space-y-3">
                {bereidingsStappen.map((stap, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{stap}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-medium text-primary mb-4">Als je toch met gekookt water werkt (buitenland of op medisch advies)</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Volg dan de WHO-methode om ook bacteriën in het poeder te doden: kook het water, laat het
                  afkoelen tot ongeveer 70°C (binnen een half uur, zo'n 5 à 10 minuten na koken), voeg dan pas
                  het poeder toe en koel de fles daarna snel af tot drinktemperatuur.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-gray-700">Koken: 3-5 minuten</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span className="text-gray-700">Afkoelen tot ~70°C: 5-10 minuten</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4 text-primary" />
                    <span className="text-gray-700">Poeder toevoegen en mengen: 1 minuut</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-gray-700">Afkoelen tot drinktemperatuur: 10-15 minuten</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Kraanwater vs Flessenwater */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Nederlands kraanwater: uitstekende kwaliteit</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nederlands kraanwater voldoet aan strenge EU-kwaliteitseisen en wordt dagelijks gecontroleerd.
                Voor flesvoeding is het meestal een prima en goedkopere keuze dan flessenwater.
              </p>

              <h3 className="font-medium text-primary mb-3">Voordelen van Nederlands kraanwater:</h3>
              <ul className="space-y-2 mb-6">
                {kraanwaterVoordelen.map((voordeel, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{voordeel}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-3">Let op bij flessenwater en leidingen</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gebruik geen warm water uit de kraan, omdat de leidingen bij warm water meer metalen kunnen
                  afgeven. Heb je oude, loden leidingen, gebruik dan flessenwater dat op het etiket
                  geschikt is voor babyvoeding (laag in natrium en nitraat). Laat de kraan bij een nieuwe
                  aansluiting eerst even doorstromen.
                </p>
              </div>
            </section>

            {/* Veelgemaakte Fouten */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Veelgemaakte fouten vermijden
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Deze fouten kunnen de veiligheid van je baby in gevaar brengen en soms leiden tot <Link href="/kennisbank/problemen-oplossen/diarree-en-flesvoeding" className="text-primary hover:underline font-medium">diarree en andere problemen</Link>.
                Zorg dat je deze veelvoorkomende vergissingen vermijdt.
              </p>

              <div className="space-y-4">
                {veelgemaakteFouten.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-1">Fout: {item.fout}</h3>
                    <p className="text-gray-600 mb-1">Beter: {item.correct}</p>
                    <p className="text-gray-500 text-sm">Waarom: {item.gevaar}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Alternatieven */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Handige hulpmiddelen</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Koken is in Nederland niet nodig, maar sommige ouders willen graag warm water op een vaste
                temperatuur klaar hebben. Deze apparaten kunnen dat handiger maken.
              </p>

              <div className="space-y-4">
                {alternatieven.map((alt, index) => (
                  <div key={index} className="bg-default rounded-lg p-4">
                    <h3 className="font-medium text-primary mb-2">{alt.methode}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600 mb-1"><strong>Kosten:</strong> {alt.kosten}</div>
                        <div className="text-gray-600 mb-1"><strong>Snelheid:</strong> {alt.snelheid}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1"><strong>Voordelen:</strong> {alt.voordelen}</div>
                        <div className="text-gray-600"><strong>Nadelen:</strong> {alt.nadelen}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Warning Section */}
            <section className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-amber-800 mb-2">Let op: de belangrijkste veiligheidspunten</h3>
                  <div className="text-sm text-amber-700 leading-relaxed space-y-2">
                    <p>In Nederland is koud kraanwater veilig voor gezonde, voldragen baby's; koken is niet nodig.
                    Gebruik geen warm kraanwater.</p>
                    <p>Is je baby te vroeg geboren, heeft die een laag geboortegewicht of is die ziek? Overleg dan
                    met je arts of consultatiebureau; soms wordt water van 70°C aangeraden.</p>
                    <p>Warm de fles nooit warmer dan 30 à 35°C en test altijd op de binnenkant van je pols.
                    Bewaar een klaargemaakte fles maximaal 8 uur achterin de koelkast (4°C) en gooi restjes weg.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelgestelde Vragen</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Moet ik water koken voor flesvoeding in Nederland?</h3>
                  <p className="text-gray-600 text-sm">Nee. Het Voedingscentrum geeft aan dat koud kraanwater in Nederland veilig is; je hoeft het niet te koken. De tekst op het pak is bedoeld voor landen waar de waterkwaliteit niet overal gegarandeerd is.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Mag ik warm water uit de kraan gebruiken?</h3>
                  <p className="text-gray-600 text-sm">Nee. Gebruik koud kraanwater en warm de fles daarna op. Warm kraanwater kan meer metalen uit de leidingen bevatten.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Hoelang kan ik een klaargemaakte fles bewaren?</h3>
                  <p className="text-gray-600 text-sm">Zet de fles meteen achterin de koelkast bij 4°C en gebruik hem binnen 8 uur. Restjes na een voeding gooi je altijd weg.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Op welke temperatuur geef ik de fles?</h3>
                  <p className="text-gray-600 text-sm">Warm de fles op tot 30 à 35°C, niet warmer. Test met een druppeltje op de binnenkant van je pols: ongeveer even warm als je huid is precies goed.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Wanneer is koken of 70°C-water dan wél nodig?</h3>
                  <p className="text-gray-600 text-sm">Bij premature, te lichte of zieke baby's op advies van de arts, op reis met onbekende waterkwaliteit, bij een kookadvies van je waterbedrijf, of bij loden leidingen (gebruik dan flessenwater voor babyvoeding).</p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-primary">Hulp nodig met flesvoeding berekeningen?</div>
                    <div className="flex items-center justify-between"><span className="text-gray-600">Gebruik onze calculator voor gepersonaliseerd advies</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Affiliate Product Recommendations */}
            <BolProductSection
              productNames={[
                'baby water koker',
                'water filter baby',
                'gekookt baby water',
                'water thermometer'
              ]}
              title="Water Voorbereiding Producten"
              variant="card"
              maxProducts={4}
            />

            {/* Water & Bereiding Producten */}
            <AffiliateProductWidget
              pageId="hygiene-bereiding_water-koken-flesvoeding"
              title="Water & Bereiding Producten"
            />

            {/* Related Articles */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Gerelateerde Artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Fles bereiden stap-voor-stap →</div>
                  <div className="text-sm text-gray-600">De complete bereiding van a tot z</div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Eerste keer flesvoeding →</div>
                  <div className="text-sm text-gray-600">Beginnersgids met watervoorbereiding</div>
                </Link>
                <Link href="/kennisbank/problemen-oplossen/diarree-en-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Diarree en flesvoeding →</div>
                  <div className="text-sm text-gray-600">Oorzaken en preventie</div>
                </Link>
                <Link href="/" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Flesvoeding Calculator →</div>
                  <div className="text-sm text-gray-600">Bereken de juiste hoeveelheden</div>
                </Link>
              </div>
            </section>

          </div>
        </div>

        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}
