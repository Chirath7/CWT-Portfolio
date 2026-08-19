import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-dark-border bg-dark text-white">
      {/* Background ambient gradient glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[350px] w-[90vw] max-w-[650px] -translate-x-1/2 rounded-full opacity-20 blur-3xl sm:h-[450px]"
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

      <div className="relative mx-auto max-w-content px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16 md:pb-28 md:pt-24">
        <div className="fade-up flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-brand sm:px-3.5 sm:text-[11px]">
            Data Engineering &amp; Analytics
          </span>
          <span className="flow-rule w-10 text-brand sm:w-16" />
        </div>

        <h1 className="fade-up mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:mt-6 sm:text-5xl md:text-6xl">
          We build the data infrastructure institutions
          <span className="text-brand"> run their decisions on.</span>
        </h1>

        <p
          className="fade-up mt-4 max-w-xl font-body text-base leading-relaxed text-content-light/70 sm:mt-6 sm:text-lg"
          style={{ animationDelay: '0.1s' }}
        >
          Creative Web Technology designs, builds, and operates production pipelines and
          BI platforms for banks, insurers, government directorates, and manufacturers —
          turning scattered, messy source data into governed, same-day insight.
        </p>

        <div
          className="fade-up mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
          style={{ animationDelay: '0.18s' }}
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-center font-display text-sm font-semibold text-white shadow-brand-glow transition-all duration-200 hover:bg-brand-hover hover:shadow-lg active:scale-98"
          >
            See our work
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-center font-display text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10 active:scale-98"
          >
            Talk to us
          </Link>
        </div>

        <div className="fade-up mt-14 sm:mt-20" style={{ animationDelay: '0.26s' }}>
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
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {stages.map((stage, i) => (
          <div key={stage.label} className="relative flex flex-col">
            <div className="flex h-full w-full flex-col justify-between rounded-xl border border-dark-border bg-dark-2 p-4 sm:p-5 transition-all duration-300 hover:border-brand/50 hover:bg-dark-3 sm:min-h-[145px]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="tick-label font-mono text-[10px] font-semibold text-brand sm:text-[11px]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-content-light/40 lg:hidden">
                    Stage {i + 1}/4
                  </span>
                </div>
                <p className="mt-2 font-display text-sm font-bold tracking-wide text-white sm:text-sm">
                  {stage.label}
                </p>
                <p className="mt-1.5 font-body text-xs leading-relaxed text-content-light/65">
                  {stage.detail}
                </p>
              </div>
            </div>

            {/* Desktop Horizontal Signal */}
            {i < stages.length - 1 && (
              <div className="pointer-events-none absolute right-[-18px] top-1/2 hidden h-px w-[24px] -translate-y-1/2 overflow-hidden bg-dark-border lg:block">
                <span
                  className="flow-signal absolute inset-y-0 left-0 w-2 rounded-full bg-brand shadow-[0_0_10px_rgba(231,0,76,0.9)]"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
              </div>
            )}

            {/* Mobile Vertical Flow Arrow */}
            {i < stages.length - 1 && (
              <div className="flex justify-center py-0.5 sm:hidden">
                <span className="font-mono text-[10px] text-brand/60">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
