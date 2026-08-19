import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#EA4747] via-[#EE4065] to-[#E7004C] py-16 text-white sm:py-20 md:py-24">
      <div className="mx-auto max-w-content px-4 text-center sm:px-6">
        <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm sm:px-3.5 sm:text-[11px]">
          Let&apos;s talk
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-2xl font-bold tracking-tight text-white sm:mt-5 sm:text-4xl md:text-5xl">
          Have a data problem that spreadsheets can&apos;t solve anymore?
        </h2>
        <p className="mx-auto mt-3.5 max-w-lg font-body text-sm leading-relaxed text-white/90 sm:mt-5 sm:text-base">
          Tell us what you&apos;re working with — sources, volume, and what a good answer
          would look like. We&apos;ll tell you honestly whether it&apos;s a good fit.
        </p>
        <div className="mt-7 flex justify-center sm:mt-8">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 font-display text-sm font-bold text-brand shadow-xl transition-all duration-200 hover:scale-105 hover:bg-surface-subtle active:scale-98 sm:w-auto sm:px-8 sm:py-4"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
