import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  role: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c5f6f; border-bottom: 2px solid #2c5f6f; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
            ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
            ${validatedData.role ? `<p><strong>Role:</strong> ${validatedData.role}</p>` : ''}
            ${validatedData.serviceInterest ? `<p><strong>Service Interest:</strong> ${validatedData.serviceInterest}</p>` : ''}
            <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #2c5f6f;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${validatedData.message}</p>
            </div>
          </div>
        </div>
      `;

      const result = await resend.emails.send({
        from: 'AMJ Solutions Group <contact@amjsolutionsgroup.com>',
        to: 'ana@amjsolutionsgroup.com',
        subject: `New Contact Form Submission from ${validatedData.name}`,
        html: emailHtml,
        replyTo: validatedData.email,
      });

      if (result.error) {
        console.error('Resend API error:', result.error);
        res.status(500).json({ success: false, message: 'Failed to send message. Please try again or email us directly at ana@amjsolutionsgroup.com' });
        return;
      }

      res.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending contact form:', error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: 'Invalid form data', errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: 'Failed to send message. Please try again or email us directly at ana@amjsolutionsgroup.com' });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
