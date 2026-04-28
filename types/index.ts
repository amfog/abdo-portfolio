export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  kpi: string;
  kpiLabel: string;
  // legacy card fields
  subtitle?: string;
  badge?: string;
  problems?: string[];
  tech?: string[];
  featured?: boolean;
  href?: string;
  // new card fields
  tagline?: string;
  tags?: string[];
  status?: 'live' | 'beta' | 'wip';
  color?: string;
  icon?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  techStack?: string[];
  sellable?: boolean;
  pricingSetup?: string;
  pricingRetainer?: string;
  setupTime?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  challenge: string;
  approach: string;
  outcome: string;
  lessons: string;
  metrics: Metric[];
  tags: string[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  accent?: string;
}

export interface Stat {
  label: string;
  displayValue: string;
  numericEnd: number;
  suffix: string;
  icon: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface Edition {
  name: string;
  teams: number;
  participants: number;
  views?: number;
}
export interface Certification {
  name: string;
  status: string;
  color?: string;
}