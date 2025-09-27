'use client'
import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import AdminAuth from '../../components/AdminAuth'
import { Download, Database, Search, RefreshCw, CheckCircle, XCircle, Clock, Info } from 'lucide-react'

export default function AdminPage() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(false)
  const [updateLoading, setUpdateLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchLoading, setSearchLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [testResult, setTestResult] = useState(null)
  const [affiliateStats, setAffiliateStats] = useState(null)
  const [affiliateArticles, setAffiliateArticles] = useState([])
  const [automationLoading, setAutomationLoading] = useState(false)

  // Load stats on component mount
  useEffect(() => {
    loadStats()
    loadAffiliateStats()
  }, [])

  const loadAffiliateStats = async () => {
    try {
      const response = await fetch('/api/affiliate-automation?action=stats')
      const data = await response.json()
      if (data.success) {
        setAffiliateStats(data.stats)
      }
      
      const articlesResponse = await fetch('/api/affiliate-automation?action=list')
      const articlesData = await articlesResponse.json()
      if (articlesData.success) {
        setAffiliateArticles(articlesData.articles)
      }
    } catch (error) {
      console.error('Error loading affiliate stats:', error)
    }
  }

  const loadStats = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/bol-feed?action=stats')
      const data = await response.json()
      
      if (data.success) {
        setStats(data.stats)
      } else {
        setMessage(`Error loading stats: ${data.error}`)
      }
    } catch (error) {
      setMessage(`Network error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const updateFeed = async () => {
    setUpdateLoading(true)
    setMessage('Starting product feed update...')
    
    try {
      const response = await fetch('/api/bol-feed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'update' })
      })
      
      const data = await response.json()
      
      if (data.success) {
        setMessage('Product feed updated successfully!')
        await loadStats() // Refresh stats
      } else {
        setMessage(`Update failed: ${data.error}`)
      }
    } catch (error) {
      setMessage(`Update error: ${error.message}`)
    } finally {
      setUpdateLoading(false)
    }
  }

  const searchProducts = async () => {
    if (!searchQuery.trim()) return
    
    setSearchLoading(true)
    try {
      const response = await fetch(`/api/bol-feed?action=search&query=${encodeURIComponent(searchQuery)}&limit=20`)
      const data = await response.json()
      
      if (data.success) {
        setSearchResults(data.products)
        setMessage(`Found ${data.results} products for "${searchQuery}"`)
      } else {
        setMessage(`Search failed: ${data.error}`)
        setSearchResults([])
      }
    } catch (error) {
      setMessage(`Search error: ${error.message}`)
      setSearchResults([])
    } finally {
      setSearchLoading(false)
    }
  }

  const testConnection = async () => {
    setMessage('Testing connection to Bol.com feed...')
    try {
      const response = await fetch('/api/bol-feed?action=test')
      const data = await response.json()
      
      if (data.success) {
        setTestResult(data.test)
        setMessage('Connection test completed - check results below')
      } else {
        setMessage(`Test failed: ${data.error}`)
      }
    } catch (error) {
      setMessage(`Test error: ${error.message}`)
    }
  }

  const processAffiliatesByPriority = async (priority) => {
    setAutomationLoading(true)
    setMessage(`Processing ${priority} priority articles...`)
    
    try {
      const response = await fetch('/api/affiliate-automation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          action: 'process-priority',
          priority: priority
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        setMessage(`✅ Successfully processed ${data.summary.successful}/${data.summary.total} articles. Added ${data.summary.totalProducts} product links!`)
        await loadAffiliateStats() // Refresh stats
      } else {
        setMessage(`❌ Processing failed: ${data.error}`)
      }
    } catch (error) {
      setMessage(`❌ Processing error: ${error.message}`)
    } finally {
      setAutomationLoading(false)
    }
  }

  const processAllAffiliates = async () => {
    setAutomationLoading(true)
    setMessage('Processing ALL articles with affiliate links...')
    
    try {
      const response = await fetch('/api/affiliate-automation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          action: 'process-all'
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        const summary = data.summary
        setMessage(`🚀 COMPLETE! Processed ${summary.successful}/${summary.total} articles. Added ${summary.totalProducts} total product links across all priority levels!`)
        await loadAffiliateStats() // Refresh stats
      } else {
        setMessage(`❌ Full processing failed: ${data.error}`)
      }
    } catch (error) {
      setMessage(`❌ Processing error: ${error.message}`)
    } finally {
      setAutomationLoading(false)
    }
  }

  const formatPrice = (price) => {
    if (!price) return 'N/A'
    return `€${(price / 100).toFixed(2)}`
  }

  return (
    <AdminAuth>
      <Layout>
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Bol.com Product Feed Admin
        </h1>

        {/* Message Display */}
        {message && (
          <div className={`p-4 rounded-lg mb-6 ${
            message.includes('successfully') ? 'bg-green-50 text-green-800 border border-green-200' : 
            message.includes('error') || message.includes('failed') ? 'bg-red-50 text-red-800 border border-red-200' : 
            'bg-blue-50 text-blue-800 border border-blue-200'
          }`}>
            <div className="flex items-start space-x-2">
              {message.includes('successfully') && <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
              {(message.includes('error') || message.includes('failed')) && <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
              {(!message.includes('successfully') && !message.includes('error') && !message.includes('failed')) && <Info className="w-5 h-5 mt-0.5 flex-shrink-0" />}
              <span>{message}</span>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900">
                  {loading ? '...' : stats?.totalProducts?.toLocaleString() || 'N/A'}
                </p>
              </div>
              <Database className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cache Size</p>
                <p className="text-2xl font-bold text-gray-900">
                  {loading ? '...' : stats?.cacheSize || 'N/A'}
                </p>
              </div>
              <Download className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Last Update</p>
                <p className="text-lg font-semibold text-gray-900">
                  {loading ? '...' : stats?.lastDownload ? 
                    new Date(stats.lastDownload).toLocaleDateString('nl-NL') : 'Never'}
                </p>
                <p className="text-xs text-gray-500">
                  {stats?.needsUpdate ? 'Update needed' : 'Up to date'}
                </p>
              </div>
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Feed Management</h2>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={updateFeed}
              disabled={updateLoading}
              className="bg-primary hover:bg-primary-hover disabled:bg-gray-400 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${updateLoading ? 'animate-spin' : ''}`} />
              <span>{updateLoading ? 'Updating...' : 'Update Product Feed'}</span>
            </button>
            
            <button
              onClick={loadStats}
              disabled={loading}
              className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Stats</span>
            </button>

            <button
              onClick={testConnection}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Test Connection</span>
            </button>
          </div>
          
          {stats?.needsUpdate && (
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-800 text-sm">
                ⚠️ Product feed is outdated. Consider updating to get the latest products and prices.
              </p>
            </div>
          )}
        </div>

        {/* Connection Test Results */}
        {testResult && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Connection Test Results</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-4 rounded-lg ${testResult.hasCredentials ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <div className="flex items-center space-x-2">
                    {testResult.hasCredentials ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                    <span className="font-medium">Credentials</span>
                  </div>
                  <div className="text-sm mt-2">
                    <div>Username: {testResult.username}</div>
                    <div>Password: {testResult.password}</div>
                  </div>
                </div>

                {testResult.connectionTest && (
                  <div className={`p-4 rounded-lg ${testResult.connectionTest.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <div className="flex items-center space-x-2">
                      {testResult.connectionTest.success ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span className="font-medium">Connection</span>
                    </div>
                    <div className="text-sm mt-2">
                      <div>Status: {testResult.connectionTest.status}</div>
                      <div>Response: {testResult.connectionTest.statusText}</div>
                      {testResult.connectionTest.error && (
                        <div className="text-red-600 mt-1">Error: {testResult.connectionTest.error}</div>
                      )}
                    </div>
                  </div>
                )}

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Info className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Server Info</span>
                  </div>
                  <div className="text-sm mt-2">
                    <div><strong>Feed URL:</strong> {testResult.feedUrl}</div>
                    <div className="mt-2"><strong>Server IP:</strong> 
                      <span className="font-mono bg-white px-2 py-1 rounded ml-2">
                        {testResult.serverIP}
                      </span>
                    </div>
                    {testResult.serverIP !== 'Unknown' && (
                      <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded text-amber-800">
                        💡 Add this IP to your Bol.com Partner Dashboard whitelist
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {testResult.diagnosticTests && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-3">Diagnostic Tests</h3>
                  <div className="space-y-3">
                    {testResult.diagnosticTests.map((test, index) => (
                      <div key={index} className={`p-3 rounded-lg border ${
                        test.success 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-red-50 border-red-200'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {test.success ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )}
                            <span className="font-medium">{test.name}</span>
                          </div>
                          {test.status && (
                            <span className="text-sm bg-white px-2 py-1 rounded">
                              {test.status}
                            </span>
                          )}
                        </div>
                        <div className="text-sm mt-2">
                          <div>{test.message}</div>
                          {test.error && (
                            <div className="text-red-600 mt-1 font-mono text-xs">
                              {test.errorType}: {test.error}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {testResult.connectionTest?.recommendation && (
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="font-medium text-blue-900">Recommendation:</div>
                      <div className="text-sm text-blue-800 mt-1">
                        {testResult.connectionTest.recommendation}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {testResult.connectionTest?.headers && (
                <details className="bg-gray-50 rounded-lg p-4">
                  <summary className="cursor-pointer font-medium">Response Headers</summary>
                  <pre className="mt-2 text-xs bg-white p-2 rounded border overflow-auto">
                    {JSON.stringify(testResult.connectionTest.headers, null, 2)}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )}

        {/* Affiliate Automation Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Affiliate Link Automation</h2>
          
          {/* Automation Stats */}
          {affiliateStats && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-900">{affiliateStats.total}</div>
                <div className="text-sm text-blue-700">Total Articles</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-900">{affiliateStats.byPriority?.high || 0}</div>
                <div className="text-sm text-green-700">High Priority</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-900">{affiliateStats.byPriority?.['medium-high'] || 0}</div>
                <div className="text-sm text-yellow-700">Medium-High</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-900">{affiliateStats.totalProducts}</div>
                <div className="text-sm text-purple-700">Total Products</div>
              </div>
            </div>
          )}

          {/* Automation Controls */}
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Quick Actions</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => processAffiliatesByPriority('high')}
                  disabled={automationLoading}
                  className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <span>🔥</span>
                  <span>Process High Priority (5 articles)</span>
                </button>

                <button
                  onClick={() => processAffiliatesByPriority('medium-high')}
                  disabled={automationLoading}
                  className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <span>📈</span>
                  <span>Process Medium-High (3 articles)</span>
                </button>

                <button
                  onClick={() => processAffiliatesByPriority('medium')}
                  disabled={automationLoading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <span>📊</span>
                  <span>Process Medium Priority</span>
                </button>

                <button
                  onClick={processAllAffiliates}
                  disabled={automationLoading}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors font-semibold"
                >
                  <span>🚀</span>
                  <span>{automationLoading ? 'Processing...' : 'Process ALL Articles'}</span>
                </button>
              </div>
            </div>

            {/* Article List Preview */}
            {affiliateArticles.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-3">
                  Articles Ready for Processing ({affiliateArticles.length})
                </h3>
                <div className="max-h-64 overflow-y-auto bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {affiliateArticles.map((article, index) => (
                      <div key={index} className="bg-white p-3 rounded border">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm text-gray-900">
                              {article.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {article.path} • {article.productCount} products
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            article.priority === 'high' ? 'bg-red-100 text-red-800' :
                            article.priority === 'medium-high' ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {article.priority}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="text-amber-600">⚠️</div>
                <div>
                  <div className="font-medium text-amber-800">Important Notes:</div>
                  <ul className="text-sm text-amber-700 mt-2 space-y-1">
                    <li>• This will automatically add BolProductSection components to articles</li>
                    <li>• Only articles without existing affiliate sections will be processed</li>
                    <li>• High priority articles have the best revenue potential</li>
                    <li>• Changes are made directly to article files - backup recommended</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Search</h2>
          
          <div className="flex space-x-4 mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products (e.g., nutrilon, babyfles, startvoeding)"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && searchProducts()}
            />
            <button
              onClick={searchProducts}
              disabled={searchLoading || !searchQuery.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Search className={`w-4 h-4 ${searchLoading ? 'animate-spin' : ''}`} />
              <span>Search</span>
            </button>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Search Results:</h3>
              <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
                {searchResults.map((product, index) => (
                  <div key={product.id || index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-start space-x-4">
                      {product.imageUrl && (
                        <img
                          src={product.imageUrl}
                          alt={product.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">{product.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-lg font-semibold text-green-600">
                            {formatPrice(product.price)}
                          </span>
                          {product.rating && (
                            <span className="text-sm text-gray-600">
                              ⭐ {product.rating} ({product.reviewsCount} reviews)
                            </span>
                          )}
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            Score: {product.searchScore}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          {product.category} • {product.availability}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {searchQuery && searchResults.length === 0 && !searchLoading && (
            <p className="text-gray-600 italic">No products found for "{searchQuery}"</p>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">About Product Feed</h3>
          <div className="text-sm text-blue-800 space-y-2">
            <p>• The product feed contains the complete Bol.com catalog filtered for baby-related products</p>
            <p>• Feed is updated daily to ensure accurate pricing and availability</p>
            <p>• Local search is faster and more comprehensive than API calls</p>
            <p>• Products are scored by relevance to baby feeding topics</p>
          </div>
        </div>
      </div>
      </Layout>
    </AdminAuth>
  )
}