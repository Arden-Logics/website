import { Button } from '@/components/ui/button'
import { Building2 } from 'lucide-react'
import Image from 'next/image'

interface ServiceHeroSectionProps {
    breadcrumb: string
    title: string
    description: string
    buttonText: string
    buttonLink: string
    imageSrc: string
    imageAlt: string
}

export default function ServiceHeroSection({
    breadcrumb,
    title,
    description,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt
}: ServiceHeroSectionProps) {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-normal leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                                {title}
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                {description}
                            </p>
                        </div>
                        <Button
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-md text-base"
                            asChild
                        >
                            <a href={buttonLink}>{buttonText}</a>
                        </Button>
                    </div>

                    {/* Right image with icon overlay */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Icon overlay */}
                        <div className="absolute bottom-8 left-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-500">
                            <Building2 className="h-10 w-10 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

