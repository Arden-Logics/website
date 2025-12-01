
import HeroCarousel from "@/components/hero-carousel";
import LogoCloud from "@/components/logo-cloud";
import ServicesExpandGrid from "@/components/services-expand-grid";
import StatsSection from "@/components/stats-6";
import ServicesDiagonal from "@/components/services-diagonal";
import WhyArdenSection from "@/components/why-arden-section";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import ContactForm from "@/components/secondary-hero-14";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <LogoCloud />
      <ServicesExpandGrid />
      <StatsSection />
      <WhyArdenSection />
      <TestimonialsCarousel />
      <ServicesDiagonal />
      <ContactForm />
    </>
  );
}
