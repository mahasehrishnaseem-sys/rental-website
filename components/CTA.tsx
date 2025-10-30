
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-indigo-700 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Reinvent Your Space?</h2>
        <p className="text-indigo-200 text-lg mb-8 max-w-3xl mx-auto">
          Explore our catalog of stylish furniture and find the perfect pieces to bring your vision to life. Get started today with flexible plans and commitment-free rentals.
        </p>
        <a 
          href="#" 
          className="bg-white text-indigo-700 px-10 py-4 rounded-md text-lg font-bold hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          Start Browsing Now
        </a>
      </div>
    </section>
  );
};

export default CTA;
