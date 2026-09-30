'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/data/translations/en';
import { ar } from '@/data/translations/ar';

export default function LegalLink() {
  const { lang } = useLanguage();
  const label = lang === 'ar' ? ar.legal.footerLink : en.legal.footerLink;
  return (
    <Link href="/legal" className="text-white/30 text-xs hover:text-white transition-colors duration-200">
      {label}
    </Link>
  );
}
