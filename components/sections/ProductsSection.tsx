'use client';

import { motion } from 'framer-motion';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data';

export default function ProductsSection() {
  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 text-xs text-white/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7b5cf6]" />
            Systems Built
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            What I&apos;ve built.
          </h2>
          <p className="text-white/50 max-w-lg">
            End-to-end systems ownership — from architecture to adoption.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
