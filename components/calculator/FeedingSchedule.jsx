'use client'
import { useState } from 'react'
import { Clock, ChevronDown, ChevronUp } from 'lucide-react'
import { generateFeedingSchedule } from '../../hooks/useCalculator'

export default function FeedingSchedule({ results }) {
  const [showDetails, setShowDetails] = useState(false)

  if (!results) return null

  const schedule = generateFeedingSchedule(results.feedingsPerDay, results.recommendedAmount)

  return (
    <div className="mt-8">
      {/* Details Toggle */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full bg-white/80 backdrop-blur rounded-t-2xl shadow-sm border border-gray-200 border-b-0 p-4 flex items-center justify-between text-gray-700 hover:bg-white transition-colors"
      >
        <span className="font-medium">Bekijk details & voedingsschema</span>
        {showDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {/* Detailed Schedule */}
      {showDetails && (
        <div className="bg-white/80 backdrop-blur rounded-bottom-2xl mb-8 shadow-sm border border-gray-200 p-6 border-t-0 schedule-content">
          <h4 className="font-medium text-gray-800 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-primary" />
            Voorbeeldschema (flexibel aan te passen)
          </h4>

          <div className="space-y-2 mb-4">
            {schedule.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 bg-default/50 rounded-lg">
                <span className="text-sm text-gray-600">{item.time}</span>
                <span className="font-medium text-gray-800">{item.amount}</span>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-amber-800">
              <strong>Aanbeveling:</strong> Start met {results.recommendedAmount}ml per voeding (gebaseerd op {results.mlPerKg}ml per kg lichaamsgewicht).
              Bij groeispurts kan dit oplopen tot {results.maxAmount}ml per voeding.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
