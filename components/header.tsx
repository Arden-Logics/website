'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Menu, X } from 'lucide-react'
import { useMedia } from '@/hooks/use-media'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { SERVICES, INDUSTRIES, RESOURCES, SOLUTIONS } from '@/constants'
import { ContactSalesDialog } from '@/components/contact-sales-dialog'

export default function HeaderOne() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const isLarge = useMedia('(min-width: 80rem)') // Changed from 64rem (1024px) to 80rem (1280px) to prevent overflow at 1368px

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header
                role="banner"
                data-state={isMobileMenuOpen ? 'active' : 'inactive'}
                {...(isScrolled && { 'data-scrolled': true })}
                className="has-data-[state=open]:h-screen has-data-[state=open]:backdrop-blur has-data-[state=open]:bg-background/50 fixed inset-x-0 z-50">
                <div
                    className={cn(
                        'h-32 absolute inset-x-0 top-0 z-50 border-b-4 border-foreground/20 ring-1 ring-transparent transition-all duration-300 pb-8',
                        'in-data-scrolled:border-foreground/20 in-data-scrolled:border-b-2 in-data-scrolled:bg-background/75 in-data-scrolled:backdrop-blur in-data-scrolled:pb-8',
                        'has-data-[state=open]:ring-foreground/5 has-data-[state=open]:bg-card/75 has-data-[state=open]:shadow-lg has-data-[state=open]:backdrop-blur has-data-[state=open]:border-b has-data-[state=open]:shadow-black/10 has-data-[state=open]:h-[calc(var(--navigation-menu-viewport-height)+3.4rem)]',
                        'max-lg:in-data-[state=active]:h-screen max-lg:in-data-[state=active]:bg-background/75 max-lg:in-data-[state=active]:backdrop-blur max-lg:h-16 max-lg:overflow-hidden max-lg:border-b bg-background pt-4'
                    )}>
                    <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                        <div className="relative flex flex-wrap items-center justify-between lg:py-4">
                            <div className="flex justify-between gap-8 max-lg:h-16 max-lg:w-full max-lg:border-b">
                                <Link
                                    href="/"
                                    aria-label="home"
                                    className="flex items-center space-x-2 py-2">
                                    <Logo/>
                                </Link>

                                {isLarge && <NavMenu />}
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    aria-label={isMobileMenuOpen == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-5 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-5 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>

                            {!isLarge && isMobileMenuOpen && <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />}

                            <div className="max-lg:in-data-[state=active]:mt-6 in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                    <ContactSalesDialog>
                                        <Button
                                            size="lg"
                                            className="font-bold">
                                            <span>Contact us</span>
                                        </Button>
                                    </ContactSalesDialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
    return (
        <nav
            role="navigation"
            className="w-full [--color-border:--alpha(var(--color-foreground)/5%)] [--color-muted:--alpha(var(--color-foreground)/5%)]">
            <Accordion
                type="single"
                collapsible
                className="**:hover:no-underline -mx-4 mt-0.5 space-y-0.5">
                <AccordionItem
                    value="services"
                    className="group relative border-b-0 before:pointer-events-none before:absolute before:inset-x-4 before:bottom-0 before:border-b">
                    <AccordionTrigger className="**:!font-normal data-[state=open]:bg-muted flex items-center justify-between px-4 py-3 text-lg text-black">Services</AccordionTrigger>
                    <AccordionContent className="pb-5">
                        <ul>
                            {SERVICES.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.href}
                                        onClick={closeMenu}
                                        className="px-4 py-2">
                                        <div className="text-base text-black">{service.name}</div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem
                    value="resources"
                    className="group relative border-b-0 before:pointer-events-none before:absolute before:inset-x-4 before:bottom-0 before:border-b">
                    <AccordionTrigger className="**:!font-normal data-[state=open]:bg-muted flex items-center justify-between px-4 py-3 text-lg text-black">Resources</AccordionTrigger>
                    <AccordionContent className="pb-5">
                        <ul>
                            {RESOURCES.map((resource, index) => (
                                <li key={index}>
                                    <Link
                                        href={resource.href}
                                        onClick={closeMenu}
                                        className="px-4 py-2">
                                        <div className="text-base text-black">{resource.name}</div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem
                    value="solutions"
                    className="group relative border-b-0 before:pointer-events-none before:absolute before:inset-x-4 before:bottom-0 before:border-b">
                    <AccordionTrigger className="**:!font-normal data-[state=open]:bg-muted flex items-center justify-between px-4 py-3 text-lg text-black">Solutions</AccordionTrigger>
                    <AccordionContent className="pb-5">
                        <ul>
                            {SOLUTIONS.map((category, categoryIndex) => (
                                <li key={categoryIndex}>
                                    <div className="px-4 py-2 text-sm font-semibold text-black">{category.title}</div>
                                    <ul className="space-y-0">
                                        {category.items.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={item.href}
                                                    onClick={closeMenu}
                                                    className="px-6 py-2">
                                                    <div className="text-base text-black">{item.name}</div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem
                    value="partners"
                    className="group relative border-b-0 before:pointer-events-none before:absolute before:inset-x-4 before:bottom-0 before:border-b">
                    <Link
                        href="/partners"
                        onClick={closeMenu}
                        className="flex items-center justify-between px-4 py-3 text-lg text-black">
                        Partnership Program
                    </Link>
                </AccordionItem>
                <AccordionItem
                    value="who-we-are"
                    className="group relative border-b-0 before:pointer-events-none before:absolute before:inset-x-4 before:bottom-0 before:border-b">
                    <Link
                        href="/about"
                        onClick={closeMenu}
                        className="flex items-center justify-between px-4 py-3 text-lg text-black">
                        Company
                    </Link>
                </AccordionItem>
            </Accordion>
        </nav>
    )
}

const NavMenu = () => {
    const menuRef = React.useRef<React.ElementRef<typeof NavigationMenu>>(null)

    const handleViewportHeight = () => {
        requestAnimationFrame(() => {
            const menuNode = menuRef.current
            if (!menuNode) return

            const openContent = document.querySelector<HTMLElement>('[data-slot="navigation-menu-viewport"][data-state="open"]')

            if (openContent) {
                const height = openContent.scrollHeight
                document.documentElement.style.setProperty('--navigation-menu-viewport-height', `${height}px`)
                
                // Set right position to 0 to align with the right edge of the container
                document.documentElement.style.setProperty('--navigation-menu-right', `0px`)
            } else {
                document.documentElement.style.removeProperty('--navigation-menu-viewport-height')
                document.documentElement.style.removeProperty('--navigation-menu-right')
            }
        })
    }
    
    React.useEffect(() => {
        const updatePosition = () => {
            if (menuRef.current) {
                // Set right position to 0 to align with the right edge of the container
                document.documentElement.style.setProperty('--navigation-menu-right', `0px`)
            }
        }
        
        updatePosition()
        window.addEventListener('resize', updatePosition)
        return () => window.removeEventListener('resize', updatePosition)
    }, [])

    return (
        <NavigationMenu
            ref={menuRef}
            onValueChange={handleViewportHeight}
            className="**:data-[slot=navigation-menu-viewport]:bg-transparent **:data-[slot=navigation-menu-viewport]:rounded-none **:data-[slot=navigation-menu-viewport]:ring-0 **:data-[slot=navigation-menu-viewport]:border-0 **:data-[slot=navigation-menu-viewport]:shadow-none [--color-muted:color-mix(in_oklch,var(--color-foreground)_5%,transparent)] [--viewport-outer-px:2rem] max-lg:hidden">
            <NavigationMenuList className="gap-3">
                <NavigationMenuItem value="services">
                    <NavigationMenuTrigger className="text-black">Services</NavigationMenuTrigger>
                    <NavigationMenuContent className="mt-8 origin-top pb-14 pt-5 shadow-none ring-0">
                        <ul className="grid w-[600px] gap-3 p-4 grid-cols-2">
                            {SERVICES.map((service, index) => (
                                <ListItem
                                    key={index}
                                    href={service.href}
                                    title={service.name}
                                    description={service.description}>
                                    {service.icon}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem value="resources">
                    <NavigationMenuTrigger className="text-black">Resources</NavigationMenuTrigger>
                    <NavigationMenuContent className="mt-8 origin-top pb-14 pt-5 shadow-none ring-0">
                        <ul className="grid w-[600px] gap-3 p-4 grid-cols-2">
                            {RESOURCES.map((resource, index) => (
                                <ListItem
                                    key={index}
                                    href={resource.href}
                                    title={resource.name}
                                    description={resource.description}>
                                    {resource.icon}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem value="solutions">
                    <NavigationMenuTrigger className="text-black">Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent className="mt-8 origin-top pb-14 pt-5 shadow-none ring-0">
                        <div className="w-[1100px] grid grid-cols-4 gap-3 p-4">
                            {SOLUTIONS.map((category, categoryIndex) => {
                                if (category.title === 'By Industry') {
                                    const col1 = category.items.slice(0, 2);
                                    const col2 = category.items.slice(2, 4);
                                    const col3 = category.items.slice(4);
                                    return (
                                        <React.Fragment key={categoryIndex}>
                                            <div>
                                                <h3 className="text-sm font-semibold text-black mb-4 px-2">{category.title}</h3>
                                                <ul className="space-y-2">
                                                    {col1.map((item, index) => (
                                                        <ListItem
                                                            key={index}
                                                            href={item.href}
                                                            title={item.name}
                                                            description={item.description}>
                                                            {item.icon}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="pt-9">
                                                <ul className="space-y-2">
                                                    {col2.map((item, index) => (
                                                        <ListItem
                                                            key={index + 2}
                                                            href={item.href}
                                                            title={item.name}
                                                            description={item.description}>
                                                            {item.icon}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="pt-9">
                                                <ul className="space-y-2">
                                                    {col3.map((item, index) => (
                                                        <ListItem
                                                            key={index + 4}
                                                            href={item.href}
                                                            title={item.name}
                                                            description={item.description}>
                                                            {item.icon}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </div>
                                        </React.Fragment>
                                    );
                                }
                                return (
                                    <div key={categoryIndex}>
                                        <h3 className="text-sm font-semibold text-black mb-4 px-2">{category.title}</h3>
                                        <ul className="space-y-2">
                                            {category.items.map((item, index) => (
                                                <ListItem
                                                    key={index}
                                                    href={item.href}
                                                    title={item.name}
                                                    description={item.description}>
                                                    {item.icon}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/partners" className={cn(navigationMenuTriggerStyle(), "text-black")}>
                            Partnership Program
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/about" className={cn(navigationMenuTriggerStyle(), "text-black")}>
                            Company
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({ title, description, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string; title: string; description?: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block p-3 hover:bg-muted rounded-md transition-colors">
                    <div className="space-y-0.5">
                        <div className="text-black text-sm font-medium">{title}</div>
                        <p className="text-muted-foreground line-clamp-2 text-xs">{description}</p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
