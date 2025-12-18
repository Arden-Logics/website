'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Industry {
  id: string
  name: string
  headline: string
  description: string
  image: string
  link: string
  testimonial: {
    companyName: string
    logo: React.ReactNode
    stat: string
    description: string
  }
}

// Placeholder company logos
const ChenMedLogo = () => (
  <svg viewBox="0 0 120 30" fill="none" className="h-6 w-auto">
    <path d="M8 15c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7z" stroke="#0d9488" strokeWidth="2" fill="none" />
    <path d="M15 10v10M12 15h6" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
    <text x="28" y="20" className="fill-slate-700 font-semibold" style={{ fontSize: '14px' }}>ChenMed</text>
  </svg>
)

const FirstBankLogo = () => (
  <svg viewBox="0 0 120 30" fill="none" className="h-6 w-auto">
    <rect x="4" y="6" width="18" height="18" rx="2" stroke="#1e40af" strokeWidth="2" fill="none" />
    <path d="M8 12h10M8 16h6" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" />
    <text x="28" y="20" className="fill-slate-700 font-semibold" style={{ fontSize: '14px' }}>First Bank</text>
  </svg>
)

const EduDistrictLogo = () => (
  <svg viewBox="0 0 140 30" fill="none" className="h-6 w-auto">
    <path d="M12 20L4 15l8-5 8 5-8 5z" stroke="#7c3aed" strokeWidth="2" fill="none" />
    <path d="M12 15v8" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
    <text x="26" y="20" className="fill-slate-700 font-semibold" style={{ fontSize: '14px' }}>Edu District</text>
  </svg>
)

const RetailPlusLogo = () => (
  <svg viewBox="0 0 120 30" fill="none" className="h-6 w-auto">
    <circle cx="12" cy="15" r="8" stroke="#dc2626" strokeWidth="2" fill="none" />
    <path d="M12 11v8M8 15h8" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
    <text x="26" y="20" className="fill-slate-700 font-semibold" style={{ fontSize: '14px' }}>RetailPlus</text>
  </svg>
)

const GovTechLogo = () => (
  <svg viewBox="0 0 130 30" fill="none" className="h-6 w-auto">
    <path d="M4 20V12L12 6l8 6v8" stroke="#0369a1" strokeWidth="2" fill="none" strokeLinejoin="round" />
    <path d="M8 20v-6h8v6" stroke="#0369a1" strokeWidth="1.5" fill="none" />
    <text x="26" y="20" className="fill-slate-700 font-semibold" style={{ fontSize: '14px' }}>GovTech</text>
  </svg>
)

const industries: Industry[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    headline: 'Create smart, secure experiences for patients, staff, and partners.',
    description: 'Modernize healthcare IT infrastructure with HIPAA-compliant solutions that enhance patient care, streamline operations, and protect sensitive medical data.',
    // Doctor using tablet for patient records - represents healthcare IT integration
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    link: '/industries',
    testimonial: {
      companyName: 'ChenMed',
      logo: <ChenMedLogo />,
      stat: '42%',
      description: 'increase in HCAHPS patient satisfaction',
    },
  },
  {
    id: 'financial',
    name: 'Financial services',
    headline: 'Secure, compliant technology for modern financial operations.',
    description: 'Enable secure transactions, protect customer data, and meet regulatory requirements with enterprise-grade cybersecurity and network solutions.',
    // Secure credit card payment - represents secure financial transactions and data protection
    image: '/industries-home-page/financial-services.jpeg',
    link: '/industries',
    testimonial: {
      companyName: 'First Bank',
      logo: <FirstBankLogo />,
      stat: '99.99%',
      description: 'uptime across all branch locations',
    },
  },
  {
    id: 'education',
    name: 'Education',
    headline: 'Empower learning with reliable, safe technology infrastructure.',
    description: 'Create connected campuses with robust networking, secure access controls, and managed IT services that support educators and students.',
    // Students in modern classroom with laptops - represents campus IT/EdTech
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    link: '/industries',
    testimonial: {
      companyName: 'Edu District',
      logo: <EduDistrictLogo />,
      stat: '35,000+',
      description: 'students connected across 48 schools',
    },
  },
  {
    id: 'retail',
    name: 'Retail',
    headline: 'Transform retail experiences with connected, secure technology.',
    description: 'Deliver seamless omnichannel experiences with reliable POS systems, secure payment processing, and integrated surveillance solutions.',
    // Modern retail checkout/POS - represents retail technology solutions
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop',
    link: '/industries',
    testimonial: {
      companyName: 'RetailPlus',
      logo: <RetailPlusLogo />,
      stat: '67%',
      description: 'reduction in IT-related downtime',
    },
  },
  {
    id: 'government',
    name: 'Government',
    headline: 'Mission-critical technology for public sector organizations.',
    description: 'Deploy secure, compliant IT infrastructure that supports government operations, protects citizen data, and enables digital transformation.',
    // Government building with modern architecture - represents public sector IT
    image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=800&auto=format&fit=crop',
    link: '/industries',
    testimonial: {
      companyName: 'GovTech',
      logo: <GovTechLogo />,
      stat: '100%',
      description: 'compliance with federal security standards',
    },
  },
]

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0])

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 md:mb-12">
          Solutions for every industry
        </h2>

        {/* Industry Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry)}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border-2',
                activeIndustry.id === industry.id
                  ? 'border-primary text-foreground bg-background shadow-sm'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 bg-background'
              )}
            >
              {industry.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className={cn(
                    'absolute inset-0 transition-all duration-500 ease-out',
                    activeIndustry.id === industry.id
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  )}
                >
                  <Image
                    src={industry.image}
                    alt={`${industry.name} industry`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    quality={80}
                  />
                  {/* Subtle warm overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="relative min-h-[200px]">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className={cn(
                  'transition-all duration-500 ease-out',
                  activeIndustry.id === industry.id
                    ? 'opacity-100 translate-y-0 relative'
                    : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                )}
              >
                {/* Headline */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-snug mb-4">
                  {industry.headline}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                  {industry.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href={industry.link}
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

        {/* Testimonial/Case Study */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-border">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className={cn(
                'flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 transition-all duration-500',
                activeIndustry.id === industry.id
                  ? 'opacity-100'
                  : 'opacity-0 hidden'
              )}
            >
              {/* Company Logo */}
              <div className="flex-shrink-0">
                {industry.testimonial.logo}
              </div>

              {/* Stat & Description */}
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-xl md:text-2xl font-bold text-foreground">
                  {industry.testimonial.stat}
                </span>
                <span className="text-muted-foreground text-base">
                  {industry.testimonial.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


