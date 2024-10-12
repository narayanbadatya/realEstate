import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import bg from '../assets/contactbg.png'; // Adjust path if necessary

const service_key = import.meta.env.VITE_SERVICE_KEY || 'your_service_key';
const template_key = import.meta.env.VITE_TEMPLATE_KEY || 'your_template_key';
const public_key = import.meta.env.VITE_PUBLIC_KEY || 'your_public_key';

const ContactForm = () => {
  const [status, setStatus] = useState(''); // Feedback message
  const [isSubmitting, setIsSubmitting] = useState(false); // Submission state
  const form = useRef(); // Form reference

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button during submission

    emailjs
      .sendForm(service_key, template_key, form.current, public_key)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setStatus('Contact form submitted successfully!');
          e.target.reset(); // Reset the form on success
        },
        (error) => {
          console.error('Error sending email:', error);
          setStatus('Failed to submit contact form. Please try again later.');
        }
      )
      .finally(() => setIsSubmitting(false)); // Re-enable the button after submission
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between max-w-6xl w-full space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold text-white">Contact Us</h2>
          <p className="mt-2 text-sm text-white">
            For inquiries or more information, feel free to reach out to us through any of the following channels:
          </p>
          <div className="mt-4 text-sm text-white">
            <p>Phone: +91 98765 43210</p>
            <p>Email: luxuryrealestate@gmail.com</p>
            <p>
              Address: Flat 3B, Kesar Heights, S.V. Road, Borivali (West),
              Mumbai - 400092, Maharashtra, India
            </p>
          </div>
        </div>

        <div className="bg-[#111B37] bg-opacity-90 p-8 rounded-lg shadow-xl w-full md:w-1/2">
          <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="from_name" // Matches template variable
                required
                placeholder="Your Name"
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email" // Matches template variable
                required
                placeholder="Your Email"
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="tel"
                name="user_phone" // New phone field
                required
                placeholder="Your Phone Number"
                pattern="[0-9]{10}" // Ensures 10-digit phone numbers
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <textarea
                name="message" // Matches template variable
                required
                placeholder="Your Message"
                rows="4"
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting} // Disable while submitting
                className={`w-full py-2 px-4 border rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
          {status && (
            <p className="mt-4 text-white">
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
