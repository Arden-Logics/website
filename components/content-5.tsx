import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import StatsSection from './stats-8'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <h2 className="text-muted-foreground text-4xl font-semibold">
                            Building the next generation of <strong className="text-foreground font-semibold">AI-powered Marketing Tools</strong>
                        </h2>
                        <div className="mt-12">
                            <StatsSection />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <p className="text-muted-foreground text-balance text-lg leading-relaxed">Our platform combines cutting-edge AI models with intuitive interfaces to streamline your development workflow and boost productivity.</p>
                        <p className="text-muted-foreground text-balance text-lg leading-relaxed">
                            With <strong className="text-foreground font-semibold">intelligent code completion</strong> and automated testing, developers can focus on solving complex problems rather than getting caught up in repetitive tasks.
                        </p>
                        <p className="text-muted-foreground text-balance text-lg leading-relaxed">
                            Our comprehensive suite of tools provides <strong className="text-foreground font-semibold">real-time collaboration</strong> features, allowing teams to work seamlessly together regardless of location. Share code, debug together, and deploy with confidence.
                        </p>
                        <p className="text-muted-foreground text-balance text-lg leading-relaxed">
                            Experience <strong className="text-foreground font-semibold">enterprise-grade security</strong> and compliance features built-in from the ground up. Your data is protected with industry-leading encryption and regular security audits.
                        </p>
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