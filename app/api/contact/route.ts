import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      fullName,
      businessEmail,
      phoneNumber,
      employees,
      companyName,
      helpMessage,
      smsConsent,
      // Enterprise form fields
      name,
      email,
      company,
      'company-size': companySize,
      'partner-type': partnerType,
      msg,
    } = body

    // Determine which form was submitted and format the email accordingly
    const isBookMeetingForm = fullName && businessEmail
    const isEnterpriseForm = name && email

    if (!isBookMeetingForm && !isEnterpriseForm) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format email content based on form type
    let emailSubject: string
    let emailHtml: string

    if (isBookMeetingForm) {
      emailSubject = `New Contact Form Submission from ${fullName}`
      emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Business Email:</strong> ${businessEmail}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber || 'Not provided'}</p>
        <p><strong>Number of Employees:</strong> ${employees || 'Not provided'}</p>
        <p><strong>Company Name:</strong> ${companyName || 'Not provided'}</p>
        <p><strong>How can we help:</strong></p>
        <p>${helpMessage || 'Not provided'}</p>
        <p><strong>SMS Consent:</strong> ${smsConsent ? 'Yes' : 'No'}</p>
      `
    } else {
      emailSubject = `New Enterprise Contact Form Submission from ${name}`
      emailHtml = `
        <h2>New Enterprise Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Work Email:</strong> ${email}</p>
        <p><strong>Company Name:</strong> ${company || 'Not provided'}</p>
        <p><strong>Company Size:</strong> ${companySize || 'Not provided'}</p>
        ${partnerType ? `<p><strong>Partner Type:</strong> ${partnerType}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${msg || 'Not provided'}</p>
      `
    }

    const { data, error } = await resend.emails.send({
      from: 'do-not-reply@arden360.com',
      to: 'sales@arden360.com',
      cc: 'tsinh@arden360.com',
      subject: emailSubject,
      html: emailHtml,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
