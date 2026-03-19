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
    priority?: boolean
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
    backgroundColor = 'default',
    priority = false
}: PartnerProgramSectionProps) {
    const bgClass = backgroundColor === 'muted' ? 'bg-muted/30' : 'bg-background'
    
    return (
        <section className={`py-12 md:py-20 ${bgClass}`}>
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-background rounded-3xl overflow-hidden shadow-xl ring-1 ring-foreground/5">
                        <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[500px] lg:min-h-[600px]">
                            {/* Image Side */}
                            <div className={`relative h-[400px] lg:h-auto overflow-hidden ${imagePosition === 'right' ? 'lg:order-2' : ''}`}>
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority={priority}
                                />
                            </div>
                            
                            {/* Content Side */}
                            <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 ${
                                imagePosition === 'right' ? 'lg:order-1' : ''
                            }`}>
                                <div className="space-y-2">
                                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                                        {title}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                                        {headline}
                                    </h2>
                                </div>
                                
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {description}
                                </p>
                                
                                {benefits.length > 0 && (
                                    <div className="space-y-4 pt-2">
                                        <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
                                            Program Benefits
                                        </h3>
                                        <ul className="space-y-3">
                                            {benefits.map((benefit, index) => (
                                                <li key={index} className="text-base text-muted-foreground flex items-start gap-3">
                                                    <div className="mt-1 bg-primary/10 rounded-full p-1">
                                                        <ChevronRight className="size-3 text-primary" />
                                                    </div>
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

