import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface SolutionTestimonialProps {
    quote: string
    authorName?: string
    authorTitle?: string
    companyName?: string
    companyLogo?: string
    imageSrc?: string
    imageAlt?: string
    linkText?: string
    linkHref?: string
}

export default function SolutionTestimonial({
    quote,
    authorName,
    authorTitle,
    companyName,
    companyLogo,
    imageSrc,
    imageAlt = 'Customer image',
    linkText = 'Read the customer story',
    linkHref = '#'
}: SolutionTestimonialProps) {
    return (
        <section className="py-16 md:py-24">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="bg-primary/10 rounded-3xl p-8 md:p-12 lg:p-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image Side */}
                        <div className="relative">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                {imageSrc ? (
                                    <Image
                                        src={imageSrc}
                                        alt={imageAlt}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                                        <div className="w-24 h-24 rounded-full bg-primary/20" />
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Quote Side */}
                        <div className="space-y-8">
                            {/* Quote Mark */}
                            <div className="text-primary text-5xl font-serif">"</div>
                            
                            {/* Quote Text */}
                            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                                {quote}
                            </blockquote>
                            
                            {/* Link */}
                            {linkHref && linkHref !== '#' && (
                                <Link 
                                    href={linkHref}
                                    className="inline-flex items-center text-foreground font-medium hover:text-primary transition-colors group"
                                >
                                    {linkText}
                                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            )}
                            
                            {/* Author Info */}
                            <div className="flex items-center justify-between pt-6 border-t border-foreground/10">
                                <div>
                                    {authorName && (
                                        <p className="font-semibold text-foreground">{authorName}</p>
                                    )}
                                    {authorTitle && companyName && (
                                        <p className="text-sm text-muted-foreground">
                                            {authorTitle}, {companyName}
                                        </p>
                                    )}
                                </div>
                                
                                {companyLogo && (
                                    <div className="relative h-10 w-24">
                                        <Image
                                            src={companyLogo}
                                            alt={companyName || 'Company logo'}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
