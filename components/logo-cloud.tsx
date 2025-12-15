import Image from 'next/image'
import { InfiniteSlider } from '@/components/ui/infinite-slider'

export default function LogoCloud({ displayText = true }: { displayText?: boolean }) {
    const clientLogos = [
        { src: '/client-logos/Asendia_Organization_Logo.png', alt: 'Asendia' },
        { src: '/client-logos/csbm-logo-190x128-R.svg', alt: 'CSBM' },
        { src: '/client-logos/Logo+-+S&S.webp', alt: 'S&S' },
        { src: '/client-logos/ParkOps-Parking-Management-Service.png', alt: 'ParkOps' },
        { src: '/client-logos/PWi logo.jpg', alt: 'PWi' },
        { src: '/client-logos/ra_logo.jpg', alt: 'RA' },
        { src: '/client-logos/RAIN-Total-Care-Logo.jpg', alt: 'RAIN Total Care' },
        { src: '/client-logos/rmgt_logo_1.jpg', alt: 'RMGT' },
        { src: '/client-logos/TOCA_Social_Logo-08-removebg-preview_721x.webp', alt: 'TOCA Social' },
        { src: '/client-logos/75cdc0e546512724773b08fb1d7e84bcx.avif', alt: 'Client Logo' },
        { src: '/client-logos/unnamed.jpg', alt: 'Client Logo' },
    ]

    return (
        <section className="overflow-hidden py-16">
            <div className="group relative w-full px-6 lg:px-12">
                <div className="text-center">
                    {displayText && <div className="mx-auto max-w-4xl text-balance">
                        <h2 className="text-4xl font-semibold">Trusted by thousands of clients</h2>
                    </div>}

                    <div className="mask-x-from-90% relative py-12">
                        <div
                            aria-hidden
                            className="mask-r-from-50% backdrop-grayscale-200 absolute inset-y-0 left-0 z-10 w-16"
                        />
                        <div
                            aria-hidden
                            className="mask-l-from-50% backdrop-grayscale-200 absolute inset-y-0 right-0 z-10 w-16"
                        />
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            className="*:gap-12! md:*:gap-24! lg:*:gap-32! items-center">
                            {clientLogos.map((logo, index) => (
                                <div key={index} className="flex items-center justify-center h-16">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={120}
                                        height={64}
                                        className="object-contain w-auto h-full"
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>
                    </div>
                </div>
            </div>
        </section>
    )
}