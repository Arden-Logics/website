'use client'
import Link from 'next/link'
import { Search, Mail, Phone } from 'lucide-react'

export default function TopBar() {
    return (
        <div className="fixed inset-x-0 top-0 z-[60] bg-muted/50 backdrop-blur-sm border-b border-border/40">
            <div className="mx-auto max-w-6xl px-6 lg:px-12">
                <div className="flex items-center justify-between h-10 gap-6">
                    <div className="flex items-center gap-5 text-xs text-muted-foreground">
                        <a
                            href="mailto:info@junipertechteam.com"
                            className="flex items-center gap-1 hover:text-foreground transition-colors"
                        >
                            <Mail className="size-4" />
                            <span>info@junipertechteam.com</span>
                        </a>
                        <a
                            href="tel:8563359895"
                            className="flex items-center gap-1 hover:text-foreground transition-colors"
                        >
                            <Phone className="size-4" />
                            <span>856-335-9895</span>
                        </a>
                    </div>
                    <div className="flex items-center justify-end gap-6">
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
        </div>
    )
}
