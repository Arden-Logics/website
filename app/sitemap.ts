import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/constants/contact'
import { SERVICES } from '@/constants'
import { SOLUTION_PAGE_CONTENT } from '@/constants/solution-page-content'
import { BLOG_POSTS } from '@/constants/blog'

function serviceSlug(href: string) {
  return href.replace(/^\/services\//, '')
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const servicePaths = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${serviceSlug(s.href)}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const solutionPaths = Object.keys(SOLUTION_PAGE_CONTENT).map((slug) => ({
    url: `${SITE_URL}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const blogPaths = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const staticPaths: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/documents`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/faqs`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/partners`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/resources/client-success`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/solutions`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]

  return [...staticPaths, ...servicePaths, ...solutionPaths, ...blogPaths]
}
