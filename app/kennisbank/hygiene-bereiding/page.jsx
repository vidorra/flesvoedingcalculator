'use client'
import Layout from '../../../components/Layout'
import Link from 'next/link'
import { Shield, ArrowRight, Home, CheckCircle, X, Thermometer, Refrigerator } from 'lucide-react'

export default function HygieneBereidingPage() {
  const alwaysDo = [
    'Handen wassen voor bereiding',
    'Schoon aanrecht gebruiken',
    'Verse doek/handdoek',
    'Flessen direct na gebruik spoelen'
  ]

  const neverDo = [
    'Restjes bewaren',
    'Fles opnieuw opwarmen',
    'Poeder met vuile lepel scheppen',
    'Flessen delen tussen baby\'s'
  ]

  const waterTips = [
    'Veilig vanaf geboorte',
    'Eerst 3 minuten laten lopen (\'s ochtends)',
    'Koud water gebruiken (warm water kan lood bevatten)',
    'Koken tot 3 maanden verplicht, 3-6 maanden geadviseerd'
  ]

  const bottleWaterTips = [
    'Alleen met label "geschikt voor babyvoeding"',
    'Natrium < 20mg/L',
    'Nitraat < 10mg/L',
    'Ook koken tot 3 maanden verplicht, 3-6 maanden geadviseerd'
  ]

  const powderStorage = [
    'Droog en donker bewaren',
    'Binnen 4 weken na openen gebruiken',
    'Nooit in koelkast (vocht!)',
    'Datum openen op blik schrijven'
  ]

  const preparedFormulaStorage = [
    'Direct opdrinken is beste',
    'Max 1 uur buiten koelkast',
    'Max 24 uur in koelkast (achterin)',
    'Nooit invriezen'
  ]

  const travelTipsCold = [
    'Gekookt water in thermoskan',
    'Poeder apart meenemen',
    'Ter plekke bereiden'
  ]

  const travelTipsPrepared = [
    'In koeltas met ice packs',
    'Binnen 2 uur gebruiken',
    'Bij twijfel: weggooien'
  ]

  const bottleWarmerAdvantages = [
    'Gelijkmatige verwarming',
    'Juiste temperatuur instellen',
    'Veiliger'
  ]

  const microwaveDisadvantages = [
    'Ongelijke verhitting (hotspots)',
    'Voedingsstoffen kunnen verloren gaan',
    'Gevaar voor verbranding'
  ]

  const microwaveTips = [
    'Max 30 seconden',
    'Goed schudden',
    'Extra goed temperatuur testen'
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
          <span className="text-primary">Hygiëne & Bereiding</span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-primary" />
            Hygiëne en Bereiding
          </h1>
          <p className="text-gray-600">
            Veilig bereiden en bewaren van flesvoeding voor de gezondheid van je baby.
          </p>
        </div>

        {/* Basic hygiene rules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-2xl border border-green-200 p-6">
            <h2 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Altijd doen:
            </h2>
            <div className="space-y-2">
              {alwaysDo.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
            <h2 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
              <X className="w-5 h-5 mr-2" />
              Nooit doen:
            </h2>
            <div className="space-y-2">
              {neverDo.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Water for formula */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Water voor flesvoeding</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-primary mb-3">Kraanwater in Nederland:</h3>
              <div className="space-y-2">
                {waterTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-purple-800 mb-3">Flessenwater:</h3>
              <div className="space-y-2">
                {bottleWaterTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-purple-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Storage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Poeder bewaren:</h2>
            <div className="space-y-2">
              {powderStorage.map((tip, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Refrigerator className="w-5 h-5 mr-2" />
              Bereide flesvoeding:
            </h2>
            <div className="space-y-2">
              {preparedFormulaStorage.map((tip, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Travel feeding */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Onderweg flesvoeding</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-green-800 mb-3">Koud water methode (aanbevolen):</h3>
              <div className="space-y-2">
                {travelTipsCold.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-green-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-amber-800 mb-3">Vooraf bereiden:</h3>
              <div className="space-y-2">
                {travelTipsPrepared.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-amber-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottle warmer vs microwave */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Thermometer className="w-5 h-5 mr-2" />
            Flessenwarmer vs Magnetron
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-medium text-green-800 mb-3">Flessenwarmer voordelen:</h3>
              <div className="space-y-2">
                {bottleWarmerAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-green-700 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-medium text-red-800 mb-3">Magnetron nadelen:</h3>
              <div className="space-y-2">
                {microwaveDisadvantages.map((disadvantage, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700 text-sm">{disadvantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-medium text-amber-800 mb-3">Als magnetron nodig:</h3>
              <div className="space-y-2">
                {microwaveTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-amber-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flessen Steriliseren Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Flessen Steriliseren: Complete Gids</h2>
          
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-6">
            <h3 className="text-blue-900 font-semibold mb-2">⏰ Tot wanneer steriliseren?</h3>
            <p className="text-blue-800 text-sm mb-2">
              <strong>Tot 6 maanden verplicht</strong> - Baby's immuunsysteem is dan voldoende ontwikkeld
            </p>
            <ul className="text-blue-800 text-sm space-y-1">
              <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>0-3 maanden:</strong> Altijd steriliseren (ook water koken)</span>
                </li>
              <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>3-6 maanden:</strong> Steriliseren aanbevolen</span>
                </li>
              <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>6+ maanden:</strong> Grondig schoonmaken met warm zeepsop voldoet</span>
                </li>
            </ul>
          </div>

          <h3 className="font-medium text-gray-800 mb-4">Sterilisatiemethoden: Voor- en Nadelen</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 className="text-green-900 font-medium mb-3">🔥 Uitkoken (Gratis)</h4>
              <div className="text-green-800 text-sm space-y-1 mb-3">
                <p><strong>Methode:</strong> 10 minuten in kokend water</p>
                <p><strong>Kosten:</strong> Alleen gas/elektra</p>
                <p><strong>Tijd:</strong> 15-20 minuten totaal</p>
              </div>
              <div className="text-green-700 text-xs">
                <p><strong>✓ Voordelen:</strong> 100% effectief, grote hoeveelheden, geen aanschaf</p>
                <p><strong>✗ Nadelen:</strong> Tijdrovend, brandgevaar, veel energie</p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 className="text-purple-900 font-medium mb-3">⚡ Stoomsterilisator (€30-150)</h4>
              <div className="text-purple-800 text-sm space-y-1 mb-3">
                <p><strong>Methode:</strong> Hete stoom, automatisch</p>
                <p><strong>Tijd:</strong> 6-15 minuten</p>
                <p><strong>Merken:</strong> Philips Avent, Tommee Tippee</p>
              </div>
              <div className="text-purple-700 text-xs">
                <p><strong>✓ Voordelen:</strong> Snel, consistent, veilig, weinig toezicht</p>
                <p><strong>✗ Nadelen:</strong> Aanschafkosten, beperkte capaciteit</p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
              <h4 className="text-orange-900 font-medium mb-3">📱 Magnetron (€15-30)</h4>
              <div className="text-orange-800 text-sm space-y-1 mb-3">
                <p><strong>Methode:</strong> Speciale zakken/containers</p>
                <p><strong>Tijd:</strong> 2-6 minuten</p>
                <p><strong>Zakken:</strong> €0.25 per gebruik</p>
              </div>
              <div className="text-orange-700 text-xs">
                <p><strong>✓ Voordelen:</strong> Supersnel, praktisch onderweg</p>
                <p><strong>✗ Nadelen:</strong> Ongelijke verhitting, beperkte capaciteit</p>
              </div>
            </div>

            <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
              <h4 className="text-cyan-900 font-medium mb-3">🧪 Koude Sterilisatie (€10-20)</h4>
              <div className="text-cyan-800 text-sm space-y-1 mb-3">
                <p><strong>Methode:</strong> Milton tabletten in water</p>
                <p><strong>Tijd:</strong> 30 minuten inweken</p>
                <p><strong>Geldig:</strong> 24 uur effectief</p>
              </div>
              <div className="text-cyan-700 text-xs">
                <p><strong>✓ Voordelen:</strong> Geen verhitting, grote hoeveelheden</p>
                <p><strong>✗ Nadelen:</strong> Chemische geur, goed spoelen nodig</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-6">
            <h3 className="text-amber-900 font-semibold mb-3">🚿 Vaatwasser Sterilisatie</h3>
            <p className="text-amber-800 text-sm mb-2">
              Nederlandse vaatwassers kunnen effectieve sterilisatie bieden op 65°C+ programma's
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-amber-700 text-sm space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Plaats flessen in bovenste rek</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Gebruik baby-veilige tabletten</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Controleer dat vaatwasser 65°C+ haalt</span>
                </li>
              </ul>
              <ul className="text-amber-700 text-sm space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Efficiënt met normale vaaswas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Ideaal voor grote huishoudens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Oudere vaatwassers mogelijk te koud</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="font-medium text-gray-800 mb-4">Nederlandse Context & Water</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 className="text-blue-900 font-medium mb-2">💧 Nederlands Kraanwater</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>✅ Wereldklasse kwaliteit, EU-standaarden</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>⚠️ Oudere huizen (voor 1960): loodleidingen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>🚿 Laat water 2-3 min lopen 's ochtends</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>🔥 Koken voor baby's onder 6 maanden</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>❄️ Winter: kouder water, langer opwarmen</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 className="text-green-900 font-medium mb-2">🍼 Flessenwater</h4>
              <ul className="text-green-800 text-sm space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Label: "geschikt voor baby's"</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Natrium &lt; 20mg/L</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Ook koken tot 6 maanden</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Nederlandse supermarkten: breed aanbod</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Duurder dan kraanwater</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <h3 className="text-red-900 font-semibold mb-2">⚠️ Nederlandse Klimaat Impact</h3>
            <p className="text-red-800 text-sm mb-2">
              Nederland's hoge luchtvochtigheid en gematigde temperaturen creëren ideale omstandigheden 
              voor bacteriegroei. Extra voorzichtigheid is daarom essentieel.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Zomer: snellere bacteriegroei</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Winter: droge verwarmingslucht</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Flessen binnen 2-4 uur besmet</span>
                </li>
              </ul>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Emma Kinderziekenhuis onderzoek</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Maag-darm, oorinfecties risico</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Tot 6 mnd extra gevoelig</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Meer informatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/veiligheid"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Veiligheidsrichtlijnen →</div>
              <div className="text-sm text-gray-600">Belangrijke veiligheidstips</div>
            </Link>
            <Link 
              href="/kennisbank/praktische-tips"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Praktische Tips →</div>
              <div className="text-sm text-gray-600">Handige tips voor ouders</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}