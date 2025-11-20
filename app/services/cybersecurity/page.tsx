import ServicePageLayout from '@/components/service-page-layout'
import { ShieldCheck, Lock, FileWarning, Users } from 'lucide-react'

export default function Page() {
    const features = [
        { title: 'Threat Detection', description: 'Real-time identification of potential security threats.', icon: <ShieldCheck /> },
        { title: 'Firewall Management', description: 'Robust network defense against unauthorized access.', icon: <Lock /> },
        { title: 'Security Audits', description: 'Comprehensive assessment of your security posture.', icon: <FileWarning /> },
        { title: 'Employee Training', description: 'Educating your team on cybersecurity best practices.', icon: <Users /> },
    ]
    return <ServicePageLayout title="Cyber Security" description="Advanced protection against evolving digital threats." features={features} />
}
