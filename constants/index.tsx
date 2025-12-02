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

export interface ServiceSection {
    id: string
    navLabel?: string
    title: string
    description: string
    linkText?: string
    linkHref?: string
    imageSrc: string
    imageAlt: string
}

export interface ServiceContent {
    title: string
    subtitle: string
    description: string
    ctaText: string
    ctaLink: string
    features: ServiceFeature[]
    // New fields for redesigned layout
    heroSection?: {
        breadcrumb: string
        title: string
        description: string
        buttonText: string
        buttonLink: string
        imageSrc: string
        imageAlt: string
    }
    sections?: ServiceSection[]
}

export interface SuccessStory {
    id: string
    title: string
    company: string
    industry: string
    services: string[]
    description: string
    imageSrc: string
    imageAlt: string
    link: string
    featured: boolean
}

export const SUCCESS_STORIES: SuccessStory[] = [
    {
        id: '1',
        title: 'Healthcare Network Transformation',
        company: 'City Medical Center',
        industry: 'Healthcare',
        services: ['MSP Managed IT', 'Cyber Security', 'Network & Cabling'],
        description: 'How City Medical Center transformed their IT infrastructure to support 500+ users with HIPAA-compliant solutions, reducing downtime by 85%.',
        imageSrc: '/arden-logo.png',
        imageAlt: 'City Medical Center',
        link: '#',
        featured: true,
    },
    {
        id: '2',
        title: 'Retail Chain VoIP Deployment',
        company: 'Metro Retail Group',
        industry: 'Retail',
        services: ['VoIP', 'Network & Cabling'],
        description: 'Metro Retail Group deployed cloud-based VoIP across 50 locations, reducing communication costs by 60% while improving customer service.',
        imageSrc: '/arden-logo.png',
        imageAlt: 'Metro Retail Group',
        link: '#',
        featured: true,
    },
    {
        id: '3',
        title: 'Education Campus Security Upgrade',
        company: 'Westside Academy',
        industry: 'Education',
        services: ['Camera Access & Security', 'Network & Cabling'],
        description: 'Westside Academy enhanced campus safety with integrated surveillance and access control systems protecting 2,000+ students.',
        imageSrc: '/arden-logo.png',
        imageAlt: 'Westside Academy',
        link: '#',
        featured: false,
    },
    {
        id: '4',
        title: 'Manufacturing Floor Connectivity',
        company: 'TechFab Industries',
        industry: 'Manufacturing',
        services: ['Network & Cabling', 'MSP Managed IT'],
        description: 'TechFab Industries achieved 99.9% uptime with fiber optic infrastructure supporting industrial IoT devices and production systems.',
        imageSrc: '/arden-logo.png',
        imageAlt: 'TechFab Industries',
        link: '#',
        featured: false,
    },
    {
        id: '5',
        title: 'Financial Services Security Overhaul',
        company: 'Premier Capital Advisors',
        industry: 'Finance',
        services: ['Cyber Security', 'MSP Managed IT'],
        description: 'Premier Capital Advisors implemented multi-layered security protecting sensitive financial data and ensuring regulatory compliance.',
        imageSrc: '/arden-logo.png',
        imageAlt: 'Premier Capital Advisors',
        link: '#',
        featured: true,
    },
    {
        id: '6',
        title: 'Law Firm Collaboration Suite',
        company: 'Anderson & Partners LLP',
        industry: 'Professional Services',
        services: ['VoIP', 'Audio & Visual', 'MSP Managed IT'],
        description: 'Anderson & Partners transformed client meetings with state-of-the-art AV systems and integrated communication platforms.',
        imageSrc: '/arden-logo.png',
        imageAlt: 'Anderson & Partners',
        link: '#',
        featured: false,
    },
    {
        id: '7',
        title: 'Hospital Emergency Network',
        company: 'Memorial Regional Hospital',
        industry: 'Healthcare',
        services: ['Network & Cabling', 'MSP Managed IT', 'Cyber Security'],
        description: 'Memorial Regional Hospital deployed redundant network infrastructure ensuring 24/7 availability for critical healthcare operations.',
        imageSrc: '/arden-logo.png',
        imageAlt: 'Memorial Regional Hospital',
        link: '#',
        featured: false,
    },
    {
        id: '8',
        title: 'Restaurant Chain Digital Signage',
        company: 'Fresh Bites Restaurants',
        industry: 'Retail',
        services: ['Audio & Visual', 'Network & Cabling'],
        description: 'Fresh Bites deployed digital menu boards and kitchen display systems across 30 locations improving order accuracy.',
        imageSrc: '/arden-logo.png',
        imageAlt: 'Fresh Bites Restaurants',
        link: '#',
        featured: false,
    },
    {
        id: '9',
        title: 'University Cloud Migration',
        company: 'State University',
        industry: 'Education',
        services: ['MSP Managed IT', 'Network & Cabling'],
        description: 'State University migrated to cloud infrastructure supporting 10,000+ students with scalable, secure access to resources.',
        imageSrc: '/arden-logo.png',
        imageAlt: 'State University',
        link: '#',
        featured: true,
    },
]

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
    'msp-managed-it': {
        title: 'MSP Managed IT',
        subtitle: 'Modern IT Management for a More Reliable Business',
        description: 'Ensure uptime, productivity, and long-term stability with fully managed IT support tailored to your organization. Arden Logics delivers proactive monitoring, expert guidance, and end-to-end technology management built to keep your operations running smoothly.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Proactive Monitoring',
                description: 'We detect and resolve issues before they impact your business.',
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Fully Managed Support',
                description: 'Helpdesk, endpoint management, and infrastructure support all included.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Security-Driven Approach',
                description: 'Zero-trust principles and continuous protection baked into every service.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Strategic IT Guidance',
                description: 'Technology roadmaps and planning to align IT with your long-term goals.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / IT Management',
            title: 'Modern IT Management for a More Reliable Business',
            description: 'Ensure uptime, productivity, and long-term stability with fully managed IT support tailored to your organization. Arden Logics delivers proactive monitoring, expert guidance, and end-to-end technology management built to keep your operations running smoothly.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Modern IT management solutions',
        },
        sections: [
            {
                id: 'proactive-monitoring',
                navLabel: 'Proactive Monitoring',
                title: 'Proactive Monitoring',
                description: 'We detect and resolve issues before they impact your business.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Proactive monitoring',
            },
            {
                id: 'fully-managed-support',
                navLabel: 'Fully Managed Support',
                title: 'Fully Managed Support',
                description: 'Helpdesk, endpoint management, and infrastructure support all included.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Fully managed support',
            },
            {
                id: 'security-driven',
                navLabel: 'Security-Driven Approach',
                title: 'Security-Driven Approach',
                description: 'Zero-trust principles and continuous protection baked into every service.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Security-driven approach',
            },
            {
                id: 'strategic-guidance',
                navLabel: 'Strategic IT Guidance',
                title: 'Strategic IT Guidance',
                description: 'Technology roadmaps and planning to align IT with your long-term goals.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Strategic IT guidance',
            },
        ],
    },
    'network-cabling': {
        title: 'Network & Cabling',
        subtitle: 'Reliable Infrastructure from the Ground Up',
        description: 'Professional cabling and network design that deliver speed, stability, and long-term scalability. Arden Logics builds infrastructure designed to support new users, devices, and applications with organized cable management and future-ready planning.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Structured Cabling',
                description: 'Clean, standards-based installations for dependable performance.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'High-Speed Networking',
                description: 'Switching, routing, and wireless systems optimized for your environment.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Organized Cable Management',
                description: 'Clear labeling, documentation, and routing for future maintenance.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Built for Growth',
                description: 'Infrastructure designed to support new users, devices, and applications.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Network Infrastructure',
            title: 'Reliable Infrastructure from the Ground Up',
            description: 'Professional cabling and network design that deliver speed, stability, and long-term scalability. Arden Logics builds infrastructure designed to support new users, devices, and applications with organized cable management and future-ready planning.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Network infrastructure',
        },
        sections: [
            {
                id: 'structured-cabling',
                navLabel: 'Structured Cabling',
                title: 'Structured Cabling',
                description: 'Clean, standards-based installations for dependable performance.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Structured cabling installation',
            },
            {
                id: 'high-speed-networking',
                navLabel: 'High-Speed Networking',
                title: 'High-Speed Networking',
                description: 'Switching, routing, and wireless systems optimized for your environment.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'High-speed networking',
            },
            {
                id: 'cable-management',
                navLabel: 'Organized Cable Management',
                title: 'Organized Cable Management',
                description: 'Clear labeling, documentation, and routing for future maintenance.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Cable management',
            },
            {
                id: 'built-for-growth',
                navLabel: 'Built for Growth',
                title: 'Built for Growth',
                description: 'Infrastructure designed to support new users, devices, and applications.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Growth-ready infrastructure',
            },
        ],
    },
    'audio-visual': {
        title: 'Audio & Visual Solutions',
        subtitle: 'Professional AV Solutions for Meetings, Collaboration & Events',
        description: 'Modern displays, conferencing systems, and audio engineering that elevate communication. Arden Logics delivers seamless integrations with Zoom, Teams, Webex, and hybrid setups with crystal-clear microphones and speakers optimized for every room size.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Commercial Display Systems',
                description: 'High-quality screens for conference rooms, signage, and training spaces.',
                icon: <MonitorPlay className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Conference Room Audio',
                description: 'Crystal-clear microphones and speakers optimized for every room size.',
                icon: <MonitorPlay className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Video Conferencing',
                description: 'Seamless integrations with Zoom, Teams, Webex, and hybrid setups.',
                icon: <MonitorPlay className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Installation & Integration',
                description: 'Clean, professional installs configured to your exact space and workflow.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Audio Visual',
            title: 'Professional AV Solutions for Meetings, Collaboration & Events',
            description: 'Modern displays, conferencing systems, and audio engineering that elevate communication. Arden Logics delivers seamless integrations with Zoom, Teams, Webex, and hybrid setups with crystal-clear microphones and speakers optimized for every room size.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Professional AV setup',
        },
        sections: [
            {
                id: 'commercial-displays',
                navLabel: 'Commercial Display Systems',
                title: 'Commercial Display Systems',
                description: 'High-quality screens for conference rooms, signage, and training spaces.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Commercial display systems',
            },
            {
                id: 'conference-audio',
                navLabel: 'Conference Room Audio',
                title: 'Conference Room Audio',
                description: 'Crystal-clear microphones and speakers optimized for every room size.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Conference room audio',
            },
            {
                id: 'video-conferencing',
                navLabel: 'Video Conferencing',
                title: 'Video Conferencing',
                description: 'Seamless integrations with Zoom, Teams, Webex, and hybrid setups.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Video conferencing',
            },
            {
                id: 'installation',
                navLabel: 'Installation & Integration',
                title: 'Installation & Integration',
                description: 'Clean, professional installs configured to your exact space and workflow.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'AV installation',
            },
        ],
    },
    'camera-access-security': {
        title: 'Camera Access & Security',
        subtitle: 'Modern Physical Security to Protect Your People & Property',
        description: 'Advanced surveillance, access control, and monitoring systems for real-time visibility and protection. Arden Logics delivers cloud and remote monitoring accessible from anywhere, with secure and compliant storage with encrypted retention.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'High-Definition Surveillance',
                description: 'Clear, reliable video capture for any location or lighting condition.',
                icon: <Camera className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Access Control Systems',
                description: 'Manage doors, credentials, and permissions with precision.',
                icon: <Camera className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Cloud & Remote Monitoring',
                description: 'View cameras and logs from anywhere, on any device.',
                icon: <Camera className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Secure, Compliant Storage',
                description: 'Encrypted retention and audit-ready security logging.',
                icon: <Camera className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Physical Security',
            title: 'Modern Physical Security to Protect Your People & Property',
            description: 'Advanced surveillance, access control, and monitoring systems for real-time visibility and protection. Arden Logics delivers cloud and remote monitoring accessible from anywhere, with secure and compliant storage with encrypted retention.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Security camera system',
        },
        sections: [
            {
                id: 'hd-surveillance',
                navLabel: 'High-Definition Surveillance',
                title: 'High-Definition Surveillance',
                description: 'Clear, reliable video capture for any location or lighting condition.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'HD surveillance',
            },
            {
                id: 'access-control',
                navLabel: 'Access Control Systems',
                title: 'Access Control Systems',
                description: 'Manage doors, credentials, and permissions with precision.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Access control systems',
            },
            {
                id: 'remote-monitoring',
                navLabel: 'Cloud & Remote Monitoring',
                title: 'Cloud & Remote Monitoring',
                description: 'View cameras and logs from anywhere, on any device.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Remote monitoring',
            },
            {
                id: 'secure-storage',
                navLabel: 'Secure, Compliant Storage',
                title: 'Secure, Compliant Storage',
                description: 'Encrypted retention and audit-ready security logging.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Secure storage',
            },
        ],
    },
    'voip': {
        title: 'VoIP Solutions',
        subtitle: 'Smarter Business Communication for Modern Teams',
        description: 'Clear, reliable cloud-based voice, texting, and call management built for mobility and responsiveness. Arden Logics provides HD voice quality with advanced call routing, auto-attendants, queues, ring groups, and intelligent call flows accessible from any device.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'HD Voice Quality',
                description: 'Consistent clarity across desk phones, softphones, and mobile devices.',
                icon: <Phone className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Advanced Call Routing',
                description: 'Auto-attendants, queues, ring groups, and intelligent call flows.',
                icon: <Phone className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Work Anywhere',
                description: 'A unified communication platform accessible from any device.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Call Analytics',
                description: 'Monitor performance, drive efficiency, and improve customer experience.',
                icon: <Phone className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Business Communications',
            title: 'Smarter Business Communication for Modern Teams',
            description: 'Clear, reliable cloud-based voice, texting, and call management built for mobility and responsiveness. Arden Logics provides HD voice quality with advanced call routing, auto-attendants, queues, ring groups, and intelligent call flows accessible from any device.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Business communication solutions',
        },
        sections: [
            {
                id: 'hd-voice',
                navLabel: 'HD Voice Quality',
                title: 'HD Voice Quality',
                description: 'Consistent clarity across desk phones, softphones, and mobile devices.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'HD voice quality',
            },
            {
                id: 'call-routing',
                navLabel: 'Advanced Call Routing',
                title: 'Advanced Call Routing',
                description: 'Auto-attendants, queues, ring groups, and intelligent call flows.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Advanced call routing',
            },
            {
                id: 'work-anywhere',
                navLabel: 'Work Anywhere',
                title: 'Work Anywhere',
                description: 'A unified communication platform accessible from any device.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Work anywhere',
            },
            {
                id: 'analytics',
                navLabel: 'Call Analytics',
                title: 'Call Analytics',
                description: 'Monitor performance, drive efficiency, and improve customer experience.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Call analytics',
            },
        ],
    },
    'cybersecurity': {
        title: 'Cyber Security',
        subtitle: 'Enterprise-Grade Protection for a Modern Threat Landscape',
        description: 'Layered defenses, continuous monitoring, and zero-trust security built to secure every user, device, and system. Arden Logics delivers 24/7 monitoring and rapid incident remediation with HIPAA-, FERPA-, and industry-ready controls for audit-friendly security.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Threat Detection & Response',
                description: '24/7 monitoring and rapid incident remediation.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Zero-Trust Controls',
                description: 'Identity, access, and device policies that reduce risk across your environment.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Vulnerability Management',
                description: 'Ongoing scanning and remediation to close security gaps.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Compliance Alignment',
                description: 'HIPAA-, FERPA-, and industry-ready controls for audit-friendly security.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Cybersecurity',
            title: 'Enterprise-Grade Protection for a Modern Threat Landscape',
            description: 'Layered defenses, continuous monitoring, and zero-trust security built to secure every user, device, and system. Arden Logics delivers 24/7 monitoring and rapid incident remediation with HIPAA-, FERPA-, and industry-ready controls for audit-friendly security.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Enterprise security solutions',
        },
        sections: [
            {
                id: 'threat-detection',
                navLabel: 'Threat Detection & Response',
                title: 'Threat Detection & Response',
                description: '24/7 monitoring and rapid incident remediation.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Threat detection',
            },
            {
                id: 'zero-trust',
                navLabel: 'Zero-Trust Controls',
                title: 'Zero-Trust Controls',
                description: 'Identity, access, and device policies that reduce risk across your environment.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Zero-trust controls',
            },
            {
                id: 'vulnerability',
                navLabel: 'Vulnerability Management',
                title: 'Vulnerability Management',
                description: 'Ongoing scanning and remediation to close security gaps.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Vulnerability management',
            },
            {
                id: 'compliance',
                navLabel: 'Compliance Alignment',
                title: 'Compliance Alignment',
                description: 'HIPAA-, FERPA-, and industry-ready controls for audit-friendly security.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Compliance',
            },
        ],
    },
}

