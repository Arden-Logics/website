import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-24">
                    <h2 className="text-muted-foreground text-4xl font-semibold">
                        Building the next generation of <strong className="text-foreground font-semibold">AI-powered Marketing Tools</strong>
                    </h2>
                    <div className="space-y-6">
                        <p className="text-muted-foreground text-balance text-lg leading-relaxed">Our platform combines cutting-edge AI models with intuitive interfaces to streamline your development workflow and boost productivity.</p>
                        <p className="text-muted-foreground text-balance text-lg leading-relaxed">
                            With <strong className="text-foreground font-semibold">intelligent code completion</strong> and automated testing, developers can focus on solving complex problems rather than getting caught up in repetitive tasks.
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