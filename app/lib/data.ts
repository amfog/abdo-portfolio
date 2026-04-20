export interface Product {
  id: string;
  title: string;
  description: string;
  kpi: string;
  link: string;
  category: 'OS' | 'SaaS' | 'Phygital' | 'Systems';
}

export const products: Product[] = [
  {
    id: 'vicious-os',
    title: 'Vicious OS',
    description: 'A specialized operating layer designed for high-performance computing environments.',
    kpi: '99.9% Uptime',
    link: '/portfolio/vicious-os',
    category: 'OS'
  },
  {
    id: 'nexaro',
    title: 'Nexaro',
    description: 'Next-gen automation platform for scaling digital commerce operations.',
    kpi: '+40% Efficiency',
    link: '/portfolio/nexaro',
    category: 'SaaS'
  },
  {
    id: 'tournament-systems',
    title: 'Tournament Systems',
    description: 'End-to-end infrastructure for massive-scale competitive gaming events.',
    kpi: '100k+ Concurrents',
    link: '/portfolio/tournament-systems',
    category: 'Systems'
  },
  {
    id: 'saudi-phygital',
    title: 'Saudi Phygital Projects',
    description: 'Bridging physical experiences with digital interactions in the KSA tech landscape.',
    kpi: '15+ Deployments',
    link: '/portfolio/saudi-phygital',
    category: 'Phygital'
  }
];
