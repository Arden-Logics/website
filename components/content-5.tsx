import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import StatsSection from './stats-8'
import { SERVICE_CONTENT, SOLUTION_CONTENT } from '@/constants'
import { ContactSalesDialog } from './contact-sales-dialog'

interface ContentSectionProps {
    serviceKey?: string
    solutionKey?: string
}

export default function ContentSection({ serviceKey, solutionKey }: ContentSectionProps) {
    const serviceContent = serviceKey ? SERVICE_CONTENT[serviceKey] : null
    const solutionContent = solutionKey ? SOLUTION_CONTENT[solutionKey] : null
    const content = serviceContent || solutionContent
    
    const title = content?.contentSection?.title || 'Technology solutions built for how modern businesses operate'
    const highlights = content?.contentSection?.highlights || [
        'Arden 360 delivers managed IT, VoIP, cybersecurity, network cabling, audio visual, and physical security from a single accountable partner.',
        'Proactive monitoring and expert guidance keep your operations running smoothly and aligned with your long-term goals.',
        'From helpdesk and endpoint management to infrastructure and security, we provide end-to-end technology management so you can focus on your business.',
        'Enterprise-grade security, compliance support, and 24/7 availability so your systems stay protected and your teams stay productive.'
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
                        <ContactSalesDialog>
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-1 pr-1.5">
                                <span>Contact Us</span>
                                <ChevronRight className="size-2" />
                            </Button>
                        </ContactSalesDialog>
                    </div>
                </div>
            </div>
        </section>
    )
}