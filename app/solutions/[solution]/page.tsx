import IndividualSolutionPage from '@/components/individual-solution-page'
import { SOLUTION_PAGE_CONTENT } from '@/constants/solution-page-content'
import { notFound } from 'next/navigation'

interface SolutionPageProps {
    params: Promise<{
        solution: string
    }>
}

export default async function SolutionPage({ params }: SolutionPageProps) {
    const { solution } = await params
    const solutionKey = solution
    
    // Check if solution exists
    if (!SOLUTION_PAGE_CONTENT[solutionKey]) {
        notFound()
    }
    
    return <IndividualSolutionPage solutionKey={solutionKey} />
}

