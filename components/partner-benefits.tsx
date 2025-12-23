import React from 'react'
import { TrendingUp, Users, Wrench, Target, CheckCircle2 } from 'lucide-react'

const benefits = [
    {
        title: 'Scalable Revenue Opportunities',
        description: 'Expand service offerings and recurring revenue through structured partner programs designed to support long-term growth.',
        icon: <TrendingUp className="stroke-foreground fill-blue-500/15" />,
        features: [
            'Flexible partner engagement models',
            'Predictable pricing structures',
            'Support for recurring service offerings',
        ],
    },
    {
        title: 'Dedicated Partner Support',
        description: 'Work with a partner-focused team that understands enterprise environments and provides timely technical and operational assistance.',
        icon: <Users className="stroke-foreground fill-pink-500/15" />,
        features: [
            'Named partner point of contact',
            'Escalation and engineering support',
            'Ongoing account coordination',
        ],
    },
    {
        title: 'Technical & Deployment Enablement',
        description: 'Leverage proven architectures, implementation standards, and technical guidance across IT, AV, and communications solutions.',
        icon: <Wrench className="stroke-foreground fill-green-500/15" />,
        features: [
            'Solution design and planning',
            'Deployment and configuration support',
            'Documentation and handoff standards',
        ],
    },
    {
        title: 'Go-To-Market Collaboration',
        description: 'Collaborate on sales alignment and partner enablement initiatives to support joint opportunities and long-term relationships.',
        icon: <Target className="stroke-foreground fill-orange-500/15" />,
        features: [
            'Co-branded engagements',
            'Sales and technical enablement',
            'Partner-facing resources and collateral',
        ],
    },
]

export default function PartnerBenefits() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-balance text-4xl font-semibold md:text-5xl mb-4">
                        Enterprise Partner Benefits
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Support and resources designed to help partners deliver consistently at scale
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-card ring-foreground/10 rounded-xl border border-transparent shadow-md shadow-black/5 ring-1 p-8 space-y-4">
                            <div className="bg-card ring-border-illustration flex size-12 items-center justify-center rounded-md shadow ring-1 *:size-6">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{benefit.title}</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">
                                {benefit.description}
                            </p>
                            <ul className="space-y-2 pt-2">
                                {benefit.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}





