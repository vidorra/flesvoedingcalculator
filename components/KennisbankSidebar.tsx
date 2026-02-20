'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const AD_SLOTS = ['5691109362', '5863882645']

function InlineAdSlot({ slot }: { slot: string }) {
  return (
    <div className="text-center space-y-2">
      <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4 min-h-[200px]">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5215838917916938"
          crossOrigin="anonymous"
        />
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-5215838917916938"
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: '(adsbygoogle = window.adsbygoogle || []).push({});'
          }}
        />
      </div>
    </div>
  )
}

const KennisbankSidebar = ({
  images = [
    {
      src: "/mother_and_baby.webp",
      alt: "Flesvoeding informatie",
      caption: "Praktische flesvoeding tips"
    },
    {
      src: "/baby_feeding.png",
      alt: "Baby voeding",
      caption: "Professionele voeding begeleiding"
    }
  ],
  adTopics = ["Flesvoeding Producten", "Baby Verzorging"]
}) => {
  const [showAds, setShowAds] = useState<boolean | null>(null)

  useEffect(() => {
    fetch('/api/settings?key=hide_all_ads')
      .then((r) => r.json())
      .then((data) => {
        setShowAds(data.value !== 'true')
      })
      .catch(() => {
        setShowAds(true)
      })
  }, [])

  // Create dynamic content array: image → ad → image → ad → remaining images
  const createDynamicContent = () => {
    const content: { type: string; data: any; key: string }[] = []
    const adTopicsToUse = [...adTopics]

    if (images[0]) {
      content.push({ type: 'image', data: images[0], key: 'image-0' })
    }
    if (adTopicsToUse[0]) {
      content.push({ type: 'ad', data: { slot: AD_SLOTS[0] }, key: 'ad-0' })
    }
    if (images[1]) {
      content.push({ type: 'image', data: images[1], key: 'image-1' })
    }
    if (adTopicsToUse[1]) {
      content.push({ type: 'ad', data: { slot: AD_SLOTS[1] }, key: 'ad-1' })
    }
    for (let i = 2; i < images.length; i++) {
      content.push({ type: 'image', data: images[i], key: `image-${i}` })
    }

    return content
  }

  const dynamicContent = createDynamicContent()

  return (
    <div className="col-span-12 lg:col-span-5 space-y-6">
      {/* Dynamic Content - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block space-y-6">
        {dynamicContent.map((item) => {
          if (item.type === 'image') {
            return (
              <div key={item.key} className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
                <Image
                  src={item.data.src}
                  alt={item.data.alt}
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                />
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {item.data.caption}
                </p>
              </div>
            )
          } else if (item.type === 'ad') {
            return showAds ? (
              <InlineAdSlot key={item.key} slot={item.data.slot} />
            ) : null
          }
          return null
        })}
      </div>

      {/* Mobile Ads - Visible only on mobile */}
      {showAds && (
        <div className="lg:hidden space-y-6">
          <InlineAdSlot slot={AD_SLOTS[0]} />
          <InlineAdSlot slot={AD_SLOTS[1]} />
        </div>
      )}
    </div>
  )
}

export default KennisbankSidebar
