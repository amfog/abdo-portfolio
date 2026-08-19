'use client';

import { motion } from 'framer-motion';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/data/translations/en';
import { ar } from '@/data/translations/ar';

export default function ProductsSection() {
  const { lang } = useLanguage();
  const t = lang === 'ar' ? ar : en;
  const p = t.products;

  const localizedProducts = products.map((product) => {
    const card = p.cards[product.slug as keyof typeof p.cards];
    if (!card) return product;
    return {
      ...product,
      title: card.title,
      badge: card.badge,
      subtitle: card.subtitle,
      description: card.description,
      kpiLabel: card.kpiLabel,
    };
  });

  return (
    <section id="products" className="relative py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 text-xs text-white/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7b5cf6]" />
            {p.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            {p.heading}
          </h2>
          <p className="text-white/50 max-w-lg">
            {p.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {localizedProducts.map((product) => (
            <ProductCard key={product.id} product={product} lang={lang} productT={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
