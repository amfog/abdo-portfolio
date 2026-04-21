'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const contactLinks = [
  {
    label: 'Email',
    value: 'Abdo.fog@gmail.com',
    href: 'mailto:Abdo.fog@gmail.com',
    color: '#4f75ff',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: '/in/devabdelrhaman',
    href: 'https://www.linkedin.com/in/devabdelrhaman/',
    color: '#7b5cf6',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Linktree',
    value: 'linktr.ee/abdofog',
    href: 'https://linktr.ee/abdofog',
    color: '#4f75ff',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(`${form.name}\n${form.message}`);
    window.location.href = `mailto:Abdo.fog@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(79,117,255,0.08), transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 text-xs text-white/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f75ff]" />
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s build something together.
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Open to Product Operations, Program Management, and Systems Leadership roles. Drop me a
            message or reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column: contact cards + availability */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 glass rounded-2xl p-5 w-full hover:border-white/15 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{ background: `${link.color}15`, color: link.color }}
                >
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/40 text-xs mb-0.5">{link.label}</p>
                  <p className="text-white text-sm font-medium truncate group-hover:text-white transition-colors">
                    {link.value}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.a>
            ))}

            {/* Availability note */}
            <div className="glass rounded-2xl p-5 border border-emerald-500/15 w-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">Available for opportunities</span>
              </div>
              <p className="text-white/40 text-sm">
                Currently open to full-time roles, contract work, and advisory positions in product
                operations and systems management.
              </p>
            </div>
          </motion.div>

          {/* Right column: contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/50 text-xs mb-1.5 font-medium uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#4f75ff]/50 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-white/50 text-xs mb-1.5 font-medium uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#4f75ff]/50 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/50 text-xs mb-1.5 font-medium uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#4f75ff]/50 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-white/50 text-xs mb-1.5 font-medium uppercase tracking-wider">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, opportunity, or just say hello..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#4f75ff]/50 transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #4f75ff, #7b5cf6)',
                boxShadow: '0 0 30px rgba(79,117,255,0.3)',
              }}
            >
              Send message via email
            </button>

            <p className="text-white/25 text-xs text-center">
              Opens your email client with pre-filled content to Abdo.fog@gmail.com
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
