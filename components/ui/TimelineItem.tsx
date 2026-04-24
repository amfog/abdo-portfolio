'use client';

import { motion } from 'framer-motion';
import type { TimelineEntry } from '@/types';

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  isLast?: boolean;
}

export default function TimelineItem({ entry, index, isLast = false }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 pb-12"
    >
      {/* Line */}
      {!isLast && (
        <div
          className="absolute left-[19px] top-10 bottom-0 w-px"
          style={{
            background: `linear-gradient(to bottom, ${entry.accent ?? '#4f75ff'}60, transparent)`,
          }}
        />
      )}

      {/* Dot */}
      <div className="relative z-10 flex-shrink-0 mt-1">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border"
          style={{
            background: `${entry.accent ?? '#4f75ff'}15`,
            borderColor: `${entry.accent ?? '#4f75ff'}40`,
            color: entry.accent ?? '#4f75ff',
            boxShadow: `0 0 20px ${entry.accent ?? '#4f75ff'}30`,
          }}
        >
          {entry.year.slice(2)}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 glass rounded-2xl p-8 hover:border-white/15 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{
              background: `${entry.accent ?? '#4f75ff'}20`,
              color: entry.accent ?? '#4f75ff',
            }}
          >
            {entry.year}
          </span>
        </div>
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-white transition-colors">
          {entry.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">{entry.description}</p>
      </div>
    </motion.div>
  );
}
