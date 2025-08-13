import React, { useState, useEffect } from 'react';
import { Baby, Calculator, Info, Clock, Calendar, AlertCircle, ChevronDown, ChevronUp, Menu, X, Search, BookOpen, FileText, Users, Download, Filter, ArrowRight, Star, Heart } from 'lucide-react';

const FlesvoedingCalculator = () => {
  // Calculator states
  const [weight, setWeight] = useState('');
  const [ageMonths, setAgeMonths] = useState('0');
  const [feedingsPerDay, setFeedingsPerDay] = useState('7');
  const [calculationMethod, setCalculationMethod] = useState('standard');
  const [results, setResults] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Navigation states
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Search states
  const [searchTerm, setSearchTerm] = useState('');

  // Calculate feeding amounts based on Dutch guidelines
  const calculateFeeding = () => {
    if (!weight || weight <= 0) {
      alert('Vul een geldig gewicht in');
      return;
    }

    const weightKg = parseFloat(weight);
    const age = parseInt(ageMonths);
    const feedings = parseInt(feedingsPerDay);
    
    // Dutch standard: 150ml per kg, adjusted by age
    let mlPerKg = 150;
    if (age >= 2) mlPerKg = 140;
    if (age >= 3) mlPerKg = 130;
    if (age >= 4) mlPerKg = 120;
    if (age >= 5) mlPerKg = 110;
    if (age >= 6) mlPerKg = 100;

    const dailyAmount = Math.min(weightKg * mlPerKg, 1000); // Max 1000ml per day
    const amountPerFeeding = Math.round(dailyAmount / feedings);

    setResults({
      dailyAmount: Math.round(dailyAmount),
      feedingsPerDay: feedings,
      amountPerFeeding,
      mlPerKg,
      weightKg
    });
  };

  const navigation = [
    { id: 'home', name: 'Calculator', icon: Calculator },
    { id: 'kennisbank', name: 'Kennisbank', icon: BookOpen },
    { id: 'voedingsschemas', name: 'Voedingsschema\'s', icon: Calendar },
    { id: 'faq', name: 'FAQ', icon: Info },
    { id: 'blog', name: 'Blog', icon: FileText },
    { id: 'over-ons', name: 'Over Ons', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Baby className="w-6 h-6 text-blue-500" />
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
              >
                FlesvoedingCalculator.nl
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-2 px-3 py-3 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Disclaimer Banner */}
      {showDisclaimer && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-3">
          <div className="container mx-auto flex items-start space-x-2">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800">
              <p className="font-semibold mb-1">Medische Disclaimer</p>
              <p>Deze calculator is alleen voor informatieve doeleinden. Raadpleeg altijd uw kinderarts of consultatiebureau voor persoonlijk advies over de voeding van uw baby.</p>
            </div>
            <button 
              onClick={() => setShowDisclaimer(false)}
              className="text-amber-600 hover:text-amber-800 ml-auto"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Page Content */}
      <main className="container mx-auto px-4 py-6 pb-20">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'kennisbank' && <KennisbankPage />}
        {currentPage === 'voedingsschemas' && <VoedingsschemasPage />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'blog' && <BlogPage />}
        {currentPage === 'over-ons' && <OverOnsPage />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Baby className="w-5 h-5 text-blue-500" />
                <span className="font-bold text-gray-800">FlesvoedingCalculator.nl</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Betrouwbare informatie en tools voor flesvoeding, gebaseerd op Nederlandse richtlijnen.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Navigatie</h3>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Informatie */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Informatie</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <button 
                  onClick={() => setShowDisclaimer(true)}
                  className="block hover:text-blue-600 transition-colors"
                >
                  Medische disclaimer
                </button>
                <a href="#" className="block hover:text-blue-600 transition-colors">Privacy beleid</a>
                <a href="#" className="block hover:text-blue-600 transition-colors">Gebruiksvoorwaarden</a>
                <a href="#" className="block hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </div>

            {/* Bronnen */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Bronnen</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <a href="https://www.voedingscentrum.nl" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-600 transition-colors">
                  Voedingscentrum
                </a>
                <a href="https://www.ncj.nl" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-600 transition-colors">
                  NCJ
                </a>
                <a href="https://www.nvk.nl" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-600 transition-colors">
                  NVK
                </a>
                <a href="https://www.knov.nl" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-600 transition-colors">
                  KNOV
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              <p>© 2025 FlesvoedingCalculator.nl - Alle rechten voorbehouden</p>
            </div>
            <div className="text-xs text-gray-400">
              <p>Gebaseerd op richtlijnen van het Voedingscentrum en NCJ</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  // HomePage Component (Calculator)
  const HomePage = () => (
    <>
      {/* Disclaimer Trigger */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowDisclaimer(!showDisclaimer)}
          className="text-blue-500 hover:text-blue-600 transition-colors flex items-center space-x-1 text-sm"
        >
          <Info className="w-4 h-4" />
          <span>Medische disclaimer</span>
        </button>
      </div>

      {/* Introduction Card */}
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <Baby className="w-5 h-5 mr-2 text-blue-500" />
          Bereken de juiste hoeveelheid flesvoeding
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Gebruik deze calculator om te bepalen hoeveel flesvoeding uw baby nodig heeft. 
          Gebaseerd op de officiële Nederlandse richtlijnen van het Voedingscentrum (150ml per kg lichaamsgewicht).
        </p>
      </div>

      {/* Calculator Card */}
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6 mb-6">
        <div className="space-y-5">
          {/* Weight Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gewicht van uw baby (kg)
            </label>
            <div className="relative">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Bijv. 4.5"
                step="0.1"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kg</span>
            </div>
          </div>

          {/* Number of Feedings */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Aantal voedingen per dag
            </label>
            <select
              value={feedingsPerDay}
              onChange={(e) => setFeedingsPerDay(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none appearance-none bg-white"
            >
              <option value="4">4 voedingen (om de 6 uur)</option>
              <option value="5">5 voedingen (om de 4-5 uur)</option>
              <option value="6">6 voedingen (om de 4 uur)</option>
              <option value="7">7 voedingen (om de 3-4 uur)</option>
              <option value="8">8 voedingen (om de 3 uur)</option>
              <option value="9">9 voedingen (om de 2-3 uur)</option>
              <option value="10">10 voedingen (om de 2 uur)</option>
            </select>
          </div>

          {/* Age Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Leeftijd van uw baby
            </label>
            <select
              value={ageMonths}
              onChange={(e) => setAgeMonths(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none appearance-none bg-white"
            >
              <option value="0">0-1 maand</option>
              <option value="1">1-2 maanden</option>
              <option value="2">2-3 maanden</option>
              <option value="3">3-4 maanden</option>
              <option value="4">4-5 maanden</option>
              <option value="5">5-6 maanden</option>
              <option value="6">6+ maanden</option>
            </select>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateFeeding}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center justify-center space-x-2"
          >
            <Calculator className="w-5 h-5" />
            <span>Bereken Voeding</span>
          </button>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="space-y-4 animate-in slide-in-from-bottom duration-300">
          {/* Main Results */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Baby className="w-5 h-5 mr-2" />
              Aanbevolen Hoeveelheden
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Totaal per dag</span>
                  <span className="text-2xl font-bold">{results.dailyAmount} ml</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="text-blue-100 text-sm mb-1">Aantal voedingen</div>
                  <div className="text-xl font-bold">{results.feedingsPerDay}x</div>
                </div>
                
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="text-blue-100 text-sm mb-1">Per voeding</div>
                  <div className="text-xl font-bold">±{results.amountPerFeeding} ml</div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Toggle */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-4 flex items-center justify-between text-gray-700 hover:bg-white transition-colors"
          >
            <span className="font-medium">Bekijk details & voedingsschema</span>
            {showDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          {/* Detailed Schedule */}
          {showDetails && (
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6 animate-in slide-in-from-top duration-300">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-500" />
                Voorbeeldschema (flexibel aan te passen)
              </h4>
              
              <div className="space-y-2 mb-4">
                {generateFeedingSchedule(results.feedingsPerDay, results.amountPerFeeding).map((time, index) => (
                  <div key={index} className="flex items-center justify-between py-2 px-3 bg-blue-50/50 rounded-lg">
                    <span className="text-sm text-gray-600">{time.time}</span>
                    <span className="font-medium text-gray-800">{time.amount} ml</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-sm text-amber-800">
                  <strong>Let op:</strong> Dit is een richtlijn gebaseerd op {results.mlPerKg}ml per kg lichaamsgewicht. 
                  Uw baby kan meer of minder nodig hebben. Volg altijd de signalen van uw baby.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Information Cards */}
      <div className="mt-8 space-y-4">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
            <Info className="w-5 h-5 mr-2 text-blue-500" />
            Soorten Flesvoeding
          </h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start space-x-3">
              <span className="font-semibold text-blue-500 mt-0.5">1</span>
              <div>
                <p className="font-medium text-gray-700">Startvoeding (0-6 maanden)</p>
                <p>Volledige zuigelingenvoeding, geschikt vanaf geboorte</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="font-semibold text-blue-500 mt-0.5">2</span>
              <div>
                <p className="font-medium text-gray-700">Opvolgmelk (6-12 maanden)</p>
                <p>Vanaf 6 maanden, naast vaste voeding</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="font-semibold text-blue-500 mt-0.5">3</span>
              <div>
                <p className="font-medium text-gray-700">Peutermelk (12+ maanden)</p>
                <p>Optioneel vanaf 1 jaar, gewone melk kan ook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Kennisbank Page
  const KennisbankPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredContent, setFilteredContent] = useState('');

    const categories = [
      { id: 'all', name: 'Alle categorieën', count: 45 },
      { id: 'basis', name: 'Basis flesvoeding informatie', count: 12 },
      { id: 'soorten', name: 'Soorten flesvoeding (1, 2, 3)', count: 8 },
      { id: 'technieken', name: 'Voedingstechnieken', count: 10 },
      { id: 'problemen', name: 'Problemen oplossen', count: 9 },
      { id: 'hygiene', name: 'Hygiëne en bereiding', count: 6 }
    ];

    const articles = [
      { id: 1, title: 'Hoe bereid je flesvoeding veilig?', category: 'hygiene', readTime: '5 min', popular: true },
      { id: 2, title: 'Verschil tussen startvoeding en opvolgmelk', category: 'soorten', readTime: '3 min', popular: true },
      { id: 3, title: 'Hoeveel flesvoeding heeft mijn baby nodig?', category: 'basis', readTime: '4 min', popular: true },
      { id: 4, title: 'Baby weigert de fles - wat nu?', category: 'problemen', readTime: '6 min', popular: false },
      { id: 5, title: 'Temperatuur van flesvoeding controleren', category: 'technieken', readTime: '2 min', popular: false },
      { id: 6, title: 'Wanneer overstappen naar opvolgmelk?', category: 'soorten', readTime: '4 min', popular: true }
    ];

    const filteredArticles = selectedCategory === 'all' 
      ? articles 
      : articles.filter(article => article.category === selectedCategory);

    return (
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
    );
  };

  // Voedingsschemas Page
  const VoedingsschemasPage = () => {
    const [selectedAge, setSelectedAge] = useState('0-3m');

    const ageGroups = [
      { id: '0-3m', name: '0-3 maanden', icon: '👶' },
      { id: '3-6m', name: '3-6 maanden', icon: '🍼' },
      { id: '6-12m', name: '6-12 maanden', icon: '🥄' },
      { id: '12m+', name: '12+ maanden', icon: '🥛' }
    ];

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
    };

    const currentSchema = schemas[selectedAge];

    return (
      <div className="space-y-6">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-blue-500" />
            Voedingsschema's
          </h1>
          <p className="text-gray-600">
            Ontdek de juiste voedingsschema's per leeftijdsgroep. Inclusief hoeveelheden, tijden en ontwikkelingsmijlpalen.
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
              <button 
                onClick={() => setCurrentPage('home')}
                className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Naar Calculator
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // FAQ Page
  const FAQPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('calculator');
    const [searchQuery, setSearchQuery] = useState('');
    const [openFAQ, setOpenFAQ] = useState(null);

    const categories = [
      { id: 'calculator', name: 'Calculator gebruik', icon: Calculator },
      { id: 'feeding', name: 'Algemene voedingsvragen', icon: Baby },
      { id: 'medical', name: 'Medische vragen', icon: AlertCircle },
      { id: 'practical', name: 'Praktische tips', icon: Info }
    ];

    const faqs = {
      calculator: [
        {
          id: 1,
          question: 'Hoe nauwkeurig is deze calculator?',
          answer: 'Onze calculator is gebaseerd op de officiële Nederlandse richtlijnen van het Voedingscentrum. De berekening gebruikt 150ml per kg lichaamsgewicht als uitgangspunt, aangepast voor leeftijd. Dit geeft een goede richtlijn, maar elke baby is uniek.'
        },
        {
          id: 2,
          question: 'Waarom wijkt het resultaat af van wat mijn dokter zei?',
          answer: 'Artsen kunnen specifieke aanbevelingen geven op basis van de individuele ontwikkeling van uw baby. Onze calculator geeft algemene richtlijnen. Volg altijd het advies van uw kinderarts.'
        }
      ],
      feeding: [
        {
          id: 3,
          question: 'Hoeveel flesvoeding heeft mijn baby per dag nodig?',
          answer: 'Dit hangt af van het gewicht en de leeftijd van uw baby. Als vuistregel geldt 150ml per kg lichaamsgewicht per dag, verdeeld over meerdere voedingen. Gebruik onze calculator voor een persoonlijke berekening.'
        },
        {
          id: 4,
          question: 'Kan mijn baby teveel flesvoeding krijgen?',
          answer: 'Ja, overvoeding kan voorkomen. Baby\'s hebben een natuurlijk verzadigingsgevoel. Stop met voeden als uw baby de fles wegduwt, zijn hoofd wegdraait of niet meer zuigt.'
        }
      ],
      medical: [
        {
          id: 5,
          question: 'Wanneer moet ik contact opnemen met de dokter?',
          answer: 'Neem contact op bij: ongewone gewichtstoename of -afname, braken na elke voeding, tekenen van uitdroging, of als u zich zorgen maakt over de voeding van uw baby.'
        }
      ],
      practical: [
        {
          id: 6,
          question: 'Hoe warm moet flesvoeding zijn?',
          answer: 'Flesvoeding moet lichaamstemperatuur hebben (37°C). Test de temperatuur door een druppel op uw pols te doen - het moet lauw aanvoelen, niet heet of koud.'
        }
      ]
    };

    const currentFAQs = faqs[selectedCategory] || [];

    return (
      <div className="space-y-6">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <Info className="w-6 h-6 mr-3 text-blue-500" />
            Veelgestelde Vragen
          </h1>
          <p className="text-gray-600">
            Vind snel antwoorden op de meest gestelde vragen over flesvoeding en onze calculator.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Zoek in veelgestelde vragen..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4">Categorieën</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-xl border transition-all text-left ${
                    selectedCategory === category.id
                      ? 'bg-blue-50 border-blue-200 text-blue-700'
                      : 'bg-white border-gray-200 hover:border-blue-200 text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mb-2" />
                  <div className="font-medium">{category.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4">
            {categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          <div className="space-y-4">
            {currentFAQs.map((faq) => (
              <div key={faq.id} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                  className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {openFAQ === faq.id ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                {openFAQ === faq.id && (
                  <div className="px-4 pb-4 text-gray-600 border-t border-gray-100 bg-gray-50/50">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
          <h2 className="font-semibold mb-2">Vraag niet gevonden?</h2>
          <p className="text-blue-100 mb-4">
            Neem contact met ons op voor persoonlijke ondersteuning bij uw vragen over flesvoeding.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors">
            Contact opnemen
          </button>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-1">Medische Disclaimer</h3>
              <p className="text-sm text-amber-700">
                De informatie op deze pagina is alleen voor informatieve doeleinden en vervangt geen professioneel medisch advies. 
                Raadpleeg altijd uw kinderarts of een gekwalificeerde zorgverlener voor specifieke medische vragen.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Blog Page
  const BlogPage = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [sortBy, setSortBy] = useState('date');

    const filters = [
      { id: 'all', name: 'Alle artikelen' },
      { id: 'newborn', name: '0-3 maanden' },
      { id: 'infant', name: '3-6 maanden' },
      { id: 'older', name: '6+ maanden' },
      { id: 'tips', name: 'Tips & Tricks' },
      { id: 'nutrition', name: 'Voeding' }
    ];

    const sortOptions = [
      { id: 'date', name: 'Nieuwste eerst' },
      { id: 'popular', name: 'Populairste' },
      { id: 'alphabetical', name: 'Alfabetisch' }
    ];

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
    ];

    const filteredArticles = selectedFilter === 'all' 
      ? articles 
      : articles.filter(article => article.category === selectedFilter);

    const sortedArticles = [...filteredArticles].sort((a, b) => {
      if (sortBy === 'date') return new Date(b.publishDate) - new Date(a.publishDate);
      if (sortBy === 'popular') return b.popular - a.popular;
      if (sortBy === 'alphabetical') return a.title.localeCompare(b.title);
      return 0;
    });

    const featuredArticle = articles.find(article => article.featured);

    return (
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
    );
  };

  // Over Ons Page
  const OverOnsPage = () => {
    const team = [
      {
        name: 'Dr. Sarah van der Berg',
        role: 'Kinderarts & Voedingsspecialist',
        bio: 'Dr. van der Berg heeft meer dan 15 jaar ervaring in de kindergeneeskunde en specialiseert zich in voeding voor zuigelingen.',
        avatar: '👩‍⚕️'
      },
      {
        name: 'Lisa Hendriksen',
        role: 'Verloskundige & Lactatie Expert',
        bio: 'Lisa begeleidt ouders al 10 jaar bij voedingsvragen en heeft uitgebreide kennis van zowel borst- als flesvoeding.',
        avatar: '👩‍💼'
      },
      {
        name: 'Mark Jansen',
        role: 'Ontwikkelaar & Vader',
        bio: 'Mark ontwikkelde deze tool vanuit eigen ervaring als vader en zijn passie voor het helpen van andere ouders.',
        avatar: '👨‍💻'
      }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <Users className="w-6 h-6 mr-3 text-blue-500" />
            Over Ons
          </h1>
          <p className="text-gray-600">
            Leer meer over ons team, onze missie en waarom je onze flesvoeding calculator kunt vertrouwen.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Heart className="w-6 h-6 mr-2 text-red-300" />
            Onze Missie
          </h2>
          <p className="text-blue-100 leading-relaxed">
            Wij geloven dat elke ouder toegang moet hebben tot betrouwbare, evidence-based informatie over flesvoeding. 
            Onze missie is om ouders te ondersteunen met praktische tools en kennis, zodat ze zelfverzekerde beslissingen 
            kunnen nemen over de voeding van hun baby. We maken complexe voedingsrichtlijnen toegankelijk en begrijpelijk 
            voor iedereen.
          </p>
        </div>

        {/* Why Trust Us */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2 text-blue-500" />
            Waarom FlesvoedingCalculator.nl vertrouwen?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Evidence-Based</h3>
                  <p className="text-sm text-gray-600">Gebaseerd op officiële Nederlandse richtlijnen van het Voedingscentrum en het Nederlands Centrum Jeugdgezondheid.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Expert Team</h3>
                  <p className="text-sm text-gray-600">Ontwikkeld door kinderartsen, verloskundigen en voedingsspecialisten met jarenlange ervaring.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Regelmatig Geüpdatet</h3>
                  <p className="text-sm text-gray-600">Onze informatie wordt regelmatig gecontroleerd en bijgewerkt volgens de laatste inzichten.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Privacy Gewaarborgd</h3>
                  <p className="text-sm text-gray-600">We bewaren geen persoonlijke gegevens en respecteren volledig uw privacy.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Gratis Toegankelijk</h3>
                  <p className="text-sm text-gray-600">Alle informatie en tools zijn gratis beschikbaar voor alle ouders in Nederland.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Gebruiksvriendelijk</h3>
                  <p className="text-sm text-gray-600">Ontwikkeld met ouders, voor ouders. Simpel en duidelijk in gebruik.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Method */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Calculator className="w-5 h-5 mr-2 text-blue-500" />
            Onze Methode
          </h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-medium text-blue-800 mb-2">Nederlandse Richtlijnen</h3>
              <p className="text-sm text-blue-700">
                Onze calculator gebruikt de officiële Nederlandse norm van 150ml flesvoeding per kg lichaamsgewicht per dag, 
                aangepast voor leeftijd volgens de richtlijnen van het Voedingscentrum.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="font-medium text-green-800 mb-2">Leeftijdsaanpassingen</h3>
              <p className="text-sm text-green-700">
                De berekening wordt automatisch aangepast op basis van de leeftijd van uw baby, omdat voedingsbehoeften 
                veranderen naarmate baby's groeien en ontwikkelen.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-4">
              <h3 className="font-medium text-amber-800 mb-2">Individuele Variatie</h3>
              <p className="text-sm text-amber-700">
                We benadrukken altijd dat elke baby uniek is. Onze calculator geeft een richtlijn, maar het is belangrijk 
                om ook naar de signalen van uw baby te luisteren en contact op te nemen met uw zorgverlener bij vragen.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-6 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-500" />
            Ons Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-3">{member.avatar}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
            Bronnen & Expertise
          </h2>
          
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Voedingscentrum Nederland</strong> - Officiële voedingsrichtlijnen voor zuigelingen</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Nederlands Centrum Jeugdgezondheid (NCJ)</strong> - Groei- en ontwikkelingsrichtlijnen</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Nederlandse Vereniging voor Kindergeneeskunde</strong> - Medische standaarden</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Koninklijke Nederlandse Organisatie van Verloskundigen (KNOV)</strong> - Voedingsadvies</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Wetenschappelijke literatuur</strong> - Peer-reviewed onderzoek naar zuigelingenvoeding</span>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
          <h2 className="font-semibold mb-2">Vragen of feedback?</h2>
          <p className="text-blue-100 mb-4">
            We horen graag van je! Neem contact met ons op voor vragen, suggesties of als je meer wilt weten over onze aanpak.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors">
              Contact opnemen
            </button>
            <button className="bg-blue-400 hover:bg-blue-300 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Feedback versturen
            </button>
          </div>
        </div>
      </div>
    );
  };
};

// Helper function to generate feeding schedule
const generateFeedingSchedule = (feedingsPerDay, amountPerFeeding) => {
  const schedules = {
    4: ['07:00', '12:00', '17:00', '22:00'],
    5: ['07:00', '11:00', '15:00', '19:00', '23:00'],
    6: ['06:00', '10:00', '14:00', '18:00', '22:00', '02:00'],
    7: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
    8: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00', '03:00'],
    9: ['06:00', '08:30', '11:00', '13:30', '16:00', '18:30', '21:00', '23:30', '02:00'],
    10: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00']
  };
  
  const times = schedules[feedingsPerDay] || schedules[5];
  return times.map(time => ({ time, amount: amountPerFeeding }));
};

export default FlesvoedingCalculator;