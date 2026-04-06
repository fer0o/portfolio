import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

type ContactRequestBody = {
  name?: string
  email?: string
  subject?: string
  message?: string
  company?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody

    const name = body.name?.trim() ?? ''
    const email = body.email?.trim() ?? ''
    const subject = body.subject?.trim() ?? ''
    const message = body.message?.trim() ?? ''
    const company = body.company?.trim() ?? ''

    // Honeypot field for basic bot filtering.
    if (company) {
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      )
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPortRaw = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? smtpUser

    if (
      !smtpHost ||
      !smtpPortRaw ||
      !smtpUser ||
      !smtpPass ||
      !toEmail ||
      !fromEmail
    ) {
      return NextResponse.json(
        { error: 'Server email config is missing.' },
        { status: 500 }
      )
    }

    const smtpPort = Number(smtpPortRaw)
    if (!Number.isFinite(smtpPort)) {
      return NextResponse.json(
        { error: 'SMTP port is invalid.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    })

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Unexpected server error.' },
      { status: 500 }
    )
  }
}
