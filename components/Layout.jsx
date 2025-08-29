import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto px-4 py-6 pb-20">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}