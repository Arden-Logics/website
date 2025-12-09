import { ReactNode } from 'react'
import { Cloud, Briefcase, Workflow, Monitor } from 'lucide-react'

export interface FeatureItem {
    icon: ReactNode
    title: string
    description: string
}

export interface SolutionFeaturesGridProps {
    title: string
    features: FeatureItem[]
}

export default function SolutionFeaturesGrid({
    title,
    features
}: SolutionFeaturesGridProps) {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground max-w-4xl mx-auto leading-tight">
                        {title}
                    </h2>
                </div>
                
                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start space-y-4">
                            {/* Icon Container */}
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                <div className="text-primary">
                                    {feature.icon}
                                </div>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-lg font-semibold text-foreground">
                                {feature.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
