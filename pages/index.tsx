import React from 'react';
import Head from 'next/head';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import ProductGrid from '../src/components/ProductGrid'; // Import ProductGrid
import Footer from '../src/components/Footer';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Kitchen Appliances - Your One-Stop Shop</title>
        <meta name="description" content="Find the best kitchen appliances, from blenders to ovens, for your home. High quality products and great deals." />
        <meta name="keywords" content="kitchen appliances, blenders, ovens, microwaves, refrigerators, dishwashers, coffee makers, toasters, food processors" />
      </Head>
      <Header />
      <Hero />
      <ProductGrid /> {/* Render ProductGrid below Hero */}
      <Footer />
    </div>
  );
};

export default HomePage;
