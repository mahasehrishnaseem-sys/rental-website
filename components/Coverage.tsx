
import React from 'react';

const Coverage: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Major Cities</h2>
            <p className="text-gray-600 text-lg mb-6">We're proud to offer our full range of services, including free delivery and setup, in Karachi, Lahore, and Islamabad. More cities coming soon!</p>
            <a href="#" className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">Check Your Area</a>
          </div>
          <div className="lg:w-1/2 w-full h-80 lg:h-96 rounded-lg shadow-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/800/600?grayscale&blur=2" 
              alt="Map of delivery coverage area" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
