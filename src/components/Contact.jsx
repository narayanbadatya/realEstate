import React from 'react';
import bg from '../assets/contactbg.png'; // Ensure correct path to your background image

const ContactForm = () => {
  return (
    <div id="contact" className="relative min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Form and Text Content */}
      <div className="relative z-10 flex flex-row md:flex-row items-start justify-between max-w-6xl w-full space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold text-white">Contact Us</h2>
          <p className="mt-2 text-sm text-white">
            For inquiries or more information, feel free to reach out to us through any of the following channels:
          </p>
          <div className="mt-4 text-sm text-white">
            <p>Phone: +91 98765 43210</p>
            <p>Email: luxuryrealestate@gmail.com</p>
            <p>Address: Flat 3B, Kesar Heights, S.V. Road, Borivali (West), Mumbai - 400092, Maharashtra, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#111B37] bg-opacity-90 p-8 rounded-lg shadow-xl w-full md:w-1/2">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Surname"
              />
            </div>
            <div>
              <input
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
