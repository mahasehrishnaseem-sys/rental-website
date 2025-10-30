
import React, { useState } from 'react';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "Catalog", "How It Works", "About", "Contact"];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <a href="#">FurnishFlex</a>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <a key={link} href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">{link}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Login</a>
          <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">Sign Up</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">{link}</a>
            ))}
            <div className="flex flex-col items-center space-y-4 pt-4 border-t w-full">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Login</a>
              <a href="#" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">Sign Up</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
