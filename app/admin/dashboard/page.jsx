'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '../../../components/Layout'
import { 
  Settings, 
  Link, 
  FileText, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  EyeOff,
  ArrowUp,
  ArrowDown,
  ExternalLink,
  Image,
  Tag,
  Save
} from 'lucide-react'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('snippets')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Check authentication on mount
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
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated')
    localStorage.removeItem('admin_session')
    router.push('/admin')
  }

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-gray-600">Loading...</div>
        </div>
      </Layout>
    )
  }

  if (!isAuthenticated) {
    return null
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
              Manage affiliate links and their placement across pages
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('snippets')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'snippets'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Link className="w-4 h-4 mr-2 inline" />
              Affiliate Links & Snippets
            </button>
            <button
              onClick={() => setActiveTab('pages')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'pages'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FileText className="w-4 h-4 mr-2 inline" />
              Page Assignment
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'snippets' ? (
          <AffiliateSnippetsTab />
        ) : (
          <PageAssignmentTab />
        )}
      </div>
    </Layout>
  )
}

// Tab 1: Affiliate Links & Snippets Management
function AffiliateSnippetsTab() {
  const [snippets, setSnippets] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingSnippet, setEditingSnippet] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load affiliate snippets on mount
  useEffect(() => {
    loadSnippets()
  }, [])

  const loadSnippets = async () => {
    try {
      const response = await fetch('/api/admin-snippets')
      if (response.ok) {
        const data = await response.json()
        setSnippets(data.snippets || [])
      }
    } catch (error) {
      console.error('Failed to load snippets:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center py-8 text-gray-600">Loading snippets...</div>
  }

  return (
    <div className="space-y-6">
      {/* Add New Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">
          Manage Affiliate Links & Code Snippets
        </h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Link
        </button>
      </div>

      {/* Add/Edit Form */}
      {(showAddForm || editingSnippet) && (
        <AffiliateSnippetForm 
          snippet={editingSnippet}
          onSave={(snippet) => {
            if (editingSnippet) {
              setSnippets(snippets.map(s => s.id === snippet.id ? snippet : s))
              setEditingSnippet(null)
            } else {
              setSnippets([...snippets, snippet])
              setShowAddForm(false)
            }
          }}
          onCancel={() => {
            setShowAddForm(false)
            setEditingSnippet(null)
          }}
        />
      )}

      {/* Snippets List */}
      <div className="bg-white rounded-lg border border-gray-200">
        {snippets.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No affiliate snippets yet. Add your first one!
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {snippets.map((snippet) => (
              <SnippetListItem
                key={snippet.id}
                snippet={snippet}
                onEdit={() => setEditingSnippet(snippet)}
                onDelete={(id) => setSnippets(snippets.filter(s => s.id !== id))}
                onToggleActive={(id, active) => 
                  setSnippets(snippets.map(s => s.id === id ? {...s, active} : s))
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Snippet Form Component
function AffiliateSnippetForm({ snippet, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: snippet?.name || '',
    type: snippet?.type || 'amazon',
    url: snippet?.url || '',
    tag: snippet?.tag || '',
    generatedHtml: snippet?.generatedHtml || '',
    active: snippet?.active ?? true
  })
  const [generating, setGenerating] = useState(false)

  const handleGenerateSnippet = async () => {
    if (!formData.url) return
    
    setGenerating(true)
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch('/api/admin/generate-snippet', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: formData.url,
          type: formData.type
        })
      })
      
      if (response.ok) {
        const data = await response.json()
        setFormData(prev => ({
          ...prev,
          generatedHtml: data.html,
          name: prev.name || data.productName || 'Generated Product'
        }))
      }
    } catch (error) {
      console.error('Failed to generate snippet:', error)
    } finally {
      setGenerating(false)
    }
  }

  const handleSave = async () => {
    const token = localStorage.getItem('admin_token')
    const method = snippet ? 'PUT' : 'POST'
    const url = snippet ? `/api/admin/snippets/${snippet.id}` : '/api/admin/snippets'
    
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          id: snippet?.id || Date.now().toString()
        })
      })
      
      if (response.ok) {
        const data = await response.json()
        onSave(data.snippet)
      }
    } catch (error) {
      console.error('Failed to save snippet:', error)
    }
  }

  return (
    <div className="bg-white p-6 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-medium mb-4">
        {snippet ? 'Edit' : 'Add New'} Affiliate Link
      </h3>
      
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
            placeholder="e.g., LIFEJXWEN 5-in-1 Electric Sterilizer"
          />
        </div>

        {/* Type and Tag */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Platform
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData(prev => ({...prev, type: e.target.value}))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
            >
              <option value="amazon">Amazon</option>
              <option value="bol">Bol.com</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tag (Optional)
            </label>
            <input
              type="text"
              value={formData.tag}
              onChange={(e) => setFormData(prev => ({...prev, tag: e.target.value}))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Aanbevolen, Budget, etc."
            />
          </div>
        </div>

        {/* URL Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Short URL
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={formData.url}
              onChange={(e) => setFormData(prev => ({...prev, url: e.target.value}))}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="https://amzn.to/3Krcb8W"
            />
            <button
              onClick={handleGenerateSnippet}
              disabled={!formData.url || generating}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              {generating ? 'Generating...' : 'Generate'}
            </button>
          </div>
        </div>

        {/* Generated HTML Preview */}
        {formData.generatedHtml && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Generated HTML
            </label>
            <textarea
              value={formData.generatedHtml}
              onChange={(e) => setFormData(prev => ({...prev, generatedHtml: e.target.value}))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary font-mono text-sm"
              rows="6"
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end space-x-2 pt-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!formData.name || !formData.generatedHtml}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors flex items-center"
          >
            <Save className="w-4 h-4 mr-2" />
            {snippet ? 'Update' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  )
}

// Snippet List Item Component  
function SnippetListItem({ snippet, onEdit, onDelete, onToggleActive }) {
  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this snippet?')) return
    
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/admin/snippets/${snippet.id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      })
      
      if (response.ok) {
        onDelete(snippet.id)
      }
    } catch (error) {
      console.error('Failed to delete snippet:', error)
    }
  }

  const handleToggleActive = async () => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/admin/snippets/${snippet.id}/toggle`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${token}` }
      })
      
      if (response.ok) {
        onToggleActive(snippet.id, !snippet.active)
      }
    } catch (error) {
      console.error('Failed to toggle snippet status:', error)
    }
  }

  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
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
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <div className="flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" />
              {snippet.url}
            </div>
            {snippet.generatedHtml && (
              <div className="flex items-start">
                <Image className="w-4 h-4 mr-2 mt-0.5" />
                <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {snippet.generatedHtml.substring(0, 100)}...
                </code>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleToggleActive}
            className={`p-2 rounded-lg transition-colors ${
              snippet.active 
                ? 'text-green-600 hover:bg-green-50' 
                : 'text-gray-400 hover:bg-gray-50'
            }`}
            title={snippet.active ? 'Active' : 'Inactive'}
          >
            {snippet.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
          <button
            onClick={onEdit}
            className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            title="Edit"
          >
            <Edit3 className="w-4 h-4" />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Tab 2: Page Assignment (Master-Detail View)
function PageAssignmentTab() {
  const [pages, setPages] = useState([])
  const [selectedPage, setSelectedPage] = useState(null)
  const [availableSnippets, setAvailableSnippets] = useState([])
  const [pageSnippets, setPageSnippets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPages()
    loadAvailableSnippets()
  }, [])

  useEffect(() => {
    if (selectedPage) {
      loadPageSnippets(selectedPage.id)
    }
  }, [selectedPage])

  const loadPages = async () => {
    try {
      const response = await fetch('/api/admin-pages')
      if (response.ok) {
        const data = await response.json()
        setPages(data.pages || [])
        if (data.pages?.length > 0) {
          setSelectedPage(data.pages[0])
        }
      }
    } catch (error) {
      console.error('Failed to load pages:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadAvailableSnippets = async () => {
    try {
      const response = await fetch('/api/admin-snippets?active=true')
      if (response.ok) {
        const data = await response.json()
        setAvailableSnippets(data.snippets || [])
      }
    } catch (error) {
      console.error('Failed to load snippets:', error)
    }
  }

  const loadPageSnippets = async (pageId) => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/admin/pages/${pageId}/snippets`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      if (response.ok) {
        const data = await response.json()
        setPageSnippets(data.snippets || [])
      }
    } catch (error) {
      console.error('Failed to load page snippets:', error)
    }
  }

  if (loading) {
    return <div className="text-center py-8 text-gray-600">Loading pages...</div>
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Panel - Pages List */}
      <div className="col-span-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Article Pages</h2>
        <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200 max-h-96 overflow-y-auto">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => setSelectedPage(page)}
              className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                selectedPage?.id === page.id ? 'bg-blue-50 border-r-2 border-r-primary' : ''
              }`}
            >
              <div className="font-medium text-gray-900 truncate">{page.title}</div>
              <div className="text-sm text-gray-600 truncate">{page.path}</div>
              <div className="text-xs text-gray-500 mt-1">
                {page.snippetCount || 0} affiliate links
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel - Page Details & Snippet Assignment */}
      <div className="col-span-8">
        {selectedPage ? (
          <PageSnippetManager 
            page={selectedPage}
            availableSnippets={availableSnippets}
            pageSnippets={pageSnippets}
            onUpdatePageSnippets={setPageSnippets}
          />
        ) : (
          <div className="text-center py-12 text-gray-500">
            Select a page to manage its affiliate links
          </div>
        )}
      </div>
    </div>
  )
}

// Page Snippet Manager Component
function PageSnippetManager({ page, availableSnippets, pageSnippets, onUpdatePageSnippets }) {
  const [showAddModal, setShowAddModal] = useState(false)

  const handleAddSnippet = async (snippetId) => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/admin/pages/${page.id}/snippets`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          snippetId, 
          order: pageSnippets.length 
        })
      })
      
      if (response.ok) {
        const data = await response.json()
        onUpdatePageSnippets([...pageSnippets, data.pageSnippet])
        setShowAddModal(false)
      }
    } catch (error) {
      console.error('Failed to add snippet to page:', error)
    }
  }

  const handleRemoveSnippet = async (pageSnippetId) => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/admin/pages/${page.id}/snippets/${pageSnippetId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      })
      
      if (response.ok) {
        onUpdatePageSnippets(pageSnippets.filter(ps => ps.id !== pageSnippetId))
      }
    } catch (error) {
      console.error('Failed to remove snippet from page:', error)
    }
  }

  const handleToggleSnippet = async (pageSnippetId, active) => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/admin/pages/${page.id}/snippets/${pageSnippetId}/toggle`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${token}` }
      })
      
      if (response.ok) {
        onUpdatePageSnippets(pageSnippets.map(ps => 
          ps.id === pageSnippetId ? {...ps, active: !ps.active} : ps
        ))
      }
    } catch (error) {
      console.error('Failed to toggle snippet status:', error)
    }
  }

  const handleReorderSnippet = async (pageSnippetId, direction) => {
    const currentIndex = pageSnippets.findIndex(ps => ps.id === pageSnippetId)
    if (
      (direction === 'up' && currentIndex === 0) ||
      (direction === 'down' && currentIndex === pageSnippets.length - 1)
    ) {
      return
    }

    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1
    const reorderedSnippets = [...pageSnippets]
    const [movedItem] = reorderedSnippets.splice(currentIndex, 1)
    reorderedSnippets.splice(newIndex, 0, movedItem)

    // Update order in backend
    try {
      const token = localStorage.getItem('admin_token')
      await fetch(`/api/admin/pages/${page.id}/snippets/reorder`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          snippets: reorderedSnippets.map((snippet, index) => ({
            id: snippet.id,
            order: index
          }))
        })
      })
      
      onUpdatePageSnippets(reorderedSnippets)
    } catch (error) {
      console.error('Failed to reorder snippets:', error)
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{page.title}</h2>
          <p className="text-gray-600 text-sm">{page.path}</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Affiliate Link
        </button>
      </div>

      {/* Current Page Snippets */}
      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-900">
            Affiliate Links on This Page ({pageSnippets.length})
          </h3>
        </div>
        
        {pageSnippets.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No affiliate links added to this page yet.
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {pageSnippets.map((pageSnippet, index) => (
              <div key={pageSnippet.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-500">#{index + 1}</span>
                      <h4 className="font-medium text-gray-900">{pageSnippet.snippet?.name}</h4>
                      {pageSnippet.snippet?.tag && (
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          {pageSnippet.snippet.tag}
                        </span>
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        pageSnippet.active 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {pageSnippet.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{pageSnippet.snippet?.url}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleReorderSnippet(pageSnippet.id, 'up')}
                      disabled={index === 0}
                      className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-25"
                      title="Move up"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleReorderSnippet(pageSnippet.id, 'down')}
                      disabled={index === pageSnippets.length - 1}
                      className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-25"
                      title="Move down"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleToggleSnippet(pageSnippet.id, pageSnippet.active)}
                      className={`p-1 rounded transition-colors ${
                        pageSnippet.active 
                          ? 'text-green-600 hover:bg-green-50' 
                          : 'text-gray-400 hover:bg-gray-50'
                      }`}
                      title={pageSnippet.active ? 'Deactivate' : 'Activate'}
                    >
                      {pageSnippet.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => handleRemoveSnippet(pageSnippet.id)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Snippet Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-medium mb-4">Add Affiliate Link</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {availableSnippets
                .filter(snippet => !pageSnippets.some(ps => ps.snippetId === snippet.id))
                .map((snippet) => (
                <button
                  key={snippet.id}
                  onClick={() => handleAddSnippet(snippet.id)}
                  className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="font-medium text-gray-900">{snippet.name}</div>
                  <div className="text-sm text-gray-600">{snippet.url}</div>
                </button>
              ))}
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}