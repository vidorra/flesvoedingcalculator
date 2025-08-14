import Layout from '../../components/Layout'
import { FileText } from 'lucide-react'

export default function VoorwaardenPage() {
  return (
    <Layout>
      <div className="text-center py-20">
        <FileText className="w-16 h-16 mx-auto mb-4 text-blue-500" />
        <h1 className="text-2xl font-bold mb-4">Algemene Voorwaarden</h1>
        <p className="text-gray-600 mb-4">Deze pagina wordt binnenkort toegevoegd.</p>
        <p className="text-sm text-gray-500">Hier komen de algemene voorwaarden voor het gebruik van deze website.</p>
      </div>
    </Layout>
  )
}