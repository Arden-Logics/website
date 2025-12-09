import IndividualSolutionPage from '@/components/individual-solution-page'
import { SOLUTION_CONTENT } from '@/constants'
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
    if (!SOLUTION_CONTENT[solutionKey]) {
        notFound()
    }
    
    return <IndividualSolutionPage solutionKey={solutionKey} />
}

