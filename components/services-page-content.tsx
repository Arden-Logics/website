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
            {/* <ServiceScrollNav items={navItems} /> */}

            
        </>
    )
}

