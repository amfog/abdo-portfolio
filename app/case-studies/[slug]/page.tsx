import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { caseStudies } from '@/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | Case Study`,
    description: cs.problem,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const cs = caseStudies[index];
  const nextCs = caseStudies[(index + 1) % caseStudies.length];

  const accent = '#4f75ff';
  const isActive = cs.status === 'Active';

  return (
    <main className="min-h-screen bg-[#050510] pt-24 pb-16">
      <div className="container">
        <Link
          href="/#case-studies"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 32, textDecoration: 'none' }}
        >
          ← Back to case studies
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}
            >
              {cs.tag}
            </span>
            <span
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                background: isActive ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                color: isActive ? '#34d399' : '#f59e0b',
                border: `1px solid ${isActive ? 'rgba(16,185,129,0.25)' : 'rgba(245,158,11,0.25)'}`,
              }}
            >
              {cs.status}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{cs.title}</h1>
          <p className="text-white/50 text-xl">{cs.tagline}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-10 max-w-sm">
          {[cs.stat1, cs.stat2].map((s) => (
            <div key={s.label} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold mb-1" style={{ color: accent }}>{s.value}</div>
              <div className="text-white/40 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content sections */}
        <div className="space-y-5 mb-10">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">The Problem</h2>
            <p className="text-white/60 leading-relaxed">{cs.problem}</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">The Outcome</h2>
            <p className="text-white/60 leading-relaxed">{cs.outcome}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#4f75ff] text-white hover:bg-[#4f75ff]/90 transition-all duration-200"
          >
            Discuss this with me
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold glass hover:border-white/20 text-white/70 hover:text-white transition-all duration-200"
          >
            More case studies
          </Link>
        </div>

        {/* Next case study */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Next case study</p>
          <Link
            href={nextCs.link}
            className="group flex items-center justify-between glass rounded-2xl p-5 hover:border-white/15 transition-all duration-300"
          >
            <div>
              <p className="text-white font-semibold text-lg group-hover:text-[#4f75ff] transition-colors duration-200">
                {nextCs.title}
              </p>
              <p className="text-white/40 text-sm mt-0.5">{nextCs.tagline}</p>
            </div>
            <svg
              className="w-5 h-5 text-white/30 group-hover:text-[#4f75ff] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-4"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
