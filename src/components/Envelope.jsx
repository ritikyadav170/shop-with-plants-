import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

function Envelope() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email); // Log the email for debugging
  };

  return (
    <div
      className="h-96 flex items-center justify-center bg-green-200 bg-cover bg-center"
      style={{
        backgroundImage: `url('/pot1.jpeg')`, // Corrected path
      }}
    >
      <div className="p-8 rounded-lg shadow-md w-3/4 flex bg-white bg-opacity-80 backdrop-blur-sm">
        {/* Left Section */}
        <div className="w-1/2 pr-4">
          <h2 className="text-2xl font-bold mb-4">
            Enter Your Email Address For Our Mailing Promo Or Other Interesting Things
          </h2>
        </div>

        {/* Right Section */}
        <div className="w-1/2 pl-4">
          <form onSubmit={handleSubmit} className="flex items-center">
            <div className="flex items-center w-full">
              <FaEnvelope className="text-gray-400 mr-2 h-6 w-6" />
              <input
                type="email"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="ml-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Envelope;
