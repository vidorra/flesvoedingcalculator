import Layout from '../../components/Layout'
import { FileText } from 'lucide-react'

export default function VoorwaardenPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-primary" />
            Algemene Voorwaarden
          </h1>
          <p className="text-gray-600">
            Deze pagina wordt binnenkort toegevoegd. Hier komen de algemene voorwaarden voor het gebruik van deze website.
          </p>
        </div>
        
        <div className="text-center py-20">
          <FileText className="w-16 h-16 mx-auto mb-4 text-primary" />
          <p className="text-gray-600 mb-4">Deze pagina wordt binnenkort toegevoegd.</p>
          <p className="text-sm text-gray-500">Hier komen de algemene voorwaarden voor het gebruik van deze website.</p>
        </div>
      </div>
    </Layout>
  )
}