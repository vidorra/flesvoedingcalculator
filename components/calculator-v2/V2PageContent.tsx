'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import V2Hero from './V2Hero'
import FlesCalculatorV2 from './FlesCalculatorV2'
import PopularProductsWidget from '../PopularProductsWidget'
import { FAQSection, FeedingTypesInfo } from '../calculator'

/**
 * Full /v2 page content: the alternative-UX calculator plus everything the
 * homepage offers (hero, info sections, FAQ, sidebar images, ads, popular
 * products) so v2 is feature-complete, not a stripped-down variant.
 */
export default function V2PageContent() {
  const [showAds, setShowAds] = useState<boolean | null>(null)

  useEffect(() => {
    fetch('/api/settings?key=hide_all_ads')
      .then((r) => r.json())
      .then((data) => setShowAds(data.value !== 'true'))
      .catch(() => setShowAds(true))
  }, [])

  return (
    <>
      {/* Hero Section (centered, flanked by floating images + stat badges) */}
      <V2Hero />

      {/* Calculator (alternative UX: live calc + sticky result panel) */}
      <div id="calculator-v2" className="mt-6 scroll-mt-6">
        <FlesCalculatorV2 />
      </div>

      {/* Below-calculator content: same inventory as the homepage */}
      <div className="grid grid-cols-12 gap-6 mt-10">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            <FeedingTypesInfo />
          </div>
          <FAQSection />
        </div>

        {/* Sidebar */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="hidden lg:block space-y-6">
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
              <Image
                src="/mother_and_baby.webp"
                alt="Moeder en baby"
                width={300}
                height={200}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {showAds && (
              <div className="text-center space-y-2">
                <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
                  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5215838917916938"
                    crossOrigin="anonymous"></script>
                  <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-5215838917916938"
                    data-ad-slot="5691109362"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                  <script dangerouslySetInnerHTML={{
                    __html: '(adsbygoogle = window.adsbygoogle || []).push({});'
                  }}></script>
                </div>
              </div>
            )}

            <PopularProductsWidget limit={4} />

            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
              <Image
                src="/baby.webp"
                alt="Baby"
                width={300}
                height={200}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-4">
            {showAds && (
              <div className="text-center space-y-2">
                <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
                  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5215838917916938"
                    crossOrigin="anonymous"></script>
                  <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-5215838917916938"
                    data-ad-slot="5863882645"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                  <script dangerouslySetInnerHTML={{
                    __html: '(adsbygoogle = window.adsbygoogle || []).push({});'
                  }}></script>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Spacer so the mobile fixed result bar never covers the last content */}
      <div className="h-28 lg:hidden" />
    </>
  )
}
