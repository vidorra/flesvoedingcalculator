/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.bol.com',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '**.example.com',
      }
    ]
  },
  // Optimize build for smaller size and better performance
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Reduce build output
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      },
      {
        source: '/bol-test.html',
        destination: '/bol-test.html'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          }
        ]
      },
      {
        source: '/ads.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          }
        ]
      },
      {
        source: '/bol-test.html',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=UTF-8'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600'
          }
        ]
      },
      // Cache Next.js optimized images for 1 year
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Cache all image files for 1 year (SVG, PNG, JPG, WebP, AVIF, GIF)
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Cache all font files for 1 year (WOFF, WOFF2, TTF, OTF)
      {
        source: '/:all*(woff|woff2|ttf|otf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

export default nextConfig