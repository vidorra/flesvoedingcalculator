'use client'
import Image from 'next/image'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import { generateCalculatorSchema, generateOrganizationSchema, generateFAQSchema } from '../lib/structured-data'
import { useCalculator } from '../hooks/useCalculator'
import {
  PrematureInputSection,
  CalculatorResults,
  FeedingSchedule,
  FAQSection,
  FeedingTypesInfo,
  faqData
} from '../components/calculator'
import { Calculator, ChevronDown } from 'lucide-react'

export default function HomePage() {
  const {
    // Input state
    weight,
    setWeight,
    ageMonths,
    feedingsPerDay,
    setFeedingsPerDay,
    results,

    // Premature state
    isPremature,
    gestationalAge,
    birthDate,
    setBirthDate,
    correctedAge,
    prematureCategory,

    // Custom schepjes
    customAmount,
    setCustomAmount,
    customSchepjes,
    calculateCustomSchepjes,

    // Actions
    handleAgeChange,
    handleGestationalAgeChange,
    calculateFeeding
  } = useCalculator()

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCalculatorSchema())
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema())
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqData))
        }}
      />

      <Layout>
        {/* Hero Section */}
        <HeroSection />

        <div className="grid grid-cols-12 gap-6 min-h-screen">
          {/* Main Calculator Content - 7 columns on desktop, full width on mobile */}
          <div className="col-span-12 lg:col-span-7">
            {/* Calculator Card */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-medium text-primary mb-4">Calculator</h2>
              <div className="space-y-5">

                {/* Age Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Leeftijd van uw baby
                  </label>
                  <div className="relative">
                    <select
                      value={ageMonths}
                      onChange={(e) => handleAgeChange(e.target.value)}
                      className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none appearance-none bg-white text-gray-800"
                    >
                      <option value="premature">Prematuur geboren</option>
                      <option value="0-1">0-1 maand</option>
                      <option value="1">1-3 maanden</option>
                      <option value="3">3-6 maanden</option>
                      <option value="6">6+ maanden</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary pointer-events-none" />
                  </div>
                </div>

                {/* Premature Baby Input Fields */}
                {isPremature && (
                  <PrematureInputSection
                    gestationalAge={gestationalAge}
                    onGestationalAgeChange={handleGestationalAgeChange}
                    birthDate={birthDate}
                    onBirthDateChange={setBirthDate}
                    correctedAge={correctedAge}
                    prematureCategory={prematureCategory}
                  />
                )}

                {/* Weight Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gewicht van uw baby (kg)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Bijv. 4.5"
                      step="0.1"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none text-gray-800 placeholder:text-gray-500"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kg</span>
                  </div>
                </div>

                {/* Number of Feedings */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aantal voedingen per dag
                  </label>
                  <div className="relative">
                    <select
                      value={feedingsPerDay}
                      onChange={(e) => setFeedingsPerDay(e.target.value)}
                      className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none appearance-none bg-white text-gray-800"
                    >
                      <option value="4">4 voedingen (om de 6 uur)</option>
                      <option value="5">5 voedingen (om de 4-5 uur)</option>
                      <option value="6">6 voedingen (om de 4 uur)</option>
                      <option value="7">7 voedingen (om de 3-4 uur)</option>
                      <option value="8">8 voedingen (om de 3 uur)</option>
                      <option value="9">9 voedingen (om de 2-3 uur)</option>
                      <option value="10">10 voedingen (om de 2 uur)</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary pointer-events-none" />
                  </div>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateFeeding}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2"
                >
                  <Calculator className="w-5 h-5" />
                  <span>Bereken Voeding</span>
                </button>
              </div>
            </div>

            {/* Results */}
            <CalculatorResults
              results={results}
              customAmount={customAmount}
              setCustomAmount={setCustomAmount}
              customSchepjes={customSchepjes}
              calculateCustomSchepjes={calculateCustomSchepjes}
            />

            {/* Feeding Schedule */}
            {results && <FeedingSchedule results={results} />}

            {/* Information Cards */}
            <div className="space-y-6 mt-6">
              <FeedingTypesInfo />
            </div>

            {/* FAQ Section */}
            <FAQSection />
          </div>

          {/* Sidebar - 5 columns on desktop, 12 on mobile, always visible */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            {/* Images - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block space-y-6">
              {/* Mother and Baby Image */}
              <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
                <Image
                  src="/mother_and_baby.webp"
                  alt="Moeder en baby"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Google Ad 1 */}
              <div className="text-center space-y-2">
                <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
                  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5215838917916938"
                    crossOrigin="anonymous"></script>
                  {/* sidebar-right-ad1 */}
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

              {/* Baby Image */}
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

            {/* Google Ads - Always visible on mobile and desktop */}
            <div className="space-y-4">

              {/* Google Ad 2 */}
              <div className="text-center space-y-2">
                <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
                  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5215838917916938"
                    crossOrigin="anonymous"></script>
                  {/* sidebar-right-ad2 */}
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

            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
