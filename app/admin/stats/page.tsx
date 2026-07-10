'use client'

import Layout from '../../../components/Layout'
import StatsPanel from '../../../components/admin/StatsPanel'
import { BarChart3 } from 'lucide-react'

// Dunne wrapper: de statistieken leven als tab in /admin/dashboard
// (components/admin/StatsPanel). Deze route blijft bestaan voor oude
// links/bookmarks en toont hetzelfde paneel met dashboard-chrome.
export default function StatsPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-primary" />
                Statistieken
              </h1>
              <p className="text-gray-600 mt-2">
                Anonieme, geaggregeerde data over calculator-gebruik en affiliate-kliks
              </p>
            </div>
            <a
              href="/admin/dashboard"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Terug naar dashboard
            </a>
          </div>
        </div>
        <StatsPanel />
      </div>
    </Layout>
  )
}
