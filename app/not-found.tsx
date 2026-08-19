import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-4 py-16 text-center sm:px-6 sm:py-24 md:py-32">
        <span className="tick-label inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:px-3.5 sm:text-[11px]">
          404 Error
        </span>
        <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-content sm:mt-5 sm:text-4xl md:text-5xl">
          That page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-3 max-w-md font-body text-sm text-content-secondary sm:mt-4 sm:text-base">
          It may have moved, or the link is broken.
        </p>
        <div className="mt-6 flex justify-center sm:mt-8">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand px-7 py-3.5 font-display text-sm font-semibold text-white shadow-brand-glow transition-all hover:bg-brand-hover sm:w-auto"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
