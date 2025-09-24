import Image from 'next/image'
import GoogleAdSlot from './GoogleAdSlot'

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
  return (
    <div className="col-span-12 lg:col-span-5 space-y-6">
      {/* Images - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block space-y-6">
        {images.map((image, index) => (
          <div key={index} className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="w-full h-auto rounded-xl"
              priority={false}
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              {image.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Google Ads - Visible on all devices */}
      <GoogleAdSlot 
        slot="320x250" 
        topic={adTopics[0]} 
        isPlaceholder={true} 
      />

      <GoogleAdSlot 
        slot="320x250" 
        topic={adTopics[1]} 
        isPlaceholder={true} 
      />
    </div>
  )
}

export default KennisbankSidebar