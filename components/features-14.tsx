import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { DropdownIllustration } from "@/components/dropdown-illustration"
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
    const features = content?.features || []

    return (
        <section className="overflow-hidden h-screen flex items-center">
            <div className="bg-zinc-50 py-24 w-full">
                {/* Full-width hero content */}
                <div className="mx-auto w-full max-w-[90rem] px-8 lg:px-16">
                    <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
                        <div>
                            <div className="w-full">
                                <h2 className="text-foreground text-balance text-5xl lg:text-6xl font-semibold leading-tight">{title}</h2>
                                <p className="my-8 text-balance text-xl lg:text-2xl text-muted-foreground justify-between">{description}</p>
                                <Button
                                    className="mt-8 pr-3 text-base py-6 px-6"
                                    variant="outline"
                                    asChild>
                                    <Link href={buttonLink}>
                                        {buttonText}
                                        <ChevronRight className="size-5 opacity-50" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <DropdownIllustration className="scale-125 lg:scale-150 origin-center" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}