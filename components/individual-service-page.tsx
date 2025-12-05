import { SERVICE_CONTENT, SERVICE_TESTIMONIALS } from '@/constants'
import ContentSection from './content-5'
import Features from './features-4'
import FeaturesHero from './features-14'
import WhyArdenSection from './why-arden-section'
import ServicesExpandGrid from './services-expand-grid'
import CallToAction from './call-to-action'
import ServiceTestimonials from './service-testimonials'
import IndustriesSection from './industries-section'
import LogoCloud from './logo-cloud'


interface IndividualServicePageProps {
    serviceKey: string
}

export default function IndividualServicePage({ serviceKey }: IndividualServicePageProps) {
    const content = SERVICE_CONTENT[serviceKey]
    
    if (!content) {
        return null
    }

    return (
        <div className="min-h-screen flex flex-col py-12">
            {/* Hero section - Service-specific content */}
            <FeaturesHero serviceKey={serviceKey} />

            {/* Wider container for features below the line */}
            <div className="mx-auto w-full max-w-[90rem] px-8 lg:px-16 mb-24 lg:mb-32">
                    <div className="relative grid grid-cols-2 gap-x-8 gap-y-10 border-t pt-12 sm:gap-10 lg:grid-cols-4 lg:gap-16">
                        {content.features.length > 0 ? (
                            content.features.map((feature, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        {feature.icon}
                                        <h3 className="text-sm font-medium">{feature.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </div>
                            ))
                        ) : (
                            <>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-medium">Faaast</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-medium">Powerful</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-medium">Security</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">An helping developers businesses innovate.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-medium">AI Powered</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">Helping developers businesses innovate.</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>

            <div id="features" className="scroll-mt-32">
                <Features serviceKey={serviceKey} />
            </div>
            <div id="logos">
                <LogoCloud displayText={false} />
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

