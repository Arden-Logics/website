import IndividualServicePage from '@/components/individual-service-page'
import { SERVICES } from '@/constants'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SERVICE_CONTENT } from '@/constants'

type ServicePageProps = {
  params: Promise<{ service: string }>
}

function getServiceSlug(href: string) {
  return href.replace(/^\/services\//, '')
}

const serviceSlugs = SERVICES.map((s) => getServiceSlug(s.href))

export async function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params
  const content = SERVICE_CONTENT[serviceSlug]
  if (!content) return {}
  const title = content.heroSection?.title ?? `${content.title} | Arden 360`
  const description = content.heroSection?.description ?? content.description
  return {
    title,
    description,
    openGraph: { title, description },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params
  if (!serviceSlugs.includes(serviceSlug) || !SERVICE_CONTENT[serviceSlug]) {
    notFound()
  }
  return <IndividualServicePage serviceKey={serviceSlug} />
}
