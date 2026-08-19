import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface/90 px-4 py-3 backdrop-blur-md transition-all sm:px-6">
      <div className="mx-auto flex max-w-content items-center justify-between rounded-full border border-surface-border/80 bg-surface/95 px-5 py-2.5 shadow-nav-pill">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light font-display text-xs font-bold text-white shadow-brand-glow transition-transform duration-300 group-hover:scale-105">
            CW
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-content transition-colors group-hover:text-brand">
            Creative Web Technology
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#work"
            className="font-display text-sm font-medium text-content-secondary transition-colors hover:text-brand"
          >
            Work
          </Link>
          <Link
            href="/#approach"
            className="font-display text-sm font-medium text-content-secondary transition-colors hover:text-brand"
          >
            Approach
          </Link>
          <Link
            href="/#capabilities"
            className="font-display text-sm font-medium text-content-secondary transition-colors hover:text-brand"
          >
            Capabilities
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2 font-display text-sm font-semibold text-white shadow-brand-glow transition-all duration-200 hover:bg-brand-hover hover:shadow-lg"
          >
            Start a project
          </Link>
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-brand px-4 py-1.5 font-display text-xs font-semibold text-white shadow-brand-glow transition-all hover:bg-brand-hover md:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
