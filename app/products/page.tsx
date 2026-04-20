import Link from 'next/link';
import type { Metadata } from 'next';
import { products } from '@/data';

export const metadata: Metadata = {
  title: 'Projects | Abdelrahman Mohamed Ahmed',
  description: 'Systems and platforms built by Abdelrahman Mohamed Ahmed.',
};

export default function ProductsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">All Projects</h1>
          <p className="text-white/50 max-w-xl">Systems and platforms built end-to-end.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="glass rounded-2xl p-6 hover:border-white/15 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#4f75ff]/10 text-[#4f75ff] border border-[#4f75ff]/20">
                  {product.badge}
                </span>
                {product.featured && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#7b5cf6]/10 text-[#7b5cf6] border border-[#7b5cf6]/20">
                    ★ Featured
                  </span>
                )}
              </div>
              <h2 className="text-white font-bold text-xl mb-1 group-hover:text-[#4f75ff] transition-colors duration-200">
                {product.title}
              </h2>
              <p className="text-white/50 text-sm mb-4">{product.subtitle}</p>
              <div className="text-2xl font-bold text-[#4f75ff] mb-0.5">{product.kpi}</div>
              <div className="text-white/30 text-xs">{product.kpiLabel}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
