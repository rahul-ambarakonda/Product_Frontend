import React from 'react';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import ProductGrid from '../src/components/ProductGrid'; // Import ProductGrid
import Footer from '../src/components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductGrid /> {/* Render ProductGrid below Hero */}
      <Footer />
    </div>
  );
};

export default HomePage;
