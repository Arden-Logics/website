import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Shield, Sparkles, SquareActivity } from 'lucide-react'

interface SecondaryHero8Props {
    badge?: string
    title: string
    subtitle?: string
    description: string | React.ReactNode
    primaryCtaText?: string
    primaryCtaLink?: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
    backgroundImageSrc?: string
    features?: Array<{
        title: string
        description: string
        icon: React.ReactNode
    }>
}

const defaultFeatures = [
    {
        title: 'Automated Billing',
        description: 'Streamline your billing process with automated tools that save you time.',
        icon: <Sparkles className="stroke-foreground fill-blue-500/15" />,
    },
    {
        title: 'Detailed Reports',
        description: 'Access comprehensive reports to better understand your business performance.',
        icon: <SquareActivity className="stroke-foreground fill-indigo-500/15" />,
    },
    {
        title: 'Secure Transactions',
        description: 'Ensure the safety of your financial data with top-notch security measures.',
        icon: <Shield className="stroke-foreground fill-emerald-500/15" />,
    },
]

export default function SecondaryHero8({
    badge,
    title,
    subtitle,
    description,
    primaryCtaText = 'Get Started',
    primaryCtaLink = '#link',
    secondaryCtaText,
    secondaryCtaLink,
    backgroundImageSrc,
    features = defaultFeatures,
}: SecondaryHero8Props) {
    return (
        <section className={`relative min-h-screen flex items-center justify-center py-24 md:py-32 overflow-hidden ${backgroundImageSrc ? '' : 'bg-muted'}`}>
            {backgroundImageSrc && (
                <>
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={backgroundImageSrc}
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark overlay for readability */}
                        <div className="absolute inset-0 bg-black/50 lg:bg-black/40" />
                        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/20" />
                    </div>
                </>
            )}
            <div className={`relative mx-auto max-w-5xl px-6 w-full ${backgroundImageSrc ? 'z-20' : ''}`}>
                <div className="mx-auto max-w-4xl text-center">
                        {badge && (
                            <span className={`rounded-full border px-2 py-1 text-sm font-medium ${backgroundImageSrc ? 'text-white bg-white/10 border-white/20' : 'text-primary bg-primary/5 border-primary/10'}`}>{badge}</span>
                        )}
                        <h1 className={`mt-4 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl ${backgroundImageSrc ? 'text-white' : 'text-foreground'}`}>{title}</h1>
                        {subtitle && (
                            <p className={`mt-2 text-balance text-xl font-medium ${backgroundImageSrc ? 'text-white/90' : 'text-muted-foreground'}`}>{subtitle}</p>
                        )}
                        <p className={`mb-6 mt-4 text-balance text-lg ${backgroundImageSrc ? 'text-white/80' : 'text-muted-foreground'}`}>{description}</p>

                        <Button asChild>
                            <Link href={primaryCtaLink}>{primaryCtaText}</Link>
                        </Button>
                        {secondaryCtaText && secondaryCtaLink && (
                            <Button
                                asChild
                                variant={backgroundImageSrc ? "secondary" : "outline"}
                                className="ml-3">
                                <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
                            </Button>
                        )}

                        {features && features.length > 0 && (
                            <div className={`mt-20 grid gap-6 border-y py-6 text-left sm:grid-cols-2 md:grid-cols-3 lg:gap-12 ${backgroundImageSrc ? 'border-white/10' : 'border-border-illustration'}`}>
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="space-y-3">
                                        <div className={`flex size-8 items-center justify-center rounded-md shadow ring-1 *:size-4 ${backgroundImageSrc ? 'bg-white/10 ring-white/20' : 'bg-card ring-border-illustration'}`}>
                                            {React.isValidElement(feature.icon) ? React.cloneElement(feature.icon as React.ReactElement<any>, { 
                                                className: backgroundImageSrc ? 'stroke-white fill-white/15' : (feature.icon as React.ReactElement<any>).props.className 
                                            }) : feature.icon}
                                        </div>
                                        <h2 className={`text-lg font-medium ${backgroundImageSrc ? 'text-white' : 'text-foreground'}`}>{feature.title}</h2>
                                        <p className={`${backgroundImageSrc ? 'text-white/70' : 'text-muted-foreground'} text-sm`}>{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
        </section>
    )
}
