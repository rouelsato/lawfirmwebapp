# Contact Form Email Implementation Guide

## Overview
The contact form now sends actual emails using Node.js Nodemailer with SMTP configuration. When a user submits the form:

1. **Admin Email**: The law firm receives the form submission with all details
2. **Client Email**: An automatic confirmation email is sent to the client

## Files Modified

### 1. [src/lib/api/contact.functions.ts](src/lib/api/contact.functions.ts) (NEW)
Server-side email handler using TanStack Start's `createServerFn`:
- Validates form data with Zod schema
- Prevents spam using honeypot field
- Sends two emails: one to admin, one to client
- Escapes HTML to prevent injection attacks
- Runs server-only (never shipped to client)

### 2. [src/routes/contact.tsx](src/routes/contact.tsx) (UPDATED)
Contact form component enhancements:
- Added form submission handler that calls the server function
- Added loading state with spinner animation
- Added error handling with error message display
- Form ref to capture and send data

## Setup Instructions

### Step 1: Create `.env.local` File
Copy [.env.example](.env.example) to `.env.local` and fill in your SMTP credentials:

```bash
cp .env.example .env.local
```

### Step 2: Configure SMTP Settings
Edit `.env.local` with your email service credentials:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=rouel.sato94@gmail.com
```

### Step 3: Gmail Setup (Recommended)
If using Gmail:

1. Enable 2-Step Verification: https://myaccount.google.com/security
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use the 16-character password in `SMTP_PASSWORD`

### Step 4: Alternative Email Providers
You can use any SMTP provider:
- **SendGrid**: `smtp.sendgrid.net:587`
- **Mailgun**: `smtp.mailgun.org:587`
- **AWS SES**: `email-smtp.region.amazonaws.com:587`
- **Brevo (Sendinblue)**: `smtp-relay.brevo.com:587`

## Email Flow

### User Submits Form
```
┌─────────────────────┐
│  Form Submission    │
│  (Client-side)      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  sendContactEmail Server Function   │
│  ✓ Validate with Zod schema         │
│  ✓ Check honeypot field             │
│  ✓ Create SMTP transporter          │
└──────────┬──────────────────────────┘
           │
           ├─────────────────────────────────┐
           │                                 │
           ▼                                 ▼
    ┌─────────────────┐         ┌──────────────────┐
    │  Send to Admin  │         │  Send to Client  │
    │                 │         │                  │
    │ rouel@...       │         │ client@email.com │
    └─────────────────┘         └──────────────────┘
```

## Form Validation

The form uses Zod schema validation:
- **name**: Required, non-empty string
- **email**: Required, valid email format
- **phone**: Optional, any string
- **matter**: Required, non-empty string (select option)
- **message**: Required, non-empty string
- **website**: Honeypot field (spam prevention)

## Security Features

1. **Honeypot Field**: Hidden form field that bots may fill out, triggering silent failure
2. **HTML Escaping**: All user input is escaped to prevent XSS attacks
3. **Server-Side Only**: Email configuration never reaches the client
4. **Environment Variables**: Sensitive credentials stored in `.env.local` (git-ignored)
5. **Error Hiding**: Actual email errors logged server-side, generic message shown to client

## Email Templates

### Admin Email Subject
```
New Contact Form: {matter_type}
```

### Admin Email Body
Contains all form details formatted as HTML with proper formatting for easy reading.

### Client Confirmation Email Subject
```
We Received Your Message - ELLA & Associates
```

### Client Email Body
Professional confirmation message thanking the client and setting expectations.

## Troubleshooting

### Email Not Sending
1. Check `.env.local` exists and has correct values
2. Verify SMTP credentials are correct
3. Check firewall isn't blocking SMTP port
4. Check email provider allows SMTP access
5. For Gmail, ensure App Password is used (not regular password)

### Testing
Test the form by:
1. Filling out all required fields
2. Clicking "Send message"
3. Check the loading spinner appears
4. Check your email inbox (both admin and client emails)

### Debug Mode
Add console logging in `src/lib/api/contact.functions.ts` handler:
```typescript
console.log("Email sending...", { to: process.env.CONTACT_EMAIL });
```

## Next Steps

- [ ] Create `.env.local` with SMTP credentials
- [ ] Test the contact form with test email
- [ ] Customize email templates if needed
- [ ] Add email rate limiting (optional)
- [ ] Add attachment support (optional)
- [ ] Add email scheduling/queue (optional)

## Dependencies Added
- `nodemailer`: ^11.0.0 (or latest)
- `@types/nodemailer`: (dev dependency for TypeScript)
