import { cn } from '@/lib/utils'
import Image from 'next/image'
export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className="flex items-center gap-3">
            <Image 
                src="/arden-logics-logo.png" 
                alt="Arden Logics Logo" 
                width={90} 
                height={24}
                className="object-contain"
                priority
            />
            <span className="text-2xl font-bold ml-[-20px]" style={{ fontFamily: 'Impact, sans-serif' }}>
                Arden Logics
            </span>
        </div>
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