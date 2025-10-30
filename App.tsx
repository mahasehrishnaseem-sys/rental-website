
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturedItems from './components/FeaturedItems';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Coverage from './components/Coverage';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <FeaturedItems />
        <HowItWorks />
        <Testimonials />
        <Coverage />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
