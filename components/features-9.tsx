import { Award, Target, Shield } from 'lucide-react'
import { MessageIllustration } from "@/components/message-illustration"
import { PollIllustration } from "@/components/poll-illustration"
import { UptimeIllustration } from "@/components/uptime-illustration"

export default function FeaturesSectionNine() {
    return (
        <section>
            <div className="bg-muted/50 @container py-24">
                <div className="mx-auto w-full max-w-7xl px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 *:p-8">
                        <div className="bg-card ring-foreground/10 grid grid-rows-[auto_1fr] space-y-12 overflow-hidden rounded-2xl border border-transparent shadow-md shadow-black/5 ring-1">
                            <div>
                                <Award className="fill-foreground/10 mb-5 size-4" />
                                <h3 className="text-foreground text-lg font-semibold">Strategic Leadership & Industry-Certified Expertise</h3>
                                <p className="text-muted-foreground mt-3">
                                    Arden Logics delivers forward-looking IT leadership backed by certified engineers across cybersecurity, cloud, AV, networking, and physical security. We proactively plan, prevent issues, and architect systems that keep organizations ahead of risk and ahead of change.
                                </p>
                            </div>
                        </div>
                        <div className="bg-card ring-foreground/10 grid grid-rows-[auto_1fr] space-y-12 overflow-hidden rounded-2xl border border-transparent shadow-md shadow-black/5 ring-1">
                            <div>
                                <Target className="fill-foreground/10 mb-5 size-4" />
                                <h3 className="text-foreground text-lg font-semibold">Tailored Solutions Built Around Your Environment & Goals</h3>
                                <p className="text-muted-foreground mt-3">
                                    Every environment is unique. Our solutions are designed around real workflows, business objectives, and long-term growth. With transparent, predictable pricing and no hidden fees, clients get clarity, scalability, and technology that truly fits their day-to-day operations.
                                </p>
                            </div>
                        </div>
                        <div className="bg-card ring-foreground/10 grid grid-rows-[auto_1fr] space-y-12 overflow-hidden rounded-2xl border border-transparent shadow-md shadow-black/5 ring-1">
                            <div>
                                <Shield className="fill-foreground/10 mb-5 size-4" />
                                <h3 className="text-foreground text-lg font-semibold">Always-On Monitoring Supported by Proven Reliability</h3>
                                <p className="text-muted-foreground mt-3">
                                    Our U.S.-based support and real-time monitoring detect and resolve issues before they create impact. Arden Logics is trusted by organizations of all sizes to power mission-critical operations with reliability, speed, and a long-standing track record of customer success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}