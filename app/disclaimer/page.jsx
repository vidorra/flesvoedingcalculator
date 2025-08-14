import Layout from '../../components/Layout'
import { AlertTriangle } from 'lucide-react'

export default function DisclaimerPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
            Disclaimer
          </h1>
          <p className="text-gray-600">
            Deze pagina wordt binnenkort toegevoegd. Hier komt belangrijke informatie over het gebruik van onze calculator en adviezen.
          </p>
        </div>
        
        <div className="text-center py-20">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-primary" />
          <p className="text-gray-600 mb-4">Deze pagina wordt binnenkort toegevoegd.</p>
          <p className="text-sm text-gray-500">Hier komt belangrijke informatie over het gebruik van onze calculator en adviezen.</p>
        </div>
      </div>
    </Layout>
  )
}