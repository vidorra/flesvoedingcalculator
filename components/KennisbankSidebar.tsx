'use client'
import Image from 'next/image'

/**
 * Kennisbank sidebar: afbeeldingen bij het artikel.
 *
 * AdSense is bewust verwijderd (verdienmodel is 100% affiliate, zie
 * cookieless-analytics-plan.md in de togwaarde-repo). De vrijgekomen
 * plekken zijn gereserveerd voor relevante affiliate-productblokken in
 * de affiliate-uitrol. `adTopics` wordt nog geaccepteerd zodat de 48
 * artikelpagina's die het meegeven niet aangepast hoeven te worden.
 */
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  adTopics = []
}: {
  images?: { src: string; alt: string; caption: string }[]
  adTopics?: string[]
}) => {
  return (
    <div className="col-span-12 lg:col-span-5 space-y-6">
      {/* Afbeeldingen - alleen desktop */}
      <div className="hidden lg:block space-y-6">
        {images.map((image, index) => (
          <div key={`image-${index}`} className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
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
    </div>
  )
}

export default KennisbankSidebar
