import Layout from '../../components/Layout'
import { Handshake } from 'lucide-react'

export default function PartnersPage() {
  return (
    <Layout>
      <div className="text-center py-20">
        <Handshake className="w-16 h-16 mx-auto mb-4 text-blue-500" />
        <h1 className="text-2xl font-bold mb-4">Partners</h1>
        <p className="text-gray-600 mb-4">Deze pagina wordt binnenkort toegevoegd.</p>
        <p className="text-sm text-gray-500">Hier komt informatie over onze samenwerkingspartners.</p>
      </div>
    </Layout>
  )
}