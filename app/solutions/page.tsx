import StatsSection from "@/components/stats-7";
import SecondaryHero from "@/components/secondary-hero-10";
import ServiceHeroSection from "@/components/service-hero-section";

export default function SolutionsPage() {
    return (
        <>
            <ServiceHeroSection
                breadcrumb="Solutions"
                title="Solutions We Provide"
                description="Arden Logics provides tailored IT solutions across various sectors, helping businesses transform their operations with cutting-edge technology."
                buttonText="Get Started"
                buttonLink="#contact"
                imageSrc="https://res.cloudinary.com/dohqjvu9k/image/upload/v1757920113/work3_n5uspm.webp"
                imageAlt="Professional team working with technology"
            />
            <StatsSection />
            <SecondaryHero />
        </>
    )
}

