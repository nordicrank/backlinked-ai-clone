
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-[100px] px-4" id="contact">
      <div className="max-w-[1350px] mx-auto bg-accent rounded-[40px] py-20 px-8 text-center relative overflow-hidden">
        {/* Subtle texture or shapes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L100 0" stroke="white" strokeWidth="0.1" />
                <path d="M0 0 L100 100" stroke="white" strokeWidth="0.1" />
            </svg>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 max-w-[800px] mx-auto leading-tight">
            Dominate search results and drive targeted traffic to your website.
          </h2>
          <p className="text-[#ccc9f7] text-lg md:text-xl mb-10 max-w-[900px] mx-auto">
            Ready to take your website to the next level? Partner with Backlinked.ai and experience the future of intelligent link building. Get in touch today.
          </p>
          <a href="#" className="inline-flex items-center space-x-3 bg-white text-[#605dff] px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
            <span>Get Started</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
