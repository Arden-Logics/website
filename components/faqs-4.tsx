'use client'

import { cn } from '@/lib/utils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { OctagonAlert, Truck, WalletCards } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

export default function FAQs() {
    const faqItems = useMemo(
        () => [
            {
                group: 'General',
                icon: <OctagonAlert />,
                items: [
                    {
                        id: 'item-1',
                        question: 'How long does shipping take?',
                        answer: 'Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.',
                    },
                    {
                        id: 'item-2',
                        question: 'What payment methods do you accept?',
                        answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.',
                    },
                    {
                        id: 'item-3',
                        question: 'Can I change or cancel my order?',
                        answer: 'You can modify or cancel your order within 1 hour of placing it. After this window, please contact our customer support team who will assist you with any changes.',
                    },
                    {
                        id: 'item-4',
                        question: 'Do you offer gift wrapping?',
                        answer: 'Yes, we offer gift wrapping options at checkout for an additional fee.',
                    },
                    {
                        id: 'item-5',
                        question: 'How can I track my order?',
                        answer: 'After your order ships, you will receive a shipping confirmation email with a tracking number to track your order.',
                    },
                ],
            },
            {
                group: 'Shipping',
                icon: <Truck />,
                items: [
                    {
                        id: 'item-1',
                        question: 'Do you ship internationally?',
                        answer: 'Yes, we ship to many countries worldwide. Shipping costs and times vary based on the destination.',
                    },
                    {
                        id: 'item-2',
                        question: 'What is your return policy?',
                        answer: 'We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some specialty items may have different return terms, which will be noted on the product page.',
                    },
                    {
                        id: 'item-3',
                        question: 'What are your shipping rates?',
                        answer: 'Shipping rates vary based on the selected shipping speed and the destination of your order. You can view the rates at checkout.',
                    },
                ],
            },
            {
                group: 'Payment',
                icon: <WalletCards />,
                items: [
                    {
                        id: 'item-1',
                        question: 'What currencies do you accept?',
                        answer: 'We accept payments in various currencies. The available currencies will be displayed at checkout based on your location.',
                    },
                    {
                        id: 'item-2',
                        question: 'Is my payment information secure?',
                        answer: 'Yes, we use industry-standard encryption to protect your payment information during the transaction process.',
                    },
                    {
                        id: 'item-3',
                        question: 'Can I get a refund if I change my mind?',
                        answer: 'Yes, you can request a refund within 14 days of receiving your order. The item must be in its original condition.',
                    },
                ],
            },
        ],
        []
    )

    const groups = useMemo(() => faqItems.map((g) => g.group.toLowerCase()), [faqItems])
    const [activeGroup, setActiveGroup] = useState<string>(groups[0] ?? '')

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll<HTMLDivElement>('[data-faq-group]'))
        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))
                if (visible[0]) {
                    const group = visible[0].target.getAttribute('data-faq-group') || ''
                    if (group && group !== activeGroup) setActiveGroup(group)
                }
            },
            {
                root: null,
                threshold: [0.35, 0.6, 0.8],
                rootMargin: '0px 0px -20% 0px',
            }
        )

        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [activeGroup])

    return (
        <section className="bg-background pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="w-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
                <div className="max-w-lg max-md:px-6">
                    <h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="@container mt-6 grid md:mt-20 md:grid-cols-5">
                    <div className="max-md:bg-background sticky top-0 z-10 h-fit max-md:flex max-md:justify-center max-md:p-2 md:top-12 md:col-span-2 md:-mt-3">
                        {faqItems.map((item) => {
                            const groupId = item.group.toLowerCase()
                            const isActive = activeGroup === groupId
                            return (
                                <Link
                                    key={item.group}
                                    href={`#${groupId}`}
                                    data-state={isActive ? 'active' : 'inactive'}
                                    className="text-muted-foreground group max-md:px-1 md:block md:py-1">
                                    <span className={cn('@max-xs:px-4 flex w-fit items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors [&>svg]:size-4', isActive ? 'bg-card ring-foreground/5 text-primary font-medium shadow-sm ring-1' : 'hover:text-foreground group-hover:bg-foreground/5')}>
                                        {item.icon}
                                        <span className="@max-xs:in-data-[state=inactive]:hidden">{item.group}</span>
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="space-y-12 max-md:mt-6 md:col-span-3">
                        {faqItems.map((item) => (
                            <div
                                className="space-y-4"
                                key={item.group}
                                id={item.group.toLowerCase()}
                                data-faq-group={item.group.toLowerCase()}>
                                <h3 className="text-foreground pl-6 text-lg font-semibold">{item.group}</h3>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="-space-y-1">
                                    {item.items.map((item) => (
                                        <AccordionItem
                                            key={item.id}
                                            value={item.id}
                                            className="data-[state=open]:bg-card data-[state=open]:ring-foreground/5 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm data-[state=open]:ring-1">
                                            <AccordionTrigger className="cursor-pointer rounded-none border-b text-base transition-none hover:no-underline data-[state=open]:border-transparent">{item.question}</AccordionTrigger>
                                            <AccordionContent>
                                                <p className="text-muted-foreground text-base">{item.answer}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}