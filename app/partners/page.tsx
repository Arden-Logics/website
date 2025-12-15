import { EnterpriseForm } from "@/components/enterprise-form";
import SecondaryHero8 from "@/components/secondary-hero-8";

export default function PartnersPage() {
    return (
        <>
        <SecondaryHero8
            title="Partnership Program"
            subtitle="Grow Together"
            description="A structured partner program for MSPs, integrators, and technology providers seeking a reliable delivery partner across IT, AV, and communications services. Designed to support long-term collaboration, the Arden Logics Partnership Program provides technical resources, operational support, and flexible engagement models that help partners deliver consistent outcomes at scale."
            primaryCtaText="Start Partnership Application"
            primaryCtaLink="#application"
            features={[]}
        />
        <section id="application" className="py-24">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">Partner With Us</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Join our network of trusted partners and grow your business with Arden Logics. 
                        Fill out the form below and our team will get in touch with you.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <EnterpriseForm />
                </div>
            </div>
        </section>
        </>
    )
}

