"use client"

import { useState } from "react"
import Link from "next/link"
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
    name: "MSP Managed IT",
    href: "/services/msp-managed-it",
    description: "24/7 monitoring, proactive maintenance, and expert support for your entire IT infrastructure.",
    icon: <Cpu className="size-8 md:size-12" strokeWidth={1.5} />,
    bgImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
  },
  {
    id: "voip",
    name: "VoIP",
    href: "/services/voip",
    description: "Crystal-clear voice communication with flexible cloud-based phone systems.",
    icon: <Phone className="size-8 md:size-12" strokeWidth={1.5} />,
    bgImage: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80",
  },
  {
    id: "network",
    name: "Network & Cabling",
    href: "/services/network-cabling",
    description: "Structured cabling and robust network infrastructure built for reliability.",
    icon: <Network className="size-8 md:size-12" strokeWidth={1.5} />,
    bgImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
  },
  {
    id: "av",
    name: "Audio & Visual",
    href: "/services/audio-visual",
    description: "Professional AV systems for conference rooms, presentations, and digital signage.",
    icon: <MonitorPlay className="size-8 md:size-12" strokeWidth={1.5} />,
    bgImage: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1200&q=80",
  },
  {
    id: "security",
    name: "Camera & Security",
    href: "/services/camera-access-security",
    description: "Advanced surveillance and access control to protect your premises.",
    icon: <Camera className="size-8 md:size-12" strokeWidth={1.5} />,
    bgImage: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80",
  },
  {
    id: "cyber",
    name: "Cyber Security",
    href: "/services/cybersecurity",
    description: "Multi-layered protection against evolving cyber threats and vulnerabilities.",
    icon: <ShieldCheck className="size-8 md:size-12" strokeWidth={1.5} />,
    bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
  },
]

export default function ServicesExpandGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="relative w-full overflow-hidden bg-neutral-900">
      {/* Full-width diagonal grid */}
      <div 
        className="relative flex h-[500px] md:h-[600px] w-full pb-8 -mb-8"
        onMouseLeave={() => setHoveredId(null)}
      >
        {services.map((service, index) => {
          const isHovered = hoveredId === service.id
          const hasHover = hoveredId !== null
          const skewAngle = -8

          return (
            <Link
              key={service.id}
              href={service.href}
              className="relative flex flex-col justify-end text-white overflow-hidden transition-all duration-500 ease-out group cursor-pointer"
              style={{
                flex: isHovered 
                  ? "2.5" 
                  : hasHover 
                    ? "0.7" 
                    : "1",
                transform: `skewX(${skewAngle}deg)`,
                marginLeft: index === 0 ? "-4rem" : "-2rem",
                marginRight: index === services.length - 1 ? "-4rem" : "0",
                zIndex: isHovered ? 10 : services.length - index,
              }}
              onMouseEnter={() => setHoveredId(service.id)}
            >
              {/* Background Image - extended inset to cover skew gaps at bottom */}
              <div 
                className="absolute bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: `url(${service.bgImage})`,
                  transform: `skewX(${-skewAngle}deg) scale(1.4)`,
                  inset: "-25%",
                }}
              />
              
              {/* Dark overlay for readability */}
              <div className="absolute inset-0" />

              {/* Inner container - counter-skew to straighten content */}
              <div 
                className="absolute inset-0 flex flex-col justify-end p-6 md:p-10"
                style={{
                  transform: `skewX(${-skewAngle}deg)`,
                }}
              >
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Animated light beam on hover */}
                <div 
                  className={`
                    absolute inset-0 transition-opacity duration-500
                    bg-gradient-to-br from-white/10 via-transparent to-transparent
                    ${isHovered ? "opacity-100" : "opacity-0"}
                  `}
                />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full justify-between items-center text-center px-1 md:px-2">

                  {/* Text Content at bottom */}
                  <div className="mt-auto w-full flex flex-col items-center">
                    {/* Title - always visible, centered */}
                    <h3 className="font-bold text-white text-sm md:text-lg lg:text-xl mb-2 text-center leading-tight">
                      {service.name}
                    </h3>

                    {/* Description - visible on hover */}
                    <p 
                      className={`
                        text-white/85 text-sm md:text-base leading-relaxed max-w-sm mx-auto
                        transition-opacity duration-300 overflow-hidden
                        ${isHovered ? "opacity-100" : "opacity-0 h-0"}
                      `}
                      style={{ 
                        height: isHovered ? 'auto' : 0,
                        marginBottom: isHovered ? '1rem' : 0 
                      }}
                    >
                      {service.description}
                    </p>

                    {/* CTA - visible on hover */}
                    <div 
                      className={`
                        inline-flex items-center gap-2 text-sm font-semibold
                        bg-white/15 backdrop-blur-sm px-4 py-2.5 rounded-full
                        transition-opacity duration-300
                        hover:bg-white/25
                        ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}
                      `}
                    >
                      <span>Explore</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Edge highlight */}
              <div 
                className={`
                  absolute inset-y-0 right-0 w-px
                  bg-gradient-to-b from-transparent via-white/20 to-transparent
                  transition-opacity duration-300
                  ${isHovered ? "opacity-100" : "opacity-20"}
                `}
              />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

