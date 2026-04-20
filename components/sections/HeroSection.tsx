'use client';

import { motion } from 'framer-motion';

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};

const stats = [
  { value: '3,500+', label: 'Participants' },
  { value: '5', label: 'Editions' },
  { value: '2', label: 'Platforms' },
  { value: '170+', label: 'Players Managed' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,117,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(123,92,246,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        variants={stagger.container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Availability badge */}
        <motion.div variants={stagger.item} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#4f75ff]/30 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/70">Open to new opportunities</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={stagger.item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.05]"
        >
          <span className="gradient-text">Systems builder</span>
          <br />
          <span className="text-white">who ships.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={stagger.item}
          className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          I&apos;m{' '}
          <span className="text-white font-medium">Abdelrahman Mohamed Ahmed</span> — founder,
          operations architect, and product systems leader with 3+ years building scalable workflow
          ecosystems, AI-assisted operations platforms, and esports infrastructures across MENA.
        </motion.p>

        {/* Target roles */}
        <motion.p variants={stagger.item} className="text-sm text-white/35 mb-10">
          Seeking{' '}
          <span className="text-[#4f75ff]">Product Operations</span>
          {' · '}
          <span className="text-[#7b5cf6]">Program Management</span>
          {' · '}
          <span className="text-[#4f75ff]">Systems Leadership</span>
          {' '}roles
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={stagger.item} className="flex flex-wrap justify-center gap-3 mb-16">
          <a
            href="#systems"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#4f75ff] text-white hover:bg-[#4f75ff]/90 transition-all duration-200"
            style={{ boxShadow: '0 0 30px rgba(79,117,255,0.35)' }}
          >
            See my work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold glass border-white/15 text-white/80 hover:text-white hover:border-white/25 transition-all duration-200"
          >
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold glass border-white/10 text-white/60 hover:text-white/80 hover:border-white/20 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download resume
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={stagger.item}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-white/40 text-xs">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-6 bg-gradient-to-b from-white/20 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
