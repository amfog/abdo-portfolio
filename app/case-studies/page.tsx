import Link from 'next/link';
import type { Metadata } from 'next';
import { caseStudies } from '@/data';

export const metadata: Metadata = {
  title: 'Case Studies | Abdelrahman Mohamed Ahmed',
  description: 'Deep dives into challenges, approaches, and outcomes.',
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#050510] pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors duration-200 mb-6 group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Case Studies</h1>
          <p className="text-white/50 max-w-xl">How I solve real problems — challenge, approach, outcome.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {caseStudies.map((cs, i) => {
            const colors = ['#4f75ff', '#7b5cf6', '#4f75ff'];
            const color = colors[i % colors.length];
            return (
              <Link
                key={cs.id}
                href={`/case-studies/${cs.slug}`}
                className="glass rounded-2xl p-6 hover:border-white/15 transition-all duration-300 group hover:-translate-y-1 flex flex-col"
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                      style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-white font-bold text-xl mb-1 group-hover:text-[#4f75ff] transition-colors duration-200">
                  {cs.title}
                </h2>
                <p className="text-white/40 text-sm mb-4">{cs.subtitle}</p>
                <p className="text-white/55 text-sm leading-relaxed line-clamp-3 flex-1">
                  {cs.challenge}
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {cs.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="glass rounded-lg p-2.5 text-center">
                      <div className="font-bold text-sm" style={{ color }}>{m.value}</div>
                      <div className="text-white/35 text-xs mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
