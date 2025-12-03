export default function StatsSection() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
                <div className="flex flex-col items-center justify-center space-y-12">
                    {/* Section Title */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                            Powered by Partners
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Trusted by industry leaders to deliver exceptional solutions
                        </p>
                    </div>

                    {/* Partners Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full items-center justify-items-center">
                        {/* Microsoft */}
                        <div className="flex items-center justify-center h-20 hover:opacity-75 transition-opacity">
                            <svg className="w-32 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="50" y="50" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" dominantBaseline="middle">
                                    Microsoft
                                </text>
                            </svg>
                        </div>

                        {/* AWS */}
                        <div className="flex items-center justify-center h-20 hover:opacity-75 transition-opacity">
                            <svg className="w-32 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="50" y="50" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" dominantBaseline="middle">
                                    AWS
                                </text>
                            </svg>
                        </div>

                        {/* CDW */}
                        <div className="flex items-center justify-center h-20 hover:opacity-75 transition-opacity">
                            <svg className="w-32 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="50" y="50" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" dominantBaseline="middle">
                                    CDW
                                </text>
                            </svg>
                        </div>

                        {/* ADI */}
                        <div className="flex items-center justify-center h-20 hover:opacity-75 transition-opacity">
                            <svg className="w-32 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="50" y="50" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" dominantBaseline="middle">
                                    ADI
                                </text>
                            </svg>
                        </div>

                        {/* Cisco */}
                        <div className="flex items-center justify-center h-20 hover:opacity-75 transition-opacity">
                            <svg className="w-32 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="50" y="50" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" dominantBaseline="middle">
                                    Cisco
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
