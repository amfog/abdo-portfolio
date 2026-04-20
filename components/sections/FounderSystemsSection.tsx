'use client';

import { motion } from 'framer-motion';
import { pyramidEditions, products } from '@/data';

function NexaroCard() {
  const product = products.find((p) => p.id === 'nexaro-ai')!;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="glass rounded-3xl p-8 relative overflow-hidden group col-span-1 hover:border-[#4f75ff]/30 transition-all duration-500"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 30% 20%, rgba(79,117,255,0.1), transparent 60%)' }} />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#4f75ff]/10 text-[#4f75ff] border border-[#4f75ff]/20">
            {product.badge}
          </span>
          <div className="w-10 h-10 rounded-xl bg-[#4f75ff]/10 border border-[#4f75ff]/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-[#4f75ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
        <p className="text-white/50 text-sm mb-5 leading-relaxed">{product.description}</p>

        <div className="glass rounded-2xl p-4 mb-5">
          <div className="text-3xl font-bold text-[#4f75ff] mb-1">{product.kpi}</div>
          <div className="text-white/40 text-xs">{product.kpiLabel}</div>
        </div>

        {product.problems && product.problems.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {product.problems.map((p) => (
              <span key={p} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/8">
                {p}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {(product.tech ?? product.techStack ?? []).map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-[#4f75ff]/10 text-[#4f75ff] border border-[#4f75ff]/20">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ViciousCard() {
  const product = products.find((p) => p.id === 'vicious-os')!;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      whileHover={{ y: -6 }}
      className="glass rounded-3xl p-8 relative overflow-hidden group hover:border-[#7b5cf6]/30 transition-all duration-500 md:col-span-2"
    >
      {/* Featured badge glow */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg, transparent, #7b5cf6, #4f75ff, transparent)' }}
      />
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(123,92,246,0.15), transparent 70%)' }} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 60% 30%, rgba(123,92,246,0.12), transparent 60%)' }} />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#7b5cf6]/10 text-[#7b5cf6] border border-[#7b5cf6]/20">
            {product.badge}
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            ★ Hero Project
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">{product.title}</h3>
            <p className="text-white/50 text-sm mb-5 leading-relaxed">{product.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {(product.problems ?? []).map((p) => (
                <span key={p} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/8">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Players Managed', value: '170+', icon: '👥' },
              { label: 'Departments Served', value: '4', icon: '🏢' },
              { label: 'Adoption Time', value: '3 wks', icon: '⚡' },
              { label: 'Manual Reports Eliminated', value: '~80%', icon: '📊' },
            ].map((m) => (
              <div key={m.label} className="glass rounded-xl p-3 flex items-center gap-3">
                <span className="text-lg">{m.icon}</span>
                <div className="flex-1">
                  <div className="text-white/40 text-xs">{m.label}</div>
                </div>
                <div className="text-[#7b5cf6] font-bold text-sm">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PyramidsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -6 }}
      className="glass rounded-3xl p-8 relative overflow-hidden group hover:border-[#4f75ff]/30 transition-all duration-500 md:col-span-2"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 70% 20%, rgba(79,117,255,0.1), transparent 60%)' }} />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#4f75ff]/10 text-[#4f75ff] border border-[#4f75ff]/20">
            Esports
          </span>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Cairo, Egypt · MENA
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">Pyramids Cup Ecosystem</h3>
        <p className="text-white/50 text-sm mb-6">5 editions · 3,500+ participants · Infrastructure built from scratch</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-white/30 text-xs uppercase tracking-wider">
                <th className="text-left pb-3 font-medium">Edition</th>
                <th className="text-center pb-3 font-medium">Teams</th>
                <th className="text-center pb-3 font-medium">Participants</th>
                <th className="text-right pb-3 font-medium">Views</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {pyramidEditions.map((ed) => (
                <tr key={ed.name} className="group/row hover:bg-white/3 transition-colors duration-150">
                  <td className="py-2.5 text-white/70 font-medium">{ed.name}</td>
                  <td className="py-2.5 text-center text-white/50">{ed.teams}</td>
                  <td className="py-2.5 text-center">
                    <span className="text-[#4f75ff] font-semibold">{ed.participants}</span>
                  </td>
                  <td className="py-2.5 text-right text-white/50">
                    {ed.views ? ed.views.toLocaleString() : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

export default function FounderSystemsSection() {
  return (
    <section id="systems" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 text-xs text-white/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f75ff]" />
            Founder-led Systems
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Flagship Ventures
          </h2>
          <p className="text-white/50 max-w-xl text-lg">
            Three systems I built, owned, and scaled — each solving a real operational challenge.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          <NexaroCard />
          <ViciousCard />
          <PyramidsCard />
        </div>
      </div>
    </section>
  );
}
