import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { EnterpriseForm } from "@/components/enterprise-form"
import { Stripe } from '@/components/logos/stripe'
import TailwindCSS from '@/components/logos/tailwindcss'
import { Beacon } from '@/components/logos/beacon'
import { VercelFull } from '@/components/logos/vercel'

export default function HeroSection() {
    return (
        <section id="contact-form">
            <div className="bg-muted overflow-x-hidden py-24 lg:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <span className="text-primary block text-sm font-medium max-md:text-center">Contact Us</span>
                    <div className="mt-8 grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-12">
                        <div className="max-md:text-center">
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">Partner with Arden Logics</h1>
                            <p className="text-muted-foreground mb-8 mt-6 max-w-sm text-balance text-lg max-md:mx-auto">
                                Get a custom quote for your IT, Security, and AV needs. Our team is ready to help you build a resilient infrastructure.
                            </p>

                            <Button
                                asChild
                                size="lg">
                                <Link href="mailto:contact@ardenlogics.com">Email Us</Link>
                            </Button>

                            <ul className="mt-8 space-y-2">
                                {['Certified Experts', '24/7 Support', 'Tailored Solutions'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-muted-foreground flex items-center gap-2 max-md:justify-center">
                                        <CheckCircle2 className="size-4 text-emerald-800 *:first:fill-emerald-400/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <EnterpriseForm />
                    </div>

                    <div className="**:fill-foreground mt-12 grid grid-cols-2 max-lg:gap-x-6 max-lg:gap-y-8 max-sm:gap-x-3 lg:mt-24 lg:grid-cols-4 opacity-60 grayscale">
                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
                            <p className="text-muted-foreground text-balance">
                                <strong className="text-foreground font-medium">99.9% Uptime guarantee</strong> ensured for managed services.
                            </p>

                            <Stripe
                                height={22}
                                width={56}
                            />
                        </div>

                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
                            <p className="text-muted-foreground text-balance">
                                <strong className="text-foreground font-medium">Rapid Response</strong> times for critical issues.
                            </p>

                            <TailwindCSS
                                height={24}
                                width={120}
                            />
                        </div>
                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
                            <p className="text-muted-foreground">
                                <strong className="text-foreground font-medium">24/7 Monitoring</strong> with dedicated teams.
                            </p>

                            <Beacon
                                height={22}
                                width={68}
                            />
                        </div>

                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
                            <p className="text-muted-foreground text-balance">
                                <strong className="text-foreground font-medium">Seamless Integration</strong> with your existing stack.
                            </p>

                            <VercelFull
                                height={24}
                                width={78}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
