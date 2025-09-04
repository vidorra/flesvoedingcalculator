const GoogleAdSlot = ({ 
  slot = "320x250", 
  topic = "Flesvoeding Producten",
  isPlaceholder = true 
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

  // When ready to implement real Google Ads, this would be replaced with:
  return (
    <div className="bg-white rounded-2xl p-4 text-center">
      {/* Google AdSense code would go here */}
      <div 
        className="google-ad"
        data-ad-client="ca-pub-YOUR-PUBLISHER-ID"
        data-ad-slot="YOUR-AD-SLOT-ID"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

export default GoogleAdSlot