import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Shield, Sparkles, SquareActivity } from 'lucide-react'

interface SecondaryHero8Props {
    badge?: string
    title: string
    subtitle?: string
    description: string
    primaryCtaText?: string
    primaryCtaLink?: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
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
    features = defaultFeatures,
}: SecondaryHero8Props) {
    return (
        <section>
            <div className="bg-muted py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        {badge && (
                            <span className="text-primary bg-primary/5 border-primary/10 rounded-full border px-2 py-1 text-sm font-medium">{badge}</span>
                        )}
                        <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">{title}</h1>
                        {subtitle && (
                            <p className="text-muted-foreground mt-2 text-balance text-xl font-medium">{subtitle}</p>
                        )}
                        <p className="text-muted-foreground mb-6 mt-4 text-balance text-lg">{description}</p>

                        <Button asChild>
                            <Link href={primaryCtaLink}>{primaryCtaText}</Link>
                        </Button>
                        {secondaryCtaText && secondaryCtaLink && (
                            <Button
                                asChild
                                variant="outline"
                                className="ml-3">
                                <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
                            </Button>
                        )}

                        {features && features.length > 0 && (
                            <div className="border-border-illustration mt-20 grid gap-6 border-y py-6 text-left sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="space-y-3">
                                        <div className="bg-card ring-border-illustration flex size-8 items-center justify-center rounded-md shadow ring-1 *:size-4">{feature.icon}</div>
                                        <h2 className="text-lg font-medium">{feature.title}</h2>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}