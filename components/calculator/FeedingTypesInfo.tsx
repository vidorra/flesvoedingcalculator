'use client'
import { Info } from 'lucide-react'

export default function FeedingTypesInfo() {
  return (
    <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="font-medium text-gray-800 mb-3 flex items-center">
        <Info className="w-5 h-5 mr-2 text-primary" />
        Soorten Flesvoeding
      </h3>
      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex items-start space-x-3">
          <span className="font-medium text-primary mt-0.5">1</span>
          <div>
            <p className="font-medium text-gray-700">Startvoeding (0-6 maanden)</p>
            <p>Volledige zuigelingenvoeding, geschikt vanaf geboorte</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <span className="font-medium text-primary mt-0.5">2</span>
          <div>
            <p className="font-medium text-gray-700">Opvolgmelk (6-12 maanden)</p>
            <p>Vanaf 6 maanden, naast vaste voeding</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <span className="font-medium text-primary mt-0.5">3</span>
          <div>
            <p className="font-medium text-gray-700">Peutermelk (12+ maanden)</p>
            <p>Optioneel vanaf 1 jaar, gewone melk kan ook</p>
          </div>
        </div>
      </div>
    </div>
  )
}
