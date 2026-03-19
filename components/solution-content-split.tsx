import Image from 'next/image'

export interface SolutionContentSplitProps {
    title: string
    description: string
    imageSrc?: string
    imageAlt?: string
    imagePosition?: 'left' | 'right'
    backgroundColor?: 'default' | 'muted'
}

export default function SolutionContentSplit({
    title,
    description,
    imageSrc,
    imageAlt = 'Content illustration',
    imagePosition = 'left',
    backgroundColor = 'default'
}: SolutionContentSplitProps) {
    const bgClass = backgroundColor === 'muted' ? 'bg-muted/30' : 'bg-background'
    
    return (
        <section className={`py-16 md:py-24 ${bgClass}`}>
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    imagePosition === 'right' ? '' : ''
                }`}>
                    {/* Image Side */}
                    <div className={`relative ${imagePosition === 'right' ? 'lg:order-2' : ''}`}>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                            {imageSrc ? (
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/20" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Content Side */}
                    <div className={`space-y-6 ${imagePosition === 'right' ? 'lg:order-1' : ''}`}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
                            {title}
                        </h2>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
