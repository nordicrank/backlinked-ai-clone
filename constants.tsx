
import React from 'react';
import { NavItem, FeatureCard, BlogPost, Testimonial, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' }
];

export const FEATURES: FeatureCard[] = [
  {
    title: 'Tailored link-building strategies',
    description: 'We don’t believe in one-size-fits-all. Each campaign is customized to align with your industry, competition, and growth objectives.',
    icon: '🎯',
    color: '#5aba87'
  },
  {
    title: '95% White-Hat Method',
    description: 'Ethical SEO is at the core of our strategy. We prioritize sustainable link-building practices that align with Google’s guidelines.',
    icon: '🛡️',
    color: '#605dff'
  },
  {
    title: 'High-Quality Links',
    description: 'We secure backlinks on reputable, high-authority websites that actually move the needle for your SEO. No spammy sites.',
    icon: '💎',
    color: '#e6a55b'
  },
  {
    title: 'Affordable Prices',
    description: 'Quality SEO shouldn’t cost a fortune. Enjoy transparent pricing with no hidden fees, so you get the SEO boost you need.',
    icon: '💰',
    color: '#e493ff'
  },
  {
    title: 'Customer Support',
    description: 'Our friendly SEO experts are here to answer your questions, provide updates, and guide you every step of the way.',
    icon: '🎧',
    color: '#ff5479'
  },
  {
    title: 'Sustainable SEO Growth',
    description: 'We focus on sustainable SEO growth, so you can trust that each link we provide is a solid step toward your long-term success.',
    icon: '📈',
    color: '#8340f6'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Is Link Building Still Relevant to SEO in 2025?',
    category: 'AI Tips',
    date: '5 March, 2025',
    image: 'https://picsum.photos/seed/blog1/800/600',
    href: '#'
  },
  {
    title: 'Proven Broken Link Building Outreach Email Templates',
    category: 'AI Tips',
    date: '5 March, 2025',
    image: 'https://picsum.photos/seed/blog2/800/600',
    href: '#'
  },
  {
    title: 'Analyze Your Rivals\' Backlink Strategies for SEO in 2025',
    category: 'AI Tips',
    date: '5 March, 2025',
    image: 'https://picsum.photos/seed/blog3/800/600',
    href: '#'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Adrian Furmanek',
    role: 'CEO @ Hundstaff',
    content: '"We went from 10th position to top position for most of our important keywords within 3 months of using Backlinked"',
    image: 'https://picsum.photos/seed/user1/400/400'
  },
  {
    name: 'Alexander Duimovich',
    role: 'CEO @ Wonderboo',
    content: '"We scaled our organic traffic with 80% after 3 months working with Backlinked"',
    image: 'https://picsum.photos/seed/user2/400/400'
  },
  {
    name: 'Armin Zetterberg',
    role: 'CMO @ Blastiq',
    content: '"Working with Backlinked was very easy and we got a lot of good ideas from their SEO-experts to scale our rankings."',
    image: 'https://picsum.photos/seed/user3/400/400'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '1. Are the websites in your platform real websites?',
    answer: 'Absolutely! Every website in our network is a real, high-quality site with genuine traffic and authority. No spam, no PBNs—just legitimate, trustworthy backlinks that boost your SEO.'
  },
  {
    question: '2. Do backlinks really help improve my rankings?',
    answer: 'Yes! Backlinks are one of the strongest ranking factors in Google’s algorithm. A solid backlink profile tells search engines that your site is credible and authoritative.'
  },
  {
    question: '3. Is there a guarantee that the links built will remain active?',
    answer: 'While we only work with reliable sites, we offer a link replacement guarantee in case a link is removed within a certain timeframe.'
  },
  {
    question: '4. What makes Backlinked.ai different?',
    answer: 'Unlike outdated agencies, we use AI-powered analysis to secure the best backlinks at a fraction of the cost. Our focus is on ethical, high-quality links.'
  }
];
