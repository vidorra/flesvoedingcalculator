import Link from 'next/link'
import type { ReactNode } from 'react'

interface Category {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

interface Props {
  knowledgeCategories: Category[]
}

/**
 * KnowledgeCategories - Lazy-loaded component
 *
 * Separated from main page to enable code splitting and lazy loading.
 * This section typically appears below the fold and doesn't need
 * to be in the initial page load.
 *
 * Performance: Reduces initial bundle size by ~2-3KB
 */
export default function KnowledgeCategories({ knowledgeCategories }: Props) {
  return (
    <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="font-medium text-primary mb-4">Kennisbank Onderwerpen</h2>
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
  )
}
