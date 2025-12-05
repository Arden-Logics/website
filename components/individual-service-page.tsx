import { SERVICE_CONTENT, SERVICE_TESTIMONIALS } from '@/constants'
import ContentSection from './content-5'
import Features from './features-4'
import FeaturesHero from './features-14'
import WhyArdenSection from './why-arden-section'
import ServicesDiagonal from './services-diagonal'
import ServicesExpandGrid from './services-expand-grid'
import CallToAction from './call-to-action'
import ServiceTestimonials from './service-testimonials'
import IndustriesSection from './industries-section'


interface IndividualServicePageProps {
    serviceKey: string
}

export default function IndividualServicePage({ serviceKey }: IndividualServicePageProps) {
    const content = SERVICE_CONTENT[serviceKey]
    
    if (!content) {
        return null
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero section - Service-specific content */}
            <FeaturesHero serviceKey={serviceKey} />

            <div id="features" className="scroll-mt-32">
                <Features serviceKey={serviceKey} />
            </div>
            <div id="content" className="scroll-mt-32">
                <ContentSection serviceKey={serviceKey} />
            </div>
            <div id="why-us" className="scroll-mt-32">  
                <WhyArdenSection serviceKey={serviceKey} />
            </div>
            <div id="testimonials" className="scroll-mt-32">
                <ServiceTestimonials 
                    testimonials={SERVICE_TESTIMONIALS[serviceKey] || []}
                />
            </div>
            <div id="industries">
            <IndustriesSection />
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

