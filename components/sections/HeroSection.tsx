'use client';

import Link from 'next/link';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect, forwardRef } from 'react';
import type { CSSProperties } from 'react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

type NodeBodyType = 'pyramids' | 'vicious' | 'nexaro' | 'wildrift';

type NodeSpec = {
  tag: string;
  title: string;
  footer: string;
  accent: string;
  link: string;
  revealDelay: number;
  floatDelay: number;
  dotDelay: number;
  positionStyle: CSSProperties;
  body: NodeBodyType;
  cardBackground: string;
  cardBorderSide: string;
  hoverGlow: string;
  hoverRotateY?: number;
  cardWidth?: number;
  cardPadding?: string;
  titleFontSize?: number;
};

type LineData = { x1: number; y1: number; x2: number; y2: number; color: string };

const NODE_SPECS: NodeSpec[] = [
  {
    tag: 'COMMUNITY',
    title: 'Pyramids Queue',
    footer: 'Esports Production · Founder',
    accent: '#f59e0b',
    link: 'https://project-c3kqs.vercel.app/',
    revealDelay: 0.3,
    floatDelay: 0,
    dotDelay: 0,
    positionStyle: { position: 'absolute', top: '8%', left: -20, zIndex: 3 },
    body: 'pyramids',
    cardBackground: 'rgba(0,0,0,0.45)',
    cardBorderSide: 'rgba(245,158,11,0.45)',
    hoverGlow: 'rgba(245,158,11,0.45)',
  },
  {
    tag: 'OPS PM',
    title: 'Vicious Esports',
    footer: 'Operations · Project Manager',
    accent: '#eab308',
    link: 'https://www.instagram.com/thevicious_/',
    revealDelay: 0.5,
    floatDelay: 0.8,
    dotDelay: 0.7,
    // FIX 2: moved from top: '8%' to top: '2%'
    positionStyle: { position: 'absolute', top: '2%', right: -20, zIndex: 3 },
    body: 'vicious',
    cardBackground: 'rgba(0,0,0,0.45)',
    cardBorderSide: 'rgba(234,179,8,0.5)',
    hoverGlow: 'rgba(234,179,8,0.5)',
  },
  {
    tag: 'SYSTEMS',
    title: 'Nexaro',
    footer: '7-product ecosystem · Founder',
    accent: '#7b5cf6',
    link: 'https://project-jelc4.vercel.app/',
    revealDelay: 0.7,
    floatDelay: 1.6,
    dotDelay: 1.4,
    positionStyle: { position: 'absolute', top: '58%', right: 10, zIndex: 3 },
    body: 'nexaro',
    cardBackground: 'rgba(0,0,0,0.45)',
    cardBorderSide: 'rgba(123,92,246,0.45)',
    hoverGlow: 'rgba(123,92,246,0.45)',
    cardWidth: 220,
    cardPadding: '16px 18px',
    titleFontSize: 16,
  },
  {
    tag: 'EX-PRO PLAYER',
    title: 'League of Legends: Wild Rift',
    footer: 'Ex-Pro Player · Analyst · Streamer',
    accent: '#06b6d4',
    link: 'https://liquipedia.net/wildrift/F0G',
    revealDelay: 0.9,
    floatDelay: 2.4,
    dotDelay: 2.1,
    positionStyle: { position: 'absolute', bottom: -20, left: -20, zIndex: 3 },
    body: 'wildrift',
    cardBackground: 'rgba(0,0,0,0.45)',
    cardBorderSide: 'rgba(6,182,212,0.45)',
    hoverGlow: 'rgba(6,182,212,0.5)',
    hoverRotateY: 4,
    cardWidth: 170,
    cardPadding: '10px 12px',
    titleFontSize: 12,
  },
];

function NodeBodyContent({ body, accent }: { body: NodeBodyType; accent: string }) {
  if (body === 'pyramids') {
    return (
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {['Discord', 'Esports', 'Riot Partnership'].map((t) => (
          <span
            key={t}
            style={{
              fontSize: 10,
              fontFamily: 'monospace',
              color: accent,
              background: `${accent}1a`,
              border: `1px solid ${accent}40`,
              borderRadius: 3,
              padding: '1px 5px',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    );
  }

  if (body === 'vicious') {
    return (
      <div style={{ display: 'flex', gap: 4 }}>
        {(['Todo', 'Active', 'Done'] as const).map((col, i) => (
          <div key={col} style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>
              {col}
            </div>
            <div
              style={{
                height: 4,
                borderRadius: 2,
                background: i === 1 ? accent : 'rgba(255,255,255,0.15)',
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  if (body === 'wildrift') {
    return (
      <div style={{ display: 'flex', gap: 4 }}>
        {['Competitor', 'Analyst'].map((t) => (
          <span
            key={t}
            style={{
              fontSize: 10,
              fontFamily: 'monospace',
              color: accent,
              background: `${accent}1a`,
              border: `1px solid ${accent}40`,
              borderRadius: 3,
              padding: '1px 5px',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {[
        'Nexaro Platform · Master',
        'CRM · HR · Rent OS · Teams',
        'AI Automations · Bots',
      ].map((layer) => (
        <div
          key={layer}
          style={{
            fontSize: 10,
            color: 'rgba(255,255,255,0.5)',
            background: 'rgba(123,92,246,0.1)',
            border: '1px solid rgba(123,92,246,0.25)',
            borderRadius: 3,
            padding: '3px 6px',
          }}
        >
          {layer}
        </div>
      ))}
    </div>
  );
}

// forwardRef so HeroSection can attach position refs to each card's outer wrapper
const OrbitNode = forwardRef<HTMLDivElement, { spec: NodeSpec }>(function OrbitNode(
  { spec },
  ref
) {
  const {
    accent, revealDelay, floatDelay, dotDelay, positionStyle,
    body, tag, title, footer, link,
    cardBackground, cardBorderSide, hoverGlow, hoverRotateY = -4,
    cardWidth = 200, cardPadding = '14px 16px', titleFontSize = 15,
  } = spec;

  return (
    <div ref={ref} style={positionStyle}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: revealDelay, ease: 'easeOut' }}
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <motion.div
              style={{
                width: cardWidth,
                background: cardBackground,
                borderLeft: `1px solid ${cardBorderSide}`,
                borderRight: `1px solid ${cardBorderSide}`,
                borderBottom: `1px solid ${cardBorderSide}`,
                borderTop: `3px solid ${accent}`,
                borderRadius: 10,
                padding: cardPadding,
                cursor: 'pointer',
                position: 'relative',
                transformPerspective: 700,
                backdropFilter: 'blur(12px)',
              }}
              whileHover={{
                rotateX: 4,
                rotateY: hoverRotateY,
                scale: 1.04,
                boxShadow: `0 0 24px ${hoverGlow}`,
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  backgroundColor: accent,
                }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: dotDelay }}
              />

              <span
                style={{
                  fontSize: 9,
                  fontFamily: 'monospace',
                  color: accent,
                  background: `${accent}26`,
                  border: `1px solid ${accent}40`,
                  borderRadius: 3,
                  padding: '1px 5px',
                  display: 'inline-block',
                  marginBottom: 6,
                }}
              >
                {tag}
              </span>

              <p style={{ fontSize: titleFontSize, fontWeight: 700, color: '#fff', margin: 0, marginBottom: 8 }}>
                {title}
              </p>

              <NodeBodyContent body={body} accent={accent} />

              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', margin: 0, marginTop: 8 }}>
                {footer}
              </p>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
});

export function HeroSection() {
  const photoRef = useRef<HTMLDivElement>(null);
  const pyramidsRef = useRef<HTMLDivElement>(null);
  const viciousRef = useRef<HTMLDivElement>(null);
  const nexaroRef = useRef<HTMLDivElement>(null);
  const wildRiftRef = useRef<HTMLDivElement>(null);

  const [lines, setLines] = useState<LineData[]>([]);

  useEffect(() => {
    const COLORS = ['#f59e0b', '#eab308', '#7b5cf6', '#06b6d4'];

    function calculate() {
      if (!photoRef.current) return;
      const container = photoRef.current.getBoundingClientRect();
      const photoCx = container.width / 2;
      const photoCy = container.height / 2;

      const refs = [pyramidsRef, viciousRef, nexaroRef, wildRiftRef];

      // Edge point selector for each card: (cardRect, relX, relY) → {ex, ey}
      const edgeOf = [
        // Pyramids (top-left): bottom-right corner
        (r: DOMRect, rx: number, ry: number) => ({ ex: rx + r.width, ey: ry + r.height }),
        // Vicious (top-right): bottom-left corner
        (r: DOMRect, rx: number, ry: number) => ({ ex: rx, ey: ry + r.height }),
        // Nexaro (right side): left edge center
        (r: DOMRect, rx: number, ry: number) => ({ ex: rx, ey: ry + r.height / 2 }),
        // Wild Rift (bottom-left): top-right corner
        (r: DOMRect, rx: number, ry: number) => ({ ex: rx + r.width, ey: ry }),
      ];

      const next: LineData[] = [];
      refs.forEach((ref, i) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const rx = rect.left - container.left;
        const ry = rect.top - container.top;
        const { ex, ey } = edgeOf[i](rect, rx, ry);
        next.push({ x1: ex, y1: ey, x2: photoCx, y2: photoCy, color: COLORS[i] });
      });
      setLines(next);
    }

    calculate();
    window.addEventListener('resize', calculate);
    return () => window.removeEventListener('resize', calculate);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(79,117,255,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10 pt-28 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">

          {/* Left column */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            <motion.div {...fadeUp(0)}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  color: '#34d399',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to new opportunities
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="gradient-text-brand">Systems builder</span>
              <br />
              <span style={{ color: 'rgba(255,255,255,0.92)' }}>who ships.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg md:text-xl leading-relaxed mb-3 max-w-2xl"
              style={{ color: 'rgba(255,255,255,0.62)' }}
            >
              I&apos;m{' '}
              <strong style={{ color: 'rgba(255,255,255,0.88)', fontWeight: 600 }}>
                Abdelrahman Mohamed Ahmed
              </strong>{' '}
              operations architect and product systems lead with 3+ years building
              workflow platforms, esports ecosystems, and AI-assisted tools across MENA &amp; EMEA.
            </motion.p>

            <motion.p
              {...fadeUp(0.25)}
              className="text-sm mb-10"
              style={{ color: 'rgba(255,255,255,0.38)' }}
            >
              Seeking{' '}
              <span style={{ color: '#7b9eff' }}>Product Operations</span>
              {' · '}
              <span style={{ color: '#7b9eff' }}>Esports Operations</span>
              {' · '}
              <span style={{ color: '#7b9eff' }}>Program Manager</span>
              {' '}roles
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link href="/#products" className="btn-primary">
                See my work <ArrowRight size={17} />
              </Link>
              <Link href="/#contact" className="btn-secondary">
                <Mail size={16} /> Get in touch
              </Link>
              <a
                href="https://linkedin.com/in/devabdelrhaman"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={16} /> Resume
              </a>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="hidden lg:block" style={{ position: 'relative' }}>

            {/* Orbit rings behind photo */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  width: '110%',
                  height: '110%',
                  borderRadius: '50%',
                  border: '1px dashed rgba(79,117,255,0.12)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                style={{
                  position: 'absolute',
                  width: '140%',
                  height: '140%',
                  borderRadius: '50%',
                  border: '1px dashed rgba(123,92,246,0.07)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Photo */}
            <div
              ref={photoRef}
              style={{
                position: 'relative',
                width: '100%',
                height: 620,
                maxHeight: 620,
                borderRadius: 16,
                overflow: 'hidden',
                zIndex: 1,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-photo.png"
                alt="Abdelrahman Mohamed Ahmed"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              {/* Bottom fade */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, #0d0d20 0%, #0d0d20 5%, transparent 45%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Left fade */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, #0d0d20 0%, transparent 35%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Right fade */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to left, #0d0d20 0%, transparent 35%)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Dynamic flow lines — SVG recomputed from real DOM positions */}
            {lines.length > 0 && (
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  overflow: 'visible',
                  pointerEvents: 'none',
                  zIndex: 20,
                }}
                aria-hidden="true"
              >
                {lines.map((line, i) => (
                  <motion.line
                    key={i}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke={line.color}
                    strokeWidth={1.5}
                    strokeDasharray="6 5"
                    opacity={0.55}
                    animate={{ strokeDashoffset: [0, -28] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: i * 0.4 }}
                  />
                ))}
              </svg>
            )}

            {/* Cat annotation */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
              style={{ position: 'absolute', top: '46%', left: -12, zIndex: 5 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'relative', display: 'inline-block' }}
              >
                <div
                  style={{
                    background: 'rgba(13,18,40,0.92)',
                    border: '1px solid rgba(249,115,22,0.5)',
                    borderRadius: 8,
                    padding: '10px 14px',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#fff', margin: 0 }}>
                    7wawshi
                  </p>
                  <p style={{ fontSize: 9, fontWeight: 700, color: '#f97316', letterSpacing: 1, margin: 0 }}>
                    ORANGE CAT
                  </p>
                  <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                    sleeps all day,
                  </p>
                  <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                    wakes me up for food
                  </p>
                </div>
                <svg
                  width="100"
                  height="60"
                  style={{ position: 'absolute', top: 0, left: '100%', overflow: 'visible', pointerEvents: 'none' }}
                  aria-hidden="true"
                >
                  <defs>
                    <marker id="cat-arr2" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#f97316" />
                    </marker>
                  </defs>
                  <line x1="0" y1="0" x2="60" y2="-50" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#cat-arr2)" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Orbit nodes with refs for dynamic line calculation */}
            <OrbitNode ref={pyramidsRef} spec={NODE_SPECS[0]} />
            <OrbitNode ref={viciousRef}  spec={NODE_SPECS[1]} />
            <OrbitNode ref={nexaroRef}   spec={NODE_SPECS[2]} />
            <OrbitNode ref={wildRiftRef} spec={NODE_SPECS[3]} />
          </div>
        </div>

        {/* Stats grid */}
        <motion.div
          {...fadeUp(0.4)}
          className="w-full max-w-2xl mx-auto"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2.5rem' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { value: '10,000+', label: 'Community Members' },
              { value: '5,000+', label: 'Tournament Participants' },
              { value: '32', label: 'Events Organized' },
              { value: '230+', label: 'Players Managed' },
              { value: '25+', label: 'Teams Coordinated' },
              { value: '6', label: 'Regional Qualifiers Delivered' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold gradient-text-brand mb-1">{s.value}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
