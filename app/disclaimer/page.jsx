import Layout from '../../components/Layout'
import { AlertTriangle } from 'lucide-react'

export default function DisclaimerPage() {
  return (
    <Layout>
      <div className="text-center py-20">
        <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-blue-500" />
        <h1 className="text-2xl font-bold mb-4">Disclaimer</h1>
        <p className="text-gray-600 mb-4">Deze pagina wordt binnenkort toegevoegd.</p>
        <p className="text-sm text-gray-500">Hier komt belangrijke informatie over het gebruik van onze calculator en adviezen.</p>
      </div>
    </Layout>
  )
}