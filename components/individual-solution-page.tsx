import { SOLUTION_CONTENT } from '@/constants'
import ContentSection from './content-5'
import Features from './features-4'
import FeaturesHero from './features-14'
import WhyArdenSection from './why-arden-section'
import ServicesExpandGrid from './services-expand-grid'
import CallToAction from './call-to-action'
import LogoCloud from './logo-cloud'


interface IndividualSolutionPageProps {
    solutionKey: string
}

export default function IndividualSolutionPage({ solutionKey }: IndividualSolutionPageProps) {
    const content = SOLUTION_CONTENT[solutionKey]
    
    if (!content) {
        return null
    }

    return (
        <div className="min-h-screen flex flex-col py-12">
            
        </div>
    )

}

