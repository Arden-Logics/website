interface ServiceIntroSectionProps {
    title: string
    description: string
}

export default function ServiceIntroSection({ title, description }: ServiceIntroSectionProps) {
    return (
        <section className="bg-white py-16 md:py-20">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32 text-center">
                <h2 className="text-3xl font-normal leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                    {title}
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    )
}

