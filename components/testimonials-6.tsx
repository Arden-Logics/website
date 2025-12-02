import { ChevronRight } from 'lucide-react'
import { Stripe } from '@/components/logos/stripe'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Primevideo } from '@/components/logos/prime'

const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

export default function TestimonialsSection() {
    return (
        <section className="bg-linear-to-b from-background to-muted @container py-16 md:py-24 lg:py-32">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="*:ring-foreground/10 @4xl:grid-cols-2 grid gap-6 *:shadow-lg">
                    <Card className="bg-linear-to-b row-span-5 grid grid-rows-subgrid gap-8 from-indigo-50 p-8">
                        <Stripe className="h-32 w-64" />
                        <p className="text-muted-foreground text-balance text-xl font-medium">
                            Stripe leveraged our platform to streamline payment processing workflows, <strong className="text-foreground">resulting in a 40% reduction in integration time for new merchants.</strong>{' '}
                        </p>
                        <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="w-fit pr-1.5">
                            <Link href="#">
                                Read Case Study
                                <ChevronRight
                                    className="scale-90 opacity-50"
                                    strokeWidth="2.5"
                                />
                            </Link>
                        </Button>
                    </Card>
                    <Card className="bg-linear-to-b row-span-5 grid grid-rows-subgrid gap-8 from-cyan-50 p-8">
                        <Primevideo className="h-32 w-64" />
                        <p className="text-muted-foreground self-end text-balance text-xl font-medium">
                            Prime utilized our recommendation engine to <strong className="text-foreground">increase viewer engagement by 27% and content discovery by 35%</strong>. Our machine learning algorithms helped them deliver.
                        </p>
                        <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="w-fit pr-1.5">
                            <Link href="#">
                                Read Case Study
                                <ChevronRight
                                    className="scale-90 opacity-50"
                                    strokeWidth="2.5"
                                />
                            </Link>
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    )
}