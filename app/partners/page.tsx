import { EnterpriseForm } from "@/components/enterprise-form";
import SecondaryHero from "@/components/secondary-hero-10";
export default function PartnersPage() {
    return (
        <>
        <SecondaryHero />
        <section className="py-24">
            <div className="mx-auto max-w-5xl px-6">
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

