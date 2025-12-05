
import HeroCarousel from "@/components/hero-carousel";
import LogoCloud from "@/components/logo-cloud";
import ServicesExpandGrid from "@/components/services-expand-grid";
import StatsSection from "@/components/stats-6";
import WhyUsStats from "@/components/why-us-stats";
import FeaturedStories from "@/components/featured-stories";
import ContactForm from "@/components/secondary-hero-14";
import Blog from "@/components/blog-4";
import IndustriesSection from "@/components/industries-section";

export default function Home() {
  return (
    <>
    <div>
      <HeroCarousel />
      </div>
      <LogoCloud />
      <div className="w-full py-16 md:py-20 px-8 sm:px-12 lg:px-24 xl:px-32">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-4">
            Our Services
          </h2>
        </div>
      </div>
      <ServicesExpandGrid />
      <StatsSection />
      <WhyUsStats />
      <FeaturedStories />
      <Blog showMoreArticles={false} />
      <IndustriesSection />
      <ContactForm />
    </>
  );
}
