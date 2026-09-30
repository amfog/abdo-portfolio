'use client';

import type { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/data/translations/en';
import { ar } from '@/data/translations/ar';

const EMAIL = 'Abdo.fog@gmail.com';

// Flip to true once every employer and client named in the case studies and
// products has agreed to appear. It removes the orange "(pending)" marker.
const WORK_PERMISSION_CONFIRMED = false;

export default function LegalContent() {
  const { lang } = useLanguage();
  const t = lang === 'ar' ? ar.legal : en.legal;

  return (
    <div className="pt-16 pb-20">
      <div className="container"><div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{t.heading}</h1>
        <p className="text-white/40 mb-12">{t.updated}</p>

        <Section title={t.who.title}>
          <P>{t.who.body}</P>
        </Section>

        <Section title={t.privacy.title}>
          <H3>{t.privacy.formHeading}</H3>
          <P>{t.privacy.form}</P>
          <P>{t.privacy.use}</P>

          <H3>{t.privacy.browserHeading}</H3>
          <P>{t.privacy.browser}</P>

          <H3>{t.privacy.keepHeading}</H3>
          <P>{t.privacy.keep}</P>
        </Section>

        <Section title={t.terms.title}>
          <H3>{t.terms.useHeading}</H3>
          <P>{t.terms.use}</P>

          <H3 pending={WORK_PERMISSION_CONFIRMED ? undefined : t.pending}>{t.terms.workHeading}</H3>
          <P>{t.terms.work}</P>
          <P>{t.terms.figures}</P>

          <H3>{t.terms.lawHeading}</H3>
          <P>{t.terms.law}</P>
        </Section>

        <Section title={t.contact.title}>
          <P>
            {t.contact.body}{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-[#4f75ff] underline underline-offset-2 hover:text-white transition-colors"
            >
              {EMAIL}
            </a>
          </P>
        </Section>
      </div></div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

/** Passing `pending` marks a heading whose content is not yet confirmed. */
function H3({ children, pending }: { children: ReactNode; pending?: string }) {
  return (
    <h3
      className="pt-2 text-xs font-semibold uppercase tracking-wider"
      style={{ color: pending ? '#FF8C6A' : '#4f75ff' }}
    >
      {children}
      {pending && <span className="ms-2 normal-case tracking-normal">{pending}</span>}
    </h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-white/60">{children}</p>;
}
