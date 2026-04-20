import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#050510]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#4f75ff]/10 border border-[#4f75ff]/30 flex items-center justify-center text-[#4f75ff] text-xs font-bold">
                AM
              </div>
              <span className="text-white font-semibold text-sm">Abdelrahman Mohamed Ahmed</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Founder · Operations Architect · Product Systems Leader
              <br />
              Building systems that help teams scale faster.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Work', href: '#systems' },
                { label: 'About', href: '#about' },
                { label: 'Impact', href: '#impact' },
                { label: 'Case Studies', href: '#case-studies' },
                { label: 'Timeline', href: '#timeline' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              <a href="mailto:Abdo.fog@gmail.com" className="text-white/50 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Abdo.fog@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/devabdelrhaman/" target="_blank" rel="noopener noreferrer" className="text-white/50 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a href="https://linktr.ee/abdofog" target="_blank" rel="noopener noreferrer" className="text-white/50 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
                Linktree
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {year} Abdelrahman Mohamed Ahmed · Cairo, Egypt
          </p>
          <p className="text-white/20 text-xs">Systems builder who ships.</p>
        </div>
      </div>
    </footer>
  );
}
