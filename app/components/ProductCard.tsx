import Link from 'next/link';
import { Product } from '../lib/data';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition-all hover:bg-zinc-800/50 hover:shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
          {product.category}
        </span>
        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-500/20">
          {product.kpi}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
        {product.description}
      </p>

      <Link 
        href={product.link}
        className="inline-flex items-center text-sm font-medium text-white group-hover:text-blue-400 transition-colors"
      >
        View Case Study 
        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="ArrowRight" />
        </svg>
      </Link>
    </div>
  );
}
