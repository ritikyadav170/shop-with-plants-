import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo & Contact Info */}
        <div>
          <img
            src=""
            alt="petal-shop"
            className="mx-auto md:mx-0 w-24 h-24 rounded-full object-cover shadow-lg"
          />
          <h2 className="text-xl font-semibold mt-3">Lush Plants</h2>
          <p className="mt-2 text-sm">
            Bringing nature closer to you with fresh and healthy plants.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">Shop</a></li>
            <li><a href="#" className="hover:text-gray-200">Categories</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-bold">Get in Touch</h3>
          <p className="mt-3 flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope /> lushplants@example.com
          </p>
          <p className="mt-2 flex items-center justify-center md:justify-start gap-2">
            <FaPhone /> +123 456 7890
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="hover:text-gray-200">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-400 mt-6 pt-4 text-center text-sm text-gray-300">
        © 2024 Lush Plants. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
