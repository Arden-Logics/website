import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import OtherServiceListings from '@/components/other-service-listings'

export interface FeatureItem {
    title: string
    description: string
    icon: React.ReactElement
}

interface ServicePageLayoutProps {
    title: string
    description: string
    features: FeatureItem[]
    ctaLink?: string
}

export default function ServicePageLayout({ title, description, features, ctaLink = "#" }: ServicePageLayoutProps) {
    return (
        <>
            <section className="overflow-hidden">
                <div className="bg-zinc-50 py-24">
                    <div className="mx-auto w-full max-w-5xl px-6">
                        <div className="grid items-center gap-12 pb-12 md:grid-cols-2">
                            <div>
                                <div className="max-w-md">
                                    <h2 className="text-foreground text-balance text-4xl font-semibold">{title}</h2>
                                    <p className="my-6 text-balance text-lg">{description}</p>
                                    <Button
                                        className="mt-8 pr-2"
                                        variant="outline"
                                        asChild>
                                        <Link href={ctaLink}>
                                            Contact Us
                                            <ChevronRight className="size-4 opacity-50" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            {/* Placeholder for image or illustration */}
                            <div className="bg-muted/20 flex aspect-video w-full items-center justify-center rounded-xl border border-dashed">
                                 <p className="text-muted-foreground text-sm">Service Illustration</p>
                            </div>
                        </div>

                        <div className="relative grid grid-cols-1 gap-x-3 gap-y-6 border-t pt-12 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="[&>svg]:size-4 text-foreground fill-foreground/10">
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
            <OtherServiceListings />
        </>
    )
}
