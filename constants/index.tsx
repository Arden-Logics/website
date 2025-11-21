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
        heroSection: {
            breadcrumb: 'Solutions / Small to Medium Business',
            title: 'Complete IT management and support you can rely on',
            description: 'Let us handle your technology infrastructure so you can focus on what matters most - growing your business. Our managed IT services provide comprehensive support, monitoring, and strategic guidance.',
            buttonText: 'Get Started',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Business professional managing IT systems',
        },
        sections: [
            {
                id: 'monitoring',
                navLabel: '24/7 Monitoring',
                title: 'Round-the-clock protection for your IT infrastructure',
                description: 'Our advanced monitoring systems keep watch over your entire IT infrastructure 24/7. We detect and resolve issues before they impact your business, ensuring maximum uptime and productivity.',
                linkText: 'Learn about our monitoring services',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'IT monitoring dashboard',
            },
            {
                id: 'cloud',
                navLabel: 'Cloud Solutions',
                title: 'Seamless cloud migration and management',
                description: 'Move to the cloud with confidence. We handle everything from planning and migration to ongoing management, ensuring your cloud infrastructure is optimized for performance and cost.',
                linkText: 'Explore cloud services',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Cloud infrastructure',
            },
            {
                id: 'support',
                navLabel: 'Expert Support',
                title: 'Professional IT support when you need it',
                description: 'Get immediate help from experienced IT professionals. Our team provides fast, effective support to keep your business running smoothly.',
                linkText: 'View support options',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'IT support team',
            },
            {
                id: 'security',
                navLabel: 'Security & Compliance',
                title: 'Protect your business with enterprise-grade security',
                description: 'Stay secure and compliant with our comprehensive security solutions. We implement industry best practices to protect your data and meet regulatory requirements.',
                linkText: 'Discover security features',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Security infrastructure',
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
        heroSection: {
            breadcrumb: 'Solutions / Business Communications',
            title: 'Transform your business communications with VoIP',
            description: 'Experience crystal-clear call quality, advanced features, and significant cost savings. Our VoIP solutions keep you connected from anywhere, on any device.',
            buttonText: 'Request Demo',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Business professional on phone call',
        },
        sections: [
            {
                id: 'cloud-pbx',
                navLabel: 'Cloud PBX',
                title: 'Flexible phone systems that scale with your business',
                description: 'Our cloud-based PBX systems provide all the features of traditional phone systems without the hardware costs. Easily add lines, manage extensions, and access advanced features from anywhere.',
                linkText: 'Explore Cloud PBX features',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Cloud PBX interface',
            },
            {
                id: 'mobile',
                navLabel: 'Mobile Integration',
                title: 'Take your business line anywhere',
                description: 'Seamlessly integrate your business phone system with mobile devices. Make and receive calls using your business number from any location while maintaining professional communication.',
                linkText: 'Learn about mobile features',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Mobile phone integration',
            },
            {
                id: 'analytics',
                navLabel: 'Call Analytics',
                title: 'Comprehensive insights into your communications',
                description: 'Track call volume, monitor performance, and identify trends with detailed analytics. Make data-driven decisions to improve customer service and team productivity.',
                linkText: 'View analytics capabilities',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Call analytics dashboard',
            },
            {
                id: 'quality',
                navLabel: 'HD Voice Quality',
                title: 'Crystal-clear audio for professional communication',
                description: 'Experience superior call quality with HD voice technology. Our optimized network ensures clear, reliable communication for every conversation.',
                linkText: 'Discover voice quality',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'HD voice quality',
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
        heroSection: {
            breadcrumb: 'Solutions / Network Infrastructure',
            title: 'Build a reliable foundation for your technology',
            description: 'Professional network and cabling services that support your current needs and future growth. From structured cabling to fiber optics, we design and install infrastructure you can depend on.',
            buttonText: 'Schedule Consultation',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Network infrastructure',
        },
        sections: [
            {
                id: 'structured-cabling',
                navLabel: 'Structured Cabling',
                title: 'Organized infrastructure that simplifies management',
                description: 'Our structured cabling systems provide an organized, efficient foundation for your network. Clean cable management makes troubleshooting easy and prepares you for future upgrades.',
                linkText: 'Learn about structured cabling',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Structured cabling installation',
            },
            {
                id: 'fiber-optics',
                navLabel: 'Fiber Optics',
                title: 'High-speed fiber for maximum bandwidth',
                description: 'Fiber optic cabling delivers unmatched speed and reliability. Perfect for bandwidth-intensive applications and future-proofing your network infrastructure.',
                linkText: 'Explore fiber optic solutions',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Fiber optic cables',
            },
            {
                id: 'wifi',
                navLabel: 'Wi-Fi Solutions',
                title: 'Enterprise wireless networks with seamless coverage',
                description: 'Deploy secure, high-performance wireless networks throughout your facility. Our Wi-Fi solutions provide reliable coverage, guest access, and centralized management.',
                linkText: 'Discover Wi-Fi capabilities',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Wi-Fi network',
            },
            {
                id: 'design',
                navLabel: 'Network Design',
                title: 'Custom network architecture for your business',
                description: 'Every business is unique. We design network solutions tailored to your specific requirements, ensuring optimal performance and scalability.',
                linkText: 'View design services',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Network design planning',
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
        heroSection: {
            breadcrumb: 'Solutions / Audio Visual',
            title: 'Professional audio-visual solutions that make an impact',
            description: 'Transform your spaces with cutting-edge AV technology. From conference rooms to auditoriums, we create immersive experiences that enhance communication and engagement.',
            buttonText: 'Explore Solutions',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Professional AV setup',
        },
        sections: [
            {
                id: 'conference',
                navLabel: 'Conference Rooms',
                title: 'Video conferencing that brings teams together',
                description: 'Equip your meeting spaces with state-of-the-art video conferencing technology. Crystal-clear video and audio make remote collaboration feel natural and productive.',
                linkText: 'Explore conferencing solutions',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Conference room setup',
            },
            {
                id: 'signage',
                navLabel: 'Digital Signage',
                title: 'Dynamic displays that inform and engage',
                description: 'Deploy digital signage for branding, wayfinding, and real-time information. Manage content centrally and update displays instantly across all locations.',
                linkText: 'Learn about digital signage',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Digital signage display',
            },
            {
                id: 'audio',
                navLabel: 'Audio Systems',
                title: 'Superior sound quality for any environment',
                description: 'Professional audio systems designed for perfect clarity. From boardrooms to auditoriums, we engineer sound solutions that ensure every word is heard.',
                linkText: 'Discover audio solutions',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Audio system',
            },
            {
                id: 'control',
                navLabel: 'Control Systems',
                title: 'Simplified control for complex AV environments',
                description: 'Integrate all your AV equipment into one intuitive control system. Manage lighting, displays, audio, and more with the touch of a button.',
                linkText: 'View control options',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'AV control panel',
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
        heroSection: {
            breadcrumb: 'Solutions / Physical Security',
            title: 'Comprehensive security solutions that protect what matters',
            description: 'Safeguard your people, property, and assets with integrated camera surveillance and access control. Monitor your facilities 24/7 and control entry with advanced security systems.',
            buttonText: 'Get Quote',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Security camera system',
        },
        sections: [
            {
                id: 'surveillance',
                navLabel: 'CCTV Surveillance',
                title: 'High-definition monitoring with intelligent analytics',
                description: 'Deploy advanced camera systems with crystal-clear video quality. AI-powered analytics detect suspicious activity, recognize faces, and provide actionable insights.',
                linkText: 'Explore surveillance options',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'CCTV camera system',
            },
            {
                id: 'access',
                navLabel: 'Access Control',
                title: 'Secure entry management for your facilities',
                description: 'Control who enters your building with keycard, biometric, or mobile-based access systems. Grant and revoke access instantly, and track entry logs in real-time.',
                linkText: 'Learn about access control',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Access control system',
            },
            {
                id: 'remote',
                navLabel: 'Remote Monitoring',
                title: 'Monitor your security from anywhere',
                description: 'Access live video feeds and manage your security systems from any device. Cloud-based monitoring keeps you connected to your facilities 24/7.',
                linkText: 'Discover remote features',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Remote monitoring dashboard',
            },
            {
                id: 'visitor',
                navLabel: 'Visitor Management',
                title: 'Streamlined guest check-in and tracking',
                description: 'Automate visitor registration with digital check-in kiosks. Receive instant notifications when guests arrive and maintain detailed visitor logs.',
                linkText: 'View visitor management',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Visitor management system',
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
        heroSection: {
            breadcrumb: 'Solutions / Small to Medium Business',
            title: 'The secure identity and access management you need',
            description: 'Growth is good. But new opportunities bring new risks. Whether you\'re starting or expanding your workforce, working remotely or hiring contractors, Duo manages and secures identities for you.',
            buttonText: 'Try Duo for free',
            buttonLink: '#contact',
            imageSrc: '/arden-logo.png',
            imageAlt: 'Business professional using tablet',
        },
        sections: [
            {
                id: 'self-service',
                navLabel: 'Self-service security',
                title: 'Self-service security, simple IAM - build for team of any size',
                description: 'Deploy with step-by-step guidance to set up Duo, manage and secure users identities in minutes. If users run into issues with their devices or lost passwords, they receive clear instructions for how to securely access.',
                linkText: 'Learn more about Duo\'s speed to security',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Security dashboard interface',
            },
            {
                id: 'stop-phishing',
                navLabel: 'Stop phishing attacks',
                title: 'Stop phishing attacks before they happen',
                description: 'Duo\'s phishing-resistant MFA protects against credential theft and unauthorized access. With adaptive authentication, you can set policies based on user context to block suspicious activity.',
                linkText: 'Discover phishing protection',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Phishing protection',
            },
            {
                id: 'ai-assistant',
                navLabel: 'AI assistant',
                title: 'Get help from AI-powered security assistant',
                description: 'Duo\'s AI assistant helps you quickly resolve security issues, provides recommendations, and guides you through complex security configurations.',
                linkText: 'Explore AI features',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'AI assistant interface',
            },
            {
                id: 'monitor-report',
                navLabel: 'Monitor and report',
                title: 'Monitor your security posture in real-time',
                description: 'Get comprehensive insights into your security status with detailed reports and analytics. Track authentication attempts, detect anomalies, and ensure compliance.',
                linkText: 'View reporting capabilities',
                linkHref: '#',
                imageSrc: '/arden-logo.png',
                imageAlt: 'Security monitoring dashboard',
            },
        ],
    },
}

