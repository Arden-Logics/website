import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function StatsSection() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p className="text-muted-foreground text-lg">From products to the APIs and platforms helping developers and businesses innovate</p>
                        <div className="mb-12 mt-6 grid grid-cols-2 gap-2 divide-x md:mb-0">
                            <div className="space-y-2">
                                <div className="bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-4xl font-bold text-transparent">+1200</div>
                                <p className="text-muted-foreground text-sm">Stars on GitHub</p>
                            </div>
                            <div className="space-y-2 pl-6">
                                <div className="bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-4xl font-bold text-transparent">+500</div>
                                <p className="text-muted-foreground text-sm">Powered Apps</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="before:bg-primary relative max-w-xl space-y-6 pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
                            <img
                                className="h-5 w-fit"
                                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                alt="Nvidia Logo"
                                height="20"
                                width="auto"
                            />
                            <p className="text-foreground">Using Tailark has been like unlocking a secret design superpower. </p>

                            <div className="flex gap-2">
                                <Avatar className="ring-foreground/10 size-6 border border-transparent shadow ring-1">
                                    <AvatarImage
                                        src="https://avatars.githubusercontent.com/u/68236786?v=4"
                                        alt="Théo Balick"
                                    />
                                    <AvatarFallback>TB</AvatarFallback>
                                </Avatar>
                                <cite className="block font-medium">John Doe, CEO</cite>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}