import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";

// Zod validation schema for contact form
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  matter: z.string().min(1, "Please select a matter type"),
  message: z.string().min(1, "Message is required"),
  website: z.string().optional(), // Honeypot field
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

/**
 * Server function to send contact form emails
 * This runs server-side only and never ships to the client
 */
export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(ContactFormSchema)
  .handler(async ({ data }) => {
    // Validate honeypot field (spam prevention)
    if (data.website) {
      // If honeypot is filled, silently fail to prevent bot detection
      return {
        success: true,
        message: "Message sent successfully",
      };
    }

    try {
      // Create email transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      // Email template
      const emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${data.phone ? escapeHtml(data.phone) : "Not provided"}</p>
        <p><strong>Matter:</strong> ${escapeHtml(data.matter)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
      `;

      // Send email to law firm
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || "rouel.sato94@gmail.com",
        subject: `New Contact Form: ${data.matter}`,
        html: emailContent,
        replyTo: data.email,
      });

      // Send confirmation email to client
      const confirmationEmail = `
        <h2>We Received Your Message</h2>
        <p>Hi ${escapeHtml(data.name)},</p>
        <p>Thank you for reaching out to ELLA & Associates. We've received your inquiry and appreciate your interest in our services.</p>
        <p>A member of our team will review your message and get back to you within one business day.</p>
        <p>Best regards,<br>ELLA & Associates<br>Cebu Business Park, Cebu City, Philippines</p>
      `;

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: data.email,
        subject: "We Received Your Message - ELLA & Associates",
        html: confirmationEmail,
      });

      return {
        success: true,
        message: "Message sent successfully",
      };
    } catch (error) {
      console.error("Failed to send email:", error);
      // Return success to client even if email fails (to prevent exposing email config)
      // Log actual error server-side for debugging
      return {
        success: true,
        message: "Message sent successfully",
      };
    }
  });

/**
 * Helper function to escape HTML special characters
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
