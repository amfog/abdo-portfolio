'use client';

import { motion } from 'framer-motion';
import SkillBadge from '@/components/ui/SkillBadge';
import { skills } from '@/data';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-20 px-4 sm:px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(123,92,246,0.06), transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left column: bio + target role */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 text-xs text-white/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b5cf6]" />
              About
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              I build systems that help{' '}
              <span className="gradient-text-primary">teams scale faster.</span>
            </h2>

            <div className="space-y-4 text-white/55 text-base leading-relaxed max-w-prose">
              <p>
                I&apos;m Abdelrahman Mohamed Ahmed — a founder, operations architect, and product
                systems leader based in Cairo, Egypt. My work sits at the intersection of operations,
                product, and technology.
              </p>
              <p>
                Over the past 3+ years, I&apos;ve built scalable workflow ecosystems, internal
                platforms, and esports infrastructures across MENA. I founded the Pyramids Cup,
                shipped Vicious OS from scratch, and am now building Nexaro AI as my startup vision
                for AI-assisted operational systems.
              </p>
              <p>
                I&apos;m currently seeking roles as a{' '}
                <span className="text-white font-medium">Product Operations Director</span>,{' '}
                <span className="text-white font-medium">Program Manager</span>, or{' '}
                <span className="text-white font-medium">Operations Manager</span> — anywhere that
                values systems thinking, execution velocity, and founder-level ownership.
              </p>
            </div>

            {/* Contact info */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-[#4f75ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Cairo, Egypt
              </div>
              <a
                href="mailto:Abdo.fog@gmail.com"
                className="glass rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-[#4f75ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Abdo.fog@gmail.com
              </a>
              <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-[#4f75ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +201507144461
              </div>
            </div>

            {/* What I'm looking for */}
            <div className="mt-8 glass rounded-2xl p-6 border border-[#4f75ff]/15">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-[#4f75ff]/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#4f75ff]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </span>
                What I&apos;m Looking For
              </h3>
              <div className="space-y-2">
                {[
                  { title: 'Product Operations Director', primary: true },
                  { title: 'Program Manager', primary: false },
                  { title: 'Operations Manager', primary: false },
                  { title: 'Gaming / Esports Operations', primary: false },
                ].map((r) => (
                  <div
                    key={r.title}
                    className={`px-3 py-2 rounded-lg text-sm flex items-center gap-2 ${
                      r.primary
                        ? 'bg-[#4f75ff]/10 text-[#4f75ff] border border-[#4f75ff]/20'
                        : 'text-white/50'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${r.primary ? 'bg-[#4f75ff]' : 'bg-white/20'}`} />
                    {r.title}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column: skills + certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Skills */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <SkillBadge
                    key={skill}
                    label={skill}
                    variant={i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'default'}
                  />
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Certifications & Path</h3>
              <div className="space-y-3">
                {[
                  { name: 'Google Project Management Certificate', status: 'Completed', color: '#4f75ff' },
                  { name: 'CAPM (PMI)', status: 'In Progress', color: '#7b5cf6' },
                ].map((cert) => (
                  <div key={cert.name} className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">{cert.name}</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
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
