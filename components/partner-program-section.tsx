import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface PartnerProgramSectionProps {
    title: string
    headline: string
    description: string
    benefits: string[]
    imageSrc: string
    imageAlt: string
    imagePosition: 'left' | 'right'
    primaryButtonText: string
    primaryButtonLink: string
    secondaryButtonText: string
    secondaryButtonLink: string
    backgroundColor?: 'default' | 'muted'
}

export default function PartnerProgramSection({
    title,
    headline,
    description,
    benefits,
    imageSrc,
    imageAlt,
    imagePosition,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
    backgroundColor = 'default'
}: PartnerProgramSectionProps) {
    const bgClass = backgroundColor === 'muted' ? 'bg-muted/25' : 'bg-background'
    
    return (
        <section className={`py-16 md:py-24 ${bgClass}`}>
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-background rounded-2xl overflow-hidden shadow-lg ring-1 ring-foreground/5">
                        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                            {/* Image Side */}
                            <div className={`relative ${imagePosition === 'right' ? 'lg:order-2' : ''}`}>
                                <div className="relative aspect-[4/3] lg:h-full">
                                    <Image
                                        src={imageSrc}
                                        alt={imageAlt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            
                            {/* Content Side */}
                            <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 ${
                                imagePosition === 'right' ? 'lg:order-1' : ''
                            }`}>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                                    {headline}
                                </h2>
                                
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    {description}
                                </p>
                                
                                {benefits.length > 0 && (
                                    <div className="space-y-3">
                                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                                            What partners get:
                                        </h3>
                                        <ul className="space-y-2">
                                            {benefits.map((benefit, index) => (
                                                <li key={index} className="text-base text-muted-foreground flex items-start">
                                                    <span className="mr-2 text-primary">–</span>
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button
                                        asChild
                                        className="w-full sm:w-auto"
                                    >
                                        <Link href={primaryButtonLink}>
                                            {primaryButtonText}
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-full sm:w-auto"
                                    >
                                        <Link href={secondaryButtonLink} className="flex items-center gap-1">
                                            <span>{secondaryButtonText}</span>
                                            <ChevronRight className="size-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

