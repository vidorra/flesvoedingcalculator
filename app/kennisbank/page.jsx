'use client'
import { useState } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { BookOpen, Search, Info, ArrowRight, Milk, Clock, Baby, Droplets, Wrench, AlertCircle, Refrigerator, Lightbulb, ShieldCheck } from 'lucide-react'

export default function KennisbankPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredContent, setFilteredContent] = useState('')


  // Article data structure - ONLY includes actual existing articles with proper links
  const articles = [
    // BASIS FLESVOEDING - 5 actual articles
    { 
      id: 1, 
      title: 'Eerste keer flesvoeding geven', 
      category: 'basis-flesvoeding', 
      description: 'Complete stap-voor-stap gids van voorbereiding tot eerste voeding', 
      duration: '8 min',
      href: '/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven'
    },
    { 
      id: 2, 
      title: 'Flesvoeding vs borstvoeding', 
      category: 'basis-flesvoeding', 
      description: 'Complete wetenschappelijke vergelijking met kosten en onderzoek', 
      duration: '12 min',
      href: '/kennisbank/basis-flesvoeding/flesvoeding-vs-borstvoeding'
    },
    { 
      id: 3, 
      title: 'Baby weigert de fles', 
      category: 'basis-flesvoeding', 
      description: 'Wat te doen als baby fles weigert', 
      duration: '5 min',
      href: '/kennisbank/basis-flesvoeding/baby-weigert-de-fles'
    },
    { 
      id: 4, 
      title: 'Overstappen van borst naar fles', 
      category: 'basis-flesvoeding', 
      description: 'Geleidelijke overgang maken', 
      duration: '7 min',
      href: '/kennisbank/basis-flesvoeding/overstappen-van-borst-naar-fles'
    },
    { 
      id: 5, 
      title: 'Flesvoeding bij premature baby\'s', 
      category: 'basis-flesvoeding', 
      description: 'Complete medische gids, NICU ervaring, paced feeding', 
      duration: '15 min',
      href: '/kennisbank/basis-flesvoeding/flesvoeding-bij-premature-babys'
    },

    // SOORTEN FLESVOEDING - 6 actual articles  
    { 
      id: 6, 
      title: 'Verschil tussen startvoeding en opvolgmelk', 
      category: 'soorten-flesvoeding', 
      description: 'Wanneer en waarom overstappen', 
      duration: '6 min',
      href: '/kennisbank/soorten-flesvoeding/verschil-startvoeding-opvolgmelk'
    },
    { 
      id: 7, 
      title: 'Wanneer overstappen naar opvolgmelk', 
      category: 'soorten-flesvoeding', 
      description: 'Het juiste moment bepalen', 
      duration: '4 min',
      href: '/kennisbank/soorten-flesvoeding/wanneer-overstappen-opvolgmelk'
    },
    { 
      id: 8, 
      title: 'Hypoallergene flesvoeding', 
      category: 'soorten-flesvoeding', 
      description: 'Voor baby\'s met allergie risico', 
      duration: '8 min',
      href: '/kennisbank/soorten-flesvoeding/hypoallergene-flesvoeding'
    },
    { 
      id: 9, 
      title: 'Anti-reflux flesvoeding', 
      category: 'soorten-flesvoeding', 
      description: 'Complete gids tegen spugen en reflux, merken vergelijking', 
      duration: '12 min',
      href: '/kennisbank/soorten-flesvoeding/anti-reflux-flesvoeding'
    },
    { 
      id: 30, 
      title: 'Bio-organische flesvoeding', 
      category: 'soorten-flesvoeding', 
      description: 'Biologische opties en duurzame keuzes', 
      duration: '8 min',
      href: '/kennisbank/soorten-flesvoeding/bio-organische-flesvoeding'
    },
    { 
      id: 31, 
      title: 'Lactosevrije flesvoeding', 
      category: 'soorten-flesvoeding', 
      description: 'Voor baby\'s met lactose-intolerantie', 
      duration: '6 min',
      href: '/kennisbank/soorten-flesvoeding/lactosevrije-flesvoeding'
    },

    // VOEDINGSTECHNIEKEN - 9 actual articles
    { 
      id: 10, 
      title: 'Juiste houding bij flesvoeding', 
      category: 'voedingstechnieken', 
      description: 'Ergonomisch en veilig voeden', 
      duration: '5 min',
      href: '/kennisbank/voedingstechnieken/juiste-houding-bij-flesvoeding'
    },
    { 
      id: 11, 
      title: 'Fles bereiden stap voor stap', 
      category: 'voedingstechnieken', 
      description: 'Van poeder tot klare fles', 
      duration: '6 min',
      href: '/kennisbank/voedingstechnieken/fles-bereiden-stap-voor-stap'
    },
    { 
      id: 12, 
      title: 'Juiste temperatuur controleren', 
      category: 'voedingstechnieken', 
      description: 'Veilig en comfortabel', 
      duration: '3 min',
      href: '/kennisbank/voedingstechnieken/juiste-temperatuur-controleren'
    },
    { 
      id: 13, 
      title: 'Boertje laten tijdens voeding', 
      category: 'voedingstechnieken', 
      description: 'Wanneer en hoe', 
      duration: '4 min',
      href: '/kennisbank/voedingstechnieken/boertje-laten-tijdens-voeding'
    },
    { 
      id: 14, 
      title: 'Verschillende spenen uitproberen', 
      category: 'voedingstechnieken', 
      description: 'Juiste speen kiezen', 
      duration: '4 min',
      href: '/kennisbank/voedingstechnieken/verschillende-spenen-uitproberen'
    },
    { 
      id: 15, 
      title: 'Voeden van tweeling', 
      category: 'voedingstechnieken', 
      description: 'Complete survival gids, tijdsbesparing en equipment', 
      duration: '15 min',
      href: '/kennisbank/voedingstechnieken/voeden-van-tweeling'
    },
    { 
      id: 16, 
      title: 'Voedingsritme opbouwen', 
      category: 'voedingstechnieken', 
      description: 'Structuur aanbrengen', 
      duration: '12 min',
      href: '/kennisbank/praktische-tips/voedingsritme-opbouwen'
    },
    { 
      id: 32, 
      title: 'Baby leren zelf drinken', 
      category: 'voedingstechnieken', 
      description: 'Ontwikkeling naar zelfstandigheid', 
      duration: '6 min',
      href: '/kennisbank/voedingstechnieken/baby-leren-zelf-drinken'
    },
    { 
      id: 33, 
      title: 'Overgang naar beker', 
      category: 'voedingstechnieken', 
      description: 'Van fles naar beker stap voor stap', 
      duration: '5 min',
      href: '/kennisbank/voedingstechnieken/overgang-naar-beker'
    },

    // PROBLEMEN OPLOSSEN - 6 actual articles
    { 
      id: 17, 
      title: 'Baby drinkt niet genoeg', 
      category: 'problemen-oplossen', 
      description: 'Oorzaken en oplossingen', 
      duration: '5 min',
      href: '/kennisbank/problemen-oplossen/baby-drinkt-niet-genoeg'
    },
    { 
      id: 18, 
      title: 'Krampjes na flesvoeding', 
      category: 'problemen-oplossen', 
      description: 'Voorkomen en verlichten', 
      duration: '8 min',
      href: '/kennisbank/problemen-oplossen/krampjes-na-flesvoeding'
    },
    { 
      id: 19, 
      title: 'Spugen na de fles', 
      category: 'problemen-oplossen', 
      description: 'Normaal of zorgelijk?', 
      duration: '4 min',
      href: '/kennisbank/problemen-oplossen/spugen-na-de-fles'
    },
    { 
      id: 20, 
      title: 'Constipatie door flesvoeding', 
      category: 'problemen-oplossen', 
      description: 'Oorzaken en behandeling', 
      duration: '5 min',
      href: '/kennisbank/problemen-oplossen/constipatie-door-flesvoeding'
    },
    { 
      id: 34, 
      title: 'Allergische reacties flesvoeding', 
      category: 'problemen-oplossen', 
      description: 'Herkennen en handelen bij allergieën', 
      duration: '8 min',
      href: '/kennisbank/problemen-oplossen/allergische-reacties-flesvoeding'
    },
    { 
      id: 35, 
      title: 'Diarree en flesvoeding', 
      category: 'problemen-oplossen', 
      description: 'Oorzaken en wanneer naar de dokter', 
      duration: '6 min',
      href: '/kennisbank/problemen-oplossen/diarree-en-flesvoeding'
    },

    // HYGIËNE & BEREIDING - 5 actual articles
    { 
      id: 21, 
      title: 'Flessen steriliseren', 
      category: 'hygiene-bereiding', 
      description: 'Verschillende methoden', 
      duration: '5 min',
      href: '/kennisbank/hygiene-bereiding/flessen-steriliseren'
    },
    { 
      id: 22, 
      title: 'Flesvoeding bewaren', 
      category: 'hygiene-bereiding', 
      description: 'Veilige bewaring', 
      duration: '4 min',
      href: '/kennisbank/hygiene-bereiding/flesvoeding-bewaren'
    },
    { 
      id: 23, 
      title: 'Water koken voor flesvoeding', 
      category: 'hygiene-bereiding', 
      description: 'Complete veiligheidsgids voor juiste waterbereiding', 
      duration: '10 min',
      href: '/kennisbank/hygiene-bereiding/water-koken-flesvoeding'
    },
    { 
      id: 36, 
      title: 'Houdbaarheid flesvoeding', 
      category: 'hygiene-bereiding', 
      description: 'Wanneer wegooien en veilige bewaartijd', 
      duration: '5 min',
      href: '/kennisbank/hygiene-bereiding/houdbaarheid-flesvoeding'
    },
    { 
      id: 37, 
      title: 'Veilig verwarmen flesvoeding', 
      category: 'hygiene-bereiding', 
      description: 'Magnetron vs flessenwarmer veiligheid', 
      duration: '4 min',
      href: '/kennisbank/hygiene-bereiding/veilig-verwarmen-flesvoeding'
    },

    // PRAKTISCHE TIPS - 8 actual articles
    { 
      id: 24, 
      title: 'Geld besparen op flesvoeding', 
      category: 'praktische-tips', 
      description: 'Budget tips', 
      duration: '10 min',
      href: '/kennisbank/praktische-tips/geld-besparen-flesvoeding'
    },
    { 
      id: 25, 
      title: 'Nachtvoeding optimaliseren', 
      category: 'praktische-tips', 
      description: 'Van 30 naar 10 minuten per nachtvoeding, complete gids', 
      duration: '12 min',
      href: '/kennisbank/praktische-tips/nachtvoeding-optimaliseren'
    },
    { 
      id: 26, 
      title: 'Flesvoeding en werk combineren', 
      category: 'praktische-tips', 
      description: 'Werkende ouders', 
      duration: '8 min',
      href: '/kennisbank/praktische-tips/flesvoeding-werk-combineren'
    },
    { 
      id: 27, 
      title: 'Flesvoeding op vakantie', 
      category: 'praktische-tips', 
      description: 'Reizen met baby', 
      duration: '10 min',
      href: '/kennisbank/praktische-tips/flesvoeding-op-vakantie'
    },
    { 
      id: 28, 
      title: 'Uitgebreide Flesvoeding Gids 2025', 
      category: 'praktische-tips', 
      description: 'Complete 5-in-1 gids: besparen, kosten, overstappen, werk en problemen oplossen', 
      duration: '40+ min',
      href: '/kennisbank/praktische-gidsen/uitgebreide-flesvoeding-gids'
    },
    { 
      id: 38, 
      title: 'Flesvoeding en slapen', 
      category: 'praktische-tips', 
      description: 'Nachtvoeding en slaapritme optimaliseren', 
      duration: '8 min',
      href: '/kennisbank/praktische-tips/flesvoeding-en-slapen'
    },
    { 
      id: 39, 
      title: 'Partner betrekken flesvoeding', 
      category: 'praktische-tips', 
      description: 'Samen verantwoordelijkheid delen', 
      duration: '6 min',
      href: '/kennisbank/praktische-tips/partner-betrekken-flesvoeding'
    },

    // FINANCIËLE ASPECTEN - 1 actual article
    { 
      id: 29, 
      title: 'Kosten van flesvoeding', 
      category: 'basis-flesvoeding', 
      description: 'Complete budgetgids Nederland 2025', 
      duration: '15 min',
      href: '/kennisbank/financiele-aspecten/kosten-van-flesvoeding'
    }
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
      icon: Milk,
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
      icon: Droplets,
      color: 'teal'
    },
    {
      id: 'veiligheid',
      title: 'Veiligheidsrichtlijnen',
      description: 'Belangrijke veiligheidsinformatie',
      icon: ShieldCheck,
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
          <p className="text-gray-500">
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
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none text-gray-700 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Categories Filter */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-primary mb-4">Categorieën</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {/* All Categories */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`text-left p-4 rounded-xl transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-gradient-active border border-primary text-primary'
                  : 'bg-white hover:bg-white text-gray-700 border border-gray-200'
              }`}
            >
              <div className="font-medium mb-1">Alle categorieën</div>
              <div className="text-sm opacity-70">{getArticleCount('all')} artikelen</div>
            </button>
            
            {/* Individual Categories */}
            {knowledgeCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-left p-4 rounded-xl transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-gradient-active border border-primary text-primary'
                      : 'bg-white hover:bg-white text-gray-700 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <Icon className="w-5 h-5 mr-2" />
                    <span className="font-medium">{category.title}</span>
                  </div>
                  <div className="text-sm opacity-70">{getArticleCount(category.id)} artikel{getArticleCount(category.id) !== 1 ? 'en' : ''}</div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Filtered Articles Display */}
        {getFilteredArticles().length > 0 && (
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-primary mb-4">
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
                    href={article.href || `/kennisbank/${article.category}`}
                    className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors bg-white"
                  >
                    <div className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center justify-start gap-3 mb-1">
                          <h4 className="font-medium text-gray-700">{article.title}</h4>
                          {article.duration && (
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{article.duration}</span>
                          )}
                        </div>
                        <p className="text-gray-600">{article.description}</p>
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
          <h2 className="font-semibold text-primary mb-4">Kennisbank Onderwerpen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {knowledgeCategories.map((category) => {
              const Icon = category.icon
              const colorClasses = {
                blue: 'bg-white border-gray-200 text-primary hover:bg-white',
                purple: 'bg-white border-gray-200 text-gray-700 hover:bg-white',
                green: 'bg-white border-gray-200 text-gray-700 hover:bg-white',
                orange: 'bg-white border-gray-200 text-gray-700 hover:bg-white',
                teal: 'bg-white border-gray-200 text-gray-700 hover:bg-white',
                red: 'bg-white border-gray-200 text-gray-700 hover:bg-white',
                yellow: 'bg-white border-gray-200 text-gray-700 hover:bg-white'
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
          <h2 className="font-semibold text-primary mb-4">Snelle toegang</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/voedingsschemas"
              className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors bg-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-700">Voedingsschema&apos;s</h3>
                  <p className="text-sm text-gray-600 mt-1">Interactieve schema&apos;s per leeftijd</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            <Link 
              href="/"
              className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors bg-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-700">Flesvoeding Calculator</h3>
                  <p className="text-sm text-gray-600 mt-1">Bereken persoonlijke hoeveelheden</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            <Link 
              href="/faq"
              className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors bg-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-700">Veelgestelde Vragen</h3>
                  <p className="text-sm text-gray-600 mt-1">Antwoorden op veel gestelde vragen</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
          </div>
        </div>

        {/* Nederlandse Context */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-600 mb-4">Flesvoeding in Nederland</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-600 mb-3">Regelgeving & Veiligheid:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Alle merken voldoen aan EU-verordening 2016/127</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>NVWA controleert regelmatig kwaliteit</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>DHA verplicht in alle flesvoeding sinds 2020</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Nederlandse kraanwater is veilig voor bereiding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Gratis advies via consultatiebureau</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-600 mb-3">Beschikbaarheid & Kosten:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Breed assortiment in alle supermarkten</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Budget opties vanaf €35/maand (Kruidvat)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Premium merken tot €90/maand (Nutrilon)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Biologische opties verkrijgbaar (HIPP, Holle)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Online bestelling met korting mogelijk</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-primary mb-4">Meest Gestelde Vragen</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors bg-white">
              <h3 className="font-medium text-primary mb-2">Welk merk flesvoeding is het beste?</h3>
              <p className="text-gray-600">
                Alle Nederlandse merken voldoen aan dezelfde strenge EU-eisen. Kruidvat huismerk is even veilig als Nutrilon of Hero Baby, maar wel goedkoper. Kies op basis van budget en beschikbaarheid.
              </p>
            </div>
            
            <div className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors bg-white">
              <h3 className="font-medium text-primary mb-2">Hoeveel kost flesvoeding per maand?</h3>
              <p className="text-gray-600">
                Budget variant (Kruidvat): €35-50/maand. Middenklasse (Hero Baby): €50-70/maand. Premium (Nutrilon): €70-90/maand. Eerste jaar totaal: €400-1000 afhankelijk van merkkeuze.
              </p>
            </div>
            
            <div className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors bg-white">
              <h3 className="font-medium text-primary mb-2">Wanneer overstappen van nummer 1 naar 2?</h3>
              <p className="text-gray-600">
                Pas vanaf 6 maanden én wanneer baby vaste voeding krijgt. Nummer 1 mag tot 12 maanden gebruikt worden. Overstappen is dus optioneel, niet verplicht.
              </p>
            </div>
            
            <div className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors bg-white">
              <h3 className="font-medium text-primary mb-2">Kan ik van borstvoeding overstappen naar flesvoeding?</h3>
              <p className="text-gray-600">
                Ja, dit kan op elke leeftijd. Geleidelijke overgang over 1-2 weken voorkomt borstontsteking. Combivoeiding (borstvoeding + flesvoeding) is ook mogelijk.
              </p>
            </div>
            
            <div className="p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-default transition-colors bg-white">
              <h3 className="font-medium text-primary mb-2">Mijn baby weigert de fles, wat nu?</h3>
              <p className="text-gray-600">
                Check temperatuur (37°C), probeer andere speen, laat partner proberen, gebruik afgekolfde melk eerst. Geduld is belangrijk - sommige baby's hebben tijd nodig.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Tools */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-primary mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 text-primary" />
            Handige Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/"
              className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-primary transition-colors"
            >
              <h3 className="font-medium text-primary mb-2">Flesvoeding Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Bereken persoonlijke hoeveelheden per voeding</p>
              <div className="text-gray-700 hover:text-gray-600 font-medium text-sm flex items-center">
                Bereken nu <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link 
              href="/voedingsschemas"
              className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-gray-200 hover:border-primary transition-colors"
            >
              <h3 className="font-medium text-gray-700 mb-2">Voedingsschema's</h3>
              <p className="text-sm text-gray-600 mb-3">Interactieve schema's per leeftijdsgroep</p>
              <div className="text-gray-600 hover:text-gray-700 font-medium text-sm flex items-center">
                Bekijk schema's <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link 
              href="/infographics"
              className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-primary transition-colors"
            >
              <h3 className="font-medium text-gray-600 mb-2">Visuele Guides</h3>
              <p className="text-sm text-gray-600 mb-3">Stap-voor-stap infographics en tijdlijnen</p>
              <div className="text-gray-600 hover:text-gray-700 font-medium text-sm flex items-center">
                Bekijk guides <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}