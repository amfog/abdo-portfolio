'use client';

import Link from 'next/link';
import { playerAchievements } from '@/data/achievements';
import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/data/translations/en';
import { ar } from '@/data/translations/ar';

export default function PlayerAchievementsPage() {
  const { lang } = useLanguage();
  const ach = lang === 'ar' ? ar.achievements : en.achievements;
  const pl = ach.player;

  return (
    <div className="min-h-screen section-padding">
      <div className="container">

        <Link
          href="/"
          className="inline-flex items-center gap-1 text-white/40 hover:text-white/70 transition-colors text-sm"
          style={{ marginBottom: '2rem', display: 'inline-flex' }}
        >
          {ach.backToHome}
        </Link>

        <div style={{ marginBottom: '3rem' }}>
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: '#7b5cf6', display: 'block', marginBottom: '0.75rem' }}
          >
            {pl.sectionLabel}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ marginBottom: '1rem' }}>
            {pl.heading}
          </h1>
          <p className="text-white/50 text-lg" style={{ maxWidth: '36rem' }}>
            {pl.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {playerAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {achievement.images.length > 0 ? (
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img
                    src={achievement.images[0].src}
                    alt={achievement.images[0].alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {achievement.images[0].caption && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '0.5rem 0.75rem',
                        background: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(4px)',
                        fontSize: '0.75rem',
                        color: 'rgba(255,255,255,0.7)',
                      }}
                    >
                      {achievement.images[0].caption}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  style={{
                    aspectRatio: '16/9',
                    background: 'linear-gradient(135deg, rgba(123,92,246,0.15), rgba(79,117,255,0.15))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem', fontWeight: 500 }}>
                    {achievement.event}
                  </span>
                </div>
              )}

              <div style={{ padding: '1.25rem' }}>
                <span
                  className="inline-block text-xs font-semibold rounded-full"
                  style={{
                    background: 'rgba(123,92,246,0.15)',
                    color: '#7b5cf6',
                    border: '1px solid rgba(123,92,246,0.3)',
                    padding: '0.25rem 0.75rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  {achievement.placement}
                </span>

                <h3 className="font-semibold text-white" style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                  {achievement.title}
                </h3>
                <p className="text-white/50 text-sm" style={{ marginBottom: '0.125rem' }}>{achievement.event}</p>
                <p className="text-white/30 text-xs" style={{ marginBottom: '0.75rem' }}>{achievement.date}</p>

                {achievement.roster && achievement.roster.length > 0 && (
                  <div className="flex flex-wrap gap-1.5" style={{ marginBottom: '0.75rem' }}>
                    {achievement.roster.map((player) => (
                      <span
                        key={player}
                        className="text-xs rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.07)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: 'rgba(255,255,255,0.55)',
                          padding: '0.15rem 0.6rem',
                        }}
                      >
                        {player}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
