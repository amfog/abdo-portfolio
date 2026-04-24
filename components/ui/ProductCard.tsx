'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false);
  const displayTech = product.tags ?? product.tech ?? [];
  const displaySubtitle = product.tagline ?? product.subtitle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-8 hover:border-white/15 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(79,117,255,0.06), transparent 70%)' }}
      />

      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
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
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full border"
              style={{ background: 'rgba(245,158,11,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.25)' }}
            >
              Available as a service
            </span>
          )}
        </div>
        {product.featured && (
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#7b5cf6]/10 text-[#7b5cf6] border border-[#7b5cf6]/20">
            ★ Featured
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 mb-1">
        {product.icon && <span className="text-xl">{product.icon}</span>}
        <h3 className="text-white font-bold text-xl">{product.title}</h3>
      </div>
      {displaySubtitle && <p className="text-white/50 text-sm mb-4">{displaySubtitle}</p>}
      <p className="text-white/65 text-sm leading-relaxed mb-6 flex-1">{product.description}</p>

      <div className="glass rounded-xl p-4 mb-5">
        <div className="text-2xl font-bold text-[#4f75ff] mb-0.5">{product.kpi}</div>
        <div className="text-white/40 text-xs">{product.kpiLabel}</div>
      </div>

      {displayTech.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {displayTech.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/50 border border-white/8">
              {t}
            </span>
          ))}
        </div>
      )}

      {product.sellable && expanded && (
        <div
          className="mb-5 p-4 rounded-xl border"
          style={{ background: 'rgba(245,158,11,0.06)', borderColor: 'rgba(245,158,11,0.2)' }}
        >
          <h4 className="text-sm font-semibold mb-3" style={{ color: '#fbbf24' }}>Pricing</h4>
          <div className="space-y-1.5 text-sm mb-4">
            {product.pricingSetup && (
              <div className="flex justify-between text-white/70">
                <span>Setup fee</span>
                <span className="text-white">{product.pricingSetup}</span>
              </div>
            )}
            {product.pricingRetainer && (
              <div className="flex justify-between text-white/70">
                <span>Monthly retainer</span>
                <span className="text-white">{product.pricingRetainer}</span>
              </div>
            )}
            {product.setupTime && (
              <div className="flex justify-between text-white/70">
                <span>Turnaround time</span>
                <span className="text-white">{product.setupTime}</span>
              </div>
            )}
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg border transition-all duration-200 hover:bg-[rgba(245,158,11,0.15)]"
            style={{ color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)' }}
          >
            Inquire about this
          </Link>
        </div>
      )}

      <div className="flex items-center gap-3 mt-auto">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4f75ff] hover:text-white transition-colors duration-200 group/link"
        >
          View details
          <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
        {product.sellable && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm ml-auto transition-colors duration-200"
            style={{ color: expanded ? '#fbbf24' : 'rgba(251,191,36,0.6)' }}
          >
            {expanded ? 'Hide pricing ↑' : 'See pricing ↓'}
          </button>
        )}
      </div>
    </motion.div>
  );
}
