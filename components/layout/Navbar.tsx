'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50">
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

          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-[#4f75ff] text-white text-sm font-medium"
          >
            Get in touch
          </a>

        </div>
      </div>
    </header>
  );
}
