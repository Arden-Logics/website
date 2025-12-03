'use client'
import Link from 'next/link'
import { Search, Phone } from 'lucide-react'

export default function TopBar() {
    return (
        <div className="fixed inset-x-0 top-0 z-[60] bg-muted/50 backdrop-blur-sm border-b border-border/40">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="flex items-center justify-end h-10">
                    <div className="flex items-center gap-6 text-xs text-muted-foreground">
                        <Link 
                            href="/search" 
                            className="flex items-center gap-2 text-sm hover:text-foreground transition-colors"
                        >
                            <Search className="size-4" />
                            <span>Search</span>
                        </Link>
                        <Link 
                            href="/home#contact-form" 
                            className="text-sm hover:text-foreground transition-colors"
                        >
                            Support
                        </Link>
                        <a
                            href="tel:8563359895"
                            className="flex items-center gap-1 hover:text-foreground transition-colors"
                        >
                            <Phone className="size-4" />
                            <span>856-335-9895</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
