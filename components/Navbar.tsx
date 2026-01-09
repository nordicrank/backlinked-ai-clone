
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#03030a]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1350px] mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <div className="text-2xl font-bold tracking-tight">
            Backlinked<span className="text-[#605dff]">.ai</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-[#94919d] hover:text-white transition-colors font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-accent px-6 py-2.5 rounded-[10px] text-white font-semibold text-sm hover:scale-105 transition-transform"
          >
            Get Started Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#03030a] absolute top-full left-0 right-0 border-t border-blue-300 py-6 px-4 space-y-4 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="block text-[#94919d] hover:text-white font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="block bg-accent w-full text-center px-6 py-3 rounded-[10px] text-white font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
