import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products'; // Assuming products are exported from here

const ProductGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 sm:py-12 lg:py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8 sm:mb-10 lg:mb-12">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
