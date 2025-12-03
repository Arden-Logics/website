import { Cpu, Phone, Network, MonitorPlay, Camera, ShieldCheck, Building2, Heart, ShoppingBag, GraduationCap, Factory, Briefcase, BookOpen, FileText, Users, Newspaper, KeyRound, HelpCircle, Activity, Zap, Lock, CheckCircle, Fingerprint } from 'lucide-react'
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

export interface SolutionItem {
    name: string
    href: string
    description: string
    icon: React.ReactElement
}

export interface SolutionCategory {
    title: string
    items: SolutionItem[]
}

export const SOLUTIONS: SolutionCategory[] = [
    {
        title: 'By Audience',
        items: [
            {
                name: 'Enterprise',
                href: '/solutions/enterprise',
                description: 'Enterprise-grade solutions for large organizations.',
                icon: <Building2 className="stroke-foreground fill-purple-500/15" />,
            },
            {
                name: 'Small Business',
                href: '/solutions/small-business',
                description: 'Scalable solutions designed for growing businesses.',
                icon: <Briefcase className="stroke-foreground fill-blue-500/15" />,
            },
            {
                name: 'Startups',
                href: '/solutions/startups',
                description: 'Flexible solutions for innovative startups.',
                icon: <Zap className="stroke-foreground fill-green-500/15" />,
            },
        ],
    },
    {
        title: 'By Industry',
        items: [
            {
                name: 'Tech',
                href: '/solutions/tech',
                description: 'Technology-focused IT solutions.',
                icon: <Cpu className="stroke-foreground fill-blue-500/15" />,
            },
            {
                name: 'Manufacturing',
                href: '/solutions/manufacturing',
                description: 'Industrial automation and production IT.',
                icon: <Factory className="stroke-foreground fill-orange-500/15" />,
            },
            {
                name: 'Construction',
                href: '/solutions/construction',
                description: 'Construction industry IT solutions.',
                icon: <Building2 className="stroke-foreground fill-yellow-500/15" />,
            },
            {
                name: 'Real Estate',
                href: '/solutions/real-estate',
                description: 'Real estate industry solutions.',
                icon: <Building2 className="stroke-foreground fill-red-500/15" />,
            },
            {
                name: 'Nonprofit',
                href: '/solutions/nonprofit',
                description: 'Solutions for nonprofit organizations.',
                icon: <Heart className="stroke-foreground fill-pink-500/15" />,
            },
            {
                name: 'Automotive',
                href: '/solutions/automotive',
                description: 'Automotive industry IT solutions.',
                icon: <Cpu className="stroke-foreground fill-indigo-500/15" />,
            },
            {
                name: 'Transportation & Logistics',
                href: '/solutions/transportation-logistics',
                description: 'Transportation and logistics solutions.',
                icon: <Network className="stroke-foreground fill-cyan-500/15" />,
            },
        ],
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
    // New fields for feature-rich content
    featuresSectionTitle?: string
    featuresSectionDescription?: string
    contentFeatures?: Array<{
        icon: React.ReactElement
        title: string
        description: string
        linkText?: string
        linkHref?: string
    }>
    contentSection?: {
        title: string
        highlights: string[]
        calloutText?: string
    }
    metricsSection?: {
        title: string
        metrics: Array<{
            value: string
            label: string
        }>
    }
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
        featuresSectionTitle: 'MFA that meets you where you are',
        featuresSectionDescription: 'Arden Logics delivers comprehensive IT management and security solutions that protect your organization.',
        contentFeatures: [
            {
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
                title: 'Remote Monitoring & Management (RMM)',
                description: 'Arden Logics continuously monitors your entire environment—servers, workstations, network devices, and cloud platforms—to detect issues before they become outages. Our RMM platform provides proactive maintenance, real-time alerts, and automated remediation without requiring extra effort from your team.',
                linkText: 'Keep your systems healthy →',
                linkHref: '#',
            },
            {
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
                title: 'Cybersecurity',
                description: 'Protect your organization with a layered security strategy that adapts as threats evolve. Arden Logics delivers next-generation defenses including endpoint protection, MFA, threat detection, vulnerability management, and zero-trust controls designed to secure every user, device, and workflow.',
                linkText: 'Strengthen your security posture →',
                linkHref: '#',
            },
            {
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
                title: 'Email Infrastructure Management',
                description: 'Ensure reliable, secure communication across your organization. We support and manage Microsoft 365, Google Workspace, and hybrid email environments—handling security policies, spam filtering, authentication (DMARC, SPF, DKIM), and performance optimization so your users stay connected.',
                linkText: 'Optimize your email systems →',
                linkHref: '#',
            },
            {
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
                title: 'Business Continuity & Disaster Recovery',
                description: 'Stay operational even during unexpected downtime. Arden Logics designs and manages comprehensive backup, failover, and recovery strategies to protect critical data and applications. From ransomware resilience to cloud-based DR solutions, we keep your business running no matter what.',
                linkText: 'Protect your data & uptime →',
                linkHref: '#',
            },
            {
                icon: <Users className="stroke-foreground fill-foreground/10" />,
                title: 'End-User Management',
                description: 'Give your team a frictionless IT experience. Arden Logics handles onboarding, offboarding, device provisioning, permissions, software access, troubleshooting, and day-to-day technical support—ensuring employees stay productive and secure everywhere they work.',
                linkText: 'Support every user seamlessly →',
                linkHref: '#',
            },
            {
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
                title: 'Updates & Patch Management',
                description: 'Stay ahead of vulnerabilities with automated, centralized patching for operating systems, applications, and third-party software. Arden Logics tests, schedules, and deploys updates in a way that minimizes disruptions while maximizing security and performance.',
                linkText: 'Automate updates with confidence →',
                linkHref: '#',
            },
        ],
        contentSection: {
            title: 'Building the next generation of Managed IT & Security Services',
            highlights: [
                'Arden Logics delivers modern, scalable IT solutions that empower organizations to operate securely, efficiently, and without interruption.',
                'Our platform brings together automation, real-time monitoring, and enterprise-grade security to keep your business running at peak performance.',
                'With proactive system management, 24/7 monitoring, and automated threat protection, your team can stay productive while we take care of the infrastructure behind the scenes.',
                'Our comprehensive service suite supports collaboration, cybersecurity, continuity, and device management, enabling your organization to work seamlessly across locations and platforms.',
                'Experience enterprise-grade security, compliance-focused processes, and fully managed support built from the ground up to protect your users, applications, and data.',
            ]
        },
        metricsSection: {
            title: 'Building the next generation of Managed IT & Security Services',
            metrics: [
                { value: '99.9%', label: 'Guaranteed uptime across critical systems we manage.' },
                { value: '24/7', label: 'Around-the-clock support and response for your business.' },
                { value: '12x', label: 'Faster issue detection through automated monitoring and alerting.' },
                { value: '12x', label: 'Faster remediation with intelligent automation and RMM workflows.' },
            ]
        }
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
            description: 'Empower your organization with a modern cloud-based VoIP phone system designed for clarity, reliability, and scalability. Arden Logics delivers business-class voice, texting, and call management solutions that support remote teams, hybrid workforces, and fast-growing companies. Our cloud VoIP platform provides HD voice quality, mobile-ready softphones, and intelligent call routing features that keep your team connected from anywhere.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Business communication solutions',
        },
        sections: [
            {
                id: 'hd-voice',
                navLabel: 'HD Voice Quality',
                title: 'HD Voice Quality for Business',
                description: 'Enjoy crystal-clear HD VoIP calling across desk phones, mobile devices, and softphones.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'HD voice quality',
            },
            {
                id: 'call-routing',
                navLabel: 'Advanced Call Routing',
                title: 'Advanced Call Routing & Intelligent Call Flows',
                description: 'Optimize customer experience with auto-attendants, call queues, ring groups, time-based routing, and customizable call flows.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Advanced call routing',
            },
            {
                id: 'work-anywhere',
                navLabel: 'Work Anywhere',
                title: 'Work Anywhere With a Unified Communication Platform',
                description: 'Your team can call, text, transfer, and collaborate from any device—laptop, smartphone, or desk phone.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Work anywhere',
            },
            {
                id: 'analytics',
                navLabel: 'Call Analytics',
                title: 'Call Analytics & Reporting for Better Performance',
                description: 'Our VoIP analytics dashboard helps leaders make data-driven decisions, improve efficiency, and deliver better service.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Call analytics',
            },
        ],
        featuresSectionTitle: 'MFA that meets you where you are',
        featuresSectionDescription: 'Arden Logics delivers modern VoIP solutions for today\'s hybrid workplace.',
        contentFeatures: [
            {
                icon: <Zap className="stroke-foreground fill-foreground/10" />,
                title: 'Seamless deployment & onboarding',
                description: 'Our VoIP system is quick to roll out and easy for your team to adopt. We handle provisioning, number porting, device setup, and user onboarding to ensure a smooth transition with minimal downtime.',
                linkText: 'See how simple VoIP setup can be →',
                linkHref: '#',
            },
            {
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
                title: 'Built to support growing teams',
                description: 'Add users, extensions, call flows, and locations in seconds. Whether you\'re expanding a department or opening new offices, your communication system scales effortlessly no hardware upgrades required.',
                linkText: 'Discover scalable VoIP options →',
                linkHref: '#',
            },
            {
                icon: <CheckCircle className="stroke-foreground fill-foreground/10" />,
                title: 'Smarter call handling for better experiences',
                description: 'Create customized call paths with auto-attendants, queues, ring strategies, and role-based routing. Ensure customers reach the right person quickly and reliably every time.',
                linkText: 'Explore intelligent call routing →',
                linkHref: '#',
            },
            {
                icon: <Phone className="stroke-foreground fill-foreground/10" />,
                title: 'Consistent, high-definition voice quality',
                description: 'Enjoy clear, interruption-free conversations backed by redundant cloud infrastructure and optimized routing. Your team gets professional-grade audio across desk phones, softphones, and mobile apps.',
                linkText: 'Learn how we deliver reliable call quality →',
                linkHref: '#',
            },
            {
                icon: <Lock className="stroke-foreground fill-foreground/10" />,
                title: 'Unified communication from any device',
                description: 'Work from your office, home, or on the go. Our platform supports calling, texting, voicemail, presence, and collaboration tools all accessible from any device your team prefers.',
                linkText: 'See unified communication in action →',
                linkHref: '#',
            },
            {
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
                title: 'Insightful analytics for stronger performance',
                description: 'Track call metrics, monitor service levels, and uncover trends that help you refine operations. Our analytics suite gives you visibility into performance and customer engagement.',
                linkText: 'Review VoIP analytics features →',
                linkHref: '#',
            },
        ],
        contentSection: {
            title: 'Building the next generation of Cloud-Based Communication Tools',
            highlights: [
                'Arden Logics delivers a modern VoIP platform engineered for reliability, mobility, and business-grade performance across all devices. Our cloud phone system enhances collaboration, improves responsiveness, and keeps teams connected from anywhere.',
                'With intelligent call routing, mobility tools, and powerful automation, your team stays focused on customers not on managing outdated phone systems.',
                'Our comprehensive VoIP suite includes smart call flows, mobile softphones, HD voice, and advanced analytics, giving businesses of all sizes a flexible communication layer that scales effortlessly.',
                'Experience enterprise-grade reliability, encrypted calling, and built-in security designed to protect your communication infrastructure 24/7.',
            ]
        },
        metricsSection: {
            title: 'Building the next generation of Cloud Communication Tools',
            metrics: [
                { value: '99.99%', label: 'Network uptime across our cloud VoIP infrastructure.' },
                { value: '24/7', label: 'VoIP support and monitoring available around the clock.' },
                { value: '15x', label: 'Faster call connection times compared to legacy on-prem systems.' },
                { value: '92%', label: 'Average reduction in dropped calls after migrating to Arden Logics VoIP.' },
            ]
        }
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

export interface ServiceTestimonial {
    id: number
    companyName: string
    logo: React.ReactNode
    headline: string
    highlightedText: string
    description: string
    image: string
    link: string
}

export const SERVICE_TESTIMONIALS: Record<string, ServiceTestimonial[]> = {
    'msp-managed-it': [
        {
            id: 1,
            companyName: 'City Medical Center',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M20 10v20M10 20h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <text x="45" y="26" className="fill-current text-sm font-semibold" style={{ fontSize: '14px' }}>MedTech</text>
                </svg>
            ),
            headline: 'Arden Logic delivers',
            highlightedText: 'proactive IT management',
            description: 'enabling 24/7 operations for City Medical Center.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
        {
            id: 2,
            companyName: 'Metro Retail Group',
            logo: (
                <svg viewBox="0 0 160 40" fill="none" className="h-8 w-auto">
                    <path d="M8 28L20 20L32 28L20 36L8 28Z" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="20" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="42" y="26" className="fill-current text-sm font-semibold" style={{ fontSize: '14px' }}>Retail</text>
                </svg>
            ),
            headline: 'Managed IT supports',
            highlightedText: 'seamless operations across 50 locations',
            description: 'for Metro Retail Group.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
        {
            id: 3,
            companyName: 'TechFab Industries',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M6 16h28M14 8v-4M26 8v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <text x="42" y="26" className="fill-current text-sm font-bold" style={{ fontSize: '13px' }}>TECH</text>
                </svg>
            ),
            headline: 'IT support achieves',
            highlightedText: '99.9% uptime',
            description: 'for TechFab Industries manufacturing operations.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
    ],
    'network-cabling': [
        {
            id: 1,
            companyName: 'Enterprise Solutions Inc',
            logo: (
                <svg viewBox="0 0 180 40" fill="none" className="h-8 w-auto">
                    <path d="M10 35V12L25 5L40 12V35" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
                    <path d="M18 35V25h14v10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M18 20h4M28 20h4M18 15h4M28 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <text x="50" y="28" className="fill-current font-light tracking-wider" style={{ fontSize: '16px' }}>ENTERPRISE</text>
                </svg>
            ),
            headline: 'Professional cabling infrastructure',
            highlightedText: 'enables seamless scalability',
            description: 'for Enterprise Solutions Inc.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
        {
            id: 2,
            companyName: 'Corporate Campus Ltd',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M20 10v20M10 20h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <text x="45" y="26" className="fill-current text-sm font-semibold" style={{ fontSize: '14px' }}>CAMPUS</text>
                </svg>
            ),
            headline: 'Structured cabling design',
            highlightedText: 'improves network performance',
            description: 'across Corporate Campus Ltd.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
        {
            id: 3,
            companyName: 'Fiber Networks Co',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <path d="M8 28L20 20L32 28L20 36L8 28Z" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="20" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="42" y="26" className="fill-current text-sm font-semibold" style={{ fontSize: '14px' }}>FIBER</text>
                </svg>
            ),
            headline: 'High-speed infrastructure',
            highlightedText: 'delivers reliable connectivity',
            description: 'for Fiber Networks Co.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
    ],
    'audio-visual': [
        {
            id: 1,
            companyName: 'Modern Meetings Inc',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M6 16h28M14 8v-4M26 8v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <text x="42" y="26" className="fill-current text-sm font-bold" style={{ fontSize: '13px' }}>MODERN</text>
                </svg>
            ),
            headline: 'Professional AV systems',
            highlightedText: 'transform meeting experiences',
            description: 'for Modern Meetings Inc.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
        {
            id: 2,
            companyName: 'Collaboration Hub Ltd',
            logo: (
                <svg viewBox="0 0 180 40" fill="none" className="h-8 w-auto">
                    <path d="M10 35V12L25 5L40 12V35" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
                    <path d="M18 35V25h14v10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M18 20h4M28 20h4M18 15h4M28 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <text x="50" y="28" className="fill-current font-light tracking-wider" style={{ fontSize: '16px' }}>COLLAB</text>
                </svg>
            ),
            headline: 'Seamless integrations',
            highlightedText: 'enhance conference room productivity',
            description: 'at Collaboration Hub Ltd.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
        {
            id: 3,
            companyName: 'Digital Events Pro',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M20 10v20M10 20h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <text x="45" y="26" className="fill-current text-sm font-semibold" style={{ fontSize: '14px' }}>EVENTS</text>
                </svg>
            ),
            headline: 'Crystal-clear audio and visuals',
            highlightedText: 'deliver engaging presentations',
            description: 'for Digital Events Pro.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
    ],
    'camera-access-security': [
        {
            id: 1,
            companyName: 'Secure Campus Systems',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <path d="M8 28L20 20L32 28L20 36L8 28Z" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="20" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="42" y="26" className="fill-current text-sm font-semibold" style={{ fontSize: '14px' }}>SECURE</text>
                </svg>
            ),
            headline: 'Advanced surveillance systems',
            highlightedText: 'enhance campus safety',
            description: 'for Secure Campus Systems.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
        {
            id: 2,
            companyName: 'Retail Security Solutions',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M6 16h28M14 8v-4M26 8v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <text x="42" y="26" className="fill-current text-sm font-bold" style={{ fontSize: '13px' }}>RETAIL</text>
                </svg>
            ),
            headline: 'Integrated access control',
            highlightedText: 'protects retail locations',
            description: 'for Retail Security Solutions.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
        {
            id: 3,
            companyName: 'Enterprise Security Group',
            logo: (
                <svg viewBox="0 0 180 40" fill="none" className="h-8 w-auto">
                    <path d="M10 35V12L25 5L40 12V35" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
                    <path d="M18 35V25h14v10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M18 20h4M28 20h4M18 15h4M28 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <text x="50" y="28" className="fill-current font-light tracking-wider" style={{ fontSize: '16px' }}>ENTERPRISE</text>
                </svg>
            ),
            headline: 'Real-time monitoring',
            highlightedText: 'secures enterprise facilities',
            description: 'for Enterprise Security Group.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
    ],
    'cybersecurity': [
        {
            id: 1,
            companyName: 'Premier Capital Advisors',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M20 10v20M10 20h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <text x="45" y="26" className="fill-current text-sm font-semibold" style={{ fontSize: '14px' }}>PREMIER</text>
                </svg>
            ),
            headline: 'Multi-layered security',
            highlightedText: 'protects financial data',
            description: 'for Premier Capital Advisors.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
        {
            id: 2,
            companyName: 'Healthcare Security Institute',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <path d="M8 28L20 20L32 28L20 36L8 28Z" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="20" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="42" y="26" className="fill-current text-sm font-semibold" style={{ fontSize: '14px' }}>HEALTH</text>
                </svg>
            ),
            headline: 'HIPAA-compliant controls',
            highlightedText: 'ensure patient data protection',
            description: 'for Healthcare Security Institute.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
        {
            id: 3,
            companyName: 'Digital Trust Enterprises',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M6 16h28M14 8v-4M26 8v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <text x="42" y="26" className="fill-current text-sm font-bold" style={{ fontSize: '13px' }}>TRUST</text>
                </svg>
            ),
            headline: 'Zero-trust architecture',
            highlightedText: 'reduces security risks',
            description: 'across Digital Trust Enterprises.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
    ],
    'voip': [
        {
            id: 1,
            companyName: 'First Bank',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M20 10v20M10 20h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <text x="45" y="26" className="fill-current text-sm font-bold" style={{ fontSize: '13px' }}>BANK</text>
                </svg>
            ),
            headline: 'VoIP solutions enable',
            highlightedText: 'unified communications',
            description: 'and cost savings for First Bank.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
        {
            id: 2,
            companyName: 'Customer Care Solutions',
            logo: (
                <svg viewBox="0 0 180 40" fill="none" className="h-8 w-auto">
                    <path d="M10 35V12L25 5L40 12V35" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
                    <path d="M18 35V25h14v10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M18 20h4M28 20h4M18 15h4M28 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <text x="50" y="28" className="fill-current font-light tracking-wider" style={{ fontSize: '16px' }}>CARE</text>
                </svg>
            ),
            headline: 'Crystal-clear calling quality',
            highlightedText: 'improves customer satisfaction',
            description: 'at Customer Care Solutions.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
        {
            id: 3,
            companyName: 'Global Communications Corp',
            logo: (
                <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
                    <path d="M8 28L20 20L32 28L20 36L8 28Z" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="20" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="42" y="26" className="fill-current text-sm font-semibold" style={{ fontSize: '14px' }}>GLOBAL</text>
                </svg>
            ),
            headline: 'Seamless integration',
            highlightedText: 'connects remote teams',
            description: 'for Global Communications Corp.',
            image: '/api/placeholder/600/500',
            link: '/resources/client-success',
        },
    ],
}

