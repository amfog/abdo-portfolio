'use client';

import { motion } from 'framer-motion';
import TimelineItem from '@/components/ui/TimelineItem';
import { timeline } from '@/data';

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative py-16 md:py-20 px-4 sm:px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(79,117,255,0.06), transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left sticky label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 lg:self-start pl-4 lg:pl-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 text-xs text-white/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b5cf6]" />
              Timeline
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The journey so far.
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              4 years of building, shipping, and growing — from the first tournament to a startup
              vision.
            </p>

            {/* Quick stats */}
            <div className="space-y-3">
              {[
                { label: 'Years in industry', value: '3+' },
                { label: 'Projects shipped', value: '10+' },
                { label: 'Roles held', value: '4' },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between glass rounded-xl px-4 py-2.5">
                  <span className="text-white/50 text-sm">{s.label}</span>
                  <span className="text-[#4f75ff] font-bold text-sm">{s.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline entries */}
          <div className="pt-2">
            {timeline.map((entry, i) => (
              <TimelineItem
                key={entry.year + entry.title}
                entry={entry}
                index={i}
                isLast={i === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
