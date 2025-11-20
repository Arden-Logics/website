'use client'
import Link from 'next/link'
import { Search } from 'lucide-react'

export default function TopBar() {
    return (
        <div className="fixed inset-x-0 top-0 z-[60] bg-muted/50 backdrop-blur-sm border-b border-border/40">
            <div className="mx-auto max-w-6xl px-6 lg:px-12">
                <div className="flex items-center justify-end h-10 gap-6">
                    <Link 
                        href="/search" 
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Search className="size-4" />
                        <span>Search</span>
                    </Link>
                    <Link 
                        href="/home#contact-form" 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Support
                    </Link>
                </div>
            </div>
        </div>
    )
}

