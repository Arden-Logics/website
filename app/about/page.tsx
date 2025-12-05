'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CheckCircle2, Target, Users, Award, Clock, Shield, Lightbulb, Heart, ArrowRight } from 'lucide-react'
import CTASection from '@/components/cta-section'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

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
        <div className="min-h-screen bg-background">
            {/* Hero Section with Image and Quote */}
            <section className="relative w-full h-[500px] overflow-hidden">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop")',
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative h-full flex items-center">
                    <div className="w-full px-6 lg:px-12">
                        <div className="max-w-xl">
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                    Technology that starts with people and scales with ambition
                                </h1>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    At Arden Logics, everything begins with the people behind the technology: the teams who rely on it, the leaders who shape it, and the communities it protects. We support thousands of users across dozens of industries, and every relationship is built on one principle — <strong>trust first, technology second</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-6 lg:px-12">
                <div className="w-full">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Target className="w-4 h-4" />
                                Our Mission
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Enabling organizations to grow with confidence
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Our mission is simple: to give businesses the clarity, reliability, and security they need in a digital-first world. We believe technology is most powerful when it's thoughtfully implemented, expertly supported, and aligned to real business goals.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6">
                                Arden Logics partners with organizations across healthcare, education, financial services, government, fitness, manufacturing, and more. We take time to understand the challenges behind the scenes and deliver solutions that make operations smoother, teams more productive, and growth more achievable.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Whether it's modernizing infrastructure, securing critical systems, simplifying communication, or unifying physical and digital security — <strong>we help businesses not just adapt to the future, but lead it.</strong>
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
                                            { title: 'Strategic, forward-looking IT leadership', desc: 'We don\'t just fix issues — we prevent them with proactive planning and long-term roadmaps.' },
                                            { title: 'Engineers with deep multi-industry expertise', desc: 'Certified professionals across cybersecurity, AV, cloud, networking, physical security, and collaboration tools.' },
                                            { title: 'Solutions tailored to each environment', desc: 'Every client is different. Every design reflects real-world workflows and goals.' },
                                            { title: 'Clear, predictable pricing — no surprises', desc: 'Transparent agreements built to support scaling, not restrict it.' },
                                            { title: 'Always-on monitoring and rapid support', desc: 'Real-time visibility with U.S.-based support to resolve issues before they cause impact.' },
                                            { title: 'A proven record of reliability and trust', desc: 'From small offices to multi-site enterprises, our work powers mission-critical operations every day.' },
                                        ].map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                                <div>
                                                    <span className="font-medium text-foreground">{item.title}</span>
                                                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

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
                                        <img 
                                            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=2070&auto=format&fit=crop"
                                            alt="Ryder truck"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-gray-900">Ryder</span>
                                                <span className="text-gray-500 text-sm">Ever better.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Top right image */}
                                <div className="col-span-7">
                                    <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-xl">
                                        <img 
                                            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                                            alt="Business professional"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                                                    <span className="text-white font-bold text-xs">FB</span>
                                                </div>
                                                <span className="font-semibold text-gray-900 text-sm">FIRST BANK</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bottom right image */}
                                <div className="col-span-7">
                                    <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-xl">
                                        <img 
                                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                                            alt="Professional working"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-gray-800/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                                            <div className="flex items-center gap-2">
                                                <span className="text-white font-semibold text-sm">AUTOPAY</span>
                                            </div>
                                        </div>
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
                <div className="w-full">
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
