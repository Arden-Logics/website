import { Cpu, Phone, Network, MonitorPlay, Camera, ShieldCheck } from 'lucide-react'
import React from 'react'

export interface Service {
    name: string
    href: string
    description: string
    icon: React.ReactElement
}

export const SERVICES: Service[] = [
    {
        name: 'MSP Managed IT',
        href: '/services/msp-managed-it',
        description: 'Comprehensive IT management and support for your business.',
        icon: <Cpu className="stroke-foreground fill-blue-500/15" />,
    },
    {
        name: 'VoIP',
        href: '/services/voip',
        description: 'Reliable and clear Voice over IP communication solutions.',
        icon: <Phone className="stroke-foreground fill-green-500/15" />,
    },
    {
        name: 'Network & Cabling',
        href: '/services/network-cabling',
        description: 'Structured cabling and robust network infrastructure setup.',
        icon: <Network className="stroke-foreground fill-orange-500/15" />,
    },
    {
        name: 'Audio & Visual',
        href: '/services/audio-visual',
        description: 'Professional audio and visual systems for any environment.',
        icon: <MonitorPlay className="stroke-foreground fill-purple-500/15" />,
    },
    {
        name: 'Camera Access & Security',
        href: '/services/camera-access-security',
        description: 'Advanced surveillance cameras and access control systems.',
        icon: <Camera className="stroke-foreground fill-red-500/15" />,
    },
    {
        name: 'Cyber Security',
        href: '/services/cybersecurity',
        description: 'Protect your digital assets with top-tier security measures.',
        icon: <ShieldCheck className="stroke-foreground fill-indigo-500/15" />,
    },
]

