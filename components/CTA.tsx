import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#EA4747] via-[#EE4065] to-[#E7004C] py-24 text-white">
      <div className="mx-auto max-w-content px-6 text-center">
        <span className="inline-flex items-center rounded-full bg-white/20 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          Let&apos;s talk
        </span>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Have a data problem that spreadsheets can&apos;t solve anymore?
        </h2>
        <p className="mx-auto mt-5 max-w-lg font-body text-base leading-relaxed text-white/90">
          Tell us what you&apos;re working with — sources, volume, and what a good answer
          would look like. We&apos;ll tell you honestly whether it&apos;s a good fit.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-display text-sm font-bold text-brand shadow-xl transition-all duration-200 hover:scale-105 hover:bg-surface-subtle"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
