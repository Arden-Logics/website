'use client'

import { SERVICES } from "@/constants";
import ServiceScrollNav from "@/components/service-scroll-nav";
import ServiceSection from "@/components/service-section";

export default function ServicesPageContent() {
    // Create navigation items from services
    const navItems = SERVICES.map(service => ({
        id: service.href.split('/').pop() || '',
        label: service.name
    }));

    return (
        <>
            {/* Scroll Navigation */}
            <ServiceScrollNav items={navItems} />

            {/* Service Sections */}
            {SERVICES.map((service, index) => (
                <ServiceSection
                    key={service.href}
                    id={service.href.split('/').pop() || ''}
                    title={service.name}
                    description={service.description}
                    linkText={`Learn more about ${service.name}`}
                    linkHref={service.href}
                    imageSrc="/arden-logo.png"
                    imageAlt={service.name}
                    imageOnRight={index % 2 === 0}
                />
            ))}
        </>
    )
}

