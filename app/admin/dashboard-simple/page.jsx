'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '../../../components/Layout'
import { Settings, Link, Plus, Edit3, Trash2, Eye, EyeOff } from 'lucide-react'

export default function SimpleAdminDashboard() {
  const [snippets, setSnippets] = useState([])
  const [pages, setPages] = useState([])
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
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
    loadData()
  }, [router])

  const loadData = async () => {
    try {
      // Load snippets
      const snippetsResponse = await fetch('/api/admin-snippets')
      if (snippetsResponse.ok) {
        const snippetsData = await snippetsResponse.json()
        setSnippets(snippetsData.snippets || [])
      }

      // Load pages
      const pagesResponse = await fetch('/api/admin-pages')
      if (pagesResponse.ok) {
        const pagesData = await pagesResponse.json()
        setPages(pagesData.pages || [])
      }
    } catch (error) {
      console.error('Failed to load data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated')
    localStorage.removeItem('admin_session')
    router.push('/admin')
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
              Affiliate Management System (Simplified)
            </h1>
            <p className="text-gray-600 mt-2">
              View and manage affiliate links
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Logout
          </button>
        </div>

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
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Affiliate Snippets</h2>
            <div className="text-sm text-gray-500">
              Connected to frontend via pageId system
            </div>
          </div>
          
          {snippets.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No snippets found. Data should be migrated from static files.
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

        {/* Pages List */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Available Pages</h2>
          
          {pages.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No pages found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pages.map((page) => (
                <div key={page.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                  <h3 className="font-medium text-gray-900 mb-1">{page.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{page.path}</p>
                  <div className="text-xs text-gray-500">
                    ID: <code className="bg-gray-100 px-1 rounded">{page.id}</code>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-3">How the System Works</h3>
          <div className="text-sm text-blue-800 space-y-2">
            <p>• <strong>Frontend Integration:</strong> Pages use <code>pageId</code> prop to load snippets from admin system</p>
            <p>• <strong>Example:</strong> <code>&lt;AffiliateProductWidget pageId="hygiene-bereiding_flessen-steriliseren" /&gt;</code></p>
            <p>• <strong>Data Flow:</strong> Admin snippets → API endpoint → Frontend widget</p>
            <p>• <strong>Current Status:</strong> {snippets.filter(s => s.active).length} active snippets ready for display</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}