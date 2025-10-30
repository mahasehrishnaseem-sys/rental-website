import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-[calc(100vh-68px)] flex items-center justify-center text-white" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">
          Rent Stylish Furniture, No Commitment
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 animate-fade-in-up">
          Monthly rentals, free delivery in Karachi
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#" 
            className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300"
          >
            Browse Furniture
          </a>
          <a 
            href="#" 
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;