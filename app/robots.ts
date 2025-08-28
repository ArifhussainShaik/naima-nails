import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/_next/', '/api/'],
    },
    sitemap: 'https://naominailsnyc.com/sitemap.xml',
  }
}
