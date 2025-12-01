import HeroSection from "@/components/hero-section-services";
import ServicesDiagonal from "@/components/services-diagonal";
import ServicesExpandGrid from "@/components/services-expand-grid";
import ServicesWhyUs from "@/components/services-why-us";
import CTASection from "@/components/cta-section";

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection />

            {/* Services Content */}
            <ServicesExpandGrid />

            {/* Why Choose Us */}
            <ServicesWhyUs />

            <ServicesDiagonal />

            {/* CTA Section */}
            <CTASection 
                title="Ready to Transform Your IT?"
                description="Discover how our comprehensive technology services can elevate your business operations. Schedule a consultation with our experts today."
                secondaryButtonText="Learn More"
                secondaryButtonHref="/about"
            />
        </>
    )
}