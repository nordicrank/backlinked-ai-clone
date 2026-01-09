
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-8 bg-[#03030a] border-t border-blue-300">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Brand and Newsletter */}
          <div className="max-w-md">
            <div className="text-2xl font-bold mb-6">
              Backlinked<span className="text-[#605dff]">.ai</span>
            </div>
            <p className="text-[#94919d] mb-10 text-base leading-relaxed">
              Our tailored AI solutions empower your business SEO to rank #1 on Google, Bing and AI.
            </p>
            <div>
              <h4 className="text-lg font-semibold mb-4">Sign Up for Newsletter</h4>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your Email" 
                  className="bg-[#12121b] border border-[#12121b] focus:border-[#605dff] text-[#efeefc] px-4 py-3 rounded-[10px] flex-1 outline-none transition-all"
                  required
                />
                <button className="bg-accent px-6 py-3 rounded-[10px] text-white font-medium flex items-center space-x-2 hover:opacity-90 transition-opacity">
                  <span>Sign up</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[#94919d] font-semibold mb-6">Site</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-[#605dff] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#605dff] transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-[#605dff] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#605dff] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#605dff] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#94919d] font-semibold mb-6">Policy</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-[#605dff] transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-[#605dff] transition-colors">Privacy & Policy</a></li>
                <li><a href="#" className="hover:text-[#605dff] transition-colors">Terms & Condition</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2e2e38] flex flex-col md:flex-row justify-between items-center text-sm text-[#94919d]">
          <p>© Copyright 2025 | Backlinked.ai</p>
          <p className="mt-4 md:mt-0">
            Design & Developed By <a href="#" className="text-white hover:text-[#605dff] underline">Webbografi Agency</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
