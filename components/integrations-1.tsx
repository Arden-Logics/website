import { Card } from '@/components/ui/card'
import Image from 'next/image'
import * as React from 'react'
import { cn } from '@/lib/utils'

export default function IntegrationsSection() {
    return (
        <section className="bg-background">
            <div className="py-24">
                <div className="mx-auto max-w-5xl px-6">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                            Built on proven platforms
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Trusted by industry leaders to deliver exceptional solutions
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <IntegrationCard
                            title="Microsoft"
                            description="Leading cloud and enterprise solutions provider."
                            image="/powered-by/Microsoft-logo.webp"
                            alt="Microsoft"
                            imageClassName="h-9"
                        />
                        <IntegrationCard
                            title="Google"
                            description="Innovative cloud computing and AI technology solutions."
                            image="/powered-by/Google_2015_logo.svg.webp"
                            alt="Google"
                            imageClassName="h-10"
                        />
                        <IntegrationCard
                            title="Cisco"
                            description="Networking and cybersecurity solutions for modern businesses."
                            image="/powered-by/Cisco_logo_blue_2016.svg.png"
                            alt="Cisco"
                            imageClassName="h-12"
                        />
                        <IntegrationCard
                            title="Fortinet"
                            description="Advanced cybersecurity and network security solutions."
                            image="/powered-by/FORTINET.png"
                            alt="Fortinet"
                            imageClassName="h-14"
                        />
                        <IntegrationCard
                            title="Lenovo"
                            description="Reliable hardware and technology solutions for enterprises."
                            image="/powered-by/Lenovo_logo_1.webp"
                            alt="Lenovo"
                            imageClassName="h-12"
                        />
                        <IntegrationCard
                            title="Datto"
                            description="Business continuity and data protection solutions."
                            image="/powered-by/Datto_logo.svg"
                            alt="Datto"
                            imageClassName="h-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({
    title,
    description,
    image,
    alt,
    imageClassName
}: {
    title: string;
    description: string;
    image: string;
    alt: string;
    imageClassName?: string
}) => {
    return (
        <Card className="relative p-6 transition-transform duration-200 hover:scale-[1.02] cursor-pointer">
            <div className="h-20 flex items-center justify-center mb-6">
                <Image
                    src={image}
                    alt={alt}
                    width={200}
                    height={80}
                    className={cn("w-auto object-contain", imageClassName)}
                    loading="lazy"
                    quality={75}
                />
            </div>

            <div className="space-y-2">
                <p className="text-muted-foreground line-clamp-2">{description}</p>
            </div>
        </Card>
    )
}