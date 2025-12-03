'use client'

import { cn } from '@/lib/utils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
    Building, 
    Activity, 
    Shield, 
    Cloud, 
    HardDrive, 
    Headphones, 
    Download, 
    Phone, 
    Wifi,
    Search
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

export default function FAQs() {
    const faqItems = useMemo(
        () => [
            {
                group: 'General Business',
                icon: <Building />,
                items: [
                    {
                        id: 'item-1',
                        question: 'What does Arden Logics actually do?',
                        answer: 'We provide fully managed IT services, cybersecurity, VoIP, audio-visual solutions, and IT infrastructure support for organizations of all sizes.',
                    },
                    {
                        id: 'item-2',
                        question: 'What industries do you support?',
                        answer: 'Healthcare, education, finance, retail, law firms, manufacturing, nonprofits, and multi-location businesses.',
                    },
                    {
                        id: 'item-3',
                        question: 'Do we need to replace our current IT team to work with you?',
                        answer: 'No — we can fully manage IT or work alongside your internal team in a co-managed model.',
                    },
                    {
                        id: 'item-4',
                        question: 'What makes you different from other MSPs?',
                        answer: 'We prioritize transparency, predictable billing, rapid support, modern security standards, and customer-first infrastructure design.',
                    },
                    {
                        id: 'item-5',
                        question: 'How quickly can we get support?',
                        answer: 'Most tickets receive a response within the same day; emergencies receive immediate priority.',
                    },
                    {
                        id: 'item-6',
                        question: 'Do you offer 24/7 emergency support?',
                        answer: 'Yes — critical outages and security incidents are handled around the clock.',
                    },
                    {
                        id: 'item-7',
                        question: 'Are your technicians U.S.-based?',
                        answer: 'Yes — all support is delivered by U.S.-based staff.',
                    },
                    {
                        id: 'item-8',
                        question: 'How long is onboarding?',
                        answer: 'Onboarding typically takes 1–4 weeks depending on environment complexity.',
                    },
                    {
                        id: 'item-9',
                        question: 'Do you perform an assessment before starting?',
                        answer: 'Yes — every client receives a full technical discovery and security evaluation.',
                    },
                    {
                        id: 'item-10',
                        question: 'Do you document our entire environment?',
                        answer: 'Yes — including diagrams, credentials, devices, licensing, and security configurations.',
                    },
                    {
                        id: 'item-11',
                        question: 'Can you manage multiple locations?',
                        answer: 'Absolutely — we specialize in multi-site deployments and remote workforce support.',
                    },
                    {
                        id: 'item-12',
                        question: 'Do you manage vendor relationships?',
                        answer: 'Yes — we handle ISPs, software vendors, security tools, and telecom carriers.',
                    },
                    {
                        id: 'item-13',
                        question: 'Do you assist with compliance?',
                        answer: 'Yes — HIPAA, PCI, FERPA, and industry-specific security requirements.',
                    },
                    {
                        id: 'item-14',
                        question: 'Do you help plan technology budgets?',
                        answer: 'Yes — we create 1–3 year roadmaps and refresh cycles.',
                    },
                    {
                        id: 'item-15',
                        question: 'Can you replace outdated infrastructure?',
                        answer: 'Yes — we upgrade networks, servers, storage, and communication systems.',
                    },
                    {
                        id: 'item-16',
                        question: 'Do you offer cybersecurity insurance assistance?',
                        answer: 'Yes — we help clients meet underwriting requirements.',
                    },
                    {
                        id: 'item-17',
                        question: 'What happens if our primary IT contact is unavailable?',
                        answer: 'Our entire team has access to your documentation, so nothing stops moving.',
                    },
                    {
                        id: 'item-18',
                        question: 'Do you handle software licensing?',
                        answer: 'Yes — including renewals, onboarding, and compliance.',
                    },
                    {
                        id: 'item-19',
                        question: 'Can you help us choose new hardware?',
                        answer: 'Yes — we recommend and source business-grade devices based on your needs.',
                    },
                    {
                        id: 'item-20',
                        question: 'Do you provide training for our staff?',
                        answer: 'Yes — for VoIP, cybersecurity, new systems, and productivity tools.',
                    },
                ],
            },
            {
                group: 'RMM',
                icon: <Activity />,
                items: [
                    {
                        id: 'item-21',
                        question: 'What does RMM mean?',
                        answer: 'It\'s a system that continuously monitors and maintains your devices automatically.',
                    },
                    {
                        id: 'item-22',
                        question: 'What does RMM detect?',
                        answer: 'Outages, malware, performance issues, failing hardware, patch needs, and system instability.',
                    },
                    {
                        id: 'item-23',
                        question: 'Does RMM slow computers down?',
                        answer: 'No — it runs silently and efficiently in the background.',
                    },
                    {
                        id: 'item-24',
                        question: 'Does RMM include antivirus?',
                        answer: 'Yes — with next-gen security built in.',
                    },
                    {
                        id: 'item-25',
                        question: 'Can you monitor servers too?',
                        answer: 'Yes — servers, workstations, firewalls, switches, and cloud systems.',
                    },
                    {
                        id: 'item-26',
                        question: 'Can users turn monitoring off?',
                        answer: 'No — monitoring is enforced for security.',
                    },
                    {
                        id: 'item-27',
                        question: 'How often is monitoring active?',
                        answer: '24/7/365.',
                    },
                    {
                        id: 'item-28',
                        question: 'Can RMM fix problems automatically?',
                        answer: 'Yes — many issues are resolved automatically through scripts and automations.',
                    },
                    {
                        id: 'item-29',
                        question: 'Do we get reports?',
                        answer: 'Yes — monthly, quarterly, or on-demand.',
                    },
                    {
                        id: 'item-30',
                        question: 'Can we request custom alerts?',
                        answer: 'Absolutely — alerts are fully customizable.',
                    },
                ],
            },
            {
                group: 'Cybersecurity',
                icon: <Shield />,
                items: [
                    {
                        id: 'item-31',
                        question: 'What cybersecurity protections do you provide?',
                        answer: 'Threat detection, antivirus, email security, MFA, encryption, firewall management, and more.',
                    },
                    {
                        id: 'item-32',
                        question: 'Do you protect remote workers?',
                        answer: 'Yes — with VPN, MFA, monitoring, and device policies.',
                    },
                    {
                        id: 'item-33',
                        question: 'Do you block phishing attempts?',
                        answer: 'Yes — malicious links, attachments, and spoofing are filtered out.',
                    },
                    {
                        id: 'item-34',
                        question: 'What if someone clicks a malicious link?',
                        answer: 'We investigate, isolate threats, remove malware, and reset credentials.',
                    },
                    {
                        id: 'item-35',
                        question: 'Do you offer security awareness training?',
                        answer: 'Yes — phishing simulations and training modules.',
                    },
                    {
                        id: 'item-36',
                        question: 'What is MFA and why do we need it?',
                        answer: 'Multi-Factor Authentication prevents unauthorized access even if passwords leak.',
                    },
                    {
                        id: 'item-37',
                        question: 'Do you offer zero-trust security?',
                        answer: 'Yes — we implement identity-based access controls.',
                    },
                    {
                        id: 'item-38',
                        question: 'Do you perform penetration testing?',
                        answer: 'We provide vulnerability scanning and partner-based penetration testing.',
                    },
                    {
                        id: 'item-39',
                        question: 'Do you secure Wi-Fi networks?',
                        answer: 'Yes — with WPA3, VLAN separation, and guest network controls.',
                    },
                    {
                        id: 'item-40',
                        question: 'Can you secure company mobile devices?',
                        answer: 'Yes — with mobile device management (MDM).',
                    },
                    {
                        id: 'item-41',
                        question: 'What happens if a cyberattack occurs?',
                        answer: 'We isolate systems, remove threats, restore data, and secure vulnerabilities.',
                    },
                    {
                        id: 'item-42',
                        question: 'Do you log and audit system access?',
                        answer: 'Yes — for compliance and incident tracking.',
                    },
                    {
                        id: 'item-43',
                        question: 'Do you manage firewalls?',
                        answer: 'Yes — configuration, monitoring, firmware updates, and rule auditing.',
                    },
                    {
                        id: 'item-44',
                        question: 'Do you support SIEM or SOC tools?',
                        answer: 'Yes — we integrate with security monitoring platforms.',
                    },
                    {
                        id: 'item-45',
                        question: 'Can you detect ransomware?',
                        answer: 'Yes — our tools identify and stop suspicious encryption activity.',
                    },
                    {
                        id: 'item-46',
                        question: 'Do you offer password policy enforcement?',
                        answer: 'Yes — we enforce secure, rotating password rules.',
                    },
                    {
                        id: 'item-47',
                        question: 'Do you help with cybersecurity insurance questionnaires?',
                        answer: 'Yes — assessments, documentation, and remediation planning.',
                    },
                    {
                        id: 'item-48',
                        question: 'Do you perform risk assessments?',
                        answer: 'Yes — organization-wide security evaluations.',
                    },
                    {
                        id: 'item-49',
                        question: 'Do you handle data breach reporting?',
                        answer: 'Yes — we help prepare required notifications.',
                    },
                    {
                        id: 'item-50',
                        question: 'Can you restore encrypted files?',
                        answer: 'Yes — using backups, snapshots, or recovery tools.',
                    },
                ],
            },
            {
                group: 'Email & Cloud',
                icon: <Cloud />,
                items: [
                    {
                        id: 'item-51',
                        question: 'Do you manage Microsoft 365 and Google Workspace?',
                        answer: 'Yes — including licensing, mail flow, permissions, and setup.',
                    },
                    {
                        id: 'item-52',
                        question: 'Can you migrate email from our current provider?',
                        answer: 'Yes — with minimal downtime.',
                    },
                    {
                        id: 'item-53',
                        question: 'Do you configure spam and phishing filters?',
                        answer: 'Yes — with advanced protection.',
                    },
                    {
                        id: 'item-54',
                        question: 'Do you support shared mailboxes?',
                        answer: 'Yes — including role-based access.',
                    },
                    {
                        id: 'item-55',
                        question: 'Can you fix email deliverability issues?',
                        answer: 'Yes — through SPF, DKIM, DMARC, and DNS tuning.',
                    },
                    {
                        id: 'item-56',
                        question: 'Do you support mobile email?',
                        answer: 'Yes — phone, tablet, laptop.',
                    },
                    {
                        id: 'item-57',
                        question: 'Can you archive email for compliance?',
                        answer: 'Yes — with retention and indexing.',
                    },
                    {
                        id: 'item-58',
                        question: 'Do you encrypt email?',
                        answer: 'Yes — automatically or by keyword.',
                    },
                    {
                        id: 'item-59',
                        question: 'Can you manage contacts and groups?',
                        answer: 'Yes — distribution lists and group permissions.',
                    },
                    {
                        id: 'item-60',
                        question: 'Do you help with OneDrive/SharePoint permissions?',
                        answer: 'Yes — structure, controls, and documentation.',
                    },
                    {
                        id: 'item-61',
                        question: 'Do you assist with Teams or Google Meet setup?',
                        answer: 'Yes — configuration and integration.',
                    },
                    {
                        id: 'item-62',
                        question: 'Do you manage cloud storage permissions?',
                        answer: 'Yes — access control for files and folders.',
                    },
                    {
                        id: 'item-63',
                        question: 'Do you optimize cloud performance?',
                        answer: 'Yes — for storage, bandwidth, and sync.',
                    },
                    {
                        id: 'item-64',
                        question: 'Can you troubleshoot sync errors?',
                        answer: 'Yes — OneDrive, SharePoint, Drive, etc.',
                    },
                    {
                        id: 'item-65',
                        question: 'Do you back up cloud data?',
                        answer: 'Yes — 365/Google backups are included in our continuity services.',
                    },
                ],
            },
            {
                group: 'Backup & Recovery',
                icon: <HardDrive />,
                items: [
                    {
                        id: 'item-66',
                        question: 'What do you back up?',
                        answer: 'Servers, desktops, laptops, cloud accounts, applications, and databases.',
                    },
                    {
                        id: 'item-67',
                        question: 'Do you back up remote employees?',
                        answer: 'Yes — using cloud endpoint agents.',
                    },
                    {
                        id: 'item-68',
                        question: 'Where are backups stored?',
                        answer: 'Encrypted cloud storage with redundancy.',
                    },
                    {
                        id: 'item-69',
                        question: 'How often do backups run?',
                        answer: 'Every few minutes to nightly, depending on configuration.',
                    },
                    {
                        id: 'item-70',
                        question: 'Can you restore individual files?',
                        answer: 'Yes — quickly and easily.',
                    },
                    {
                        id: 'item-71',
                        question: 'Do you support full system recovery?',
                        answer: 'Yes — bare-metal or image-based restores.',
                    },
                    {
                        id: 'item-72',
                        question: 'What is your typical recovery time?',
                        answer: 'Minutes for files, hours for full systems.',
                    },
                    {
                        id: 'item-73',
                        question: 'Do you test backups?',
                        answer: 'Yes — regularly to ensure recoverability.',
                    },
                    {
                        id: 'item-74',
                        question: 'Can backups run while we work?',
                        answer: 'Yes — backups are non-intrusive.',
                    },
                    {
                        id: 'item-75',
                        question: 'Can you recover accidentally deleted files?',
                        answer: 'Yes — through snapshots or archives.',
                    },
                ],
            },
            {
                group: 'End-User Support',
                icon: <Headphones />,
                items: [
                    {
                        id: 'item-76',
                        question: 'Do you handle user onboarding?',
                        answer: 'Yes — accounts, email, devices, permissions.',
                    },
                    {
                        id: 'item-77',
                        question: 'Do you handle user offboarding?',
                        answer: 'Yes — access removal, device lock, data retention.',
                    },
                    {
                        id: 'item-78',
                        question: 'Do you support remote workers?',
                        answer: 'Yes — full remote management and troubleshooting.',
                    },
                    {
                        id: 'item-79',
                        question: 'How do users contact support?',
                        answer: 'Phone, email, ticket portal, or chat (if enabled).',
                    },
                    {
                        id: 'item-80',
                        question: 'Do you offer loaner devices?',
                        answer: 'Yes — for select clients.',
                    },
                    {
                        id: 'item-81',
                        question: 'Do you help install new software?',
                        answer: 'Yes — installation, configuration, and licensing.',
                    },
                    {
                        id: 'item-82',
                        question: 'Do you support printers and scanners?',
                        answer: 'Yes — including drivers and network printing.',
                    },
                    {
                        id: 'item-83',
                        question: 'Do you troubleshoot slow computers?',
                        answer: 'Yes — diagnosing hardware or software issues.',
                    },
                    {
                        id: 'item-84',
                        question: 'Do you configure Wi-Fi access?',
                        answer: 'Yes — for staff and guests.',
                    },
                    {
                        id: 'item-85',
                        question: 'Do you provide device recommendations?',
                        answer: 'Yes — based on needs and budget.',
                    },
                    {
                        id: 'item-86',
                        question: 'Can users track ticket status?',
                        answer: 'Yes — through the client portal.',
                    },
                    {
                        id: 'item-87',
                        question: 'Can you remote into devices?',
                        answer: 'Yes — securely, with user approval.',
                    },
                    {
                        id: 'item-88',
                        question: 'Do you manage permissions?',
                        answer: 'Yes — least-privilege access is enforced.',
                    },
                    {
                        id: 'item-89',
                        question: 'Do you handle password resets?',
                        answer: 'Yes — identity-verified resets.',
                    },
                    {
                        id: 'item-90',
                        question: 'Do you provide cybersecurity coaching to users?',
                        answer: 'Yes — ongoing training and support.',
                    },
                ],
            },
            {
                group: 'Patch Management',
                icon: <Download />,
                items: [
                    {
                        id: 'item-91',
                        question: 'How often do you deploy patches?',
                        answer: 'Continuously — critical patches deploy immediately.',
                    },
                    {
                        id: 'item-92',
                        question: 'Do patch installs cause downtime?',
                        answer: 'Restarts may occur but are scheduled.',
                    },
                    {
                        id: 'item-93',
                        question: 'Can patches break software?',
                        answer: 'Rarely — but we test updates before pushing them.',
                    },
                    {
                        id: 'item-94',
                        question: 'Can we delay patches?',
                        answer: 'Temporarily, but deadlines ensure security compliance.',
                    },
                    {
                        id: 'item-95',
                        question: 'Do you patch third-party software too?',
                        answer: 'Yes — browsers, PDF tools, Office apps, and more.',
                    },
                ],
            },
            {
                group: 'VoIP',
                icon: <Phone />,
                items: [
                    {
                        id: 'item-96',
                        question: 'Can we port our existing phone numbers?',
                        answer: 'Yes — from any carrier.',
                    },
                    {
                        id: 'item-97',
                        question: 'Do you support call menus and routing?',
                        answer: 'Yes — fully customized IVRs.',
                    },
                    {
                        id: 'item-98',
                        question: 'Do you offer ring groups?',
                        answer: 'Yes — simultaneous or round-robin.',
                    },
                    {
                        id: 'item-99',
                        question: 'Do you support mobile and desktop apps?',
                        answer: 'Yes — full-featured softphones.',
                    },
                    {
                        id: 'item-100',
                        question: 'Do you provide call recording?',
                        answer: 'Yes — per user or system-wide.',
                    },
                    {
                        id: 'item-101',
                        question: 'Do you provide voicemail-to-email?',
                        answer: 'Yes — with audio files and optional transcriptions.',
                    },
                    {
                        id: 'item-102',
                        question: 'What if our internet goes down?',
                        answer: 'Calls fail over to mobile or backup numbers.',
                    },
                    {
                        id: 'item-103',
                        question: 'Do you support call analytics?',
                        answer: 'Yes — user, group, and queue insights.',
                    },
                    {
                        id: 'item-104',
                        question: 'Do you support faxing?',
                        answer: 'Yes — via ATA or digital fax.',
                    },
                    {
                        id: 'item-105',
                        question: 'Do you support holiday and after-hours routing?',
                        answer: 'Yes — for business schedules and emergency lines.',
                    },
                    {
                        id: 'item-106',
                        question: 'Can we have multiple auto attendants?',
                        answer: 'Yes — per department or location.',
                    },
                    {
                        id: 'item-107',
                        question: 'Can we block spam callers?',
                        answer: 'Yes — blacklist controls are built in.',
                    },
                    {
                        id: 'item-108',
                        question: 'Do you integrate with CRM systems?',
                        answer: 'Yes — screen pop and call logging features are available.',
                    },
                    {
                        id: 'item-109',
                        question: 'Do you offer call center features?',
                        answer: 'Yes — queues, analytics, agent status, and KPIs.',
                    },
                    {
                        id: 'item-110',
                        question: 'Do you support paging/intercom?',
                        answer: 'Yes — for office-wide announcements.',
                    },
                ],
            },
            {
                group: 'AV & Infrastructure',
                icon: <Wifi />,
                items: [
                    {
                        id: 'item-111',
                        question: 'What AV services do you provide?',
                        answer: 'Conference rooms, displays, microphones, speakers, control systems, scheduling panels.',
                    },
                    {
                        id: 'item-112',
                        question: 'Do you install Teams and Zoom Rooms?',
                        answer: 'Yes — certified installations.',
                    },
                    {
                        id: 'item-113',
                        question: 'Do you provide digital signage?',
                        answer: 'Yes — managed cloud-based signage.',
                    },
                    {
                        id: 'item-114',
                        question: 'Do you offer AV programming?',
                        answer: 'Yes — custom controls and automation.',
                    },
                    {
                        id: 'item-115',
                        question: 'Do you install security cameras?',
                        answer: 'Yes — cloud or on-prem systems.',
                    },
                    {
                        id: 'item-116',
                        question: 'Do your cameras have analytics?',
                        answer: 'Yes — motion detection, vehicle tracking, time-based search.',
                    },
                    {
                        id: 'item-117',
                        question: 'Do you install access control systems?',
                        answer: 'Yes — mobile, keycard, PIN, or biometric.',
                    },
                    {
                        id: 'item-118',
                        question: 'Do you run network cabling?',
                        answer: 'Yes — CAT6, fiber, demarc extensions, and rack buildouts.',
                    },
                    {
                        id: 'item-119',
                        question: 'Do you label and document cabling?',
                        answer: 'Yes — for mapping and serviceability.',
                    },
                    {
                        id: 'item-120',
                        question: 'Can you manage our entire building technology stack?',
                        answer: 'Yes — from cabling to cameras, AV to networking, VoIP to IT services.',
                    },
                ],
            },
        ],
        []
    )

    const groups = useMemo(() => faqItems.map((g) => g.group.toLowerCase()), [faqItems])
    const [activeGroup, setActiveGroup] = useState<string>(groups[0] ?? '')
    const [searchQuery, setSearchQuery] = useState('')

    // Filter FAQs based on search query
    const filteredFaqItems = useMemo(() => {
        if (!searchQuery.trim()) return faqItems

        const query = searchQuery.toLowerCase()
        return faqItems.map(group => ({
            ...group,
            items: group.items.filter(item =>
                item.question.toLowerCase().includes(query) ||
                item.answer.toLowerCase().includes(query)
            )
        })).filter(group => group.items.length > 0)
    }, [faqItems, searchQuery])

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll<HTMLDivElement>('[data-faq-group]'))
        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))
                if (visible[0]) {
                    const group = visible[0].target.getAttribute('data-faq-group') || ''
                    if (group && group !== activeGroup) setActiveGroup(group)
                }
            },
            {
                root: null,
                threshold: [0.35, 0.6, 0.8],
                rootMargin: '0px 0px -20% 0px',
            }
        )

        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [activeGroup])

    return (
        <section className="bg-background pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="w-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
                {/* Header - Centered */}
                <div className="flex flex-col items-center text-center max-md:px-6 mb-8 md:mb-12">
                    <h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg max-w-2xl">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                {/* Search Bar */}
                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-5" />
                        <input
                            type="text"
                            placeholder="Search FAQs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-card border border-foreground/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                {/* Category Navigation - Horizontal */}
                {filteredFaqItems.length > 0 && (
                    <div className="sticky top-0 z-10 mb-8 md:mb-12 bg-background py-4">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {filteredFaqItems.map((item) => {
                                const groupId = item.group.toLowerCase()
                                const isActive = activeGroup === groupId
                                return (
                                    <Link
                                        key={item.group}
                                        href={`#${groupId}`}
                                        data-state={isActive ? 'active' : 'inactive'}
                                        className="text-muted-foreground group">
                                        <span className={cn('flex w-fit items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors [&>svg]:size-4', isActive ? 'bg-card ring-foreground/5 text-primary font-medium shadow-sm ring-1' : 'hover:text-foreground group-hover:bg-foreground/5')}>
                                            {item.icon}
                                            <span>{item.group}</span>
                                        </span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* FAQ Items - Centered */}
                <div className="flex justify-center">
                    <div className="w-full max-w-3xl space-y-12">
                        {filteredFaqItems.length > 0 ? (
                            filteredFaqItems.map((item) => (
                                <div
                                    className="space-y-4"
                                    key={item.group}
                                    id={item.group.toLowerCase()}
                                    data-faq-group={item.group.toLowerCase()}>
                                    <h3 className="text-foreground text-lg font-semibold">{item.group}</h3>
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="-space-y-1">
                                        {item.items.map((faqItem) => (
                                            <AccordionItem
                                                key={faqItem.id}
                                                value={faqItem.id}
                                                className="data-[state=open]:bg-card data-[state=open]:ring-foreground/5 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm data-[state=open]:ring-1">
                                                <AccordionTrigger className="cursor-pointer rounded-none border-b text-base transition-none hover:no-underline data-[state=open]:border-transparent">{faqItem.question}</AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="text-muted-foreground text-base">{faqItem.answer}</p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground text-lg">No FAQs found matching your search. Try different keywords.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}