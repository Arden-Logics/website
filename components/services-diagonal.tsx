'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Cpu, Phone, Network, MonitorPlay, Camera, ShieldCheck, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceItem {
  name: string
  href: string
  description: string
  icon: React.ReactNode
  color: string
  bgGradient: string
  imageSrc: string
  features: string[]
}

const services: ServiceItem[] = [
  {
    name: 'MSP Managed IT',
    href: '/services/msp-managed-it',
    description: 'Comprehensive IT management and support for your business. Let us handle your technology so you can focus on growing your business.',
    icon: <Cpu className="size-6" />,
    color: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
    imageSrc: '/arden-logo.png',
    features: ['24/7 Monitoring', 'Cloud Solutions', 'IT Support', 'Data Backup'],
  },
  {
    name: 'VoIP',
    href: '/services/voip',
    description: 'Reliable and crystal-clear Voice over IP communication solutions. Transform your business communications with modern technology.',
    icon: <Phone className="size-6" />,
    color: 'from-emerald-500 to-emerald-600',
    bgGradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    imageSrc: '/arden-logo.png',
    features: ['Cloud PBX', 'HD Voice', 'Mobile Integration', 'Call Analytics'],
  },
  {
    name: 'Network & Cabling',
    href: '/services/network-cabling',
    description: 'Structured cabling and robust network infrastructure setup. Build a solid foundation for your technology ecosystem.',
    icon: <Network className="size-6" />,
    color: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-500/10 via-orange-500/5 to-transparent',
    imageSrc: '/arden-logo.png',
    features: ['Structured Cabling', 'Fiber Optics', 'Wi-Fi Solutions', 'Network Design'],
  },
  {
    name: 'Audio & Visual',
    href: '/services/audio-visual',
    description: 'Professional audio and visual systems for any environment. Create impactful presentations and meetings.',
    icon: <MonitorPlay className="size-6" />,
    color: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
    imageSrc: '/arden-logo.png',
    features: ['Conference Rooms', 'Digital Signage', 'Audio Systems', 'Control Systems'],
  },
  {
    name: 'Camera & Security',
    href: '/services/camera-access-security',
    description: 'Advanced surveillance cameras and access control systems. Protect your people, property, and assets around the clock.',
    icon: <Camera className="size-6" />,
    color: 'from-rose-500 to-rose-600',
    bgGradient: 'from-rose-500/10 via-rose-500/5 to-transparent',
    imageSrc: '/arden-logo.png',
    features: ['CCTV Surveillance', 'Access Control', 'Remote Monitoring', 'Visitor Management'],
  },
  {
    name: 'Cyber Security',
    href: '/services/cybersecurity',
    description: 'Protect your digital assets with top-tier security measures. Multi-layered protection against evolving threats.',
    icon: <ShieldCheck className="size-6" />,
    color: 'from-indigo-500 to-indigo-600',
    bgGradient: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
    imageSrc: '/arden-logo.png',
    features: ['Threat Detection', 'Firewall Management', 'Security Audits', 'Employee Training'],
  },
]

export default function ServicesDiagonal() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = services[activeIndex]

  return (
    <section className="py-24 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technology Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive IT services designed to transform and protect your business
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start min-h-[600px]">
          {/* Left Side - Diagonal Service List */}
          <div className="relative flex flex-col gap-2 lg:max-w-lg">
            {services.map((service, index) => (
              <button
                key={service.name}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'group relative w-full text-left transition-all duration-500 ease-out',
                  'transform-gpu hover:translate-x-4',
                  activeIndex === index ? 'translate-x-4' : ''
                )}
              >
                {/* Diagonal Rectangle */}
                <div
                  className={cn(
                    'relative overflow-hidden rounded-lg py-5 px-6 transition-all duration-500',
                    'before:absolute before:inset-0 before:-skew-x-12 before:transition-all before:duration-500',
                    activeIndex === index
                      ? `before:bg-gradient-to-r ${service.color} before:opacity-100 shadow-lg shadow-foreground/5`
                      : 'before:bg-muted/50 before:opacity-100 hover:before:bg-muted'
                  )}
                  style={{
                    clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)',
                  }}
                >
                  <div className="relative z-10 flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className={cn(
                        'flex items-center justify-center size-12 rounded-lg transition-all duration-500 -skew-x-12',
                        activeIndex === index
                          ? 'bg-white/20 text-white'
                          : 'bg-background text-foreground'
                      )}
                    >
                      <div className="skew-x-12">{service.icon}</div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={cn(
                          'font-semibold text-lg transition-colors duration-500',
                          activeIndex === index ? 'text-white' : 'text-foreground'
                        )}
                      >
                        {service.name}
                      </h3>
                      <p
                        className={cn(
                          'text-sm truncate transition-colors duration-500',
                          activeIndex === index ? 'text-white/80' : 'text-muted-foreground'
                        )}
                      >
                        {service.features.slice(0, 2).join(' • ')}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className={cn(
                        'flex items-center justify-center size-8 rounded-full transition-all duration-500',
                        activeIndex === index
                          ? 'bg-white/20 text-white translate-x-0 opacity-100'
                          : 'bg-transparent text-foreground -translate-x-2 opacity-0'
                      )}
                    >
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </div>

                {/* Active indicator line */}
                <div
                  className={cn(
                    'absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full transition-all duration-500',
                    `bg-gradient-to-b ${service.color}`,
                    activeIndex === index ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                  )}
                />
              </button>
            ))}
          </div>

          {/* Right Side - Service Details */}
          <div className="relative lg:pl-8">
            {/* Background gradient */}
            <div
              className={cn(
                'absolute inset-0 rounded-3xl transition-all duration-700 opacity-50',
                `bg-gradient-to-br ${activeService.bgGradient}`
              )}
            />

            {/* Content Card */}
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-10 shadow-xl">
              {/* Service Icon & Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={cn(
                    'flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br text-white shadow-lg',
                    activeService.color
                  )}
                >
                  {activeService.icon}
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Service
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    {activeService.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {activeService.description}
              </p>

              {/* Image Placeholder */}
              <div className="relative mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 aspect-video">
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-20',
                    activeService.color
                  )}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className={cn(
                        'mx-auto mb-4 flex items-center justify-center size-20 rounded-full bg-gradient-to-br text-white/80',
                        activeService.color
                      )}
                    >
                      {React.cloneElement(activeService.icon as React.ReactElement, {
                        className: 'size-10',
                      })}
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">
                      {activeService.name} Solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {activeService.features.map((feature, idx) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div
                      className={cn(
                        'size-2 rounded-full bg-gradient-to-r',
                        activeService.color
                      )}
                    />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={activeService.href}
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white',
                  'bg-gradient-to-r shadow-lg transition-all duration-300',
                  'hover:shadow-xl hover:scale-105 active:scale-100',
                  activeService.color
                )}
              >
                Learn More
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

