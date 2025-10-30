
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Renting Made Easy</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Get your dream space furnished in just three simple steps. We've streamlined the process so you can relax and enjoy.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Dotted line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-12">
             <svg width="100%" height="2">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
             </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center bg-indigo-600 text-white w-24 h-24 rounded-full mx-auto mb-6 text-3xl font-bold shadow-lg">1</div>
            <h3 className="text-2xl font-semibold mb-2">Choose Your Style</h3>
            <p className="text-gray-600">Browse our curated collection and select the furniture and rental period that's right for you.</p>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center bg-indigo-600 text-white w-24 h-24 rounded-full mx-auto mb-6 text-3xl font-bold shadow-lg">2</div>
            <h3 className="text-2xl font-semibold mb-2">We Deliver & Set Up</h3>
            <p className="text-gray-600">Schedule a delivery time, and our team will bring your furniture and set it up in your home, free of charge.</p>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center bg-indigo-600 text-white w-24 h-24 rounded-full mx-auto mb-6 text-3xl font-bold shadow-lg">3</div>
            <h3 className="text-2xl font-semibold mb-2">Enjoy & Extend</h3>
            <p className="text-gray-600">Love your new setup! At the end of your term, you can easily extend, swap items, or schedule a pickup.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
