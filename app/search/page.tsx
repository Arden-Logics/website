'use client'
import { useState } from 'react'
import { Search as SearchIcon, FileText, Network, Shield, Mic, Video, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const dummyResults = [
    {
        title: 'Managed IT Services & MSP Solutions',
        description: 'Comprehensive managed IT services to keep your business running smoothly. 24/7 monitoring, proactive maintenance, and expert support for your entire IT infrastructure.',
        category: 'Services',
        icon: Network,
        href: '/services/msp-managed-it'
    },
    {
        title: 'Cybersecurity Solutions',
        description: 'Protect your business with enterprise-grade security solutions. From threat detection to compliance management, we keep your data and systems secure.',
        category: 'Services',
        icon: Shield,
        href: '/services/cybersecurity'
    },
    {
        title: 'VoIP Phone Systems',
        description: 'Modern voice communication solutions for businesses. Cloud-based VoIP systems with advanced features, reliability, and cost savings.',
        category: 'Services',
        icon: Mic,
        href: '/services/voip'
    },
    {
        title: 'Audio Visual Solutions',
        description: 'Professional AV installations for conference rooms, auditoriums, and corporate spaces. Crystal-clear communication and presentation systems.',
        category: 'Services',
        icon: Video,
        href: '/services/audio-visual'
    },
    {
        title: 'Network Cabling & Infrastructure',
        description: 'Expert network cabling services for reliable connectivity. Structured cabling, fiber optics, and complete network infrastructure solutions.',
        category: 'Services',
        icon: Globe,
        href: '/services/network-cabling'
    },
    {
        title: 'Camera & Access Control Systems',
        description: 'Advanced security camera systems and access control solutions. Monitor and secure your premises with cutting-edge technology.',
        category: 'Services',
        icon: Shield,
        href: '/services/camera-access-security'
    },
    {
        title: 'Our Blog & Resources',
        description: 'Stay informed with the latest IT trends, security tips, and technology insights. Learn how to optimize your business technology.',
        category: 'Resources',
        icon: FileText,
        href: '/blog'
    },
    {
        title: 'Industry Solutions',
        description: 'Tailored IT solutions for your specific industry. We understand the unique challenges and compliance requirements of various sectors.',
        category: 'Industries',
        icon: Network,
        href: '/industries'
    }
]

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [showResults, setShowResults] = useState(false)

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            setShowResults(true)
        }
    }

    const filteredResults = searchQuery
        ? dummyResults.filter(result =>
            result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            result.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : dummyResults

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="w-full max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-center mb-12 text-foreground">
                    Arden Logics
                </h1>
                
                <form onSubmit={handleSearch} className="flex gap-4 items-stretch">
                    <div className="relative flex-1">
                        <Input
                            type="text"
                            placeholder="What are you looking for?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="h-14 text-base px-6 bg-background border-border focus-visible:ring-2 focus-visible:ring-primary"
                        />
                    </div>
                    <Button 
                        type="submit" 
                        size="lg"
                        className="h-14 px-8 text-base"
                    >
                        Search
                    </Button>
                </form>

                {/* Search Results */}
                {showResults && (
                    <div className="mt-12 space-y-6">
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-sm text-muted-foreground">
                                {filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'} found
                                {searchQuery && ` for "${searchQuery}"`}
                            </p>
                        </div>

                        {filteredResults.length > 0 ? (
                            <div className="space-y-4">
                                {filteredResults.map((result, index) => {
                                    const Icon = result.icon
                                    return (
                                        <Link 
                                            key={index}
                                            href={result.href}
                                            className="block p-6 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors group"
                                        >
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 mt-1">
                                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                        <Icon className="w-5 h-5 text-primary" />
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-xs font-medium text-primary uppercase tracking-wide">
                                                            {result.category}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                                        {result.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                                        {result.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    No results found for "{searchQuery}". Try a different search term.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

