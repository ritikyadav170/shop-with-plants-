import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function AboutPage() {
  return (
    <div className="bg-green-200 h-[610px] flex flex-col justify-center items-center">
      {/* Centered Heading */}
      <h2 className="text-3xl font-bold text-gray-800 ">What do they say about us?</h2>
      
      <div className="flex gap-10 mx-52 mt-7 mb-4">
        {/* Card 1 */}
        <div className="p-6 rounded-lg bg-white shadow-md h-96">
          <div className="flex gap-4 items-center">
            <img src="/Chhota.png" alt="Chhota bheem" className="w-10 h-12 rounded-full" />
            <h3 className="font-bold text-lg">Chhota Bheem</h3>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              <FaQuoteLeft className="text-gray-400" />
              Great service, beautiful flowers, timely delivery. Highly recommend.
              <FaQuoteRight className="text-gray-400" />
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-4 rounded-lg bg-white shadow-md h-96">
          <div className="flex gap-4 items-center">
            <img src="/Rahul.png" alt="Rahul" className="w-10 h-12 rounded-full" />
            <h3 className="font-bold text-lg">Rahul</h3>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              <FaQuoteLeft className="text-gray-400" />
              Great service, beautiful flowers, timely delivery. Highly recommend.
              <FaQuoteRight className="text-gray-400" />
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-4 rounded-lg bg-white shadow-md h-96">
          <div className="flex gap-4 items-center">
            <img src="/Chutki.png" alt="Chutki" className="w-10 h-12 rounded-full" />
            <h3 className="font-bold text-lg">Chutki</h3>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              <FaQuoteLeft className="text-gray-400" />
              Great service, beautiful flowers, timely delivery. Highly recommend.
              <FaQuoteRight className="text-gray-400" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
