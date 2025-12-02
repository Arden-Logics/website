import { Beacon } from '@/components/logos/beacon'
import { Bolt } from '@/components/logos/bolt'
import Cisco from '@/components/logos/cisco'
import { Hulu } from '@/components/logos/hulu'
import { OpenAIFull } from '@/components/logos/open-ai'
import { Primevideo } from '@/components/logos/prime'
import { Stripe } from '@/components/logos/stripe'
import VisualStudioCode from '@/components/logos/vs-code'
import { InfiniteSlider } from '@/components/ui/infinite-slider'

export default function LogoCloud() {
    return (
        <section className="bg-muted/50 overflow-hidden py-16">
            <div className="group relative w-full px-6 lg:px-12">
                <div className="text-center">
                    <div className="mx-auto max-w-2xl text-balance">
                        <h2 className="text-4xl font-semibold">Trusted by businesses over 50+ industries</h2>
                        <p className="text-muted-foreground mt-4 text-lg">
                        From small businesses to multi-site enterprises, Arden Logics helps clients modernize their technology, strengthen security, and improve productivity through reliable, strategic IT solutions.
                        </p>
                    </div>

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
                            <Hulu
                                height={24}
                                width="auto"
                            />
                            <Beacon
                                height={24}
                                width="auto"
                            />
                            <Cisco
                                height={24}
                                width="auto"
                            />
                            <Primevideo
                                height={32}
                                width="auto"
                            />
                            <Stripe
                                height={24}
                                width="auto"
                            />
                            <OpenAIFull
                                height={24}
                                width="auto"
                            />
                            <VisualStudioCode
                                height={24}
                                width="auto"
                            />

                            <Bolt
                                height={24}
                                width="auto"
                            />
                        </InfiniteSlider>
                    </div>
                </div>
            </div>
        </section>
    )
}