import { Cpu, Phone, Network, MonitorPlay, Camera, ShieldCheck, Building2, Heart, ShoppingBag, GraduationCap, Factory, Briefcase, BookOpen, FileText, Users, Newspaper, KeyRound, HelpCircle, Activity, Zap, Lock, CheckCircle, Fingerprint, Car, Truck, Home, Wrench } from 'lucide-react'
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
    images: string[]
}

export const INDUSTRIES: Industry[] = [
    {
        name: 'Audio Visual',
        href: '/industries#audio-visual',
        description: 'Professional audio and visual systems for any environment.',
        icon: <MonitorPlay className="stroke-foreground fill-purple-500/15" />,
        images: [
            '/industries/audio-visual/audio-visual-1.jpg',
            '/industries/audio-visual/audio-visual-2.jpg',
            '/industries/audio-visual/audio-visual-3.jpg',
        ],
    },
    {
        name: 'Automotive',
        href: '/industries#automotive',
        description: 'IT solutions for automotive dealerships and service centers.',
        icon: <Car className="stroke-foreground fill-blue-500/15" />,
        images: [
            '/industries/automotive/automotive-1.jpg',
            '/industries/automotive/automotive-2.jpg',
            '/industries/automotive/automotive-3.jpg',
        ],
    },
    {
        name: 'Camera Access & Security',
        href: '/industries#camera-access-and-security',
        description: 'Advanced surveillance cameras and access control systems.',
        icon: <Camera className="stroke-foreground fill-red-500/15" />,
        images: [
            '/industries/camera-access-and-security/camera-access-and-security-1.jpg',
            '/industries/camera-access-and-security/camera-access-and-security-2.jpg',
            '/industries/camera-access-and-security/camera-access-and-security-3.jpg',
        ],
    },
    {
        name: 'Construction',
        href: '/industries#construction',
        description: 'Construction industry IT solutions and infrastructure.',
        icon: <Wrench className="stroke-foreground fill-orange-500/15" />,
        images: [
            '/industries/construction/construction-1.jpg',
            '/industries/construction/construction-2.jpg',
            '/industries/construction/construction-3.jpg',
        ],
    },
    {
        name: 'Cyber Security',
        href: '/industries#cyber-security',
        description: 'Protect your digital assets with top-tier security measures.',
        icon: <ShieldCheck className="stroke-foreground fill-indigo-500/15" />,
        images: [
            '/industries/cyber-security/cyber-security-1.jpg',
            '/industries/cyber-security/cyber-security-2.jpg',
            '/industries/cyber-security/cyber-security-3.jpg',
        ],
    },
    {
        name: 'Education',
        href: '/industries#education',
        description: 'Technology infrastructure for schools and educational institutions.',
        icon: <GraduationCap className="stroke-foreground fill-green-500/15" />,
        images: [],
    },
    {
        name: 'Enterprise',
        href: '/industries#enterprise',
        description: 'Enterprise-grade solutions for large organizations.',
        icon: <Building2 className="stroke-foreground fill-purple-500/15" />,
        images: [
            '/industries/enterprise/enterprise-1.jpg',
            '/industries/enterprise/enterprise-2.jpg',
            '/industries/enterprise/enterprise-3.jpg',
        ],
    },
    {
        name: 'Finance',
        href: '/industries#finance',
        description: 'Secure banking and financial technology solutions.',
        icon: <Building2 className="stroke-foreground fill-purple-500/15" />,
        images: [],
    },
    {
        name: 'Healthcare',
        href: '/industries#healthcare',
        description: 'HIPAA-compliant IT solutions for medical practices and hospitals.',
        icon: <Heart className="stroke-foreground fill-red-500/15" />,
        images: [],
    },
    {
        name: 'Logistics',
        href: '/industries#logistics',
        description: 'IT solutions for logistics and supply chain management.',
        icon: <Truck className="stroke-foreground fill-blue-500/15" />,
        images: [
            '/industries/logistics/logistics-1.jpg',
            '/industries/logistics/logistics-2.jpg',
            '/industries/logistics/logistics-3.jpg',
        ],
    },
    {
        name: 'Manufacturing',
        href: '/industries#manufacturing',
        description: 'Industrial automation and production line IT systems.',
        icon: <Factory className="stroke-foreground fill-orange-500/15" />,
        images: [
            '/industries/manufacturing/manufacturing-1.jpg',
            '/industries/manufacturing/manufacturing-2.jpg',
            '/industries/manufacturing/manufacturing-3.jpg',
        ],
    },
    {
        name: 'MSP',
        href: '/industries#msp',
        description: 'Managed Service Provider solutions and IT management.',
        icon: <Cpu className="stroke-foreground fill-blue-500/15" />,
        images: [
            '/industries/msp/compressed-engineers-discussing-aluminum-window-frames-production-factory.jpg',
            '/industries/msp/compressed-full-shot-adults-walking-together.jpg',
            '/industries/msp/compressed-mature-female-with-smartphone-paying-food-products-supermarket-while-standing-by-her-husband-front-happy-young-cashier.jpg',
        ],
    },
    {
        name: 'Network & Cabling',
        href: '/industries#network-and-cabling',
        description: 'Structured cabling and robust network infrastructure setup.',
        icon: <Network className="stroke-foreground fill-orange-500/15" />,
        images: [
            '/industries/network-and-cabling/network-and-cabling-1.webp',
            '/industries/network-and-cabling/network-and-cabling-2.jpg',
            '/industries/network-and-cabling/network-and-cabling-3.jpg',
        ],
    },
    {
        name: 'Non-Profit',
        href: '/industries#non-profit',
        description: 'IT solutions tailored for non-profit organizations.',
        icon: <Heart className="stroke-foreground fill-pink-500/15" />,
        images: [
            '/industries/non-profit/non-profit-1.jpg',
            '/industries/non-profit/non-profit-2.jpg',
            '/industries/non-profit/non-profit-3.jpg',
        ],
    },
    {
        name: 'Professional Services',
        href: '/industries#professional-services',
        description: 'IT support for law firms, accounting, and consulting businesses.',
        icon: <Briefcase className="stroke-foreground fill-indigo-500/15" />,
        images: [],
    },
    {
        name: 'Real Estate',
        href: '/industries#real-estate',
        description: 'IT solutions for real estate agencies and property management.',
        icon: <Home className="stroke-foreground fill-amber-500/15" />,
        images: [
            '/industries/real-estate/real-estate-1.jpg',
            '/industries/real-estate/real-estate-2.jpg',
            '/industries/real-estate/real-estate-3.jpg',
        ],
    },
    {
        name: 'Retail',
        href: '/industries#retail',
        description: 'Point-of-sale systems and inventory management solutions.',
        icon: <ShoppingBag className="stroke-foreground fill-blue-500/15" />,
        images: [],
    },
    {
        name: 'Small Business',
        href: '/industries#small-business',
        description: 'Scalable solutions designed for growing businesses.',
        icon: <Briefcase className="stroke-foreground fill-blue-500/15" />,
        images: [
            '/industries/small-business/small-business-1.jpg',
            '/industries/small-business/small-business-2.jpg',
            '/industries/small-business/small-business-3.jpg',
        ],
    },
    {
        name: 'Startups',
        href: '/industries#startups',
        description: 'Flexible solutions for innovative startups.',
        icon: <Zap className="stroke-foreground fill-green-500/15" />,
        images: [
            '/industries/startups/startups-1.jpg',
            '/industries/startups/startups-2.jpg',
            '/industries/startups/startups-3.jpg',
        ],
    },
    {
        name: 'Tech',
        href: '/industries#tech',
        description: 'Technology-focused IT solutions.',
        icon: <Cpu className="stroke-foreground fill-blue-500/15" />,
        images: [
            '/industries/tech/tech-1.jpg',
            '/industries/tech/tech-2.jpg',
            '/industries/tech/tech-3.jpg',
        ],
    },
    {
        name: 'VoIP',
        href: '/industries#voip',
        description: 'Reliable and clear Voice over IP communication solutions.',
        icon: <Phone className="stroke-foreground fill-green-500/15" />,
        images: [
            '/industries/voip/voip-1.jpg',
            '/industries/voip/voip-2.jpg',
            '/industries/voip/voip-3.jpg',
        ],
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
    // Security-specific fields
    painPoints?: string[]
    whyArdenBenefits?: Array<{
        title: string
        description: string
    }>
    processSteps?: Array<{
        number: string
        title: string
        description: string
    }>
    // Service-specific Why Arden content
    whyArdenContent?: {
        problemTitle: string
        problemSubtitle: string
        painPoints: string[]
        solutionTitle: string
        solutionSubtitle: string
        benefits: string[]
        differenceText: string
        differenceButtonText: string
        frameworkTitle: string
        frameworkSubtitle: string
        frameworkSteps: Array<{
            number: string
            title: string
            description: string
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
            imageSrc: '/services/msp/compressed-engineers-discussing-aluminum-window-frames-production-factory.jpg',
            imageAlt: 'IT professionals collaborating in a modern tech office',
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
        featuresSectionTitle: 'Managed IT that meets you where you are',
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
        subtitle: 'Network & Cabling Solutions That Meet You Where You Are',
        description: 'Arden Logics builds fast, reliable, and scalable network infrastructure with structured cabling solutions designed to support your organization today and grow with you tomorrow.',
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
            title: 'Network & Cabling Solutions That Meet You Where You Are',
            description: 'Arden Logics builds fast, reliable, and scalable network infrastructure with structured cabling solutions designed to support your organization today and grow with you tomorrow.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/services/network-and-cabling/network-and-cabling-1.webp',
            imageAlt: 'Data center with organized network cables and server infrastructure',
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
        featuresSectionTitle: 'Network & Cabling Solutions That Meet You Where You Are',
        featuresSectionDescription: 'Arden Logics builds fast, reliable, and scalable network infrastructure with structured cabling solutions designed to support your organization today and grow with you tomorrow.',
        contentFeatures: [
            {
                icon: <Network className="stroke-foreground fill-foreground/10" />,
                title: 'Seamless Cabling Integration',
                description: 'Our cabling solutions connect cleanly with your existing environments from offices to warehouses, clinics, classrooms, and multi-site enterprises. Fast installation, clean routing, and zero workflow disruption.',
                linkText: 'Explore cabling integrations →',
                linkHref: '#',
            },
            {
                icon: <Zap className="stroke-foreground fill-foreground/10" />,
                title: 'Scale Network Performance as You Grow',
                description: 'Your network shouldn\'t slow you down. Arden designs cabling and switching infrastructure that supports future expansion more users, more devices, and more bandwidth without rework or downtime.',
                linkText: 'Learn how scalable networks work →',
                linkHref: '#',
            },
            {
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
                title: 'Adaptive Network Design',
                description: 'Every environment is different. We engineer cabling paths and network layouts based on location, building structure, usage patterns, and device density to ensure stable, high-performance connectivity.',
                linkText: 'Learn more about adaptive network design →',
                linkHref: '#',
            },
            {
                icon: <CheckCircle className="stroke-foreground fill-foreground/10" />,
                title: 'Installation That Just Works',
                description: 'We take the complexity out of network buildouts. Our team handles planning, labeling, routing, testing, certification, and cleanup so your cabling and network come online smoothly with minimal disruption.',
                linkText: 'Discover hassle-free installation →',
                linkHref: '#',
            },
            {
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
                title: 'Skip the Bottlenecks, Not Reliability',
                description: 'Well-designed cabling means fewer outages, fewer dead zones, and consistent network quality. We eliminate bad wiring, poor terminations, and messy legacy cabling to improve performance everywhere.',
                linkText: 'See how clean cabling improves reliability →',
                linkHref: '#',
            },
            {
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
                title: 'Cabling That Powers Every System You Use',
                description: 'Our cabling supports everything switches, APs, VoIP phones, cameras, access control, servers, AV systems, sensors, and more. Whether it\'s copper, fiber, backbone, or rack-to-rack connectivity, we build it right.',
                linkText: 'Secure and scale every connection →',
                linkHref: '#',
            },
        ],
        contentSection: {
            title: 'Enterprise-Grade Network & Structured Cabling Designed for Performance at Scale',
            highlights: [
                'Arden Logics delivers mission-critical network and cabling infrastructure engineered for resilience, scalability, and high availability ensuring your organization stays connected and operational across every environment.',
                'Arden Logics builds network foundations that support large-scale operations, high-density device environments, and bandwidth-intensive workloads. Every installation follows industry standards, ensuring predictable performance and long-term reliability.',
                'Our structured cabling solutions are engineered for operational continuity with certified terminations, optimized routing, redundant pathways, and properly balanced switching architecture that mitigates single points of failure.',
                'We take a lifecycle approach to infrastructure: from assessment and design to installation, testing, and ongoing management. This ensures your network can scale seamlessly as user demands, locations, and mission-critical systems continue to grow.',
                'Arden Logics delivers infrastructure that is secure, compliant, and future-ready enabling your organization to operate with speed, stability, and confidence across all business units.',
            ]
        },
        metricsSection: {
            title: 'Enterprise-Grade Network & Cabling Infrastructure',
            metrics: [
                { value: '99.99%', label: 'Designed uptime with compliant, standards-based installations' },
                { value: '24/7', label: 'Monitoring, support, and rapid dispatch for critical environments' },
                { value: '40%', label: 'Increase in throughput with optimized switching & cable architecture' },
                { value: '12×', label: 'Improved stability after remediation of legacy cabling' },
            ]
        }
    },
    'audio-visual': {
        title: 'Audio & Visual Solutions',
        subtitle: 'AV Solutions That Elevate Every Space',
        description: 'Arden Logics delivers modern, scalable audio-visual solutions that enhance communication, collaboration, and client experience across your organization. From conference rooms to campus-wide systems, we design, install, and support AV environments that work anywhere—and grow with you.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Unified AV Integration',
                description: 'Seamlessly integrates with existing hardware, conferencing platforms, and room technologies.',
                icon: <MonitorPlay className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Scalable Multi-Location',
                description: 'Add rooms, displays, or conference systems anytime without re-engineering.',
                icon: <MonitorPlay className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Intelligent Automation',
                description: 'Automated controls for lighting, audio, displays, and conferencing.',
                icon: <MonitorPlay className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Future-Ready Designs',
                description: 'Built on HDMI 2.1, 4K/8K, PoE, IP-based AV, and cloud-connected management.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Audio Visual',
            title: 'AV Solutions That Elevate Every Space',
            description: 'Arden Logics delivers modern, scalable audio-visual solutions that enhance communication, collaboration, and client experience across your organization. From conference rooms to campus-wide systems, we design, install, and support AV environments that work anywhere—and grow with you.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/services/audio-visual/audio-visual-1.jpg',
            imageAlt: 'Modern conference room with professional audio visual equipment',
        },
        sections: [
            {
                id: 'unified-integration',
                navLabel: 'Unified AV Integration',
                title: 'Unified AV Integration',
                description: 'Our AV systems seamlessly integrate with your existing hardware, conferencing platforms, and room technologies. Fast deployment, minimal downtime, and engineered for long-term reliability.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Unified AV Integration',
            },
            {
                id: 'scalable-av',
                navLabel: 'Scalable AV Solutions',
                title: 'Scalable AV for Multi-Location Growth',
                description: 'Whether you\'re outfitting a single boardroom or standardizing across dozens of sites, our AV designs scale effortlessly. Add rooms, displays, or conference systems anytime without re-engineering your entire setup.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Scalable AV Solutions',
            },
            {
                id: 'room-automation',
                navLabel: 'Room Automation',
                title: 'Intelligent Room Automation',
                description: 'Automated controls for lighting, audio, displays, and conferencing ensure every meeting starts smoothly. Touchless options, presets, and monitoring reduce support tickets and improve the user experience.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Room Automation',
            },
            {
                id: 'user-friendly',
                navLabel: 'User-Friendly Operation',
                title: 'Simple, User-Friendly Operation',
                description: 'Your team shouldn\'t need IT expertise to run a meeting. Our AV environments are designed around intuitive controls so users can connect, present, and collaborate in seconds.',
                linkText: 'Contact Us',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'User-Friendly AV',
            },
        ],
        featuresSectionTitle: 'AV Solutions That Meet You Where You Are',
        featuresSectionDescription: 'Arden Logics delivers modern, scalable audio-visual solutions that enhance communication, collaboration, and client experience across your organization.',
        contentFeatures: [
            {
                icon: <Zap className="stroke-foreground fill-foreground/10" />,
                title: 'Unified AV Integration',
                description: 'Our AV systems seamlessly integrate with your existing hardware, conferencing platforms, and room technologies. Fast deployment, minimal downtime, and engineered for long-term reliability.',
                linkText: 'Explore AV integrations →',
                linkHref: '#',
            },
            {
                icon: <Network className="stroke-foreground fill-foreground/10" />,
                title: 'Scalable AV for Multi-Location Growth',
                description: 'Whether you\'re outfitting a single boardroom or standardizing across dozens of sites, our AV designs scale effortlessly. Add rooms, displays, or conference systems anytime without re-engineering your entire setup.',
                linkText: 'See scalable AV solutions →',
                linkHref: '#',
            },
            {
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
                title: 'Intelligent Room Automation',
                description: 'Automated controls for lighting, audio, displays, and conferencing ensure every meeting starts smoothly. Touchless options, presets, and monitoring reduce support tickets and improve the user experience.',
                linkText: 'Learn about room automation →',
                linkHref: '#',
            },
            {
                icon: <CheckCircle className="stroke-foreground fill-foreground/10" />,
                title: 'Simple, User-Friendly Operation',
                description: 'Your team shouldn\'t need IT expertise to run a meeting. Our AV environments are designed around intuitive controls so users can connect, present, and collaborate in seconds.',
                linkText: 'View user-friendly AV →',
                linkHref: '#',
            },
            {
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
                title: 'Future-Ready Designs',
                description: 'We build AV systems on modern standards—HDMI 2.1, 4K/8K support, PoE, IP-based AV, and cloud-connected management—so your investments stay relevant for years.',
                linkText: 'Explore future-ready AV →',
                linkHref: '#',
            },
            {
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
                title: 'AV Security & Reliability',
                description: 'Every AV deployment includes enterprise security controls, network segmentation best practices, and remote diagnostics to ensure uptime and protect your environment.',
                linkText: 'Review AV security standards →',
                linkHref: '#',
            },
        ],
        contentSection: {
            title: 'Building the Next Generation of Smart AV Environments',
            highlights: [
                'Our AV platform combines cutting-edge display technologies, cloud-connected conferencing systems, and intelligent room controls to unify your communication experience.',
                'With automated diagnostics and remote monitoring, your IT team can prevent issues before they occur—keeping rooms online and ready for every meeting.',
                'Our comprehensive suite includes digital displays, meeting room systems, multi-room audio, enterprise signage, and broadcast-grade solutions for hybrid collaboration.',
                'Every system is engineered with enterprise-grade security, network segmentation, and compliance built in. You get scalable, standardized AV environments that minimize downtime, reduce support overhead, and enhance user satisfaction.',
            ]
        },
        metricsSection: {
            title: 'Building the next generation of smart AV environments',
            metrics: [
                { value: '99.9%', label: 'System uptime' },
                { value: '24/7', label: 'Live support & monitoring' },
                { value: '3x', label: 'Faster room startup times' },
                { value: '40%', label: 'Reduction in AV-related tickets' },
            ]
        },
        // AV-specific Why Arden content
        whyArdenContent: {
            problemTitle: 'Working with AV Should Be Seamless.',
            problemSubtitle: 'Yet many AV solutions create more frustration than value. Poor installs, mismatched equipment, and untrained vendors lead to issues that should never happen.',
            painPoints: [
                'Unreliable conference rooms',
                'Confusing or outdated equipment',
                'Vendors who don\'t understand IT environments',
                'No standardization across rooms or locations',
                'Frequent downtime or "no audio/no video" issues',
            ],
            solutionTitle: 'Experience AV That Just Works.',
            solutionSubtitle: 'Imagine AV that never slows your meetings down. With Arden Logics, you get:',
            benefits: [
                'Standardized AV across every room & location',
                'Enterprise-grade hardware from Sony, Samsung, QSC, Shure, Poly, Logitech & more',
                'Seamless integration with Zoom, Teams, Google Meet, Webex',
                'Remote monitoring & instant support',
                'Predictable, all-inclusive pricing & lifecycle planning',
                'A 3-year AV roadmap tailored to your growth',
                'Professional installation aligned with IT best practices',
            ],
            differenceText: 'This is the Arden AV Difference.',
            differenceButtonText: 'Explore the Arden AV Difference',
            frameworkTitle: 'Our Proven AV Deployment Framework',
            frameworkSubtitle: 'We start with structure but tailor every system to your space.',
            frameworkSteps: [
                {
                    number: '1',
                    title: 'Envision & Align',
                    description: 'We assess your spaces, goals, and workflows to design AV systems that elevate communication and collaboration.',
                },
                {
                    number: '2',
                    title: 'Build & Prepare',
                    description: 'We install, configure, and test your displays, audio, control systems, and conferencing technologies for flawless performance.',
                },
                {
                    number: '3',
                    title: 'Launch & Refine',
                    description: 'We validate real-world performance, train your team, and fine-tune every room for clarity and reliability.',
                },
                {
                    number: '4',
                    title: 'Optimize & Grow',
                    description: 'We provide ongoing AV support, monitoring, updates, and future planning so your technology evolves with your business.',
                },
            ],
        },
    },
    'camera-access-security': {
        title: 'Camera Access & Security',
        subtitle: 'Protect What Matters Most With Intelligent Physical Security',
        description: 'Modern security isn\'t just cameras on walls — it\'s an integrated, intelligent system that keeps people safe, protects assets, and gives you real-time visibility across every facility.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Connected Camera Ecosystems',
                description: 'Modern camera systems that link seamlessly with your network, VMS, and cloud platforms.',
                icon: <Camera className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Adaptive Access Management',
                description: 'Automated door schedules, mobile credentials, and role-based access.',
                icon: <Fingerprint className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'AI-Assisted Threat Detection',
                description: 'Real-time alerts for motion, intrusion, loitering, and more.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Future-Secure Infrastructure',
                description: 'Cloud VMS, encrypted streams, and ONVIF-compatible hardware.',
                icon: <Lock className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Physical Security',
            title: 'Protect What Matters Most With Intelligent Physical Security',
            description: 'Modern security isn\'t just cameras on walls — it\'s an integrated, intelligent system that keeps people safe, protects assets, and gives you real-time visibility across every facility.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/services/camera-access-and-security/camera-access-and-security-1.jpg',
            imageAlt: 'Professional security camera surveillance system monitoring',
        },
        sections: [
            {
                id: 'camera-ecosystems',
                navLabel: 'Camera Ecosystems',
                title: 'Connected Camera Ecosystems',
                description: 'Modern camera systems that link seamlessly with your network, VMS, and cloud platforms. Easy deployment and instant remote visibility from any device.',
                linkText: 'Explore camera systems',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Connected camera systems',
            },
            {
                id: 'access-management',
                navLabel: 'Access Management',
                title: 'Adaptive Access Management',
                description: 'Automated door schedules, mobile credentials, and role-based access ensure your people get where they need to be — and no one else does.',
                linkText: 'Learn about access control',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Access management',
            },
            {
                id: 'threat-detection',
                navLabel: 'AI Detection',
                title: 'AI-Assisted Threat Detection',
                description: 'Real-time alerts for motion, intrusion, loitering, license plates, crowding, tailgating, and more — powered by onboard analytics.',
                linkText: 'See AI detection features',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'AI threat detection',
            },
            {
                id: 'credential-control',
                navLabel: 'Credential Control',
                title: 'Effortless Credential Control',
                description: 'Quickly add, remove, or modify credentials for staff, contractors, and visitors across all locations.',
                linkText: 'Manage credentials',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Credential control',
            },
        ],
        featuresSectionTitle: 'Intelligent Physical Security Solutions',
        featuresSectionDescription: 'Arden Logics delivers comprehensive security systems that protect your people, assets, and facilities with modern technology.',
        contentFeatures: [
            {
                icon: <Camera className="stroke-foreground fill-foreground/10" />,
                title: 'Connected camera ecosystems',
                description: 'Modern camera systems that link seamlessly with your network, VMS, and cloud platforms. Easy deployment and instant remote visibility from any device.',
                linkText: 'Explore camera systems →',
                linkHref: '#contact',
            },
            {
                icon: <Fingerprint className="stroke-foreground fill-foreground/10" />,
                title: 'Adaptive access management',
                description: 'Automated door schedules, mobile credentials, and role-based access ensure your people get where they need to be — and no one else does.',
                linkText: 'Learn about access control →',
                linkHref: '#contact',
            },
            {
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
                title: 'AI-assisted threat detection',
                description: 'Real-time alerts for motion, intrusion, loitering, license plates, crowding, tailgating, and more — powered by onboard analytics.',
                linkText: 'See AI detection features →',
                linkHref: '#contact',
            },
            {
                icon: <KeyRound className="stroke-foreground fill-foreground/10" />,
                title: 'Effortless credential control',
                description: 'Quickly add, remove, or modify credentials for staff, contractors, and visitors across all locations.',
                linkText: 'Manage credentials →',
                linkHref: '#contact',
            },
            {
                icon: <Lock className="stroke-foreground fill-foreground/10" />,
                title: 'Future-secure infrastructure',
                description: 'Cloud VMS, encrypted streams, PoE access readers, and ONVIF-compatible hardware built for long-term reliability.',
                linkText: 'See modern security tech →',
                linkHref: '#contact',
            },
            {
                icon: <Network className="stroke-foreground fill-foreground/10" />,
                title: 'Security that integrates everywhere',
                description: 'Tie cameras, access, alarms, and sensors into one unified management dashboard for full situational awareness.',
                linkText: 'Explore unified security →',
                linkHref: '#contact',
            },
        ],
        contentSection: {
            title: 'Outdated Security Creates Invisible Risks',
            highlights: [
                'Threats don\'t announce themselves — and gaps in your physical security can lead to serious consequences.',
                'Most businesses deal with issues like blind spots & poor camera placement, outdated DVR/NVR systems with no backups, and unsecured access points & shared badges.',
                'Organizations also struggle with no unified monitoring or alerting, inconsistent installs across locations, and vendors who don\'t understand IT & security requirements.',
                'If these feel familiar, you\'re not alone — and you don\'t have to live with them.',
            ]
        },
        metricsSection: {
            title: 'Security That Delivers Measurable Protection',
            metrics: [
                { value: '99.9%', label: 'System Uptime' },
                { value: '72%', label: 'Faster Incident Response' },
                { value: '48%', label: 'Reduction in Physical Security Risks' },
                { value: '24/7', label: 'Monitoring & Alerts' },
            ]
        },
        painPoints: [
            'Blind spots & poor camera placement',
            'Outdated DVR/NVR systems with no backups',
            'Unsecured access points & shared badges',
            'No unified monitoring or alerting',
            'Inconsistent installs across locations',
            'Vendors who don\'t understand IT & security requirements',
        ],
        whyArdenBenefits: [
            {
                title: 'IT-Aligned Installation Standards',
                description: 'Cabling, networking, switching, segmentation — done correctly.',
            },
            {
                title: 'Enterprise Hardware Partners',
                description: 'Axis, Verkada, Hanwha, Avigilon, Brivo, OpenPath, Ubiquiti & more.',
            },
            {
                title: 'Unified Security Ecosystems',
                description: 'One pane of glass for cameras, access control, and alerts.',
            },
            {
                title: 'Remote Health Monitoring',
                description: 'Know instantly when something goes offline.',
            },
            {
                title: 'Predictable, Transparent Pricing',
                description: 'No hidden fees, no surprise add-ons, no confusing contracts.',
            },
            {
                title: 'Proactive Security Roadmaps',
                description: 'Plan ahead instead of reacting after the fact.',
            },
        ],
        processSteps: [
            {
                number: '1',
                title: 'Security Assessment & Mapping',
                description: 'We walk your facility, identify vulnerabilities, and design coverage using industry standards and risk analysis.',
            },
            {
                number: '2',
                title: 'System Engineering & Network Architecture',
                description: 'We build a secure backbone for cameras, access controllers, and cloud services using proper VLANs, PoE budgets, and redundant paths.',
            },
            {
                number: '3',
                title: 'Deployment With Precision',
                description: 'Our technicians install cameras, readers, sensors, cabling, and controllers with clean, professional workmanship.',
            },
            {
                number: '4',
                title: 'Validation, Training & Hardening',
                description: 'We test every device, configure alerts, train your staff, and harden your system to protect against tampering and cyber threats.',
            },
            {
                number: '5',
                title: 'Ongoing Monitoring & Support',
                description: 'Firmware updates, alerts, audits, and rapid-response support keep your system healthy and secure 24/7.',
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
            imageSrc: '/services/voip/voip-1.jpg',
            imageAlt: 'Business professional using modern VoIP phone system',
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
        featuresSectionTitle: 'VoIP that works the way your business communicates',
        featuresSectionDescription: 'Arden Logics delivers a flexible, cloud-based phone system designed to keep your team connected from anywhere. With intelligent routing, mobility tools, and crystal-clear call quality, our solution grows with your organization and adapts to how you work.',
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
        },
        whyArdenContent: {
            problemTitle: 'Communication should be effortless.',
            problemSubtitle: 'Yet most phone providers make it frustrating. Delays, outages, and inflexible systems slow your team down and cost your business money. With Arden Logics VoIP, communication becomes a strategic advantage.',
            painPoints: [
                'Dropped calls and poor voice quality',
                'Complicated phone systems no one understands',
                'Slow support when something breaks',
                'Systems that can\'t grow with your business',
            ],
            solutionTitle: 'Experience crystal-clear communication.',
            solutionSubtitle: 'Imagine a phone system that just works every call, every device, every location. With Arden Logics VoIP, you get:',
            benefits: [
                'HD-quality voice and video every time',
                'A system that scales as fast as you grow',
                'Unlimited support and 24/7 monitoring',
                'Predictable, all-inclusive monthly pricing',
                'Seamless mobile + desk phone integration',
                'Advanced features like call queues, IVRs, and SMS',
                'Zero-downtime migration to our platform',
            ],
            differenceText: 'This is the Arden Logics VoIP Difference.',
            differenceButtonText: 'Explore VoIP Solutions',
            frameworkTitle: 'Our Proven VoIP Deployment Framework',
            frameworkSubtitle: 'We ensure a seamless transition to modern cloud communication.',
            frameworkSteps: [
                {
                    number: '1',
                    title: 'Assess & Plan',
                    description: 'We evaluate your current phone systems, call flows, and communication needs to design the ideal VoIP solution.',
                },
                {
                    number: '2',
                    title: 'Configure & Provision',
                    description: 'We set up your cloud phone system, configure call routing, auto-attendants, and provision all devices.',
                },
                {
                    number: '3',
                    title: 'Migrate & Port',
                    description: 'We handle number porting and migration with zero downtime, ensuring business continuity throughout.',
                },
                {
                    number: '4',
                    title: 'Train & Support',
                    description: 'We train your team and provide ongoing 24/7 support to keep your communications running flawlessly.',
                },
            ],
        },
    },
    'cybersecurity': {
        title: 'Cyber Security',
        subtitle: 'Cybersecurity that evolves with your business.',
        description: 'Arden Logics delivers modern, adaptive cybersecurity built to defend your organization from today\'s threats and tomorrow\'s unknowns. From endpoint protection to full threat monitoring, we secure your systems, data, and people with solutions that scale effortlessly.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Advanced Threat Protection',
                description: 'Real-time detection of malware, ransomware, phishing attempts, and zero-day attacks across every device.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Identity & Access Security',
                description: 'Zero-trust authentication, role-based permissions, and identity controls.',
                icon: <Fingerprint className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Continuous Vulnerability Scanning',
                description: 'Automated scans detect system weaknesses, misconfigurations, and exploitable risks.',
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Compliance-Ready Protection',
                description: 'Built-in support for HIPAA, CJIS, PCI, NIST, FERPA, and SOC2 controls.',
                icon: <CheckCircle className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Cybersecurity',
            title: 'Cybersecurity that evolves with your business.',
            description: 'Arden Logics delivers modern, adaptive cybersecurity built to defend your organization from today\'s threats and tomorrow\'s unknowns. From endpoint protection to full threat monitoring, we secure your systems, data, and people with solutions that scale effortlessly.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/services/cyber-security/cyber-security-1.jpg',
            imageAlt: 'Cybersecurity digital protection and network security visualization',
        },
        sections: [
            {
                id: 'assess-identify',
                navLabel: '1. Assess & Identify',
                title: '1. Assess & Identify',
                description: 'We perform full security assessments: endpoints, cloud apps, network weaknesses, identity risks, user behavior, and compliance gaps.',
                linkText: 'Learn More',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Security assessment',
            },
            {
                id: 'secure-configure',
                navLabel: '2. Secure & Configure',
                title: '2. Secure & Configure',
                description: 'We deploy the right security stack — EDR, MFA, logging, policies, segmentation, backups, and email filtering — all tailored to your environment.',
                linkText: 'Learn More',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Security configuration',
            },
            {
                id: 'monitor-detect',
                navLabel: '3. Monitor & Detect',
                title: '3. Monitor & Detect',
                description: 'Our systems and team monitor your infrastructure 24/7, catching threats instantly and validating alerts before they become incidents.',
                linkText: 'Learn More',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Security monitoring',
            },
            {
                id: 'respond-improve',
                navLabel: '4. Respond & Improve',
                title: '4. Respond & Improve',
                description: 'We isolate threats, remediate issues, patch vulnerabilities, and continuously enhance your security posture month after month.',
                linkText: 'Learn More',
                linkHref: '#contact',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Incident response',
            },
        ],
        featuresSectionTitle: 'Advanced threat protection',
        featuresSectionDescription: 'Real-time detection of malware, ransomware, phishing attempts, and zero-day attacks across every device.',
        contentFeatures: [
            {
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
                title: 'Advanced threat protection',
                description: 'Real-time detection of malware, ransomware, phishing attempts, and zero-day attacks across every device.',
                linkText: 'Explore threat protection →',
                linkHref: '#',
            },
            {
                icon: <Fingerprint className="stroke-foreground fill-foreground/10" />,
                title: 'Identity & access security',
                description: 'Zero-trust authentication, role-based permissions, and identity controls that ensure the right people access the right systems.',
                linkText: 'Learn about identity security →',
                linkHref: '#',
            },
            {
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
                title: 'Continuous vulnerability scanning',
                description: 'Automated scans detect system weaknesses, misconfigurations, outdated software, and exploitable risks before attackers find them.',
                linkText: 'View vulnerability insights →',
                linkHref: '#',
            },
            {
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
                title: 'Endpoint monitoring & response',
                description: 'AI-driven endpoint protection keeps workstations, servers, and mobile devices monitored 24/7 — no manual work required.',
                linkText: 'See endpoint defense →',
                linkHref: '#',
            },
            {
                icon: <Lock className="stroke-foreground fill-foreground/10" />,
                title: 'Cloud & network hardening',
                description: 'We secure firewalls, cloud apps, servers, and wireless networks with policies, audits, and best practices rooted in zero-trust frameworks.',
                linkText: 'Strengthen your cloud & network →',
                linkHref: '#',
            },
            {
                icon: <CheckCircle className="stroke-foreground fill-foreground/10" />,
                title: 'Compliance-ready protection',
                description: 'Built-in support for HIPAA, CJIS, PCI, NIST, FERPA, and SOC2 controls — all with audit-friendly reporting.',
                linkText: 'Explore compliance services →',
                linkHref: '#',
            },
        ],
        contentSection: {
            title: 'Experience cybersecurity built for real defense.',
            highlights: [
                'When your organization is protected the right way, you gain control, clarity, and confidence.',
                'Arden Logics delivers modern, adaptive cybersecurity built to defend your organization from today\'s threats and tomorrow\'s unknowns.',
                'From endpoint protection to full threat monitoring, we secure your systems, data, and people with solutions that scale effortlessly.',
                'Security doesn\'t have to be this difficult — it just has to be done right.',
            ]
        },
        metricsSection: {
            title: 'Security that delivers measurable resilience',
            metrics: [
                { value: '99.99%', label: 'Threat detection uptime across monitored environments.' },
                { value: '24/7', label: 'Security operations monitoring & rapid-response availability.' },
                { value: '92%', label: 'Reduction in successful phishing attempts with layered protection.' },
                { value: '3.5x', label: 'Faster incident response with automated alert triaging.' },
            ]
        },
        whyArdenContent: {
            problemTitle: 'Cybersecurity shouldn\'t feel overwhelming.',
            problemSubtitle: 'But most organizations deal with fragmented tools, reactive support, and constant uncertainty. The result? Gaps and vulnerabilities no one notices until it\'s too late.',
            painPoints: [
                'Outdated antivirus or unmanaged endpoints',
                'Weak or reused passwords across the company',
                'No centralized monitoring or alerting',
                'Employees falling for phishing attacks',
                'Unpatched systems and insecure cloud apps',
                'Vendors who don\'t understand compliance requirements',
            ],
            solutionTitle: 'Experience cybersecurity built for real defense.',
            solutionSubtitle: 'When your organization is protected the right way, you gain control, clarity, and confidence. With Arden Logics, you get:',
            benefits: [
                'Real-time SOC monitoring',
                'Zero-trust identity and access controls',
                'Automated patching and security updates',
                'Endpoint protection across laptops, servers, and mobile devices',
                'Secure cloud configuration and policy enforcement',
                'Transparent pricing with no hidden fees',
                'A year-round cybersecurity roadmap',
                'A guarantee of continuous security improvement',
            ],
            differenceText: 'Security doesn\'t have to be this difficult — it just has to be done right.',
            differenceButtonText: 'Explore the features',
            frameworkTitle: 'Our Proven Cybersecurity Framework',
            frameworkSubtitle: 'We build security that evolves with your business.',
            frameworkSteps: [
                {
                    number: '1',
                    title: 'Assess & Identify',
                    description: 'We perform full security assessments: endpoints, cloud apps, network weaknesses, identity risks, user behavior, and compliance gaps.',
                },
                {
                    number: '2',
                    title: 'Secure & Configure',
                    description: 'We deploy the right security stack — EDR, MFA, logging, policies, segmentation, backups, and email filtering — all tailored to your environment.',
                },
                {
                    number: '3',
                    title: 'Monitor & Detect',
                    description: 'Our systems and team monitor your infrastructure 24/7, catching threats instantly and validating alerts before they become incidents.',
                },
                {
                    number: '4',
                    title: 'Respond & Improve',
                    description: 'We isolate threats, remediate issues, patch vulnerabilities, and continuously enhance your security posture month after month.',
                },
            ],
        },
    },
}

export interface SolutionContent {
    title: string
    subtitle: string
    description: string
    ctaText: string
    ctaLink: string
    features: ServiceFeature[]
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

export const SOLUTION_CONTENT: Record<string, SolutionContent> = {
    'enterprise': {
        title: 'Enterprise Solutions',
        subtitle: 'Enterprise-Grade IT Solutions for Large Organizations',
        description: 'Arden Logics delivers comprehensive, scalable IT solutions designed for enterprise organizations. From infrastructure management to security and compliance, we provide the technology foundation your business needs to thrive.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Scalable Infrastructure',
                description: 'Enterprise-grade infrastructure that grows with your organization.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Advanced Security',
                description: 'Multi-layered security and compliance frameworks.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: '24/7 Support',
                description: 'Round-the-clock monitoring and support for critical operations.',
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Strategic Planning',
                description: 'Long-term technology roadmaps aligned with business goals.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Enterprise',
            title: 'Enterprise-Grade IT Solutions for Large Organizations',
            description: 'Arden Logics delivers comprehensive, scalable IT solutions designed for enterprise organizations. From infrastructure management to security and compliance, we provide the technology foundation your business needs to thrive.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Enterprise IT solutions',
        },
    },
    'small-business': {
        title: 'Small Business Solutions',
        subtitle: 'Scalable Solutions Designed for Growing Businesses',
        description: 'Tailored IT solutions that help small businesses compete with larger enterprises. We provide cost-effective technology solutions that scale as your business grows.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Cost-Effective',
                description: 'Affordable solutions designed for small business budgets.',
                icon: <Briefcase className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Easy to Scale',
                description: 'Solutions that grow seamlessly with your business.',
                icon: <Zap className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Quick Setup',
                description: 'Fast deployment to get you up and running quickly.',
                icon: <CheckCircle className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Dedicated Support',
                description: 'Personalized support from our expert team.',
                icon: <Users className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Small Business',
            title: 'Scalable Solutions Designed for Growing Businesses',
            description: 'Tailored IT solutions that help small businesses compete with larger enterprises. We provide cost-effective technology solutions that scale as your business grows.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Small business IT solutions',
        },
    },
    'startups': {
        title: 'Startup Solutions',
        subtitle: 'Flexible Solutions for Innovative Startups',
        description: 'Technology solutions built for startups that need flexibility, speed, and scalability. Get enterprise-grade technology without the enterprise complexity.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Flexible Pricing',
                description: 'Pricing models that adapt to your startup\'s needs.',
                icon: <Zap className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Rapid Deployment',
                description: 'Quick setup to get your startup running fast.',
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Modern Stack',
                description: 'Cutting-edge technology for innovative companies.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Growth-Ready',
                description: 'Infrastructure that scales with your success.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Startups',
            title: 'Flexible Solutions for Innovative Startups',
            description: 'Technology solutions built for startups that need flexibility, speed, and scalability. Get enterprise-grade technology without the enterprise complexity.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Startup IT solutions',
        },
    },
    'tech': {
        title: 'Tech Industry Solutions',
        subtitle: 'Technology-Focused IT Solutions',
        description: 'Specialized IT solutions for technology companies. We understand the unique needs of tech businesses and deliver solutions that keep you ahead of the curve.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Developer-Focused',
                description: 'Solutions designed for technical teams.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Cloud-Native',
                description: 'Modern cloud infrastructure and services.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'API Integration',
                description: 'Seamless integration with your tech stack.',
                icon: <Zap className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Security First',
                description: 'Enterprise security for your code and data.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Tech Industry',
            title: 'Technology-Focused IT Solutions',
            description: 'Specialized IT solutions for technology companies. We understand the unique needs of tech businesses and deliver solutions that keep you ahead of the curve.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Tech industry IT solutions',
        },
    },
    'manufacturing': {
        title: 'Manufacturing Solutions',
        subtitle: 'Industrial Automation and Production IT',
        description: 'IT solutions designed for manufacturing operations. From production line systems to industrial automation, we keep your manufacturing operations running smoothly.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Industrial IoT',
                description: 'Connect and monitor production equipment.',
                icon: <Factory className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Production Systems',
                description: 'IT infrastructure for manufacturing operations.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Uptime Guarantee',
                description: 'Reliable systems for continuous production.',
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Safety Compliance',
                description: 'IT solutions that meet industry safety standards.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Manufacturing',
            title: 'Industrial Automation and Production IT',
            description: 'IT solutions designed for manufacturing operations. From production line systems to industrial automation, we keep your manufacturing operations running smoothly.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Manufacturing IT solutions',
        },
    },
    'construction': {
        title: 'Construction Solutions',
        subtitle: 'Construction Industry IT Solutions',
        description: 'Technology solutions tailored for construction companies. From job site connectivity to project management systems, we support your construction operations.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Job Site Connectivity',
                description: 'Reliable network infrastructure for construction sites.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Mobile Solutions',
                description: 'Technology that works in the field.',
                icon: <Zap className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Project Management',
                description: 'IT systems for construction project coordination.',
                icon: <Building2 className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Safety Systems',
                description: 'Technology solutions for construction safety.',
                icon: <ShieldCheck className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Construction',
            title: 'Construction Industry IT Solutions',
            description: 'Technology solutions tailored for construction companies. From job site connectivity to project management systems, we support your construction operations.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Construction IT solutions',
        },
    },
    'real-estate': {
        title: 'Real Estate Solutions',
        subtitle: 'Real Estate Industry Solutions',
        description: 'Comprehensive IT solutions for real estate professionals. From property management systems to client communication tools, we support your real estate business.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Property Management',
                description: 'IT systems for managing properties and tenants.',
                icon: <Building2 className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Client Communication',
                description: 'Tools for staying connected with clients.',
                icon: <Phone className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Document Management',
                description: 'Secure storage and management of real estate documents.',
                icon: <FileText className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Virtual Tours',
                description: 'Technology solutions for virtual property viewing.',
                icon: <MonitorPlay className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Real Estate',
            title: 'Real Estate Industry Solutions',
            description: 'Comprehensive IT solutions for real estate professionals. From property management systems to client communication tools, we support your real estate business.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Real estate IT solutions',
        },
    },
    'nonprofit': {
        title: 'Nonprofit Solutions',
        subtitle: 'Solutions for Nonprofit Organizations',
        description: 'Affordable IT solutions designed for nonprofit organizations. We help nonprofits maximize their technology impact while staying within budget.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Budget-Friendly',
                description: 'Affordable solutions for nonprofit budgets.',
                icon: <Heart className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Donor Management',
                description: 'Technology for managing donors and fundraising.',
                icon: <Users className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Volunteer Coordination',
                description: 'Systems for organizing and managing volunteers.',
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Grant Compliance',
                description: 'IT solutions that support grant requirements.',
                icon: <CheckCircle className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Nonprofit',
            title: 'Solutions for Nonprofit Organizations',
            description: 'Affordable IT solutions designed for nonprofit organizations. We help nonprofits maximize their technology impact while staying within budget.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Nonprofit IT solutions',
        },
    },
    'automotive': {
        title: 'Automotive Solutions',
        subtitle: 'Automotive Industry IT Solutions',
        description: 'Specialized IT solutions for automotive businesses. From dealership management to service center operations, we support your automotive business.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Dealership Systems',
                description: 'IT infrastructure for automotive dealerships.',
                icon: <Cpu className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Service Management',
                description: 'Technology for managing service operations.',
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Inventory Management',
                description: 'Systems for tracking vehicles and parts.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Customer Relations',
                description: 'CRM and communication tools for automotive businesses.',
                icon: <Users className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Automotive',
            title: 'Automotive Industry IT Solutions',
            description: 'Specialized IT solutions for automotive businesses. From dealership management to service center operations, we support your automotive business.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Automotive IT solutions',
        },
    },
    'transportation-logistics': {
        title: 'Transportation & Logistics Solutions',
        subtitle: 'Transportation and Logistics Solutions',
        description: 'IT solutions for transportation and logistics companies. From fleet management to route optimization, we keep your logistics operations running efficiently.',
        ctaText: 'Contact Us',
        ctaLink: '#contact',
        features: [
            {
                title: 'Fleet Management',
                description: 'Technology for managing transportation fleets.',
                icon: <Network className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Route Optimization',
                description: 'Systems for optimizing delivery routes.',
                icon: <Zap className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Real-Time Tracking',
                description: 'Live tracking of shipments and vehicles.',
                icon: <Activity className="stroke-foreground fill-foreground/10" />,
            },
            {
                title: 'Warehouse Systems',
                description: 'IT solutions for warehouse operations.',
                icon: <Building2 className="stroke-foreground fill-foreground/10" />,
            },
        ],
        heroSection: {
            breadcrumb: 'Solutions / Transportation & Logistics',
            title: 'Transportation and Logistics Solutions',
            description: 'IT solutions for transportation and logistics companies. From fleet management to route optimization, we keep your logistics operations running efficiently.',
            buttonText: 'Contact Us',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Transportation and logistics IT solutions',
        },
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

