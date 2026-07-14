import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Sun, ArrowRight, CheckCircle, AlertTriangle, Calculator, Thermometer, Droplets } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding bij warm weer: moet je baby meer drinken?',
  description: 'Bij warm weer verliest je baby meer vocht. Lees hoe je veilig extra vocht geeft bij flesvoeding, waarom je de fles nooit met water verdunt, en hoe je uitdroging herkent. Advies per leeftijd.',
}

const sidebarImages = [
  {
    src: "/drinkende-baby.webp",
    alt: "Flesvoeding geven bij warm weer",
    caption: "Bij hitte vaker een fles op verzoek"
  },
  {
    src: "/baby.webp",
    alt: "Baby drinkt fles op een warme dag",
    caption: "Melk geeft voldoende vocht, ook in de zomer"
  },
  {
    src: "/mother_and_baby.webp",
    alt: "Baby koel houden tijdens hitte",
    caption: "Koel, schaduw en voldoende drinken"
  }
]

const adTopics = ["Baby Koeling Zomer", "Hydratatie Baby", "Warm Weer Baby", "Zomer Babyverzorging"]

export default function WarmWeerPage() {
  const onderZesMaanden = [
    'Bied de fles vaker aan, of geef gewoon op verzoek als je baby erom vraagt',
    'Verdun de flesvoeding nooit met extra water, houd de vaste verhouding aan',
    'Extra plat water is meestal niet nodig, de melk geeft al voldoende vocht',
    'Bij heel warm weer mag een paar theelepels (5 tot 10 ml) afgekoeld gekookt water tussen de voedingen door, nooit in plaats van een fles',
  ]

  const vanafZesMaanden = [
    'Bied naast de flesvoeding wat extra plat water aan in een tuitbeker',
    'Houd de melkvoedingen op peil, water vult de maag maar levert geen voedingsstoffen',
    'Een paar kleine slokjes verspreid over de dag werkt beter dan veel ineens',
  ]

  const koelTips = [
    'Voed op een koele, schaduwrijke plek en vermijd de felle zon',
    'Kleed je baby licht aan, een rompertje of luier is bij hitte vaak genoeg',
    'Let op de bewaartemperatuur van klaargemaakte voeding, in de hitte bederft die sneller',
    'Geef nooit een fles die al langer dan een half uur op kamertemperatuur of in de warmte heeft gestaan',
  ]

  const uitdrogingsSignalen = [
    'Minder natte luiers dan normaal (rond zes per dag is normaal, minder dan vier is een alarmsignaal)',
    'Donkergele, sterk ruikende urine',
    'Suf, slap of ongewoon prikkelbaar gedrag',
    'Een ingevallen fontanel (de zachte plek op het hoofdje)',
    'Droge mond en droge lippen',
    'Weinig of geen traantjes bij het huilen',
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Praktische Tips • Warm Weer</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Sun className="w-6 h-6 mr-3 text-primary" />
                Flesvoeding bij warm weer: moet je baby meer drinken?
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Op warme dagen verliest je baby meer vocht door zweten. Dat roept de vraag op of een
                baby met flesvoeding dan meer moet drinken. Het korte antwoord: ja, maar de manier
                waarop luistert nauw en verschilt per leeftijd.
              </p>
            </div>

            {/* Inleiding */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Waarom warm weer om aandacht vraagt</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Baby's hebben in verhouding een groter huidoppervlak dan volwassenen en kunnen hun
                temperatuur nog niet goed zelf regelen. Daardoor drogen ze bij hitte sneller uit. Het
                Nederlandse klimaat kent een paar handige ijkpunten: vanaf een zomerse dag (25°C) is
                het merkbaar warm, en vanaf een tropische dag (30°C) is extra alertheid op zijn plaats.
                Wanneer het{' '}
                <a href="https://www.rivm.nl/hitte/nationaal-hitteplan" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Nationaal Hitteplan</a>{' '}
                van het RIVM actief is, horen baby's tot de groep die extra aandacht nodig heeft.
              </p>
              <p className="text-gray-700 leading-relaxed">
                De goede manier om je baby meer vocht te geven is bijna altijd: vaker voeden. Niet
                meer water. Waarom dat onderscheid zo belangrijk is, lees je hieronder.
              </p>
            </section>

            {/* CRITICAL warning - amber */}
            <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-amber-800 mb-2">Let op: verdun de fles nooit met extra water</h3>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Doe bij warm weer nooit extra water bij de flesvoeding om die te "verdunnen". Te veel
                    water verstoort de zoutbalans van een baby en kan leiden tot watervergiftiging, een
                    zeldzame maar ernstige situatie. Houd altijd de verhouding water en poeder aan die op
                    de verpakking staat. Meer vocht geef je door vaker te voeden, niet door de fles aan te
                    lengen.
                  </p>
                </div>
              </div>
            </div>

            {/* Onder 6 maanden */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Droplets className="w-5 h-5 mr-2" />
                Baby's jonger dan 6 maanden
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Krijgt je baby alleen flesvoeding en is hij nog geen half jaar oud? Dan geeft de melk al
                voldoende vocht, ook op warme dagen. Extra water is in principe niet nodig en kan de
                eetlust verstoren, waardoor je baby minder voedingsstoffen binnenkrijgt. Geef in plaats
                daarvan vaker een fles.
              </p>
              <ul className="space-y-2">
                {onderZesMaanden.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Vanaf 6 maanden */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Droplets className="w-5 h-5 mr-2" />
                Baby's vanaf 6 maanden
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Eet je baby naast de flesvoeding al hapjes? Vanaf ongeveer zes maanden mag je wel wat
                extra plat water aanbieden, zeker bij warm weer. De melkvoedingen blijven de basis,
                het water is een aanvulling.
              </p>
              <ul className="space-y-2">
                {vanafZesMaanden.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Praktische koeltips */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Thermometer className="w-5 h-5 mr-2" />
                Praktische tips om je baby koel te houden
              </h2>
              <ul className="space-y-2">
                {koelTips.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                Lees ook hoe je voeding veilig bewaart in de hitte in onze gids over{' '}
                <Link href="/kennisbank/hygiene-bereiding/houdbaarheid-flesvoeding" className="text-primary hover:underline font-medium">houdbaarheid van flesvoeding</Link>.
              </p>
            </section>

            {/* Bewaarschema bij warm weer */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Thermometer className="w-5 h-5 mr-2" />
                Bewaarschema bij warm weer
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In de hitte bederft klaargemaakte voeding sneller en vermeerderen bacteriën zich rapper.
                Hanteer daarom bij warm weer de kortere kant van de bewaartijden en maak een fles het
                liefst vers vlak voor de voeding. Dit schema helpt je op weg:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Situatie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Bewaartijd bij warm weer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Vers bereide fles</td>
                      <td className="border border-gray-300 px-4 py-2">Direct geven. Laat de fles niet opwarmen in de zon of in de auto.</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Klaargemaakte fles op kamertemperatuur</td>
                      <td className="border border-gray-300 px-4 py-2">Binnen ongeveer 1 uur gebruiken, anders weggooien. Bij hitte korter aanhouden dan deze richtlijn.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Klaargemaakte fles in de koelkast (4°C)</td>
                      <td className="border border-gray-300 px-4 py-2">Maximaal 8 uur (ongebruikt). Bij warm weer is een koude koelkast extra belangrijk, bewaar de fles achterin bij 4°C.</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Fles waaruit is gedronken</td>
                      <td className="border border-gray-300 px-4 py-2">Restje altijd weggooien, zeker in de hitte. Het speeksel van je baby laat bacteriën in de melk groeien.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Onderweg</td>
                      <td className="border border-gray-300 px-4 py-2">Koeltas met koelelement gebruiken. Neem poeder en water apart mee en meng vers vlak voor de voeding.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Het volledige overzicht met alle bewaartijden en temperaturen vind je in onze gids over{' '}
                <Link href="/kennisbank/hygiene-bereiding/houdbaarheid-flesvoeding" className="text-primary hover:underline font-medium">houdbaarheid van flesvoeding</Link>.
              </p>
            </section>

            {/* Uitdroging herkennen */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Uitdroging herkennen</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Houd bij aanhoudende hitte goed in de gaten of je baby genoeg binnenkrijgt. De
                betrouwbaarste maatstaf zijn natte luiers: zes of meer per dag is een goed teken.
                Let daarnaast op deze signalen:
              </p>
              <ul className="space-y-2">
                {uitdrogingsSignalen.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-medium text-primary mb-3">Wanneer contact opnemen</h3>
                <p className="text-gray-700 leading-relaxed">
                  Twijfel je of zie je meerdere van deze signalen, neem dan contact op met het
                  consultatiebureau of je huisarts. Bij een ingevallen fontanel, een baby die niet meer
                  wil drinken of die suf en slap wordt, bel je direct je huisarts of de huisartsenpost.
                </p>
              </div>
            </section>

            {/* Borstvoeding korte noot */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">En bij borstvoeding?</h2>
              <p className="text-gray-700 leading-relaxed">
                Geef je (ook) borstvoeding? Dan geldt hetzelfde principe: leg vaker aan op verzoek.
                Moedermelk wordt bij warm weer vanzelf wat waterrijker. Zorg dan ook goed voor jezelf
                en drink zelf ruim extra, luister daarbij vooral naar je dorst.
              </p>
            </section>

            {/* Bronnen */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Bronnen</h2>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Voedingscentrum, over flesvoeding en water leren drinken vanaf 6 maanden
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    NHS (Healthier Together), Hot Weather and Feeding Your Baby
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    RIVM, Nationaal Hitteplan en kwetsbare groepen
                  </span>
                </li>
              </ul>
              <p className="text-gray-500 text-sm mt-4">
                Dit artikel is algemene voorlichting en vervangt geen medisch advies. Twijfel je over je
                eigen situatie, raadpleeg dan het consultatiebureau of je huisarts.
              </p>
            </section>

            {/* Handige producten */}
            <AffiliateProductWidget
              pageId="praktische-tips_flesvoeding-bij-warm-weer"
              title="Handige producten"
            />

            {/* Gerelateerde artikelen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/problemen-oplossen/baby-drinkt-niet-genoeg" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Baby drinkt niet genoeg →</div>
                  <div className="text-sm text-gray-600">Signalen en wat je kunt doen</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/houdbaarheid-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Houdbaarheid flesvoeding →</div>
                  <div className="text-sm text-gray-600">Veilig bewaren, ook in de hitte</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/flesvoeding-op-vakantie" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Flesvoeding op vakantie →</div>
                  <div className="text-sm text-gray-600">Voeden in een warm klimaat</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/water-koken-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Water koken voor de fles →</div>
                  <div className="text-sm text-gray-600">Veilig water voor de bereiding</div>
                </Link>
                <a href="https://togwaarde.nl/kennisbank/baby-slapen-zomer/" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Baby veilig laten slapen in de zomer →</div>
                  <div className="text-sm text-gray-600">Op onze zustersite TOGWaarde.nl</div>
                </a>
              </div>
            </div>

            {/* Calculator CTA */}
            <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Bereken de juiste hoeveelheid voeding
              </h2>
              <p className="text-white/90 mb-4">
                Onze calculator berekent hoeveel flesvoeding je baby per dag nodig heeft, op basis van
                gewicht en leeftijd. Bij warm weer toont de calculator automatisch een melding met advies.
              </p>
              <Link
                href="/"
                className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-medium py-3 px-6 rounded-xl transition-all inline-flex items-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Naar de calculator
              </Link>
            </div>

          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
        </div>
      </div>
    </Layout>
  )
}
