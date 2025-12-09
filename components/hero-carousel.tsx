"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CarouselSlide {
  id: number;
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  imageAlt: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    headline: "Your Trusted Partner for IT, Security & Business Communications",
    description:
      "We provide fully managed IT services, cybersecurity protection, VoIP solutions, and expert support to help your business stay secure, efficient, and always connected.",
    buttonText: "Get Started",
    buttonLink: "/services",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop",
    imageAlt: "Modern office team collaborating on technology solutions",
  },
  {
    id: 2,
    headline: "Managed IT Services That Power Your Business",
    description:
      "Arden Logics delivers fully managed IT services, remote helpdesk support, proactive monitoring, patching, and strategic IT management for businesses of all sizes. Improve reliability, security, and performance with a dedicated MSP partner.",
    buttonText: "Learn More",
    buttonLink: "/services/msp-managed-it",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1534&auto=format&fit=crop",
    imageAlt: "Server room with modern IT infrastructure",
  },
  {
    id: 3,
    headline: "Modern VoIP & Unified Communications for a Connected Workforce",
    description:
      "Enterprise-grade calling, texting, video, and contact center solutions built for reliability and clarity. Streamline communication across locations with advanced call flows, analytics, and seamless integrations.",
    buttonText: "Explore VoIP Solutions",
    buttonLink: "/services/voip",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    imageAlt: "Business professionals in video conference meeting",
  },
  {
    id: 4,
    headline: "Cloud, Networking & Infrastructure Built for Reliability",
    description:
      "From Microsoft 365 and Azure to on-prem servers, networking, and disaster recovery we design, implement, and maintain infrastructure that keeps your business running.",
    buttonText: "View Cloud & Infrastructure",
    buttonLink: "/services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",
    imageAlt: "Global cloud network visualization",
  },
];

const SLIDE_DURATION = 6000;

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsAnimating(false);
      setIsAutoPlaying(true);
    }, 800);
  };

  // Progress bar animation
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    const interval = 50;
    const increment = (interval / SLIDE_DURATION) * 100;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide, currentSlide]);

  const getSlideClasses = (index: number) => {
    const isActive = index === currentSlide;
    const baseClasses = "absolute inset-0 flex flex-col justify-center";

    if (isActive) {
      return `${baseClasses} z-10`;
    }
    return `${baseClasses} z-0 pointer-events-none`;
  };

  const getAnimationStyles = (index: number): React.CSSProperties => {
    const isActive = index === currentSlide;
    const translateX = direction === "next" ? "60px" : "-60px";

    return {
      opacity: isActive ? 1 : 0,
      transform: isActive ? "translateX(0) scale(1)" : `translateX(${translateX}) scale(0.98)`,
      filter: isActive ? "blur(0px)" : "blur(4px)",
      transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
    };
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-secondary">
      {/* Decorative mesh pattern - bottom right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-20 pointer-events-none">
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <path
              key={`h-${i}`}
              d={`M 0 ${350 - i * 12} Q ${150 + i * 8} ${320 - i * 10}, ${300 + i * 5} ${280 - i * 8} T 500 ${200 - i * 6}`}
              className="stroke-primary"
              strokeWidth="1"
              fill="none"
              opacity={0.3 + i * 0.02}
            />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <path
              key={`v-${i}`}
              d={`M ${200 + i * 15} 400 Q ${220 + i * 14} ${300 - i * 5}, ${250 + i * 12} ${200 - i * 3} T ${300 + i * 10} 0`}
              className="stroke-primary"
              strokeWidth="1"
              fill="none"
              opacity={0.2 + i * 0.025}
            />
          ))}
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 pointer-events-none" />

      {/* Slides Container */}
      <div className="relative w-full px-8 sm:px-12 lg:px-24 xl:px-32 min-h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={getSlideClasses(index)}
            style={getAnimationStyles(index)}
          >
            <div className="w-full container mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
              {/* Text Content - Left Side */}
              <div className="flex-1 flex flex-col lg:max-w-[55%]">
                <div className="flex items-start gap-4 mb-2">
                  <div
                    className="flex-shrink-0 mt-3 transition-all duration-700 border-y-[12px] border-y-transparent border-l-[18px] border-l-primary"
                    style={{
                      opacity: index === currentSlide ? 1 : 0,
                      transform: index === currentSlide ? "translateX(0)" : "translateX(-20px)",
                      transitionDelay: index === currentSlide ? "200ms" : "0ms",
                    }}
                  />
                  <h1
                    className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-medium text-foreground leading-[1.1] tracking-tight"
                    style={{
                      opacity: index === currentSlide ? 1 : 0,
                      transform: index === currentSlide ? "translateY(0)" : "translateY(20px)",
                      transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                      transitionDelay: index === currentSlide ? "100ms" : "0ms",
                    }}
                  >
                    {slide.headline}
                  </h1>
                </div>

                <p
                  className="text-muted-foreground text-lg md:text-xl mt-6 mb-8 max-w-2xl ml-[34px] leading-relaxed"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    transform: index === currentSlide ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: index === currentSlide ? "250ms" : "0ms",
                  }}
                >
                  {slide.description}
                </p>

                {/* CTA Button */}
                <div
                  className="ml-[34px]"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    transform: index === currentSlide ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: index === currentSlide ? "400ms" : "0ms",
                  }}
                >
                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center justify-between gap-8 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group min-w-[180px] rounded-md"
                  >
                    <span className="font-medium">{slide.buttonText}</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Image - Right Side */}
              <div
                className="hidden lg:block flex-1 lg:max-w-[45%]"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? "translateX(0) scale(1)" : "translateX(40px) scale(0.95)",
                  transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: index === currentSlide ? "150ms" : "0ms",
                }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0vw, 45vw"
                    priority={index === 0}
                  />
                  {/* Subtle gradient overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Indicators with Progress */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative h-1 rounded-full overflow-hidden transition-all duration-500 bg-primary/20 hover:bg-primary/30"
            style={{
              width: index === currentSlide ? "64px" : "40px",
            }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Progress fill for active slide */}
            {index === currentSlide && (
              <div
                className="absolute inset-y-0 left-0 bg-primary/60 rounded-full transition-all duration-100 ease-linear"
                style={{
                  width: `${progress}%`,
                }}
              />
            )}
            {/* Completed slides indicator */}
            {index < currentSlide && (
              <div className="absolute inset-0 bg-primary/60 rounded-full" />
            )}
          </button>
        ))}
      </div>

    </section>
  );
}
