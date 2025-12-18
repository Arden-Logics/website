"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useMedia } from "@/hooks/use-media";

interface CarouselSlide {
  id: number;
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string; // Always have a fallback image
  video?: string; // Optional video (desktop only)
  imageAlt: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    headline: "Your trusted partner for It, security & business communications",
    description:
      "We provide fully managed IT services, cybersecurity protection, VoIP solutions, and expert support to help your business stay secure, efficient, and always connected.",
    buttonText: "Get Started",
    buttonLink: "/services",
    image: "/hero-background-2.jpg", // Fallback image for mobile
    video: "/hero-video.mp4",
    imageAlt: "Modern office team collaborating on technology solutions",
  },
  {
    id: 2,
    headline: "Managed it services that power your business",
    description:
      "Arden Logics delivers fully managed IT services, remote helpdesk support, proactive monitoring, patching, and strategic IT management for businesses of all sizes. Improve reliability, security, and performance with a dedicated MSP partner.",
    buttonText: "Learn More",
    buttonLink: "/services/msp-managed-it",
    image: "/hero-background-2.jpg",
    imageAlt: "Server room with modern IT infrastructure",
  },
  {
    id: 3,
    headline: "Modern voip & unified communications for a connected workforce",
    description:
      "Enterprise-grade calling, texting, video, and contact center solutions built for reliability and clarity. Streamline communication across locations with advanced call flows, analytics, and seamless integrations.",
    buttonText: "Explore VoIP Solutions",
    buttonLink: "/services/voip",
    image: "/hero-background-4.jpg", // Fallback image for mobile
    video: "/hero-video.mp4",
    imageAlt: "Business professionals in video conference meeting",
  },
  {
    id: 4,
    headline: "Cloud, networking & infrastructure built for reliability",
    description:
      "From Microsoft 365 and Azure to on-prem servers, networking, and disaster recovery we design, implement, and maintain infrastructure that keeps your business running.",
    buttonText: "View Cloud & Infrastructure",
    buttonLink: "/services",
    image: "/hero-background-4.jpg",
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
  const isAnimatingRef = useRef(false);
  const nextSlideRef = useRef<() => void>(() => {});

  const nextSlide = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setDirection("next");
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length;
      return next;
    });
    setProgress(0);
    setTimeout(() => {
      setIsAnimating(false);
      isAnimatingRef.current = false;
    }, 800);
  }, []);

  // Keep ref in sync
  useEffect(() => {
    nextSlideRef.current = nextSlide;
  }, [nextSlide]);

  const prevSlide = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    setTimeout(() => {
      setIsAnimating(false);
      isAnimatingRef.current = false;
    }, 800);
  }, []);

  const goToSlide = (index: number) => {
    if (isAnimatingRef.current || index === currentSlide) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsAnimating(false);
      isAnimatingRef.current = false;
      setIsAutoPlaying(true);
    }, 800);
  };

  // Progress bar animation
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      if (progressRef.current) {
        clearInterval(progressRef.current);
        progressRef.current = null;
      }
      return;
    }

    // Reset progress when slide changes
    setProgress(0);

    const interval = 50;
    const increment = (interval / SLIDE_DURATION) * 100;

    if (progressRef.current) {
      clearInterval(progressRef.current);
    }

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlideRef.current?.();
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
        progressRef.current = null;
      }
    };
  }, [isAutoPlaying, currentSlide]);

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

  // Detect mobile devices - don't load heavy video on mobile
  const isMobile = useMedia("(max-width: 768px)");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Determine which slides should have their media loaded
  // Only load current slide and adjacent slides for smooth transitions
  const shouldLoadMedia = (index: number) => {
    if (index === currentSlide) return true;
    if (index === (currentSlide + 1) % slides.length) return true;
    if (index === (currentSlide - 1 + slides.length) % slides.length) return true;
    return false;
  };

  return (
    <section className="relative h-[calc(100vh-104px)] flex items-center overflow-hidden bg-secondary">
      {/* Background videos and images */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        const shouldLoad = shouldLoadMedia(index);
        const showVideo = slide.video && !isMobile && hasMounted && isActive;

        return (
          <div
            key={`bg-${slide.id}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Video background - only on desktop and only for active slide */}
            {showVideo && (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            )}
            
            {/* Image background - always present as fallback, use Next.js Image */}
            {(!showVideo && shouldLoad) && (
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                quality={80}
                sizes="100vw"
                className="object-cover"
              />
            )}
            
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/70 to-transparent lg:from-background/90 lg:via-background/40 lg:to-transparent z-10" />
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-background/80 hover:bg-background border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5 sm:size-6 text-foreground group-hover:text-primary transition-colors" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-background/80 hover:bg-background border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl group"
        aria-label="Next slide"
      >
        <ChevronRight className="size-5 sm:size-6 text-foreground group-hover:text-primary transition-colors" />
      </button>

      {/* Slides Container */}
      <div className="relative w-full px-6 sm:px-12 lg:px-24 xl:px-32 min-h-[300px] sm:min-h-[400px] z-20">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={getSlideClasses(index)}
            style={getAnimationStyles(index)}
          >
            <div className="w-full container mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
              {/* Text Content - Left Side */}
              <div className="flex-1 flex flex-col lg:max-w-[60%]">
                <div className="flex items-start gap-3 sm:gap-4 mb-2">
                  <div
                    className="shrink-0 mt-2 sm:mt-3 transition-all duration-700 border-y-8 sm:border-y-12 border-y-transparent border-l-12 sm:border-l-18 border-l-primary"
                    style={{
                      opacity: index === currentSlide ? 1 : 0,
                      transform: index === currentSlide ? "translateX(0)" : "translateX(-20px)",
                      transitionDelay: index === currentSlide ? "200ms" : "0ms",
                    }}
                  />
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-medium text-foreground leading-[1.1] tracking-tight"
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
                  className="text-muted-foreground text-base sm:text-lg md:text-xl mt-4 sm:mt-6 mb-6 sm:mb-8 max-w-2xl ml-[24px] sm:ml-[34px] leading-relaxed"
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
                  className="ml-[24px] sm:ml-[34px]"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    transform: index === currentSlide ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: index === currentSlide ? "400ms" : "0ms",
                  }}
                >
                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center justify-between gap-6 sm:gap-8 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group min-w-[160px] sm:min-w-[180px] rounded-md"
                  >
                    <span className="font-medium text-sm sm:text-base">{slide.buttonText}</span>
                    <ArrowRight className="size-4 sm:size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Bottom Indicators with Progress */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4 z-30">
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
