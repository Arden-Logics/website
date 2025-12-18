import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'

interface EnterpriseFormProps {
    isPartnerPage?: boolean
}

export const EnterpriseForm = ({ isPartnerPage = false }: EnterpriseFormProps) => {
    return (
        <div className="relative">
            <div className="mask-b-from-50% absolute -inset-6 px-6 pt-4">
                <div className="bg-card/75 ring-border-illustration size-full rounded-t-2xl shadow-xl shadow-black/15 ring-1"></div>
            </div>
            <form
                action=""
                className="**:[&>label]:block relative space-y-6 p-8 *:space-y-3">
                <div className="grid gap-3 *:space-y-3 sm:grid-cols-2">
                    <div>
                        <Label htmlFor="name">Full name</Label>
                        <Input
                            type="text"
                            id="name"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="email">Work Email</Label>
                        <Input
                            type="email"
                            id="email"
                            required
                        />
                    </div>
                </div>

                <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                        type="text"
                        id="company"
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="company-size">Company Size</Label>
                    <Select>
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
                        <Select>
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
                    <Button className="max-sm:row-start-1">Get in touch</Button>
                </div>
            </form>
        </div>
    )
}