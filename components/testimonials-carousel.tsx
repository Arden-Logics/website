'use client'

import React, { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Arden Logic transformed our entire IT infrastructure. Their managed services team is incredibly responsive—we went from constant tech headaches to virtually zero downtime. It's been a game-changer for our operations.",
    author: "Sarah Mitchell",
    role: "Chief Operations Officer",
    company: "Pacific Coast Manufacturing",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    quote: "The cybersecurity audit they performed uncovered vulnerabilities we didn't even know existed. Their proactive approach has given us peace of mind, and their team genuinely cares about protecting our business.",
    author: "Michael Chen",
    role: "IT Director",
    company: "Meridian Healthcare Group",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    quote: "Switching to Arden's VoIP solution cut our communication costs by 40% while dramatically improving call quality. Their support team had us up and running in days, not weeks.",
    author: "Jennifer Rodriguez",
    role: "Finance Manager",
    company: "Summit Legal Partners",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 4,
    quote: "We needed a complete AV overhaul for our new headquarters. Arden delivered an incredible conference room setup that's made hybrid meetings seamless. Our executives are thrilled with the results.",
    author: "David Thompson",
    role: "Facilities Director",
    company: "Horizon Financial Services",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 5,
    quote: "Their network cabling team is exceptional. They redesigned our entire infrastructure with zero business disruption. The documentation they provided was incredibly thorough.",
    author: "Amanda Foster",
    role: "Technology Manager",
    company: "Golden State Logistics",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 6,
    quote: "After a security incident with our previous provider, we switched to Arden Logic. Their camera and access control systems have been flawless, and their 24/7 monitoring gives us confidence our facilities are secure.",
    author: "Robert Kim",
    role: "Security Operations Lead",
    company: "Westfield Property Group",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const goToNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection('next')
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const goToPrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection('prev')
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setDirection(index > currentIndex ? 'next' : 'prev')
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
            Client Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it—hear from the businesses we've helped transform
          </p>
        </div>

        {/* Testimonial Card Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 p-3 rounded-full group"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.5} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 p-3 rounded-full group"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
          </button>

          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden">
            <div
              className={cn(
                'bg-card border border-border/50 rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-500 ease-out',
                isAnimating && direction === 'next' && 'translate-x-[-20px] opacity-0',
                isAnimating && direction === 'prev' && 'translate-x-[20px] opacity-0',
                !isAnimating && 'translate-x-0 opacity-100'
              )}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary/10 rotate-180" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={cn(
                      'w-5 h-5',
                      i < currentTestimonial.rating ? 'text-amber-400' : 'text-muted'
                    )}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 max-w-3xl">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <Avatar className="size-14 ring-2 ring-primary/20 shadow-md">
                  <AvatarImage
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                  />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground text-lg">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-muted-foreground">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>

              {/* Primary accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-b-3xl" />
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'relative h-2 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-border hover:bg-muted-foreground/40'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute -bottom-2 right-0 text-sm text-muted-foreground font-medium">
            <span className="text-foreground font-semibold">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="mx-1">/</span>
            <span>{String(testimonials.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

