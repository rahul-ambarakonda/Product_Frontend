import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8">
        <div className="text-2xl font-bold text-gray-800">Modern Kitchens</div>
        <nav className="hidden md:block"> {/* Hide on small, show on medium and up */}
          <ul className="flex space-x-6">
            <li><a href="/" className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">Home</a></li>
            <li><a href="/products" className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">Products</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">About</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">Contact</a></li>
          </ul>
        </nav>
        <div className="md:hidden"> {/* Show hamburger on small screens */}
          <button className="text-gray-600 hover:text-indigo-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
