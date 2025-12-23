'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Stat {
  value: string
  label: string
}

interface CustomerStory {
  id: number
  companyName: string
  logo: string
  headline: string
  highlightedText: string
  stats: Stat[]
  services: string[]
  image: string
  link: string
}

const stories: CustomerStory[] = [
  {
    id: 1,
    companyName: 'Advocare Medical Group',
    logo: '/partered-with-companies/Advocare-Logo-Blue.png',
    headline: 'Advocare relies on Arden to',
    highlightedText: 'keep their practices secure, connected, and running smoothly across every location.',
    stats: [
      { value: '1998', label: 'Founded' },
      { value: '600+', label: 'Providers & Staff' },
    ],
    services: ['VoIP & Unified Communications', 'Managed IT', 'Cybersecurity'],
    image: '/advocare-medical-group.jpeg',
    link: '/resources/client-success',
  },
  {
    id: 2,
    companyName: 'Edge Fitness',
    logo: '/partered-with-companies/The_Edge_Fitness_Clubs_Logo.jpg',
    headline: 'Arden powers the tech behind Edge Fitness',
    highlightedText: 'helping each location stay connected, supported, and member-ready with reliable IT and AV solutions.',
    stats: [
      { value: '50%', label: 'Faster issue resolution' },
      { value: '8hrs', label: 'Saved weekly across management teams' },
    ],
    services: ['IT Support', 'Audio/Visual Solutions'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    link: '/resources/client-success',
  },
  {
    id: 3,
    companyName: 'Ives Bank',
    logo: '/partered-with-companies/og-ives-bank.jpg',
    headline: 'Ives Bank relies on Arden to',
    highlightedText: 'secure their infrastructure, streamline support, and maintain high-performing IT systems across their growing financial network.',
    stats: [
      { value: '35%', label: 'Reduction in support overhead' },
      { value: '1000+', label: 'Users protected & supported' },
    ],
    services: ['Managed IT Services', 'Network Monitoring'],
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=800&auto=format&fit=crop',
    link: '/resources/client-success',
  },
  {
    id: 4,
    companyName: 'Middlesex College',
    logo: '/partered-with-companies/mcc.webp',
    headline: 'Middlesex College enhances campus technology and student experiences with',
    highlightedText: "Arden's reliable IT and AV solutions.",
    stats: [
      { value: '13,000+', label: 'Students served annually' },
      { value: '100+', label: 'Classrooms & labs supported' },
    ],
    services: ['Managed IT', 'AV Support & Integration'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop',
    link: '/resources/client-success',
  },
]

const SLIDE_DURATION = 5000

export default function FeaturedStories() {
  const [currentStory, setCurrentStory] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  // Reset progress whenever story changes
  useEffect(() => {
    setProgress(0)
  }, [currentStory])

  const goToStory = useCallback((index: number) => {
    setCurrentStory(index)
    setProgress(0)
  }, [])

  // Auto-advance with progress
  useEffect(() => {
    if (!isAutoPlaying) {
      return
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (SLIDE_DURATION / 50))
        if (newProgress >= 100) {
          setCurrentStory((current) => {
            const nextStory = (current + 1) % stories.length
            return nextStory
          })
          return 0
        }
        return newProgress
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleTabClick = (index: number) => {
    setIsAutoPlaying(false)
    goToStory(index)
    // Restart auto-play after a short delay
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 100)
  }

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12 md:mb-16 text-center">
          Partnered with companies nationwide
        </h2>

        {/* Company Logo Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12 md:mb-16">
          {stories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => handleTabClick(index)}
              className={cn(
                'relative py-5 px-4 flex items-center justify-center transition-all duration-300'
              )}
            >
              <div className={cn(
                'relative w-full h-12 md:h-16 transition-all duration-300',
                index === currentStory 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-50 scale-95 grayscale hover:opacity-70 hover:scale-100'
              )}>
                <Image
                  src={story.logo}
                  alt={story.companyName}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              
              {/* Progress indicator for active tab */}
              {index === currentStory && (
                <div 
                  className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Story Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={cn(
                  'absolute inset-0 transition-all duration-700 ease-out',
                  index === currentStory 
                    ? 'opacity-100 scale-100 translate-x-0' 
                    : index < currentStory 
                      ? 'opacity-0 scale-105 -translate-x-8' 
                      : 'opacity-0 scale-105 translate-x-8'
                )}
              >
                <Image
                  src={story.image}
                  alt={`${story.companyName}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                  quality={75}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                {/* CTA Button - Bottom Right */}
                {/* {index === currentStory && (
                  <div className="absolute bottom-4 right-4 z-10">
                    <Link
                      href={story.link}
                      className="group inline-flex items-center justify-between gap-3 px-6 py-3 bg-primary/90 backdrop-blur-sm text-primary-foreground hover:bg-primary transition-all duration-300 rounded-md shadow-lg"
                    >
                      <span className="font-medium">See all customer stories</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                )} */}
              </div>
            ))}
          </div>

          {/* Content Side */}
          <div className="relative min-h-[300px]">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={cn(
                  'transition-all duration-500 ease-out',
                  index === currentStory 
                    ? 'opacity-100 translate-y-0 relative' 
                    : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                )}
              >
                {/* Headline */}
                <h3 className="text-xl md:text-2xl lg:text-3xl text-foreground leading-snug mb-8">
                  <span className="italic">{story.headline}</span>{' '}
                  <span className="font-semibold">{story.highlightedText}</span>
                </h3>
                
                {/* Stats Grid */}
                <div className="flex gap-8 md:gap-12 mb-8">
                  {story.stats.map((stat, statIndex) => (
                    <div key={statIndex}>
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-border my-6" />

                {/* Services Used */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium text-foreground">Services used:</span>
                  {story.services.map((service, serviceIndex) => (
                    <span 
                      key={serviceIndex}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground bg-background"
                    >
                      <span className="size-1.5 rounded-full bg-primary" />
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 lg:hidden">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={cn(
                'size-2 rounded-full transition-all duration-300',
                index === currentStory 
                  ? 'bg-primary w-6' 
                  : 'bg-border hover:bg-muted-foreground/40'
              )}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
