'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { useMedia } from '@/hooks/use-media'
import {
    BLOG_POSTS,
    BLOG_CATEGORY_SLUGS,
    BLOG_CATEGORY_LABELS,
    type BlogCategorySlug,
} from '@/constants/blog'

type Filter = BlogCategorySlug

interface Article {
    title: string
    description: string
    summary?: string
    category: Exclude<BlogCategorySlug, 'all'>
    image: string
    date: string
    href: string
    authors: { name: string; image: string }[]
}

export default function Blog() {
    const [activeFilter, setActiveFilter] = useState<Filter>('all')
    const filters = BLOG_CATEGORY_SLUGS

    const rawArticles: Article[] = useMemo(
        () =>
            BLOG_POSTS.map((post) => ({
                title: post.title,
                description: post.description,
                summary: post.summary,
                category: post.category,
                image: post.image,
                date: post.date,
                href: `/blog/${post.slug}`,
                authors: post.authors,
            })),
        []
    )

    const categoryCounts = useMemo(() => {
        const counts: Partial<Record<Filter, number>> = {}
        for (const slug of BLOG_CATEGORY_SLUGS) {
            counts[slug] = slug === 'all' ? rawArticles.length : rawArticles.filter((a) => a.category === slug).length
        }
        return counts as Record<Filter, number>
    }, [rawArticles])

    const articles = useMemo(() => (activeFilter === 'all' ? rawArticles : rawArticles.filter((article) => article.category === activeFilter)), [rawArticles, activeFilter])
    const topArticles = useMemo(() => articles.slice(0, 2), [articles])

    const moreArticles = useMemo(() => {
        const topKeys = new Set(topArticles.map((a) => `${a.title}|${a.date}|${a.href}`))
        return articles.slice(2).filter((a) => !topKeys.has(`${a.title}|${a.date}|${a.href}`))
    }, [articles, topArticles])

    const isMobile = useMedia('(max-width: 640px)')
    const isMedium = useMedia('(min-width: 641px) and (max-width: 1024px)')

    const lastArticles = isMobile ? 1 : isMedium ? 2 : 3

    return (
        <section className="bg-background">
            <div className="bg-background @container py-16 md:py-24">
                <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                    <div className="max-w-md">
                        <span className="text-muted-foreground">Blog</span>
                        <h2 className="text-muted-foreground mt-4 text-balance text-4xl font-semibold">
                            News, insights and more from <strong className="text-foreground font-semibold">Tailark Quartz</strong>
                        </h2>
                    </div>

                    <div className="-ml-0.5 mb-6 mt-12 flex justify-between gap-4 max-md:-mx-6 md:mt-16">
                        <div
                            className="-ml-0.5 flex snap-x snap-mandatory overflow-x-auto py-3 max-md:px-6"
                            role="tablist"
                            aria-label="Blog categories">
                            {filters.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveFilter(category)}
                                    disabled={categoryCounts[category] === 0}
                                    role="tab"
                                    aria-selected={activeFilter === category}
                                    className="text-muted-foreground group snap-center px-1 disabled:pointer-events-none disabled:opacity-50">
                                    <span className={cn('flex w-fit items-center gap-2 rounded-md px-3 py-1 text-sm transition-colors [&>svg]:size-4', activeFilter === category ? 'bg-card ring-foreground/5 text-primary font-medium shadow-sm ring-1' : 'hover:text-foreground group-hover:bg-foreground/5')}>
                                        <span>{BLOG_CATEGORY_LABELS[category]}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-x-px -inset-y-6 border-x"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-y-6 inset-x-0 left-1/2 w-2 -translate-x-1 border-x max-sm:hidden lg:left-1/3 lg:-translate-x-1.5"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-y-6 inset-x-0 right-1/3 ml-auto w-2 translate-x-1.5 border-x max-lg:hidden"
                        />

                        <div className="space-y-12">
                            {topArticles.map((article, index) => (
                                <div
                                    key={`${article.title}-${article.date}-${index}`}
                                    className="group relative">
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute -inset-x-6 -inset-y-px group-first:border-y"
                                    />
                                    <article className={cn('bg-card/75 ring-foreground/3 hover:bg-card/50 focus-within:bg-card/50 group relative gap-2 rounded-xl border border-transparent shadow-md ring-1 duration-200 sm:grid sm:grid-cols-3')}>
                                        <div className="before:border-border-illustration relative m-0.5 aspect-square overflow-hidden rounded-[10px] before:absolute before:inset-0 before:rounded-[10px] before:border">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                width={6394}
                                                height={4500}
                                                className="h-full w-full object-cover"
                                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                loading={index < 3 ? 'eager' : 'lazy'}
                                                priority={index === 0}
                                            />
                                        </div>

                                        <div className="col-span-2 grid gap-3 p-6">
                                            <time
                                                className="text-muted-foreground text-sm"
                                                dateTime={new Date(article.date).toISOString()}>
                                                {article.date}
                                            </time>
                                            <h2 className="text-foreground text-balance text-lg font-semibold md:text-xl">
                                                <Link
                                                    href={article.href}
                                                    className="before:absolute before:inset-0">
                                                    {article.title}
                                                </Link>
                                            </h2>
                                            <p className="text-muted-foreground">{article.summary}</p>

                                            <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
                                                <div className="space-y-2">
                                                    {article.authors.map((author, index) => (
                                                        <div
                                                            key={index}
                                                            className="grid grid-cols-[auto_1fr] items-center gap-2">
                                                            <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
                                                                <Image
                                                                    src={author.image}
                                                                    alt={author.name}
                                                                    width={460}
                                                                    height={460}
                                                                    className="size-full object-cover"
                                                                    loading="lazy"
                                                                />
                                                            </div>
                                                            <span className="text-muted-foreground line-clamp-1 text-sm">{author.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex h-6 items-center">
                                                    <span
                                                        aria-label={`Read ${article.title}`}
                                                        className="text-primary group-hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors duration-200">
                                                        Read
                                                        <ChevronRight
                                                            strokeWidth={2.5}
                                                            aria-hidden="true"
                                                            className="size-3.5 translate-y-px duration-200 group-hover:translate-x-0.5"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    {moreArticles.length > 0 && (
                        <div className="mt-12">
                            <div className="relative">
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -inset-x-px -inset-y-6 border-x"
                                />
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -inset-y-6 inset-x-0 left-1/2 w-2 -translate-x-1.5 border-x max-sm:hidden lg:left-1/3 lg:-translate-x-1.5"
                                />
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -inset-y-6 inset-x-0 right-1/3 ml-auto w-2 translate-x-1.5 border-x max-lg:hidden"
                                />
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -inset-x-6 -inset-y-px border-y"
                                />

                                <div className="-mx-6 border-b px-12 py-2">
                                    <h2 className="text-foreground text-xs font-medium uppercase">More Articles</h2>
                                </div>
                                <div className="grid gap-x-2 sm:grid-cols-2 lg:grid-cols-3">
                                    {moreArticles.map((article, index) => (
                                        <article
                                            key={`${article.title}-${article.date}-${index}`}
                                            className={cn('hover:bg-card focus-within:bg-card group relative row-span-4 grid grid-rows-subgrid gap-3 p-6 duration-200', index < moreArticles.length - lastArticles && 'border-b')}>
                                            <time
                                                className="text-muted-foreground text-sm"
                                                dateTime={new Date(article.date).toISOString()}>
                                                {article.date}
                                            </time>
                                            <h3 className="text-foreground text-lg font-semibold">
                                                <Link
                                                    href={article.href}
                                                    className="before:absolute before:inset-0">
                                                    {article.title}
                                                </Link>
                                            </h3>
                                            <p className="text-muted-foreground">{article.description}</p>

                                            <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
                                                <div className="space-y-2">
                                                    {article.authors.map((author, index) => (
                                                        <div
                                                            key={index}
                                                            className="grid grid-cols-[auto_1fr] items-center gap-2">
                                                            <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
                                                                <Image
                                                                    src={author.image}
                                                                    alt={author.name}
                                                                    width={460}
                                                                    height={460}
                                                                    className="size-full object-cover"
                                                                    loading="lazy"
                                                                />
                                                            </div>
                                                            <span className="text-muted-foreground line-clamp-1 text-sm">{author.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex h-6 items-center">
                                                    <span
                                                        aria-label={`Read ${article.title}`}
                                                        className="text-primary group-hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors duration-200">
                                                        Read
                                                        <ChevronRight
                                                            strokeWidth={2.5}
                                                            aria-hidden="true"
                                                            className="size-3.5 translate-y-px duration-200 group-hover:translate-x-0.5"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}