'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,117,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(123,92,246,0.08) 0%, transparent 60%)',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-20">

        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="max-w-4xl text-center md:text-left"
        >

          <motion.div variants={stagger.item} className="flex justify-center md:justify-start mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#4f75ff]/30 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/70">Open to new opportunities</span>
            </div>
          </motion.div>

          <motion.h1
            variants={stagger.item}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.05]"
          >
            <span className="gradient-text">Systems builder</span>
            <br />
            <span className="text-white">who ships.</span>
          </motion.h1>

          <motion.p
            variants={stagger.item}
            className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto md:mx-0 mb-4 leading-relaxed"
          >
            I&apos;m{' '}
            <span className="text-white font-medium">Abdelrahman Mohamed Ahmed</span> — founder,
            operations architect, and product systems leader with 3+ years building scalable workflow
            ecosystems, AI-assisted operations platforms, and esports infrastructures across MENA.
          </motion.p>

          <motion.p variants={stagger.item} className="text-sm text-white/35 mb-10">
            Seeking{' '}
            <span className="text-[#4f75ff]">Product Operations</span>
            {' · '}
            <span className="text-[#7b5cf6]">Program Management</span>
            {' · '}
            <span className="text-[#4f75ff]">Systems Leadership</span>
            {' '}roles
          </motion.p>

          <motion.div
            variants={stagger.item}
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-10"
          >
            <a
              href="#systems"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#4f75ff] text-white hover:bg-[#4f75ff]/90 transition-all duration-200"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold glass border border-white/15 text-white/80 hover:text-white hover:border-white/25 transition-all duration-200"
            >
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold glass border border-white/15 text-white/80 hover:text-white hover:border-white/25 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            variants={stagger.item}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 w-full border-t border-white/10"
          >
            {stats.map((s) => (
              <div key={s.label} className="relative glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-white/40 text-xs">{s.label}</div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
