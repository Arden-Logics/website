import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import {
    getBlogPostBySlug,
    getRelatedBlogPosts,
    BLOG_CATEGORY_LABELS,
    BLOG_POSTS,
} from '@/constants/blog'

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ id: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const article = getBlogPostBySlug(id)
    if (!article) {
        return { title: 'Post Not Found | Arden 360 Blog' }
    }
    return {
        title: `${article.title} | Arden 360 Blog`,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            type: 'article',
            publishedTime: new Date(article.date).toISOString(),
            authors: article.authors.map((a) => a.name),
            images: [
                {
                    url: article.image,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.description,
            images: [article.image],
        },
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const article = getBlogPostBySlug(id)
    if (!article) {
        notFound()
    }

    const relatedPosts = getRelatedBlogPosts(id, 2)

    return (
        <article className="bg-background min-h-screen pb-16 md:pb-24">
            {/* Hero Section */}
            <header className="bg-muted py-16 md:py-24">
                <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                    <Link
                        href="/blog"
                        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1 text-sm font-medium transition-colors"
                    >
                        <ChevronLeft className="size-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-6 flex items-center gap-3">
                        <span className="bg-card ring-foreground/5 text-primary inline-flex items-center rounded-md px-3 py-1 text-sm font-medium shadow-sm ring-1">
                            {BLOG_CATEGORY_LABELS[article.category]}
                        </span>
                        <time
                            className="text-muted-foreground text-sm"
                            dateTime={new Date(article.date).toISOString()}
                        >
                            {article.date}
                        </time>
                    </div>

                    <h1 className="text-foreground mb-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex -space-x-2">
                            {article.authors.map((author, i) => (
                                <div
                                    key={i}
                                    className="ring-background bg-card relative size-10 overflow-hidden rounded-full ring-2"
                                >
                                    <Image
                                        src={author.image}
                                        alt={author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm">
                            <p className="text-foreground font-medium">
                                {article.authors.map((a) => a.name).join(', ')}
                            </p>
                            <p className="text-muted-foreground">Authors</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Cover Image */}
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32 -mt-12 md:-mt-16 relative z-10">
                <div className="bg-card/75 ring-border-illustration rounded-2xl border border-transparent p-1 shadow-lg ring-1">
                    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-muted">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32 mt-16 md:mt-24">
                <div
                    className="prose prose-neutral dark:prose-invert prose-lg md:prose-xl max-w-none
                        prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
                        prose-a:text-primary hover:prose-a:text-primary/80
                        prose-img:rounded-xl prose-img:ring-1 prose-img:ring-border-illustration
                        prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-12 flex flex-wrap items-center gap-2 border-t pt-8">
                    <span className="text-foreground text-sm font-medium mr-2">Tags:</span>
                    {article.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-muted text-muted-foreground hover:text-foreground rounded-full px-3 py-1 text-sm font-medium transition-colors cursor-pointer"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
                <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32 mt-24 border-t pt-16">
                    <h2 className="text-foreground mb-8 text-2xl font-bold tracking-tight">Read Next</h2>
                    <div className="grid gap-8 sm:grid-cols-2">
                        {relatedPosts.map((related, index) => (
                            <article key={index} className="group relative space-y-4">
                                <Link href={`/blog/${related.slug}`} className="block">
                                    <div className="bg-card/75 ring-border-illustration hover:bg-card/50 rounded-xl border border-transparent p-0.5 shadow-md ring-1 transition-colors">
                                        <div className="relative aspect-video overflow-hidden rounded-[10px]">
                                            <Image
                                                src={related.image}
                                                alt={related.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </Link>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary text-xs font-medium uppercase tracking-wider">
                                            {BLOG_CATEGORY_LABELS[related.category]}
                                        </span>
                                        <span className="text-muted-foreground text-xs">•</span>
                                        <time
                                            className="text-muted-foreground text-xs"
                                            dateTime={new Date(related.date).toISOString()}
                                        >
                                            {related.date}
                                        </time>
                                    </div>
                                    <h3 className="text-foreground text-xl font-semibold leading-tight">
                                        <Link href={`/blog/${related.slug}`} className="before:absolute before:inset-0">
                                            {related.title}
                                        </Link>
                                    </h3>
                                    <p className="text-muted-foreground line-clamp-2 text-sm">
                                        {related.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            )}
        </article>
    )
}
