'use server';

import { createElement } from 'react';

import { Resend } from 'resend';

import { getErrorMessage, validateString } from '@/lib/utils';
import ContactFormEmail from '@/email/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const emailSender = formData.get('emailSender');
  const message = formData.get('message');

  if (!validateString(emailSender, 100)) {
    return {
      error: 'Invalid email sender',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'My portfolio contact form <onboarding@resend.dev>',
      to: 'dmytroo.stas@gmail.com',
      subject: 'Email from contact form',
      reply_to: emailSender as string,
      react: createElement(ContactFormEmail, {
        message: message as string,
        emailSender: emailSender as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
