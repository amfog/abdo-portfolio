'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { CaseStudy } from '@/types';
import type { en } from '@/data/translations/en';

type CaseStudyT = typeof en['caseStudies'];

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
  caseStudyT?: CaseStudyT;
}

const ACCENTS = ['#4f75ff', '#7b5cf6', '#10b981'];

export default function CaseStudyCard({ caseStudy, index = 0, caseStudyT }: CaseStudyCardProps) {
  const accent = ACCENTS[index % ACCENTS.length];
  const isActive = caseStudy.status === 'Active';
  const problemLabel = caseStudyT?.problemLabel ?? 'Problem';
  const outcomeLabel = caseStudyT?.outcomeLabel ?? 'Outcome';
  const readLabel = caseStudyT?.readCaseStudy ?? 'Read case study';

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

      <div className="p-7 flex flex-col flex-1">
        {/* Tag + status row */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className="text-xs px-2.5 py-0.5 rounded-full font-medium"
            style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}
          >
            {caseStudy.tag}
          </span>
          <span
            className="text-xs px-2.5 py-0.5 rounded-full font-medium"
            style={{
              background: isActive ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
              color: isActive ? '#34d399' : '#f59e0b',
              border: `1px solid ${isActive ? 'rgba(16,185,129,0.25)' : 'rgba(245,158,11,0.25)'}`,
            }}
          >
            {caseStudy.status}
          </span>
        </div>

        <h3 className="text-white font-bold text-xl mb-1">{caseStudy.title}</h3>
        <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.40)' }}>{caseStudy.tagline}</p>

        <div className="space-y-3 mb-5 flex-1">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.28)' }}>{problemLabel}</p>
            <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'rgba(255,255,255,0.58)' }}>{caseStudy.problem}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.28)' }}>{outcomeLabel}</p>
            <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'rgba(255,255,255,0.58)' }}>{caseStudy.outcome}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[caseStudy.stat1, caseStudy.stat2].map((s) => (
            <div key={s.label} className="glass rounded-lg p-3 text-center">
              <div className="text-lg font-bold" style={{ color: accent }}>{s.value}</div>
              <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <Link
          href={caseStudy.link}
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 group/link"
          style={{ color: accent }}
        >
          {readLabel}
          <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
