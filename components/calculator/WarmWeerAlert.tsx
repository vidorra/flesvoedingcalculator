'use client'

import Link from 'next/link'
import { Sun, AlertTriangle, ArrowRight } from 'lucide-react'
import { useCurrentWeather } from '../../hooks/useCurrentWeather'
import type { AgeCategory } from '../../hooks/useCalculator'

/**
 * WarmWeerAlert
 *
 * Shows a hot-weather hydration notice based on the visitor's current local
 * temperature. Two tiers:
 *   - 26–27°C  → informational notice ("echt warm", zomerse dag)
 *   - ≥ 28°C   → amber "Let op" warning
 *
 * The amber threshold is deliberately conservative: IP geolocation is only
 * approximate, so 28°C gives margin to catch genuine heat across the country.
 *
 * The advice adapts to the selected age: babies under 6 months should be fed
 * more often (never diluted with water), babies from 6 months may also be
 * offered extra plain water. Renders nothing below 27°C or when no real
 * temperature reading is available.
 */

const INFO_THRESHOLD = 26
const WARNING_THRESHOLD = 28

const ARTICLE_HREF = '/kennisbank/praktische-tips/flesvoeding-bij-warm-weer'

interface WarmWeerAlertProps {
  ageMonths: AgeCategory
}

export default function WarmWeerAlert({ ageMonths }: WarmWeerAlertProps) {
  const { temp, locationCity } = useCurrentWeather()

  // Only show when we have a real reading at or above the info threshold.
  if (temp === null || temp < INFO_THRESHOLD) return null

  const isWarning = temp >= WARNING_THRESHOLD
  // '6' is the only "6 months and older" category; all others are under 6 months.
  const isUnderSixMonths = ageMonths !== '6'

  const locationSuffix = locationCity ? ` in ${locationCity}` : ''

  const advice = isUnderSixMonths
    ? 'Bied de fles wat vaker of gewoon op verzoek aan. Verdun de voeding nooit met extra water.'
    : 'Bied naast de flesvoeding ook wat extra plat water aan en voed vaker op verzoek.'

  if (isWarning) {
    return (
      <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6 mb-6">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="font-medium text-amber-800 mb-2">
              Let op: het is heet ({temp}°C{locationSuffix})
            </h3>
            <p className="text-sm text-amber-700 leading-relaxed mb-3">
              Bij deze hitte verliest je baby meer vocht. {advice}
            </p>
            <Link
              href={ARTICLE_HREF}
              className="inline-flex items-center text-sm font-medium text-amber-800 hover:underline"
            >
              Lees wat te doen bij warm weer
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Sun className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium text-primary mb-2">
            Warm weer: {temp}°C{locationSuffix}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Op warme dagen heeft je baby meer vocht nodig. {advice}
          </p>
          <Link
            href={ARTICLE_HREF}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Lees meer over flesvoeding bij warm weer
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
