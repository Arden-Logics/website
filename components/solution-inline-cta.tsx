'use client'

import { Button } from '@/components/ui/button'
import { ContactSalesDialog } from '@/components/contact-sales-dialog'

interface SolutionInlineCTAProps {
    title?: string
    buttonText?: string
}

export default function SolutionInlineCTA({
    title = "Experience Arden Logics in action",
    buttonText = "Contact us"
}: SolutionInlineCTAProps) {
    return (
        <section className="w-full py-8 md:py-12">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32 flex justify-center">
                <div 
                    className="relative overflow-hidden rounded-3xl px-10 py-14 md:py-16 md:px-16 w-full max-w-6xl"
                    style={{
                        background: `oklch(0.75 0.12 250)`
                    }}
                >
                    {/* Organic flowing gradient overlays */}
                    <div 
                        className="absolute inset-0 opacity-50"
                        style={{
                            background: `
                                radial-gradient(ellipse 80% 100% at 0% 50%, oklch(0.72 0.16 255 / 0.9) 0%, transparent 60%),
                                radial-gradient(ellipse 60% 80% at 30% 20%, oklch(0.75 0.14 260 / 0.7) 0%, transparent 50%),
                                radial-gradient(ellipse 70% 90% at 50% 80%, oklch(0.68 0.19 245 / 0.6) 0%, transparent 50%),
                                radial-gradient(ellipse 50% 70% at 80% 40%, oklch(0.60 0.20 240 / 0.8) 0%, transparent 50%),
                                radial-gradient(ellipse 40% 60% at 100% 60%, oklch(0.55 0.18 235 / 0.7) 0%, transparent 40%)
                            `
                        }}
                    />
                    
                    {/* Soft light highlights */}
                    <div 
                        className="absolute inset-0 opacity-50"
                        style={{
                            background: `
                                radial-gradient(ellipse 40% 50% at 15% 50%, rgba(255,255,255,0.15) 0%, transparent 70%),
                                radial-gradient(ellipse 30% 40% at 45% 30%, rgba(255,255,255,0.1) 0%, transparent 60%),
                                radial-gradient(ellipse 35% 45% at 70% 70%, rgba(255,255,255,0.08) 0%, transparent 50%)
                            `
                        }}
                    />
                    
                    {/* Decorative lines on the right */}
                    <div className="absolute right-0 top-0 bottom-0 w-40 md:w-56 overflow-hidden opacity-25">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute h-[140%] w-px bg-white/50"
                                style={{
                                    right: `${i * 14}px`,
                                    top: '-20%',
                                    transform: 'rotate(12deg)',
                                    transformOrigin: 'center center'
                                }}
                            />
                        ))}
                    </div>
                    
                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">
                            {title}
                        </h3>
                        
                        <ContactSalesDialog>
                            <Button
                                size="lg"
                                className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] shrink-0"
                            >
                                {buttonText}
                            </Button>
                        </ContactSalesDialog>
                    </div>
                </div>
            </div>
        </section>
    )
}
