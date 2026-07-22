
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Copyright Information */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm">&copy; 2023 Modern Kitchens. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="text-sm hover:text-indigo-400 transition duration-300">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-indigo-400 transition duration-300">Terms of Service</a>
          <a href="#" className="text-sm hover:text-indigo-400 transition duration-300">Contact</a>
        </div>

        {/* Social Media Placeholders */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-300">
            {/* Replace with actual SVG icons */}
            FB
          </a>
          <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-300">
            TW
          </a>
          <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-300">
            IG
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
