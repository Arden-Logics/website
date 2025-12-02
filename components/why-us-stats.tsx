'use client'

import React from 'react'

const stats = [
  {
    value: '15+',
    label: 'Years of experience',
  },
  {
    value: '500+',
    label: 'Clients served',
  },
  {
    value: '99.9%',
    label: 'Uptime guarantee',
  },
  {
    value: '24/7',
    label: 'Support availability',
  },
  {
    value: '10,000+',
    label: 'Endpoints managed',
  },
]

export default function WhyUsStats() {
  return (
    <section aria-label="Why choose Arden Logic" className="relative py-20 md:py-28 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-50/60" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.15) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)`,
        }}
      />

      <div className="relative w-full px-8 sm:px-12 lg:px-24 xl:px-32">
        {/* Content - Single Column Layout */}
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-800/80 mb-4 block">
            Proven Reliability & Scale
          </span>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] mb-6">
            The trusted partner in{' '}
            <span className="block sm:inline">IT solutions</span>
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-12">
            Arden Logic delivers{' '}
            <span className="text-foreground underline decoration-primary/40 decoration-2 underline-offset-4">
              enterprise-grade IT solutions
            </span>{' '}
            for organizations of all sizes. From startups to established enterprises, businesses across industries rely on Arden Logic to stay connected, secure, and efficient—from anywhere.
          </p>

          {/* Stats Grid - Below Content */}
          <div>
            {/* Top Row - 3 Stats */}
            <div className="grid grid-cols-3 gap-0 border-l border-amber-900/10 mb-0">
              {stats.slice(0, 3).map((stat, index) => (
                <div 
                  key={index}
                  className="border-r border-amber-900/10 px-4 md:px-6 py-4"
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Horizontal Divider */}
            <div className="border-t border-amber-900/10" />

            {/* Bottom Row - 2 Stats */}
            <div className="grid grid-cols-2 gap-0 border-l border-amber-900/10">
              {stats.slice(3, 5).map((stat, index) => (
                <div 
                  key={index}
                  className="border-r border-amber-900/10 px-4 md:px-6 py-4"
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

