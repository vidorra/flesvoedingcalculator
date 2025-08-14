import Layout from '../../components/Layout'

export default function PartnersPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <span className="w-6 h-6 mr-3 text-2xl">🤝</span>
            Partners
          </h1>
          <p className="text-gray-600">
            Deze pagina wordt binnenkort toegevoegd. Hier komt informatie over onze samenwerkingspartners.
          </p>
        </div>
        
        <div className="text-center py-20">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">🤝</span>
          </div>
          <p className="text-gray-600 mb-4">Deze pagina wordt binnenkort toegevoegd.</p>
          <p className="text-sm text-gray-500">Hier komt informatie over onze samenwerkingspartners.</p>
        </div>
      </div>
    </Layout>
  )
}