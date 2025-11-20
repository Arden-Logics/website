import { CheckCircle2, Headphones, GraduationCap, BookOpen, TrendingUp, Users, FileText, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const successResources = [
    {
        name: 'Dedicated Support',
        description: 'Get personalized assistance from our expert support team available 24/7.',
        icon: Headphones,
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10',
        link: '/#contact',
    },
    {
        name: 'Training & Onboarding',
        description: 'Comprehensive training programs to help your team maximize technology adoption.',
        icon: GraduationCap,
        color: 'text-green-500',
        bgColor: 'bg-green-500/10',
        link: '/#contact',
    },
    {
        name: 'Knowledge Base',
        description: 'Access our extensive library of guides, tutorials, and best practices.',
        icon: BookOpen,
        color: 'text-purple-500',
        bgColor: 'bg-purple-500/10',
        link: '/learn',
    },
    {
        name: 'Performance Analytics',
        description: 'Track your IT infrastructure performance and identify optimization opportunities.',
        icon: TrendingUp,
        color: 'text-orange-500',
        bgColor: 'bg-orange-500/10',
        link: '/#contact',
    },
    {
        name: 'Client Community',
        description: 'Connect with other clients, share experiences, and learn from each other.',
        icon: Users,
        color: 'text-indigo-500',
        bgColor: 'bg-indigo-500/10',
        link: '/#contact',
    },
    {
        name: 'Documentation',
        description: 'Technical documentation and system specifications at your fingertips.',
        icon: FileText,
        color: 'text-red-500',
        bgColor: 'bg-red-500/10',
        link: '/documents',
    },
]

const successSteps = [
    {
        step: '1',
        title: 'Discovery & Planning',
        description: 'We work closely with you to understand your business goals and technical requirements.',
    },
    {
        step: '2',
        title: 'Implementation',
        description: 'Our expert team deploys solutions with minimal disruption to your operations.',
    },
    {
        step: '3',
        title: 'Training & Adoption',
        description: 'Comprehensive training ensures your team is confident using new technology.',
    },
    {
        step: '4',
        title: 'Ongoing Support',
        description: 'Continuous monitoring, optimization, and support to ensure long-term success.',
    },
]

export default function ClientSuccessPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-6 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <CheckCircle2 className="w-4 h-4" />
                            Your Success is Our Priority
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Success Center</h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We're committed to ensuring your technology investments deliver maximum value. Access comprehensive resources, expert support, and ongoing guidance to drive your business forward.
                        </p>
                    </div>

                    {/* Success Resources Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16">
                        {successResources.map((resource, index) => {
                            const IconComponent = resource.icon
                            return (
                                <Card
                                    key={index}
                                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardHeader>
                                        <div className={`${resource.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                                            <IconComponent className={`w-6 h-6 ${resource.color}`} />
                                        </div>
                                        <CardTitle className="text-xl">{resource.name}</CardTitle>
                                        <CardDescription className="mt-2">{resource.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                            size="lg">
                                            <Link href={resource.link}>
                                                Learn More
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>

                    {/* Success Journey Section */}
                    <div className="mt-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Success Journey</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                From onboarding to optimization, we're with you every step of the way.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
                            {successSteps.map((step, index) => (
                                <Card key={index} className="relative">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                                            {step.step}
                                        </div>
                                        <CardTitle className="text-lg">{step.title}</CardTitle>
                                        <CardDescription className="mt-2">{step.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Support CTA Section */}
                    <div className="mt-24">
                        <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-primary/20">
                            <CardHeader className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                                        <MessageSquare className="w-8 h-8 text-primary" />
                                    </div>
                                </div>
                                <CardTitle className="text-2xl md:text-3xl mb-4">Need Immediate Assistance?</CardTitle>
                                <CardDescription className="text-base max-w-2xl mx-auto">
                                    Our dedicated client success team is ready to help you overcome challenges and achieve your technology goals. Reach out to us anytime.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="min-w-[200px]">
                                    <Link href="/#contact">Contact Support</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="min-w-[200px]">
                                    <Link href="/client-portals">Access Portals</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Additional Resources */}
                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Quick Start Guides</CardTitle>
                                <CardDescription>
                                    Get up and running quickly with our step-by-step setup guides.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button asChild variant="link" className="px-0">
                                    <Link href="/learn">Browse Guides →</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">FAQs</CardTitle>
                                <CardDescription>
                                    Find answers to commonly asked questions about our services.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button asChild variant="link" className="px-0">
                                    <Link href="/faqs">View FAQs →</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Latest Updates</CardTitle>
                                <CardDescription>
                                    Stay informed about new features, tips, and best practices.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button asChild variant="link" className="px-0">
                                    <Link href="/blog">Read Blog →</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

