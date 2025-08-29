'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Baby, Calculator, Info, Menu, X, BookOpen, Calendar, Users } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { id: '/', name: 'Calculator', icon: Calculator, href: '/' },
    { id: '/kennisbank', name: 'Kennisbank', icon: BookOpen, href: '/kennisbank' },
    { id: '/voedingsschemas', name: "Voedingsschema's", icon: Calendar, href: '/voedingsschemas' },
    { id: '/faq', name: 'FAQ', icon: Info, href: '/faq' },
    { id: '/over-ons', name: 'Over Ons', icon: Users, href: '/over-ons' }
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Baby className="w-6 h-6 text-primary" />
            <Link 
              href="/"
              className="text-xl font-bold text-gray-800 hover:text-primary transition-colors"
            >
              FlesvoedingCalculator.nl
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center space-x-1 px-6 py-4 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-default text-primary'
                      : 'text-gray-600 hover:text-primary hover:bg-default'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-default transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-8">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full flex items-center space-x-2 px-6 py-6 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-default text-primary'
                      : 'text-gray-600 hover:text-primary hover:bg-default'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}