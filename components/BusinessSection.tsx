
import React from 'react';

const BusinessSection: React.FC = () => {
  return (
    <section className="py-[100px] overflow-hidden" id="about">
      <div className="max-w-[1350px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
            Elevate your ranking with premium backlinks
          </h2>
          <p className="max-w-[800px] mx-auto text-[#807d8d] text-lg">
            Our AI-powered agent crawls the web to identify high-value websites within your niche, analyzing relevance and authority. We then conduct strategic outreach to secure unique results.
          </p>
        </div>

        {/* Step 1: Experts Card */}
        <div className="relative flex flex-col items-center mb-12">
            <div className="w-20 h-20 bg-[#14122f] rounded-full flex items-center justify-center mb-10 z-10">
                <div className="w-16 h-16 bg-[#5f54ff0d] rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-[#5f54ff30] rounded-full flex items-center justify-center">
                        <span className="font-semibold text-lg">1</span>
                    </div>
                </div>
            </div>
            
            <div className="w-full bg-gradient-to-b from-transparent via-[#5f54ff44] to-transparent pt-px">
                <div className="bg-[#12121b] rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border-b border-r border-[#605dff44]">
                    <div className="flex-1">
                        <span className="inline-block bg-[#5650af26] text-[#564ce3] border border-[#5f54ff4d] px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase">
                            Let our experts help you out
                        </span>
                        <h3 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                            Let our experts help you find the best links
                        </h3>
                        <p className="text-[#807d8d] text-lg max-w-[450px]">
                            Let our SEO experts and AI-agent work together to find the best, high-quality backlinks. By combining strategic analysis with advanced web crawling, we identify and secure powerful links.
                        </p>
                    </div>
                    <div className="flex-1 rounded-[20px] overflow-hidden">
                        <img 
                          src="https://cdn.prod.website-files.com/67c86e0c84abf5cfa207121f/67d30d1bcbbf49c146d758b0_4cc8afbd-b71d-4573-8f77-f69f926bb7d3.jpg" 
                          alt="Experts working" 
                          className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Steps 2-4 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: 2,
              title: "Premium Backlinks",
              desc: "Let our team of experienced link builders select the most effective backlinks for your page from over +200,000 backlinks.",
              image: "https://cdn.prod.website-files.com/67c86e0c84abf5cfa207121f/67e144708a0ca69596e4b700_3.jpg"
            },
            {
              num: 3,
              title: "Outreach Campaigns",
              desc: "Our advanced AI agent analyzes markets, competitors, and the web to craft outreach campaigns that secure high-quality backlinks tailored to your website.",
              image: "https://cdn.prod.website-files.com/67c86e0c84abf5cfa207121f/67e14486c9759aeb894123ec_4.jpg"
            },
            {
              num: 4,
              title: "Link insertion",
              desc: "Link insertion, also known as curated links, is a strategy where backlinks are added to existing articles rather than creating new content.",
              image: "https://cdn.prod.website-files.com/67c86e0c84abf5cfa207121f/67e144964de2e5268fcae306_2.jpg"
            }
          ].map((step) => (
            <div key={step.num} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#14122f] rounded-full flex items-center justify-center mb-6">
                    <div className="w-10 h-10 bg-[#5f54ff30] rounded-full flex items-center justify-center">
                        <span className="font-semibold">{step.num}</span>
                    </div>
                </div>
                <div className="bg-[#12121b] rounded-[20px] pt-10 pl-8 overflow-hidden h-full flex flex-col justify-between hover:bg-[#181824] transition-colors">
                    <div>
                        <h4 className="text-3xl font-semibold mb-4 pr-8">{step.title}</h4>
                        <p className="text-[#807d8d] text-base mb-8 pr-8">{step.desc}</p>
                    </div>
                    <img src={step.image} alt={step.title} className="w-full rounded-tl-[20px]" />
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
