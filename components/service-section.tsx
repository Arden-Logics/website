import Image from 'next/image'
import Link from 'next/link'
import { ContactSalesDialog } from './contact-sales-dialog'

export interface ServiceSectionProps {
    id: string
    title: string
    description: string
    linkText?: string
    linkHref?: string
    imageSrc: string
    imageAlt: string
    imageOnRight?: boolean
}

export default function ServiceSection({
    id,
    title,
    description,
    linkText,
    linkHref,
    imageSrc,
    imageAlt,
    imageOnRight = true
}: ServiceSectionProps) {
    return (
        <section id={id} className="bg-gray-50 py-16 md:py-20 scroll-mt-32">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className={`grid items-center gap-12 lg:grid-cols-2 ${!imageOnRight ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Content */}
                    <div className={`space-y-6 ${!imageOnRight ? 'lg:col-start-2' : ''}`}>
                        <h3 className="text-3xl font-normal text-gray-900 md:text-4xl">
                            {title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>
                        {linkText && linkHref && (
                            linkText.toLowerCase().includes('contact') ? (
                                <ContactSalesDialog>
                                    <button className="inline-flex items-center text-green-700 font-medium hover:underline">
                                        {linkText} →
                                    </button>
                                </ContactSalesDialog>
                            ) : (
                                <Link
                                    href={linkHref}
                                    className="inline-flex items-center text-green-700 font-medium hover:underline"
                                >
                                    {linkText} →
                                </Link>
                            )
                        )}
                    </div>

                    {/* Image */}
                    <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg ${!imageOnRight ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

