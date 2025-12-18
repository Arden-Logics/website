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
                        <DialogTitle className="text-3xl font-bold">Contact sales</DialogTitle>
                        <DialogDescription className="text-base text-muted-foreground mt-2">
                            Let&apos;s talk about bringing your team and customer conversations together on one AI-powered communications platform.
                        </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid gap-6 md:grid-cols-3 mt-8">
                        {/* Book a meeting */}
                        <div className="flex flex-col items-center text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center mb-4">
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
                            <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center mb-4">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Email us</h3>
                            <Button 
                                size="lg" 
                                className="w-full"
                                asChild
                            >
                                <Link href="mailto:contact@ardenlogics.com">
                                    Email now
                                </Link>
                            </Button>
                        </div>

                        {/* Call us now */}
                        <div className="flex flex-col items-center text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center mb-4">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Call us now</h3>
                            <Link 
                                href="tel:+18556172859" 
                                className="text-xl font-semibold text-primary hover:underline underline-offset-4 decoration-dotted"
                            >
                                (855) 617 2859
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-8 text-muted-foreground">
                        Looking for product support? Visit our{' '}
                        <Link href="/support" className="text-primary font-medium hover:underline">
                            Support Center
                        </Link>.
                    </div>
                </DialogContent>
            </Dialog>

            <BookMeetingForm open={bookMeetingOpen} onOpenChange={setBookMeetingOpen} />
        </>
    )
}
