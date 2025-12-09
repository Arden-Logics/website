'use client'

import React from 'react'

const stats = [
  {
    value: '15+',
    label: 'Years of industry experience',
  },
  {
    value: '500+',
    label: 'Organizations supported',
  },
  {
    value: '99.9%',
    label: 'Infrastructure uptime across all managed services',
  },
  {
    value: '24/7',
    label: 'Live support and rapid response availability',
  },
  {
    value: '10,000+',
    label: 'Endpoints, users, and systems managed daily',
  },
]

export default function WhyUsStats() {
  return (
    <section 
      aria-label="Why choose Arden Logic" 
      className="relative py-20 md:py-28 overflow-hidden bg-white"
    >
      {/* Background Image - covers 70% starting from 30% */}
      <div 
        className="absolute inset-y-0 right-0 w-[70%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/background-stats.jpg)',
          left: '30%',
        }}
      />
      
      <div className="relative w-full px-8 sm:px-12 lg:px-24 xl:px-32">
        {/* Content - Single Column Layout */}
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Proven Performance & Trusted Expertise
          </span>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] mb-6">
            Your dedicated partner for modern IT, security, and communications
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-4">
            Arden Logics delivers{' '}
            <span className="text-foreground underline decoration-primary/40 decoration-2 underline-offset-4">
              enterprise-grade technology solutions
            </span>{' '}
            that help organizations operate securely, efficiently, and without interruption.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-12">
            From fast-growing startups to established enterprises, businesses across every industry rely on Arden Logics to strengthen their security posture, optimize their systems, and stay connected—from anywhere.
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

