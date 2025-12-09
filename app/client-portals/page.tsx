import { Monitor, FileText, Phone, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const portals = [
    {
        name: 'Remote Access',
        description: 'Access your systems remotely through our secure RMM service portal.',
        url: 'https://palmnj.rmmservice.com/auth/#/login',
        icon: Monitor,
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10',
    },
    {
        name: 'IT Service Portal',
        description: 'Manage your IT services, view invoices, and track support requests.',
        url: 'https://customer.billergenie.com/Juniper-Technology-LLC/Account/Login/14410?returnUrl=%2FMTQ0MTA%3D%2FCustomers%2FAVKeQP5bwKRr%2FInvoices%2FDetails%2F52ly90dWglLM',
        icon: FileText,
        color: 'text-green-500',
        bgColor: 'bg-green-500/10',
    },
    {
        name: 'VoIP Portal Login',
        description: 'Access your VoIP phone system settings and manage your communications.',
        url: 'https://portal.junipertechteam.com/login',
        icon: Phone,
        color: 'text-purple-500',
        bgColor: 'bg-purple-500/10',
    },
]

export default function ClientPortalsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-48 pb-16 px-6 lg:px-12">
                <div className="w-full">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Portals</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Access your essential services through our secure client portals. Choose the portal you need below.
                        </p>
                    </div>

                    {/* Portals Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                        {portals.map((portal, index) => {
                            const IconComponent = portal.icon
                            return (
                                <Card
                                    key={index}
                                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardHeader>
                                        <div className={`${portal.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                                            <IconComponent className={`w-6 h-6 ${portal.color}`} />
                                        </div>
                                        <CardTitle className="text-xl">{portal.name}</CardTitle>
                                        <CardDescription className="mt-2">{portal.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button
                                            asChild
                                            className="w-full group-hover:shadow-md transition-shadow"
                                            size="lg">
                                            <Link
                                                href={portal.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2">
                                                Access Portal
                                                <ExternalLink className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>

                    {/* Help Section */}
                    <div className="mt-16 text-center">
                        <Card className="max-w-2xl mx-auto">
                            <CardHeader>
                                <CardTitle>Need Help?</CardTitle>
                                <CardDescription>
                                    If you're having trouble accessing any of our portals or need assistance with your account, please don't hesitate to contact our support team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg">
                                    <Link href="/#contact">Contact Support</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

