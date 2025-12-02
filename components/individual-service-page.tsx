import { SERVICE_CONTENT } from '@/constants'
import ContentSection from './content-5'
import Features from './features-4'
import FeaturesHero from './features-14'
import WhyArdenSection from './why-arden-section'
import ServicesDiagonal from './services-diagonal'
import ServicesExpandGrid from './services-expand-grid'
import CallToAction from './call-to-action'

interface IndividualServicePageProps {
    serviceKey: string
}

export default function IndividualServicePage({ serviceKey }: IndividualServicePageProps) {
    const content = SERVICE_CONTENT[serviceKey]
    
    if (!content) {
        return null
    }

    // Check if this service has the new redesigned layout
    const hasNewLayout = content.heroSection && content.sections

    if (!hasNewLayout) {
        return null
    }

    // Build navigation items from sections + standard sections
    const navItems = [
        ...(content.sections || []).map(section => ({
            id: section.id,
            label: section.navLabel || section.title
        })),
        { id: 'content', label: 'Content' },
        { id: 'features', label: 'Features' },
        { id: 'other-services', label: 'Other Services' }
    ]

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero section - Service-specific content */}
            <FeaturesHero serviceKey={serviceKey} />
            {/* <ServiceScrollNav items={navItems} />
            
            
            {content.sections?.map((section, index) => (
                <ServiceSection
                    key={section.id}
                    {...section}
                    imageOnRight={index % 2 === 0}
                />
            ))} */}

            <div id="features" className="scroll-mt-32">
                <Features />
            </div>
            <div id="content" className="scroll-mt-32">
                <ContentSection />
            </div>
            <div id="why-us" className="scroll-mt-32">  
                <WhyArdenSection />
            </div>
            <div id="industries">
                <ServicesDiagonal />
            </div>
            <div id="other-services" className="scroll-mt-32">
                <ServicesExpandGrid />
            </div>
            <div id="contact" className="scroll-mt-32"> 
                <CallToAction />
            </div>
        </div>
    )
}

