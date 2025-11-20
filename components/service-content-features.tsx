import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { DropdownIllustration } from "@/components/dropdown-illustration"
import Link from 'next/link'
import { SERVICE_CONTENT } from '@/constants'
import OtherServiceListings from '@/components/other-service-listings'
import ContentSection from './content-5'
import Features from './features-4'

interface ServiceContentFeaturesProps {
    serviceKey: string
}

export default function ServiceContentFeatures({ serviceKey }: ServiceContentFeaturesProps) {
    const content = SERVICE_CONTENT[serviceKey]
    
    if (!content) {
        return null
    }

    return (
        <>
            <section className="overflow-hidden">
                <div className="bg-zinc-50 py-24">
                    <div className="mx-auto w-full max-w-5xl px-6">
                        <div className="grid items-center gap-12 pb-12 md:grid-cols-2">
                            <div>
                                <div className="max-w-md">
                                    <h2 className="text-foreground text-balance text-4xl font-semibold">{content.title}</h2>
                                    <p className="my-6 text-balance text-lg">{content.subtitle}</p>
                                    <p className="text-muted-foreground">
                                        {content.description}
                                    </p>
                                    <Button
                                        className="mt-8 pr-2"
                                        variant="outline"
                                        asChild>
                                        <Link href={content.ctaLink}>
                                            {content.ctaText}
                                            <ChevronRight className="size-4 opacity-50" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <DropdownIllustration />
                        </div>

                        <div className="relative grid grid-cols-2 gap-x-3 gap-y-6 border-t pt-12 sm:gap-6 lg:grid-cols-4">
                            {content.features.map((feature, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="[&>svg]:size-4">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-sm font-medium">{feature.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <ContentSection />
            <Features />
            <OtherServiceListings />
        </>
    )
}

