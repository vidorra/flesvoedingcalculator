import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Moon, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'Baby terugleggen na de nachtvoeding: zo blijft iedereen slapen',
  description: 'Praktische gids voor na de nachtvoeding: boertje, aankleden, de juiste temperatuur en rustig terugleggen zodat je baby snel weer doorslaapt.',
}

export default function BabyTerugleggenNaNachtvoedingPage() {
  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/slapende-baby-2.webp",
      alt: "Baby slaapt na de nachtvoeding",
      caption: "Rustig terugleggen na de voeding"
    },
    {
      src: "/top-view-sleeping-baby.webp",
      alt: "Baby veilig in bed na nachtvoeding",
      caption: "De juiste slaapomgeving helpt doorslapen"
    }
  ]

  const adTopics = ["Nachtvoeding", "Baby Slaap", "Slaapzak"]

  const teruglegStappen = [
    "Houd het licht gedimd en praat zacht of niet",
    "Laat je baby een boertje doen voordat je teruglegt",
    "Verschoon de luier alleen als die vol of vies is",
    "Check het nekje: lauwwarm en droog is goed",
    "Leg je baby wakker maar slaperig terug in bed",
    "Blijf even bij het bedje tot je baby rustig is"
  ]

  const temperatuurChecks = [
    "Kamertemperatuur tussen 16 en 20 graden",
    "Nekje voelt lauwwarm en droog aan",
    "Geen klamme haartjes of bezweet hoofdje",
    "Handjes mogen koel voelen, niet ijskoud"
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Kennisbank • Praktische Tips</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Moon className="w-6 h-6 mr-3 text-primary" />
                Baby terugleggen na de nachtvoeding
              </h1>
              <p className="text-gray-500 leading-relaxed">
                De voeding ging goed, maar dan: hoe leg je je baby zo terug dat iedereen snel weer slaapt?
                Met de juiste aanpak en de juiste temperatuur wordt terugleggen een stuk makkelijker.
              </p>
            </div>

            {/* Introductie */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed">
                Veel ouders krijgen de nachtvoeding zelf prima onder de knie, maar lopen vast op het
                moment daarna: een baby die klaarwakker wordt van het verschonen, te warm of te koud
                ligt, of alleen op de arm wil slapen. In dit artikel lees je hoe je de overgang van
                voeding naar slaap zo klein mogelijk maakt.
              </p>
            </section>

            {/* Stappenplan */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Stappenplan: van fles naar bed</h2>
              <ul className="space-y-2">
                {teruglegStappen.map((stap, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{stap}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-medium text-primary mb-3">Waarom wakker maar slaperig?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Een baby die in bed zelf in slaap valt, koppelt het bedje aan slapen. Valt je baby
                  elke keer op je arm in slaap, dan wordt terugleggen juist het moment van wakker
                  worden. Het hoeft niet perfect: elke keer dat het lukt is winst.
                </p>
              </div>
            </section>

            {/* Let op: veilig slapen */}
            <section className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Let op: veilig slapen</h3>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Leg je baby altijd op de rug te slapen, op een stevig matras zonder losse dekens, kussens of knuffels. Geef je baby nooit een fles mee in bed en laat de baby niet met de fles in slaap vallen: dat geeft kans op verslikken en op tandbederf. Voed je baby en leg hem daarna pas terug in bed.
                  </p>
                </div>
              </div>
            </section>

            {/* Temperatuur */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">De temperatuur bepaalt het doorslapen</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Een baby die te warm of te koud ligt, wordt sneller weer wakker. Juist na een
                nachtvoeding, als je baby even uit bed is geweest, loont een snelle check:
              </p>
              <ul className="space-y-2">
                {temperatuurChecks.map((check, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{check}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-6 mt-6">
                <p className="text-gray-600 leading-relaxed">
                  Twijfel je welke slaapzak en kleding bij de kamertemperatuur passen? Op onze
                  zustersite TOGWaarde.nl stel je de temperatuur in en zie je direct{' '}
                  <a href="https://togwaarde.nl" className="text-primary hover:underline font-medium">
                    welke slaapzak en kleding veilig zijn
                  </a>
                  . Handig om overdag alvast te checken, zodat je er &apos;s nachts niet over hoeft na te denken.
                </p>
              </div>
            </section>

            {/* Let op */}
            <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Let op</h3>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Leg je baby altijd op de rug te slapen, zonder losse dekens, kussens of knuffels
                    in het bedje. Gebruik voor baby&apos;s onder de 12 maanden een slaapzak in plaats
                    van een losse deken.
                  </p>
                </div>
              </div>
            </div>

            {/* Gerelateerde artikelen */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/praktische-tips/nachtvoeding-optimaliseren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Nachtvoeding optimaliseren →</div>
                  <div className="text-sm text-gray-600">Van 30 naar 10 minuten per nachtvoeding</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/flesvoeding-en-slapen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Flesvoeding en slapen →</div>
                  <div className="text-sm text-gray-600">Hoe voeding en slaap elkaar beïnvloeden</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/boertje-laten-tijdens-voeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Boertje laten tijdens de voeding →</div>
                  <div className="text-sm text-gray-600">Minder krampjes, rustiger terugleggen</div>
                </Link>
                <a href="https://togwaarde.nl/kennisbank/veilige-slaaptemperatuur/" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">De veilige slaaptemperatuur →</div>
                  <div className="text-sm text-gray-600">Op onze zustersite TOGWaarde.nl</div>
                </a>
              </div>
            </section>
          </div>
        </div>

        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}
