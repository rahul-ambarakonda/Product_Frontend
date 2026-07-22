import React from 'react';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Footer from '../src/components/Footer'; // Import the Footer component

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <h1>Welcome to Kitchen Appliances</h1>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default HomePage;
