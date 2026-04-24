'use client';

import { motion } from 'framer-motion';
import StatCard from '@/components/ui/StatCard';
import { stats } from '@/data';

export function ImpactSection() {
  return (
    <section id="impact" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(79,117,255,0.05), transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label" style={{ display: 'inline-block' }}>
            Impact Dashboard
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Numbers that matter.
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.50)' }}>
            Real outcomes from real systems — measured, tracked, and scaled.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
