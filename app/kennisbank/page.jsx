'use client'
import { useState } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { BookOpen, Search, Info, ArrowRight, Package, Clock, Baby, Shield, Wrench, AlertCircle, Refrigerator, Lightbulb, AlertTriangle } from 'lucide-react'

export default function KennisbankPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredContent, setFilteredContent] = useState('')

  // Article data structure - represents actual articles/content available
  const articles = [
    // Basis Flesvoeding - appears to have multiple articles
    { id: 1, title: 'Wat is flesvoeding en wanneer gebruik je het?', category: 'basis-flesvoeding', description: 'Fundamentele kennis voor beginners', duration: '5 min' },
    { id: 2, title: 'Eerste keer flesvoeding geven', category: 'basis-flesvoeding', description: 'Stap voor stap handleiding', duration: '4 min' },
    { id: 3, title: 'Flesvoeding vs borstvoeding', category: 'basis-flesvoeding', description: 'Vergelijking en keuze maken', duration: '6 min' },
    { id: 4, title: 'Kosten van flesvoeding', category: 'basis-flesvoeding', description: 'Wat kost flesvoeding per maand?', duration: '3 min' },
    { id: 5, title: 'Flesvoeding en werk', category: 'basis-flesvoeding', description: 'Combineren van flesvoeding met werken', duration: '4 min' },
    { id: 6, title: 'Baby weigert de fles', category: 'basis-flesvoeding', description: 'Wat te doen als baby fles weigert', duration: '5 min' },
    { id: 7, title: 'Overstappen van borst naar fles', category: 'basis-flesvoeding', description: 'Geleidelijke overgang maken', duration: '7 min' },
    { id: 8, title: 'Flesvoeding bij premature baby\'s', category: 'basis-flesvoeding', description: 'Speciale aandachtspunten', duration: '6 min' },
    { id: 9, title: 'Flesvoeding en slapen', category: 'basis-flesvoeding', description: 'Impact op slaappatroon', duration: '5 min' },
    { id: 10, title: 'Verschillende merken uitproberen', category: 'basis-flesvoeding', description: 'Hoe en waarom wisselen van merk', duration: '4 min' },
    { id: 11, title: 'Flesvoeding onderweg', category: 'basis-flesvoeding', description: 'Tips voor reizen met flesvoeding', duration: '5 min' },
    { id: 12, title: 'Partner betrekken bij flesvoeding', category: 'basis-flesvoeding', description: 'Samen zorgen voor de baby', duration: '4 min' },

    // Soorten Flesvoeding - has multiple articles as you mentioned
    { id: 13, title: 'Soorten flesvoeding (1, 2, 3)', category: 'soorten-flesvoeding', description: 'Complete uitleg van alle soorten', duration: '8 min' },
    { id: 14, title: 'Verschil tussen startvoeding en opvolgmelk', category: 'soorten-flesvoeding', description: 'Wanneer en waarom overstappen', duration: '3 min' },
    { id: 15, title: 'Wanneer overstappen naar opvolgmelk?', category: 'soorten-flesvoeding', description: 'Het juiste moment bepalen', duration: '4 min' },
    { id: 16, title: 'Hypoallergene flesvoeding', category: 'soorten-flesvoeding', description: 'Voor baby\'s met allergie risico', duration: '5 min' },
    { id: 17, title: 'Anti-reflux flesvoeding', category: 'soorten-flesvoeding', description: 'Bij spugen en reflux', duration: '4 min' },
    { id: 18, title: 'Bio en organische flesvoeding', category: 'soorten-flesvoeding', description: 'Voordelen en verschillen', duration: '4 min' },
    { id: 19, title: 'Lactosevrije flesvoeding', category: 'soorten-flesvoeding', description: 'Voor lactose-intolerantie', duration: '5 min' },
    { id: 20, title: 'Peutermelk: wel of niet?', category: 'soorten-flesvoeding', description: 'Na 12 maanden', duration: '3 min' },

    // Voedingstechnieken - multiple articles
    { id: 21, title: 'Juiste houding bij flesvoeding', category: 'voedingstechnieken', description: 'Ergonomisch en veilig voeden', duration: '5 min' },
    { id: 22, title: 'Fles bereiden stap voor stap', category: 'voedingstechnieken', description: 'Van poeder tot klare fles', duration: '6 min' },
    { id: 23, title: 'Juiste temperatuur controleren', category: 'voedingstechnieken', description: 'Veilig en comfortabel', duration: '3 min' },
    { id: 24, title: 'Boertje laten tijdens voeding', category: 'voedingstechnieken', description: 'Wanneer en hoe', duration: '4 min' },
    { id: 25, title: 'Voedingsritme opbouwen', category: 'voedingstechnieken', description: 'Structuur aanbrengen', duration: '7 min' },
    { id: 26, title: 'Nachtvoeding technieken', category: 'voedingstechnieken', description: 'Efficiënt voeden in het donker', duration: '5 min' },
    { id: 27, title: 'Baby leren zelf drinken', category: 'voedingstechnieken', description: 'Overgang naar zelfstandigheid', duration: '6 min' },
    { id: 28, title: 'Verschillende spenen uitproberen', category: 'voedingstechnieken', description: 'Juiste speen kiezen', duration: '4 min' },
    { id: 29, title: 'Voeden van tweeling', category: 'voedingstechnieken', description: 'Praktische tips voor meerlingen', duration: '8 min' },
    { id: 30, title: 'Overgang naar beker', category: 'voedingstechnieken', description: 'Van fles naar beker', duration: '5 min' },

    // Problemen Oplossen - 9 artikelen
    { id: 31, title: 'Baby drinkt niet genoeg', category: 'problemen-oplossen', description: 'Oorzaken en oplossingen', duration: '5 min' },
    { id: 32, title: 'Krampjes na flesvoeding', category: 'problemen-oplossen', description: 'Voorkomen en verlichten', duration: '4 min' },
    { id: 33, title: 'Spugen na de fles', category: 'problemen-oplossen', description: 'Normal of zorgelijk?', duration: '4 min' },
    { id: 34, title: 'Constipatie door flesvoeding', category: 'problemen-oplossen', description: 'Oorzaken en behandeling', duration: '5 min' },
    { id: 35, title: 'Diarree en flesvoeding', category: 'problemen-oplossen', description: 'Wanneer naar de dokter', duration: '4 min' },
    { id: 36, title: 'Allergische reacties', category: 'problemen-oplossen', description: 'Herkennen en handelen', duration: '6 min' },
    { id: 37, title: 'Baby weigert nieuwe formule', category: 'problemen-oplossen', description: 'Overstappen tussen merken', duration: '4 min' },
    { id: 38, title: 'Overvoeding voorkomen', category: 'problemen-oplossen', description: 'Juiste hoeveelheden', duration: '5 min' },
    { id: 39, title: 'Slaapproblemen door flesvoeding', category: 'problemen-oplossen', description: 'Voeding en slaap', duration: '6 min' },

    // Hygiëne & Bereiding - 6 artikelen  
    { id: 40, title: 'Flessen steriliseren', category: 'hygiene-bereiding', description: 'Verschillende methoden', duration: '5 min' },
    { id: 41, title: 'Flesvoeding bewaren', category: 'hygiene-bereiding', description: 'Veilige bewaring', duration: '4 min' },
    { id: 42, title: 'Water koken voor flesvoeding', category: 'hygiene-bereiding', description: 'Wanneer en hoe lang', duration: '3 min' },
    { id: 43, title: 'Schone bereiding werkplek', category: 'hygiene-bereiding', description: 'Hygiëne in de keuken', duration: '4 min' },
    { id: 44, title: 'Spenen en flessen schoonmaken', category: 'hygiene-bereiding', description: 'Dagelijkse reiniging', duration: '5 min' },
    { id: 45, title: 'Vooraf bereiden van flessen', category: 'hygiene-bereiding', description: 'Time-saving tips', duration: '6 min' },

    // Veiligheidsrichtlijnen - 6 artikelen
    { id: 46, title: 'Temperatuur controleren', category: 'veiligheid', description: 'Brandwonden voorkomen', duration: '3 min' },
    { id: 47, title: 'Veilig verwarmen van flesvoeding', category: 'veiligheid', description: 'Magnetron vs waterpad', duration: '4 min' },
    { id: 48, title: 'Houdbaarheid van flesvoeding', category: 'veiligheid', description: 'Wanneer weggooien', duration: '4 min' },
    { id: 49, title: 'Verstikkingsgevaar voorkomen', category: 'veiligheid', description: 'Veilige voedingspositie', duration: '5 min' },
    { id: 50, title: 'Reizen met flesvoeding', category: 'veiligheid', description: 'Veilig onderweg', duration: '5 min' },
    { id: 51, title: 'Noodvoorraad flesvoeding', category: 'veiligheid', description: 'Altijd prepared zijn', duration: '4 min' },

    // Praktische Tips - 15 artikelen
    { id: 52, title: 'Geld besparen op flesvoeding', category: 'praktische-tips', description: 'Budget tips', duration: '5 min' },
    { id: 53, title: 'Nachtvoeding optimaliseren', category: 'praktische-tips', description: 'Efficiënter nachts', duration: '4 min' },
    { id: 54, title: 'Flesvoeding en werk combineren', category: 'praktische-tips', description: 'Werkende ouders', duration: '6 min' },
    { id: 55, title: 'Organisatie van flesvoeding', category: 'praktische-tips', description: 'Planning en voorbereiding', duration: '5 min' },
    { id: 56, title: 'Partner betrekken', category: 'praktische-tips', description: 'Samen verantwoordelijk', duration: '4 min' },
    { id: 57, title: 'Flesvoeding op vakantie', category: 'praktische-tips', description: 'Reizen met baby', duration: '7 min' },
    { id: 58, title: 'Equipment voor flesvoeding', category: 'praktische-tips', description: 'Wat heb je nodig', duration: '5 min' },
    { id: 59, title: 'Time-saving hacks', category: 'praktische-tips', description: 'Handige shortcuts', duration: '4 min' },
    { id: 60, title: 'Flesvoeding bij oppas/kinderopvang', category: 'praktische-tips', description: 'Instructies geven', duration: '5 min' },
    { id: 61, title: 'Overgang van fles naar vast voedsel', category: 'praktische-tips', description: 'Timing en aanpak', duration: '6 min' },
    { id: 62, title: 'Flesvoeding bij ziekte', category: 'praktische-tips', description: 'Zieke baby voeden', duration: '5 min' },
    { id: 63, title: 'Bonding tijdens flesvoeding', category: 'praktische-tips', description: 'Intieme momenten creëren', duration: '4 min' },
    { id: 64, title: 'Meerlingen fles geven', category: 'praktische-tips', description: 'Tweeling/drieling', duration: '8 min' },
    { id: 65, title: 'Verschillende merken uitproberen', category: 'praktische-tips', description: 'Switching strategies', duration: '4 min' },
    { id: 66, title: 'Eco-friendly flesvoeding', category: 'praktische-tips', description: 'Duurzame keuzes', duration: '5 min' }
  ]

  // Calculate article counts per category
  const getArticleCount = (categoryId) => {
    if (categoryId === 'all') return articles.length
    return articles.filter(article => article.category === categoryId).length
  }

  // Filter articles based on selected category and search
  const getFilteredArticles = () => {
    let filtered = selectedCategory === 'all' 
      ? articles 
      : articles.filter(article => article.category === selectedCategory)
    
    if (filteredContent) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(filteredContent.toLowerCase()) ||
        article.description.toLowerCase().includes(filteredContent.toLowerCase())
      )
    }
    
    return filtered
  }

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
      icon: Package,
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
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-primary" />
            Kennisbank
          </h1>
          <p className="text-gray-600">
            Vind alle informatie over flesvoeding op één plek. Van basis kennis tot het oplossen van specifieke problemen.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={filteredContent}
              onChange={(e) => setFilteredContent(e.target.value)}
              placeholder="Zoek op leeftijd, onderwerp of vraag..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none"
            />
          </div>
        </div>

        {/* Categories Filter */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-800 mb-4">Categorieën</h2>
          <div className="space-y-2">
            {/* All Categories */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between ${
                selectedCategory === 'all'
                  ? 'bg-primary/10 border border-primary text-primary'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <span className="font-medium">Alle categorieën</span>
              <span className="text-sm opacity-70">{getArticleCount('all')} artikelen</span>
            </button>
            
            {/* Individual Categories */}
            {knowledgeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between ${
                  selectedCategory === category.id
                    ? 'bg-primary/10 border border-primary text-primary'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <span className="font-medium">{category.title}</span>
                <span className="text-sm opacity-70">{getArticleCount(category.id)} artikel{getArticleCount(category.id) !== 1 ? 'en' : ''}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Articles Display */}
        {getFilteredArticles().length > 0 && (
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">
              {selectedCategory === 'all' ? 'Alle artikelen' : knowledgeCategories.find(c => c.id === selectedCategory)?.title}
              <span className="text-sm font-normal text-gray-500 ml-2">({getFilteredArticles().length} {getFilteredArticles().length === 1 ? 'artikel' : 'artikelen'})</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getFilteredArticles().map((article) => {
                const category = knowledgeCategories.find(c => c.id === article.category)
                const Icon = category?.icon || Info
                return (
                  <Link
                    key={article.id}
                    href={`/kennisbank/${article.category}`}
                    className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-gray-800">{article.title}</h4>
                          {article.duration && (
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{article.duration}</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{article.description}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Knowledge Base Categories */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-800 mb-4">Kennisbank Onderwerpen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {knowledgeCategories.map((category) => {
              const Icon = category.icon
              const colorClasses = {
                blue: 'bg-gray-50 border-gray-200 text-primary hover:bg-gray-100',
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
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-800 mb-4">Snelle toegang</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/voedingsschemas"
              className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">Voedingsschema&apos;s</h3>
                  <p className="text-sm text-gray-600 mt-1">Interactieve schema&apos;s per leeftijd</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            <Link 
              href="/"
              className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors"
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
              className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors"
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
              className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors"
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
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 text-primary" />
            Visuele Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
              <h3 className="font-medium text-primary mb-2">Flesvoeding bereiden in 6 stappen</h3>
              <p className="text-sm text-gray-600 mb-3">Visuele stap-voor-stap handleiding</p>
              <button className="text-primary hover:text-gray-700 font-medium text-sm flex items-center">
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