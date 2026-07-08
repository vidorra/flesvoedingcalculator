import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Milk, AlertTriangle, GlassWater, Baby } from 'lucide-react'
import { generateFAQSchema } from '../../../../lib/structured-data'

export const metadata = {
  title: 'Hoeveel melk heeft een dreumes nodig? Koemelk & peutermelk',
  description: 'Hoeveel melk heeft een dreumes of peuter van 1-2 jaar per dag nodig? Ontdek de richthoeveelheid, het verschil tussen volle koemelk en peutermelk (met suiker) en hoe je de ochtendfles afbouwt.',
  keywords: ['hoeveel melk dreumes', 'melk peuter', 'peutermelk suiker', 'koemelk vanaf 1 jaar', 'volle melk dreumes', 'ochtendfles afbouwen', 'peutermelk nodig'],
  alternates: { canonical: '/kennisbank/soorten-flesvoeding/melk-voor-dreumes-en-peuter/' },
}

const sidebarImages = [
  {
    src: "/drinkende-baby.webp",
    alt: "Dreumes drinkt melk uit een beker",
    caption: "Vanaf 1 jaar mag volle koemelk"
  },
  {
    src: "/close-up-baby.webp",
    alt: "Peuter met een beker melk",
    caption: "Ongeveer 300 ml melk per dag is voldoende"
  },
  {
    src: "/mother_and_baby.webp",
    alt: "Ouder en dreumes bij het drinken",
    caption: "Rustig afbouwen van de fles naar de beker"
  }
]

const adTopics = ["Melk Dreumes", "Peutermelk", "Koemelk 1 Jaar", "Beker Overgang"]

export default function MelkVoorDreumesEnPeuterPage() {
  const melkVergelijking = [
    { kenmerk: 'Toegevoegde suikers', koemelk: 'Nee, alleen natuurlijke melksuiker (lactose)', peutermelk: 'Vaak wel, plus aroma\'s' },
    { kenmerk: 'Extra vitamines/mineralen', koemelk: 'Van nature, geen toevoeging', peutermelk: 'Verrijkt met o.a. ijzer en vitamine D' },
    { kenmerk: 'Prijs', koemelk: 'Goedkoop', peutermelk: 'Duurder' },
    { kenmerk: 'Wanneer zinvol', koemelk: 'Voor de meeste dreumesen prima', peutermelk: 'Alleen bij zeer selectieve eters, in overleg' }
  ]

  const afbouwStappen = [
    'Vervang eerst de fles overdag door een (open) beker of tuitbeker bij de maaltijd.',
    'Bied de ochtendmelk aan in een beker in plaats van een fles.',
    'Geef melk zoveel mogelijk bij een eetmoment, niet als aparte drinkfles tussendoor.',
    'Bouw de avondfles als laatste af, dat is voor veel kinderen het lastigste moment.'
  ]

  const teVeelMelk = [
    'Minder trek in vaste voeding en gevarieerde maaltijden',
    'Verminderde ijzeropname, wat op termijn ijzertekort kan geven',
    'Een vol gevoel waardoor andere voedingsstoffen worden gemist'
  ]

  const faqData = [
    {
      question: 'Hoeveel melk mag een dreumes per dag?',
      answer: 'Ongeveer 300 ml melk of melkproducten per dag is voor een dreumes van 1 tot 2 jaar meestal voldoende, verdeeld over ongeveer 2 porties van 150 ml. Zie dit als een richtlijn, niet als een strikte regel. Meer dan ongeveer 500 ml melk per dag kan de eetlust en de ijzeropname verstoren.'
    },
    {
      question: 'Is peutermelk nodig of zit er te veel suiker in?',
      answer: 'Peutermelk is optioneel en voor de meeste kinderen niet nodig. Bij een gevarieerd dieet zijn tekorten in Nederland zeldzaam, dus gewone volle melk volstaat en is goedkoper. Veel peutermelk bevat toegevoegde suikers en aroma\'s, wat een reden is om er kritisch naar te kijken.'
    },
    {
      question: 'Mag mijn dreumes \'s ochtends nog een fles?',
      answer: 'Een ochtendfles is niet fout, maar rond 1 jaar is het advies om de fles geleidelijk af te bouwen richting de beker. Dat is beter voor de tanden en de zuigbehoefte. Bouw de fles stap voor stap af en geef de melk bij voorkeur bij een eetmoment.'
    },
    {
      question: 'Mag volle koemelk vanaf 1 jaar?',
      answer: 'Ja, vanaf 12 maanden mag je dreumes gewone volle koemelk drinken als onderdeel van een gevarieerd dieet. Volle melk heeft de voorkeur boven halfvolle of magere melk, omdat jonge kinderen de vetten en energie goed kunnen gebruiken.'
    },
    {
      question: 'Hoeveel suiker zit er in peutermelk?',
      answer: 'Dat verschilt per merk, maar veel peutermelk bevat naast de natuurlijke melksuiker ook toegevoegde suikers en soms aroma\'s. Gewone volle koemelk bevat alleen de van nature aanwezige melksuiker (lactose) en geen toegevoegde suikers. Lees altijd het etiket als je wilt vergelijken.'
    }
  ]

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqData)) }} />
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Soorten Flesvoeding • Dreumes & Peuter</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Milk className="w-6 h-6 mr-3 text-primary" />
                Hoeveel melk heeft een dreumes of peuter nodig?
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Rond het eerste jaar verandert er veel: je kind eet mee met het gezin en melk wordt een aanvulling in plaats van de hoofdvoeding.
                In dit artikel lees je hoeveel melk een dreumes of peuter van 1 tot 2 jaar per dag nodig heeft, wat het verschil is tussen volle koemelk en peutermelk (inclusief het suikergehalte) en hoe je een ochtendfles rustig afbouwt.
              </p>
            </div>

            {/* Hoeveel melk per dag */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Hoeveel melk per dag voor een dreumes?</h2>

              <p className="text-gray-700 mb-4">
                Voor een dreumes of peuter van 1 tot 2 jaar is ongeveer <strong>300 ml melk of melkproducten per dag</strong> meestal voldoende.
                Denk aan zo&apos;n <strong>2 porties van 150 ml</strong>, verdeeld over de dag. Melkproducten zoals yoghurt of vla tellen hierin mee.
                Zie dit als een richtlijn, niet als een strikte regel: het ene kind drinkt wat meer, het andere wat minder.
              </p>

              <p className="text-gray-700 mb-4">
                Vanaf 12 maanden mag de melk <strong>gewone volle koemelk</strong> zijn, als onderdeel van een gevarieerd dieet.
                Volle melk heeft de voorkeur boven halfvolle of magere melk, omdat jonge kinderen de vetten en energie goed kunnen gebruiken.
              </p>

              <h3 className="font-medium text-primary mb-3">Waarom niet te veel melk?</h3>
              <p className="text-gray-700 mb-4">
                Meer dan ongeveer <strong>500 ml melk per dag</strong> is voor een dreumes vaak te veel. Melk is voedzaam, maar bij grote hoeveelheden kan het andere voeding verdringen. Te veel melk kan zorgen voor:
              </p>
              <ul className="space-y-2">
                {teVeelMelk.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Koemelk vs peutermelk */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Koemelk of peutermelk: en wat met de suiker?</h2>

              <p className="text-gray-700 mb-4">
                Peutermelk (ook wel groeimelk of nummer 3 genoemd) wordt aangeprezen als een tussenstap tussen opvolgmelk en gewone melk.
                In de praktijk is peutermelk <strong>optioneel</strong>. Bij een gevarieerd dieet zijn voedingstekorten in Nederland zeldzaam, dus voor de meeste kinderen volstaat gewone volle melk. Die is bovendien goedkoper.
              </p>

              <p className="text-gray-700 mb-4">
                Een belangrijk aandachtspunt is het <strong>suikergehalte</strong>: veel peutermelk bevat naast de van nature aanwezige melksuiker (lactose) ook <strong>toegevoegde suikers</strong> en soms aroma&apos;s.
                Gewone volle koemelk bevat alleen de natuurlijke melksuiker en geen toegevoegde suikers. Wil je merken vergelijken, lees dan altijd het etiket.
              </p>

              <h3 className="font-medium text-primary mb-3">Volle koemelk vs peutermelk</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Kenmerk</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Volle koemelk</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Peutermelk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {melkVergelijking.map((rij, index) => (
                      <tr key={index} className={index % 2 === 1 ? "bg-white" : ""}>
                        <td className="border border-gray-300 px-4 py-2 font-medium">{rij.kenmerk}</td>
                        <td className="border border-gray-300 px-4 py-2">{rij.koemelk}</td>
                        <td className="border border-gray-300 px-4 py-2">{rij.peutermelk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mt-4">
                Peutermelk kan zinvol zijn bij een <strong>zeer selectieve eter</strong>, en dan het liefst in overleg met het consultatiebureau.
                Voor de meeste dreumesen die gevarieerd eten, is gewone volle melk een prima en voordelige keuze. Wil je meer lezen over de nummers 1, 2 en 3, bekijk dan het <Link href="/kennisbank/soorten-flesvoeding" className="text-primary hover:underline font-medium">overzicht van soorten flesvoeding</Link>.
              </p>
            </div>

            {/* Ochtendfles bij dreumes */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <GlassWater className="w-5 h-5 mr-2" />
                Hoort de (ochtend)fles nog bij een dreumes?
              </h2>

              <p className="text-gray-700 mb-4">
                Veel dreumesen van 12 tot 24 maanden drinken &apos;s ochtends nog een fles melk. Dat is <strong>niet fout</strong>, maar rond 1 jaar is het advies om de fles geleidelijk af te bouwen richting de beker.
                Uit een beker drinken is beter voor de tanden en helpt de zuigbehoefte langzaam los te laten.
              </p>

              <h3 className="font-medium text-primary mb-3">Zo bouw je de fles rustig af</h3>
              <ul className="space-y-2">
                {afbouwStappen.map((stap, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{stap}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 mt-4">
                Wil je de volledige stapsgewijze aanpak, van tuitbeker tot open beker? Lees dan ons uitgebreide artikel over de <Link href="/kennisbank/voedingstechnieken/overgang-naar-beker" className="text-primary hover:underline font-medium">overgang naar de beker</Link>.
              </p>
            </div>

            {/* Let op / medisch voorbehoud */}
            <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Let op</h3>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    De hoeveelheden in dit artikel zijn algemene richtlijnen. Maak je je zorgen over de groei, eet je kind erg selectief of twijfel je over voedingstekorten?
                    Overleg dan met het consultatiebureau of de huisarts. Zij kunnen meekijken naar de situatie van jouw kind.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Veelgestelde Vragen (FAQ)</h2>

              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-2">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                    {index < faqData.length - 1 && (
                      <div className="border-b border-gray-200 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Baby className="w-5 h-5 mr-2" />
                Gerelateerde Artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/kennisbank/soorten-flesvoeding"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Soorten flesvoeding overzicht →</div>
                  <div className="text-sm text-gray-600">Startvoeding, opvolgmelk en peutermelk vergeleken</div>
                </Link>
                <Link
                  href="/kennisbank/voedingstechnieken/overgang-naar-beker"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Overgang naar de beker →</div>
                  <div className="text-sm text-gray-600">Bouw de fles stap voor stap af naar een beker</div>
                </Link>
                <Link
                  href="/kennisbank/soorten-flesvoeding/wanneer-overstappen-opvolgmelk"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Wanneer overstappen naar opvolgmelk →</div>
                  <div className="text-sm text-gray-600">De juiste timing voor nummer 2</div>
                </Link>
                <Link
                  href="/"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="font-medium text-primary">Flesvoeding Calculator →</div>
                  <div className="text-sm text-gray-600">Bereken de juiste hoeveelheden voor jouw kind</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}
