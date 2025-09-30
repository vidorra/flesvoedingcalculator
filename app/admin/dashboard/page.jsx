'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '../../../components/Layout'
import { Settings, Link, Plus, Eye, X } from 'lucide-react'

export default function SimpleAdminDashboard() {
  const [snippets, setSnippets] = useState([])
  const [pages, setPages] = useState([])
  const [selectedPage, setSelectedPage] = useState(null)
  const [pageSnippets, setPageSnippets] = useState([])
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('overview') // 'overview' or 'assignment'
  const [loadError, setLoadError] = useState(null)
  const [debugInfo, setDebugInfo] = useState('Not started')
  const [showAddForm, setShowAddForm] = useState(false)
  const [newSnippet, setNewSnippet] = useState({
    platform: 'bol',
    name: '',
    url: '',
    code: '',
    tag: ''
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const router = useRouter()

  // Check authentication
  useEffect(() => {
    const isAuth = localStorage.getItem('admin_authenticated')
    const session = localStorage.getItem('admin_session')
    
    if (!isAuth || !session) {
      router.push('/admin')
      return
    }
    
    // Check if session is expired (24 hours)
    const sessionTime = parseInt(session)
    const now = Date.now()
    const twentyFourHours = 24 * 60 * 60 * 1000
    
    if (now - sessionTime > twentyFourHours) {
      localStorage.removeItem('admin_authenticated')
      localStorage.removeItem('admin_session')
      router.push('/admin')
      return
    }
    
    setIsAuthenticated(true)
    // Add a small delay to ensure the API routes are ready
    setTimeout(() => {
      loadData()
    }, 500)
  }, [router])

  const loadData = async (manualRetry = false) => {
    if (manualRetry) {
      setLoading(true)
      setLoadError(null)
    }
    
    try {
      console.log('Loading data from admin APIs')
      setDebugInfo('Starting API calls...')
      setLoadError(null)
      
      // Load snippets
      console.log('Loading snippets from /api/admin-snippets/')
      try {
        const snippetsResponse = await fetch(`/api/admin-snippets/?t=${Date.now()}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-cache'
        })
        console.log('Snippets response status:', snippetsResponse.status)
        console.log('Snippets response headers:', [...snippetsResponse.headers.entries()])
        
        if (snippetsResponse.ok) {
          const snippetsData = await snippetsResponse.json()
          console.log('Snippets data received:', snippetsData)
          console.log('Number of snippets:', snippetsData.snippets?.length || 0)
          setSnippets(snippetsData.snippets || [])
          setDebugInfo(`✅ Loaded ${snippetsData.snippets?.length || 0} snippets`)
          console.log('✅ Snippets state updated successfully')
        } else {
          const errorText = await snippetsResponse.text()
          console.error('❌ Failed to load snippets. Status:', snippetsResponse.status, 'Error:', errorText)
          setLoadError(`Failed to load snippets: ${snippetsResponse.status}`)
        }
      } catch (snippetsError) {
        console.error('❌ Error fetching snippets:', snippetsError)
        setLoadError(`Network error loading snippets: ${snippetsError.message}`)
        setSnippets([])
      }

      // Load pages
      console.log('Loading pages from /api/admin-pages/')
      try {
        const pagesResponse = await fetch(`/api/admin-pages/?t=${Date.now()}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-cache'
        })
        console.log('Pages response status:', pagesResponse.status)
        
        if (pagesResponse.ok) {
          const pagesData = await pagesResponse.json()
          console.log('Pages data:', pagesData)
          setPages(pagesData.pages || [])
        } else {
          const errorText = await pagesResponse.text()
          console.error('Failed to load pages. Status:', pagesResponse.status, 'Error:', errorText)
          setLoadError(`Failed to load pages: ${pagesResponse.status}`)
        }
      } catch (pagesError) {
        console.error('Error fetching pages:', pagesError)
        setLoadError(`Network error loading pages: ${pagesError.message}`)
        setPages([])
      }

    } catch (error) {
      console.error('Failed to load data:', error)
      setLoadError(`General error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated')
    localStorage.removeItem('admin_session')
    router.push('/admin')
  }

  const loadPageSnippets = async (pageId) => {
    try {
      console.log('Loading snippets for page:', pageId)
      const response = await fetch(`/api/affiliates/page/${pageId}`)
      if (response.ok) {
        const data = await response.json()
        console.log('Page snippets data:', data)
        setPageSnippets(data.snippets || [])
      } else {
        console.log('No snippets found for page:', pageId)
        setPageSnippets([])
      }
    } catch (error) {
      console.error('Failed to load page snippets:', error)
      setPageSnippets([])
    }
  }

  const handlePageSelect = (page) => {
    setSelectedPage(page)
    loadPageSnippets(page.id)
  }

  const generateAmazonSnippet = async () => {
    if (!newSnippet.url) {
      alert('Please enter an Amazon URL')
      return
    }

    setIsGenerating(true)
    try {
      const response = await fetch('/api/admin/generate-snippet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: newSnippet.url,
          type: 'amazon'
        })
      })

      if (response.ok) {
        const data = await response.json()
        setNewSnippet(prev => ({
          ...prev,
          name: data.productName || prev.name,
          code: data.html
        }))
      } else {
        alert('Failed to generate Amazon snippet')
      }
    } catch (error) {
      console.error('Error generating snippet:', error)
      alert('Error generating snippet: ' + error.message)
    } finally {
      setIsGenerating(false)
    }
  }

  const saveNewSnippet = async () => {
    try {
      const snippetData = {
        id: `${newSnippet.platform}-${Date.now()}`,
        name: newSnippet.name,
        type: newSnippet.platform,
        url: newSnippet.url,
        tag: newSnippet.tag || null,
        generatedHtml: newSnippet.code,
        active: true
      }

      const response = await fetch('/api/admin-snippets/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(snippetData)
      })

      if (response.ok) {
        // Refresh the snippets list
        loadData(true)
        // Reset form
        setNewSnippet({
          platform: 'bol',
          name: '',
          url: '',
          code: '',
          tag: ''
        })
        setShowAddForm(false)
        alert('Snippet saved successfully!')
      } else {
        alert('Failed to save snippet')
      }
    } catch (error) {
      console.error('Error saving snippet:', error)
      alert('Error saving snippet: ' + error.message)
    }
  }

  const assignSnippetToPage = async (pageId, snippetId) => {
    try {
      const response = await fetch('/api/admin-page-snippets/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pageId, snippetId })
      })

      if (response.ok) {
        // Refresh page snippets
        loadPageSnippets(pageId)
        alert('Snippet assigned successfully!')
      } else {
        const errorData = await response.json()
        alert(`Failed to assign snippet: ${errorData.message}`)
      }
    } catch (error) {
      console.error('Error assigning snippet:', error)
      alert('Error assigning snippet: ' + error.message)
    }
  }

  const unassignSnippetFromPage = async (pageId, snippetId) => {
    try {
      const response = await fetch('/api/admin-page-snippets/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pageId, snippetId })
      })

      if (response.ok) {
        // Refresh page snippets
        loadPageSnippets(pageId)
        alert('Snippet unassigned successfully!')
      } else {
        const errorData = await response.json()
        alert(`Failed to unassign snippet: ${errorData.message}`)
      }
    } catch (error) {
      console.error('Error unassigning snippet:', error)
      alert('Error unassigning snippet: ' + error.message)
    }
  }

  if (!isAuthenticated || loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-gray-600">{loading ? 'Loading...' : 'Redirecting...'}</div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <Settings className="w-6 h-6 mr-3 text-primary" />
              Affiliate Management System
            </h1>
            <p className="text-gray-600 mt-2">
              Manage affiliate links and page assignments
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Error Banner */}
        {loadError && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Failed to load data</h3>
                  <div className="mt-1 text-sm text-red-700">
                    {loadError}
                  </div>
                </div>
              </div>
              <button
                onClick={() => loadData(true)}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm font-medium hover:bg-red-200 transition-colors"
                disabled={loading}
              >
                {loading ? 'Retrying...' : 'Retry'}
              </button>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview & Snippets
            </button>
            <button
              onClick={() => setActiveTab('assignment')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'assignment'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Page Assignment
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <Link className="w-8 h-8 text-primary" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{snippets.length}</h3>
                    <p className="text-gray-600">Total Snippets</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <Eye className="w-8 h-8 text-green-600" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{snippets.filter(s => s.active).length}</h3>
                    <p className="text-gray-600">Active Snippets</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <Settings className="w-8 h-8 text-blue-600" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{pages.length}</h3>
                    <p className="text-gray-600">Available Pages</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Snippets List */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Affiliate Snippets</h2>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Link</span>
                </button>
              </div>
              
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Debug:</strong> {debugInfo} | Snippets: {snippets.length} | Loading: {loading ? 'Yes' : 'No'}
                </p>
              </div>

              {/* Add New Snippet Form */}
              {showAddForm && (
                <div className="mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Add New Affiliate Link</h3>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Platform Radio Buttons */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="bol"
                          checked={newSnippet.platform === 'bol'}
                          onChange={(e) => setNewSnippet(prev => ({ ...prev, platform: e.target.value }))}
                          className="mr-2"
                        />
                        <span>Bol.com</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="amazon"
                          checked={newSnippet.platform === 'amazon'}
                          onChange={(e) => setNewSnippet(prev => ({ ...prev, platform: e.target.value }))}
                          className="mr-2"
                        />
                        <span>Amazon</span>
                      </label>
                    </div>
                  </div>

                  {/* Product Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                    <input
                      type="text"
                      value={newSnippet.name}
                      onChange={(e) => setNewSnippet(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter product name"
                    />
                  </div>

                  {/* Conditional Fields Based on Platform */}
                  {newSnippet.platform === 'bol' && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bol.com Code Snippet</label>
                      <textarea
                        value={newSnippet.code}
                        onChange={(e) => setNewSnippet(prev => ({ ...prev, code: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32"
                        placeholder="Paste your Bol.com affiliate code snippet here..."
                      />
                    </div>
                  )}

                  {newSnippet.platform === 'amazon' && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Amazon Short Link</label>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={newSnippet.url}
                            onChange={(e) => setNewSnippet(prev => ({ ...prev, url: e.target.value }))}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="https://amzn.to/3Krcb8W"
                          />
                          <button
                            onClick={generateAmazonSnippet}
                            disabled={isGenerating || !newSnippet.url}
                            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isGenerating ? 'Generating...' : 'Generate'}
                          </button>
                        </div>
                      </div>
                      
                      {newSnippet.code && (
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Generated HTML</label>
                          <textarea
                            value={newSnippet.code}
                            onChange={(e) => setNewSnippet(prev => ({ ...prev, code: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32"
                            placeholder="Generated HTML will appear here..."
                          />
                        </div>
                      )}
                    </>
                  )}

                  {/* Tag (Optional) */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tag (Optional)</label>
                    <input
                      type="text"
                      value={newSnippet.tag}
                      onChange={(e) => setNewSnippet(prev => ({ ...prev, tag: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., Aanbevolen, Budget, Beste prijs/kwaliteit"
                    />
                  </div>

                  {/* Save/Cancel Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={saveNewSnippet}
                      disabled={!newSnippet.name || !newSnippet.code}
                      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Save Snippet
                    </button>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
              
              {loading ? (
                <div className="text-center py-12 text-gray-500">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium mb-2">Loading affiliate snippets...</h3>
                  <p>Please wait while we fetch your data.</p>
                </div>
              ) : snippets.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <Link className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium mb-2">No affiliate snippets yet</h3>
                  <p className="mb-4">Add your first one!</p>
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Add New Link
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {snippets.map((snippet) => (
                    <div key={snippet.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-medium text-gray-900">{snippet.name}</h3>
                            {snippet.tag && (
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                                {snippet.tag}
                              </span>
                            )}
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              snippet.type === 'amazon' 
                                ? 'bg-orange-100 text-orange-700' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {snippet.type === 'amazon' ? 'Amazon' : 'Bol.com'}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              snippet.active 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {snippet.active ? 'Active' : 'Inactive'}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div>
                              <strong>URL:</strong> {snippet.url}
                            </div>
                            <div>
                              <strong>Created:</strong> {new Date(snippet.createdAt).toLocaleDateString()}
                            </div>
                            {snippet.generatedHtml && (
                              <details className="mt-2">
                                <summary className="cursor-pointer text-primary hover:text-primary/80">
                                  View Generated HTML
                                </summary>
                                <div className="mt-2 p-3 bg-gray-50 rounded border">
                                  <code className="text-xs text-gray-600 break-all">
                                    {snippet.generatedHtml}
                                  </code>
                                </div>
                              </details>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {activeTab === 'assignment' && (
          <div className="grid grid-cols-12 gap-6">
            {/* Left Panel - Pages */}
            <div className="col-span-4">
              <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Kennisbank Pages</h2>
                {pages.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No pages found.
                  </div>
                ) : (
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {pages.map((page) => (
                      <button
                        key={page.id}
                        onClick={() => handlePageSelect(page)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
                          selectedPage?.id === page.id
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <h3 className="font-medium text-sm">{page.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">{page.path}</p>
                        <div className="text-xs text-gray-400 mt-1">
                          Snippets: {page.snippetCount}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Panel - Snippet Configuration */}
            <div className="col-span-8">
              <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
                {!selectedPage ? (
                  <div className="text-center py-12 text-gray-500">
                    <Settings className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg font-medium mb-2">Select a Page</h3>
                    <p>Choose a page from the left panel to manage its affiliate snippets</p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">{selectedPage.title}</h2>
                        <p className="text-sm text-gray-600">{selectedPage.path}</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {pageSnippets.length} snippets assigned
                      </div>
                    </div>

                    {/* Current Page Snippets */}
                    <div className="mb-6">
                      <h3 className="font-medium text-gray-900 mb-3">Current Affiliate Snippets</h3>
                      {pageSnippets.length === 0 ? (
                        <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
                          <Link className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                          <p>No affiliate snippets assigned to this page</p>
                          <p className="text-sm">Add snippets from the available list below</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {pageSnippets.map((snippet, index) => (
                            <div key={snippet.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
                              <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">
                                  {index + 1}
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900">{snippet.name}</h4>
                                  <p className="text-sm text-gray-600">{snippet.type === 'amazon' ? 'Amazon' : 'Bol.com'} • {snippet.tag}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  snippet.active 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-gray-100 text-gray-600'
                                }`}>
                                  {snippet.active ? 'Active' : 'Inactive'}
                                </span>
                                <button
                                  onClick={() => unassignSnippetFromPage(selectedPage.id, snippet.id)}
                                  className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                                  title="Unassign snippet"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Available Snippets to Add */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Available Snippets</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        These snippets are available to add to this page. Click a snippet to assign it.
                      </p>
                      {snippets.length === 0 ? (
                        <div className="text-center py-8 text-gray-500 border border-gray-200 rounded-lg">
                          No snippets available
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto">
                          {snippets.filter(snippet => 
                            !pageSnippets.some(ps => ps.id === snippet.id)
                          ).map((snippet) => (
                            <button
                              key={snippet.id}
                              onClick={() => assignSnippetToPage(selectedPage.id, snippet.id)}
                              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-left"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-medium text-gray-900 text-sm">{snippet.name}</h4>
                                  <div className="flex items-center space-x-2 mt-1">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      snippet.type === 'amazon' 
                                        ? 'bg-orange-100 text-orange-700' 
                                        : 'bg-blue-100 text-blue-700'
                                    }`}>
                                      {snippet.type === 'amazon' ? 'Amazon' : 'Bol.com'}
                                    </span>
                                    {snippet.tag && (
                                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                        {snippet.tag}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <Plus className="w-4 h-4 text-gray-400" />
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        {activeTab === 'overview' && (
          <>
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-3">How the System Works</h3>
              <div className="text-sm text-blue-800 space-y-2">
                <p>• <strong>Frontend Integration:</strong> Pages use <code>pageId</code> prop to load snippets from admin system</p>
                <p>• <strong>Example:</strong> <code>&lt;AffiliateProductWidget pageId="hygiene-bereiding_flessen-steriliseren" /&gt;</code></p>
                <p>• <strong>Data Flow:</strong> Admin snippets → API endpoint → Frontend widget</p>
                <p>• <strong>Current Status:</strong> {snippets.filter(s => s.active).length} active snippets ready for display</p>
              </div>
            </div>

            {/* Debug Info */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Debug Information</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>• <strong>Snippets loaded:</strong> {snippets.length}</p>
                <p>• <strong>Pages loaded:</strong> {pages.length}</p>
                <p>• <strong>Loading state:</strong> {loading ? 'Loading...' : 'Complete'}</p>
                <p>• <strong>Current URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'Server-side'}</p>
                <p>• <strong>API Endpoints:</strong></p>
                <div className="ml-4 text-xs">
                  <p>- Snippets: <code>/api/admin-snippets/</code></p>
                  <p>- Pages: <code>/api/admin-pages/</code></p>
                </div>
                {loadError && (
                  <p>• <strong>Last Error:</strong> <span className="text-red-600">{loadError}</span></p>
                )}
              </div>
              <button
                onClick={() => loadData(true)}
                className="mt-4 bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Refresh Data'}
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}