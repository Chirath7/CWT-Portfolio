'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/#work', label: 'Work' },
    { href: '/#approach', label: 'Approach' },
    { href: '/#capabilities', label: 'Capabilities' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/90 px-3 py-2.5 backdrop-blur-md transition-all sm:px-6 sm:py-3">
      <div className="mx-auto flex max-w-content items-center justify-between rounded-full border border-surface-border/80 bg-surface/95 px-4 py-2 shadow-nav-pill sm:px-5 sm:py-2.5">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light font-display text-xs font-bold text-white shadow-brand-glow transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9">
            CW
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-content transition-colors group-hover:text-brand sm:text-[15px]">
            Creative Web Technology
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display text-sm font-medium text-content-secondary transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2 font-display text-sm font-semibold text-white shadow-brand-glow transition-all duration-200 hover:bg-brand-hover hover:shadow-lg"
          >
            Start a project
          </Link>
        </nav>

        {/* Mobile Actions: CTA + Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-brand px-3.5 py-1.5 font-display text-xs font-semibold text-white shadow-brand-glow transition-all hover:bg-brand-hover"
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface text-content transition-colors hover:bg-surface-muted focus:outline-none"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative h-4 w-4">
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-4 -translate-y-1/2 bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-4 -translate-y-1/2 bg-current transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-4 -translate-y-1/2 bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-dark/60 backdrop-blur-sm transition-opacity md:hidden">
          <div className="mx-3 mt-2 rounded-2xl border border-surface-border bg-surface p-6 shadow-xl sm:mx-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-surface-border pb-3 font-display text-base font-semibold text-content transition-colors hover:text-brand"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-brand font-mono">→</span>
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex w-full items-center justify-center rounded-xl bg-brand py-3 font-display text-sm font-semibold text-white shadow-brand-glow transition-all hover:bg-brand-hover"
              >
                Start a project
              </Link>
            </nav>

            <div className="mt-6 border-t border-surface-border pt-4">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-content-muted">
                Direct Contact
              </p>
              <a
                href="mailto:hello@creativewebtechnology.com"
                className="mt-1.5 block break-all font-body text-xs text-content-secondary transition-colors hover:text-brand"
              >
                hello@creativewebtechnology.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
