
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Information */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm">&copy; 2023 Modern Kitchens. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
          <a href="#" className="text-sm hover:text-gray-400">Contact</a>
        </div>

        {/* Social Media Placeholders */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            {/* Replace with actual SVG icons */}
            <i className="fab fa-facebook-f"></i>
            FB
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-twitter"></i>
            TW
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
            IG
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
