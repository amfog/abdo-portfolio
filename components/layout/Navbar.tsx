'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/data/translations/en';
import { ar } from '@/data/translations/ar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [achievementsOpen, setAchievementsOpen] = useState(false);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const { lang, setLang } = useLanguage();
  const t = lang === 'ar' ? ar : en;

  // Mobile menu outside-click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  // Achievements dropdown outside-click
  useEffect(() => {
    if (!achievementsOpen) return;
    const handler = (e: MouseEvent) => {
      if (achievementsRef.current && !achievementsRef.current.contains(e.target as Node)) {
        setAchievementsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [achievementsOpen]);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="text-white font-semibold hover:text-[#4f75ff] transition-colors">
            Abdelrahman
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/60">
            <a href="#work" className="hover:text-white transition-colors">{t.nav.work}</a>
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#impact" className="hover:text-white transition-colors">{t.nav.impact}</a>
            <a href="#case-studies" className="hover:text-white transition-colors">{t.nav.caseStudies}</a>

            {/* Achievements dropdown */}
            <div ref={achievementsRef} className="relative">
              <button
                onClick={() => setAchievementsOpen(!achievementsOpen)}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                {t.nav.achievements}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-150 ${achievementsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {achievementsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-2 start-0 w-48 rounded-xl py-1 z-50"
                    style={{
                      background: 'rgba(13,13,26,0.96)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <Link
                      href="/achievements/vicious"
                      onClick={() => setAchievementsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {t.nav.viciousEsports}
                    </Link>
                    <Link
                      href="/achievements/player"
                      onClick={() => setAchievementsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {t.nav.asAPlayer}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#timeline" className="hover:text-white transition-colors">{t.nav.timeline}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-xs text-white/50 hover:text-white/80 transition-colors rounded-full border border-white/10 hover:border-white/25"
              style={{ padding: '0.2rem 0.6rem' }}
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            <button
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <a
              href="#contact"
              className="hidden md:block px-4 py-2 rounded-full bg-[#4f75ff] text-white text-sm font-medium hover:bg-[#3d63ee] transition-colors"
            >
              {t.nav.getInTouch}
            </a>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden absolute top-full left-0 right-0 z-40
                       bg-[#0D0D1A]/96 backdrop-blur-md
                       border-t border-white/10 shadow-xl"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {[
                { label: t.nav.work, href: '#work' },
                { label: t.nav.about, href: '#about' },
                { label: t.nav.impact, href: '#impact' },
                { label: t.nav.caseStudies, href: '/case-studies' },
                { label: t.nav.viciousAchievements, href: '/achievements/vicious' },
                { label: t.nav.playerAchievements, href: '/achievements/player' },
                { label: t.nav.timeline, href: '#timeline' },
                { label: t.nav.contact, href: '#contact' },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white py-3 px-2
                             border-b border-white/5 last:border-0
                             transition-colors text-sm font-medium"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center bg-indigo-600 hover:bg-indigo-700
                           text-white rounded-full px-6 py-2.5 text-sm font-medium
                           transition-colors"
              >
                {t.nav.getInTouch}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
