'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/data';

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="text-xs font-semibold tracking-wider text-[#4f75ff] uppercase mb-3 block">Timeline</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">The journey so far.</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            4 years of building, shipping, and growing — from the first tournament to a startup vision.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((entry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Dot */}
                <div 
                  className="absolute left-0 md:left-4 top-1 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                  style={{ borderColor: entry.accent || '#4f75ff', backgroundColor: `${entry.accent || '#4f75ff'}10`, color: entry.accent || '#4f75ff' }}
                >
                  {entry.year.slice(0, 2)}
                </div>

                {/* Content Card */}
                <div className="glass-card p-6 md:p-8 hover:border-white/15 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <span 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium w-fit whitespace-nowrap"
                      style={{ backgroundColor: `${entry.accent || '#4f75ff'}15`, color: entry.accent || '#4f75ff' }}
                    >
                      {entry.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{entry.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
