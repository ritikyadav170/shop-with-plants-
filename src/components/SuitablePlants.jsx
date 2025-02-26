import React from 'react';
import { FaSeedling, FaSun, FaTree } from 'react-icons/fa';

const SuitablePlants = () => {
  return (
    <div className="bg-green-100 py-16 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mt-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          We Help Choose The Most Suitable Plants For You
        </h2>
        {/* Subtitle */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants. We also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center h-[310px] mt-12">
            <img
              src="https://images.unsplash.com/photo-1541449980844-2b957b87f72f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDd8fGluZG9vciUyMHBsYW50c3x8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
              alt=""
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2"></h3>
            <p className="text-gray-600 text-center">
              Bring the beauty of nature to your indoor spaces with our wide selection of indoor plants.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-500 rounded-lg shadow-lg p-6 flex flex-col items-center text-white h-[310px] mt-12">
            <img
              src="https://images.unsplash.com/photo-1582573040881-42f3f45e1957?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDYyfHxlb3V0ZG9vcnxlbnwwfHx8fDE2NDk2OTQzNjg&ixlib=rb-1.2.1&q=80&w=1080"
              alt=""
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Outdoor Plants</h3>
            <p className="text-center">
              Bring a touch of greenery to your living spaces with our collection of outdoor plants.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center h-[310px] mt-12">
            <img
              src="https://images.unsplash.com/photo-1506748686210-e35c9e465f25?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDd8fHBsYW50JTIwcG90fGVufDB8fHx8fDE2NDk2ODk5MzM&ixlib=rb-1.2.1&q=80&w=1080"
              alt=""
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Plant pots</h3>
            <p className="text-gray-600 text-center">
              Add a touch of style to your indoor or outdoor spaces with our variety of plant pots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuitablePlants;
