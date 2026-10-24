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
  const isActive = cs.status !== 'In Development';

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

        {/* Long form (25 Oct 2026): only when the case study has it. */}
        {(cs.role || cs.dates || cs.partners) && (
          <div className="glass rounded-2xl p-6 mb-10 grid gap-4 md:grid-cols-3">
            {cs.role && (
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Role</p>
                <p className="text-white/70 text-sm leading-relaxed">{cs.role}</p>
              </div>
            )}
            {cs.dates && (
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Dates</p>
                <p className="text-white/70 text-sm leading-relaxed">{cs.dates}</p>
              </div>
            )}
            {cs.partners && (
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Partners</p>
                <p className="text-white/70 text-sm leading-relaxed">{cs.partners}</p>
              </div>
            )}
          </div>
        )}

        {cs.heroImage && (
          <figure className="mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cs.heroImage.src} alt={cs.heroImage.alt} className="w-full rounded-2xl border border-white/10" />
            {cs.heroImage.caption && <figcaption className="mt-3 text-white/40 text-sm">{cs.heroImage.caption}</figcaption>}
          </figure>
        )}

        {cs.stats && cs.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {cs.stats.map((s) => (
              <div key={s.label} className="glass rounded-xl p-4">
                <div className="text-2xl font-bold mb-1" style={{ color: accent }}>{s.value}</div>
                <div className="text-white/70 text-xs font-medium">{s.label}</div>
                {s.note && <div className="text-white/35 text-[11px] mt-1">{s.note}</div>}
              </div>
            ))}
          </div>
        )}

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

        {cs.sections && cs.sections.length > 0 && (
          <div className="space-y-5 mb-10">
            {cs.sections.map((sec) => (
              <div key={sec.heading} className="glass rounded-2xl p-6">
                <h2 className="text-white font-semibold text-lg mb-3">{sec.heading}</h2>
                {sec.body && <p className="text-white/60 leading-relaxed">{sec.body}</p>}
                {sec.bullets && (
                  <ul className={`space-y-2 ${sec.body ? 'mt-3' : ''}`}>
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-white/60 leading-relaxed">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {cs.images && cs.images.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 mb-10">
            {cs.images.map((img) => (
              <figure key={img.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full rounded-xl border border-white/10" />
                {img.caption && <figcaption className="mt-2 text-white/40 text-xs leading-relaxed">{img.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-4 mb-16">
          {cs.liveUrl && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold glass hover:border-white/20 text-white transition-all duration-200"
            >
              See it live
            </a>
          )}
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
