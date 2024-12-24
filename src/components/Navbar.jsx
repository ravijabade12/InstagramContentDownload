import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <FaInstagram className="h-8 w-8 text-pink-600" />
            <span className="ml-2 text-xl font-bold">InstaDownloader</span>
          </div>
          <div className="flex items-center">
            <a href="#features" className="text-gray-700 hover:text-pink-600 px-3 py-2">Features</a>
            <a href="#download" className="text-gray-700 hover:text-pink-600 px-3 py-2">Download</a>
            <a href="#testimonials" className="text-gray-700 hover:text-pink-600 px-3 py-2">Testimonials</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;