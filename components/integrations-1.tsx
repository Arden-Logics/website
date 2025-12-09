import { Card } from '@/components/ui/card'
import Link from 'next/link'
import * as React from 'react'
import VSCodium from '@/components/logos/VSCodium'
import Replit from '@/components/logos/Replit'
import GooglePaLM from '@/components/logos/GooglePaLM'
import Gemini from '@/components/logos/Gemini'
import MagicUI from '@/components/logos/MagicUI'
import MediaWiki from '@/components/logos/MediaWiki'

export default function IntegrationsSection() {
    return (
        <section className="bg-background">
            <div className="bg-muted/50 py-24">
                <div className="mx-auto max-w-5xl px-6">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                            Powered by Partners
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Trusted by industry leaders to deliver exceptional solutions
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <IntegrationCard
                            title="Google Gemini"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <Gemini />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Replit"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <Replit />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Magic UI"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <MagicUI />
                        </IntegrationCard>

                        <IntegrationCard
                            title="VSCodium"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <VSCodium />
                        </IntegrationCard>

                        <IntegrationCard
                            title="MediaWiki"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <MediaWiki />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Google PaLM"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <GooglePaLM />
                        </IntegrationCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ title, description, children, link = 'https://github.com/meschacirung/cnblocks' }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
    return (
        <Card className="relative p-6">
            <div className="*:size-8">{children}</div>

            <div className="space-y-2 pt-6">
                <h3 className="text-base font-medium">
                    <Link
                        href={link}
                        className="before:absolute before:inset-0">
                        {title}
                    </Link>
                </h3>
                <p className="text-muted-foreground line-clamp-2">{description}</p>
            </div>
        </Card>
    )
}