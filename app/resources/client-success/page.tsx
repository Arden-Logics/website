'use client'

import { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SUCCESS_STORIES, INDUSTRIES, SERVICES } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

type SortOption = 'popular' | 'newest'

export default function ClientSuccessPage() {
    const [selectedIndustry, setSelectedIndustry] = useState<string>('all')
    const [selectedService, setSelectedService] = useState<string>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState<SortOption>('popular')

    // Get unique industries and services from success stories
    const industries = useMemo(() => {
        return INDUSTRIES.map(ind => ind.name)
    }, [])

    const services = useMemo(() => {
        return SERVICES.map(svc => svc.name)
    }, [])

    // Filter success stories
    const filteredStories = useMemo(() => {
        let filtered = SUCCESS_STORIES

        if (selectedIndustry !== 'all') {
            filtered = filtered.filter(story => story.industry === selectedIndustry)
        }

        if (selectedService !== 'all') {
            filtered = filtered.filter(story => 
                story.services.some(service => service === selectedService)
            )
        }

        if (searchQuery) {
            filtered = filtered.filter(story => 
                story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                story.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                story.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }

        // Sort stories
        if (sortBy === 'popular') {
            filtered = [...filtered].sort((a, b) => {
                if (a.featured && !b.featured) return -1
                if (!a.featured && b.featured) return 1
                return 0
            })
        } else {
            filtered = [...filtered].reverse()
        }

        return filtered
    }, [selectedIndustry, selectedService, searchQuery, sortBy])

    // Active filters count
    const activeFilters = useMemo(() => {
        const filters: Array<{ label: string; value: string; onClear: () => void }> = []
        
        if (selectedIndustry !== 'all') {
            filters.push({
                label: selectedIndustry,
                value: 'industry',
                onClear: () => setSelectedIndustry('all')
            })
        }
        
        if (selectedService !== 'all') {
            filters.push({
                label: selectedService,
                value: 'service',
                onClear: () => setSelectedService('all')
            })
        }
        
        return filters
    }, [selectedIndustry, selectedService])

    const clearAllFilters = () => {
        setSelectedIndustry('all')
        setSelectedService('all')
        setSearchQuery('')
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-6 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Client Success Stories
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Discover how businesses across industries have transformed their operations with our technology solutions. Filter by industry or service to find stories relevant to your needs.
                        </p>
                    </div>

                    {/* Filters Section */}
                    <div className="bg-card border rounded-lg p-6 mb-8">
                        {/* Filter Controls */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            {/* Industry Filter */}
                            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Industries</SelectItem>
                                    {industries.map(industry => (
                                        <SelectItem key={industry} value={industry}>
                                            {industry}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {/* Service Filter */}
                            <Select value={selectedService} onValueChange={setSelectedService}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Services</SelectItem>
                                    {services.map(service => (
                                        <SelectItem key={service} value={service}>
                                            {service}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {/* Placeholder for Content Type (future enhancement) */}
                            <div className="flex items-center justify-center border rounded-md px-3 py-2 text-sm text-muted-foreground">
                                All Content Types
                            </div>

                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search Resources"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-9"
                                />
                            </div>
                        </div>

                        {/* Active Filters */}
                        {activeFilters.length > 0 && (
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="text-sm font-medium text-foreground">Clear All:</span>
                                {activeFilters.map((filter) => (
                                    <button
                                        key={filter.value}
                                        onClick={filter.onClear}
                                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                                    >
                                        {filter.label}
                                        <X className="h-3 w-3" />
                                    </button>
                                ))}
                                <button
                                    onClick={clearAllFilters}
                                    className="text-sm text-muted-foreground hover:text-foreground underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Sort Options */}
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-sm text-muted-foreground">
                            {filteredStories.length} {filteredStories.length === 1 ? 'result' : 'results'}
                        </p>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSortBy('popular')}
                                className={`text-sm font-medium transition-colors ${
                                    sortBy === 'popular'
                                        ? 'text-foreground border-b-2 border-primary'
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                Most Popular
                            </button>
                            <span className="text-muted-foreground">|</span>
                            <button
                                onClick={() => setSortBy('newest')}
                                className={`text-sm font-medium transition-colors ${
                                    sortBy === 'newest'
                                        ? 'text-foreground border-b-2 border-primary'
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                Newest Added
                            </button>
                        </div>
                    </div>

                    {/* Success Stories Grid */}
                    {filteredStories.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filteredStories.map((story) => (
                                <Card
                                    key={story.id}
                                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                                    Case Study
                                                </span>
                                            </div>
                                            <div className="relative w-16 h-16 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src={story.imageSrc}
                                                    alt={story.imageAlt}
                                                    width={64}
                                                    height={64}
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                                            {story.title}
                                        </CardTitle>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-700 dark:text-blue-400">
                                                {story.industry}
                                            </span>
                                            {story.services.slice(0, 2).map((service, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-500/10 text-green-700 dark:text-green-400"
                                                >
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                        <CardDescription className="line-clamp-3">
                                            {story.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="mt-auto">
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                        >
                                            <Link href={story.link}>
                                                Read Case Study →
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-lg text-muted-foreground mb-4">
                                No success stories found matching your criteria.
                            </p>
                            <Button onClick={clearAllFilters} variant="outline">
                                Clear Filters
                            </Button>
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="mt-24">
                        <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-primary/20">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl md:text-3xl mb-4">
                                    Ready to Write Your Success Story?
                                </CardTitle>
                                <CardDescription className="text-base max-w-2xl mx-auto">
                                    Join hundreds of businesses that have transformed their operations with our technology solutions. Let's discuss how we can help you achieve your goals.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="min-w-[200px]">
                                    <Link href="/#contact">Get Started</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="min-w-[200px]">
                                    <Link href="/services">View Services</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
