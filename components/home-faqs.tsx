'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    id: 'faq-1',
    question: 'What makes Arden Logics different from other IT providers?',
    answer: 'We take a proactive, strategy-first approach not just break-fix support. Every client gets senior-level engineering, clear communication, transparent pricing, and technology that\'s designed around real business needs.',
  },
  {
    id: 'faq-2',
    question: 'Do you offer 24/7 monitoring and support?',
    answer: 'Yes. We provide continuous monitoring, real-time alerts, and U.S.-based support to resolve issues quickly and prevent downtime before it impacts your business.',
  },
  {
    id: 'faq-3',
    question: 'Can you work with multi-location or hybrid environments?',
    answer: 'Absolutely. We specialize in complex, multi-site infrastructures from cloud and networking to VoIP, security, and AV. Our solutions scale easily across locations and remote teams.',
  },
  {
    id: 'faq-4',
    question: 'How does onboarding and migration work?',
    answer: 'We handle the entire transition end-to-end, including planning, documentation, configuration, deployment, and user support all with zero disruption to your operations.',
  },
]

export default function HomeFAQs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            Frequently asked questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-foreground/10 px-0"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

