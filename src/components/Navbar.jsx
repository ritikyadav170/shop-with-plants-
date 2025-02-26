import React, { useState } from 'react';

const Navbar = () => {
  const [activeForm, setActiveForm] = useState('');

  const handleOpenForm = (form) => {
    setActiveForm(form);
  };

  const handleCloseForm = () => {
    setActiveForm('');
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/p1.jpg')", // Ensure this file exists in the public folder
      }}
    >
      {/* Overlay for Dark Tint */}
      <div className="bg-black bg-opacity-40 min-h-screen">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-5">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
           <h1>my-petal-pot</h1>
          </div>

          {/* Navigation Menu */}
          <ul className="flex space-x-10 gap-4 font-semibold text-white">
            {['Home', 'Grow Kits', 'Categories', 'Shop', 'Blog', 'About', 'Contact Us'].map(
              (item) => (
                <li key={item} className="hover:text-green-500 cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Login & Register Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => handleOpenForm('login')}
              className="bg-green-500 px-6 py-3 rounded-md text-white hover:bg-green-600"
            >
              Login
            </button>
            <button
              onClick={() => handleOpenForm('register')}
              className="bg-gray-800 px-6 py-3 rounded-md text-white hover:bg-gray-700"
            >
              Register
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center text-center text-white h-[calc(100vh-80px)]">
          <h1 className="text-5xl font-bold mb-4">Nature's Beauty Delivered to You</h1>
          <p className="text-lg mb-8 max-w-3xl">
            Nature's beauty is just a click away with our online flower and plant shop.
            We offer a wide variety of flowers that will bring a touch of nature to your home!
          </p>
        </div>

        {/* Login & Register Forms */}
        {activeForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-md shadow-md max-w-sm w-full relative">
              <button
                onClick={handleCloseForm}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
              >
                &times;
              </button>

              {/* Login Form */}
              {activeForm === 'login' && (
                <>
                  <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-700">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                    >
                      Login
                    </button>
                  </form>
                </>
              )}

              {/* Register Form */}
              {activeForm === 'register' && (
                <>
                  <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-700">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Phone No</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Confirm Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                    >
                      Register
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
