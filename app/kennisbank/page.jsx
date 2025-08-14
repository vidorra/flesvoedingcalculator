'use client'
import { useState } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { BookOpen, Search, Info, ArrowRight, Star, Clock, Baby, Shield, Wrench, AlertCircle, Refrigerator, Lightbulb, AlertTriangle } from 'lucide-react'

export default function KennisbankPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredContent, setFilteredContent] = useState('')

  const knowledgeCategories = [
    {
      id: 'basis-flesvoeding',
      title: 'Basis Flesvoeding',
      description: 'Fundamentele informatie voor beginnende ouders',
      icon: Baby,
      color: 'blue'
    },
    {
      id: 'soorten-flesvoeding',
      title: 'Soorten Flesvoeding',
      description: 'Startmelk, opvolgmelk en peutermelk uitgelegd',
      icon: Star,
      color: 'purple'
    },
    {
      id: 'voedingstechnieken',
      title: 'Voedingstechnieken',
      description: 'Juiste houding en technieken voor flesvoeding',
      icon: Wrench,
      color: 'green'
    },
    {
      id: 'problemen-oplossen',
      title: 'Problemen Oplossen',
      description: 'Hulp bij veelvoorkomende problemen',
      icon: AlertCircle,
      color: 'orange'
    },
    {
      id: 'hygiene-bereiding',
      title: 'Hygiëne & Bereiding',
      description: 'Veilig bereiden en bewaren van flesvoeding',
      icon: Shield,
      color: 'teal'
    },
    {
      id: 'veiligheid',
      title: 'Veiligheidsrichtlijnen',
      description: 'Belangrijke veiligheidsinformatie',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      id: 'praktische-tips',
      title: 'Praktische Tips',
      description: 'Handige tips voor het dagelijks leven',
      icon: Lightbulb,
      color: 'yellow'
    }
  ]


  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-blue-500" />
            Kennisbank
          </h1>
          <p className="text-gray-600">
            Vind alle informatie over flesvoeding op één plek. Van basis kennis tot het oplossen van specifieke problemen.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={filteredContent}
              onChange={(e) => setFilteredContent(e.target.value)}
              placeholder="Zoek op leeftijd, onderwerp of vraag..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
            />
          </div>
        </div>

        {/* Knowledge Base Categories */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4">Kennisbank Onderwerpen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {knowledgeCategories.map((category) => {
              const Icon = category.icon
              const colorClasses = {
                blue: 'bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100',
                purple: 'bg-purple-50 border-purple-200 text-purple-800 hover:bg-purple-100',
                green: 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100',
                orange: 'bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100',
                teal: 'bg-teal-50 border-teal-200 text-teal-800 hover:bg-teal-100',
                red: 'bg-red-50 border-red-200 text-red-800 hover:bg-red-100',
                yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100'
              }
              return (
                <Link
                  key={category.id}
                  href={`/kennisbank/${category.id}`}
                  className={`p-4 rounded-xl border transition-all block ${colorClasses[category.color]}`}
                >
                  <div className="flex items-start space-x-3">
                    <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">{category.title}</h3>
                      <p className="text-sm opacity-80">{category.description}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Quick Access */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4">Snelle toegang</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/voedingsschemas"
              className="p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">Voedingsschema's</h3>
                  <p className="text-sm text-gray-600 mt-1">Interactieve schema's per leeftijd</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            <Link 
              href="/"
              className="p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">Flesvoeding Calculator</h3>
                  <p className="text-sm text-gray-600 mt-1">Bereken persoonlijke hoeveelheden</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            <Link 
              href="/faq"
              className="p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">Veelgestelde Vragen</h3>
                  <p className="text-sm text-gray-600 mt-1">Antwoorden op veel gestelde vragen</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            <Link 
              href="/partners"
              className="p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">Partners & Merken</h3>
                  <p className="text-sm text-gray-600 mt-1">Informatie over verschillende merken</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
          </div>
        </div>

        {/* Infographics Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 text-blue-500" />
            Visuele Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <h3 className="font-medium text-blue-800 mb-2">Flesvoeding bereiden in 6 stappen</h3>
              <p className="text-sm text-blue-600 mb-3">Visuele stap-voor-stap handleiding</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                Bekijk infographic <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <h3 className="font-medium text-green-800 mb-2">Voedingsschema per leeftijd</h3>
              <p className="text-sm text-green-600 mb-3">Overzichtelijke tijdlijn</p>
              <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
                Bekijk infographic <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}