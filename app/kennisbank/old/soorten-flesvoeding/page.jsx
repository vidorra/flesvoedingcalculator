'use client'
import Layout from '../../../../components/Layout'
import Link from 'next/link'
import { Package, ArrowRight, Home, Info, AlertCircle } from 'lucide-react'

export default function SoortenFlesvoedingPage() {
  const formula1Brands = ['Nutrilon 1', 'Hero Baby 1', 'Kruidvat Zuigelingenmelk 1', 'HIPP Bio 1']

  return (
    <Layout>
      <div className="space-y-6">

        {/* Header */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Package className="w-6 h-6 mr-3 text-primary" />
            Soorten Flesvoeding (1, 2, 3)
          </h1>
          <p className="text-gray-600">
            Ontdek de verschillen tussen startvoeding, opvolgmelk en peutermelk, en wanneer je welke kiest.
          </p>
        </div>

        {/* Formula Types */}
        <div className="space-y-6">
          {/* Startvoeding (1) */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h2 className="text-lg font-semibold text-primary">Startvoeding (Nummer 1)</h2>
                <p className="text-sm text-gray-600">0 tot 6 maanden</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-primary mb-3">Kenmerken:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Volledige zuigelingenvoeding vanaf geboorte</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Bevat alle essentiële voedingsstoffen</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Eiwitgehalte: 1.2-1.8g per 100ml</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>IJzergehalte: 0.3-1.3mg per 100ml</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Mag tot 12 maanden gebruikt worden</span>
                </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-3">Populaire merken in Nederland:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {formula1Brands.map((brand, index) => (
                    <div key={index} className="bg-default px-3 py-2 rounded-lg text-sm text-primary">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Opvolgmelk (2) */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-green-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h2 className="text-lg font-semibold text-primary">Opvolgmelk (Nummer 2)</h2>
                <p className="text-sm text-gray-600">6 tot 12 maanden</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-primary mb-3">Kenmerken:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Vanaf 6 maanden naast vaste voeding</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Hoger ijzergehalte: ongeveer 6mg per 100ml</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Meer vitamine D voor groei</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Aangepaste eiwitsamenstelling</span>
                </li>
                  <li className="text-gray-600 font-medium"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>NIET geschikt voor baby&apos;s jonger dan 6 maanden</span></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-3">Wanneer overstappen:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Baby is 6 maanden oud</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Start met vaste voeding</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Op advies van consultatiebureau</span>
                </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Peutermelk (3) */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-purple-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h2 className="text-lg font-semibold text-primary">Peutermelk (Nummer 3)</h2>
                <p className="text-sm text-gray-600">12+ maanden</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-primary mb-3">Kenmerken:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Vanaf 1 jaar als aanvulling</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Verrijkt met vitamines en mineralen</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>OPTIONEEL - gewone volle melk kan ook</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Vaak duurder dan gewone melk</span>
                </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-3">Afweging maken:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Gewone volle melk is vanaf 1 jaar prima</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Peutermelk bij slechte eters</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Overleg met consultatiebureau</span>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Special Formula */}
        <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
          <h2 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            Speciale voeding
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-amber-800 mb-2">Hypoallergene (HA) voeding:</h3>
              <ul className="space-y-1 text-sm text-amber-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Bij allergie-risico in familie</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Gedeeltelijk afgebroken eiwitten</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Op advies kinderarts</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-amber-800 mb-2">Anti-reflux (AR) voeding:</h3>
              <ul className="space-y-1 text-sm text-amber-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Bij overmatig spugen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Verdikt in de maag</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Alleen op medisch advies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Meer informatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/voedingstechnieken"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-700">Voedingstechnieken </div>
              <div className="text-sm text-gray-600">Hoe bereid je flesvoeding?</div>
            </Link>
            <Link 
              href="/kennisbank/problemen-oplossen"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-700">Problemen Oplossen </div>
              <div className="text-sm text-gray-600">Hulp bij veelvoorkomende problemen</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}