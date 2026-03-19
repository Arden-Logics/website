import { Map } from "@/components/map"

export default function StatsSection() {
    return (
        <section className="bg-muted @container">
            <div className="relative py-12 md:py-20">
                <div className="mask-radial-to-75% absolute inset-0 max-md:hidden">
                    <Map />
                </div>
                <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                    <div className="md:max-w-3/5 lg:max-w-1/2 bg-card ring-border-illustration relative rounded-xl p-6 shadow-xl shadow-black/10 ring-1 sm:p-10">
                        <div className="mb-8 space-y-4">
                            <h2 className="text-muted-foreground text-balance text-3xl font-semibold">
                                Technology solutions built for <strong className="text-foreground font-semibold">how modern businesses operate</strong>
                            </h2>

                            <p className="text-muted-foreground">
                                Arden 360 delivers <strong className="text-foreground font-semibold">managed IT, security, and AV</strong> from a single partner you can count on.
                            </p>
                        </div>
                        <div className="**:text-center *:bg-muted/50 grid grid-cols-2 gap-1 *:rounded-md *:p-4">
                            <div className="space-y-3 *:block">
                                <span className="text-3xl font-semibold">
                                    99.9 <span className="text-muted-foreground text-lg">%</span>
                                </span>
                                <p className="text-muted-foreground text-balance text-sm">
                                    <strong className="text-foreground font-medium">Uptime guarantee</strong> for all our services.
                                </p>
                            </div>
                            <div className="space-y-3 *:block">
                                <span className="text-3xl font-semibold">24/7</span>
                                <p className="text-muted-foreground text-balance text-sm">
                                    <strong className="text-foreground font-medium">24/7 support</strong> available around the clock.
                                </p>
                            </div>
                            <div className="space-y-3 *:block">
                                <span className="text-3xl font-semibold">
                                    12 <span className="text-muted-foreground text-lg">X</span>
                                </span>
                                <p className="text-muted-foreground text-balance text-sm">
                                    <strong className="text-foreground font-medium">12X</strong> faster processing than previous generation.
                                </p>
                            </div>
                            <div className="space-y-3 *:block">
                                <span className="text-3xl font-semibold">
                                    12 <span className="text-muted-foreground text-lg">X</span>
                                </span>
                                <p className="text-muted-foreground text-balance text-sm">
                                    <strong className="text-foreground font-medium">12X</strong> faster processing than previous generation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}