import React from 'react';

const ContactUs = () => {
  return (
    // <a href="https://ibb.co/TLWG7Fn"><img src="https://i.ibb.co/SrfgM91/Contact-Us-Background.png" alt="Contact-Us-Background" border="0"></a>
    <div className="relative min-h-screen bg-cover bg-center" 
         style={{ backgroundImage: 'url(https://i.ibb.co/SrfgM91/Contact-Us-Background.png)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="text-white max-w-lg">
          <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
          <p className="mb-4">
            For inquiries or more information, feel free to reach out to us through any of the following channels:
          </p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> luxuryrealestate@gmail.com</p>
          <p className="mt-4">12
            <strong>Address:</strong> Flat 3B, Kesar Heights, S.V. Road, Borivali (West), Mumbai - 400092, Maharashtra, India.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-[#1b1d29] p-8 rounded-lg shadow-lg w-full max-w-md">
          <form className="space-y-4">
            <div>
              <label className="block text-white mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Surname</label>
              <input
                type="text"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your surname"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-md transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
