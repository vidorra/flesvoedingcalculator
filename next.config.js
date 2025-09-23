/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
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
      }
    ]
  }
}

module.exports = nextConfig