import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { BookOpen, ArrowRight, Home, Shield, AlertTriangle, CheckCircle, Package, Calculator } from 'lucide-react'
import BolProductSection from '../../../../components/BolProductLink'

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
      effectiviteit: '85% vermindering spugen',
      pros: ['Meest verkochte AR in Nederland', 'Beschikbaar in alle supermarkten', 'Goede effectiviteit'],
      cons: ['Duurder dan gewone voeding', 'Kan harder ontlasting geven']
    },
    {
      brand: 'Hero Baby AR',
      price: '€14-16/blik (400g)', 
      ingredients: 'Rijstzetmeel + johannesbroodpitmeel',
      effectiviteit: '80% vermindering spugen',
      pros: ['Goede prijs-kwaliteit', 'Zachter voor maag', 'Minder constipatie'],
      cons: ['Minder breed verkrijgbaar', 'Kan klontering geven']
    },
    {
      brand: 'Aptamil AR',
      price: '€17-19/blik (400g)',
      ingredients: 'Gemodificeerd zetmeel',
      effectiviteit: '78% vermindering spugen',
      pros: ['Makkelijk oplosbaar', 'Goede smaak', 'DHA/ARA toegevoegd'],
      cons: ['Duurste optie', 'Alleen bij drogist verkrijgbaar']
    }
  ]

  const feedingTechniques = [
    {
      technique: 'Kleinere, frequentere voedingen',
      description: 'In plaats van 6×120ml  8×90ml',
      effectiviteit: '70% verbetering',
      tips: ['Elke 2-2.5 uur voeden', 'Maximaal 100ml per keer bij reflux', 'Baby\'s signalen volgen']
    },
    {
      technique: 'Langzamer voeden',
      description: '15-20 minuten per voeding',
      effectiviteit: '60% verbetering', 
      tips: ['Pauzes maken tijdens voeding', 'Speen met kleine gaatjes gebruiken', 'Baby laten bepalen tempo']
    },
    {
      technique: 'Rechtop houden na voeding',
      description: 'Minimaal 20-30 minuten verticaal',
      effectiviteit: '80% verbetering',
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
          <div className="text-sm text-gray-500 mb-2">Soorten Flesvoeding  Anti-Reflux</div>
          <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-primary" />
            Anti-Reflux Flesvoeding: Complete Gids tegen Spugen en Reflux
          </h1>
          <p className="text-gray-700">
            Praktische oplossingen voor baby's met reflux en overmatig spugen. Van herkenning tot behandeling - 
            alles wat Nederlandse ouders moeten weten over anti-reflux flesvoeding.
          </p>
        </div>

        {/* What is Reflux */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Wat is Reflux bij Baby's?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">
                Reflux (gastro-oesofageale reflux) treedt op wanneer maaginhoud terugvloeit naar de slokdarm. 
                Bij baby's is dit vaak normaal vanwege hun nog onderontwikkelde spijsverteringssysteem.
              </p>
              
              <div className="border border-gray-200 bg-white rounded-xl p-4">
                <h3 className="font-medium text-primary mb-3">Normale vs Problematische Reflux:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span><strong>Normaal:</strong> Af en toe spugen na voeding</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span><strong>Normaal:</strong> Baby groeit goed door</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <AlertTriangle className="w-4 h-4 text-primary" />
                    <span><strong>Problematisch:</strong> Dagelijks veel spugen</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <AlertTriangle className="w-4 h-4 text-primary" />
                    <span><strong>Problematisch:</strong> Slechte gewichtstoename</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-3">Nederlandse cijfers reflux:</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">15-20%</span>
                  <span className="text-gray-600">van baby's heeft mild reflux</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">3-5%</span>
                  <span className="text-gray-600">heeft ernstige reflux (GERD)</span>
                </div>
                <div className="p-3 border border-gray-200 bg-white rounded-lg">
                  <div className="font-medium text-gray-700">80%</div>
                  <div className="text-gray-600">verbetert vanzelf binnen 12 maanden</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recognizing Reflux */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Reflux Herkennen: Signalen & Symptomen</h2>
          
          <div className="space-y-3">
            {refluxSigns.map((item, index) => {
              const severityColors = {
                mild: 'border border-gray-200 bg-white text-primary',
                moderate: 'border border-gray-200 bg-white text-primary', 
                severe: 'border border-gray-200 bg-white text-primary'
              }
              
              return (
                <div key={index}>
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
          
          <div className="mt-4 p-4 border border-gray-200 bg-white rounded-xl">
            <h4 className="font-medium text-primary mb-2">Belangrijk om te weten:</h4>
            <p className="text-gray-600">
              Niet alle baby's die spugen hebben reflux. Sommige baby's zijn gewoon "happy spitters" - 
              ze spugen wel maar groeien goed door en zijn tevreden. Reflux wordt pas een probleem 
              als het de groei of het welzijn van de baby beïnvloedt.
            </p>
          </div>
        </div>

        {/* AR Formula Comparison */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
            <Package className="w-5 h-5 mr-2" />
            Anti-Reflux Voeding in Nederland: Vergelijking
          </h2>
          
          <div className="space-y-6">
            {arFormulas.map((formula, index) => (
              <div key={index} className="">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-lg text-primary">{formula.brand}</h3>
                  <div className="text-right">
                    <div className="text-gray-700 font-medium">{formula.price}</div>
                    <div className="text-sm text-gray-600 font-medium">{formula.effectiviteit}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Werkzame stof:</h4>
                    <p className="text-gray-600">{formula.ingredients}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-2">Voordelen:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {formula.pros.map((pro, proIndex) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-2">Aandachtspunten:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {formula.cons.map((con, conIndex) => (
                        <li key={index} className="flex items-start space-x-2">
                          <AlertTriangle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {index < arFormulas.length - 1 && (
                  <div className="border-b border-gray-200 mt-4"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 border border-gray-200 bg-white rounded-xl">
            <h4 className="font-medium text-primary mb-2">Kostenvergelijking per maand:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-medium text-primary">Hero Baby AR</div>
                <div className="text-gray-700">€56-64/maand</div>
                <div className="text-xs text-gray-600">(Beste prijs-kwaliteit)</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-primary">Nutrilon AR</div>
                <div className="text-gray-700">€64-72/maand</div>
                <div className="text-xs text-gray-600">(Meest verkocht)</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-primary">Aptamil AR</div>
                <div className="text-gray-700">€68-76/maand</div>
                <div className="text-xs text-gray-600">(Hoogwaardige optie)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feeding Techniques */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Voedingstechnieken bij Reflux</h2>
          
          <div className="space-y-6">
            {feedingTechniques.map((technique, index) => (
              <div key={index} className="">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-gray-700">{technique.technique}</h3>
                  <span className="text-sm bg-white text-gray-600 px-2 py-1 rounded-full">
                    {technique.effectiviteit}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{technique.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {technique.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{tip}</span>
                    </div>
                  ))}
                </div>
                
                {index < feedingTechniques.length - 1 && (
                  <div className="border-b border-gray-200 mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Practical Tips */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Praktische Tips voor Thuis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practicalTips.map((section, index) => (
              <div key={index}>
                <h3 className="font-medium text-primary mb-3">{section.category}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, index) => (
                    <li key={index} className="text-gray-600 flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-3">Wat werkt goed bij reflux:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Kleine frequente voedingen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Baby rechtop houden na voeding</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>AR voeding proberen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Rustige voedingsomgeving</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Geduld - het gaat meestal vanzelf over</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-3">Vermijd bij reflux:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Grote voedingen tegelijk</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Direct neerleggen na voeding</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Te strakke luiers/kleding</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Schudden of heftige bewegingen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Stress tijdens voedingen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* When to See Doctor */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Wanneer naar de Dokter?
          </h2>
          
          <p className="text-gray-700 mb-4">
            Neem contact op met het consultatiebureau of huisarts bij deze signalen:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {warningSignsDoctor.map((sign, index) => (
              <div key={index} className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-3">Medische opties bij ernstige reflux:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Medicatie:</strong> Maagzuurremmer (omeprazol)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Speciaal dieet:</strong> Hypoallergene voeding</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Verdikkingsmiddel:</strong> Op recept verkrijgbaar</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Doorverwijzing:</strong> Naar kinderarts indien nodig</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-3">Nederlandse zorgverlening reflux:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Consultatiebureau:</strong> Eerste aanspreekpunt</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Huisarts:</strong> Bij aanhoudende klachten</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Kinderarts:</strong> Bij ernstige gevallen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Diëtist:</strong> Voor voedingsadvies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline Expectation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Verwachtingen: Wanneer Verbetering?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-gray-200 bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-700">Week 1-2</h3>
              <p className="text-gray-600">AR voeding uitproberen, voedingstechniek aanpassen</p>
            </div>
            <div className="border border-gray-200 bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-700">Week 3-4</h3>
              <p className="text-gray-600">Eerste verbetering zichtbaar, minder spugen</p>
            </div>
            <div className="border border-gray-200 bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-700">Maand 2-3</h3>
              <p className="text-gray-600">Duidelijke verbetering, baby rustiger</p>
            </div>
            <div className="border border-gray-200 bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-700">Maand 6-12</h3>
              <p className="text-gray-600">Reflux verdwijnt meestal vanzelf</p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-white rounded-lg">
            <h4 className="font-medium text-primary mb-2">Realistische verwachtingen:</h4>
            <p className="text-gray-700">
              AR voeding vermindert spugen met 70-85%, maar elimineert het zelden volledig. 
              De meeste baby's groeien er overheen tussen 6-12 maanden wanneer de spierklep 
              tussen maag en slokdarm sterker wordt.
            </p>
          </div>
        </div>

        {/* Calculator Link */}
        <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-lg font-medium text-white mb-3 flex items-center">
            <Calculator className="w-5 h-5 mr-2" />
            Bereken Voedingshoeveelheden bij Reflux
          </h2>
          <p className="text-white/90 mb-4">
            Gebruik onze speciale reflux-modus om kleinere, frequentere voedingen te berekenen 
            die geschikt zijn voor baby's met reflux.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-lg hover:bg-white transition-colors font-medium"
          >
            <Calculator className="w-4 h-4" />
            <span>Naar Reflux Calculator</span>
          </Link>
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Success Stories van Ouders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-primary mb-2">"AR voeding was de oplossing" - Sandra, Amsterdam</h3>
              <p className="text-gray-600">
                "Emma spuugde na elke voeding. Hero Baby AR gaf binnen 2 weken 80% minder spugen. 
                Ze is nu een gelukkige, groeiende baby."
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">"Kleinere voedingen maakten het verschil" - Mark, Utrecht</h3>
              <p className="text-gray-600">
                "In plaats van 6×120ml gaven we 8×90ml. Lucas hield veel meer binnen en groeide beter. 
                Vraagt meer discipline maar werkt echt."
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium text-primary mb-3">Belangrijkste tips van ervaren ouders:</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Geduld hebben - verbetering komt geleidelijk</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Verschillende AR merken proberen tot je de juiste vindt</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Voedingslogboek bijhouden om patronen te zien</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Niet te vroeg opgeven - geef elke aanpassing 2-3 weken</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Gerelateerde Artikelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/soorten-flesvoeding"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="font-medium text-gray-700">Soorten Flesvoeding </div>
              <div className="text-sm text-primary">Alle verschillende types flesvoeding</div>
            </Link>
            <Link 
              href="/kennisbank/voedingstechnieken"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="font-medium text-gray-700">Voedingstechnieken </div>
              <div className="text-sm text-primary">Juiste technieken voor flesvoeding</div>
            </Link>
          </div>
        </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar 
          images={[
            {
              src: "/kunstvoeding.webp",
              alt: "Anti-reflux flesvoeding voeding",
              caption: "Speciale voeding tegen reflux en spugen"
            },
            {
              src: "/slapende-baby-2.webp", 
              alt: "Baby comfort na anti-reflux voeding",
              caption: "Rust na de juiste anti-reflux voeding"
            },
            {
              src: "/baby-met-fopspeen.webp",
              alt: "Baby comfort bij reflux problemen",
              caption: "Comfort maatregelen bij reflux"
            }
          ]}
          adTopics={["Anti-Reflux Producten", "Baby Comfort"]}
        />

          {/* Affiliate Product Recommendations - Auto-generated */}
          <BolProductSection
            productNames={[
    'anti reflux flesvoeding',
    'Nutrilon AR',
    'Hero Baby AR',
    'anti reflux fles',
    'langzame flow speen',
    'baby positionering kussen'
            ]}
            title="Anti-Reflux Producten"
            variant="card"
            maxProducts={6}
          />
      </div>
    </Layout>
  )
}