import ServicePageLayout from '@/components/service-page-layout'
import { MonitorPlay, Mic, Video, Volume2 } from 'lucide-react'

export default function Page() {
    const features = [
        { title: 'Conference Rooms', description: 'State-of-the-art video conferencing setups.', icon: <Video /> },
        { title: 'Digital Signage', description: 'Dynamic displays for branding and information.', icon: <MonitorPlay /> },
        { title: 'Audio Systems', description: 'High-fidelity sound systems for any space.', icon: <Volume2 /> },
        { title: 'Control Systems', description: 'Integrated control for lighting, shades, and AV.', icon: <Mic /> },
    ]
    return <ServicePageLayout title="Audio & Visual" description="Immersive AV experiences for meetings and events." features={features} />
}

