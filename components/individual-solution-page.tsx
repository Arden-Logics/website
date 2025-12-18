import { SOLUTION_PAGE_CONTENT } from '@/constants/solution-page-content'
import SolutionHeroSection from './solution-hero-section'
import SolutionFeaturesGrid from './solution-features-grid'
import SolutionContentSplit from './solution-content-split'
import SolutionTestimonial from './solution-testimonial'
import SolutionSecurityFeatures from './solution-security-features'
import SolutionInlineCTA from './solution-inline-cta'
import CallToAction from './call-to-action'

interface IndividualSolutionPageProps {
    solutionKey: string
}

export default function IndividualSolutionPage({ solutionKey }: IndividualSolutionPageProps) {
    const content = SOLUTION_PAGE_CONTENT[solutionKey]
    
    if (!content) {
        return null
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Section 1: Hero */}
            <SolutionHeroSection
                title={content.section1.title}
                subtitle={content.section1.subtitle}
                description={content.section1.description}
                ctaText={content.section1.ctaText}
                ctaLink={content.section1.ctaLink}
                imageSrc={content.section1.imageSrc}
                imageAlt={content.section1.imageAlt}
            />
            
            {/* Section 2: Features Grid */}
            <SolutionFeaturesGrid
                title={content.section2.title}
                features={content.section2.features}
            />
            
            {/* Inline CTA */}
            <SolutionInlineCTA 
                title="Experience Arden Logics in action"
                buttonText="Contact us"
            />
            
            {/* Section 3: Content Split (Image Left) */}
            <SolutionContentSplit
                title={content.section3.title}
                description={content.section3.description}
                imageSrc={content.section3.imageSrc}
                imageAlt={content.section3.imageAlt}
                imagePosition="left"
                backgroundColor="muted"
            />
            
            {/* Section 4: Content Split (Image Right) */}
            <SolutionContentSplit
                title={content.section4.title}
                description={content.section4.description}
                imageSrc={content.section4.imageSrc}
                imageAlt={content.section4.imageAlt}
                imagePosition="right"
                backgroundColor="default"
            />
            
            {/* Section 5: Testimonial */}
            <SolutionTestimonial
                quote={content.section5.quote}
                authorName={content.section5.authorName}
                authorTitle={content.section5.authorTitle}
                companyName={content.section5.companyName}
                companyLogo={content.section5.companyLogo}
                imageSrc={content.section5.imageSrc}
                imageAlt={content.section5.imageAlt}
            />
            
            {/* Section 6: Security Features */}
            <SolutionSecurityFeatures
                title={content.section6.title}
                features={content.section6.features}
            />
        </div>
    )
}
