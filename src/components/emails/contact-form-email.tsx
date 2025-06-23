import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({ name, email, message }) => (
  <div>
    <h1>New message from your portfolio contact form</h1>
    <p>
      You have received a new message from <strong>{name}</strong> ({email}).
    </p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
