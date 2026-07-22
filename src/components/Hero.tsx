
import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8 overflow-hidden">
      {/* Placeholder for background image or solid color */}
      <div className="absolute inset-0">
        <Image
          alt="Modern Kitchen Appliances"
          src="https://via.placeholder.com/1920x1080?text=Modern+Kitchen+Appliance"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          Discover Modern Kitchen Appliances
        </h1>
        <p className="mt-4 text-lg sm:mt-6 sm:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Elevate your culinary experience with our curated selection of high-performance and stylish appliances.
        </p>
        <div className="mt-8 sm:mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-full text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300 ease-in-out transform hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
