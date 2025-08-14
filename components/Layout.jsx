import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      <Header />
      <main className="container mx-auto px-4 py-6 pb-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}