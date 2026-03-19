'use client'

import { useState } from 'react'
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
import { trackGTMEvent } from '@/lib/gtm'

interface BookMeetingFormProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function BookMeetingForm({ open, onOpenChange }: BookMeetingFormProps) {
    const [fullName, setFullName] = useState('')
    const [businessEmail, setBusinessEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [employees, setEmployees] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [helpMessage, setHelpMessage] = useState('')
    const [smsConsent, setSmsConsent] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName,
                    businessEmail,
                    phoneNumber,
                    employees,
                    companyName,
                    helpMessage,
                    smsConsent,
                }),
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.error || 'Failed to submit form')
            }

            trackGTMEvent({
                event: 'lead_form_submit',
                form_name: 'book_meeting',
                submission_status: 'success',
            })

            setSuccess(true)
            // Reset form
            setFullName('')
            setBusinessEmail('')
            setPhoneNumber('')
            setEmployees('')
            setCompanyName('')
            setHelpMessage('')
            setSmsConsent(false)
            
            // Close dialog after a short delay
            setTimeout(() => {
                onOpenChange(false)
                setSuccess(false)
            }, 2000)
        } catch (err) {
            trackGTMEvent({
                event: 'lead_form_submit',
                form_name: 'book_meeting',
                submission_status: 'error',
            })
            setError(err instanceof Error ? err.message : 'An error occurred')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader className="text-center sm:text-center">
                    <DialogTitle className="text-2xl font-bold">Book a meeting</DialogTitle>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    {error && (
                        <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-md">
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full name*</Label>
                            <Input
                                type="text"
                                id="fullName"
                                placeholder="Full name*"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                disabled={isSubmitting}
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
                                value={businessEmail}
                                onChange={(e) => setBusinessEmail(e.target.value)}
                                disabled={isSubmitting}
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
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                disabled={isSubmitting}
                                className="border-gray-300"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="employees">Number of employees*</Label>
                            <Select required value={employees} onValueChange={setEmployees} disabled={isSubmitting}>
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
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            disabled={isSubmitting}
                            className="border-gray-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="helpMessage">How can we help you?</Label>
                        <Textarea
                            id="helpMessage"
                            placeholder="How can we help you?"
                            rows={4}
                            value={helpMessage}
                            onChange={(e) => setHelpMessage(e.target.value)}
                            disabled={isSubmitting}
                            className="border-gray-300 resize-none"
                        />
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                        By clicking the button below, you consent to receiving calls and emails from Arden 360
                        </p>
                        
                        <div className="flex items-start space-x-2">
                            <Checkbox 
                                id="smsConsent" 
                                className="mt-1"
                                checked={smsConsent}
                                onCheckedChange={(checked) => setSmsConsent(checked === true)}
                                disabled={isSubmitting}
                            />
                            <Label htmlFor="smsConsent" className="text-sm text-muted-foreground font-normal leading-relaxed">
                            I consent to receive marketing SMS from Arden 360 about its services. Message and Data rates apply.
                            </Label>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                        <Button type="submit" size="lg" className="px-8" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
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
