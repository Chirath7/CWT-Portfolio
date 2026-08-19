import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-6 py-32 text-center">
        <span className="tick-label inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
          404 Error
        </span>
        <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-content sm:text-5xl">
          That page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md font-body text-base text-content-secondary">
          It may have moved, or the link is broken.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 font-display text-sm font-semibold text-white shadow-brand-glow transition-all hover:bg-brand-hover"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
