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
    description: cs.challenge,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const cs = caseStudies[index];
  const nextCs = caseStudies[(index + 1) % caseStudies.length];

  const accent = '#4f75ff';

  const sections = [
    { label: 'The Challenge', content: cs.challenge, icon: '🎯' },
    { label: 'The Approach', content: cs.approach, icon: '🔧' },
    { label: 'The Outcome', content: cs.outcome, icon: '✅' },
    { label: 'Key Lessons', content: cs.lessons, icon: '💡' },
  ];

  return (
    <main className="min-h-screen bg-[#050510] pt-24 pb-16">
      <div className="container">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors duration-200 mb-8 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          All case studies
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{cs.title}</h1>
          <p className="text-white/50 text-xl">{cs.subtitle}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {cs.metrics.map((m) => (
            <div key={m.label} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold mb-1" style={{ color: accent }}>{m.value}</div>
              <div className="text-white/40 text-xs">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Content sections */}
        <div className="space-y-5 mb-10">
          {sections.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6">
              <h2 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                <span>{s.icon}</span>
                {s.label}
              </h2>
              <p className="text-white/60 leading-relaxed">{s.content}</p>
            </div>
          ))}
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
            href={`/case-studies/${nextCs.slug}`}
            className="group flex items-center justify-between glass rounded-2xl p-5 hover:border-white/15 transition-all duration-300"
          >
            <div>
              <p className="text-white font-semibold text-lg group-hover:text-[#4f75ff] transition-colors duration-200">
                {nextCs.title}
              </p>
              <p className="text-white/40 text-sm mt-0.5">{nextCs.subtitle}</p>
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
