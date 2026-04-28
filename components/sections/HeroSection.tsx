'use client';

import Link from 'next/link';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(79,117,255,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10 pt-28 pb-20 flex flex-col items-center text-center">

        <motion.div {...fadeUp(0)}>
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.25)',
              color: '#34d399',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to new opportunities
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="gradient-text-brand">Systems builder</span>
          <br />
          <span style={{ color: 'rgba(255,255,255,0.92)' }}>who ships.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl leading-relaxed mb-3 max-w-2xl"
          style={{ color: 'rgba(255,255,255,0.62)' }}
        >
          I&apos;m{' '}
          <strong style={{ color: 'rgba(255,255,255,0.88)', fontWeight: 600 }}>
            Abdelrahman Mohamed Ahmed
          </strong>{' '}
          — operations architect and product systems lead with 3+ years building
          workflow platforms, esports ecosystems, and AI-assisted tools across MENA.
        </motion.p>

        <motion.p
          {...fadeUp(0.25)}
          className="text-sm mb-10"
          style={{ color: 'rgba(255,255,255,0.38)' }}
        >
          Seeking{' '}
          <span style={{ color: '#7b9eff' }}>Product Operations</span>
          {' · '}
          <span style={{ color: '#7b9eff' }}>Esports Operations</span>
          {' · '}
          <span style={{ color: '#7b9eff' }}>Program Manager</span>
          {' '}roles
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link href="/#products" className="btn-primary">
            See my work <ArrowRight size={17} />
          </Link>
          <Link href="/#contact" className="btn-secondary">
            <Mail size={16} /> Get in touch
          </Link>
          <a href="/resume.pdf" download className="btn-secondary">
            <Download size={16} /> Resume
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="w-full max-w-2xl"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2.5rem' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '10,000+', label: 'Community Members' },
              { value: '6', label: 'Editions Delivered' },
              { value: '7', label: 'Products Built' },
              { value: '230+', label: 'Players Managed' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold gradient-text-brand mb-1">{s.value}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
