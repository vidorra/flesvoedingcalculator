import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Milk, ArrowRight, CheckCircle, AlertTriangle, Calculator, Heart, Clock } from 'lucide-react'

export const metadata = {
  title: 'Combivoeding: Hoeveel Flesvoeding naast Borstvoeding? (2026)',
  description: 'Borstvoeding en flesvoeding combineren: bereken hoeveel ml je bijgeeft, hoe je veilig voedingen vervangt en hoe je je melkproductie op peil houdt. Met rekenvoorbeelden.',
}

const sidebarImages = [
  {
    src: "/borstvoeding-3.webp",
    alt: "Moeder geeft borstvoeding",
    caption: "Borst en fles zijn goed te combineren"
  },
  {
    src: "/flesvoeding-door-mama.webp",
    alt: "Moeder geeft flesvoeding",
    caption: "Een borstvoeding telt als gewone voeding"
  },
  {
    src: "/baby.webp",
    alt: "Tevreden baby na de voeding",
    caption: "Kijk naar je baby, niet alleen naar de tabel"
  }
]

const adTopics = ["Combivoeding", "Borstvoeding en Fles", "Kolven", "Babyvoeding"]

export default function CombivoedingPage() {
  const rekenStappen = [
    'Bereken de totale dagbehoefte: 150 ml per kg lichaamsgewicht (de gewone richtlijn)',
    'Deel dit door het totale aantal voedingen per dag, borst en fles samen',
    'Dat is de hoeveelheid per voeding. Een borstvoeding telt gewoon mee als voeding',
    'Maak alleen voor de flesvoedingen een fles klaar, elk met die normale hoeveelheid',
  ]

  const vervangStappen = [
    'Vervang één voeding per keer en wacht een paar dagen voordat je de volgende vervangt',
    'Begin met de op één na laatste voeding van de dag',
    'Houd de ochtendvoeding het langst aan, dan is de melkproductie meestal het hoogst',
    'Geef borst- en flesvoeding bij voorkeur als aparte voedingen, niet door elkaar in één voedingsmoment',
  ]

  const productieSignalen = [
    'Minimaal zes natte luiers per dag',
    'Goede groei volgens het consultatiebureau',
    'Tevreden en alert tussen voedingen door',
    'Regelmatige ontlasting die past bij de voeding',
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Basis Flesvoeding • Combivoeding</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-primary" />
                Combivoeding: Hoeveel Flesvoeding naast Borstvoeding?
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Veel ouders combineren borstvoeding met flesvoeding, bijvoorbeeld bij het werken,
                een lage melkproductie of gewoon omdat het zo past. De grote vraag is dan: hoeveel
                flesvoeding geef je erbij? Het rekenwerk is eenvoudiger dan je denkt.
              </p>
            </div>

            {/* Inleiding */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Wanneer kun je gaan combineren?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Combivoeding werkt het best als de borstvoeding goed op gang is. Dat is meestal
                wanneer je baby vier tot zes weken oud is. Start je eerder met bijvoeden, overleg
                dan met de verloskundige, kraamzorg of een lactatiekundige, zodat de melkproductie
                niet onbedoeld terugloopt.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Combineren kan zo lang je wilt: sommige ouders vervangen één voeding, anderen
                bouwen langzaam af richting volledige flesvoeding. Hoe geleidelijker, hoe soepeler
                het voor je lichaam en je baby verloopt.
              </p>
            </section>

            {/* Rekenwerk */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Zo reken je het uit
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Het principe: een borstvoeding telt als een gewone voeding. Je hoeft dus niet te
                weten hoeveel milliliter je baby uit de borst drinkt.
              </p>
              <ul className="space-y-2 mb-6">
                {rekenStappen.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-medium text-primary mb-3">Rekenvoorbeeld</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Een baby van 5 kg drinkt ongeveer 750 ml per dag (5 × 150 ml). Bij 7 voedingen per
                dag is dat ongeveer 105 ml per voeding. Geef je 3 borstvoedingen, dan maak je de
                andere 4 voedingen klaar als fles van elk ongeveer 105 ml.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Borstvoedingen</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Flesvoedingen</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Fles klaarmaken (bij 5 kg, 7 voedingen)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">1</td>
                      <td className="border border-gray-300 px-4 py-2">6</td>
                      <td className="border border-gray-300 px-4 py-2">6 × 105 ml</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">3</td>
                      <td className="border border-gray-300 px-4 py-2">4</td>
                      <td className="border border-gray-300 px-4 py-2">4 × 105 ml</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">5</td>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2">2 × 105 ml</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                In onze <Link href="/v2" className="text-primary hover:underline font-medium">nieuwe calculator</Link>{' '}
                vink je &quot;Ik geef ook borstvoeding&quot; aan en zie je direct hoeveel flesvoedingen je klaarmaakt.
              </p>
            </section>

            {/* Let op: bijvoeden na de borst */}
            <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-amber-800 mb-2">Let op: hoeveel je baby uit de borst drinkt weet je niet exact</h3>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    De berekening is een richtlijn, geen weegschaal. Kijk vooral naar je baby: minimaal
                    zes natte luiers per dag en een goede groeicurve bij het consultatiebureau zeggen
                    meer dan een tabel. Geef je na een borstvoeding nog een klein beetje fles bij
                    (bijvoorbeeld 30 tot 60 ml), doe dat op verzoek en dwing nooit een fles leeg.
                    Twijfel je over de melkproductie of de groei, schakel dan een lactatiekundige of
                    het consultatiebureau in.
                  </p>
                </div>
              </div>
            </div>

            {/* Voedingen vervangen */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Voedingen vervangen zonder je melkproductie te verliezen
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Je melkproductie past zich aan de vraag aan. Vervang je te snel te veel voedingen,
                dan daalt de productie sneller dan je misschien wilt. Zo houd je het in balans:
              </p>
              <ul className="space-y-2 mb-4">
                {vervangStappen.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-medium text-primary mb-3">Daalt de productie te hard?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pak dan tijdelijk de laatst vervallen borstvoeding weer op. Vaker aanleggen
                  stimuleert de productie. Ook kolven op de momenten dat je baby een fles krijgt
                  helpt om de productie op peil te houden, bijvoorbeeld op werkdagen.
                </p>
              </div>
            </section>

            {/* Signalen dat het goed gaat */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Milk className="w-5 h-5 mr-2" />
                Zo zie je dat je baby genoeg binnenkrijgt
              </h2>
              <ul className="space-y-2">
                {productieSignalen.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                Drinkt je baby structureel weinig? Lees dan{' '}
                <Link href="/kennisbank/problemen-oplossen/baby-drinkt-niet-genoeg" className="text-primary hover:underline font-medium">baby drinkt niet genoeg</Link>.
              </p>
            </section>

            {/* Bronnen */}
            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Bronnen</h2>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Voedingscentrum, over borstvoeding en flesvoeding combineren en de opbouw van melkproductie
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    La Leche League Nederland, over moedermelk combineren met kunstvoeding
                  </span>
                </li>
              </ul>
              <p className="text-gray-500 text-sm mt-4">
                Dit artikel is algemene voorlichting en vervangt geen medisch advies. Overleg bij
                twijfel met het consultatiebureau, je verloskundige of een lactatiekundige.
              </p>
            </section>

            {/* Affiliate widget */}
            <AffiliateProductWidget
              pageId="basis-flesvoeding_combivoeding-borstvoeding-bijvoeden"
              title="Handig bij Combivoeding"
            />

            {/* Gerelateerde artikelen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/basis-flesvoeding/overstappen-van-borst-naar-fles" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Overstappen van borst naar fles →</div>
                  <div className="text-sm text-gray-600">Volledig overstappen, stap voor stap</div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/flesvoeding-vs-borstvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Flesvoeding vs borstvoeding →</div>
                  <div className="text-sm text-gray-600">De verschillen op een rij</div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/baby-weigert-de-fles" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Baby weigert de fles →</div>
                  <div className="text-sm text-gray-600">Als de fles naast de borst lastig gaat</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Voedingsritme opbouwen →</div>
                  <div className="text-sm text-gray-600">Structuur in borst- en flesmomenten</div>
                </Link>
              </div>
            </div>

            {/* Calculator CTA */}
            <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Bereken je combivoeding
              </h2>
              <p className="text-white/90 mb-4">
                Vul gewicht, leeftijd en het aantal borstvoedingen in en zie direct hoeveel
                flesvoedingen je klaarmaakt en van hoeveel ml.
              </p>
              <Link
                href="/v2"
                className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-medium py-3 px-6 rounded-xl transition-all inline-flex items-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Naar de calculator met combivoeding-optie
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
