import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

function BlogCard() {
  return (
    <div className="bg-green-200 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Interesting Blog To Read</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="/blog1.jpeg" alt="Woman working at a desk with plants" className="w-full rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">More productive with an atmosphere of greenery</h2>
            <p className="text-gray-600 mb-4">
              An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...
            </p>
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <span className="text-gray-600">January 20, 2023</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Read More →</button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="/blog2.jpeg" alt="Desk with a laptop and coffee" className="w-full rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">The importance of a well-organized workspace</h2>
            <p className="text-gray-600 mb-4">
              A well-organized workspace can lead to better focus and efficiency. Keeping your desk tidy can help minimize distractions...
            </p>
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <span className="text-gray-600">February 15, 2023</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Read More →</button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="/blog3.jpeg" alt="Cozy reading nook" className="w-full rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">Creating a cozy reading nook</h2>
            <p className="text-gray-600 mb-4">
              A cozy reading nook can be a great escape from the hustle and bustle of daily life. It provides a perfect spot to unwind...
            </p>
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <span className="text-gray-600">March 10, 2023</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Read More →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
