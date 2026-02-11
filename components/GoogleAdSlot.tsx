import { getSetting } from '../lib/settings-service'

/**
 * GoogleAdSlot - Server Component for Google AdSense ads
 *
 * Now fetches the hide_all_ads setting from the server-side cache
 * instead of checking localStorage. This ensures consistent ad hiding
 * across all browsers and sessions.
 *
 * Props:
 * - slot: Google Ad slot ID (default: "5691109362")
 * - topic: Ad topic for targeting (default: "Flesvoeding Producten")
 * - isPlaceholder: Show placeholder instead of real ads (default: false)
 * - website: Website identifier for multi-site support (default: "flesvoedingcalculator")
 */
async function GoogleAdSlot({
  slot = "5691109362",
  topic = "Flesvoeding Producten",
  isPlaceholder = false,
  website = "flesvoedingcalculator"
}) {
  try {
    // Fetch hide_all_ads setting from server-side cache
    const hideAllAdsValue = await getSetting('hide_all_ads', website, 'false')
    const hideAllAds = hideAllAdsValue === 'true'

    // If ads are hidden globally, return null (no rendering)
    if (hideAllAds) {
      return null
    }
  } catch (error) {
    // On error, show ads (safe default - don't hide on error)
    console.error('Error checking ad visibility setting:', error)
  }

  if (isPlaceholder) {
    return (
      <div className="bg-gray-100 rounded-2xl p-8 text-center border-2 border-dashed border-gray-300">
        <div className="text-gray-400 text-sm font-medium mb-2">Advertentieruimte</div>
        <div className="text-gray-500 text-xs">Google Ads ({slot})</div>
        <div className="mt-4">
          <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-xs">{topic}</span>
          </div>
        </div>
      </div>
    )
  }

  // Real Google AdSense implementation with glassmorphism framing
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

export default GoogleAdSlot