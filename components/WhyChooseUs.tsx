
import React from 'react';
import { FEATURES } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-[100px] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#605dff] blur-[200px] opacity-10 pointer-events-none"></div>

      <div className="max-w-[1350px] mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">Why Choose Backlinked.ai?</h2>
          <p className="max-w-[900px] mx-auto text-[#94919d] text-lg md:text-xl">
            Our cutting-edge AI agent, combined with SEO expert strategy, takes the guesswork out of link building. With data-driven insights and hands-on expertise, we deliver measurable SEO results — faster and more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-[#efeefc0a] border border-[#efeefc0a] rounded-[20px] p-8 md:p-12 hover:border-[#8683ff] transition-all group"
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-8 border-2" 
                style={{ borderColor: feature.color }}
              >
                <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: feature.color }}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight" style={{ color: feature.color }}>
                {feature.title}
              </h3>
              <p className="text-[#94919d] text-base leading-relaxed mb-8">
                {feature.description}
              </p>
              <a href="#" className="flex items-center space-x-2 text-[#938cf5] font-medium group-hover:underline">
                <span>Learn More</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
