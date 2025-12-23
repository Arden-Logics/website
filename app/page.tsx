import HeroCarousel from "@/components/hero-carousel";
import LogoCloud from "@/components/logo-cloud";
import ServicesExpandGrid from "@/components/services-expand-grid";
import IntegrationsSection from "@/components/integrations-1";
import WhyUsStats from "@/components/why-us-stats";
import FeaturedStories from "@/components/featured-stories";
import HomeFAQs from "@/components/home-faqs";
import Blog from "@/components/blog-4";
import SolutionsSection from "@/components/solutions-section";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <>
    <div>
      <HeroCarousel />
      </div>
      <IntegrationsSection />
      <div className="w-full py-16 md:py-20 px-8 sm:px-12 lg:px-24 xl:px-32">
        <div className="w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-center">
        Solutions built for the way modern businesses operate
          </h2>
        </div>
      </div>
      <ServicesExpandGrid fullScreen={true} />
      <LogoCloud />
      <WhyUsStats />
      <FeaturedStories />
      <Blog showMoreArticles={false} />
      <SolutionsSection />
      <HomeFAQs />
      <CallToAction />
    </>
  );
}
