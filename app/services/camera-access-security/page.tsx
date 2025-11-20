import ServicePageLayout from '@/components/service-page-layout'
import { Camera, Lock, Eye, UserCheck } from 'lucide-react'

export default function Page() {
    const features = [
        { title: 'CCTV Surveillance', description: 'High-definition cameras for 24/7 monitoring.', icon: <Camera /> },
        { title: 'Access Control', description: 'Keycard and biometric entry systems.', icon: <Lock /> },
        { title: 'Remote Monitoring', description: 'View your security feed from anywhere.', icon: <Eye /> },
        { title: 'Visitor Management', description: 'Track and manage guests securely.', icon: <UserCheck /> },
    ]
    return <ServicePageLayout title="Camera Access & Security" description="Comprehensive security solutions for physical safety." features={features} />
}

