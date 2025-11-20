import FeaturesSection from "@/components/features-14";
import StatsSection from "@/components/stats-7";
import SecondaryHero from "@/components/secondary-hero-10";

export default function IndustriesPage() {
    return (
        <>
            <section className="py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
                        <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
                            Arden Logics provides tailored IT solutions across various industries, 
                            helping businesses transform their operations with cutting-edge technology.
                        </p>
                    </div>
                </div>
            </section>
            <FeaturesSection />
            <StatsSection />
            <SecondaryHero />
        </>
    )
}

