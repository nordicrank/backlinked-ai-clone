
import React from 'react';
import { BLOG_POSTS } from '../constants';

const BlogSection: React.FC = () => {
  return (
    <section className="py-[100px]" id="blogs">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-[650px] mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">Check out our featured blogs and news</h2>
            <p className="text-[#94919d] text-lg">Let us help you dominate search results and drive targeted traffic to your website.</p>
          </div>
          <a href="#" className="bg-[#aaa4ff26] hover:bg-[#2e2e38] text-[#938cf5] px-6 py-3 rounded-[10px] flex items-center space-x-2 transition-all">
            <span>Show all</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <a key={idx} href={post.href} className="group flex flex-col h-full">
              <div className="rounded-[20px] overflow-hidden mb-6 aspect-video bg-gray-900">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-[#aaa4ff26] text-[#938cf5] px-4 py-1.5 rounded-lg text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-[#94919d] text-sm">{post.date}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-6 leading-snug group-hover:text-[#ccc9f7] transition-colors flex-1">
                {post.title}
              </h3>
              <div className="flex items-center space-x-2 text-[#938cf5] font-medium">
                <span>Read Blog</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
