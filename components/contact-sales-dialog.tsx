'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Calendar, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { CONTACT } from '@/constants/contact'
import { BookMeetingForm } from './book-meeting-form'

interface ContactSalesDialogProps {
    children: React.ReactNode
}

export function ContactSalesDialog({ children }: ContactSalesDialogProps) {
    const [open, setOpen] = useState(false)
    const [bookMeetingOpen, setBookMeetingOpen] = useState(false)

    const handleBookMeeting = () => {
        setOpen(false)
        setBookMeetingOpen(true)
    }

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[900px]">
                    <DialogHeader className="text-center sm:text-center">
                        <DialogTitle className="text-3xl font-bold">Contact Us</DialogTitle>
                        <DialogDescription className="text-base text-muted-foreground mt-2">
                            Get in touch to discuss your IT, security, and AV needs. Our team is ready to help you build a resilient infrastructure.
                        </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid gap-6 md:grid-cols-3 mt-8">
                        {/* Book a meeting */}
                        <div className="flex flex-col items-center text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                                <Calendar className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Book a meeting</h3>
                            <Button 
                                size="lg" 
                                className="w-full"
                                onClick={handleBookMeeting}
                            >
                                Book now
                            </Button>
                        </div>

                        {/* Email Us */}
                        <div className="flex flex-col items-center text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Email us</h3>
                            <Button 
                                size="lg" 
                                className="w-full"
                                asChild
                            >
                                <Link href={`mailto:${CONTACT.email}`}>
                                    Email now
                                </Link>
                            </Button>
                        </div>

                        {/* Call us now */}
                        <div className="flex flex-col items-center text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Call us now</h3>
                            <Link 
                                href={`tel:${CONTACT.phone}`}
                                className="text-xl font-semibold text-primary hover:underline underline-offset-4 decoration-dotted"
                            >
                                {CONTACT.phoneDisplay}
                            </Link>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <BookMeetingForm open={bookMeetingOpen} onOpenChange={setBookMeetingOpen} />
        </>
    )
}
