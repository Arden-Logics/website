'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X, Check, Target, Wrench, Rocket, TrendingUp, ShieldAlert, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SERVICE_CONTENT } from '@/constants'

const defaultPainPoints = [
  'Unpredictable billing',
  'Unfriendly technicians',
  'Not focused on mutual success',
  'Lack of comprehensive expertise',
]

const defaultBenefits = [
  'A partner focused on mutual success',
  'Great people with deep experience',
  'Unlimited service and 24/7 US-based support',
  'Predictable, all-inclusive pricing',
  'A 3-year technology roadmap',
  'A cybersecurity service guarantee',
]

const defaultFrameworkSteps = [
  {
    number: '1',
    title: 'Envision & Align',
    description: 'We work with you to define your goals, understand your challenges, and map out the technology strategy that best supports your business.',
    icon: Target,
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '2',
    title: 'Build & Prepare',
    description: 'Our team prepares your systems, configures infrastructure, and coordinates the details so everything is ready for a smooth, disruption-free rollout.',
    icon: Wrench,
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '3',
    title: 'Launch & Refine',
    description: 'We deploy and validate your environment, fine-tune performance, and transition your team into fully supported operations.',
    icon: Rocket,
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '4',
    title: 'Optimize & Grow',
    description: 'Technology evolves and so do your needs. We provide ongoing support, consulting, and strategic guidance to help your business scale securely and efficiently.',
    icon: TrendingUp,
    color: 'from-blue-500 to-blue-600',
  },
]

const stepIcons = [Target, Wrench, Rocket, TrendingUp]

// Floating stat card component
function StatCard({ 
  label, 
  value, 
  className 
}: { 
  label: string
  value: string | number
  className?: string 
}) {
  return (
    <div className={cn(
      'absolute bg-white rounded-xl shadow-xl border border-border/50 px-4 py-3 backdrop-blur-sm',
      'animate-float',
      className
    )}>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">{label}</div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
    </div>
  )
}

interface WhyArdenSectionProps {
  serviceKey?: string
}

export default function WhyArdenSection({ serviceKey }: WhyArdenSectionProps) {
  // Get service-specific content if available
  const serviceContent = serviceKey ? SERVICE_CONTENT[serviceKey] : null
  const whyArdenContent = serviceContent?.whyArdenContent

  // Use service-specific content or defaults
  const problemTitle = whyArdenContent?.problemTitle || 'Working with technology should be simple.'
  const problemSubtitle = whyArdenContent?.problemSubtitle || 'Yet MSPs (managed service providers) often make it more complicated. They create headaches that should never happen.'
  const painPoints = whyArdenContent?.painPoints || defaultPainPoints
  
  const solutionTitle = whyArdenContent?.solutionTitle || 'Experience our simplicity.'
  const solutionSubtitle = whyArdenContent?.solutionSubtitle || 'Imagine if technology didn\'t keep you up at night. You would get:'
  const benefits = whyArdenContent?.benefits || defaultBenefits
  
  const differenceText = whyArdenContent?.differenceText || 'This is the Arden Difference.'
  const differenceButtonText = whyArdenContent?.differenceButtonText || 'Explore the Arden Difference'
  
  const frameworkTitle = whyArdenContent?.frameworkTitle || 'Our Proven, Flexible Framework'
  const frameworkSubtitle = whyArdenContent?.frameworkSubtitle || 'We start with structure, but we\'re ready to adapt to your needs.'
  
  // Build framework steps with icons
  const frameworkSteps = whyArdenContent?.frameworkSteps?.map((step, index) => ({
    ...step,
    icon: stepIcons[index] || Target,
    color: 'from-blue-500 to-blue-600',
  })) || defaultFrameworkSteps
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
        {/* Problem Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {problemTitle}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {problemSubtitle}
            </p>
            
            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex items-center justify-center size-6 rounded-full bg-rose-100 text-rose-600">
                    <X className="size-3.5" strokeWidth={3} />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right - Image with floating cards */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
              {/* Professional image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-slate-600" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating stat cards */}
            <StatCard
              label="Security Incidents"
              value="2"
              className="top-4 right-4 lg:-right-8"
            />
            <StatCard
              label="Threats Blocked"
              value="5,283"
              className="bottom-16 right-8 lg:-right-4"
            />
            
            {/* Code/document decoration */}
            <div className="absolute -left-6 top-1/4 bg-white rounded-lg shadow-xl border border-border/50 p-3 hidden lg:block">
              <div className="space-y-2 w-32">
                <div className="h-2 bg-muted rounded w-full" />
                <div className="h-2 bg-muted rounded w-3/4" />
                <div className="h-2 bg-muted rounded w-5/6" />
                <div className="h-2 bg-primary/20 rounded w-2/3" />
                <div className="h-2 bg-muted rounded w-4/5" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Solution Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          {/* Left - Image with floating cards */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
              {/* Professional image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-200 to-teal-200 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-300 to-teal-300" />
                </div>
              </div>
              
              {/* Decorative laptop element */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-32 bg-slate-700 rounded-t-lg shadow-xl">
                <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-primary rounded-t-md" />
              </div>
            </div>
            
            {/* Floating stat cards */}
            <StatCard
              label="Passing Tests"
              value="9"
              className="top-8 left-8 lg:-left-8"
            />
            <StatCard
              label="Vulnerable Devices"
              value="48"
              className="bottom-24 left-12 lg:-left-4"
            />
            
            {/* Completion indicator */}
            <div className="absolute -right-6 bottom-8 bg-white rounded-lg shadow-xl border border-border/50 px-4 py-3 hidden lg:flex items-center gap-2">
              <div className="size-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check className="size-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm font-medium text-foreground">All Systems Go</span>
            </div>
          </div>
          
          {/* Right - Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {solutionTitle}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {solutionSubtitle}
            </p>
            
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-6 rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="size-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-primary font-semibold mb-6">{differenceText}</p>
            
            <Button asChild size="lg" className="px-8">
              <Link href="#contact-form">
                {differenceButtonText}
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Framework Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {frameworkTitle}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {frameworkSubtitle}
          </p>
        </div>
        
        {/* Framework Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworkSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="group relative bg-card border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className={cn(
                    'inline-flex items-center justify-center size-12 rounded-xl bg-gradient-to-br text-white shadow-md',
                    step.color
                  )}>
                    <Icon className="size-6" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {step.number}. {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connector line (hidden on last item and mobile) */}
                {index < frameworkSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-border hidden lg:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
      
      {/* Float animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float:nth-child(2) {
          animation-delay: -1s;
        }
        .animate-float:nth-child(3) {
          animation-delay: -2s;
        }
      `}</style>
    </section>
  )
}

