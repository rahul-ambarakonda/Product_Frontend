
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Placeholder for background image or solid color */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://via.placeholder.com/1920x1080?text=Modern+Kitchen+Appliance"
          alt="Modern Kitchen Appliances"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          Discover Modern Kitchen Appliances
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Elevate your culinary experience with our curated selection of high-performance and stylish appliances.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
