import ServicePageLayout from '@/components/service-page-layout'
import { Phone, Smartphone, BarChart, Mic } from 'lucide-react'

export default function Page() {
    const features = [
        { title: 'Cloud PBX', description: 'Flexible cloud-based phone systems for modern businesses.', icon: <Phone /> },
        { title: 'Mobile Integration', description: 'Take your business line with you anywhere on your mobile device.', icon: <Smartphone /> },
        { title: 'Call Analytics', description: 'Detailed insights into call volume and performance.', icon: <BarChart /> },
        { title: 'Crystal Clear Audio', description: 'HD voice quality for professional communication.', icon: <Mic /> },
    ]
    return <ServicePageLayout title="VoIP Solutions" description="Modern voice communication systems for a connected workforce." features={features} />
}
