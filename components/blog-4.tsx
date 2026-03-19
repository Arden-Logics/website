'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
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

interface BlogProps {
    showMoreArticles?: boolean
}

export default function Blog({ showMoreArticles = true }: BlogProps) {
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

    return (
        <section className="bg-background">
            <div className="bg-muted @container py-16 md:py-24">
                <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                    <div className="max-w-md">
                        <h2 className="text-muted-foreground mt-4 text-balance text-4xl font-semibold">
                            Blog
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
                        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-12">
                            {topArticles.map((article, index) => (
                                <div
                                    key={`${article.title}-${article.date}-${index}`}
                                    className="group relative">
                                    <article className="group relative space-y-6 rounded-xl">
                                        <div className="bg-card/75 ring-border-illustration hover:bg-card/50 rounded-xl border border-transparent p-0.5 shadow-md ring-1">
                                            <div className="before:border-border-illustration relative aspect-video overflow-hidden rounded-[10px] before:absolute before:inset-0 before:rounded-[10px] before:border">
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
                                        </div>

                                        <div className="grid gap-3 p-0.5">
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
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    {showMoreArticles ? (
                        moreArticles.length > 0 && (
                            <div className="mt-12 md:mt-16">
                                <div className="relative space-y-8">
                                    <h2 className="text-foreground text-2xl font-semibold">More Articles</h2>
                                    <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
                                        {moreArticles.map((article, index) => (
                                            <article
                                                key={`${article.title}-${article.date}-${index}`}
                                                className="group relative space-y-4 duration-200">
                                                <div className="bg-card/75 ring-border-illustration hover:bg-card/50 rounded-xl border border-transparent p-0.5 shadow-md ring-1">
                                                    <div className="before:border-border-illustration relative aspect-video overflow-hidden rounded-[10px] before:absolute before:inset-0 before:rounded-[10px] before:border">
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
                                                </div>
                                                <time
                                                    className="text-muted-foreground text-sm"
                                                    dateTime={new Date(article.date).toISOString()}>
                                                    {article.date}
                                                </time>
                                                <h3 className="text-foreground font-semibold">
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
                        )
                    ) : (
                        <div className="mt-12 md:mt-16">
                            <Link
                                href="/blog"
                                className="text-primary hover:text-foreground inline-flex items-center gap-1 text-lg font-semibold transition-colors duration-200">
                                Read More
                                <ChevronRight
                                    strokeWidth={2.5}
                                    aria-hidden="true"
                                    className="size-5 translate-y-px duration-200 hover:translate-x-0.5"
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}