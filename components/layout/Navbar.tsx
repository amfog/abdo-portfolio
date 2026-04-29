'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 relative">
      <div className="container">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="text-white font-semibold hover:text-[#4f75ff] transition-colors">
            Abdelrahman
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/60">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#impact">Impact</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#timeline">Timeline</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <a
              href="#contact"
              className="hidden md:block px-4 py-2 rounded-full bg-[#4f75ff] text-white text-sm font-medium"
            >
              Get in touch
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
                { label: 'Work', href: '#work' },
                { label: 'About', href: '#about' },
                { label: 'Impact', href: '#impact' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Timeline', href: '#timeline' },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href }) => (
                <a
                  key={label}
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
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
