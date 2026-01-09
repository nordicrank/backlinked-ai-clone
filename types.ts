
export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
