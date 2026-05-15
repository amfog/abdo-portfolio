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
          <Link
            href="/#case-studies"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 24, textDecoration: 'none' }}
          >
            ← Back to case studies
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Case Studies</h1>
          <p className="text-white/50 max-w-xl">Real systems. Real outcomes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {caseStudies.map((cs, i) => {
            const colors = ['#4f75ff', '#7b5cf6', '#10b981'];
            const color = colors[i % colors.length];
            const isActive = cs.status === 'Active';
            return (
              <Link
                key={cs.id}
                href={cs.link}
                className="glass rounded-2xl p-6 hover:border-white/15 transition-all duration-300 group hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                    style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                  >
                    {cs.tag}
                  </span>
                  <span
                    className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                    style={{
                      background: isActive ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                      color: isActive ? '#34d399' : '#f59e0b',
                      border: `1px solid ${isActive ? 'rgba(16,185,129,0.25)' : 'rgba(245,158,11,0.25)'}`,
                    }}
                  >
                    {cs.status}
                  </span>
                </div>
                <h2 className="text-white font-bold text-xl mb-1 group-hover:text-[#4f75ff] transition-colors duration-200">
                  {cs.title}
                </h2>
                <p className="text-white/40 text-sm mb-4">{cs.tagline}</p>
                <p className="text-white/55 text-sm leading-relaxed line-clamp-3 flex-1">
                  {cs.problem}
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[cs.stat1, cs.stat2].map((s) => (
                    <div key={s.label} className="glass rounded-lg p-2.5 text-center">
                      <div className="font-bold text-sm" style={{ color }}>{s.value}</div>
                      <div className="text-white/35 text-xs mt-0.5">{s.label}</div>
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
