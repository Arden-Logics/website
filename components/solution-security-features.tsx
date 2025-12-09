import { ReactNode } from 'react'
import { Shield, Laptop, Fingerprint, Eye, Lock, Users, Camera, Database } from 'lucide-react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface SecurityFeature {
    icon: ReactNode
    title: string
    description: string
    linkText?: string
    linkHref?: string
}

export interface SolutionSecurityFeaturesProps {
    title: string
    features: SecurityFeature[]
}

export default function SolutionSecurityFeatures({
    title,
    features
}: SolutionSecurityFeaturesProps) {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                {/* Section Title */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground max-w-3xl mx-auto">
                        {title}
                    </h2>
                </div>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-4">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                {feature.icon}
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-semibold text-foreground">
                                {feature.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                            
                            {/* Link */}
                            {feature.linkText && feature.linkHref && (
                                <Link 
                                    href={feature.linkHref}
                                    className="inline-flex items-center text-primary font-medium hover:underline group"
                                >
                                    {feature.linkText}
                                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
