'use client'

import { useState, useEffect } from 'react'

interface ScrollNavItem {
    id: string
    label: string
}

interface ServiceScrollNavProps {
    items: ScrollNavItem[]
}

export default function ServiceScrollNav({ items }: ServiceScrollNavProps) {
    const [activeSection, setActiveSection] = useState(items[0]?.id || '')

    useEffect(() => {
        const handleScroll = () => {
            const sections = items.map(item => document.getElementById(item.id))
            const scrollPosition = window.scrollY + 200

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(items[i].id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [items])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="sticky top-32 z-30 bg-gray-50 py-6 border-b border-gray-200">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-200 p-1">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                                    activeSection === item.id
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

