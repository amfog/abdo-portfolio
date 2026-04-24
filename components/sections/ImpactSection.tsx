'use client';

import { motion } from 'framer-motion';
import StatCard from '@/components/ui/StatCard';
import { stats } from '@/data';

export default function ImpactSection() {
  return (
    <section id="impact" className="relative py-16 md:py-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(79,117,255,0.05), transparent 70%)',
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 text-xs text-white/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f75ff]" />
            Impact Dashboard
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Numbers that matter.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Real outcomes from real systems — measured, tracked, and scaled.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
