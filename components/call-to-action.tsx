'use client'

import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { ContactSalesDialog } from './contact-sales-dialog'

export default function CallToAction() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/call-to-action-background.jpeg"
          alt="Call to action background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-24 xl:px-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Get started with Arden Logics
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Enterprise technology solutions that support how your business operates today and where it’s headed next.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <ContactSalesDialog>
              <Button
                variant="outline"
                className="pr-3 text-base py-6 px-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Contact Us
                <ChevronRight className="size-5 opacity-50" />
              </Button>
            </ContactSalesDialog>
          </div>
        </div>
      </div>
    </section>
  )
}
