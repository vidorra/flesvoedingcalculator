'use client'
import { useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { Calendar, Clock, Star, ArrowRight, Download, Calculator } from 'lucide-react'

export default function VoedingsschemasPage() {
  const [selectedAge, setSelectedAge] = useState('0-3m')

  const ageGroups = [
    { id: '0-3m', name: '0-3 maanden', icon: '👶' },
    { id: '3-6m', name: '3-6 maanden', icon: '🍼' },
    { id: '6-12m', name: '6-12 maanden', icon: '🥄' },
    { id: '12m+', name: '12+ maanden', icon: '🥛' }
  ]

  const schemas = {
    '0-3m': {
      feeds: '6-8 voedingen',
      amount: '60-120 ml per voeding',
      interval: 'Om de 2-4 uur',
      examples: ['06:00 - 90ml', '09:00 - 90ml', '12:00 - 90ml', '15:00 - 90ml', '18:00 - 90ml', '21:00 - 90ml'],
      milestones: ['Gewichtstoename', 'Regelmatig voedingspatroon', 'Meer alertheid'],
      nextPhase: 'Rond 3-4 maanden kan het aantal voedingen afnemen maar de hoeveelheid per voeding toenemen.'
    },
    '3-6m': {
      feeds: '5-6 voedingen',
      amount: '120-180 ml per voeding',
      interval: 'Om de 3-4 uur',
      examples: ['07:00 - 150ml', '11:00 - 150ml', '15:00 - 150ml', '19:00 - 150ml', '23:00 - 150ml'],
      milestones: ['Interesse in vast voedsel', 'Kunnen zelf fles vasthouden', 'Nachts langer slapen'],
      nextPhase: 'Vanaf 6 maanden wordt vast voedsel geïntroduceerd naast flesvoeding.'
    },
    '6-12m': {
      feeds: '3-4 voedingen',
      amount: '180-240 ml per voeding',
      interval: 'Om de 4-6 uur',
      examples: ['07:00 - 200ml', '12:00 - 200ml', '18:00 - 200ml', '22:00 - 200ml'],
      milestones: ['Vast voedsel als hoofdmaaltijd', 'Eigen lepel proberen', 'Variatie in smaak'],
      nextPhase: 'Overgang naar gewone melk en zelfstandig eten.'
    },
    '12m+': {
      feeds: '2-3 voedingen',
      amount: '200-250 ml per voeding',
      interval: 'Bij hoofdmaaltijden',
      examples: ['07:00 - 220ml', '12:00 - 220ml', '19:00 - 220ml'],
      milestones: ['Zelfstandig eten', 'Gevarieerd dieet', 'Gewone melk mogelijk'],
      nextPhase: 'Volledige overgang naar gevarieerd dieet en gewone melk.'
    }
  }

  const currentSchema = schemas[selectedAge]

  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-blue-500" />
            Voedingsschema&apos;s
          </h1>
          <p className="text-gray-600">
            Ontdek de juiste voedingsschema&apos;s per leeftijdsgroep. Inclusief hoeveelheden, tijden en ontwikkelingsmijlpalen.
          </p>
        </div>

        {/* Age Tabs */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {ageGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setSelectedAge(group.id)}
                className={`p-3 rounded-xl transition-all text-center ${
                  selectedAge === group.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-50 text-gray-700 hover:bg-blue-50'
                }`}
              >
                <div className="text-2xl mb-1">{group.icon}</div>
                <div className="text-sm font-medium">{group.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Schema Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Schema Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
              <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-500" />
                Schema Overzicht
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="font-medium text-blue-800">Aantal voedingen</div>
                  <div className="text-blue-600">{currentSchema.feeds}</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="font-medium text-green-800">Hoeveelheid</div>
                  <div className="text-green-600">{currentSchema.amount}</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="font-medium text-purple-800">Interval</div>
                  <div className="text-purple-600">{currentSchema.interval}</div>
                </div>
              </div>

              <h3 className="font-medium text-gray-800 mb-3">Voorbeeldtijden</h3>
              <div className="space-y-2">
                {currentSchema.examples.map((example, index) => (
                  <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">{example.split(' - ')[0]}</span>
                    <span className="font-medium text-gray-800">{example.split(' - ')[1]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Milestones */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
              <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-blue-500" />
                Ontwikkelingsmijlpalen
              </h2>
              <div className="space-y-2">
                {currentSchema.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Next Phase */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2 text-blue-500" />
                Volgende Fase
              </h3>
              <p className="text-sm text-gray-600">{currentSchema.nextPhase}</p>
            </div>

            {/* Download Options */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Download className="w-5 h-5 mr-2 text-blue-500" />
                Downloads
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>PDF Schema</span>
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Voeg toe aan agenda</span>
                </button>
              </div>
            </div>

            {/* Quick Calculator */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-blue-500" />
                Snelle Berekening
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Wil je een persoonlijk schema? Gebruik de calculator!
              </p>
              <Link 
                href="/"
                className="block w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors text-center"
              >
                Naar Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}