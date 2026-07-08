import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Baby } from 'lucide-react'

export const metadata = {
  title: 'Fles Bereiden Stap voor Stap: Perfect Flesvoeding Elke Keer',
  description: 'Complete handleiding voor veilige en correcte flesbereiding - van poeder tot klare fles. Nederlandse veiligheidsnormen en stap-voor-stap instructies.',
  keywords: 'fles bereiden, flesvoeding maken, baby fles klaarmaken, veilig poeder bereiden, stap voor stap fles',
}

export default function FlesBerenStapVoorStap() {
  const sidebarImages = [
    {
      src: "/flesvoeding-close-up.webp",
      alt: "Fles bereiding stap voor stap close-up",
      caption: "Perfecte bereiding"
    },
    {
      src: "/sterilisator-babyflessen.webp", 
      alt: "Veilige flesbereiding met sterilisator",
      caption: "Veiligheid voorop"
    },
    {
      src: "/difrax-fles-kunstvoeding.webp",
      alt: "Flesvoeding hulpmiddelen en spullen",
      caption: "Benodigde spullen"
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
          <div className="space-y-6">
            
            <div className="text-sm text-gray-500 mb-2">Voedingstechnieken • Bereiding</div>
            <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
              <Baby className="w-6 h-6 mr-3 text-primary" />
              Fles Bereiden Stap voor Stap: Perfect Flesvoeding Elke Keer
            </h1>
            
            <p className="text-gray-500 leading-relaxed">
              Complete handleiding voor veilige en correcte flesbereiding, van poeder tot klare fles
            </p>

            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed">
                Een perfect bereide fles is meer dan alleen voeding: het is veiligheid, liefde en zorg in elke druppel.
                Deze complete gids neemt je stap voor stap mee door het bereidingsproces, van het klaarmaken van het <Link href="/kennisbank/hygiene-bereiding/water-koken-flesvoeding" className="text-primary hover:underline font-medium">water voor de fles</Link> tot
                <Link href="/kennisbank/hygiene-bereiding/flessen-steriliseren" className="text-primary hover:underline font-medium"> het steriliseren van flessen</Link>,
                zodat je met vertrouwen een veilige en voedzame fles kunt maken voor je baby.
              </p>
            </section>

            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-6">Voorbereiding: De basis van veilige flesbereiding</h2>
              
              <p className="text-gray-700 mb-6">
                Goede voorbereiding is het fundament van veilige flesbereiding. Door systematisch te werk te gaan, 
                voorkom je fouten en garandeer je de beste voeding voor je baby.
              </p>

              <h3 className="font-medium text-primary mb-4">Hygiëne: Het fundament</h3>
              <p className="text-gray-700 mb-4">
                Goede hygiëne is cruciaal omdat baby's een nog ontwikkelend immuunsysteem hebben.
                Was eerst je handen met water en zeep, en werk verder met schone flessen en een schoon werkblad.
                Elke stap in de bereiding moet met schone handen en schoon materiaal gebeuren.
                Lees meer over <Link href="/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven" className="text-primary hover:underline font-medium">de eerste keer flesvoeding geven</Link> voor complete voorbereiding.
              </p>
            </div>

            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Stap-voor-stap Bereiding</h2>
              
              <p className="text-gray-700 mb-6">
                Volg deze stappen nauwkeurig voor een perfect bereide fles. Consistentie in je werkwijze 
                zorgt voor betrouwbare resultaten en wordt al snel een automatisme.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Stap 1: Handen wassen en spullen klaarzetten</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Was je handen met water en zeep</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Zet een schone fles, speen en de flesvoeding klaar op een schoon werkblad</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Stap 2: Water voorbereiden</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Gebruik vers, koud kraanwater. In Nederland hoef je dit niet te koken</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Gebruik nooit warm kraanwater, dat kan te veel koper of lood bevatten</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Verwarm het water tot ongeveer 30 tot 35°C, bijvoorbeeld in een flessenwarmer of au bain-marie</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Stap 3: Poeder toevoegen en mengen</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Doe eerst de juiste hoeveelheid water in de fles, daarna het poeder</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Meet het poeder af met de bijgeleverde maatschep, afgestreken en niet aangedrukt</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Schud de fles tot alle poeder is opgelost</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Stap 4: Temperatuur controleren</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Druppel wat melk op de binnenkant van je pols, het moet lauw aanvoelen (ongeveer 30 tot 35°C)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Voelt de melk te warm, laat de fles dan even afkoelen voor je hem geeft</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veiligheidstips</h2>
              
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <span className="text-gray-700 font-medium">Test altijd de temperatuur op je pols</span>
                    <p className="text-gray-600 text-sm">Druppel wat melk op de binnenkant van je pols, het moet lauw aanvoelen (ongeveer 30 tot 35°C)</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <span className="text-gray-700 font-medium">Maak de fles het liefst vers klaar</span>
                    <p className="text-gray-600 text-sm">Geef een net bereide fles direct. Wil je vooruit werken, bewaar de fles dan meteen achterin de koelkast (bij 4°C) en maximaal 8 uur</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <span className="text-gray-700 font-medium">Gooi resten weg</span>
                    <p className="text-gray-600 text-sm">Bewaar nooit restjes van een fles waaruit je baby heeft gedronken, gooi die na de voeding weg</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Fles Bereiding Producten */}
            <AffiliateProductWidget
              pageId="voedingstechnieken_fles-bereiden-stap-voor-stap"
              title="Fles Bereiding Producten"
            />

            {/* Gerelateerde artikelen */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde Artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/hygiene-bereiding/water-koken-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Water koken flesvoeding →</div>
                  <div className="text-sm text-gray-600">De juiste temperatuur en techniek</div>
                </Link>
                <Link href="/kennisbank/hygiene-bereiding/flessen-steriliseren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Flessen steriliseren →</div>
                  <div className="text-sm text-gray-600">Veilige methoden voor hygiëne</div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Eerste keer flesvoeding geven →</div>
                  <div className="text-sm text-gray-600">Complete gids voor beginners</div>
                </Link>
                <Link href="/" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Flesvoeding Calculator →</div>
                  <div className="text-sm text-gray-600">Bereken de juiste hoeveelheden</div>
                </Link>
                <Link href="/schepjes-calculator" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Schepjes calculator →</div>
                  <div className="text-sm text-gray-600">Hoeveel schepjes per ml (1 per 30 ml)</div>
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