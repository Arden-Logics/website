import HeroSection from "@/components/hero-section-services";
import ServicesDiagonal from "@/components/services-diagonal";
import ServicesExpandGrid from "@/components/services-expand-grid";
import ServicesPageContent from "@/components/services-page-content";
import ServicesWhyUs from "@/components/services-why-us";

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
        </>
    )
}