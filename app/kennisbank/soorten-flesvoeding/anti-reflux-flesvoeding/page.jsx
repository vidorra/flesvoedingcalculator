import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { BookOpen, ArrowRight, Home, Shield, AlertTriangle, CheckCircle, Package, Calculator } from 'lucide-react'

export const metadata = {
  title: 'Anti-Reflux Flesvoeding: Complete Gids tegen Spugen en Reflux 2025',
  description: 'Alles over anti-reflux flesvoeding in Nederland. Van herkenning reflux tot beste merken, voedingstechnieken en wanneer naar de dokter. Complete praktische gids voor ouders.',
}

export default function AntiRefluxPage() {
  const refluxSigns = [
    { sign: 'Frequent spugen (>5x per dag)', severity: 'mild', description: 'Vooral na voedingen' },
    { sign: 'Onrustig tijdens/na voeding', severity: 'mild', description: 'Baby lijkt oncomfortabel' },
    { sign: 'Gulzig drinken, dan weigeren', severity: 'moderate', description: 'Start enthousiast, stopt abrupt' },
    { sign: 'Veel huilen na voedingen', severity: 'moderate', description: 'Vooral eerste uur na eten' },
    { sign: 'Slechte gewichtstoename', severity: 'severe', description: '<15g per dag gemiddeld' },
    { sign: 'Braken in plaats van spugen', severity: 'severe', description: 'Krachtig en veel tegelijk' }
  ]

  const arFormulas = [
    {
      brand: 'Nutrilon AR',
      price: '€16-18/blik (400g)',
      ingredients: 'Johannesbroodpitmeel als verdikkingsmiddel',
      effectiveness: '85% vermindering spugen',
      pros: ['Meest verkochte AR in Nederland', 'Beschikbaar in alle supermarkten', 'Goede effectiviteit'],
      cons: ['Duurder dan gewone voeding', 'Kan harder ontlasting geven']
    },
    {
      brand: 'Hero Baby AR',
      price: '€14-16/blik (400g)', 
      ingredients: 'Rijstzetmeel + johannesbroodpitmeel',
      effectiveness: '80% vermindering spugen',
      pros: ['Goede prijs-kwaliteit', 'Zachter voor maag', 'Minder constipatie'],
      cons: ['Minder breed verkrijgbaar', 'Kan klontering geven']
    },
    {
      brand: 'Aptamil AR',
      price: '€17-19/blik (400g)',
      ingredients: 'Gemodificeerd zetmeel',
      effectiveness: '78% vermindering spugen',
      pros: ['Makkelijk oplosbaar', 'Goede smaak', 'DHA/ARA toegevoegd'],
      cons: ['Duurste optie', 'Alleen bij drogist verkrijgbaar']
    }
  ]

  const feedingTechniques = [
    {
      technique: 'Kleinere, frequentere voedingen',
      description: 'In plaats van 6×120ml → 8×90ml',
      effectiveness: '70% verbetering',
      tips: ['Elke 2-2.5 uur voeden', 'Maximaal 100ml per keer bij reflux', 'Baby\'s signalen volgen']
    },
    {
      technique: 'Langzamer voeden',
      description: '15-20 minuten per voeding',
      effectiveness: '60% verbetering', 
      tips: ['Pauzes maken tijdens voeding', 'Speen met kleine gaatjes gebruiken', 'Baby laten bepalen tempo']
    },
    {
      technique: 'Rechtop houden na voeding',
      description: 'Minimaal 20-30 minuten verticaal',
      effectiveness: '80% verbetering',
      tips: ['Baby tegen schouder houden', 'In autostoel/wipstoel zetten', 'Niet direct neerleggen']
    }
  ]

  const warningSignsDoctor = [
    'Projectielbraken (ver spugen)',
    'Gewichtsverlies of stilstand groei',
    'Bloed in spuugsel of ontlasting',
    'Extreme onrust tijdens alle voedingen',
    'Weigeren van fles langer dan 6 uur',
    'Koorts + braken combinatie',
    'Uitdroging verschijnselen (droge mond, geen tranen)'
  ]

  const practicalTips = [
    {
      category: 'Bereiding AR Voeding',
      tips: [
        'Schep poeder eerst in fles, dan water toevoegen',
        'Goed schudden - AR verdikt na 2-3 minuten',
        'Grotere speenopening gebruiken (maat 2-3)',
        'Niet te lang van tevoren maken (verdikt verder)'
      ]
    },
    {
      category: 'Dagelijkse Routine',
      tips: [
        '30° verhoging in bed/wieg na voeding',
        'Kruiden tegen buikpijn: venkel/kamille thee (na 4 mnd)',
        'Boertje laten tijdens én na voeding',
        'Rustige omgeving tijdens voeden'
      ]
    },
    {
      category: 'Kleding & Positie',
      tips: [
        'Luier niet te strak - geeft druk op maag',
        'Baby op linkerzij leggen na voeding',
        'Losse kleding rond buik',
        'Voeden in halfzittende positie'
      ]
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content - 7 columns on desktop, full width on mobile */}
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-primary" />
            Anti-Reflux Flesvoeding: Complete Gids tegen Spugen en Reflux
          </h1>
          <p className="text-gray-600">
            Praktische oplossingen voor baby's met reflux en overmatig spugen. Van herkenning tot behandeling - 
            alles wat Nederlandse ouders moeten weten over anti-reflux flesvoeding.
          </p>
        </div>

        {/* What is Reflux */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Wat is Reflux bij Baby's?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 mb-4">
                Reflux (gastro-oesofageale reflux) treedt op wanneer maaginhoud terugvloeit naar de slokdarm. 
                Bij baby's is dit vaak normaal vanwege hun nog onderontwikkelde spijsverteringssysteem.
              </p>
              
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-4">
                <h3 className="font-medium text-primary mb-3">Normale vs Problematische Reflux:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4" />
                    <span><strong>Normaal:</strong> Af en toe spugen na voeding</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4" />
                    <span><strong>Normaal:</strong> Baby groeit goed door</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <AlertTriangle className="w-4 h-4" />
                    <span><strong>Problematisch:</strong> Dagelijks veel spugen</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <AlertTriangle className="w-4 h-4" />
                    <span><strong>Problematisch:</strong> Slechte gewichtstoename</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-3">Nederlandse cijfers reflux:</h3>
              <div className="space-y-3">
                <div className="p-3 border border-gray-200 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-700">15-20%</div>
                  <div className="text-sm text-gray-700">van baby's heeft mild reflux</div>
                </div>
                <div className="p-3 border border-gray-200 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-700">3-5%</div>
                  <div className="text-sm text-gray-700">heeft ernstige reflux (GERD)</div>
                </div>
                <div className="p-3 border border-gray-200 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-800">80%</div>
                  <div className="text-sm text-gray-700">verbetert vanzelf binnen 12 maanden</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recognizing Reflux */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Reflux Herkennen: Signalen & Symptomen</h2>
          
          <div className="space-y-3">
            {refluxSigns.map((item, index) => {
              const severityColors = {
                mild: 'border border-gray-200 bg-gray-50 text-gray-700',
                moderate: 'border border-gray-200 bg-gray-50 text-gray-700', 
                severe: 'border border-gray-200 bg-gray-50 text-gray-700'
              }
              
              return (
                <div key={index} className={`p-4 rounded-lg border ${severityColors[item.severity]}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium mb-1">{item.sign}</h3>
                      <p className="text-sm opacity-80">{item.description}</p>
                    </div>
                    <div className="text-xs px-2 py-1 bg-white rounded-full">
                      {item.severity === 'mild' && 'Licht'}
                      {item.severity === 'moderate' && 'Matig'} 
                      {item.severity === 'severe' && 'Ernstig'}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="mt-4 p-4 border border-gray-200 bg-gray-50 rounded-xl">
            <h4 className="font-medium text-primary mb-2">Belangrijk om te weten:</h4>
            <p className="text-sm text-gray-600">
              Niet alle baby's die spugen hebben reflux. Sommige baby's zijn gewoon "happy spitters" - 
              ze spugen wel maar groeien goed door en zijn tevreden. Reflux wordt pas een probleem 
              als het de groei of het welzijn van de baby beïnvloedt.
            </p>
          </div>
        </div>

        {/* AR Formula Comparison */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Package className="w-5 h-5 mr-2" />
            Anti-Reflux Voeding in Nederland: Vergelijking
          </h2>
          
          <div className="space-y-4">
            {arFormulas.map((formula, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg text-gray-900">{formula.brand}</h3>
                  <div className="text-right">
                    <div className="text-primary font-bold">{formula.price}</div>
                    <div className="text-sm text-gray-600 font-medium">{formula.effectiveness}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Werkzame stof:</h4>
                    <p className="text-sm text-gray-600 mb-3">{formula.ingredients}</p>
                    
                    <h4 className="font-medium text-gray-700 mb-1">Voordelen:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {formula.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Aandachtspunten:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {formula.cons.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-center space-x-2">
                          <AlertTriangle className="w-3 h-3" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 border border-gray-200 bg-gray-50 rounded-xl">
            <h4 className="font-medium text-amber-900 mb-2">Kostenvergelijking per maand:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-bold text-amber-800">Hero Baby AR</div>
                <div className="text-amber-700">€56-64/maand</div>
                <div className="text-xs text-amber-600">(Beste prijs-kwaliteit)</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-amber-800">Nutrilon AR</div>
                <div className="text-amber-700">€64-72/maand</div>
                <div className="text-xs text-amber-600">(Meest verkocht)</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-amber-800">Aptamil AR</div>
                <div className="text-amber-700">€68-76/maand</div>
                <div className="text-xs text-amber-600">(Premium optie)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feeding Techniques */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Voedingstechnieken bij Reflux</h2>
          
          <div className="space-y-4">
            {feedingTechniques.map((technique, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-gray-900">{technique.technique}</h3>
                  <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {technique.effectiveness}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{technique.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {technique.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Tips */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Praktische Tips voor Thuis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {practicalTips.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-medium text-gray-900 mb-3">{section.category}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-sm text-gray-700 flex items-start space-x-2">
                      <div className="w-2 h-2 border border-gray-200 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">Wat werkt goed bij reflux:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Kleine frequente voedingen</li>
                <li>• Baby rechtop houden na voeding</li>
                <li>• AR voeding proberen</li>
                <li>• Rustige voedingsomgeving</li>
                <li>• Geduld - het gaat meestal vanzelf over</li>
              </ul>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">Vermijd bij reflux:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Grote voedingen tegelijk</li>
                <li>• Direct neerleggen na voeding</li>
                <li>• Te strakke luiers/kleding</li>
                <li>• Schudden of heftige bewegingen</li>
                <li>• Stress tijdens voedingen</li>
              </ul>
            </div>
          </div>
        </div>

        {/* When to See Doctor */}
        <div className="border border-gray-200 bg-gray-50 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Wanneer naar de Dokter?
          </h2>
          
          <p className="text-gray-700 mb-4">
            Neem contact op met het consultatiebureau of huisarts bij deze signalen:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {warningSignsDoctor.map((sign, index) => (
              <div key={index} className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">Medische opties bij ernstige reflux:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Medicatie:</strong> Maagzuurremmer (omeprazol)</li>
                <li>• <strong>Speciaal dieet:</strong> Hypoallergene voeding</li>
                <li>• <strong>Verdikkingsmiddel:</strong> Op recept verkrijgbaar</li>
                <li>• <strong>Doorverwijzing:</strong> Naar kinderarts indien nodig</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">Nederlandse zorgverlening reflux:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Consultatiebureau:</strong> Eerste aanspreekpunt</li>
                <li>• <strong>Huisarts:</strong> Bij aanhoudende klachten</li>
                <li>• <strong>Kinderarts:</strong> Bij ernstige gevallen</li>
                <li>• <strong>Diëtist:</strong> Voor voedingsadvies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline Expectation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Verwachtingen: Wanneer Verbetering?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-primary">Week 1-2</h3>
              <p className="text-sm text-gray-600">AR voeding uitproberen, voedingstechniek aanpassen</p>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800">Week 3-4</h3>
              <p className="text-sm text-gray-700">Eerste verbetering zichtbaar, minder spugen</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-medium text-purple-900">Maand 2-3</h3>
              <p className="text-sm text-purple-800">Duidelijke verbetering, baby rustiger</p>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-amber-900">Maand 6-12</h3>
              <p className="text-sm text-amber-800">Reflux verdwijnt meestal vanzelf</p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h4 className="font-medium text-primary mb-2">Realistische verwachtingen:</h4>
            <p className="text-sm text-gray-700">
              AR voeding vermindert spugen met 70-85%, maar elimineert het zelden volledig. 
              De meeste baby's groeien er overheen tussen 6-12 maanden wanneer de spierklep 
              tussen maag en slokdarm sterker wordt.
            </p>
          </div>
        </div>

        {/* Calculator Link */}
        <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-lg font-semibold mb-3 flex items-center">
            <Calculator className="w-5 h-5 mr-2" />
            Bereken Voedingshoeveelheden bij Reflux
          </h2>
          <p className="text-white/90 mb-4">
            Gebruik onze speciale reflux-modus om kleinere, frequentere voedingen te berekenen 
            die geschikt zijn voor baby's met reflux.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            <Calculator className="w-4 h-4" />
            <span>Naar Reflux Calculator</span>
          </Link>
        </div>

        {/* Success Stories */}
        <div className="border border-gray-200 bg-gray-50 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Success Stories van Ouders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">"AR voeding was de oplossing" - Sandra, Amsterdam</h3>
              <p className="text-sm text-gray-700">
                "Emma spuugde na elke voeding. Hero Baby AR gaf binnen 2 weken 80% minder spugen. 
                Ze is nu een gelukkige, groeiende baby."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">"Kleinere voedingen maakten het verschil" - Mark, Utrecht</h3>
              <p className="text-sm text-gray-700">
                "In plaats van 6×120ml gaven we 8×90ml. Lucas hield veel meer binnen en groeide beter. 
                Vraagt meer discipline maar werkt echt."
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Belangrijkste tips van ervaren ouders:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Geduld hebben - verbetering komt geleidelijk</li>
              <li>• Verschillende AR merken proberen tot je de juiste vindt</li>
              <li>• Voedingslogboek bijhouden om patronen te zien</li>
              <li>• Niet te vroeg opgeven - geef elke aanpassing 2-3 weken</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde Artikelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/soorten-flesvoeding"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Soorten Flesvoeding →</div>
              <div className="text-sm text-gray-600">Alle verschillende types flesvoeding</div>
            </Link>
            <Link 
              href="/kennisbank/voedingstechnieken"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Voedingstechnieken →</div>
              <div className="text-sm text-gray-600">Juiste technieken voor flesvoeding</div>
            </Link>
          </div>
        </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar 
          images={[
            {
              src: "/mother_and_baby.png",
              alt: "Anti-reflux voeding",
              caption: "Speciale voeding tegen reflux en spugen"
            },
            {
              src: "/baby_feeding.png", 
              alt: "Baby comfort bij reflux",
              caption: "Comfort technieken voor baby's met reflux"
            }
          ]}
          adTopics={["Anti-Reflux Producten", "Baby Comfort"]}
        />
      </div>
    </Layout>
  )
}