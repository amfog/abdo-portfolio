import type { Metadata } from 'next';
import LegalContent from '@/components/legal/LegalContent';

// PRIVACY AND TERMS, written 23 September 2026 after reading the code:
//
//   - Contact form: ContactSection.tsx posts name, email, subject and message
//     to Web3Forms, which forwards to Gmail. (AGENTS.md still says mailto; it
//     is out of date.) If the form provider changes, change this page with it.
//   - No analytics package is installed and no cookie is set. The language
//     choice is kept in localStorage ('portfolio-lang'). Both are disclosed.
//   - Copy lives in data/translations/{en,ar}.ts under `legal`, like every
//     other translated string on the site.
//
// STILL OPEN, flagged "(pending)" on the page: permission from the employers
// and clients named in case studies and products.
//
// Kept short on purpose. NOT LEGAL ADVICE AND NOT REVIEWED BY A LAWYER.

export const metadata: Metadata = {
  title: 'Privacy and terms | Abdelrahman Mohamed Ahmed',
  description:
    'What this portfolio collects when you get in touch, what it does not collect, and the terms for using it.',
};

export default function LegalPage() {
  return <LegalContent />;
}
