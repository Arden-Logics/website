'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, X, Check, Search, Settings, Rocket, Shield, Activity } from 'lucide-react'
import { SERVICE_CONTENT, SERVICE_TESTIMONIALS } from '@/constants'
import ServiceTestimonials from './service-testimonials'
import IndustriesSection from './industries-section'
import ServicesExpandGrid from './services-expand-grid'
import CallToAction from './call-to-action'
import { cn } from '@/lib/utils'
import { DropdownIllustration } from "@/components/dropdown-illustration"

const serviceKey = 'camera-access-security'

export default function CameraSecurityPage() {
    const content = SERVICE_CONTENT[serviceKey]
    
    if (!content) {
        return null
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* SECTION 1: Hero Section */}
            <HeroSection content={content} />

            {/* SECTION 2: Features Grid */}
            <FeaturesSection content={content} />

            {/* SECTION 3: Horizontal Metrics Bar */}
            <MetricsSection content={content} />

            {/* SECTION 4: Pain Points */}
            <PainPointsSection content={content} />

            {/* SECTION 5: Why Arden Logics */}
            <WhyArdenSection content={content} />

            {/* SECTION 6: Process Framework */}
            <ProcessSection content={content} />

            {/* Testimonials */}
            <div id="testimonials" className="scroll-mt-32">
                <ServiceTestimonials 
                    testimonials={SERVICE_TESTIMONIALS[serviceKey] || []}
                />
            </div>

            {/* Industries */}
            <div id="industries">
                <IndustriesSection />
            </div>

            {/* Other Services */}
            <div id="other-services" className="scroll-mt-32">
                <ServicesExpandGrid />
            </div>

            {/* Contact CTA */}
            <div id="contact" className="scroll-mt-32">
                <CallToAction />
            </div>
        </div>
    )
}

// SECTION 1: Hero Section
function HeroSection({ content }: { content: typeof SERVICE_CONTENT[string] }) {
    const title = content?.heroSection?.title || content.subtitle
    const description = content?.heroSection?.description || content.description
    const buttonText = content?.heroSection?.buttonText || content.ctaText
    const buttonLink = content?.heroSection?.buttonLink || content.ctaLink
    const features = content?.features || []

    return (
        <section className="overflow-hidden">
            <div className="bg-zinc-50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="grid items-center gap-12 pb-12 md:grid-cols-2">
                        <div>
                            <div className="max-w-md">
                                <h1 className="text-foreground text-balance text-4xl font-semibold">{title}</h1>
                                <p className="my-6 text-balance text-lg text-muted-foreground">{description}</p>
                                <Button
                                    className="mt-8 pr-2"
                                    variant="outline"
                                    asChild>
                                    <Link href={buttonLink}>
                                        {buttonText}
                                        <ChevronRight className="size-4 opacity-50" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <DropdownIllustration />
                    </div>

                    <div className="relative grid grid-cols-2 gap-x-3 gap-y-6 border-t pt-12 sm:gap-6 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <div key={index} className="space-y-3">
                                <div className="flex items-center gap-2">
                                    {feature.icon}
                                    <h3 className="text-sm font-medium">{feature.title}</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// SECTION 2: Features Grid (6 items)
function FeaturesSection({ content }: { content: typeof SERVICE_CONTENT[string] }) {
    const features = content?.contentFeatures || []
    const sectionTitle = content?.featuresSectionTitle || "Intelligent Physical Security Solutions"
    const sectionDescription = content?.featuresSectionDescription || ""

    return (
        <section className="py-12 md:py-20">
            <div className="w-full space-y-12 px-8 sm:px-12 lg:px-24 xl:px-32 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-3xl space-y-4 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-gray-900">{sectionTitle}</h2>
                    <p className="text-lg text-gray-600">{sectionDescription}</p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="shrink-0">
                                    {feature.icon && React.isValidElement(feature.icon) && (
                                        React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, {
                                            className: "size-8 text-green-700"
                                        })
                                    )}
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                                <p className="text-base text-gray-700 leading-relaxed">{feature.description}</p>
                            </div>
                            {feature.linkText && feature.linkHref && (
                                <Link href={feature.linkHref} className="inline-flex items-center text-green-700 font-medium hover:underline">
                                    {feature.linkText}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// SECTION 3: Horizontal Metrics Bar
function MetricsSection({ content }: { content: typeof SERVICE_CONTENT[string] }) {
    const metricsTitle = content?.metricsSection?.title || 'Security That Delivers Measurable Protection'
    const metrics = content?.metricsSection?.metrics || []

    return (
        <section className="py-16 bg-zinc-900">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {metricsTitle}
                    </h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {metrics.map((metric, index) => (
                        <div key={index} className="text-center px-4 py-6 border-l border-zinc-700 first:border-l-0 md:first:border-l">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {metric.value}
                            </div>
                            <div className="text-zinc-400 text-sm md:text-base">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// SECTION 4: Pain Points
function PainPointsSection({ content }: { content: typeof SERVICE_CONTENT[string] }) {
    const painPoints = content?.painPoints || []
    const sectionTitle = content?.contentSection?.title || 'Outdated Security Creates Invisible Risks'
    const highlights = content?.contentSection?.highlights || []

    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            {sectionTitle}
                        </h2>
                        {highlights[0] && (
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                {highlights[0]}
                            </p>
                        )}
                    </div>

                    <div className="mb-8">
                        <p className="text-muted-foreground text-lg mb-6 text-center">
                            Most businesses deal with issues like:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-12">
                        {painPoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                                <div className="flex items-center justify-center size-6 rounded-full bg-red-100 text-red-600 shrink-0">
                                    <X className="size-3.5" strokeWidth={3} />
                                </div>
                                <span className="text-foreground font-medium">{point}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-muted-foreground text-lg">
                            If these feel familiar, you're not alone — and you don't have to live with them.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

// SECTION 5: Why Arden Logics
function WhyArdenSection({ content }: { content: typeof SERVICE_CONTENT[string] }) {
    const benefits = content?.whyArdenBenefits || []

    return (
        <section className="py-20 md:py-32 bg-zinc-50">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Why Organizations Choose Arden Logics for Security
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-4">
                            Security systems are only as strong as the people who design and manage them.
                        </p>
                        <p className="text-primary font-semibold text-lg">
                            Arden Logics brings a unique, IT-first approach that traditional alarm companies can't match.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center size-6 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                                        <Check className="size-3.5" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// SECTION 6: Process Framework (5 steps)
function ProcessSection({ content }: { content: typeof SERVICE_CONTENT[string] }) {
    const steps = content?.processSteps || []
    
    const iconMap: Record<string, React.ElementType> = {
        '1': Search,
        '2': Settings,
        '3': Rocket,
        '4': Shield,
        '5': Activity,
    }

    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Our Security Implementation Process
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A structured approach to designing, deploying, and maintaining your security infrastructure.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {steps.map((step, index) => {
                        const Icon = iconMap[step.number] || Search
                        return (
                            <div
                                key={step.number}
                                className="group relative bg-card border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div className="mb-5">
                                    <div className={cn(
                                        'inline-flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md'
                                    )}>
                                        <Icon className="size-6" />
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-lg font-bold text-foreground mb-3">
                                    {step.number}. {step.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.description}
                                </p>
                                
                                {/* Connector line (hidden on last item and mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-border hidden lg:block" />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
