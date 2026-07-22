
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Placeholder for background image or solid color */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://via.placeholder.com/1920x1080?text=Kitchen+Appliances"
          alt="Kitchen Appliances"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Discover Modern Kitchen Appliances
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-300">
          Elevate your culinary experience with our curated selection.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
