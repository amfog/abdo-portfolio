import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '@/data';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-20">
      <div className="container">
        {/* Back Link */}
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          All case studies
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full border"
              style={{
                background: 'rgba(79,117,255,0.1)',
                color: '#7b9eff',
                borderColor: 'rgba(79,117,255,0.25)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {study.title}
        </h1>
        <p className="text-xl text-white/60 mb-12 max-w-3xl">
          {study.subtitle}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {study.metrics.map((metric) => (
            <div
              key={metric.label}
              className="glass-card p-6 text-center"
            >
              <p className="text-3xl font-bold gradient-text-brand mb-1">
                {metric.value}
              </p>
              <p className="text-xs text-white/45">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-3xl space-y-12">
          {/* Challenge */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎯</span>
              <h2 className="text-2xl font-bold text-white">The Challenge</h2>
            </div>
            <p className="text-white/60 leading-relaxed">{study.challenge}</p>
          </section>

          {/* Approach */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔧</span>
              <h2 className="text-2xl font-bold text-white">The Approach</h2>
            </div>
            <p className="text-white/60 leading-relaxed">{study.approach}</p>
          </section>

          {/* Outcome */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✅</span>
              <h2 className="text-2xl font-bold text-white">The Outcome</h2>
            </div>
            <p className="text-white/60 leading-relaxed">{study.outcome}</p>
          </section>

          {/* Lessons (if exists) */}
          {study.lessons && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💡</span>
                <h2 className="text-2xl font-bold text-white">Lessons Learned</h2>
              </div>
              <p className="text-white/60 leading-relaxed">{study.lessons}</p>
            </section>
          )}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4f75ff] text-white font-medium hover:bg-[#4f75ff]/90 transition-colors"
          >
            Let's build something together
          </Link>
        </div>
      </div>
    </article>
  );
}
