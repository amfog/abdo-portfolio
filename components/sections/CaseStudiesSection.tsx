'use client';

import { motion } from 'framer-motion';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import { caseStudies } from '@/data';

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 100% 50%, rgba(123,92,246,0.06), transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 text-xs text-white/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f75ff]" />
            Case Studies
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                How I solve problems.
              </h2>
              <p className="text-white/50 max-w-lg">
                Deep dives into the challenges, approaches, and outcomes behind the work.
              </p>
            </div>
            <a
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-[#4f75ff] hover:text-white transition-colors duration-200 group"
            >
              View all case studies
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
