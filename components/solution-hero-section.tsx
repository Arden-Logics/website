import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

export interface SolutionHeroProps {
    title: string
    subtitle: string
    description: string
    ctaText: string
    ctaLink: string
    imageSrc?: string
    imageAlt?: string
}

export default function SolutionHeroSection({
    title,
    subtitle,
    description,
    ctaText,
    ctaLink,
    imageSrc,
    imageAlt = 'Solution illustration'
}: SolutionHeroProps) {
    return (
        <section className="">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content Side */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                            {title}
                        </h1>
                        
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {subtitle}
                        </p>
                        
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                        
                        <div className="pt-4">
                            <Button
                                asChild
                                size="lg"
                                className="pl-5 pr-3"
                            >
                                <Link href={ctaLink}>
                                    <span>{ctaText}</span>
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    
                    {/* Image Side */}
                    <div className="relative py-12">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                            {imageSrc ? (
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-xl bg-primary/40" />
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}
