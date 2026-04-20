'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export default function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  const accentColors = ['#4f75ff', '#7b5cf6', '#4f75ff'];
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl overflow-hidden group hover:border-white/15 transition-all duration-300 flex flex-col h-full relative"
    >
      {/* Top accent bar */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${accent}06, transparent 70%)` }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full font-medium"
              style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-white font-bold text-xl mb-1">{caseStudy.title}</h3>
        <p className="text-white/40 text-sm mb-4">{caseStudy.subtitle}</p>

        <div className="space-y-3 mb-5 flex-1">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">Challenge</p>
            <p className="text-white/60 text-sm leading-relaxed line-clamp-2">{caseStudy.challenge}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">Outcome</p>
            <p className="text-white/60 text-sm leading-relaxed line-clamp-2">{caseStudy.outcome}</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {caseStudy.metrics.slice(0, 4).map((m) => (
            <div key={m.label} className="glass rounded-lg p-3 text-center">
              <div className="text-lg font-bold" style={{ color: accent }}>{m.value}</div>
              <div className="text-white/40 text-xs mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 group/link"
          style={{ color: accent }}
        >
          Read case study
          <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
