'use client';

import { motion } from 'framer-motion';
import StatCard from '@/components/ui/StatCard';
import { stats } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/data/translations/en';
import { ar } from '@/data/translations/ar';

export function ImpactSection() {
  const { lang } = useLanguage();
  const t = lang === 'ar' ? ar : en;
  const imp = t.impact;

  const translatedStats = stats.map((stat, i) => ({
    ...stat,
    label: imp.statLabels[i] ?? stat.label,
  }));

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
            {imp.sectionLabel}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {imp.heading}
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.50)' }}>
            {imp.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {translatedStats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
