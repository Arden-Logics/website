'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { trackGTMEvent } from '@/lib/gtm'

interface EnterpriseFormProps {
    isPartnerPage?: boolean
}

export const EnterpriseForm = ({ isPartnerPage = false }: EnterpriseFormProps) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [companySize, setCompanySize] = useState('')
    const [partnerType, setPartnerType] = useState('')
    const [msg, setMsg] = useState('')
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
                    name,
                    email,
                    company,
                    'company-size': companySize,
                    'partner-type': partnerType,
                    msg,
                }),
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.error || 'Failed to submit form')
            }

            trackGTMEvent({
                event: 'lead_form_submit',
                form_name: isPartnerPage ? 'partner_inquiry' : 'enterprise_contact',
                submission_status: 'success',
            })

            setSuccess(true)
            // Reset form
            setName('')
            setEmail('')
            setCompany('')
            setCompanySize('')
            setPartnerType('')
            setMsg('')
            
            // Reset success message after a delay
            setTimeout(() => {
                setSuccess(false)
            }, 5000)
        } catch (err) {
            trackGTMEvent({
                event: 'lead_form_submit',
                form_name: isPartnerPage ? 'partner_inquiry' : 'enterprise_contact',
                submission_status: 'error',
            })
            setError(err instanceof Error ? err.message : 'An error occurred')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="relative">
            <div className="mask-b-from-50% absolute -inset-6 px-6 pt-4">
                <div className="bg-card/75 ring-border-illustration size-full rounded-t-2xl shadow-xl shadow-black/15 ring-1"></div>
            </div>
            <form
                onSubmit={handleSubmit}
                className="**:[&>label]:block relative space-y-6 p-8 *:space-y-3">
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
                <div className="grid gap-3 *:space-y-3 sm:grid-cols-2">
                    <div>
                        <Label htmlFor="name">Full name</Label>
                        <Input
                            type="text"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </div>

                    <div>
                        <Label htmlFor="email">Work Email</Label>
                        <Input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                        type="text"
                        id="company"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <Label htmlFor="company-size">Company Size</Label>
                    <Select value={companySize} onValueChange={setCompanySize} disabled={isSubmitting}>
                        <SelectTrigger className="ring-foreground/10 bg-background border-transparent shadow-sm ring-1">
                            <SelectValue placeholder="Select Company Size" />
                        </SelectTrigger>
                        <SelectContent className="ring-foreground/6 border-transparent ring-1">
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-500">201-500 employees</SelectItem>
                            <SelectItem value="501-1000">501-1000 employees</SelectItem>
                            <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {isPartnerPage && (
                    <div>
                        <Label htmlFor="partner-type">Partner Type</Label>
                        <Select value={partnerType} onValueChange={setPartnerType} disabled={isSubmitting}>
                            <SelectTrigger className="ring-foreground/10 bg-background border-transparent shadow-sm ring-1">
                                <SelectValue placeholder="Select Partner Type" />
                            </SelectTrigger>
                            <SelectContent className="ring-foreground/6 border-transparent ring-1">
                                <SelectItem value="msp">Managed Service Provider</SelectItem>
                                <SelectItem value="voip">VOIP System Integrator</SelectItem>
                                <SelectItem value="av">AV Integrator</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                )}

                <div>
                    <Label htmlFor="msg">Message</Label>
                    <Textarea
                        id="msg"
                        rows={3}
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        disabled={isSubmitting}
                    />
                </div>

                <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
                    <p className="text-muted-foreground text-sm">
                        By submitting this form, you agree to our{' '}
                        <Link
                            href="#link"
                            className="text-primary underline">
                            Privacy Policy
                        </Link>
                    </p>
                    <Button className="max-sm:row-start-1" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Get in touch'}
                    </Button>
                </div>
            </form>
        </div>
    )
}