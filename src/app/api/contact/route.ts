import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, serviceType, preferredDate, propertyName } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email to admin
    const adminEmailHtml = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="background: linear-gradient(135deg, #ff6b35, #f7931e); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
        </div>

        <div style="padding: 30px; background: white; border-left: 4px solid #ff6b35;">
          ${propertyName ? `
            <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #ff6b35; margin: 0 0 10px 0;">Property Inquiry</h3>
              <p style="margin: 0; font-weight: bold;">${propertyName}</p>
            </div>
          ` : ''}

          <h2 style="color: #333; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">Contact Details</h2>

          <div style="display: grid; gap: 15px; margin: 20px 0;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <strong style="min-width: 120px; color: #555;">Name:</strong>
              <span>${name}</span>
            </div>

            <div style="display: flex; align-items: center; gap: 10px;">
              <strong style="min-width: 120px; color: #555;">Email:</strong>
              <a href="mailto:${email}" style="color: #ff6b35; text-decoration: none;">${email}</a>
            </div>

            <div style="display: flex; align-items: center; gap: 10px;">
              <strong style="min-width: 120px; color: #555;">Phone:</strong>
              <a href="tel:${phone}" style="color: #ff6b35; text-decoration: none;">${phone}</a>
            </div>

            <div style="display: flex; align-items: center; gap: 10px;">
              <strong style="min-width: 120px; color: #555;">Service Type:</strong>
              <span>${serviceType}</span>
            </div>

            ${preferredDate ? `
              <div style="display: flex; align-items: center; gap: 10px;">
                <strong style="min-width: 120px; color: #555;">Preferred Date:</strong>
                <span>${new Date(preferredDate).toLocaleDateString()}</span>
              </div>
            ` : ''}
          </div>

          ${message ? `
            <h3 style="color: #333; margin-top: 25px; margin-bottom: 10px;">Message</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 3px solid #ff6b35;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              Submitted on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>

        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">Cohousy - Premium Co-living Spaces</p>
          <p style="margin: 5px 0 0 0; opacity: 0.8;">This is an automated message from your contact form</p>
        </div>
      </div>
    `

    // Thank you email to user
    const userEmailHtml = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="background: linear-gradient(135deg, #ff6b35, #f7931e); padding: 30px; text-align: center;">
          <img src="https://your-domain.com/logo.png" alt="Cohousy" style="height: 40px; margin-bottom: 15px;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Thank You for Your Inquiry!</h1>
        </div>

        <div style="padding: 30px; background: white;">
          <h2 style="color: #333;">Dear ${name},</h2>

          <p>Thank you for your interest in Cohousy! We've received your inquiry and our team will get back to you within 24 hours.</p>

          <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ff6b35;">
            <h3 style="color: #ff6b35; margin: 0 0 15px 0;">Your Inquiry Details:</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li><strong>Service:</strong> ${serviceType}</li>
              ${propertyName ? `<li><strong>Property:</strong> ${propertyName}</li>` : ''}
              ${preferredDate ? `<li><strong>Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</li>` : ''}
            </ul>
          </div>

          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Browse our <a href="https://your-domain.com/co-living" style="color: #ff6b35;">premium co-living spaces</a></li>
            <li>Check out our <a href="https://your-domain.com/amenities" style="color: #ff6b35;">world-class amenities</a></li>
            <li>Read about our <a href="https://your-domain.com/community" style="color: #ff6b35;">vibrant community</a></li>
          </ul>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
            <h3 style="color: #333; margin: 0 0 10px 0;">Need Immediate Assistance?</h3>
            <p style="margin: 0 0 15px 0;">Call us at <a href="tel:+918908903900" style="color: #ff6b35; font-weight: bold;">+918908903900</a></p>
            <p style="margin: 0; font-size: 14px; color: #666;">Available Mon-Sat, 9 AM - 8 PM</p>
          </div>

          <p>Best regards,<br>
          <strong>Team Cohousy</strong></p>
        </div>

        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">Cohousy - Redefining Urban Living</p>
          <p style="margin: 5px 0 0 0; opacity: 0.8;">Premium Co-living Spaces in Kharadi, Pune</p>
        </div>
      </div>
    `

    // Send emails
    const msgs = [
      {
        to: process.env.ADMIN_EMAIL!, // Your admin email
        from: process.env.FROM_EMAIL!, // Your verified sender email
        subject: `New Contact Form Submission - ${serviceType}${propertyName ? ` - ${propertyName}` : ''}`,
        html: adminEmailHtml,
      },
      {
        to: email,
        from: process.env.FROM_EMAIL!,
        subject: 'Thank you for your inquiry - Cohousy',
        html: userEmailHtml,
      }
    ]

    await sgMail.send(msgs)

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
