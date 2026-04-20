import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: 'Abdelrahman Mohamed Ahmed | Systems Builder',
  description:
    'Founder, Operations Architect, and Product Systems Leader with 3+ years building scalable workflow ecosystems, AI-assisted operations platforms, and esports infrastructures across MENA.',
  keywords: [
    'Product Operations',
    'Program Management',
    'Systems Design',
    'Esports Operations',
    'Workflow Automation',
    'Cairo',
    'MENA',
  ],
  authors: [{ name: 'Abdelrahman Mohamed Ahmed' }],
  openGraph: {
    title: 'Abdelrahman Mohamed Ahmed | Systems Builder',
    description: 'Founder · Operations Architect · Product Systems Leader',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdelrahman Mohamed Ahmed | Systems Builder',
    description: 'Founder · Operations Architect · Product Systems Leader',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="antialiased bg-[#050510] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
