import Image from 'next/image'
export const Logo = ({}: { className?: string; uniColor?: boolean }) => {
    return (
        <div className="flex items-center gap-3">
            <Image 
                src="/arden-logo.png" 
                alt="Arden 360 - Managed IT Services and Technology Solutions" 
                width={90} 
                height={24}
                className="object-contain"
                priority
            />
            <span className="text-2xl font-bold ml-[-20px]" style={{ fontFamily: 'Impact, sans-serif' }}>
                Arden 360
            </span>
        </div>
    )
}

export const LogoIcon = ({}: { className?: string; uniColor?: boolean }) => {
    return (
        <Image 
            src="/arden-logo.png" 
            alt="Arden 360 company logo" 
            width={40} 
            height={40}
            className="object-contain"
        />
    )
}