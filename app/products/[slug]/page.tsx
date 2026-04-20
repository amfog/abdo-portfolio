import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { products } from '@/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.title} | Abdelrahman Mohamed Ahmed`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-[#0d0d20] pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors duration-200 mb-8 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          All projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {product.badge && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#4f75ff]/10 text-[#4f75ff] border border-[#4f75ff]/20">
                {product.badge}
              </span>
            )}
            {product.status === 'live' && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ● Live
              </span>
            )}
            {product.sellable && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full border" style={{ background: 'rgba(245,158,11,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.25)' }}>
                Available as a service
              </span>
            )}
            {product.featured && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#7b5cf6]/10 text-[#7b5cf6] border border-[#7b5cf6]/20">
                ★ Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 mb-2">
            {product.icon && <span className="text-3xl">{product.icon}</span>}
            <h1 className="text-4xl md:text-5xl font-bold text-white">{product.title}</h1>
          </div>
          {(product.subtitle ?? product.tagline) && (
            <p className="text-white/50 text-xl mb-6">{product.subtitle ?? product.tagline}</p>
          )}
          <p className="text-white/65 text-lg leading-relaxed">{product.description}</p>
        </div>

        {/* KPI highlight */}
        <div className="glass rounded-2xl p-8 mb-8 border border-[#4f75ff]/15">
          <div className="text-5xl font-bold text-[#4f75ff] mb-2">{product.kpi}</div>
          <div className="text-white/50">{product.kpiLabel}</div>
        </div>

        {(product.challenge ?? product.solution ?? product.outcome) && (
          <div className="space-y-4 mb-8">
            {product.challenge && (
              <div className="glass rounded-2xl p-6">
                <h2 className="text-white font-semibold mb-2">Challenge</h2>
                <p className="text-white/65 text-sm leading-relaxed">{product.challenge}</p>
              </div>
            )}
            {product.solution && (
              <div className="glass rounded-2xl p-6">
                <h2 className="text-white font-semibold mb-2">Solution</h2>
                <p className="text-white/65 text-sm leading-relaxed">{product.solution}</p>
              </div>
            )}
            {product.outcome && (
              <div className="glass rounded-2xl p-6">
                <h2 className="text-white font-semibold mb-2">Outcome</h2>
                <p className="text-white/65 text-sm leading-relaxed">{product.outcome}</p>
              </div>
            )}
          </div>
        )}

        {product.sellable && (
          <div className="glass rounded-2xl p-6 mb-8 border" style={{ borderColor: 'rgba(245,158,11,0.25)' }}>
            <h2 className="text-sm font-semibold mb-4" style={{ color: '#fbbf24' }}>Pricing</h2>
            <div className="space-y-2 text-sm mb-5">
              {product.pricingSetup && (
                <div className="flex justify-between text-white/70">
                  <span>Setup fee</span><span className="text-white">{product.pricingSetup}</span>
                </div>
              )}
              {product.pricingRetainer && (
                <div className="flex justify-between text-white/70">
                  <span>Monthly retainer</span><span className="text-white">{product.pricingRetainer}</span>
                </div>
              )}
              {product.setupTime && (
                <div className="flex justify-between text-white/70">
                  <span>Turnaround time</span><span className="text-white">{product.setupTime}</span>
                </div>
              )}
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg border transition-all duration-200"
              style={{ color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.1)' }}
            >
              Inquire about this
            </Link>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {product.problems && product.problems.length > 0 && (
            <div className="glass rounded-2xl p-6">
              <h2 className="text-white font-semibold mb-4">Problems Solved</h2>
              <ul className="space-y-2">
                {product.problems.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-white/65 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4f75ff] flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(product.tech ?? product.techStack) && (
            <div className="glass rounded-2xl p-6">
              <h2 className="text-white font-semibold mb-4">Tools & Tech</h2>
              <div className="flex flex-wrap gap-2">
                {(product.tech ?? product.techStack ?? []).map((t) => (
                  <span key={t} className="text-sm px-3 py-1.5 rounded-xl bg-[#4f75ff]/10 text-[#4f75ff] border border-[#4f75ff]/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#4f75ff] text-white hover:bg-[#4f75ff]/90 transition-all duration-200"
          >
            Discuss this project
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold glass hover:border-white/20 text-white/70 hover:text-white transition-all duration-200"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
