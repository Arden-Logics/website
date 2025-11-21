'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface TabContent {
    id: string
    label: string
    title: string
    description: string
    linkText: string
    linkHref: string
    imageSrc: string
    imageAlt: string
}

interface ServiceTabbedContentProps {
    tabs: TabContent[]
}

export default function ServiceTabbedContent({ tabs }: ServiceTabbedContentProps) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id || '')

    const activeContent = tabs.find(tab => tab.id === activeTab)

    return (
        <section className="bg-gray-50 py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Tab buttons */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-200 p-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                                    activeTab === tab.id
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab content */}
                {activeContent && (
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Left content */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-normal text-gray-900 md:text-4xl">
                                {activeContent.title}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {activeContent.description}
                            </p>
                            <Link
                                href={activeContent.linkHref}
                                className="inline-flex items-center text-green-700 font-medium hover:underline"
                            >
                                {activeContent.linkText} →
                            </Link>
                        </div>

                        {/* Right image */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                            <Image
                                src={activeContent.imageSrc}
                                alt={activeContent.imageAlt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

