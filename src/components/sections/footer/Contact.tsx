import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formDataToSend, // Directly pass the form data
          access_key: '328300aa-86e9-4b5b-bd2e-b28a9893ca7c', // Your Web3Forms API key
        }),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage('Thank you for contacting us! We will get back to you shortly.');
      } else {
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 border-b border-white/10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Contact Information */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
          <p className="text-gray-400 mb-6">
            Have any questions or want to get in touch with us? Drop us a message, and we'll get back to you.
          </p>

          <div className="space-y-6">
            <div className="flex items-center text-gray-400">
              <Mail className="w-6 h-6 mr-4 text-white" />
              <span>Email: esportsleaguenepal2024@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Phone className="w-6 h-6 mr-4 text-white" />
              <span>Phone: +977-123-456789</span>
            </div>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-6 h-6 mr-4 text-white" />
              <span>Address: New Baneshwor, Kathmandu, 56800</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto" autoComplete="on">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              autoComplete="name"  // Helps the browser recognize this as the user's name
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              autoComplete="email"  // Helps the browser recognize this as the user's email
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              autoComplete="off"  // If you don't want autofill for this field
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              rows={4}
            />
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
          {responseMessage && (
            <div className="mt-4 text-center text-white">
              <p>{responseMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
