import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-24">
                    <h2 className="text-muted-foreground text-4xl font-semibold">
                        Technology solutions built for <strong className="text-foreground font-semibold">how modern businesses operate</strong>
                    </h2>
                    <div className="space-y-6">
                        <p className="text-muted-foreground text-balance text-lg leading-relaxed">Arden 360 delivers managed IT, VoIP, cybersecurity, network cabling, audio visual, and physical security from a single accountable partner.</p>
                        <p className="text-muted-foreground text-balance text-lg leading-relaxed">
                            From <strong className="text-foreground font-semibold">proactive monitoring</strong> to strategic guidance, we keep your operations running smoothly so you can focus on your business.
                        </p>
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Contact Us</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}