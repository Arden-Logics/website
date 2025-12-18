'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ContactSalesDialog } from '@/components/contact-sales-dialog'

interface CTASectionProps {
    title?: string
    description?: string
    primaryButtonText?: string
    secondaryButtonText?: string
    secondaryButtonHref?: string
}

export default function CTASection({
    title = 'Ready to Partner With Us?',
    description = "Let's discuss how our expertise and dedication can help your business achieve its technology goals. Get in touch with our team today.",
    primaryButtonText = 'Contact Us',
    secondaryButtonText = 'Our Services',
    secondaryButtonHref = '/services',
}: CTASectionProps) {
    return (
        <section className="py-16 px-6 lg:px-12">
            <div className="w-full">
                <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-primary/20">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl md:text-3xl mb-4">
                            {title}
                        </CardTitle>
                        <CardDescription className="text-base max-w-2xl mx-auto">
                            {description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ContactSalesDialog>
                            <Button
                                size="lg"
                                className="min-w-[200px]">
                                {primaryButtonText}
                            </Button>
                        </ContactSalesDialog>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="min-w-[200px]">
                            <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

