import ServicePageLayout from '@/components/service-page-layout'
import { Share2, Wifi, Server, Settings } from 'lucide-react'

export default function Page() {
    const features = [
        { title: 'Structured Cabling', description: 'Organized and efficient cabling for your office.', icon: <Share2 /> },
        { title: 'Fiber Optics', description: 'High-speed fiber optic installation and termination.', icon: <Server /> },
        { title: 'Wi-Fi Solutions', description: 'Robust wireless network design and implementation.', icon: <Wifi /> },
        { title: 'Network Design', description: 'Custom network architecture tailored to your needs.', icon: <Settings /> },
    ]
    return <ServicePageLayout title="Network & Cabling" description="Robust infrastructure for reliable connectivity." features={features} />
}

