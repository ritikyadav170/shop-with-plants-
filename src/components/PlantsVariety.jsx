import React from 'react';
import { FaHeart } from 'react-icons/fa';

function PlantsVariety() {
  return (
    <div className="bg-green-200 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          What We Offer To You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* Cactus Plant */}
          <div className="border border-gray-300 rounded-md shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDdffGNhY3R1c3xlbnwwfHx8fDE2NDkwNTc1NzI&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Cactus Plant"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Cactus Plant</h2>
              <FaHeart className="text-gray-500" />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-2">
              Buy Now
            </button>
          </div>
          {/* Succulent Plant */}
          <div className="border border-gray-300 rounded-md shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1576655882663-b928b4f20303?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDYxfHwlMjBzdWNjZWxlbnQlMjBwbGFudHN8ZW58MHx8fDE2NDkwNTc2MzI&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Succulent Plant"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Succulent Plant</h2>
              <FaHeart className="text-gray-500" />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-2">
              Buy Now
            </button>
          </div>
          {/* Orchid Plant */}
          <div className="border border-gray-300 rounded-md shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1514516872028-1c1c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDlfZGFuZGFuYSUyMG5vcmQlMjBmb3J0cmVzc2VhfGVufDB8fHx8fDE2NDkwNTgxNzI&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Orchid Plant"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Orchid Plant</h2>
              <FaHeart className="text-gray-500" />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-2">
              Buy Now
            </button>
          </div>
          {/* Bonsai Tree */}
          <div className="border border-gray-300 rounded-md shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDJ8fGJvbnNhaSUyM3RyZWV8ZW58MHx8fDE2NDkwNTg4NzM&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Bonsai Tree"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Bonsai Tree</h2>
              <FaHeart className="text-gray-500" />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-2">
              Buy Now
            </button>
          </div>

          {/* Duplicating the same images for 2nd set of cards */}
          {/* Cactus Plant */}
          <div className="border border-gray-300 rounded-md shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDdffGNhY3R1c3xlbnwwfHx8fDE2NDkwNTc1NzI&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Cactus Plant"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Cactus Plant</h2>
              <FaHeart className="text-gray-500" />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-2">
              Buy Now
            </button>
          </div>
          {/* Succulent Plant */}
          <div className="border border-gray-300 rounded-md shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1576655882663-b928b4f20303?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDYxfHwlMjBzdWNjZWxlbnQlMjBwbGFudHN8ZW58MHx8fDE2NDkwNTc2MzI&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Succulent Plant"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Succulent Plant</h2>
              <FaHeart className="text-gray-500" />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-2">
              Buy Now
            </button>
          </div>
          {/* Orchid Plant */}
          <div className="border border-gray-300 rounded-md shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1514516872028-1c1c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDlfZGFuZGFuYSUyMG5vcmQlMjBmb3J0cmVzc2VhfGVufDB8fHx8fDE2NDkwNTgxNzI&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Orchid Plant"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Orchid Plant</h2>
              <FaHeart className="text-gray-500" />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-2">
              Buy Now
            </button>
          </div>
          {/* Bonsai Tree */}
          <div className="border border-gray-300 rounded-md shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDJ8fGJvbnNhaSUyM3RyZWV8ZW58MHx8fDE2NDkwNTg4NzM&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Bonsai Tree"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Bonsai Tree</h2>
              <FaHeart className="text-gray-500" />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantsVariety;
