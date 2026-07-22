import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-gray-800">Modern Kitchens</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">Home</a></li>
            <li><a href="/products" className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">Products</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">About</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
