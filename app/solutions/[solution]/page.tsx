import IndividualSolutionPage from '@/components/individual-solution-page'
import { SOLUTION_PAGE_CONTENT } from '@/constants/solution-page-content'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface SolutionPageProps {
  params: Promise<{ solution: string }>
}

const solutionKeys = Object.keys(SOLUTION_PAGE_CONTENT)

export function generateStaticParams() {
  return solutionKeys.map((solution) => ({ solution }))
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { solution: solutionKey } = await params
  const content = SOLUTION_PAGE_CONTENT[solutionKey]
  if (!content) return {}
  const title = content.section1?.title ?? `${solutionKey} | Arden 360 Solutions`
  const description = content.section1?.description ?? content.section1?.subtitle
  return {
    title,
    description: description ?? undefined,
    openGraph: { title, description: description ?? undefined },
  }
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { solution: solutionKey } = await params
  if (!SOLUTION_PAGE_CONTENT[solutionKey]) {
    notFound()
  }
  return <IndividualSolutionPage solutionKey={solutionKey} />
}

