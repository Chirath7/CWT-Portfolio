import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-dark-border bg-dark text-white">
      {/* Background ambient gradient glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #E7004C 0%, #3D96F4 60%, transparent 80%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative mx-auto max-w-content px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="fade-up flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-brand">
            Data Engineering &amp; Analytics
          </span>
          <span className="flow-rule w-16 text-brand" />
        </div>

        <h1 className="fade-up mt-6 max-w-3xl font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
          We build the data infrastructure institutions
          <span className="text-brand"> run their decisions on.</span>
        </h1>

        <p
          className="fade-up mt-6 max-w-xl font-body text-lg leading-relaxed text-content-light/70"
          style={{ animationDelay: '0.1s' }}
        >
          Creative Web Technology designs, builds, and operates production pipelines and
          BI platforms for banks, insurers, government directorates, and manufacturers —
          turning scattered, messy source data into governed, same-day insight.
        </p>

        <div
          className="fade-up mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '0.18s' }}
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 font-display text-sm font-semibold text-white shadow-brand-glow transition-all duration-200 hover:bg-brand-hover hover:shadow-lg"
          >
            See our work
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-display text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10"
          >
            Talk to us
          </Link>
        </div>

        <div className="fade-up mt-20" style={{ animationDelay: '0.26s' }}>
          <FlowDiagram />
        </div>
      </div>
    </section>
  );
}

function FlowDiagram() {
  const stages = [
    { label: 'SOURCES', detail: 'ERP · Core banking · CSV · Legacy DBs' },
    { label: 'PIPELINE', detail: 'Ingest → cleanse → transform → validate' },
    { label: 'WAREHOUSE', detail: 'Governed, denormalized, audit-ready' },
    { label: 'INSIGHT', detail: 'Dashboards, drill-down, activation' },
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4">
        {stages.map((stage, i) => (
          <div key={stage.label} className="relative">
            <div className="rounded-xl border border-dark-border bg-dark-2 p-5 transition-all duration-300 hover:border-brand/50 hover:bg-dark-3">
              <span className="tick-label font-mono text-[10px] font-semibold text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-2 font-display text-sm font-semibold tracking-wide text-white">
                {stage.label}
              </p>
              <p className="mt-1.5 font-body text-xs leading-snug text-content-light/50">
                {stage.detail}
              </p>
            </div>

            {i < stages.length - 1 && (
              <div className="pointer-events-none absolute right-[-18px] top-1/2 hidden h-px w-[24px] -translate-y-1/2 overflow-hidden bg-dark-border sm:block">
                <span
                  className="flow-signal absolute inset-y-0 left-0 w-2 rounded-full bg-brand shadow-[0_0_10px_rgba(231,0,76,0.9)]"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
