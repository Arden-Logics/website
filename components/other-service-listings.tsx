import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { SERVICES } from '@/constants'

export default function OtherServiceListings() {
    return (
        <section className="bg-background border-t">
            <div className="bg-muted/30 py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-foreground text-balance text-3xl font-semibold md:w-2/3 mb-12">
                        Explore Our Other Services
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((service, index) => (
                            <div key={index} className="bg-card group rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50 group-hover:bg-muted">
                                    <div className="[&>svg]:size-6">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-foreground mb-2 font-medium">{service.name}</h3>
                                <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                                    {service.description}
                                </p>
                                <Link
                                    href={service.href}
                                    className="text-primary hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors duration-200">
                                    Learn more
                                    <ChevronRight className="size-3.5 translate-y-px transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
