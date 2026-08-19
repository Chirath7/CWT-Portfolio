import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark text-white">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light font-display text-xs font-bold text-white shadow-brand-glow">
                CW
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight text-white">
                Creative Web Technology
              </span>
            </div>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-content-light/60">
              We design and operate the data pipelines, warehouses, and BI platforms that
              banks, insurers, government directorates, and enterprises run their decisions on.
            </p>
          </div>

          <div>
            <p className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
              Sitemap
            </p>
            <ul className="mt-4 space-y-2.5 font-display text-sm text-content-light/65">
              <li>
                <Link href="/#work" className="transition-colors hover:text-brand">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="transition-colors hover:text-brand">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="/#capabilities" className="transition-colors hover:text-brand">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-brand">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
              Reach us
            </p>
            <ul className="mt-4 space-y-2.5 font-display text-sm text-content-light/65">
              <li>
                <a
                  href="mailto:hello@creativewebtechnology.com"
                  className="transition-colors hover:text-brand"
                >
                  hello@creativewebtechnology.com
                </a>
              </li>
              <li className="text-content-light/50">Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-dark-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-content-light/40">
            © {new Date().getFullYear()} Creative Web Technology. All rights reserved.
          </p>
          <p className="font-mono text-xs text-content-light/40">
            Built for institutions that can&apos;t afford to guess.
          </p>
        </div>
      </div>
    </footer>
  );
}
