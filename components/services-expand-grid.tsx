"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Cpu, Phone, Network, MonitorPlay, Camera, ShieldCheck, ArrowRight } from "lucide-react"

interface ServiceSquare {
  id: string
  name: string
  href: string
  description: string
  icon: React.ReactNode
  bgImage: string
}

const services: ServiceSquare[] = [
  {
    id: "msp",
    name: "Managed IT",
    href: "/services/msp-managed-it",
    description: "24/7 monitoring, proactive maintenance, and expert support for your entire IT infrastructure.",
    icon: <Cpu className="size-8 md:size-12" strokeWidth={1.5} />,
    bgImage: "/services/msp-ip.jpeg",
  },
  {
    id: "voip",
    name: "VoIP",
    href: "/services/voip",
    description: "Crystal-clear voice communication with flexible cloud-based phone systems.",
    icon: <Phone className="size-8 md:size-12" strokeWidth={1.5} />,
    bgImage: "/services/voip.jpeg",
  },
  {
    id: "network",
    name: "Network & Cabling",
    href: "/services/network-cabling",
    description: "Structured cabling and robust network infrastructure built for reliability.",
    icon: <Network className="size-8 md:size-12" strokeWidth={1.5} />,
    bgImage: "/services/network-and-cabling.jpeg",
  },
  {
    id: "av",
    name: "Audio & Visual",
    href: "/services/audio-visual",
    description: "Professional AV systems for conference rooms, presentations, and digital signage.",
    icon: <MonitorPlay className="size-8 md:size-12" strokeWidth={1.5} />,
    bgImage: "/services/audio-visual.jpeg",
  },
  {
    id: "security",
    name: "Camera & Security",
    href: "/services/camera-access-security",
    description: "Advanced surveillance and access control to protect your premises.",
    icon: <Camera className="size-8 md:size-12" strokeWidth={1.5} />,
    bgImage: "/services/camera-access.jpeg",
  },
  {
    id: "cyber",
    name: "Cyber Security",
    href: "/services/cybersecurity",
    description: "Multi-layered protection against evolving cyber threats and vulnerabilities.",
    icon: <ShieldCheck className="size-8 md:size-12" strokeWidth={1.5} />,
    bgImage: "/services/cybersecurity.jpeg",
  },
]

interface ServicesExpandGridProps {
  fullScreen?: boolean
}

export default function ServicesExpandGrid({ fullScreen = true }: ServicesExpandGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="relative w-full overflow-hidden">
      {/* Vertical rectangular grid */}
      <div 
        className={`relative w-full ${fullScreen ? 'min-h-screen py-12 md:py-16' : 'py-8 md:py-12'}`}
        onMouseLeave={() => setHoveredId(null)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service) => {
              const isHovered = hoveredId === service.id
              const hasHover = hoveredId !== null

              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className={`
                    relative flex flex-col justify-end text-white overflow-hidden 
                    transition-all duration-500 ease-out group cursor-pointer
                    rounded-lg aspect-[4/5] md:aspect-[3/4]
                    ${isHovered ? 'scale-105 shadow-2xl z-20' : hasHover ? 'opacity-60 scale-95' : 'opacity-100'}
                  `}
                  style={{
                    zIndex: isHovered ? 20 : hasHover ? 10 : 1,
                  }}
                  onMouseEnter={() => setHoveredId(service.id)}
                >
                  {/* Background Image - no skew, clean rectangular */}
                  <div className="absolute inset-0 transition-transform duration-700 overflow-hidden">
                    <Image
                      src={service.bgImage}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`
                        object-cover object-center transition-transform duration-700
                        ${isHovered ? 'scale-110' : 'scale-100'}
                      `}
                      quality={90}
                      priority={false}
                    />
                  </div>
                  
                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Animated overlay on hover */}
                  <div 
                    className={`
                      absolute inset-0 transition-opacity duration-500
                      bg-gradient-to-br from-white/10 via-transparent to-transparent
                      ${isHovered ? "opacity-100" : "opacity-0"}
                    `}
                  />

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col h-full justify-end p-6 md:p-8">

                    {/* Title - always visible */}
                    <h3 className="font-bold text-white text-xl md:text-2xl lg:text-3xl mb-3 leading-tight">
                      {service.name}
                    </h3>

                    {/* Description - visible on hover */}
                    <p 
                      className={`
                        text-white/90 text-sm md:text-base leading-relaxed
                        transition-all duration-300 overflow-hidden
                        ${isHovered ? "opacity-100 max-h-32" : "opacity-0 max-h-0"}
                      `}
                      style={{ 
                        marginBottom: isHovered ? '1rem' : 0 
                      }}
                    >
                      {service.description}
                    </p>

                    {/* CTA - visible on hover */}
                    <div 
                      className={`
                        inline-flex items-center gap-2 text-sm font-semibold
                        bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-full
                        transition-all duration-300
                        hover:bg-white/30
                        ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
                      `}
                    >
                      <span>Explore</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Border highlight on hover */}
                  <div 
                    className={`
                      absolute inset-0 rounded-lg border-2 border-white/30
                      transition-opacity duration-300 pointer-events-none
                      ${isHovered ? "opacity-100" : "opacity-0"}
                    `}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

