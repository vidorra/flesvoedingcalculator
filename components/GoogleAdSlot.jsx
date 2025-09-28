const GoogleAdSlot = ({ 
  slot = "5691109362", // Default to sidebar-right-ad1 
  topic = "Flesvoeding Producten",
  isPlaceholder = false // Now default to real ads
}) => {
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

  // Real Google AdSense implementation
  return (
    <div className="text-center space-y-2">
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
  )
}

export default GoogleAdSlot