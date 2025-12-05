'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, CheckCircle, Zap, Download } from 'lucide-react'
import { cn } from '@/lib/utils'

const trustBadges = [
  { label: 'Free technology assessment' },
  { label: 'Custom solution roadmap' },
  { label: 'HIPAA-Ready' },
  { label: 'FERPA-Compliant' },
]

const quickStats = [
  { value: '99.9%', label: 'Uptime Across Managed Infrastructure' },
  { value: '< 15 Min', label: 'Guaranteed Response Time' },
  { value: '500+', label: 'Organizations Supported Nationwide' },
]

export default function CallToAction() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-foreground dark:bg-background">
      {/* Animated gradient orbs using design system colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative w-full px-8 sm:px-12 lg:px-24 xl:px-32">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/10">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-background/90">Ready to get started?</span>
            </div>
            
            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-[1.1]">
                Let's Build Your
                <span className="block mt-2 text-primary">
                  Technology Future, Together
                </span>
              </h2>
              <p className="text-lg md:text-xl text-background/70 max-w-xl leading-relaxed">
                Your organization deserves technology that's secure, reliable, and built to scale.
              </p>
              <p className="text-base text-background/60 max-w-xl leading-relaxed">
                Arden Logics delivers enterprise-grade IT, cybersecurity, VoIP, AV, and security solutions that help your business operate smarter, safer, and faster every single day.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/5 border border-background/10"
                >
                  <CheckCircle className="size-4 text-primary" />
                  <span className="text-sm text-background/80">{item.label}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="group px-8 py-6 text-base rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <Link href="#contact-form">
                  <span className="flex items-center gap-2">
                    Schedule a Free Consultation
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-background/5 border-background/20 text-background hover:bg-background/10 hover:border-background/30 hover:text-background px-8 py-6 text-base rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <Link href="tel:8563359895" className="flex items-center gap-2">
                  <Phone className="size-4" />
                  Call Us Now
                </Link>
              </Button>
            </div>
            
            {/* Immediate contact */}
            <p className="text-sm text-background/60">
              For immediate needs — <a href="tel:8563359895" className="text-primary hover:underline">856-335-9895</a>
            </p>
          </div>
          
          {/* Right side - Stats card */}
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-3xl scale-90" />
            
            {/* Main card */}
            <div className="relative bg-background/8 backdrop-blur-xl border border-background/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center size-12 rounded-xl bg-primary shadow-lg">
                  <Zap className="size-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-background">Why hundreds trust Arden Logics</h3>
                </div>
              </div>
              
              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {quickStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-background/5 border border-background/5"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-background mb-1">{stat.value}</div>
                    <div className="text-xs text-background/60 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Contact info */}
              <div className="space-y-4 mb-6">
                <p className="text-sm font-medium text-background/80">Prefer email?</p>
                <a 
                  href="mailto:support@ardenlogics.com"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors group"
                >
                  <div className="flex items-center justify-center size-10 rounded-lg bg-background/5 group-hover:bg-background/10 transition-colors">
                    <Mail className="size-4" />
                  </div>
                  <span className="text-sm">support@ardenlogics.com</span>
                </a>
              </div>
              
              {/* Download guide */}
              <div className="pt-6 border-t border-background/10">
                <p className="text-sm text-background/60 mb-3">Not ready to schedule yet?</p>
                <a 
                  href="#"
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group"
                >
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Download className="size-4 text-primary" />
                  </div>
                  <span className="text-sm">Download our free guide: <span className="font-medium">"2025 Business Technology Roadmap"</span></span>
                </a>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 size-24 rounded-2xl bg-primary/30 blur-xl" />
            <div className="absolute -bottom-4 -left-4 size-32 rounded-full bg-accent/20 blur-xl" />
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-background/20 to-transparent" />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={cn(
              'absolute w-1 h-1 rounded-full bg-background/30',
              'animate-float-particle'
            )}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-40px) translateX(-5px) scale(1);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-20px) translateX(-15px) scale(1.3);
            opacity: 0.5;
          }
        }
        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
