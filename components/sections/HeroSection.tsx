'use client';

import Link from 'next/link';
import { ArrowRight, Mail, ArrowLeftRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, forwardRef, useCallback } from 'react';
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
  tagFontSize?: number;
  footerFontSize?: number;
  compact?: boolean;
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

// Mobile-specific overrides — compact cards, repositioned, no refs
const MOBILE_NODE_SPECS: NodeSpec[] = [
  {
    ...NODE_SPECS[0],
    positionStyle: { position: 'absolute', top: '5%', left: '-8px', zIndex: 3 },
    cardWidth: 105,
    titleFontSize: 10,
    tagFontSize: 7,
    footerFontSize: 8,
    compact: true,
  },
  {
    ...NODE_SPECS[1],
    positionStyle: { position: 'absolute', top: '5%', right: '-8px', zIndex: 3 },
    cardWidth: 105,
    titleFontSize: 10,
    tagFontSize: 7,
    footerFontSize: 8,
    compact: true,
  },
  {
    ...NODE_SPECS[2],
    positionStyle: { position: 'absolute', top: '50%', right: '-8px', zIndex: 3 },
    cardWidth: 105,
    titleFontSize: 10,
    tagFontSize: 7,
    footerFontSize: 8,
    compact: true,
  },
  {
    ...NODE_SPECS[3],
    positionStyle: { position: 'absolute', bottom: '5%', left: '-8px', zIndex: 3 },
    cardWidth: 105,
    titleFontSize: 10,
    tagFontSize: 7,
    footerFontSize: 8,
    compact: true,
  },
];

function NodeBodyContent({ body, accent, compact = false }: { body: NodeBodyType; accent: string; compact?: boolean }) {
  if (body === 'pyramids') {
    return (
      <div style={{ display: 'flex', gap: compact ? 3 : 4, flexWrap: 'wrap' }}>
        {['Discord', 'Esports', 'Riot Partnership'].map((t) => (
          <span
            key={t}
            style={{
              fontSize: compact ? '7px' : 10,
              fontFamily: 'monospace',
              color: accent,
              background: `${accent}1a`,
              border: `1px solid ${accent}40`,
              borderRadius: 3,
              padding: compact ? '1px 4px' : '1px 5px',
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
          <div key={col} style={{ flex: 1, minWidth: compact ? 0 : undefined, overflow: compact ? 'hidden' : undefined }}>
            <div style={{ fontSize: compact ? '6px' : 10, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{col}</div>
            <div
              style={{
                height: 4,
                borderRadius: 2,
                width: compact ? '100%' : undefined,
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
      <div style={{ display: 'flex', gap: compact ? 3 : 4, flexWrap: 'wrap', overflow: 'hidden', maxWidth: '100%' }}>
        {['Competitor', 'Analyst'].map((t) => (
          <span
            key={t}
            style={{
              fontSize: compact ? '7px' : 'inherit',
              fontFamily: 'monospace',
              color: accent,
              background: `${accent}1a`,
              border: `1px solid ${accent}40`,
              borderRadius: 3,
              padding: compact ? '1px 4px' : '1px 5px',
              whiteSpace: compact ? 'normal' : 'nowrap',
              maxWidth: '100%',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    );
  }

  // nexaro
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {['Nexaro Platform · Master', 'CRM · HR · Rent OS · Teams', 'AI Automations · Bots'].map((layer) => (
        <div
          key={layer}
          style={{
            fontSize: compact ? '7px' : 10,
            color: 'rgba(255,255,255,0.5)',
            background: 'rgba(123,92,246,0.1)',
            border: '1px solid rgba(123,92,246,0.25)',
            borderRadius: 3,
            padding: compact ? '2px 4px' : '3px 6px',
            overflow: compact ? 'hidden' : undefined,
            textOverflow: compact ? 'ellipsis' : undefined,
            whiteSpace: compact ? 'nowrap' : undefined,
          }}
        >
          {layer}
        </div>
      ))}
    </div>
  );
}

const OrbitNode = forwardRef<HTMLDivElement, { spec: NodeSpec }>(function OrbitNode({ spec }, ref) {
  const {
    accent, revealDelay, floatDelay, dotDelay, positionStyle,
    body, tag, title, footer, link,
    cardBackground, cardBorderSide, hoverGlow, hoverRotateY = -4,
    cardWidth = 200, cardPadding = '14px 16px',
    titleFontSize = 15, tagFontSize = 9, footerFontSize = 10,
    compact = false,
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
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
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
                overflow: 'hidden',
                minWidth: 0,
                wordBreak: 'break-word',
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
                  fontSize: tagFontSize,
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
              <NodeBodyContent body={body} accent={accent} compact={compact} />
              <p style={{ fontSize: footerFontSize, color: 'rgba(255,255,255,0.4)', margin: 0, marginTop: 8 }}>{footer}</p>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
});

function AnimatedHeadline({ sizeClass, mb = 'mb-6' }: { sizeClass: string; mb?: string }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <h1 className={`${sizeClass} font-bold tracking-tight leading-[1.05] ${mb}`}>
        <span className="block">
          {(['Systems', 'builder'] as const).map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
              className={`gradient-text-brand inline-block${i === 0 ? ' mr-[0.3em]' : ''}`}
            >
              {word}
            </motion.span>
          ))}
        </span>
        <span className="block">
          {(['who', 'ships.'] as const).map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i + 2) * 0.15, ease: 'easeOut' }}
              style={{ color: 'rgba(255,255,255,0.92)' }}
              className={`inline-block${i === 0 ? ' mr-[0.3em]' : ''}`}
            >
              {word}
            </motion.span>
          ))}
        </span>
      </h1>
      <motion.div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '60%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 10,
        }}
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{ delay: 1.5, duration: 0.8, ease: 'easeInOut' }}
      />
    </div>
  );
}

export function HeroSection() {
  // Desktop flow line refs
  const photoRef    = useRef<HTMLDivElement>(null);
  const pyramidsRef = useRef<HTMLDivElement>(null);
  const viciousRef  = useRef<HTMLDivElement>(null);
  const nexaroRef   = useRef<HTMLDivElement>(null);
  const wildRiftRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<LineData[]>([]);

  // Mobile flip state
  const [showPhoto, setShowPhoto] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setShowPhoto((p) => !p), 5000);
  }, []);

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startInterval]);

  // Desktop flow lines
  useEffect(() => {
    const COLORS = ['#f59e0b', '#eab308', '#7b5cf6', '#06b6d4'];

    function calculate() {
      if (!photoRef.current) return;
      const container = photoRef.current.getBoundingClientRect();
      const photoCx = container.width / 2;
      const photoCy = container.height / 2;

      const refs = [pyramidsRef, viciousRef, nexaroRef, wildRiftRef];
      const edgeOf = [
        (r: DOMRect, rx: number, ry: number) => ({ ex: rx + r.width, ey: ry + r.height }),
        (r: DOMRect, rx: number, ry: number) => ({ ex: rx, ey: ry + r.height }),
        (r: DOMRect, rx: number, ry: number) => ({ ex: rx, ey: ry + r.height / 2 }),
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
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(79,117,255,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10 pt-4 lg:pt-16 pb-20">

        {/* ── MOBILE: flip card ── */}
        <div className="lg:hidden mb-16" style={{ paddingTop: '68px' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 16 }}>
            <AnimatePresence mode="wait">
              {!showPhoto && (
                <motion.div
                  key="text"
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  drag="x"
                  dragConstraints={{ left: -100, right: 100 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (Math.abs(info.offset.x) > 60) {
                      setShowPhoto((p) => !p);
                      startInterval();
                    }
                  }}
                  className="flex flex-col items-center text-center px-4 py-8"
                >
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.25)',
                      color: '#34d399',
                      marginBottom: '20px',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open to new opportunities
                  </span>

                  <AnimatedHeadline sizeClass="text-4xl sm:text-5xl" mb="mb-4" />

                  <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.62)', marginBottom: '12px' }}>
                    I&apos;m{' '}
                    <strong style={{ color: 'rgba(255,255,255,0.88)', fontWeight: 600 }}>
                      Abdelrahman Mohamed
                    </strong>{' '}
                    , ops architect &amp; product systems lead, 3+ years across MENA &amp; EMEA.
                  </p>

                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.38)', marginBottom: '24px' }}>
                    Seeking{' '}
                    <span style={{ color: '#7b9eff' }}>Product Operations</span>
                    {' · '}
                    <span style={{ color: '#7b9eff' }}>Esports Operations</span>
                    {' · '}
                    <span style={{ color: '#7b9eff' }}>Program Manager</span>
                    {' '}roles
                  </p>

                  <div className="flex flex-col w-full" style={{ gap: '12px' }}>
                    <Link href="/#products" className="btn-primary w-full justify-center">
                      See my work <ArrowRight size={15} />
                    </Link>
                    <Link href="/#contact" className="btn-secondary w-full justify-center">
                      <Mail size={14} /> Get in touch
                    </Link>
                  </div>
                </motion.div>
              )}

              {showPhoto && (
                <motion.div
                  key="photo"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  drag="x"
                  dragConstraints={{ left: -100, right: 100 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (Math.abs(info.offset.x) > 60) {
                      setShowPhoto((p) => !p);
                      startInterval();
                    }
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '520px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      background: '#0d0d20',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/hero-photo.png"
                      alt="Abdelrahman Mohamed Ahmed"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center center',
                      }}
                    />
                    {/* Gradient overlays */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0d0d20 0%, transparent 40%)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0d0d20 0%, transparent 25%)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, #0d0d20 0%, transparent 25%)', pointerEvents: 'none' }} />

                    {/* Mobile nodes — compact, no refs */}
                    {MOBILE_NODE_SPECS.map((spec, i) => (
                      <OrbitNode key={i} spec={spec} />
                    ))}

                    {/* 7wawshi annotation */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
                      style={{ position: 'absolute', bottom: '200px', left: '-8px', zIndex: 5 }}
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
                            padding: '8px 12px',
                            backdropFilter: 'blur(8px)',
                          }}
                        >
                          <p style={{ fontSize: 11, fontWeight: 700, color: '#fff', margin: 0 }}>7wawshi</p>
                          <p style={{ fontSize: 8, fontWeight: 700, color: '#f97316', letterSpacing: 1, margin: 0 }}>ORANGE CAT</p>
                          <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)', margin: 0 }}>sleeps all day,</p>
                          <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)', margin: 0 }}>wakes me up for food</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile controls */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="flex items-center gap-2">
              {([false, true] as const).map((isPhotoState) => (
                <div
                  key={String(isPhotoState)}
                  onClick={() => { setShowPhoto(isPhotoState); startInterval(); }}
                  style={{
                    width: 20,
                    height: 6,
                    borderRadius: 3,
                    background: showPhoto === isPhotoState ? '#ffffff' : 'rgba(255,255,255,0.25)',
                    transition: 'background 0.3s',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => { setShowPhoto((p) => !p); startInterval(); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.4)',
                fontSize: 11,
                padding: 0,
              }}
            >
              <ArrowLeftRight size={12} />
              swipe to switch
            </button>
          </div>
        </div>

        {/* ── DESKTOP: split grid ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start mb-16">

          {/* Left column */}
          <div className="flex flex-col items-start text-left">

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

            <AnimatedHeadline sizeClass="text-5xl sm:text-6xl md:text-7xl lg:text-8xl" />

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
              className="flex flex-wrap items-center justify-start gap-4"
            >
              <Link href="/#products" className="btn-primary">
                See my work <ArrowRight size={17} />
              </Link>
              <Link href="/#contact" className="btn-secondary">
                <Mail size={16} /> Get in touch
              </Link>
            </motion.div>
          </div>

          {/* Right column */}
          <div style={{ position: 'relative' }}>

            {/* Orbit rings */}
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
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0d0d20 0%, #0d0d20 5%, transparent 45%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0d0d20 0%, transparent 35%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, #0d0d20 0%, transparent 35%)', pointerEvents: 'none' }} />
            </div>

            {/* Dynamic flow lines */}
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

            {/* 7wawshi annotation */}
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
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#fff', margin: 0 }}>7wawshi</p>
                  <p style={{ fontSize: 9, fontWeight: 700, color: '#f97316', letterSpacing: 1, margin: 0 }}>ORANGE CAT</p>
                  <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', margin: 0 }}>sleeps all day,</p>
                  <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', margin: 0 }}>wakes me up for food</p>
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

            {/* Orbit nodes */}
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
              { value: '1.8M+',   label: 'Social Media Reach' },
              { value: '5,000+',  label: 'Tournament Participants' },
              { value: '32',      label: 'Events Organized' },
              { value: '230+',    label: 'Players Managed' },
              { value: '25+',     label: 'Teams Coordinated' },
              { value: '6',       label: 'Regional Qualifiers' },
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
