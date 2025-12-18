'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import Link from 'next/link'

interface BookMeetingFormProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function BookMeetingForm({ open, onOpenChange }: BookMeetingFormProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted')
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader className="text-center sm:text-center">
                    <DialogTitle className="text-2xl font-bold">Book a meeting</DialogTitle>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full name*</Label>
                            <Input
                                type="text"
                                id="fullName"
                                placeholder="Full name*"
                                required
                                className="border-gray-300"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="businessEmail">Business email*</Label>
                            <Input
                                type="email"
                                id="businessEmail"
                                placeholder="Business email*"
                                required
                                className="border-gray-300"
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="phoneNumber">Phone number*</Label>
                            <Input
                                type="tel"
                                id="phoneNumber"
                                placeholder="Phone number*"
                                required
                                className="border-gray-300"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="employees">Number of employees*</Label>
                            <Select required>
                                <SelectTrigger className="border-gray-300">
                                    <SelectValue placeholder="Number of employees*" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1-10">1-10 employees</SelectItem>
                                    <SelectItem value="11-50">11-50 employees</SelectItem>
                                    <SelectItem value="51-200">51-200 employees</SelectItem>
                                    <SelectItem value="201-500">201-500 employees</SelectItem>
                                    <SelectItem value="501-1000">501-1000 employees</SelectItem>
                                    <SelectItem value="1000+">1000+ employees</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="companyName">Company name*</Label>
                        <Input
                            type="text"
                            id="companyName"
                            placeholder="Company name*"
                            required
                            className="border-gray-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="helpMessage">How can we help you?</Label>
                        <Textarea
                            id="helpMessage"
                            placeholder="How can we help you?"
                            rows={4}
                            className="border-gray-300 resize-none"
                        />
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            By clicking the button below, you consent to receiving calls and emails from Arden Logics.
                        </p>
                        
                        <div className="flex items-start space-x-2">
                            <Checkbox id="smsConsent" className="mt-1" />
                            <Label htmlFor="smsConsent" className="text-sm text-muted-foreground font-normal leading-relaxed">
                                I consent to receive marketing SMS from Arden Logics about its services. Message and Data rates apply.
                            </Label>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                        <Button type="submit" size="lg" className="px-8">
                            Submit
                        </Button>
                        <span className="text-sm text-muted-foreground">*Required fields</span>
                    </div>

                    <div className="pt-2">
                        <Link href="/privacy" className="text-primary text-sm hover:underline">
                            Privacy Notice
                        </Link>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
