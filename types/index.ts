export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  category: string;
  color: string;
  clientType: string;
  headlineStat: string;
  timeframe: string;
  summary: string;
  outcomes: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  href: string;
  shortDesc: string;
  iconImg: string;
  color: string;
  tag: string;
  highlights: string[];
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
}
