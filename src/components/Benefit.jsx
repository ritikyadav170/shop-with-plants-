import React from 'react';
import { FaClock, FaSeedling,  FaTemperatureHigh, FaCut } from 'react-icons/fa';



const Benefit = () => {
  return (
    <div className="bg-green-200 min-h-screen flex items-center">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Image */}
        <div className="flex justify-center items-center">
          <img
            src="/p1.jpg" // Note the leading slash for images in the public folder
            alt="Nature"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Right Section - Content */}
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <FaClock className="text-green-500 text-4xl" />
            <h3 className="text-xl font-bold mt-4">Quality Product</h3>
            <p className="text-gray-600 mt-2">
              Our flowers are of the highest quality, carefully selected and sourced from reputable
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <FaSeedling className="text-green-500 text-4xl" />
            <h3 className="text-xl font-bold mt-4">Always Fresh</h3>
            <p className="text-gray-600 mt-2">
              Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <FaTemperatureHigh className="text-green-500 text-4xl" />
            <h3 className="text-xl font-bold mt-4">Work Smart</h3>
            <p className="text-gray-600 mt-2">
              We work smart, using innovative techniques and technology to streamline our processes
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <FaCut className="text-green-500 text-4xl" />
            <h3 className="text-xl font-bold mt-4">Excellent Service</h3>
            <p className="text-gray-600 mt-2">
              Our team is dedicated to providing excellent service, ensuring customer satisfaction at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
