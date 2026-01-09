
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-[100px]">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Hear what our customers <br /> has to say about us!</h2>
          <p className="max-w-[800px] mx-auto text-[#94919d] text-lg">Our clients have experienced exponential growth in organic traffic, improved search engine rankings, and stronger brand credibility through our AI-powered backlink strategies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-[20px] bg-gray-900 aspect-square md:aspect-auto h-[450px]">
              <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white font-medium text-lg leading-tight mb-2">
                        {t.name}<br />
                        <span className="text-sm font-normal opacity-80">{t.role}</span>
                    </div>
                    <p className="text-white text-base md:text-lg italic font-medium leading-relaxed">
                        {t.content}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows (Visual Placeholder) */}
        <div className="flex justify-center mt-12 space-x-4">
            <button className="w-12 h-12 rounded-full bg-[#12121b] flex items-center justify-center hover:bg-accent transition-colors shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-[#12121b] flex items-center justify-center hover:bg-accent transition-colors shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
