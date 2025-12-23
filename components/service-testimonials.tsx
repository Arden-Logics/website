'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ServiceTestimonial {
  id: number
  companyName: string
  logo: React.ReactNode
  headline: string
  highlightedText: string
  description: string
  image: string
  link: string
}

interface ServiceTestimonialsProps {
  testimonials: ServiceTestimonial[]
  ctaLink?: string
}

const SLIDE_DURATION = 5000

export default function ServiceTestimonials({ testimonials, ctaLink = '/resources/client-success' }: ServiceTestimonialsProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  // Reset progress whenever testimonial changes
  useEffect(() => {
    setProgress(0)
  }, [currentTestimonial])

  const goToTestimonial = useCallback((index: number) => {
    setCurrentTestimonial(index)
    setProgress(0)
  }, [])

  // Auto-advance with progress
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentTestimonial((current) => (current + 1) % testimonials.length)
          return 0
        }
        return prev + (100 / (SLIDE_DURATION / 50))
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentTestimonial, testimonials.length])

  const handleLogoClick = (index: number) => {
    setIsAutoPlaying(false)
    goToTestimonial(index)
    // Restart auto-play after a short delay
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 100)
  }

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Partnered with companies nationwide
          </h2>
        </div>
        
        {/* Header with CTA */}
        {/* <div className="flex items-center justify-center mb-12">
          <Link 
            href={ctaLink}
            className="group inline-flex items-center gap-3 text-foreground font-medium hover:text-primary transition-colors"
          >
            <span className="text-lg">See all client testimonials</span>
            <div className="flex items-center justify-center size-10 rounded-full bg-primary text-primary-foreground group-hover:scale-105 transition-transform">
              <ArrowRight className="size-5" />
            </div>
          </Link>
        </div> */}

        {/* Logo Navigation Tabs */}
        <div className="grid grid-cols-3 gap-0 mb-16">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => handleLogoClick(index)}
              className={cn(
                'relative py-5 px-4 flex items-center justify-center transition-all duration-300'
              )}
            >
              <div className={cn(
                'relative w-full h-12 md:h-16 transition-all duration-300',
                index === currentTestimonial 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-50 scale-95 grayscale hover:opacity-70 hover:scale-100'
              )}>
                {testimonial.logo}
              </div>
              
              {/* Progress indicator for active tab */}
              {index === currentTestimonial && (
                <div 
                  className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Testimonial Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  'absolute inset-0 transition-all duration-700 ease-out',
                  index === currentTestimonial 
                    ? 'opacity-100 scale-100 translate-x-0' 
                    : index < currentTestimonial 
                      ? 'opacity-0 scale-105 -translate-x-8' 
                      : 'opacity-0 scale-105 translate-x-8'
                )}
              >
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.companyName} testimonial`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            ))}
          </div>

          {/* Content Side */}
          <div className="relative min-h-[200px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  'transition-all duration-500 ease-out',
                  index === currentTestimonial 
                    ? 'opacity-100 translate-y-0 relative' 
                    : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                )}
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-snug">
                  <span className="text-primary">{testimonial.headline}</span>{' '}
                  <span className="font-semibold">{testimonial.highlightedText}</span>{' '}
                  <span>{testimonial.description}</span>
                </h3>
                
                <div className="mt-8">
                  <Link 
                    href={testimonial.link}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 group"
                  >
                    <span>Read the full story</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 lg:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleLogoClick(index)}
              className={cn(
                'size-2 rounded-full transition-all duration-300',
                index === currentTestimonial 
                  ? 'bg-primary w-6' 
                  : 'bg-border hover:bg-muted-foreground/40'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

