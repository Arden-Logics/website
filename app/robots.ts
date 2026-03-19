import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/constants/contact'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/client-portals', '/search'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
