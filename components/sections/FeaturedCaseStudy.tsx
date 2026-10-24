'use client';

/*
  Featured case study, right after the hero (25 Oct 2026).
  Numbers: Pyramids Cup 8 database and Discord Server Insights; views and
  stream peaks are owner reported and say so. Cup 8 partners: Pyramids Queue,
  The Vicious Esports, Nexaro; supported by the Rift Legends Program by The
  Purge. Profiles, inhouses and fantasy are a separate side project.
*/

import { motion } from 'framer-motion';
import Link from 'next/link';

const stats = [
  { value: '331', label: 'Matches', note: 'four stages' },
  { value: '364', label: 'Players', note: '24 countries' },
  { value: '3,660', label: 'Discord members', note: '66% new member retention' },
  { value: 'Up to 1M', label: 'Stream and clip views', note: 'owner reported' },
  { value: '580', label: 'Grand Final peak', note: 'three streams, owner reported' },
  { value: '5', label: 'Staff', note: 'the whole season' },
];

const role = [
  'Founded and ran the circuit with a staff of five: format, rulebook, calendar',
  'Designed the system: tournament bot, operations app, public website, one database',
  'Ran match nights: 13 matches per round, two waves, Arabic and English',
  'Kept integrity human: every result checked by a person before publishing',
];

export function FeaturedCaseStudy() {
  return (
    <section id="featured-case-study" className="relative py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-6 md:p-12"
          style={{ background: 'linear-gradient(135deg, rgba(79,117,255,0.08), rgba(255,255,255,0.02) 50%, rgba(245,158,11,0.06))' }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em]" style={{ color: '#f59e0b' }}>
            Featured case study · Pyramids Cup 8 · Wild Rift MENA
          </p>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                Six weeks, four stages, 331 matches.{' '}
                <span className="gradient-text-brand">One system ran all of it.</span>
              </h2>
              <p className="mt-5 leading-relaxed text-white/60">
                Pyramids Cup 8 is the MENA local circuit inside the Wild Rift Rift Legends ecosystem. I founded it,
                ran it with a staff of five and designed the system behind it, built with Nexaro. JSK Esports won the
                Grand Final 3-2 against SBO3A; both go on to the Rift Legends Regional Groups.
              </p>
              <ul className="mt-6 space-y-2">
                {role.map((r) => (
                  <li key={r} className="flex gap-2 text-sm text-white/60">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f75ff]" />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/case-studies/pyramids-cup-8" className="btn-primary">
                  Read the full case study
                </Link>
                <a href="https://pyramidsqueue.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  See it live
                </a>
              </div>
            </div>
            <div>
              <div className="rounded-2xl p-1.5" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.25), rgba(79,117,255,0.2))' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/pc8/final-results.webp" alt="Pyramids Cup 8 final results" className="w-full rounded-xl" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-white md:text-3xl">{s.value}</p>
                    <p className="text-xs text-white/60">{s.label}</p>
                    <p className="text-[11px] text-white/35">{s.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-white/35">
            Pyramids Queue and The Vicious Esports, powered by Nexaro. Supported by the Rift Legends Program by The Purge.
          </p>
        </motion.div>

        <Link
          href="/case-studies/pyramids-q-player-platform"
          className="glass mt-5 flex flex-col justify-between gap-3 rounded-2xl p-6 transition-colors hover:border-white/20 sm:flex-row sm:items-center"
        >
          <div>
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.25em]" style={{ color: '#fb923c' }}>Side project</p>
            <p className="font-semibold text-white">Pyramids Q Player Platform: profiles, inhouses, fantasy</p>
            <p className="mt-1 text-sm text-white/50">Built for the off-season to grow the player base and help new teams form.</p>
          </div>
          <span className="text-sm" style={{ color: '#fdba74' }}>Read it</span>
        </Link>
      </div>
    </section>
  );
}
