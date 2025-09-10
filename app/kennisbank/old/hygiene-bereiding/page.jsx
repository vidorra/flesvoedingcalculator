'use client'
import Layout from '../../../../components/Layout'
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
    'Koken tot baby 6 maanden'
  ]

  const bottleWaterTips = [
    'Alleen met label "geschikt voor babyvoeding"',
    'Natrium < 20mg/L',
    'Nitraat < 10mg/L',
    'Ook koken tot 6 maanden'
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
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Altijd doen:
            </h2>
            <div className="space-y-2">
              {alwaysDo.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
              <X className="w-5 h-5 mr-2" />
              Nooit doen:
            </h2>
            <div className="space-y-2">
              {neverDo.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <X className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Water for formula */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Water voor flesvoeding</h2>
          
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
            <h2 className="text-lg font-semibold text-primary mb-4">Poeder bewaren:</h2>
            <div className="space-y-2">
              {powderStorage.map((tip, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
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
          <h2 className="text-lg font-semibold text-primary mb-4">Onderweg flesvoeding</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-3">Koud water methode (aanbevolen):</h3>
              <div className="space-y-2">
                {travelTipsCold.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{tip}</span>
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
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Thermometer className="w-5 h-5 mr-2" />
            Flessenwarmer vs Magnetron
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-700 mb-3">Flessenwarmer voordelen:</h3>
              <div className="space-y-2">
                {bottleWarmerAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-700 mb-3">Magnetron nadelen:</h3>
              <div className="space-y-2">
                {microwaveDisadvantages.map((disadvantage, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <X className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{disadvantage}</span>
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

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Meer informatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/veiligheid"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-700">Veiligheidsrichtlijnen </div>
              <div className="text-sm text-gray-600">Belangrijke veiligheidstips</div>
            </Link>
            <Link 
              href="/kennisbank/praktische-tips"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-700">Praktische Tips </div>
              <div className="text-sm text-gray-600">Handige tips voor ouders</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}