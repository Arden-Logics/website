'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Clock, 
  Shield, 
  Headphones, 
  Award, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'

const reasons = [
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock US-based technical support when you need it most.',
    stat: '99.9%',
    statLabel: 'Uptime SLA',
    gradient: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500/20',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Multi-layered protection with cybersecurity guarantee included.',
    stat: '500K+',
    statLabel: 'Threats Blocked',
    gradient: 'from-emerald-500 to-teal-500',
    bgGlow: 'bg-emerald-500/20',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified professionals with deep industry experience.',
    stat: '15+',
    statLabel: 'Years Experience',
    gradient: 'from-violet-500 to-purple-500',
    bgGlow: 'bg-violet-500/20',
  },
  {
    icon: TrendingUp,
    title: 'Predictable Pricing',
    description: 'Transparent, all-inclusive pricing with no surprise bills.',
    stat: '100%',
    statLabel: 'Cost Clarity',
    gradient: 'from-amber-500 to-orange-500',
    bgGlow: 'bg-amber-500/20',
  },
]

const highlights = [
  'Technology roadmap included',
  'Proactive monitoring & maintenance',
  'Quick response times',
  'Scalable solutions',
  'Industry-specific expertise',
  'Single point of contact',
]

export default function ServicesWhyUs() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      
      {/* Decorative blurred orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative w-full px-8 sm:px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="size-4" />
            <span>Why Choose Arden Logic</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Technology that works{' '}
            <span className="relative">
              <span className="relative z-10 text-primary">for you</span>
              <svg 
                className="absolute -bottom-2 left-0 w-full" 
                viewBox="0 0 200 12" 
                fill="none"
              >
                <path 
                  d="M2 10C50 2 150 2 198 10" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  className="text-primary/30"
                />
              </svg>
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Partner with a team that's invested in your success, not just your monthly invoice.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Left Column - Feature Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={reason.title}
                  className={cn(
                    'group relative bg-card border border-border/50 rounded-2xl p-6 transition-all duration-500',
                    'hover:border-border hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1',
                  )}
                >
                  {/* Glow effect on hover */}
                  <div 
                    className={cn(
                      'absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-xl -z-10',
                      reason.bgGlow
                    )} 
                  />
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className={cn(
                        'flex items-center justify-center size-12 rounded-xl bg-gradient-to-br text-white shadow-lg',
                        reason.gradient
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                    
                    {/* Stat Badge */}
                    <div className="text-right">
                      <div className={cn(
                        'text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent',
                        reason.gradient
                      )}>
                        {reason.stat}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {reason.statLabel}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                  
                  {/* Decorative corner */}
                  <div 
                    className={cn(
                      'absolute bottom-0 right-0 w-16 h-16 opacity-0 transition-opacity duration-500 group-hover:opacity-10',
                      'bg-gradient-to-br rounded-tl-3xl rounded-br-2xl',
                      reason.gradient
                    )}
                  />
                </div>
              )
            })}
          </div>

          {/* Right Column - CTA Card */}
          <div className="relative">
            <div 
              className={cn(
                'sticky top-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white overflow-hidden',
                'border border-white/10'
              )}
            >
              {/* Pattern overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(135deg, white 1px, transparent 1px), linear-gradient(-135deg, white 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />
              
              {/* Gradient accents */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-medium mb-6 backdrop-blur-sm">
                  <Award className="size-3.5" />
                  <span>The Arden Difference</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  Everything included.<br />
                  <span className="text-white/70">No surprises.</span>
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-white text-slate-900 hover:bg-white/90 font-semibold"
                >
                  <Link href="#contact" className="flex items-center justify-center gap-2">
                    Get a Free Consultation
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                
                <p className="text-center text-xs text-white/50 mt-4">
                  No commitment required
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 md:mt-20 pt-12 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Businesses Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">&lt;15min</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

