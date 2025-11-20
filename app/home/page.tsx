import ContentSection from "@/components/content-3";
import Hero from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import ContactForm from "@/components/secondary-hero-14";
import StatsSection from "@/components/stats-6";
import TestimonialsSection from "@/components/testimonials-6";
import SecondaryHero from "@/components/secondary-hero-10";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <SecondaryHero />
      <StatsSection />
      <ContactForm />
      <TestimonialsSection />
      <ContentSection />
    </>
  );
}
