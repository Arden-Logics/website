import ServicePageLayout from '@/components/service-page-layout'
import { Server, Activity, Cloud, Shield } from 'lucide-react'

export default function Page() {
    const features = [
        { title: 'Proactive Monitoring', description: '24/7 monitoring of your systems to prevent downtime.', icon: <Activity /> },
        { title: 'Server Management', description: 'Expert management of on-premise and cloud servers.', icon: <Server /> },
        { title: 'Cloud Solutions', description: 'Seamless migration and management of cloud infrastructure.', icon: <Cloud /> },
        { title: 'Security Compliance', description: 'Ensuring your IT infrastructure meets industry standards.', icon: <Shield /> },
    ]
    return <ServicePageLayout title="MSP Managed IT" description="Comprehensive IT management and support to keep your business running smoothly." features={features} />
}

