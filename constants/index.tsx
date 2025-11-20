import { Cpu, Phone, Network, MonitorPlay, Camera, ShieldCheck, Building2, Heart, ShoppingBag, GraduationCap, Factory, Briefcase, BookOpen, FileText, Users, Newspaper, KeyRound, HelpCircle, Activity } from 'lucide-react'
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

export interface Industry {
    name: string
    href: string
    description: string
    icon: React.ReactElement
}

export const INDUSTRIES: Industry[] = [
    {
        name: 'Healthcare',
        href: '/industries#healthcare',
        description: 'HIPAA-compliant IT solutions for medical practices and hospitals.',
        icon: <Heart className="stroke-foreground fill-red-500/15" />,
    },
    {
        name: 'Retail',
        href: '/industries#retail',
        description: 'Point-of-sale systems and inventory management solutions.',
        icon: <ShoppingBag className="stroke-foreground fill-blue-500/15" />,
    },
    {
        name: 'Education',
        href: '/industries#education',
        description: 'Technology infrastructure for schools and educational institutions.',
        icon: <GraduationCap className="stroke-foreground fill-green-500/15" />,
    },
    {
        name: 'Manufacturing',
        href: '/industries#manufacturing',
        description: 'Industrial automation and production line IT systems.',
        icon: <Factory className="stroke-foreground fill-orange-500/15" />,
    },
    {
        name: 'Finance',
        href: '/industries#finance',
        description: 'Secure banking and financial technology solutions.',
        icon: <Building2 className="stroke-foreground fill-purple-500/15" />,
    },
    {
        name: 'Professional Services',
        href: '/industries#professional-services',
        description: 'IT support for law firms, accounting, and consulting businesses.',
        icon: <Briefcase className="stroke-foreground fill-indigo-500/15" />,
    },
]

export interface Resource {
    name: string
    href: string
    description: string
    icon: React.ReactElement
}

export const RESOURCES: Resource[] = [
    {
        name: 'Client Success',
        href: '/resources/client-success',
        description: 'Dedicated support and resources for our valued clients.',
        icon: <BookOpen className="stroke-foreground fill-blue-500/15" />,
    },
    {
        name: 'Documents',
        href: '/documents',
        description: 'Access technical documentation and guides.',
        icon: <FileText className="stroke-foreground fill-green-500/15" />,
    },
    {
        name: 'Client Portals',
        href: '/client-portals',
        description: 'Access your remote services, IT portal, and VoIP portal.',
        icon: <KeyRound className="stroke-foreground fill-indigo-500/15" />,
    },
    {
        name: 'Blog',
        href: '/blog',
        description: 'Latest news, insights, and updates from our team.',
        icon: <Newspaper className="stroke-foreground fill-purple-500/15" />,
    },
    {
        name: 'FAQs',
        href: '/faqs',
        description: 'Find answers to frequently asked questions.',
        icon: <HelpCircle className="stroke-foreground fill-yellow-500/15" />,
    },
    {
        name: 'Who we are',
        href: '/about',
        description: 'Learn about our company, mission, and values.',
        icon: <Users className="stroke-foreground fill-orange-500/15" />,
    },
]

export interface ServiceFeature {
    title: string
    description: string
    icon: React.ReactElement
}

export interface ServiceContent {
    title: string
    subtitle: string
    description: string
    ctaText: string
    ctaLink: string
    features: ServiceFeature[]
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
    'msp-managed-it': {
        title: 'MSP Managed IT',
        subtitle: 'Complete IT Infrastructure Management',
        description: 'Let us handle your technology so you can focus on growing your business. Our comprehensive managed IT services provide 24/7 monitoring, proactive maintenance, and expert support to keep your systems running smoothly and securely.',
        ctaText: 'Get Started',
        ctaLink: '#contact',
        features: [
            {
                title: '24/7 Monitoring',
                description: 'Round-the-clock system monitoring to detect and prevent issues before they impact your business.',
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Server Management',
                description: 'Expert management of on-premise and cloud servers with regular maintenance and updates.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Cloud Solutions',
                description: 'Seamless cloud migration and management to enhance flexibility and scalability.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Security & Compliance',
                description: 'Ensuring your IT infrastructure meets industry standards and regulatory requirements.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
        ],
    },
    'voip': {
        title: 'VoIP Solutions',
        subtitle: 'Modern Voice Communication',
        description: 'Transform your business communications with our advanced VoIP solutions. Experience crystal-clear call quality, flexible features, and significant cost savings while staying connected from anywhere.',
        ctaText: 'Request Demo',
        ctaLink: '#contact',
        features: [
            {
                title: 'Cloud PBX',
                description: 'Flexible cloud-based phone systems that scale with your business needs.',
                icon: <Phone className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Mobile Integration',
                description: 'Take your business line anywhere with seamless mobile device integration.',
                icon: <Phone className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Call Analytics',
                description: 'Comprehensive insights into call volume, duration, and performance metrics.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'HD Voice Quality',
                description: 'Crystal-clear audio quality for professional and reliable communication.',
                icon: <Phone className="stroke-foreground fill-foreground/10" />,
            },
        ],
    },
    'network-cabling': {
        title: 'Network & Cabling',
        subtitle: 'Reliable Infrastructure Foundation',
        description: 'Build a solid foundation for your technology with our professional network and cabling services. We design and install structured cabling systems that support your current needs and future growth.',
        ctaText: 'Schedule Consultation',
        ctaLink: '#contact',
        features: [
            {
                title: 'Structured Cabling',
                description: 'Organized, efficient cabling infrastructure that simplifies maintenance and upgrades.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Fiber Optics',
                description: 'High-speed fiber optic installation for maximum bandwidth and reliability.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Wi-Fi Solutions',
                description: 'Enterprise-grade wireless networks with seamless coverage and security.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Network Design',
                description: 'Custom network architecture tailored to your business requirements.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
        ],
    },
    'audio-visual': {
        title: 'Audio & Visual Solutions',
        subtitle: 'Immersive AV Experiences',
        description: 'Create impactful presentations and meetings with our professional audio-visual solutions. From conference rooms to auditoriums, we deliver integrated systems that enhance communication and collaboration.',
        ctaText: 'Explore Solutions',
        ctaLink: '#contact',
        features: [
            {
                title: 'Conference Rooms',
                description: 'State-of-the-art video conferencing systems for productive remote meetings.',
                icon: <MonitorPlay className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Digital Signage',
                description: 'Dynamic displays for branding, wayfinding, and information distribution.',
                icon: <MonitorPlay className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Audio Systems',
                description: 'High-fidelity sound systems designed for clarity in any environment.',
                icon: <MonitorPlay className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Control Systems',
                description: 'Integrated automation for lighting, shades, and AV equipment management.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
        ],
    },
    'camera-access-security': {
        title: 'Camera Access & Security',
        subtitle: 'Comprehensive Security Solutions',
        description: 'Protect your people, property, and assets with our advanced security systems. Our integrated camera and access control solutions provide 24/7 surveillance and secure entry management.',
        ctaText: 'Get Quote',
        ctaLink: '#contact',
        features: [
            {
                title: 'CCTV Surveillance',
                description: 'High-definition cameras with advanced analytics for complete monitoring coverage.',
                icon: <Camera className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Access Control',
                description: 'Keycard, biometric, and mobile-based entry systems for secure access management.',
                icon: <Camera className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Remote Monitoring',
                description: 'View and manage your security systems from anywhere with cloud-based access.',
                icon: <Camera className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Visitor Management',
                description: 'Track and manage guests with automated check-in and notification systems.',
                icon: <Camera className="stroke-foreground fill-foreground/10" />,
            },
        ],
    },
    'cybersecurity': {
        title: 'Cyber Security',
        subtitle: 'Advanced Threat Protection',
        description: 'Safeguard your digital assets with our comprehensive cybersecurity solutions. We provide multi-layered protection against evolving threats while ensuring compliance and business continuity.',
        ctaText: 'Security Assessment',
        ctaLink: '#contact',
        features: [
            {
                title: 'Threat Detection',
                description: 'Real-time monitoring and identification of security threats before they cause damage.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Firewall Management',
                description: 'Robust network defense with next-generation firewall technology and monitoring.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Security Audits',
                description: 'Comprehensive assessment of your security posture with actionable recommendations.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Employee Training',
                description: 'Security awareness programs to educate your team on best practices and threat prevention.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
        ],
    },
}

