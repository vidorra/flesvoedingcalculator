'use client'

import V2Hero from './V2Hero'
import FlesCalculatorV2 from './FlesCalculatorV2'
import PopularProductsWidget from '../PopularProductsWidget'
import WarmWeerAlert from '../calculator/WarmWeerAlert'
import { FAQSection, FeedingTypesInfo } from '../calculator'

/**
 * Full /v2 page content: the alternative-UX calculator plus everything the
 * homepage offers (hero, info sections, FAQ, sidebar images, ads, popular
 * products) so v2 is feature-complete, not a stripped-down variant.
 *
 * With `simpleCalculator` (the /v3 layout) the info sections, FAQ, ads and
 * products are passed INTO the calculator as slots, so the whole page shares
 * one max-w-5xl grid: Soorten Flesvoeding + Voorbeeldschema + FAQ line up
 * under the inputs, ads/products under the result panel.
 */
export default function V2PageContent({ hero, simpleCalculator = false, variant = 'v2' }: { hero?: React.ReactNode; simpleCalculator?: boolean; variant?: string }) {
  // AdSense verwijderd (verdienmodel is 100% affiliate): rechterkolom
  // toont alleen nog affiliate-producten
  const rightExtra = (
    <PopularProductsWidget limit={4} />
  )

  if (simpleCalculator) {
    return (
      <>
        {/* Hot-weather hydration notice: full width above the hero banner
            (only renders at warm temperatures) */}
        <WarmWeerAlert ageMonths="0-1" />

        {/* Hero Section (v3/v4 pass their own) */}
        {hero ?? <V2Hero />}

        {/* One container: calculator grid carries all below-content as slots */}
        <div id="calculator-v2" className="-mt-3 scroll-mt-6">
          <FlesCalculatorV2
            simple
            variant={variant}
            beforeSchedule={<FeedingTypesInfo />}
            afterSchedule={<FAQSection />}
            rightExtra={rightExtra}
          />
        </div>

        {/* Spacer so the mobile fixed result bar never covers the last content */}
        <div className="h-28 lg:hidden" />
      </>
    )
  }

  return (
    <>
      {/* Hot-weather hydration notice: full width above the hero banner
          (only renders at warm temperatures) */}
      <WarmWeerAlert ageMonths="0-1" />

      {/* Hero Section (default: centered with floating images; v3/v4 pass their own) */}
      {hero ?? <V2Hero />}

      {/* Calculator (alternative UX: live calc + sticky result panel) */}
      <div id="calculator-v2" className="-mt-3 scroll-mt-6">
        <FlesCalculatorV2 variant={variant} />
      </div>

      {/* Below-calculator content, aligned to the same grid as the calculator:
          left column lines up with the inputs, the 340px right column sits
          directly under the result panel (ads + products live there). */}
      <div className="max-w-5xl mx-auto mt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-6 lg:items-start">
        <div>
          <div className="space-y-6">
            <FeedingTypesInfo />
          </div>
          <FAQSection />
        </div>

        {/* Right column: under the calculator's result panel */}
        <div className="space-y-6 mt-6 lg:mt-0">
          {rightExtra}
        </div>
      </div>

      {/* Spacer so the mobile fixed result bar never covers the last content */}
      <div className="h-28 lg:hidden" />
    </>
  )
}
