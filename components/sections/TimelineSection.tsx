'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/data/translations/en';
import { ar } from '@/data/translations/ar';

export default function TimelineSection() {
  const { lang } = useLanguage();
  const tl = (lang === 'ar' ? ar : en).timeline;

  return (
    <section id="timeline" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="text-xs font-semibold tracking-wider text-[#4f75ff] uppercase mb-3 block">{tl.sectionLabel}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{tl.heading}</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            {tl.subtitle}
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute start-4 md:start-8 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((entry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative ps-12 md:ps-20"
              >
                {/* Dot */}
                <div
                  className="absolute start-0 md:start-4 top-1 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                  style={{ borderColor: entry.accent || '#4f75ff', backgroundColor: `${entry.accent || '#4f75ff'}10`, color: entry.accent || '#4f75ff' }}
                >
                  {entry.year.slice(0, 2)}
                </div>

                {/* Content Card */}
                <div className="glass-card p-6 md:p-8 hover:border-white/15 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium w-fit whitespace-nowrap mx-auto sm:mx-0"
                      style={{ backgroundColor: `${entry.accent || '#4f75ff'}15`, color: entry.accent || '#4f75ff' }}
                    >
                      {entry.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{entry.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
