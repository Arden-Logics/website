import { Map } from "@/components/map"
import { SERVICE_CONTENT } from "@/constants"

interface StatsSectionProps {
    serviceKey?: string
}

export default function StatsSection({ serviceKey }: StatsSectionProps) {
    const serviceContent = serviceKey ? SERVICE_CONTENT[serviceKey] : null
    
    const metricsTitle = serviceContent?.metricsSection?.title || 'Building the next generation of AI-powered Marketing Tools'
    const metrics = serviceContent?.metricsSection?.metrics || [
        { value: '99.9', label: 'Uptime guarantee for all our services.', suffix: '%' },
        { value: '24/7', label: '24/7 support available around the clock.', suffix: '' },
        { value: '12', label: 'Faster processing than previous generation.', suffix: 'X' },
        { value: '12', label: 'Faster processing than previous generation.', suffix: 'X' },
    ]

    return (
        <section className="bg-transparent @container">
            <div className="relative py-0">
                <div className="mx-auto max-w-full px-0">
                    <div className="md:max-w-full lg:max-w-full bg-card ring-border-illustration relative rounded-xl p-6 shadow-xl shadow-black/10 ring-1 sm:p-10">
                        <div className="mb-8 space-y-4">
                            <h2 className="text-muted-foreground text-balance text-3xl font-semibold">
                                {metricsTitle}
                            </h2>

                            {serviceContent?.contentSection?.highlights?.[0] && (
                                <p className="text-muted-foreground">
                                    {serviceContent.contentSection.highlights[0]}
                                </p>
                            )}
                        </div>
                        <div className="**:text-center *:bg-muted/50 grid grid-cols-2 gap-1 *:rounded-md *:p-4">
                            {metrics.map((metric, index) => (
                                <div key={index} className="space-y-3 *:block">
                                    <span className="text-3xl font-semibold">
                                        {metric.value} {metric.suffix && <span className="text-muted-foreground text-lg">{metric.suffix}</span>}
                                    </span>
                                    <p className="text-muted-foreground text-balance text-sm">
                                        {metric.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}