
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-[160px] pb-[100px] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#605dff22] to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#605dff] blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="max-w-[1350px] mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-3 mb-8 px-4 py-1 border border-blue-300 rounded-full bg-[#efeefc0a]">
          <span className="text-[#938cf5] text-sm font-medium tracking-wide uppercase">Premium Backlinks</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-8 tracking-tight">
          Trusted Backlink Network <br className="hidden md:block" /> 
          <span className="text-[#605dff]">Powered by AI-agent</span>
        </h1>

        {/* Description */}
        <p className="max-w-[700px] mx-auto text-[#94919d] text-lg md:text-xl leading-relaxed mb-12">
          Say goodbye to outdated tactics and old metrics. Our cutting-edge AI-agent analyzes markets, competitors and the web to secure high-quality backlinks tailored to your website.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a href="#contact" className="bg-accent px-10 py-4 rounded-[10px] text-white font-semibold text-lg hover:scale-105 transition-transform w-full sm:w-auto">
            Get Started
          </a>
          <a href="#contact" className="border border-blue-300 px-10 py-4 rounded-[10px] text-white font-semibold text-lg hover:bg-white/5 transition-colors w-full sm:w-auto">
            Contact Now
          </a>
        </div>

        {/* Hero Image / Mockup */}
        <div className="max-w-[1240px] mx-auto rounded-t-3xl overflow-hidden border border-blue-300 bg-[#03030a] shadow-2xl animate-float">
          <img 
            src="https://cdn.prod.website-files.com/67c86e0c84abf5cfa207121f/67d44dc71b7c895509fc1418_Untitled%20design%20(8).jpg" 
            alt="AI Dashboard Mockup" 
            className="w-full h-auto opacity-90"
          />
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-[20%] left-0 pointer-events-none opacity-50 hidden lg:block">
        <svg width="400" height="600" viewBox="0 0 400 600" fill="none">
            <path d="M0 0C100 100 200 300 150 600" stroke="#605dff" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute top-[10%] right-0 pointer-events-none opacity-50 hidden lg:block">
        <svg width="400" height="600" viewBox="0 0 400 600" fill="none">
            <path d="M400 0C300 100 200 300 250 600" stroke="#605dff" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
