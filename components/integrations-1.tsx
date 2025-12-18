import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'

export default function IntegrationsSection() {
    const partners = [
        {
            title: 'Microsoft',
            description: 'Leading cloud and enterprise solutions provider.',
            image: '/powered-by/Microsoft-logo.webp',
            alt: 'Microsoft',
        },
        {
            title: 'Google',
            description: 'Innovative cloud computing and AI technology solutions.',
            image: '/powered-by/Google_2015_logo.svg.webp',
            alt: 'Google',
        },
        {
            title: 'Cisco',
            description: 'Networking and cybersecurity solutions for modern businesses.',
            image: '/powered-by/Cisco_logo_blue_2016.svg.png',
            alt: 'Cisco',
        },
        {
            title: 'Fortinet',
            description: 'Advanced cybersecurity and network security solutions.',
            image: '/powered-by/FORTINET.png',
            alt: 'Fortinet',
        },
        {
            title: 'Lenovo',
            description: 'Reliable hardware and technology solutions for enterprises.',
            image: '/powered-by/Lenovo_logo_1.webp',
            alt: 'Lenovo',
        },
        {
            title: 'Datto',
            description: 'Business continuity and data protection solutions.',
            image: '/powered-by/Datto_logo.svg',
            alt: 'Datto',
        },
    ]

    return (
        <section className="bg-background">
            <div className="py-24">
                <div className="mx-auto max-w-5xl px-6">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                            Powered by partners
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Trusted by industry leaders to deliver exceptional solutions
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {partners.map((partner, index) => (
                            <IntegrationCard
                                key={index}
                                title={partner.title}
                                description={partner.description}
                                image={partner.image}
                                alt={partner.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ title, description, image, alt, link }: { title: string; description: string; image: string; alt: string; link?: string }) => {
    return (
        <Card className="relative p-6 transition-transform duration-200 hover:scale-[1.02] cursor-pointer">
            <div className="h-16 flex items-center justify-center mb-6">
                <Image
                    src={image}
                    alt={alt}
                    width={200}
                    height={64}
                    className="object-contain max-h-full max-w-full"
                    style={{ maxHeight: '64px', maxWidth: '200px' }}
                />
            </div>

            <div className="space-y-2">
                {/* <h3 className="text-base font-medium">
                    {link ? (
                        <Link
                            href={link}
                            className="before:absolute before:inset-0">
                            {title}
                        </Link>
                    ) : (
                        title
                    )}
                </h3> */}
                <p className="text-muted-foreground line-clamp-2">{description}</p>
            </div>
        </Card>
    )
}