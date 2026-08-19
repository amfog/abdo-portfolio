'use client';

import { motion } from 'framer-motion';
import { certifications } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/data/translations/en';
import { ar } from '@/data/translations/ar';

const skillGroups: Record<string, string[]> = {
  'Operations & Program Management': [
    'Project Management', 'Program Delivery', 'Cross-functional Coordination',
    'Stakeholder Management', 'KPI Reporting', 'SOP Development',
    'Workflow Optimization', 'Resource Planning', 'Risk Management',
  ],
  'Product & Systems Operations': [
    'Product Operations', 'Internal Tools Management', 'Workflow Automation',
    'Access Control Systems', 'Process Design', 'User Journey Mapping',
    'Systems Documentation', 'Feature Prioritization',
  ],
  'Gaming & Community Operations': [
    'Tournament Operations', 'Community Management', 'Discord Moderation',
    'Player Relations', 'Team Operations', 'Partnership Coordination',
    'Event Logistics', 'Competitive Ecosystem Management',
  ],
};

const tools = [
  'Notion', 'Supabase', 'Flutter', 'Google Workspace', 'Discord',
  'Trello/Asana/Jira', 'Claude/ChatGPT/Groq APIs', 'N8N',
];

const laneAccents = ['#4f75ff', '#10b981', '#f59e0b'];

export function AboutSection() {
  const { lang } = useLanguage();
  const t = lang === 'ar' ? ar : en;
  const a = t.about;

  const lanes = a.lanes.map((lane, i) => ({ ...lane, accent: laneAccents[i] }));

  return (
    <section id="about" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(123,92,246,0.06), transparent 60%)',
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left: bio + MENA map + target role */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">{a.sectionLabel}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {a.heading}{' '}
              <span className="gradient-text-brand">{a.headingHighlight}</span>
            </h2>

            <div className="space-y-4 max-w-prose mb-6" style={{ color: 'rgba(255,255,255,0.60)' }}>
              <p className="text-base leading-relaxed">{a.bio1}</p>
              <p className="text-base leading-relaxed">{a.bio2}</p>
              <p className="text-base leading-relaxed">{a.bio3}</p>
              <p className="text-base leading-relaxed">{a.bio4}</p>
            </div>
            <span style={{
              color: '#4f75ff',
              fontWeight: 600,
              fontSize: '1.125rem',
              marginTop: '28px',
              display: 'block',
              borderInlineStart: '3px solid #4f75ff',
              paddingInlineStart: '16px',
            }}>
              {a.seekingText}
            </span>

            {/* What I'm looking for */}
            <div className="glass-card mt-8">
              <h3 className="text-white font-semibold mb-4">{a.lookingFor}</h3>
              <div className="space-y-2">
                {lanes.map((r) => (
                  <div
                    key={r.title}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg"
                    style={{ background: `${r.accent}08` }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: r.accent }}
                      />
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.80)' }}>
                        {r.title}
                      </span>
                    </div>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ml-2"
                      style={{
                        background: `${r.accent}15`,
                        color: r.accent,
                        border: `1px solid ${r.accent}30`,
                      }}
                    >
                      {r.fit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: skills by group + tools + certs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {Object.entries(skillGroups).map(([group, tags]) => (
              <div key={group} className="glass-card">
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {a.skillGroups[group as keyof typeof a.skillGroups] ?? group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Tools */}
            <div className="glass-card">
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {a.toolsLabel}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-2.5 py-1 rounded-md"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      color: 'rgba(255,255,255,0.45)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card">
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {a.certsLabel}
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center justify-between gap-3">
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                      {cert.name}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{
                        background: `${cert.color}15`,
                        color: cert.color,
                        border: `1px solid ${cert.color}30`,
                      }}
                    >
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
