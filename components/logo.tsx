import { cn } from '@/lib/utils'
import Image from 'next/image'
export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <Image 
            src="/arden-logics-logo.png" 
            alt="Arden Logics Logo" 
            width={180} 
            height={48}
            className="object-contain"
            priority
        />
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <Image 
            src="/arden-logics-logo.png" 
            alt="Arden Logics Logo" 
            width={40} 
            height={40}
            className="object-contain"
        />
    )
}