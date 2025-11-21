import { SERVICE_CONTENT } from '@/constants'
import OtherServiceListings from '@/components/other-service-listings'
import ContentSection from './content-5'
import Features from './features-4'
import ServiceHeroSection from './service-hero-section'
import ServiceScrollNav from './service-scroll-nav'
import ServiceSection from './service-section'

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
        <>
            <ServiceHeroSection {...content.heroSection!} />
            {/* <ServiceScrollNav items={navItems} />
            
            
            {content.sections?.map((section, index) => (
                <ServiceSection
                    key={section.id}
                    {...section}
                    imageOnRight={index % 2 === 0}
                />
            ))} */}

            {/* Standard sections */}
            <div id="content" className="scroll-mt-32">
                <ContentSection />
            </div>
            <div id="features" className="scroll-mt-32">
                <Features />
            </div>
            <div id="other-services" className="scroll-mt-32">
                <OtherServiceListings />
            </div>
        </>
    )
}

