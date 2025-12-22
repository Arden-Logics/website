import { ReactNode } from 'react'
import { 
    Cloud, 
    Workflow, 
    Shield, 
    Laptop, 
    Fingerprint, 
    Eye, 
    Lock, 
    Users, 
    Camera, 
    Phone,
    Network,
    Building2,
    Cpu,
    Zap,
    Server,
    Wifi,
    Settings,
    BarChart3,
    Globe,
    Clock,
    Wrench,
    MonitorPlay,
    Key,
    FileCheck,
    Activity
} from 'lucide-react'

// Types for Solution Page Content
export interface SolutionSection1 {
    breadcrumb: string
    title: string
    subtitle: string
    description: string
    ctaText: string
    ctaLink: string
    imageSrc?: string
    imageAlt?: string
}

export interface SolutionFeatureItem {
    icon: ReactNode
    title: string
    description: string
}

export interface SolutionSection2 {
    title: string
    features: SolutionFeatureItem[]
}

export interface SolutionSection3 {
    title: string
    description: string
    imageSrc?: string
    imageAlt?: string
}

export interface SolutionSection4 {
    title: string
    description: string
    imageSrc?: string
    imageAlt?: string
}

export interface SolutionSection5 {
    quote: string
    authorName?: string
    authorTitle?: string
    companyName?: string
    companyLogo?: string
    imageSrc?: string
    imageAlt?: string
}

export interface SecurityFeatureItem {
    icon: ReactNode
    title: string
    description: string
}

export interface SolutionSection6 {
    title: string
    features: SecurityFeatureItem[]
}

export interface SolutionPageContent {
    section1: SolutionSection1
    section2: SolutionSection2
    section3: SolutionSection3
    section4: SolutionSection4
    section5: SolutionSection5
    section6: SolutionSection6
}

export const SOLUTION_PAGE_CONTENT: Record<string, SolutionPageContent> = {
    'enterprise': {
        section1: {
            breadcrumb: 'Solutions / Enterprise',
            title: 'Enterprise IT Solutions Built for Scale, Security, and Reliability',
            subtitle: 'Simple, reliable enterprise technology designed for modern organizations',
            description: 'Our enterprise solutions span managed IT services, cybersecurity, cloud infrastructure, networking, VoIP, AV, and physical security delivered by a single accountable partner.',
            ctaText: 'Contact Us',
            ctaLink: '/contact',
            imageSrc: '/industries/enterprise/enterprise-1.jpg',
            imageAlt: 'Enterprise IT solutions'
        },
        section2: {
            title: 'Simplify enterprise operations with one trusted IT partner',
            features: [
                {
                    icon: <Globe className="w-6 h-6" />,
                    title: 'Stay connected across locations',
                    description: 'Ensure reliable communication and connectivity across offices, campuses, and remote sites. Arden Logics designs and manages enterprise networking, VoIP, and collaboration platforms that keep teams connected without downtime or complexity.'
                },
                {
                    icon: <Cloud className="w-6 h-6" />,
                    title: 'Bring the digital workplace anywhere',
                    description: 'Support hybrid and remote work with secure cloud services, identity management, and remote access solutions. Employees can work productively and securely from anywhere while IT maintains full visibility and control.'
                },
                {
                    icon: <Workflow className="w-6 h-6" />,
                    title: 'Streamline IT workflows',
                    description: 'Reduce operational overhead with centralized IT management, monitoring, and support. Arden Logics consolidates systems, vendors, and processes into a single, efficient operating model improving response times and reducing risk.'
                },
                {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Equip your workforce for scale',
                    description: 'Deploy enterprise-ready devices, collaboration tools, and security controls that scale with your organization. From onboarding to expansion, our solutions support growth without rework or disruption.'
                }
            ]
        },
        section3: {
            title: 'Stay ahead of enterprise security, compliance, and operational risk',
            description: 'Enterprise environments face constant pressure from cyber threats, regulatory compliance requirements, and uptime expectations. Arden Logics helps organizations reduce risk with layered security, continuous monitoring, and proactive management across the entire IT stack.',
            imageSrc: '/industries/enterprise/enterprise-2.jpg',
            imageAlt: 'Enterprise security and compliance'
        },
        section4: {
            title: 'Enterprise IT that supports teams everywhere they work',
            description: "Today's enterprise workforce operates across offices, remote environments, and hybrid locations. Arden Logics ensures employees have secure, consistent access to systems and tools without added friction. We focus on simplicity for end users and visibility for leadership, enabling organizations to operate confidently across distributed environments.",
            imageSrc: '/industries/enterprise/enterprise-3.jpg',
            imageAlt: 'Enterprise distributed workforce'
        },
        section5: {
            quote: 'Here is a sample quote - will replace this later',
            authorName: '',
            authorTitle: '',
            companyName: '',
            imageSrc: '/industries/enterprise/enterprise-1.jpg',
            imageAlt: 'Enterprise customer'
        },
        section6: {
            title: 'Enterprise security engineered for scale, not disruption',
            features: [
                {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Protect access across the entire enterprise',
                    description: 'Arden Logics secures enterprise access across headquarters, branch locations, cloud platforms, and remote teams. Our solutions integrate with existing identity systems and infrastructure, providing scalable protection without introducing operational friction.'
                },
                {
                    icon: <Laptop className="w-6 h-6" />,
                    title: 'Maintain security across enterprise devices',
                    description: 'Enterprise teams rely on laptops, desktops, shared systems, and mobile devices every day. We apply consistent security controls, monitoring, and policy enforcement across all endpoints regardless of location or ownership model.'
                },
                {
                    icon: <Fingerprint className="w-6 h-6" />,
                    title: 'Enterprise-grade identity without workflow impact',
                    description: 'Effective security must scale without interrupting productivity. Arden Logics implements identity and access controls designed for large user bases, reducing unnecessary authentication friction while maintaining strong protection and governance.'
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: 'Centralized visibility and risk awareness',
                    description: 'Enterprise leaders need clear oversight. We provide centralized insight into device health, access activity, and security posture, enabling proactive risk management and audit readiness across the organization.'
                }
            ]
        }
    },
    'small-business': {
        section1: {
            breadcrumb: 'Solutions / Small Business',
            title: "Small Business Technology That's Easy to Run and Easy to Trust",
            subtitle: 'Straightforward IT, communications, and security that just works',
            description: 'Arden Logics helps small businesses stay productive and protected with managed IT services, VoIP phone systems, AV solutions, cybersecurity, network and cabling infrastructure, and camera and access control security all managed by a single team that understands your business.',
            ctaText: 'Contact Us',
            ctaLink: '/contact',
            imageSrc: '/industries/small-business/small-business-1.jpg',
            imageAlt: 'Small business IT solutions'
        },
        section2: {
            title: 'Everything your business needs, managed in one place',
            features: [
                {
                    icon: <Phone className="w-6 h-6" />,
                    title: 'Keep your team connected',
                    description: 'Dropped calls, slow internet, and unreliable systems cost time and money. Arden Logics designs and supports business networks, cabling, and VoIP phone systems that keep employees and customers connected without constant troubleshooting.'
                },
                {
                    icon: <Cloud className="w-6 h-6" />,
                    title: 'Work from anywhere without complications',
                    description: 'Whether your team is in the office, at home, or on the move, we support secure access to files, systems, and collaboration tools. Meetings, calls, and shared spaces are powered by cloud services and AV solutions that are simple to use and easy to support.'
                },
                {
                    icon: <Settings className="w-6 h-6" />,
                    title: 'Spend less time dealing with IT',
                    description: "Small businesses shouldn't have to stop working because of technology issues. Our managed IT services handle updates, monitoring, backups, and support so problems are resolved quickly often before you notice them."
                },
                {
                    icon: <Zap className="w-6 h-6" />,
                    title: 'Technology that can grow with you',
                    description: "Hiring new employees or opening another location shouldn't require starting over. Arden Logics installs IT, networking, phones, AV, and security systems that can expand as your business grows."
                }
            ]
        },
        section3: {
            title: 'Protection for your business, data, and workspace',
            description: 'Small businesses are common targets for cyberattacks and theft. Arden Logics helps protect your operation with cybersecurity services, network protection, cameras, and access control systems, backed by proactive monitoring and support.',
            imageSrc: '/industries/small-business/small-business-2.jpg',
            imageAlt: 'Small business security'
        },
        section4: {
            title: 'Built for how small teams actually work',
            description: 'Small businesses move fast and rely on simple, dependable technology. Arden Logics ensures your team can log in, connect, meet, and work securely without jumping through unnecessary hoops. We focus on systems that are easy for employees to use and easy for owners and managers to oversee.',
            imageSrc: '/industries/small-business/small-business-3.jpg',
            imageAlt: 'Small business team collaboration'
        },
        section5: {
            quote: 'Here is a sample quote - will replace this later',
            authorName: '',
            authorTitle: '',
            companyName: '',
            imageSrc: '/industries/small-business/small-business-1.jpg',
            imageAlt: 'Small business customer'
        },
        section6: {
            title: 'Security that fits your business not the other way around',
            features: [
                {
                    icon: <Lock className="w-6 h-6" />,
                    title: 'Control who can access your systems',
                    description: 'We help limit access to business systems and data so only approved users can get in without adding confusing steps to everyday work.'
                },
                {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Protect computers, networks, and facilities',
                    description: 'From laptops and Wi-Fi to cameras and door access systems, we secure the tools and spaces your business relies on every day.'
                },
                {
                    icon: <Key className="w-6 h-6" />,
                    title: 'Simple login and access rules',
                    description: 'We use straightforward authentication and access controls that keep your business safe while staying easy for employees to use.'
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: 'Clear insight without technical noise',
                    description: "You don't need dashboards full of alerts. We keep an eye on system health, security issues, and risks and let you know when something actually needs attention."
                }
            ]
        }
    },
    'startups': {
        section1: {
            breadcrumb: 'Solutions / Startups',
            title: 'Technology Built for Startups That Need to Move Fast',
            subtitle: 'Scalable IT, communications, and security without unnecessary overhead',
            description: 'Arden Logics helps startups launch and grow with managed IT services, cybersecurity, VoIP phone systems, AV solutions, network and cabling infrastructure, and camera and access control security delivered by a single partner who builds for today and plans for tomorrow.',
            ctaText: 'Contact Us',
            ctaLink: '/contact',
            imageSrc: '/industries/startups/startups-1.jpg',
            imageAlt: 'Startup IT solutions'
        },
        section2: {
            title: 'Launch faster with one technology partner',
            features: [
                {
                    icon: <Zap className="w-6 h-6" />,
                    title: 'Get connected from day one',
                    description: "Startups don't have time for unreliable technology. Arden Logics sets up networks, structured cabling, and VoIP phone systems that work from day one so teams can communicate clearly without delays or rework."
                },
                {
                    icon: <Cloud className="w-6 h-6" />,
                    title: 'Build a workplace that works anywhere',
                    description: 'Whether your team is remote, hybrid, or sharing a small office, we deploy cloud services, collaboration tools, and AV solutions that make meetings and teamwork simple, consistent, and easy to support.'
                },
                {
                    icon: <Cpu className="w-6 h-6" />,
                    title: 'Spend time building not troubleshooting',
                    description: "Founders shouldn't be IT support. Our managed IT services handle monitoring, updates, backups, and day-to-day issues so your team can stay focused on building products and growing the business."
                },
                {
                    icon: <Activity className="w-6 h-6" />,
                    title: 'Technology that grows as you do',
                    description: 'Early decisions matter. Arden Logics designs IT, networking, VoIP, AV, and security systems that scale smoothly as you hire, move offices, or expand without locking you into costly or rigid setups.'
                }
            ]
        },
        section3: {
            title: 'Protect your startup from early security risks',
            description: 'Startups are frequent targets for cyber threats and data loss. Arden Logics helps protect your ideas, data, and systems with cybersecurity services, endpoint protection, network security, camera systems, and access controls without slowing your team down.',
            imageSrc: '/industries/startups/startups-2.jpg',
            imageAlt: 'Startup security protection'
        },
        section4: {
            title: 'Designed for fast-moving teams',
            description: 'Startups need technology that keeps up. Arden Logics ensures your team can onboard quickly, collaborate easily, and access systems securely without complex processes or unnecessary roadblocks. We design systems that are simple for users and flexible enough to change as your business evolves.',
            imageSrc: '/industries/startups/startups-3.jpg',
            imageAlt: 'Startup team agility'
        },
        section5: {
            quote: 'Here is a sample quote - will replace this later',
            authorName: '',
            authorTitle: '',
            companyName: '',
            imageSrc: '/industries/startups/startups-1.jpg',
            imageAlt: 'Startup customer'
        },
        section6: {
            title: 'Security that enables progress not friction',
            features: [
                {
                    icon: <Lock className="w-6 h-6" />,
                    title: 'Control access without slowing your team',
                    description: 'We help manage access to systems, cloud platforms, and data so the right people have access and changes can be made quickly as your team grows.'
                },
                {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Protect devices, networks, and shared spaces',
                    description: 'From laptops and Wi-Fi to cameras and access control systems, we apply consistent protection to keep your people and assets secure.'
                },
                {
                    icon: <Fingerprint className="w-6 h-6" />,
                    title: 'Simple identity and access management',
                    description: 'We implement easy-to-use authentication and access controls that provide security without creating obstacles for new hires or fast-moving teams.'
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: 'Visibility without overengineering',
                    description: "You don't need enterprise dashboards. We keep an eye on your systems, security posture, and risks and step in before issues slow you down."
                }
            ]
        }
    },
    'tech': {
        section1: {
            breadcrumb: 'Solutions / Tech',
            title: 'Technology Infrastructure Built for Modern Tech Teams',
            subtitle: 'Reliable IT, communications, and security that support innovation and uptime',
            description: 'Arden Logics supports technology-driven organizations with managed IT services, cybersecurity, VoIP phone systems, AV solutions, network and cabling infrastructure, and camera and access control security designed to keep engineering, product, and operations teams moving without interruption.',
            ctaText: 'Contact Us',
            ctaLink: '/contact',
            imageSrc: '/industries/tech/tech-1.jpg',
            imageAlt: 'Tech industry IT solutions'
        },
        section2: {
            title: 'One technology partner for your entire environment',
            features: [
                {
                    icon: <Network className="w-6 h-6" />,
                    title: 'Reliable connectivity for development and operations',
                    description: 'Technology teams depend on fast, stable systems. Arden Logics designs and supports high-performance networks, structured cabling, and VoIP phone systems that enable collaboration, customer communication, and day-to-day operations without instability.'
                },
                {
                    icon: <MonitorPlay className="w-6 h-6" />,
                    title: 'Collaboration that works for technical teams',
                    description: 'From daily standups to board meetings, we deploy cloud collaboration tools and AV solutions that make meetings, demos, and internal communication reliable whether teams are on-site or remote.'
                },
                {
                    icon: <Settings className="w-6 h-6" />,
                    title: 'Reduce internal IT distractions',
                    description: "Engineering teams shouldn't be pulled into infrastructure issues. Our managed IT services handle system monitoring, patching, backups, and user support so internal resources stay focused on product and delivery."
                },
                {
                    icon: <Activity className="w-6 h-6" />,
                    title: 'Infrastructure that evolves with your platform',
                    description: 'As teams scale, environments change quickly. Arden Logics builds IT, networking, VoIP, AV, and security systems that adapt to growth, new tools, and changing workflows without constant redesign.'
                }
            ]
        },
        section3: {
            title: 'Security for data, systems, and intellectual property',
            description: 'Technology organizations are frequent targets for cyberattacks and data exposure. Arden Logics helps protect code, customer data, and internal systems with cybersecurity services, endpoint protection, network security, camera systems, and access control, backed by continuous monitoring and rapid response.',
            imageSrc: '/industries/tech/tech-2.jpg',
            imageAlt: 'Tech security and data protection'
        },
        section4: {
            title: 'Built for distributed and hybrid tech teams',
            description: 'Modern tech teams work across offices, home environments, and global locations. Arden Logics ensures secure access to systems, dependable connectivity, and consistent communications without adding complexity to development workflows. We focus on tools that engineers trust and platforms leadership can confidently oversee.',
            imageSrc: '/industries/tech/tech-3.jpg',
            imageAlt: 'Distributed tech teams'
        },
        section5: {
            quote: 'Here is a sample quote - will replace this later',
            authorName: '',
            authorTitle: '',
            companyName: '',
            imageSrc: '/industries/tech/tech-1.jpg',
            imageAlt: 'Tech customer'
        },
        section6: {
            title: 'Practical security that supports innovation',
            features: [
                {
                    icon: <Lock className="w-6 h-6" />,
                    title: 'Control access to critical platforms and data',
                    description: 'We help manage access to development tools, cloud platforms, and internal systems so permissions stay aligned as teams change.'
                },
                {
                    icon: <Server className="w-6 h-6" />,
                    title: 'Secure devices, networks, and offices',
                    description: 'From laptops and servers to network equipment, cameras, and access control systems, we apply consistent protection across the environments tech teams rely on.'
                },
                {
                    icon: <Fingerprint className="w-6 h-6" />,
                    title: 'Identity management without unnecessary friction',
                    description: 'We implement streamlined authentication and access controls that maintain security while minimizing interruptions to daily workflows.'
                },
                {
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: 'Visibility without operational noise',
                    description: 'We provide insight into system health and security posture without overwhelming teams with alerts so risks are addressed before they impact delivery.'
                }
            ]
        }
    },
    'manufacturing': {
        section1: {
            breadcrumb: 'Solutions / Manufacturing',
            title: 'Technology Designed for the Manufacturing Floor',
            subtitle: 'Reliable systems, communications, and security that keep production moving',
            description: 'Arden Logics supports manufacturing organizations with managed IT services, network and cabling infrastructure, VoIP phone systems, AV solutions, cybersecurity, and camera and access control security built to operate reliably across plants, warehouses, and administrative offices.',
            ctaText: 'Contact Us',
            ctaLink: '/contact',
            imageSrc: '/industries/manufacturing/manufacturing-1.jpg',
            imageAlt: 'Manufacturing IT solutions'
        },
        section2: {
            title: 'One technology partner for operations, facilities, and offices',
            features: [
                {
                    icon: <Network className="w-6 h-6" />,
                    title: 'Connectivity that holds up in production environments',
                    description: 'Manufacturing facilities rely on stable infrastructure. Arden Logics designs and maintains industrial-ready networks, structured cabling, and plant-wide connectivity that support production systems, offices, and distributed facilities without constant intervention.'
                },
                {
                    icon: <Phone className="w-6 h-6" />,
                    title: 'Communication across shifts, teams, and facilities',
                    description: 'Clear communication is critical for safety and efficiency. We deploy VoIP phone systems and AV solutions that support shift changes, training, safety briefings, and coordination between floor personnel and management.'
                },
                {
                    icon: <Clock className="w-6 h-6" />,
                    title: 'Less downtime, fewer disruptions',
                    description: "Manufacturing teams can't pause production to fix IT issues. Our managed IT services proactively monitor systems, handle updates, and resolve issues quickly reducing unplanned downtime and operational interruptions."
                },
                {
                    icon: <Activity className="w-6 h-6" />,
                    title: 'Built to support expansion and change',
                    description: 'As production lines grow or facilities expand, Arden Logics installs IT systems, networks, phones, AV, and security infrastructure that can adapt without shutting down operations or requiring major rework.'
                }
            ]
        },
        section3: {
            title: 'Protect production systems, facilities, and people',
            description: 'Manufacturers face unique digital and physical risks. Arden Logics delivers cybersecurity services, endpoint and network protection, camera systems, and access control solutions to help protect production systems, intellectual property, and facility access points.',
            imageSrc: '/industries/manufacturing/manufacturing-2.jpg',
            imageAlt: 'Manufacturing security'
        },
        section4: {
            title: 'Designed for plant floors, warehouses, and offices',
            description: 'Manufacturing environments span office spaces, production floors, loading areas, and remote facilities. Arden Logics ensures secure access to systems, reliable connectivity, and clear communication designed specifically for industrial and mixed-use environments. We focus on solutions that are practical for operators and visible for leadership.',
            imageSrc: '/industries/manufacturing/manufacturing-3.jpg',
            imageAlt: 'Manufacturing environments'
        },
        section5: {
            quote: 'Here is a sample quote - will replace this later',
            authorName: '',
            authorTitle: '',
            companyName: '',
            imageSrc: '/industries/manufacturing/manufacturing-1.jpg',
            imageAlt: 'Manufacturing customer'
        },
        section6: {
            title: 'Security that supports safety and continuity',
            features: [
                {
                    icon: <Lock className="w-6 h-6" />,
                    title: 'Control access to critical systems and areas',
                    description: 'We help manage who can access production systems, business applications, and secure areas using role-based access and facility controls aligned to job functions.'
                },
                {
                    icon: <Server className="w-6 h-6" />,
                    title: 'Secure equipment, infrastructure, and facilities',
                    description: 'From workstations and servers to network hardware, cameras, and door access systems, Arden Logics applies consistent security and monitoring throughout the facility.'
                },
                {
                    icon: <Key className="w-6 h-6" />,
                    title: 'Straightforward access and authentication',
                    description: 'We implement simple access rules that protect sensitive systems while remaining easy for floor staff and supervisors to use.'
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: 'Visibility across operations and infrastructure',
                    description: 'We provide insight into system status, security events, and facility activity allowing potential issues to be identified and addressed before they impact production.'
                }
            ]
        }
    },
    'construction': {
        section1: {
            breadcrumb: 'Solutions / Construction',
            title: 'Technology Built for Construction Teams & Job Sites',
            subtitle: 'Reliable IT, communications, and security that keep projects moving',
            description: 'Arden Logics supports construction firms with managed IT services, network and cabling infrastructure, VoIP phone systems, AV solutions, cybersecurity, and camera and access control systems built to operate across headquarters, job trailers, and active project sites.',
            ctaText: 'Contact Us',
            ctaLink: '/contact',
            imageSrc: '/industries/construction/construction-1.jpg',
            imageAlt: 'Construction IT solutions'
        },
        section2: {
            title: 'One technology partner for field crews, superintendents, and office staff',
            features: [
                {
                    icon: <Wifi className="w-6 h-6" />,
                    title: 'Connectivity that survives real job-site conditions',
                    description: 'Construction environments are tough on equipment. Arden Logics deploys ruggedized networks, structured cabling, wireless bridges, and trailer connectivity that keep your operations online from site trailers to fabrication areas to staging zones.'
                },
                {
                    icon: <Phone className="w-6 h-6" />,
                    title: 'Communication that keeps teams aligned',
                    description: 'Clear communication prevents delays and mistakes. We deliver VoIP and AV systems that support field coordination, safety briefings, subcontractor management, and communication between the job site and the office.'
                },
                {
                    icon: <Clock className="w-6 h-6" />,
                    title: 'Minimize downtime, delays, and onsite disruptions',
                    description: "Construction timelines can't pause for IT problems. Our managed IT services proactively monitor systems, update equipment, and resolve issues before they slow down crews or impact critical project deadlines."
                },
                {
                    icon: <Activity className="w-6 h-6" />,
                    title: 'Built to support mobility, expansion, and turnover',
                    description: 'Whether opening new job sites, scaling project teams, or moving trailers, Arden Logics installs IT, networking, phones, AV, and security systems that can be deployed fast and adjusted as projects evolve.'
                }
            ]
        },
        section3: {
            title: 'Protect people, equipment, materials, and data',
            description: 'Construction faces both physical and digital risks. Arden Logics provides cybersecurity protections, endpoint security, surveillance solutions, and controlled access systems that help safeguard job sites, trailers, project data, and high-value equipment.',
            imageSrc: '/industries/construction/construction-2.jpg',
            imageAlt: 'Construction site security'
        },
        section4: {
            title: 'Designed for trailers, job sites, warehouses, and offices',
            description: 'Construction operations span multiple environments onsite trailers, fabrication shops, staging yards, warehouses, and corporate HQ. Arden Logics ensures secure access to project systems, reliable connectivity, and clear communication across every location. We focus on solutions crews can use easily and leadership can rely on for visibility.',
            imageSrc: '/industries/construction/construction-3.jpg',
            imageAlt: 'Construction environments'
        },
        section5: {
            quote: 'Here is a sample quote - will replace this later',
            authorName: '',
            authorTitle: '',
            companyName: '',
            imageSrc: '/industries/construction/construction-1.jpg',
            imageAlt: 'Construction customer'
        },
        section6: {
            title: 'Security that supports safety and project continuity',
            features: [
                {
                    icon: <Lock className="w-6 h-6" />,
                    title: 'Control access to job sites and sensitive areas',
                    description: 'We manage who can access trailers, storage areas, IT systems, and secure zones using role-based access and credentialed entry.'
                },
                {
                    icon: <Camera className="w-6 h-6" />,
                    title: 'Secure equipment, devices, and infrastructure',
                    description: 'From laptops and tablets to cameras, switches, project management systems, and door access controls, we apply consistent security and monitoring across every site.'
                },
                {
                    icon: <Key className="w-6 h-6" />,
                    title: 'Simple, straightforward authentication for crews',
                    description: 'We implement easy-to-use access policies that protect project data while accommodating fast-moving field teams and subcontractors.'
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: 'Visibility across sites and infrastructure',
                    description: 'We give leadership real insight into system status, security events, and site activity helping identify issues before they affect safety, budgets, or project timelines.'
                }
            ]
        }
    },
    'real-estate': {
        section1: {
            breadcrumb: 'Solutions / Real Estate',
            title: 'Technology That Keeps Properties Occupied, Secure, and Running',
            subtitle: 'Operational systems that support tenants, staff, and ownership',
            description: "Real estate technology isn't about features it's about keeping buildings functional, tenants satisfied, and issues resolved quickly. Arden Logics supports property owners and operators with managed IT services, VoIP phone systems, AV solutions, cybersecurity, network and cabling infrastructure, and camera and access control security designed around how properties are actually run.",
            ctaText: 'Contact Us',
            ctaLink: '/contact',
            imageSrc: '/industries/real-estate/real-estate-1.jpg',
            imageAlt: 'Real estate IT solutions'
        },
        section2: {
            title: 'Built around properties, not IT departments',
            features: [
                {
                    icon: <Building2 className="w-6 h-6" />,
                    title: 'Tenant experience starts with reliable systems',
                    description: "When phones don't ring, Wi-Fi drops, or systems fail, tenants notice immediately. Arden Logics designs networks, cabling, and communications systems that quietly do their job so tenants can do theirs — without constant service complaints."
                },
                {
                    icon: <MonitorPlay className="w-6 h-6" />,
                    title: 'Simple tools for property and leasing teams',
                    description: "Property managers don't have time to fight technology. We deploy VoIP systems, shared displays, and AV solutions that make leasing offices, conference rooms, and common areas easy to use for staff, vendors, and tenants alike."
                },
                {
                    icon: <Wrench className="w-6 h-6" />,
                    title: 'Fewer issues becoming tenant problems',
                    description: 'Technology problems turn into tenant escalations fast. Our managed IT services focus on proactive monitoring and fast resolution so small issues don\'t become lease or reputation risks.'
                },
                {
                    icon: <Activity className="w-6 h-6" />,
                    title: 'Technology that adjusts as buildings change',
                    description: 'Tenants move. Spaces get reconfigured. Arden Logics installs IT, network, phone, AV, and security infrastructure that can be adjusted without tearing walls open or starting over.'
                }
            ]
        },
        section3: {
            title: 'Protect the asset, physically and digitally',
            description: 'Properties are valuable assets with real exposure. Arden Logics delivers cybersecurity, secure networking, camera systems, and access control that protect buildings, tenant information, and restricted areas without making properties feel locked down.',
            imageSrc: '/industries/real-estate/real-estate-2.jpg',
            imageAlt: 'Real estate asset protection'
        },
        section4: {
            title: 'Designed for owners, managers, and on-site staff',
            description: 'Real estate teams balance tenants, vendors, and ownership expectations every day. Arden Logics provides systems that are simple for on-site staff to manage and transparent for ownership to oversee without requiring technical expertise.',
            imageSrc: '/industries/real-estate/real-estate-3.jpg',
            imageAlt: 'Real estate team management'
        },
        section5: {
            quote: 'Here is a sample quote - will replace this later',
            authorName: '',
            authorTitle: '',
            companyName: '',
            imageSrc: '/industries/real-estate/real-estate-1.jpg',
            imageAlt: 'Real estate customer'
        },
        section6: {
            title: 'Security that supports safety, liability management, and trust',
            features: [
                {
                    icon: <Key className="w-6 h-6" />,
                    title: 'Control access without constant rekeying',
                    description: 'We implement access control systems for offices, shared spaces, garages, and restricted areas so permissions can be adjusted quickly as tenants, vendors, and staff change.'
                },
                {
                    icon: <Camera className="w-6 h-6" />,
                    title: 'See what happened when it matters',
                    description: 'Camera systems provide clear visibility into entrances, shared spaces, and sensitive areas helping resolve disputes, support investigations, and reduce liability without intrusive oversight.'
                },
                {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Protect leasing, financial, and tenant data',
                    description: 'From rent systems to financial platforms, Arden Logics applies cybersecurity protections that safeguard sensitive business and tenant information across offices and cloud systems.'
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: 'Visibility without day-to-day involvement',
                    description: "Ownership doesn't need daily noise just clarity. We provide high-level insight into system health, access activity, and security events so risks are identified early and handled appropriately."
                }
            ]
        }
    },
    'nonprofit': {
        section1: {
            breadcrumb: 'Solutions / Nonprofit',
            title: 'Technology That Supports Your Mission Not Your Overhead',
            subtitle: 'Practical IT, communication, and security for nonprofit organizations',
            description: 'Nonprofits rely on trust, accountability, and efficiency to fulfill their mission. Arden Logics provides managed IT services, VoIP phone systems, AV solutions, cybersecurity, network and cabling infrastructure, and camera and access control security designed to support staff, volunteers, and communities without wasting limited resources.',
            ctaText: 'Contact Us',
            ctaLink: '/contact',
            imageSrc: '/industries/non-profit/non-profit-1.jpg',
            imageAlt: 'Nonprofit IT solutions'
        },
        section2: {
            title: 'Built to serve people, not create complexity',
            features: [
                {
                    icon: <Network className="w-6 h-6" />,
                    title: 'Technology that stays out of the way',
                    description: 'Your team should be focused on programs, not IT problems. Arden Logics designs networks and cabling that are dependable and simple, so staff and volunteers can access systems without interruptions or technical hurdles.'
                },
                {
                    icon: <Phone className="w-6 h-6" />,
                    title: 'Clear communication across teams and locations',
                    description: 'Nonprofits often operate across offices, community spaces, and remote environments. We implement VoIP phone systems and AV solutions that make it easy to connect staff, volunteers, boards, and partners regardless of location or budget constraints.'
                },
                {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Reduce the burden on small internal teams',
                    description: "Most nonprofits don't have dedicated IT departments. Our managed IT services provide monitoring, maintenance, updates, and responsive support so technology issues don't fall on already-stretched staff."
                },
                {
                    icon: <Activity className="w-6 h-6" />,
                    title: 'Flexible systems that adapt to change',
                    description: 'Programs grow, grants change, and staffing fluctuates. Arden Logics builds IT systems, networks, phones, AV, and security solutions that can adjust as your organization evolves without costly rebuilds.'
                }
            ]
        },
        section3: {
            title: 'Protect donor data, client information, and facilities',
            description: 'Nonprofits handle sensitive donor, client, and community data and often operate in shared or public spaces. Arden Logics delivers cybersecurity, secure networking, camera systems, and access control solutions to help protect information, facilities, and the people you serve.',
            imageSrc: '/industries/non-profit/non-profit-2.jpg',
            imageAlt: 'Nonprofit data protection'
        },
        section4: {
            title: 'Designed for staff, volunteers, and leadership',
            description: 'Nonprofit environments include full-time staff, part-time workers, and volunteers with varying levels of technical experience. Arden Logics ensures systems are easy to use, easy to manage, and easy to secure while providing leadership with confidence and oversight.',
            imageSrc: '/industries/non-profit/non-profit-3.jpg',
            imageAlt: 'Nonprofit team support'
        },
        section5: {
            quote: 'Here is a sample quote - will replace this later',
            authorName: '',
            authorTitle: '',
            companyName: '',
            imageSrc: '/industries/non-profit/non-profit-1.jpg',
            imageAlt: 'Nonprofit customer'
        },
        section6: {
            title: 'Security rooted in trust, safety, and accountability',
            features: [
                {
                    icon: <Lock className="w-6 h-6" />,
                    title: 'Protect access without creating barriers',
                    description: 'We help manage access to systems and facilities so staff and volunteers can do their work while sensitive information and restricted areas remain protected.'
                },
                {
                    icon: <Camera className="w-6 h-6" />,
                    title: 'Monitor spaces to promote safety',
                    description: 'Deploy camera systems in offices, community areas, and facilities to enhance safety, deter incidents, and provide clarity when issues arise without creating an unwelcoming environment.'
                },
                {
                    icon: <FileCheck className="w-6 h-6" />,
                    title: 'Secure systems that support compliance and trust',
                    description: 'From donor databases to cloud platforms, Arden Logics applies cybersecurity protections that help safeguard information, reduce risk, and support audit and reporting requirements.'
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: 'Oversight without constant supervision',
                    description: 'Leadership needs visibility, not noise. We provide clear insight into system health and security posture so risks are identified early and addressed responsibly.'
                }
            ]
        }
    },
    'automotive': {
        section1: {
            breadcrumb: 'Solutions / Automotive',
            title: 'Technology That Keeps Dealerships Moving',
            subtitle: 'Reliable IT, communications, and security for sales, service, and operations',
            description: 'Automotive businesses rely on technology to sell vehicles, service customers, and keep operations running smoothly. Arden Logics provides managed IT services, VoIP phone systems, AV solutions, cybersecurity, network and cabling infrastructure, and camera and access control security designed specifically for dealerships, service centers, and automotive operations.',
            ctaText: 'Contact Us',
            ctaLink: '/contact',
            imageSrc: '/industries/automotive/automotive-1.jpg',
            imageAlt: 'Automotive IT solutions'
        },
        section2: {
            title: 'Built around sales floors, service lanes, and back offices',
            features: [
                {
                    icon: <Network className="w-6 h-6" />,
                    title: 'Technology that supports the sales experience',
                    description: 'When systems lag or phones drop, deals stall. Arden Logics designs networks, cabling, and communications systems that keep sales teams connected to inventory systems, lenders, and customers without interruption so conversations move forward, not sideways.'
                },
                {
                    icon: <Phone className="w-6 h-6" />,
                    title: 'Communication that connects customers and departments',
                    description: 'From inbound sales calls to service scheduling and parts coordination, we implement VoIP phone systems and AV solutions that keep sales, service advisors, technicians, and management aligned throughout the day.'
                },
                {
                    icon: <Clock className="w-6 h-6" />,
                    title: 'Less downtime during peak business hours',
                    description: "Dealerships can't afford technology failures during busy periods. Our managed IT services proactively monitor systems, handle updates off-hours, and resolve issues quickly minimizing disruptions to sales and service operations."
                },
                {
                    icon: <Activity className="w-6 h-6" />,
                    title: 'Built to support growth and multi-location operations',
                    description: 'Whether expanding departments or adding locations, Arden Logics deploys IT, networking, phones, AV, and security systems that scale across showrooms, service bays, and offices without breaking existing workflows.'
                }
            ]
        },
        section3: {
            title: 'Protect customer data, inventory, and facilities',
            description: 'Automotive businesses handle sensitive customer information and valuable assets. Arden Logics delivers cybersecurity services, secure networking, camera systems, and access control solutions to help protect financial data, vehicle inventory, and restricted areas.',
            imageSrc: '/industries/automotive/automotive-2.jpg',
            imageAlt: 'Automotive security'
        },
        section4: {
            title: 'Designed for sales teams, service staff, and leadership',
            description: 'Arden Logics ensures secure system access, reliable connectivity, and clear communication for salespeople, technicians, service advisors, and management without slowing down operations. Our solutions are easy to use on the floor and simple to oversee at the management level.',
            imageSrc: '/industries/automotive/automotive-3.jpg',
            imageAlt: 'Automotive team support'
        },
        section5: {
            quote: 'Here is a sample quote - will replace this later',
            authorName: '',
            authorTitle: '',
            companyName: '',
            imageSrc: '/industries/automotive/automotive-1.jpg',
            imageAlt: 'Automotive customer'
        },
        section6: {
            title: 'Security focused on customer trust and operational control',
            features: [
                {
                    icon: <Lock className="w-6 h-6" />,
                    title: 'Control access across departments and facilities',
                    description: 'Manage access to offices, service areas, parts departments, and restricted spaces using access control systems that reflect job roles and shift schedules.'
                },
                {
                    icon: <Camera className="w-6 h-6" />,
                    title: 'Monitor facilities and protect inventory',
                    description: 'Deploy camera systems across lots, service areas, and facilities to deter theft, improve safety, and provide clear records when incidents occur.'
                },
                {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Secure systems that handle sensitive data',
                    description: 'From financing applications to dealership management systems, Arden Logics applies cybersecurity protections that safeguard customer and business data across networks and cloud platforms.'
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: 'Visibility without distraction',
                    description: 'We provide insight into system health, access activity, and security events allowing issues to be addressed quickly without pulling focus from customers or operations.'
                }
            ]
        }
    },
    'transportation-logistics': {
        section1: {
            breadcrumb: 'Solutions / Transportation & Logistics',
            title: 'Technology That Keeps Freight Moving and Operations Visible',
            subtitle: 'Reliable IT, communications, and security for transportation and logistics operations',
            description: 'Transportation and logistics depend on timing, coordination, and uninterrupted systems. Arden Logics delivers managed IT services, VoIP phone systems, AV solutions, cybersecurity, network and cabling infrastructure, and camera and access control security built for terminals, dispatch centers, warehouses, and distributed operations.',
            ctaText: 'Contact Us',
            ctaLink: '/contact',
            imageSrc: '/industries/logistics/logistics-1.jpg',
            imageAlt: 'Transportation and logistics IT solutions'
        },
        section2: {
            title: 'Built around movement, handoffs, and time-sensitive operations',
            features: [
                {
                    icon: <Server className="w-6 h-6" />,
                    title: 'Systems that stay up when schedules matter',
                    description: "Dispatch, routing, inventory, and tracking systems can't afford outages. Arden Logics designs networks and cabling infrastructure that support logistics platforms, warehouse systems, and operations software without instability or bottlenecks."
                },
                {
                    icon: <Phone className="w-6 h-6" />,
                    title: 'Clear communication between drivers, dispatch, and facilities',
                    description: 'Missed messages create delays. We deploy VoIP phone systems and AV solutions that keep dispatchers, drivers, warehouse teams, and management aligned supporting call flows, shift changes, and real-time coordination.'
                },
                {
                    icon: <Wrench className="w-6 h-6" />,
                    title: 'Fewer interruptions to daily operations',
                    description: "Logistics teams don't have time to troubleshoot technology. Our managed IT services proactively monitor systems, handle updates, and resolve issues quickly so operations keep moving without escalation."
                },
                {
                    icon: <Activity className="w-6 h-6" />,
                    title: 'Infrastructure that supports growing routes and locations',
                    description: 'As routes expand and facilities change, technology must keep up. Arden Logics builds IT, networking, phones, AV, and security solutions that scale across terminals, hubs, and warehouses without reengineering core systems.'
                }
            ]
        },
        section3: {
            title: 'Protect data, cargo, and facilities',
            description: 'Transportation and logistics environments face both cyber risk and physical exposure. Arden Logics provides cybersecurity services, network protection, camera systems, and access control solutions to help safeguard operational systems, sensitive data, vehicles, and facilities.',
            imageSrc: '/industries/logistics/logistics-2.jpg',
            imageAlt: 'Transportation security'
        },
        section4: {
            title: 'Designed for dispatch centers, warehouses, and mobile teams',
            description: 'Logistics teams operate across offices, yards, warehouses, and vehicles. Arden Logics ensures secure access to systems, reliable connectivity, and clear communications whether teams are at a terminal, on the road, or coordinating remotely. Our solutions are practical for frontline operations and visible to leadership without overcomplication.',
            imageSrc: '/industries/logistics/logistics-3.jpg',
            imageAlt: 'Transportation team support'
        },
        section5: {
            quote: 'Here is a sample quote - will replace this later',
            authorName: '',
            authorTitle: '',
            companyName: '',
            imageSrc: '/industries/logistics/logistics-1.jpg',
            imageAlt: 'Transportation customer'
        },
        section6: {
            title: 'Security focused on accountability, chain of custody, and access control',
            features: [
                {
                    icon: <Lock className="w-6 h-6" />,
                    title: 'Control access to facilities and operations',
                    description: 'We implement access control systems for terminals, warehouses, offices, and restricted areas ensuring only authorized personnel can enter sensitive spaces.'
                },
                {
                    icon: <Camera className="w-6 h-6" />,
                    title: 'Monitor activity across yards and facilities',
                    description: 'Deploy camera systems to monitor loading docks, yards, entrances, and high-risk areas helping deter theft, investigate incidents, and maintain accountability.'
                },
                {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Secure systems that manage routes and data',
                    description: 'From dispatch platforms to inventory and tracking systems, Arden Logics applies cybersecurity protections to safeguard operational data across networks and cloud environments.'
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: 'Visibility without slowing the operation',
                    description: 'We provide clear insight into system health, access activity, and security events so issues are identified early without disrupting day-to-day operations.'
                }
            ]
        }
    }
}
