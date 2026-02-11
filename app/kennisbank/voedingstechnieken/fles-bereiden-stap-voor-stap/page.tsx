import Layout from '../../../../components/Layout'
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
            <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
              <Baby className="w-6 h-6 mr-3 text-primary" />
              Fles Bereiden Stap voor Stap: Perfect Flesvoeding Elke Keer
            </h1>
            
            <p className="text-gray-500 leading-relaxed">
              Complete handleiding voor veilige en correcte flesbereiding - van poeder tot klare fles
            </p>

            <section className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed">
                Een perfect bereide fles is meer dan alleen voeding - het is veiligheid, liefde en zorg in elke druppel. 
                Deze complete gids neemt je stap voor stap mee door het bereidingsproces, zodat je met vertrouwen 
                een veilige en voedzame fles kunt maken voor je baby.
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
                Proper hygiëne is cruciaal omdat baby's een nog ontwikkelend immuunsysteem hebben. 
                Elke stap in de bereiding moet met schone handen en schoon materiaal gebeuren.
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
                  <h3 className="font-medium text-primary mb-3">Stap 1: Water voorbereiden</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Gebruik altijd vers kraanwater (in Nederland veilig voor baby's)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Kook het water en laat afkoelen tot 70°C</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Stap 2: Poeder toevoegen</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Meet het poeder af met de bijgeleverde maatschep</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Voeg het poeder toe aan het water (niet andersom)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Stap 3: Mengen en afkoelen</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Schud de fles tot alle poeder is opgelost</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Laat afkoelen tot lichaamstemperatuur (37°C)</span>
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
                    <span className="text-gray-700 font-medium">Test altijd de temperatuur</span>
                    <p className="text-gray-600 text-sm">Druppel wat melk op je pols - het moet lauw aanvoelen</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <span className="text-gray-700 font-medium">Gebruik binnen 2 uur</span>
                    <p className="text-gray-600 text-sm">Bereide flesvoeding mag maximaal 2 uur bewaard worden</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <span className="text-gray-700 font-medium">Gooi resten weg</span>
                    <p className="text-gray-600 text-sm">Bewaar nooit restjes van een aangeroerde fles</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Fles Bereiding Producten */}
            <AffiliateProductWidget
              pageId="voedingstechnieken_fles-bereiden-stap-voor-stap"
              title="Fles Bereiding Producten"
            />

          </div>
        </div>

        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}