'use client'
import { useState } from 'react'
import Layout from '../../components/Layout'
import { BookOpen, Search, Info, ArrowRight, Star, Clock } from 'lucide-react'

export default function KennisbankPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredContent, setFilteredContent] = useState('')

  const categories = [
    { id: 'all', name: 'Alle categorieën', count: 45 },
    { id: 'basis', name: 'Basis flesvoeding informatie', count: 12 },
    { id: 'soorten', name: 'Soorten flesvoeding (1, 2, 3)', count: 8 },
    { id: 'technieken', name: 'Voedingstechnieken', count: 10 },
    { id: 'problemen', name: 'Problemen oplossen', count: 9 },
    { id: 'hygiene', name: 'Hygiëne en bereiding', count: 6 }
  ]

  const articles = [
    { id: 1, title: 'Hoe bereid je flesvoeding veilig?', category: 'hygiene', readTime: '5 min', popular: true },
    { id: 2, title: 'Verschil tussen startvoeding en opvolgmelk', category: 'soorten', readTime: '3 min', popular: true },
    { id: 3, title: 'Hoeveel flesvoeding heeft mijn baby nodig?', category: 'basis', readTime: '4 min', popular: true },
    { id: 4, title: 'Baby weigert de fles - wat nu?', category: 'problemen', readTime: '6 min', popular: false },
    { id: 5, title: 'Temperatuur van flesvoeding controleren', category: 'technieken', readTime: '2 min', popular: false },
    { id: 6, title: 'Wanneer overstappen naar opvolgmelk?', category: 'soorten', readTime: '4 min', popular: true }
  ]

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

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

        {/* Categories */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4">Categorieën</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl border transition-all text-left ${
                  selectedCategory === category.id
                    ? 'bg-blue-50 border-blue-200 text-blue-700'
                    : 'bg-white border-gray-200 hover:border-blue-200 text-gray-700'
                }`}
              >
                <div className="font-medium">{category.name}</div>
                <div className="text-sm text-gray-500 mt-1">{category.count} artikelen</div>
              </button>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">
              {selectedCategory === 'all' ? 'Alle artikelen' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-sm text-gray-500">{filteredArticles.length} artikelen</span>
          </div>
          
          <div className="space-y-4">
            {filteredArticles.map((article) => (
              <div key={article.id} className="p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-medium text-gray-800">{article.title}</h3>
                      {article.popular && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </span>
                      <span className="capitalize">{categories.find(c => c.id === article.category)?.name}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
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