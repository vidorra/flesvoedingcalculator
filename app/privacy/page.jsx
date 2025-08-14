import Layout from '../../components/Layout'
import { Shield } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-primary" />
            Privacybeleid
          </h1>
          <p className="text-gray-600">
            Deze pagina wordt binnenkort toegevoegd. Hier komt informatie over hoe wij omgaan met uw gegevens.
          </p>
        </div>
        
        <div className="text-center py-20">
          <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
          <p className="text-gray-600 mb-4">Deze pagina wordt binnenkort toegevoegd.</p>
          <p className="text-sm text-gray-500">Hier komt informatie over hoe wij omgaan met uw gegevens.</p>
        </div>
      </div>
    </Layout>
  )
}