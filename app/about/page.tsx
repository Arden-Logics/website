'use client'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Target, Users, Award, Clock, Shield, Lightbulb, Heart, ArrowRight } from 'lucide-react'
import CallToAction from '@/components/call-to-action'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import LogoCloud from '@/components/logo-cloud'
import FeaturesSectionNine from '@/components/features-9'
import SecondaryHero8 from '@/components/secondary-hero-8'
import Image from 'next/image'

const TEAM_MEMBERS = [
    {
        name: 'Maxim Kulish',
        role: 'Principal & VP Business Development',
        image: '/people/Maxim-Kulish.jpg',
        initials: 'MK',
    },
    {
        name: 'Andrew Bonner',
        role: 'Chief Technology Officer',
        image: '/people/Andrew-Bonner.jpg',
        initials: 'AB',
    },
    {
        name: 'Jimmy Mcmillan',
        role: 'Director of IT',
        image: '/people/Jimmy-Mcmillan.jpg',
        initials: 'JM',
    },
    {
        name: 'Michelle Fortunato',
        role: 'Director of Operations',
        image: '/people/Michelle-Fortunato.jpg',
        initials: 'MF',
    },
    {
        name: 'Brian Quaresima',
        role: 'Director of Implementation & Support',
        image: '/people/Brian-Quaresima.jpg',
        initials: 'BQ',
    },
    {
        name: 'Timothy Sinh',
        role: 'Head of Growth and Revenue',
        image: '/people/Timothy-Sinh.jpg',
        initials: 'TS',
    },
]

const VALUES = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: 'Integrity',
        description: 'We operate with honesty, transparency, and accountability delivering exactly what we promise and standing by every decision we make.',
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: 'Innovation',
        description: 'We continually evaluate new technologies, methodologies, and AI-driven tools to bring clients forward-thinking, future-proof solutions.',
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Collaboration',
        description: 'We work as a true partner, aligning closely with your internal teams to understand your goals and overcome challenges together.',
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: 'Excellence',
        description: 'We hold ourselves to the highest standards in engineering, communication, documentation, and service delivery.',
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: 'Client-Centric',
        description: 'Your success is our priority. We design every engagement, workflow, and support process around delivering measurable outcomes for you.',
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: 'Reliability',
        description: 'We deliver consistent, dependable service with 24/7 monitoring, rapid response, and long-term support you can count on.',
    },
]

const MILESTONES = [
    {
        year: '2010',
        title: 'Company Founded',
        description: 'Arden Logics was founded to provide reliable IT services with a focus on long-term client relationships, operational stability, and practical technology solutions for growing organizations.',
    },
    {
        year: '2013',
        title: 'Service Portfolio Expansion',
        description: 'Expanded core services to include managed security and cloud-based solutions, responding to increasing demand for remote access, data protection, and scalable infrastructure.',
    },
    {
        year: '2016',
        title: 'Strategic Merger',
        description: 'Merged with a sister technology firm to broaden engineering capabilities and expand offerings across VoIP, managed IT, infrastructure, and specialized technology services.',
    },
    {
        year: '2019',
        title: 'Enterprise & Fortune 500 Partnerships',
        description: 'Established partnerships and service engagements supporting large enterprise and Fortune 500 organizations, delivering technology solutions at scale across multi-site environments.',
    },
    {
        year: '2022',
        title: 'Modern Infrastructure & Workplace Solutions',
        description: 'Expanded into modern workplace and infrastructure services, including collaboration systems, audiovisual integration, and secure hybrid work environments.',
    },
    {
        year: '2025',
        title: 'Continued Enterprise Growth',
        description: 'Strengthened enterprise delivery standards with advanced security frameworks, standardized deployment practices, and expanded partner-led solutions to support complex, regulated environments.',
    },
]

const CUSTOMER_STATS = [
    { 
        value: '200+', 
        label: 'Multi-location deployments delivered across corporate, healthcare, education, and government environments.',
        highlight: '',
        highlightLink: ''
    },
    { 
        value: '30%', 
        label: 'Average reduction in communication and IT support costs for clients who transition to Arden Logics\' managed platforms.',
        highlight: '',
        highlightLink: ''
    },
    { 
        value: '7 days', 
        label: 'Fastest full-scale rollout from discovery to deployment for enterprise environments requiring immediate activation.',
        highlight: '',
        highlightLink: ''
    },
    { 
        value: '20%', 
        label: 'Average time savings achieved through AI-supported automations and proactive IT workflows.',
        highlight: '',
        highlightLink: ''
    },
]

export default function AboutPage() {
    return (
        <>
            <SecondaryHero8
                title="Technology that starts with people and scales with ambition"
                description={
                    <>
                        At Arden Logics, everything begins with the people behind the technology: the teams who rely on it, the leaders who shape it, and the communities it protects. We support thousands of users across dozens of industries, and every relationship is built on one principle — <strong>trust first, technology second</strong>.
                    </>
                }
                primaryCtaText="See customer stories"
                primaryCtaLink="/resources/client-success"
                backgroundImageSrc="/company-background.jpg"
                features={[]}
            />

            {/* Mission Section */}
            <section className="py-16 px-6 lg:px-12 text-center">
                <div className="max-w-4xl mx-auto">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto text-justify">
                            <Target className="w-4 h-4" />
                            Our Mission
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Enabling organizations to grow with confidence
                        </h2>
                        <p className="text-lg text-foreground mb-6">
                            Our mission is simple: to give businesses the clarity, reliability, and security they need in a digital-first world. We believe technology is most powerful when it&apos;s thoughtfully implemented, expertly supported, and aligned to real business goals.
                        </p>
                        <p className="text-lg text-foreground mb-6">
                            Arden Logics partners with organizations across healthcare, education, financial services, government, fitness, manufacturing, and more. We take time to understand the challenges behind the scenes and deliver solutions that make operations smoother, teams more productive, and growth more achievable.
                        </p>
                        <p className="text-lg text-foreground">
                            Whether it&apos;s modernizing infrastructure, securing critical systems, simplifying communication, or unifying physical and digital security. <strong>We help businesses not just adapt to the future, but lead it.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart Section */}
            <FeaturesSectionNine />

            <LogoCloud displayText={false} />

            {/* Why Customers Choose Us Section */}
            <section className="py-20 px-6 lg:px-12">
                <div className="w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Images */}
                        <div className="relative">
                            <div className="grid grid-cols-12 gap-4">
                                {/* Large image - left */}
                                <div className="col-span-5 row-span-2">
                                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                                        <Image 
                                            src="/company/company-image-1.jpeg"
                                            alt="Company image 1"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                
                                {/* Top right image */}
                                <div className="col-span-7">
                                    <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-xl">
                                        <Image 
                                            src="/company/company-image-2.webp"
                                            alt="Company image 2"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                
                                {/* Bottom right image */}
                                <div className="col-span-7">
                                    <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-xl">
                                        <Image 
                                            src="/company/company-image-3.jpg"
                                            alt="Company image 3"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Stats */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Trusted by Industry Leaders Nationwide
                            </h2>
                            <p className="text-lg text-muted-foreground mb-12">
                                More than 1,000 organizations from regional enterprises to national brands rely on Arden Logics to modernize their technology, strengthen security, and improve operational efficiency.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-8">
                                {CUSTOMER_STATS.map((stat, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="text-4xl md:text-5xl font-bold text-gray-900">
                                            {stat.value}
                                        </div>
                                        <p className="text-muted-foreground">
                                            {stat.highlight && stat.highlightLink ? (
                                                <>
                                                    <Link href={stat.highlightLink} className="text-primary hover:underline font-medium">
                                                        {stat.highlight}
                                                    </Link>
                                                    {' '}{stat.label}
                                                </>
                                            ) : stat.highlight ? (
                                                <>
                                                    {stat.label}{' '}
                                                    <span className="text-primary font-medium">{stat.highlight}</span>
                                                </>
                                            ) : (
                                                stat.label
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Button variant="outline" asChild className="group">
                                    <Link href="/resources/client-success">
                                        See customer stories
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-6 lg:px-12 bg-muted/50">
                <div className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            These principles define how we serve our clients, support our team, and build long-lasting partnerships.
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
                <div className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Journey
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            From our founding to today, we&apos;ve been committed to innovation and excellence in technology services.
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
                <div className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Meet Our Leadership Team
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Experienced professionals committed to delivering exceptional technology solutions and service.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <CallToAction />
        </>
    )
}
