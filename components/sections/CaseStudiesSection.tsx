'use client';

import { motion } from 'framer-motion';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import { caseStudies } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/data/translations/en';
import { ar } from '@/data/translations/ar';

export default function CaseStudiesSection() {
  const { lang } = useLanguage();
  const t = lang === 'ar' ? ar : en;
  const cs = t.caseStudies;

  const localizedCaseStudies = caseStudies.map((study) => {
    const card = cs.cards[study.slug as keyof typeof cs.cards];
    if (!card) return study;
    return { ...study, tag: card.tag, tagline: card.tagline, problem: card.problem, outcome: card.outcome };
  });

  return (
    <section id="case-studies" className="relative py-16 md:py-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 100% 50%, rgba(123,92,246,0.06), transparent 60%)',
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 text-xs text-white/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f75ff]" />
            {cs.badge}
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {cs.heading}
              </h2>
              <p className="text-white/50 max-w-lg">
                {cs.subtitle}
              </p>
            </div>
            <a
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-[#4f75ff] hover:text-white transition-colors duration-200 group"
            >
              {cs.viewAll}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localizedCaseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} caseStudy={study} index={i} caseStudyT={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
