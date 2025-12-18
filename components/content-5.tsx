import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import StatsSection from './stats-8'
import { SERVICE_CONTENT, SOLUTION_CONTENT } from '@/constants'

interface ContentSectionProps {
    serviceKey?: string
    solutionKey?: string
}

export default function ContentSection({ serviceKey, solutionKey }: ContentSectionProps) {
    const serviceContent = serviceKey ? SERVICE_CONTENT[serviceKey] : null
    const solutionContent = solutionKey ? SOLUTION_CONTENT[solutionKey] : null
    const content = serviceContent || solutionContent
    
    const title = content?.contentSection?.title || 'Building the next generation of AI-powered Marketing Tools'
    const highlights = content?.contentSection?.highlights || [
        'Our platform combines cutting-edge AI models with intuitive interfaces to streamline your development workflow and boost productivity.',
        'With intelligent code completion and automated testing, developers can focus on solving complex problems rather than getting caught up in repetitive tasks.',
        'Our comprehensive suite of tools provides real-time collaboration features, allowing teams to work seamlessly together regardless of location. Share code, debug together, and deploy with confidence.',
        'Experience enterprise-grade security and compliance features built-in from the ground up. Your data is protected with industry-leading encryption and regular security audits.'
    ]

    return (
        <section className="py-16 md:py-32">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-24 md:items-center">
                    <div>
                        <h2 className="text-muted-foreground text-4xl font-semibold">
                            {title.split(' ').map((word, i) => {
                                // Make last part bold if it looks like a feature name
                                if (i >= title.split(' ').length - 4) {
                                    return <strong key={i} className="text-foreground font-semibold">{word} </strong>
                                }
                                return word + ' '
                            })}
                        </h2>
                        <div className="mt-12">
                            <StatsSection serviceKey={serviceKey} solutionKey={solutionKey} />
                        </div>
                    </div>
                    <div className="space-y-6">
                        {highlights.map((highlight, index) => (
                            <p key={index} className="text-muted-foreground text-balance text-lg leading-relaxed">
                                {highlight}
                            </p>
                        ))}
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Explore Features</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}