'use client'
import { useState } from 'react'
import Layout from '../../components/Layout'
import { FileText, Star, ArrowRight, Clock, Heart, Filter } from 'lucide-react'

export default function BlogPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  const filters = [
    { id: 'all', name: 'Alle artikelen' },
    { id: 'newborn', name: '0-3 maanden' },
    { id: 'infant', name: '3-6 maanden' },
    { id: 'older', name: '6+ maanden' },
    { id: 'tips', name: 'Tips & Tricks' },
    { id: 'nutrition', name: 'Voeding' }
  ]

  const sortOptions = [
    { id: 'date', name: 'Nieuwste eerst' },
    { id: 'popular', name: 'Populairste' },
    { id: 'alphabetical', name: 'Alfabetisch' }
  ]

  const articles = [
    {
      id: 1,
      title: 'De Complete Gids voor Flesvoeding: Alles wat je moet weten',
      excerpt: 'Een uitgebreide handleiding over flesvoeding, van de juiste hoeveelheden tot bereiding en timing.',
      category: 'nutrition',
      readTime: '8 min',
      publishDate: '2025-01-10',
      author: 'Dr. Sarah van der Berg',
      image: '📚',
      popular: true,
      featured: true
    },
    {
      id: 2,
      title: '5 Veelgemaakte Fouten bij Flesvoeding (en hoe je ze vermijdt)',
      excerpt: 'Leer van deze veelvoorkomende fouten om de voeding van je baby te optimaliseren.',
      category: 'tips',
      readTime: '6 min',
      publishDate: '2025-01-08',
      author: 'Lisa Hendriksen',
      image: '⚠️',
      popular: true,
      featured: false
    },
    {
      id: 3,
      title: 'Wanneer overstappen van startvoeding naar opvolgmelk?',
      excerpt: 'De belangrijkste signalen en timing voor de overgang naar opvolgmelk.',
      category: 'infant',
      readTime: '5 min',
      publishDate: '2025-01-05',
      author: 'Mark Jansen',
      image: '🍼',
      popular: false,
      featured: false
    },
    {
      id: 4,
      title: 'Nachtvoeding: Tips voor een betere nachtrust',
      excerpt: 'Praktische adviezen om nachtvoedingen soepeler te laten verlopen.',
      category: 'newborn',
      readTime: '7 min',
      publishDate: '2025-01-03',
      author: 'Dr. Sarah van der Berg',
      image: '🌙',
      popular: true,
      featured: false
    },
    {
      id: 5,
      title: 'Hygiëne bij flesvoeding: Een stap-voor-stap handleiding',
      excerpt: 'Alles over het veilig bereiden en bewaren van flesvoeding.',
      category: 'tips',
      readTime: '4 min',
      publishDate: '2025-01-01',
      author: 'Lisa Hendriksen',
      image: '🧼',
      popular: false,
      featured: false
    },
    {
      id: 6,
      title: 'Groeivertraging en flesvoeding: Wat ouders moeten weten',
      excerpt: 'Hoe herken je groeivertraging en wat kun je doen om je baby te helpen?',
      category: 'nutrition',
      readTime: '9 min',
      publishDate: '2024-12-28',
      author: 'Dr. Tom Peters',
      image: '📈',
      popular: false,
      featured: false
    }
  ]

  const filteredArticles = selectedFilter === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedFilter)

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === 'date') return new Date(b.publishDate) - new Date(a.publishDate)
    if (sortBy === 'popular') return b.popular - a.popular
    if (sortBy === 'alphabetical') return a.title.localeCompare(b.title)
    return 0
  })

  const featuredArticle = articles.find(article => article.featured)

  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-blue-500" />
            Blog
          </h1>
          <p className="text-gray-600">
            Ontdek de nieuwste artikelen, tips en inzichten over flesvoeding van onze experts.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <span className="text-blue-100 font-medium">Uitgelicht artikel</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold mb-2">{featuredArticle.title}</h2>
                <p className="text-blue-100 mb-4">{featuredArticle.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-blue-200">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredArticle.readTime}
                  </span>
                  <span>{featuredArticle.author}</span>
                  <span>{new Date(featuredArticle.publishDate).toLocaleDateString('nl-NL')}</span>
                </div>
              </div>
              <div className="text-6xl text-center">{featuredArticle.image}</div>
            </div>
            <button className="mt-4 bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors flex items-center space-x-2">
              <span>Lees artikel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Filters and Sort */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h2 className="font-semibold text-gray-800 mb-3">Filter artikelen</h2>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedFilter === filter.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none bg-white"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedArticles.map((article) => (
            <div key={article.id} className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{article.image}</div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {filters.find(f => f.id === article.category)?.name}
                  </span>
                  {article.popular && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                    <span>{new Date(article.publishDate).toLocaleDateString('nl-NL')}</span>
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Door {article.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                Blijf op de hoogte
              </h2>
              <p className="text-gray-600 text-sm">
                Ontvang wekelijks de nieuwste artikelen en tips over flesvoeding in je inbox.
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors whitespace-nowrap ml-4">
              Aanmelden
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}