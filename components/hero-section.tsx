import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ChevronRight, CirclePlay } from 'lucide-react'
import { Spotify } from '@/components/logos/spotify'
import { Supabase } from '@/components/logos/supabase'
import { Beacon } from '@/components/logos/beacon'

export default function HeroSection() {
    return (
        <>
            <main
                role="main"
                className="overflow-x-hidden pb-6">
                <section>
                    <div className="relative pb-36 pt-32 md:pt-40 lg:pt-48">
                        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-12">
                            <div className="md:w-1/2">
                                <div>
                                    <h1 className="max-w-md text-balance text-5xl font-medium md:text-6xl">Empowering Business with Technology</h1>
                                    <p className="text-muted-foreground mb-8 mt-4 max-w-2xl text-balance text-xl">
                                        Managed IT, VoIP, Security, and AV solutions tailored for your success. Arden Logics provides the technology foundation your business needs to grow.
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="pl-4 pr-2.5">
                                            <Link href="/services">
                                                <span className="text-nowrap">Our Services</span>
                                                <ChevronRight className="opacity-50" />
                                            </Link>
                                        </Button>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="pl-3.5 pr-4">
                                            <Link href="#contact">
                                                <span className="text-nowrap">Contact Us</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="perspective-near mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0">
                            <div className="before:border-foreground/5 before:bg-foreground/5 relative h-full max-w-3xl before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border">
                                <div className="bg-background rounded-(--radius) shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 skew-x-6 overflow-hidden border border-transparent shadow-md ring-1">
                                     {/* Replaced with a placeholder div if specific image isn't available, or keep the generic app screen if it fits "technology" */}
                                     <div className="w-full h-full bg-zinc-100 flex items-center justify-center min-h-[400px]">
                                        <span className="text-muted-foreground">Technology Dashboard Illustration</span>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
