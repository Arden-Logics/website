import { Lock, Zap, Shield, CheckCircle, Fingerprint, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function Features() {
    const features = [
        {
            icon: Zap,
            title: "MFA integration",
            description: "Duo works seamlessly with the tools your team already uses, from major platforms to custom apps. Quick to set up, easy to manage, and doesn't require extra IT support.",
            link: "Explore Duo's easy integrations",
            href: "#"
        },
        {
            icon: Zap,
            title: "Scale phishing-resistant MFA as you grow",
            description: "Duo supports your growth, not just your current infrastructure. Add new users or apps anytime and stay protected without slowing down your systems.",
            link: "Learn how phishing-resistance works",
            href: "#"
        },
        {
            icon: Shield,
            title: "Get adaptive authentication",
            description: "Duo's adaptive authentication lets you set access policies based on context like user role, location, application, network, and device health.",
            link: "Learn more about adaptive authentication",
            href: "#"
        },
        {
            icon: CheckCircle,
            title: "Setup that clicks",
            description: "Duo takes the hassle out of setup. It works with your existing systems, including applications and devices, and users can enroll themselves in just a few clicks.",
            link: "Discover user self-service",
            href: "#"
        },
        {
            icon: Fingerprint,
            title: "Skip on passwords, not on safety",
            description: "Say goodbye to repeat prompts. Duo Passwordless keeps sessions secure with a single verification based on a timeframe you choose.",
            link: "Go passwordless",
            href: "#"
        },
        {
            icon: Cpu,
            title: "Security that plugs into everything",
            description: "Duo integrates with any app or platform, whether you're adding 2FA for compliance or building a zero trust strategy. It supports everything from cloud and on-premises environments to VPNs, SaaS tools, custom apps, and even offline devices.",
            link: "Secure every access point",
            href: "#"
        }
    ]

    return (
        <section className="py-12 md:py-20">
            <div className="w-full space-y-12 px-8 sm:px-12 lg:px-24 xl:px-32 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-3xl space-y-4 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-gray-900">MFA that meets you where you are</h2>
                    <p className="text-lg text-gray-600">Duo wraps your entire organization in protection with powerful, scalable tools that work anywhere and grow with you.</p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div key={index} className="flex flex-col space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0">
                                        <Icon className="size-8 text-green-700" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                                    <p className="text-base text-gray-700 leading-relaxed">{feature.description}</p>
                                </div>
                                <Link href={feature.href} className="inline-flex items-center text-green-700 font-medium hover:underline">
                                    {feature.link} →
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
