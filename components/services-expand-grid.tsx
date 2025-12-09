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
  bgColor: string
  accentColor: string
}

const services: ServiceSquare[] = [
  {
    id: "msp",
    name: "MSP Managed IT",
    href: "/services/msp-managed-it",
    description: "24/7 monitoring, proactive maintenance, and expert support for your entire IT infrastructure.",
    icon: <Cpu className="size-10 md:size-14" strokeWidth={1.5} />,
    bgColor: "bg-primary",
    accentColor: "text-primary/70",
  },
  {
    id: "voip",
    name: "VoIP",
    href: "/services/voip",
    description: "Crystal-clear voice communication with flexible cloud-based phone systems.",
    icon: <Phone className="size-10 md:size-14" strokeWidth={1.5} />,
    bgColor: "bg-emerald-600",
    accentColor: "text-emerald-200",
  },
  {
    id: "network",
    name: "Network & Cabling",
    href: "/services/network-cabling",
    description: "Structured cabling and robust network infrastructure built for reliability.",
    icon: <Network className="size-10 md:size-14" strokeWidth={1.5} />,
    bgColor: "bg-amber-600",
    accentColor: "text-amber-200",
  },
  {
    id: "av",
    name: "Audio & Visual",
    href: "/services/audio-visual",
    description: "Professional AV systems for conference rooms, presentations, and digital signage.",
    icon: <MonitorPlay className="size-10 md:size-14" strokeWidth={1.5} />,
    bgColor: "bg-violet-600",
    accentColor: "text-violet-200",
  },
  {
    id: "security",
    name: "Camera & Security",
    href: "/services/camera-access-security",
    description: "Advanced surveillance and access control to protect your premises.",
    icon: <Camera className="size-10 md:size-14" strokeWidth={1.5} />,
    bgColor: "bg-rose-600",
    accentColor: "text-rose-200",
  },
  {
    id: "cyber",
    name: "Cyber Security",
    href: "/services/cybersecurity",
    description: "Multi-layered protection against evolving cyber threats and vulnerabilities.",
    icon: <ShieldCheck className="size-10 md:size-14" strokeWidth={1.5} />,
    bgColor: "bg-indigo-600",
    accentColor: "text-indigo-200",
  },
]

export default function ServicesExpandGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-width diagonal grid */}
      <div 
        className="relative flex h-[600px] md:h-[700px] w-full"
        onMouseLeave={() => setHoveredId(null)}
        style={{
          marginLeft: "-10%",
          marginRight: "-10%",
          width: "120%",
        }}
      >
        {services.map((service, index) => {
          const isHovered = hoveredId === service.id
          const hasHover = hoveredId !== null
          const skewAngle = -12

          return (
            <Link
              key={service.id}
              href={service.href}
              className={`
                relative flex flex-col justify-end
                ${service.bgColor}
                text-white overflow-hidden
                transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                group cursor-pointer
              `}
              style={{
                flex: isHovered 
                  ? "4" 
                  : hasHover 
                    ? "0.5" 
                    : "1",
                transform: `skewX(${skewAngle}deg)`,
                marginLeft: index === 0 ? "0" : "-3rem",
                zIndex: isHovered ? 10 : services.length - index,
              }}
              onMouseEnter={() => setHoveredId(service.id)}
            >
              {/* Inner container - counter-skew to straighten content */}
              <div 
                className="absolute inset-0 flex flex-col justify-end p-8 md:p-12"
                style={{
                  transform: `skewX(${-skewAngle}deg)`,
                  paddingLeft: "3rem",
                  paddingRight: "3rem",
                }}
              >
                {/* Background Pattern */}
                <div 
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: `linear-gradient(135deg, white 1px, transparent 1px), linear-gradient(-135deg, white 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

                {/* Animated light beam on hover */}
                <div 
                  className={`
                    absolute inset-0 transition-opacity duration-700
                    bg-gradient-to-br from-white/20 via-transparent to-transparent
                    ${isHovered ? "opacity-100" : "opacity-0"}
                  `}
                />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Icon at top */}
                  <div 
                    className={`
                      ${service.accentColor}
                      transition-all duration-700 pt-4
                      ${isHovered ? "scale-125 translate-y-0" : "scale-100"}
                    `}
                  >
                    {service.icon}
                  </div>

                  {/* Text Content at bottom */}
                  <div className="mt-auto">
                    {/* Service Number */}
                    <span 
                      className={`
                        block text-white/30 font-mono text-sm mb-2
                        transition-all duration-500
                        ${isHovered ? "opacity-100" : "opacity-0"}
                      `}
                    >
                      0{index + 1}
                    </span>

                    {/* Title */}
                    <h3 
                      className={`
                        font-bold text-white
                        transition-all duration-700 ease-out
                        ${isHovered 
                          ? "text-3xl md:text-4xl lg:text-5xl mb-4" 
                          : "text-lg md:text-xl lg:text-2xl mb-2"
                        }
                      `}
                    >
                      {service.name}
                    </h3>

                    {/* Description - visible on hover */}
                    <p 
                      className={`
                        text-white/80 text-base md:text-lg leading-relaxed max-w-md
                        transition-all duration-700 overflow-hidden
                        ${isHovered 
                          ? "opacity-100 max-h-32 mb-6" 
                          : "opacity-0 max-h-0 mb-0"
                        }
                      `}
                    >
                      {service.description}
                    </p>

                    {/* CTA - visible on hover */}
                    <div 
                      className={`
                        inline-flex items-center gap-3 text-base font-semibold
                        bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full
                        transition-all duration-700
                        hover:bg-white/20
                        ${isHovered 
                          ? "opacity-100 translate-y-0" 
                          : "opacity-0 translate-y-8 pointer-events-none"
                        }
                      `}
                    >
                      <span>Explore</span>
                      <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div 
                  className={`
                    absolute top-8 right-8 w-20 h-20
                    border-t-2 border-r-2 border-white/20
                    transition-all duration-700
                    ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                  `}
                />
              </div>

              {/* Edge highlight */}
              <div 
                className={`
                  absolute inset-y-0 right-0 w-px
                  bg-gradient-to-b from-transparent via-white/30 to-transparent
                  transition-opacity duration-500
                  ${isHovered ? "opacity-100" : "opacity-30"}
                `}
              />
            </Link>
          )
        })}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

