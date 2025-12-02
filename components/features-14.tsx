import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { DropdownIllustration } from "@/components/dropdown-illustration"
import Link from 'next/link'
import { SERVICE_CONTENT } from '@/constants'

interface FeaturesHeroProps {
    serviceKey?: string
}

export default function FeaturesSection({ serviceKey }: FeaturesHeroProps) {
    // Get dynamic content if serviceKey is provided
    const content = serviceKey ? SERVICE_CONTENT[serviceKey] : null
    
    // Use dynamic content if available, otherwise fall back to defaults
    const title = content?.heroSection?.title || "Power of LLMs in Your Editor"
    const description = content?.heroSection?.description || "Write code faster with the latest Large Language Models from Gemini, GooglePaLM, and Replit."
    const buttonText = content?.heroSection?.buttonText || "Learn more"
    const buttonLink = content?.heroSection?.buttonLink || "#"
    const features = content?.features || []

    return (
        <section className="overflow-hidden">
            <div className="bg-zinc-50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="grid items-center gap-12 pb-12 md:grid-cols-2">
                        <div>
                            <div className="max-w-md">
                                <h2 className="text-foreground text-balance text-4xl font-semibold">{title}</h2>
                                <p className="my-6 text-balance text-lg">{description}</p>
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
                        {features.length > 0 ? (
                            features.map((feature, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        {feature.icon}
                                        <h3 className="text-sm font-medium">{feature.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </div>
                            ))
                        ) : (
                            <>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-medium">Faaast</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-medium">Powerful</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-medium">Security</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">An helping developers businesses innovate.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-medium">AI Powered</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">Helping developers businesses innovate.</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}