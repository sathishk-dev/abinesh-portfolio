'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/contact-form-email';
import * as React from 'react';
import { contactSchema } from '@/lib/schemas';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.PERSONAL_EMAIL || 'developer@example.com';

export async function sendEmailAction(data: z.infer<typeof contactSchema>) {
    const { name, email, message } = data;

    try {
        const { data: responseData, error } = await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: [toEmail],
          subject: 'New message from your portfolio!',
          reply_to: email,
          react: React.createElement(ContactFormEmail, {
            name,
            email,
            message,
          }),
        });

        if (error) {
          console.error('Error sending email:', error);
          return { success: false, error: 'Failed to send email.' };
        }

        return { success: true, data: responseData };
      } catch (exception) {
        console.error('An unexpected error occurred:', exception);
        return { success: false, error: 'An unexpected error occurred.' };
      }
}
