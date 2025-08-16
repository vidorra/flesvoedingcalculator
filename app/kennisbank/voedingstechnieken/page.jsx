'use client'
import Layout from '../../../components/Layout'
import Link from 'next/link'
import { Wrench, ArrowRight, Home, CheckCircle, AlertTriangle, Heart } from 'lucide-react'

export const metadata = {
  title: 'Fles Klaarmaken & Geven: Stap-voor-Stap Guide + Video Tips',
  description: 'Leer hoe je veilig flesvoeding klaarmaakt en geeft. ✓ Juiste temperatuur ✓ Houding ✓ Steriliseren ✓ Responsive feeding technieken.',
}

export default function VoedingstechniekenPage() {
  const preparationSteps = [
    'Was je handen grondig met zeep',
    'Check houdbaarheidsdatum van het poeder',
    'Kook water en laat afkoelen tot 40°C (of gebruik flessenwamer)',
    'Meet exact het juiste aantal ml water af',
    'Voeg poeder toe met bijgeleverde maatschep (afgestreken, niet aangedrukt)',
    'Sluit fles en schud krachtig tot poeder opgelost',
    'Controleer temperatuur op pols (moet lauw aanvoelen)'
  ]

  const babyPosition = [
    'Half rechtop (45 graden hoek)',
    'Hoofd iets hoger dan lichaam',
    'Nek recht voor slikken',
    'Nooit plat liggend voeden'
  ]

  const bottlePosition = [
    'Speen volledig gevuld met melk',
    'Geen lucht in speen (voorkomt krampen)',
    'Fles schuin houden',
    'Tempo laten bepalen door baby'
  ]

  const responsiveFeeding = [
    'Let op hongersignalen: zoekbewegingen, sabbelen op vuist',
    'Stop bij verzadiging: hoofdje wegdraaien, speen loslaten',
    'Geen dwang: baby bepaalt hoeveelheid',
    'Pauzes inlassen: voor boertje halverwege',
    'Oogcontact maken: belangrijk voor binding'
  ]

  const bondingTips = [
    'Huid-op-huid contact',
    'Oogcontact maken',
    'Rustig praten/zingen',
    'Telefoon wegleggen',
    'Voedingsmoment niet haasten',
    'Knuffelen na voeding'
  ]

  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ArrowRight className="w-4 h-4" />
          <Link href="/kennisbank" className="hover:text-primary">Kennisbank</Link>
          <ArrowRight className="w-4 h-4" />
          <span className="text-primary">Voedingstechnieken</span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Wrench className="w-6 h-6 mr-3 text-primary" />
            Voedingstechnieken
          </h1>
          <p className="text-gray-600">
            Leer hoe je flesvoeding correct bereidt en geeft voor de beste ervaring voor jou en je baby.
          </p>
        </div>

        {/* Preparation Steps */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Fles klaarmaken - Stap voor stap</h2>
          <div className="space-y-3">
            {preparationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Baby Position */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">De juiste houding - Voor de baby</h2>
            <div className="space-y-2">
              {babyPosition.map((position, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{position}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottle Position */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">De juiste houding - Voor de fles</h2>
            <div className="space-y-2">
              {bottlePosition.map((position, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{position}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Feeding */}
        <div className="bg-green-50 rounded-2xl border border-green-200 p-6">
          <h2 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Responsive Feeding
          </h2>
          <p className="text-green-700 mb-4">Responsive feeding betekent dat je op de signalen van je baby let:</p>
          <div className="space-y-2">
            {responsiveFeeding.map((tip, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-700 text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sterilization */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Steriliseren van flessen</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                Tot 6 maanden VERPLICHT:
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Uitkoken 10 minuten in pan</li>
                <li>• Stoomsterilisator (makkelijkst)</li>
                <li>• Koude sterilisatie met tabletten</li>
                <li>• Magnetron sterilisator</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Na 6 maanden:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Goed wassen in heet sop voldoende</li>
                <li>• Extra steriliseren bij ziekte</li>
                <li>• Spenen blijven steriliseren</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Binding during feeding */}
        <div className="bg-pink-50 rounded-2xl border border-pink-200 p-6">
          <h2 className="text-lg font-semibold text-pink-800 mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Binding tijdens flesvoeding
          </h2>
          <p className="text-pink-700 mb-4">Flesvoeding is ook een moment van verbinding met je baby:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bondingTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Heart className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                <span className="text-pink-700 text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Temperature Control */}
        <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
          <h2 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Temperatuur Controle - Belangrijk!
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-red-800 mb-3">Juiste temperatuur (37°C):</h3>
              <div className="space-y-2 text-sm text-red-700">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Test op pols: moet lauw aanvoelen</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Te heet: wacht tot afgekoeld</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Te koud: warm op in flessenwarmer</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Nooit in magnetron: ongelijke verhitting</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-red-800 mb-3">Waarom juiste temperatuur?</h3>
              <div className="space-y-2 text-sm text-red-700">
                <div>• Te heet: brandwonden in mond/keel</div>
                <div>• Te koud: baby weigert fles</div>
                <div>• Schommelingen: stress voor baby</div>
                <div>• Lichaamstemperatuur: meest comfortabel</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Veelgestelde Vragen over Voedingstechnieken</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Hoelang duurt een voeding normaal?</h3>
              <p className="text-sm text-gray-600">
                Gemiddeld 15-20 minuten. Korter dan 10 minuten kan te snel zijn (risico overslikken), 
                langer dan 30 minuten kan wijzen op verkeerde speenmaat.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Mijn baby valt in slaap tijdens voeding, wat nu?</h3>
              <p className="text-sm text-gray-600">
                Dit is normaal, vooral 's nachts. Laat baby rustig drinken. 
                Zorg wel dat baby genoeg binnen krijgt over de hele dag.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Hoeveel moet mijn baby boeren?</h3>
              <p className="text-sm text-gray-600">
                Niet elke baby hoeft te boeren. Laat baby halverwege even pauzeren. 
                Als baby geen boertje laat na 5 minuten, ga gewoon door met voeden.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Kan ik de fles warm houden?</h3>
              <p className="text-sm text-gray-600">
                Nee, bereide flesvoeding maximaal 1 uur bewaren op kamertemperatuur. 
                Bacteriën groeien snel in warme melk. Maak altijd vers als dat kan.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Welke speenmaat voor welke leeftijd?</h3>
              <p className="text-sm text-gray-600">
                0-3 maanden: Small/Slow flow. 3-6 maanden: Medium flow. 
                6+ maanden: Large/Fast flow. Let op signalen van je baby - sommigen hebben voorkeur voor andere flow.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Guide Highlight */}
        <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-lg font-semibold mb-4">Visuele Stap-voor-Stap Guide</h2>
          <p className="text-white/90 mb-4">
            Wil je een visuele guide met alle bereidingsstappen? Bekijk onze handige infographic!
          </p>
          <Link 
            href="/infographics"
            className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-medium py-3 px-6 rounded-xl transition-all inline-flex items-center"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Bekijk Visuele Guides
          </Link>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Gerelateerde informatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link 
              href="/kennisbank/hygiene-bereiding"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Hygiëne & Bereiding →</div>
              <div className="text-sm text-gray-600">Veilig bereiden en bewaren</div>
            </Link>
            <Link 
              href="/kennisbank/problemen-oplossen"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Problemen Oplossen →</div>
              <div className="text-sm text-gray-600">Hulp bij veelvoorkomende problemen</div>
            </Link>
            <Link 
              href="/kennisbank/soorten-flesvoeding"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Soorten Flesvoeding →</div>
              <div className="text-sm text-gray-600">Welk type voor welke leeftijd</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}