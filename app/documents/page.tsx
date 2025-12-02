'use client'

import { useState, useMemo } from 'react'
import { Search, X, Download, FileText, FileCheck, FileCode, Shield, BookOpen, Wrench } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'

type DocumentCategory = 'all' | 'whitepapers' | 'guides' | 'technical' | 'compliance' | 'case-studies'
type SortOption = 'popular' | 'newest' | 'alphabetical'

interface Document {
    id: string
    title: string
    description: string
    category: string
    type: string
    size: string
    downloadUrl: string
    featured: boolean
    icon: React.ReactElement
}

const DOCUMENTS: Document[] = [
    {
        id: '1',
        title: 'IT Security Best Practices Guide',
        description: 'Comprehensive guide covering cybersecurity fundamentals, threat prevention, and incident response strategies for businesses.',
        category: 'guides',
        type: 'PDF',
        size: '2.4 MB',
        downloadUrl: '#',
        featured: true,
        icon: <Shield className="w-5 h-5" />,
    },
    {
        id: '2',
        title: 'Network Infrastructure Whitepaper',
        description: 'Deep dive into modern network architecture, structured cabling standards, and best practices for scalable infrastructure.',
        category: 'whitepapers',
        type: 'PDF',
        size: '3.1 MB',
        downloadUrl: '#',
        featured: true,
        icon: <FileText className="w-5 h-5" />,
    },
    {
        id: '3',
        title: 'VoIP Implementation Checklist',
        description: 'Step-by-step checklist for planning and deploying VoIP systems, including network requirements and quality assurance.',
        category: 'guides',
        type: 'PDF',
        size: '1.2 MB',
        downloadUrl: '#',
        featured: false,
        icon: <FileCheck className="w-5 h-5" />,
    },
    {
        id: '4',
        title: 'HIPAA Compliance Documentation',
        description: 'Essential documentation for healthcare organizations to maintain HIPAA compliance with IT systems and data handling.',
        category: 'compliance',
        type: 'PDF',
        size: '2.8 MB',
        downloadUrl: '#',
        featured: true,
        icon: <Shield className="w-5 h-5" />,
    },
    {
        id: '5',
        title: 'Camera System Technical Specifications',
        description: 'Technical documentation covering IP camera specifications, network requirements, and storage calculations.',
        category: 'technical',
        type: 'PDF',
        size: '1.9 MB',
        downloadUrl: '#',
        featured: false,
        icon: <FileCode className="w-5 h-5" />,
    },
    {
        id: '6',
        title: 'Cloud Migration Strategy Guide',
        description: 'Complete guide to planning and executing cloud migrations with minimal disruption and maximum efficiency.',
        category: 'guides',
        type: 'PDF',
        size: '2.6 MB',
        downloadUrl: '#',
        featured: true,
        icon: <BookOpen className="w-5 h-5" />,
    },
    {
        id: '7',
        title: 'Access Control Systems Comparison',
        description: 'Comparative analysis of access control technologies including keycards, biometrics, and mobile credentials.',
        category: 'whitepapers',
        type: 'PDF',
        size: '2.2 MB',
        downloadUrl: '#',
        featured: false,
        icon: <FileText className="w-5 h-5" />,
    },
    {
        id: '8',
        title: 'Network Maintenance Procedures',
        description: 'Standard operating procedures for network maintenance, troubleshooting, and performance optimization.',
        category: 'technical',
        type: 'PDF',
        size: '1.7 MB',
        downloadUrl: '#',
        featured: false,
        icon: <Wrench className="w-5 h-5" />,
    },
    {
        id: '9',
        title: 'Disaster Recovery Planning',
        description: 'Framework for creating comprehensive disaster recovery and business continuity plans for IT infrastructure.',
        category: 'guides',
        type: 'PDF',
        size: '3.4 MB',
        downloadUrl: '#',
        featured: true,
        icon: <BookOpen className="w-5 h-5" />,
    },
]

const CATEGORIES = [
    { value: 'all', label: 'All Categories' },
    { value: 'whitepapers', label: 'Whitepapers' },
    { value: 'guides', label: 'Guides & Tutorials' },
    { value: 'technical', label: 'Technical Docs' },
    { value: 'compliance', label: 'Compliance' },
    { value: 'case-studies', label: 'Case Studies' },
]

export default function DocumentsPage() {
    const [selectedCategory, setSelectedCategory] = useState<DocumentCategory>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState<SortOption>('popular')

    // Filter documents
    const filteredDocuments = useMemo(() => {
        let filtered = DOCUMENTS

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(doc => doc.category === selectedCategory)
        }

        if (searchQuery) {
            filtered = filtered.filter(doc =>
                doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                doc.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }

        // Sort documents
        if (sortBy === 'popular') {
            filtered = [...filtered].sort((a, b) => {
                if (a.featured && !b.featured) return -1
                if (!a.featured && b.featured) return 1
                return 0
            })
        } else if (sortBy === 'alphabetical') {
            filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title))
        } else {
            filtered = [...filtered].reverse()
        }

        return filtered
    }, [selectedCategory, searchQuery, sortBy])

    const clearAllFilters = () => {
        setSelectedCategory('all')
        setSearchQuery('')
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-6 lg:px-12">
                <div className="w-full">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Technical Resources & Documentation
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Access our comprehensive library of whitepapers, guides, technical documentation, and compliance resources. Download the information you need to make informed technology decisions.
                        </p>
                    </div>

                    {/* Filters Section */}
                    <div className="bg-card border rounded-lg p-6 mb-8">
                        {/* Filter Controls */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {/* Category Filter */}
                            <Select 
                                value={selectedCategory} 
                                onValueChange={(value) => setSelectedCategory(value as DocumentCategory)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {CATEGORIES.map(category => (
                                        <SelectItem key={category.value} value={category.value}>
                                            {category.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {/* Placeholder for future filter */}
                            <div className="flex items-center justify-center border rounded-md px-3 py-2 text-sm text-muted-foreground">
                                All File Types
                            </div>

                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search documents..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-9"
                                />
                            </div>
                        </div>

                        {/* Active Filters */}
                        {(selectedCategory !== 'all' || searchQuery) && (
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="text-sm font-medium text-foreground">Active filters:</span>
                                {selectedCategory !== 'all' && (
                                    <button
                                        onClick={() => setSelectedCategory('all')}
                                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                                    >
                                        {CATEGORIES.find(c => c.value === selectedCategory)?.label}
                                        <X className="h-3 w-3" />
                                    </button>
                                )}
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                                    >
                                        Search: {searchQuery}
                                        <X className="h-3 w-3" />
                                    </button>
                                )}
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
                            {filteredDocuments.length} {filteredDocuments.length === 1 ? 'document' : 'documents'}
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
                                Newest
                            </button>
                            <span className="text-muted-foreground">|</span>
                            <button
                                onClick={() => setSortBy('alphabetical')}
                                className={`text-sm font-medium transition-colors ${
                                    sortBy === 'alphabetical'
                                        ? 'text-foreground border-b-2 border-primary'
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                A-Z
                            </button>
                        </div>
                    </div>

                    {/* Documents Grid */}
                    {filteredDocuments.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filteredDocuments.map((doc) => (
                                <Card
                                    key={doc.id}
                                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                                                    {doc.icon}
                                                </div>
                                                <div className="text-xs text-muted-foreground">
                                                    <div className="font-semibold uppercase tracking-wider">
                                                        {doc.type}
                                                    </div>
                                                    <div>{doc.size}</div>
                                                </div>
                                            </div>
                                            {doc.featured && (
                                                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400">
                                                    Popular
                                                </span>
                                            )}
                                        </div>
                                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                                            {doc.title}
                                        </CardTitle>
                                        <CardDescription className="line-clamp-3">
                                            {doc.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="mt-auto">
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                        >
                                            <Link href={doc.downloadUrl}>
                                                <Download className="w-4 h-4 mr-2" />
                                                Download
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-lg text-muted-foreground mb-4">
                                No documents found matching your criteria.
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
                                    Need Help Finding the Right Solution?
                                </CardTitle>
                                <CardDescription className="text-base max-w-2xl mx-auto">
                                    Our team of experts is ready to answer your questions and provide personalized recommendations for your specific needs.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="min-w-[200px]">
                                    <Link href="/#contact">Contact Sales</Link>
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

