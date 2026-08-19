import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark text-white">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light font-display text-xs font-bold text-white shadow-brand-glow sm:h-9 sm:w-9">
                CW
              </span>
              <span className="font-display text-sm font-semibold tracking-tight text-white sm:text-[15px]">
                Creative Web Technology
              </span>
            </div>
            <p className="mt-3.5 max-w-sm font-body text-xs leading-relaxed text-content-light/60 sm:mt-4 sm:text-sm">
              We design and operate the data pipelines, warehouses, and BI platforms that
              banks, insurers, government directorates, and enterprises run their decisions on.
            </p>
          </div>

          <div>
            <p className="tick-label font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:text-[11px]">
              Sitemap
            </p>
            <ul className="mt-3 space-y-2 font-display text-xs text-content-light/65 sm:mt-4 sm:space-y-2.5 sm:text-sm">
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
            <p className="tick-label font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:text-[11px]">
              Reach us
            </p>
            <ul className="mt-3 space-y-2 font-display text-xs text-content-light/65 sm:mt-4 sm:space-y-2.5 sm:text-sm">
              <li>
                <a
                  href="mailto:hello@creativewebtechnology.com"
                  className="break-all transition-colors hover:text-brand sm:break-normal"
                >
                  hello@creativewebtechnology.com
                </a>
              </li>
              <li className="text-content-light/50">Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-dark-border pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-content-light/40 sm:text-xs">
            © {new Date().getFullYear()} Creative Web Technology. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-content-light/40 sm:text-xs">
            Built for institutions that can&apos;t afford to guess.
          </p>
        </div>
      </div>
    </footer>
  );
}
