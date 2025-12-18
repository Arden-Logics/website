import { EnterpriseForm } from "@/components/enterprise-form";
import SecondaryHero8 from "@/components/secondary-hero-8";
import PartnerBenefits from "@/components/partner-benefits";
import PartnerProgramSection from "@/components/partner-program-section";

export default function PartnersPage() {
    return (
        <>
        <SecondaryHero8
            title="Partnership Program"
            subtitle="Grow Together"
            description="A structured partner program for MSPs, integrators, and technology providers seeking a reliable delivery partner across IT, AV, and communications services. Designed to support long-term collaboration, the Arden Logics Partnership Program provides technical resources, operational support, and flexible engagement models that help partners deliver consistent outcomes at scale."
            primaryCtaText="Start Partnership Application"
            primaryCtaLink="#application"
            backgroundImageSrc="/partnership-program-background.jpeg"
            features={[]}
        />
        <PartnerBenefits />
        
        {/* Managed IT Partner Program */}
        <PartnerProgramSection
            title="Managed IT Partner Program"
            headline="Scale your services with Arden Logics' Managed IT Partner Program"
            description="Our program helps MSPs and service providers deliver full managed IT services without building a large support team. We provide the engineering, operations, and tooling behind the scenes so you can focus on client growth."
            benefits={[
                "Complete managed services stack (RMM, help desk, patching, security)",
                "Infrastructure lifecycle support and escalation assistance",
                "White-label or co-managed delivery options"
            ]}
            imageSrc="/partnership/msp-program.jpeg"
            imageAlt="Managed IT Partner Program"
            imagePosition="left"
            primaryButtonText="Learn more about the program"
            primaryButtonLink="#application"
            secondaryButtonText="Become a Partner"
            secondaryButtonLink="#application"
        />
        
        {/* AV Partner Integrator Program */}
        <PartnerProgramSection
            title="AV Partner Integrator Program"
            headline="Deliver professional AV without building an in-house AV team"
            description="We help integrators and MSPs offer modern conference rooms, collaboration spaces, and digital signage backed by expert AV design, configuration, and deployment support."
            benefits={[
                "End-to-end AV design, product guidance, and installation support",
                "Configuration, testing, documentation, and post-deployment assistance",
                "White-label or co-branded engagement options"
            ]}
            imageSrc="/partnership/audio-visual-program.jpeg"
            imageAlt="AV Partner Integrator Program"
            imagePosition="right"
            primaryButtonText="Learn more about the program"
            primaryButtonLink="#application"
            secondaryButtonText="Become an AV Partner"
            secondaryButtonLink="#application"
        />
        
        {/* VoIP Partner Program */}
        <PartnerProgramSection
            title="VoIP Partner Program"
            headline="Offer enterprise-grade VoIP without managing the complexity"
            description="Our VoIP Partner Program supports MSPs and IT providers with cloud voice, SIP, and communication solutions fully engineered, provisioned, and supported by Arden Logics."
            benefits={[
                "System design, provisioning, deployment, and number porting",
                "Call quality management, troubleshooting, and carrier coordination",
                "Flexible white-label or co-sell models with predictable margins"
            ]}
            imageSrc="/partnership/voip-program.jpeg"
            imageAlt="VoIP Partner Program"
            imagePosition="left"
            primaryButtonText="Learn more about the program"
            primaryButtonLink="#application"
            secondaryButtonText="Become a VoIP Partner"
            secondaryButtonLink="#application"
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
                    <EnterpriseForm isPartnerPage={true} />
                </div>
            </div>
        </section>
        </>
    )
}

