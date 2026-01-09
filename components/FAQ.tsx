
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-[100px]">
      <div className="max-w-[914px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Frequently Asked Questions</h2>
          <p className="text-[#94919d] text-lg">Navigate through our expertly curated FAQ for solutions to common concerns and essential information.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-[#12121b] rounded-2xl overflow-hidden border border-transparent hover:border-blue-300 transition-all">
              <button 
                className="w-full p-6 text-left flex justify-between items-center group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-xl font-medium pr-4">{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#aaa4ff11] transition-all ${openIndex === idx ? 'rotate-90 bg-accent text-white' : 'text-[#938cf5]'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
              >
                <div className="px-6 pb-6 text-[#94919d] text-lg leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
