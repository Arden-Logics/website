'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CustomerStory {
  id: number
  companyName: string
  logo: React.ReactNode
  headline: string
  highlightedText: string
  description: string
  image: string
  link: string
}

// Placeholder logos as SVG components
const HealthcareLogo = () => (
  <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M20 10v20M10 20h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <text x="45" y="26" className="fill-current text-sm font-semibold" style={{ fontSize: '14px' }}>MedTech</text>
  </svg>
)

const EducationLogo = () => (
  <svg viewBox="0 0 160 40" fill="none" className="h-8 w-auto">
    <path d="M8 28L20 20L32 28L20 36L8 28Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <text x="42" y="26" className="fill-current text-sm font-semibold" style={{ fontSize: '14px' }}>EduFirst</text>
  </svg>
)

const FinanceLogo = () => (
  <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
    <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M6 16h28M14 8v-4M26 8v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <text x="42" y="26" className="fill-current text-sm font-bold" style={{ fontSize: '13px' }}>FIRST</text>
    <text x="42" y="36" className="fill-current text-sm font-bold" style={{ fontSize: '13px' }}>BANK</text>
  </svg>
)

const EnterpriseLogo = () => (
  <svg viewBox="0 0 180 40" fill="none" className="h-8 w-auto">
    <path d="M10 35V12L25 5L40 12V35" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
    <path d="M18 35V25h14v10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M18 20h4M28 20h4M18 15h4M28 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <text x="50" y="28" className="fill-current font-light tracking-wider" style={{ fontSize: '16px' }}>SYMPHONY</text>
  </svg>
)

const stories: CustomerStory[] = [
  {
    id: 1,
    companyName: 'MedTech Healthcare',
    logo: <HealthcareLogo />,
    headline: 'Arden Logic delivers',
    highlightedText: 'secure, HIPAA-compliant IT infrastructure',
    description: 'for MedTech Healthcare.',
    image: '/api/placeholder/600/500',
    link: '/resources/client-success',
  },
  {
    id: 2,
    companyName: 'EduFirst School District',
    logo: <EducationLogo />,
    headline: 'Managed IT drives',
    highlightedText: 'seamless digital learning and enhanced security',
    description: 'for EduFirst School District.',
    image: '/api/placeholder/600/500',
    link: '/resources/client-success',
  },
  {
    id: 3,
    companyName: 'First Bank',
    logo: <FinanceLogo />,
    headline: 'VoIP solutions enable',
    highlightedText: 'unified communications and cost savings',
    description: 'for First Bank.',
    image: '/api/placeholder/600/500',
    link: '/resources/client-success',
  },
  {
    id: 4,
    companyName: 'Symphony Enterprises',
    logo: <EnterpriseLogo />,
    headline: 'Cloud migration powers',
    highlightedText: 'scalable growth and operational efficiency',
    description: 'for Symphony Enterprises.',
    image: '/api/placeholder/600/500',
    link: '/resources/client-success',
  },
]

const SLIDE_DURATION = 5000

export default function FeaturedStories() {
  const [currentStory, setCurrentStory] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const goToStory = useCallback((index: number) => {
    setCurrentStory(index)
    setProgress(0)
  }, [])

  // Auto-advance with progress
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStory((current) => (current + 1) % stories.length)
          return 0
        }
        return prev + (100 / (SLIDE_DURATION / 50))
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentStory])

  const handleLogoClick = (index: number) => {
    setIsAutoPlaying(false)
    goToStory(index)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
        {/* Header with CTA */}
        <div className="flex items-center justify-center mb-12">
          <Link 
            href="/resources/client-success" 
            className="group inline-flex items-center gap-3 text-foreground font-medium hover:text-primary transition-colors"
          >
            <span className="text-lg">See all customer stories</span>
            <div className="flex items-center justify-center size-10 rounded-full bg-primary text-primary-foreground group-hover:scale-105 transition-transform">
              <ArrowRight className="size-5" />
            </div>
          </Link>
        </div>

        {/* Logo Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16">
          {stories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => handleLogoClick(index)}
              className={cn(
                'relative py-6 px-4 flex items-center justify-center transition-all duration-300',
                'border-b-2',
                index === currentStory 
                  ? 'border-foreground text-foreground' 
                  : 'border-border text-muted-foreground/60 hover:text-muted-foreground hover:border-muted-foreground/40'
              )}
            >
              <div className={cn(
                'transition-all duration-300',
                index === currentStory ? 'opacity-100 scale-100' : 'opacity-50 scale-95 grayscale'
              )}>
                {story.logo}
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
          <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
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
                {/* Placeholder image with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200">
                  {/* Abstract decorative pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Floating geometric shapes */}
                      <div className="absolute -top-12 -left-16 size-24 rounded-full bg-primary/10 blur-xl" />
                      <div className="absolute -bottom-8 -right-12 size-32 rounded-full bg-blue-400/10 blur-xl" />
                      
                      {/* Person silhouette placeholder */}
                      <div className="relative z-10">
                        <div className="size-40 md:size-52 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 shadow-lg flex items-center justify-center">
                          <div className="size-24 md:size-32 rounded-full bg-gradient-to-br from-slate-400 to-slate-500" />
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -right-6 top-4 size-3 rounded-full bg-primary/40" />
                      <div className="absolute -left-4 bottom-8 size-2 rounded-full bg-blue-400/40" />
                    </div>
                  </div>
                </div>
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            ))}
          </div>

          {/* Content Side */}
          <div className="relative min-h-[200px]">
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
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-snug">
                  <span className="text-primary">{story.headline}</span>{' '}
                  <span className="font-semibold">{story.highlightedText}</span>{' '}
                  <span>{story.description}</span>
                </h3>
                
                <div className="mt-8">
                  <Link 
                    href={story.link}
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
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => handleLogoClick(index)}
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

