'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Solution {
  id: string
  name: string
  headline: string
  description: string
  image: string
  link: string
  outcome: { stat: string; description: string }
}

const solutions: Solution[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    headline: 'Create smart, secure experiences for patients, staff, and partners.',
    description: 'Modernize healthcare IT infrastructure with HIPAA-compliant solutions that enhance patient care, streamline operations, and protect sensitive medical data.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    link: '/solutions',
    outcome: { stat: '42%', description: 'increase in patient satisfaction scores in supported organizations' },
  },
  {
    id: 'financial',
    name: 'Financial services',
    headline: 'Secure, compliant technology for modern financial operations.',
    description: 'Enable secure transactions, protect customer data, and meet regulatory requirements with enterprise-grade cybersecurity and network solutions.',
    image: '/solutions-home-page/financial-services.jpeg',
    link: '/solutions',
    outcome: { stat: '99.99%', description: 'uptime across branch locations' },
  },
  {
    id: 'education',
    name: 'Education',
    headline: 'Empower learning with reliable, safe technology infrastructure.',
    description: 'Create connected campuses with robust networking, secure access controls, and managed IT services that support educators and students.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    link: '/solutions',
    outcome: { stat: '35,000+', description: 'students and staff connected across campuses' },
  },
  {
    id: 'retail',
    name: 'Retail',
    headline: 'Transform retail experiences with connected, secure technology.',
    description: 'Deliver seamless omnichannel experiences with reliable POS systems, secure payment processing, and integrated surveillance solutions.',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop',
    link: '/solutions',
    outcome: { stat: '67%', description: 'reduction in IT-related downtime where deployed' },
  },
  {
    id: 'government',
    name: 'Government',
    headline: 'Mission-critical technology for public sector organizations.',
    description: 'Deploy secure, compliant IT infrastructure that supports government operations, protects citizen data, and enables digital transformation.',
    image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=800&auto=format&fit=crop',
    link: '/solutions',
    outcome: { stat: '100%', description: 'compliance with federal security standards' },
  },
]

export default function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState(solutions[0])

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 md:mb-12">
          Tailored solutions for every need
        </h2>

        {/* Solution Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveSolution(solution)}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border-2',
                activeSolution.id === solution.id
                  ? 'border-primary text-foreground bg-background shadow-sm'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 bg-background'
              )}
            >
              {solution.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  className={cn(
                    'absolute inset-0 transition-all duration-500 ease-out',
                    activeSolution.id === solution.id
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  )}
                >
                  <Image
                    src={solution.image}
                    alt={`${solution.name} solution`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                  />
                  {/* Subtle warm overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="relative min-h-[200px]">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className={cn(
                  'transition-all duration-500 ease-out',
                  activeSolution.id === solution.id
                    ? 'opacity-100 translate-y-0 relative'
                    : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                )}
              >
                {/* Headline */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-snug mb-4">
                  {solution.headline}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                  {solution.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href={solution.link}
                  className="group inline-flex items-center gap-3 text-foreground font-medium hover:text-primary transition-colors"
                >
                  <span className="text-base">Learn more</span>
                  <div className="flex items-center justify-center size-10 rounded-full bg-primary text-primary-foreground group-hover:scale-105 transition-transform">
                    <ArrowRight className="size-5" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome / Results */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-border">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={cn(
                'transition-all duration-500',
                activeSolution.id === solution.id ? 'opacity-100' : 'opacity-0 hidden'
              )}
            >
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-xl md:text-2xl font-bold text-foreground">
                  {solution.outcome.stat}
                </span>
                <span className="text-muted-foreground text-base">
                  {solution.outcome.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


