import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICE_CONTENT, SOLUTION_CONTENT } from '@/constants'

interface FeaturesHeroProps {
    serviceKey?: string
    solutionKey?: string
}

export default function FeaturesSection({ serviceKey, solutionKey }: FeaturesHeroProps) {
    // Get dynamic content if serviceKey or solutionKey is provided
    const serviceContent = serviceKey ? SERVICE_CONTENT[serviceKey] : null
    const solutionContent = solutionKey ? SOLUTION_CONTENT[solutionKey] : null
    const content = serviceContent || solutionContent
    
    // Use dynamic content if available, otherwise fall back to defaults
    const title = content?.heroSection?.title || "Power of LLMs in Your Editor"
    const description = content?.heroSection?.description || "Write code faster with the latest Large Language Models from Gemini, GooglePaLM, and Replit."
    const buttonText = content?.heroSection?.buttonText || "Learn more"
    const buttonLink = content?.heroSection?.buttonLink || "#"
    const imageSrc = content?.heroSection?.imageSrc || "/arden-logo.png"
    const imageAlt = content?.heroSection?.imageAlt || "Service illustration"

    return (
        <section className="overflow-hidden min-h-screen flex items-center sm:py-16 md:py-0">
            <div className="bg-zinc-50 py-24 w-full">
                {/* Full-width hero content */}
                <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                    <div className="grid items-center gap-8 md:grid-cols-[1.2fr_2fr] lg:gap-12">
                        <div>
                            <div className="w-full max-w-2xl">
                                <h2 className="text-foreground text-balance text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">{title}</h2>
                                <p className="my-8 text-balance text-lg sm:text-xl lg:text-2xl text-muted-foreground justify-between">{description}</p>
                                <Button
                                    className="mt-8 pr-3 text-base py-6 px-6 rounded-xl"
                                    variant="outline"
                                    asChild>
                                    <Link href={buttonLink}>
                                        {buttonText}
                                        <ChevronRight className="size-5 opacity-50" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="relative w-full aspect-[3/4] lg:aspect-[4/3] overflow-hidden rounded-2xl pt-10">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    className="w-[95%] h-[95%] object-cover rounded-2xl"
                                    priority
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}