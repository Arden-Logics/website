'use client'

import { useState, useMemo, useEffect } from 'react'
import { Search, X, Download, FileText, FileCheck, FileCode, Shield, BookOpen, Wrench, Loader2, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'

type DocumentCategory = 'all' | 'whitepapers' | 'guides' | 'technical' | 'compliance' | 'legal'
type SortOption = 'popular' | 'newest' | 'alphabetical'

interface Document {
    id: string
    title: string
    description: string
    category: DocumentCategory
    type: string
    size: string
    downloadUrl: string
    featured: boolean
    icon: React.ReactElement
}

const DOCUMENTS: Document[] = [
    {
        id: '1',
        title: 'Master Service Agreement (MSA)',
        description: 'The foundational agreement governing the long-term relationship between Arden Logic and our clients, outlining general terms and conditions.',
        category: 'legal',
        type: 'PDF',
        size: '450 KB',
        downloadUrl: 'https://cdn.pandadoc.com/cms/templates/Master-Service-Agreement-MSA-Template-PandaDoc.pdf',
        featured: true,
        icon: <FileText className="w-5 h-5" />,
    },
    {
        id: '3',
        title: 'Cybersecurity Incident Response Plan',
        description: 'A comprehensive framework for identifying, containing, and recovering from security incidents, based on NIST SP 800-61 standards.',
        category: 'technical',
        type: 'PDF',
        size: '1.2 MB',
        downloadUrl: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf',
        featured: true,
        icon: <Shield className="w-5 h-5" />,
    },
    {
        id: '4',
        title: 'HIPAA Compliance Statement',
        description: 'Official guidance for healthcare organizations to ensure PHI security within managed IT environments, compliant with HHS regulations.',
        category: 'compliance',
        type: 'PDF',
        size: '890 KB',
        downloadUrl: 'https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/administrative/securityrule/securityrulepdf.pdf',
        featured: false,
        icon: <Shield className="w-5 h-5" />,
    },
    {
        id: '5',
        title: 'VoIP Network Readiness Checklist',
        description: 'Technical requirements and network optimization steps to ensure crystal-clear voice communications across your infrastructure.',
        category: 'technical',
        type: 'PDF',
        size: '620 KB',
        downloadUrl: 'https://www.ringcentral.com/content/dam/ringcentral/en-us/pdf/whitepaper/voip-network-readiness-checklist.pdf',
        featured: false,
        icon: <FileCode className="w-5 h-5" />,
    },
    {
        id: '6',
        title: 'Managed IT Onboarding Guide',
        description: 'A professional roadmap for new clients transitioning to Arden Logic\'s Managed IT ecosystem, covering discovery to full management.',
        category: 'guides',
        type: 'PDF',
        size: '2.1 MB',
        downloadUrl: 'https://www.kaseya.com/wp-content/uploads/2021/04/New-Client-Onboarding-Checklist.pdf',
        featured: true,
        icon: <BookOpen className="w-5 h-5" />,
    },
    {
        id: '7',
        title: 'Acceptable Use Policy (AUP)',
        description: 'Standard guidelines for the appropriate use of network resources, communications systems, and technology infrastructure.',
        category: 'legal',
        type: 'PDF',
        size: '320 KB',
        downloadUrl: 'https://www.sans.org/media/score/checklists/acceptable-use-policy.pdf',
        featured: false,
        icon: <FileText className="w-5 h-5" />,
    },
    {
        id: '8',
        title: 'IP Camera Storage & Bandwidth Calculator',
        description: 'A technical tool for planning surveillance storage needs and network capacity for modern security camera systems.',
        category: 'technical',
        type: 'WEB',
        size: 'N/A',
        downloadUrl: 'https://www.calculator.net/ip-camera-bandwidth-storage-calculator.html',
        featured: false,
        icon: <Wrench className="w-5 h-5" />,
    },
    {
        id: '9',
        title: 'The State of Cybersecurity Report',
        description: 'Analysis of emerging threats and defensive strategies tailored for the US small and medium business landscape.',
        category: 'whitepapers',
        type: 'PDF',
        size: '3.5 MB',
        downloadUrl: 'https://www.isaca.org/-/media/files/isacadp/project/isaca/resources/white-papers/state-of-cybersecurity-2024-part-1.pdf',
        featured: true,
        icon: <FileText className="w-5 h-5" />,
    },
    {
        id: '10',
        title: 'Structured Cabling Standards Reference',
        description: 'Overview of TIA/EIA-568 cabling standards for high-performance network infrastructure in commercial environments.',
        category: 'technical',
        type: 'PDF',
        size: '1.8 MB',
        downloadUrl: 'https://www.anixter.com/content/dam/anixter/resources/white-papers/standard-compliance-guide-tia-568-d.pdf',
        featured: false,
        icon: <FileCode className="w-5 h-5" />,
    },
    {
        id: '11',
        title: 'Audio-Visual Operations Manual',
        description: 'Professional standards for managing complex AV environments, conference room technology, and integrated systems.',
        category: 'guides',
        type: 'PDF',
        size: '2.4 MB',
        downloadUrl: 'https://www.avixa.org/docs/default-source/standards-docs/av-standards-overview.pdf',
        featured: false,
        icon: <BookOpen className="w-5 h-5" />,
    },
    {
        id: '12',
        title: 'SOC 2 Type II User Guide',
        description: 'Official overview of security controls and independent audit results ensuring data integrity and reliability.',
        category: 'compliance',
        type: 'PDF',
        size: '540 KB',
        downloadUrl: 'https://www.aicpa-cima.com/resources/download/soc-2-report-user-guide.pdf',
        featured: true,
        icon: <Shield className="w-5 h-5" />,
    },
]

const CATEGORIES = [
    { value: 'all', label: 'All Categories' },
    { value: 'legal', label: 'Legal & Agreements' },
    { value: 'compliance', label: 'Compliance' },
    { value: 'technical', label: 'Technical Docs' },
    { value: 'guides', label: 'Guides & Checklists' },
    { value: 'whitepapers', label: 'Whitepapers' },
]

export default function DocumentsPage() {
    const [selectedCategory, setSelectedCategory] = useState<DocumentCategory>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState<SortOption>('popular')
    const [downloadingId, setDownloadingId] = useState<string | null>(null)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')

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

    const handleDownload = (doc: Document) => {
        setDownloadingId(doc.id)
        
        // Simulate a small preparation delay for better UX
        setTimeout(() => {
            setDownloadingId(null)
            
            if (doc.downloadUrl === '#') {
                setToastMessage(`${doc.title} will be available for download soon.`)
                setShowToast(true)
                setTimeout(() => setShowToast(false), 3000)
            } else {
                // For real links, open in new tab or trigger download
                window.open(doc.downloadUrl, '_blank', 'noopener,noreferrer')
                setToastMessage(`Downloading ${doc.title}...`)
                setShowToast(true)
                setTimeout(() => setShowToast(false), 3000)
            }
        }, 800)
    }

    return (
        <div className="min-h-screen bg-background relative">
            {/* Simple Toast Notification */}
            {showToast && (
                <div className="fixed bottom-8 right-8 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 border border-primary-foreground/20 backdrop-blur-sm">
                        <div className="bg-green-400/20 p-2 rounded-full">
                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                        </div>
                        <span className="font-medium text-sm">{toastMessage}</span>
                        <button onClick={() => setShowToast(false)} className="ml-2 hover:opacity-70 p-1">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-6 lg:px-12">
                <div className="w-full">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Resources & Documentation
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Access our comprehensive library of legal agreements, technical guides, and industry whitepapers tailored for US-based organizations. Download the documentation you need to support your technology infrastructure.
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
                                            onClick={() => handleDownload(doc)}
                                            variant="outline"
                                            disabled={downloadingId === doc.id}
                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors relative overflow-hidden"
                                        >
                                            {downloadingId === doc.id ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    Preparing...
                                                </>
                                            ) : (
                                                <>
                                                    <Download className="w-4 h-4 mr-2" />
                                                    {doc.type === 'WEB' ? 'Open Calculator' : 'Download'}
                                                </>
                                            )}
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
