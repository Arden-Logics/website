import { Logo } from '@/components/logo'
import Link from 'next/link'
import { SERVICES, RESOURCES, INDUSTRIES } from '@/constants'

const links = [
    {
        group: 'Services',
        items: SERVICES.map(service => ({
            title: service.name,
            href: service.href,
        })),
    },
    {
        group: 'Resources',
        items: RESOURCES.map(resource => ({
            title: resource.name,
            href: resource.href,
        })),
    },
    {
        group: 'Industries',
        items: INDUSTRIES.map(industry => ({
            title: industry.name,
            href: industry.href,
        })),
    },
    {
        group: 'Quick Links',
        items: [
            { title: 'Client Portals', href: '/client-portals' },
            { title: 'Contact Support', href: '#' },
            { title: 'Contact Sales', href: '#' },
        ],
    },
]

export default function FooterSection() {
    return (
        <footer
            role="contentinfo"
            className="bg-muted py-8 sm:py-20">
            <div className="w-full space-y-16 px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="grid gap-12 lg:grid-cols-5">
                    <div className="space-y-6 lg:col-span-2 lg:space-y-12">
                        <Link
                            href="/"
                            aria-label="go home"
                            className="block size-fit">
                            <Logo />
                        </Link>

                        <p className="text-muted-foreground text-balance text-sm">Arden Logics provides comprehensive IT, Security, and AV solutions for modern businesses.</p>
                    </div>

                    <div className="lg:col-span-3 grid gap-6 grid-cols-2 md:grid-cols-4">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4">
                                <span className="block font-medium">{link.group}</span>

                                <div className="flex flex-wrap gap-4 sm:flex-col">
                                    {link.items.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="text-foreground hover:text-primary block duration-150">
                                            <span>{item.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="space-y-4">
                            <span className="block font-medium">Community</span>
                            <div className="flex flex-wrap gap-3 text-sm">
                                <Link
                                    href="https://www.facebook.com/junipertechnology"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="text-muted-foreground hover:text-primary block">
                                    <svg
                                        className="size-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12"></path>
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/arden360/?viewAsMember=true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="text-muted-foreground hover:text-primary block">
                                    <svg
                                        className="size-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden
                    className="h-px bg-[length:6px_1px] bg-repeat-x opacity-25 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)]"
                />
                <div className="flex flex-wrap justify-between gap-4">
                    <span className="text-muted-foreground text-sm">© {new Date().getFullYear()} Arden Logics, All rights reserved </span>

                    <div className="ring-foreground/5 bg-card flex items-center gap-2 rounded-full border border-transparent py-1 pl-2 pr-4 shadow ring-1">
                        <div className="relative flex size-3">
                            <span className="duration-1500 absolute inset-0 block size-full animate-pulse rounded-full bg-emerald-100"></span>
                            <span className="relative m-auto block size-1 rounded-full bg-emerald-500"></span>
                        </div>
                        <span className="text-sm">All Systems Normal</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}