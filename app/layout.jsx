import './globals.css'
import Script from 'next/script'
import { initWebVitals } from '../lib/analytics'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL('https://flesvoedingcalculator.nl'),
  title: 'Flesvoeding Calculator 2025 | Bereken Hoeveel ML Baby Nodig Heeft',
  description: 'Gratis flesvoeding calculator op basis van Nederlandse richtlijnen. Bereken direct hoeveel ml jouw baby per voeding nodig heeft. ✓ 150ml/kg formule ✓ Per leeftijd',
  keywords: 'flesvoeding calculator, hoeveel ml flesvoeding, baby voeding berekenen, flesvoeding schema, Nederlandse richtlijnen, 150ml per kg',
  robots: 'index, follow',
  authors: [{ name: 'FlesvoedingCalculator.nl' }],
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#109cb0',
    'theme-color': '#109cb0',
  },
  openGraph: {
    title: 'FlesvoedingCalculator.nl',
    description: 'Bereken hoeveel flesvoeding jouw baby nodig heeft',
    url: 'https://flesvoedingcalculator.nl',
    siteName: 'FlesvoedingCalculator.nl',
    images: ['/og-image.png'],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlesvoedingCalculator.nl',
    description: 'Bereken hoeveel flesvoeding jouw baby nodig heeft',
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://flesvoedingcalculator.nl',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5215838917916938" crossOrigin="anonymous"></script>
        
        {/* Google Analytics - Head version for verification */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3NZ90KFHQ6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3NZ90KFHQ6');
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "FlesvoedingCalculator.nl",
              "description": "Gratis flesvoeding calculator op basis van Nederlandse richtlijnen",
              "url": "https://flesvoedingcalculator.nl",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://flesvoedingcalculator.nl/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "FlesvoedingCalculator.nl",
                "url": "https://flesvoedingcalculator.nl"
              }
            })
          }}
        />
      </head>
      <body>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}
        
        {/* Web Vitals Monitoring */}
        <Script id="web-vitals" strategy="afterInteractive">
          {`
            (async () => {
              try {
                const { initWebVitals } = await import('../lib/analytics.js');
                initWebVitals();
              } catch (error) {
                console.error('Failed to load analytics:', error);
              }
            })();
          `}
        </Script>
        
        {/* Google AdSense Initialization */}
        <Script id="adsense-init" strategy="afterInteractive">
          {`
            (adsbygoogle = window.adsbygoogle || []).push({});
          `}
        </Script>
        
        {children}
      </body>
    </html>
  )
}