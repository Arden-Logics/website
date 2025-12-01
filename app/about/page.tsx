'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CheckCircle2, Target, Users, Award, Clock, Shield, Lightbulb, Heart } from 'lucide-react'
import CTASection from '@/components/cta-section'

const TEAM_MEMBERS = [
    {
        name: 'John Anderson',
        role: 'Chief Executive Officer',
        image: '/arden-logo.png',
        initials: 'JA',
    },
    {
        name: 'Sarah Mitchell',
        role: 'Chief Technology Officer',
        image: '/arden-logo.png',
        initials: 'SM',
    },
    {
        name: 'Michael Chen',
        role: 'VP of Engineering',
        image: '/arden-logo.png',
        initials: 'MC',
    },
    {
        name: 'Emily Rodriguez',
        role: 'VP of Client Success',
        image: '/arden-logo.png',
        initials: 'ER',
    },
]

const VALUES = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: 'Integrity',
        description: 'We conduct business with honesty, transparency, and ethical practices in every interaction.',
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: 'Innovation',
        description: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions.',
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Collaboration',
        description: 'We work closely with our clients as partners, understanding their unique needs and challenges.',
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: 'Excellence',
        description: 'We strive for the highest quality in everything we do, from service delivery to customer support.',
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: 'Client-Centric',
        description: 'Our clients\' success is our success. We prioritize their needs and build lasting relationships.',
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: 'Reliability',
        description: 'We deliver on our promises with consistent, dependable service and 24/7 support.',
    },
]

const MILESTONES = [
    {
        year: '2010',
        title: 'Company Founded',
        description: 'Arden Logics was established with a vision to transform business technology infrastructure.',
    },
    {
        year: '2013',
        title: 'Expanded Services',
        description: 'Added cybersecurity and cloud solutions to our comprehensive service portfolio.',
    },
    {
        year: '2016',
        title: '500+ Clients',
        description: 'Reached a milestone of serving over 500 businesses across multiple industries.',
    },
    {
        year: '2019',
        title: 'Industry Recognition',
        description: 'Awarded Top MSP Provider for excellence in managed IT services and customer satisfaction.',
    },
    {
        year: '2022',
        title: 'Advanced Solutions',
        description: 'Launched AI-powered security monitoring and predictive maintenance services.',
    },
    {
        year: '2025',
        title: 'Growing Strong',
        description: 'Continuing to innovate and serve businesses with cutting-edge technology solutions.',
    },
]

const STATS = [
    { value: '15+', label: 'Years of Experience' },
    { value: '1000+', label: 'Clients Served' },
    { value: '50+', label: 'Expert Team Members' },
    { value: '99.9%', label: 'Uptime Guarantee' },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-6 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Who We Are
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            A technology partner dedicated to empowering businesses with innovative IT solutions, expert support, and unwavering commitment to excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-6 lg:px-12 bg-muted/50">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {STATS.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-6 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Target className="w-4 h-4" />
                                Our Mission
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Empowering Businesses Through Technology
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                At Arden Logics, our mission is to deliver comprehensive technology solutions that enable businesses to thrive in an increasingly digital world. We believe that the right technology, implemented correctly and supported properly, can transform operations and drive growth.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                We partner with organizations across industries to understand their unique challenges and provide tailored solutions that not only solve today's problems but also prepare them for tomorrow's opportunities.
                            </p>
                        </div>
                        <div className="relative">
                            <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/20">
                                <CardHeader>
                                    <CardTitle className="text-2xl mb-4">What Sets Us Apart</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {[
                                            'Proactive approach to IT management',
                                            'Industry-certified expert technicians',
                                            'Customized solutions for every client',
                                            'Transparent pricing with no hidden fees',
                                            '24/7 monitoring and support',
                                            'Proven track record of success',
                                        ].map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-6 lg:px-12 bg-muted/50">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            These principles guide everything we do and shape how we serve our clients and support our team.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {VALUES.map((value, index) => (
                            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardHeader>
                                    <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                                        {value.icon}
                                    </div>
                                    <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                                    <CardDescription>{value.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 px-6 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Journey
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            From our founding to today, we've been committed to innovation and excellence in technology services.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 max-md:hidden" />
                        
                        <div className="space-y-8">
                            {MILESTONES.map((milestone, index) => (
                                <div key={index} className="relative flex gap-8 items-start">
                                    {/* Timeline dot */}
                                    <div className="flex-shrink-0 w-16 max-md:hidden">
                                        <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-full text-primary-foreground font-bold">
                                            {milestone.year}
                                        </div>
                                    </div>
                                    
                                    <Card className="flex-1 hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="md:hidden text-sm font-bold text-primary mb-2">
                                                {milestone.year}
                                            </div>
                                            <CardTitle className="text-xl">{milestone.title}</CardTitle>
                                            <CardDescription className="text-base">
                                                {milestone.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-6 lg:px-12 bg-muted/50">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Meet Our Leadership Team
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Experienced professionals committed to delivering exceptional technology solutions and service.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TEAM_MEMBERS.map((member, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardHeader>
                                    <div className="flex justify-center mb-4">
                                        <Avatar className="w-24 h-24 ring-4 ring-primary/10">
                                            <AvatarImage src={member.image} alt={member.name} />
                                            <AvatarFallback className="text-xl font-bold bg-primary/10 text-primary">
                                                {member.initials}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <CardTitle className="text-lg">{member.name}</CardTitle>
                                    <CardDescription>{member.role}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </div>
    )
}

