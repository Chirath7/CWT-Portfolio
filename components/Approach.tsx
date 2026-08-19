const steps = [
  {
    tag: 'STAGE 01',
    title: 'Map the sources',
    body: 'We start inside your systems — core banking, ERP, legacy databases, CSV drops — and document exactly where the data is dirty, duplicated, or inconsistent before writing a line of pipeline code.',
  },
  {
    tag: 'STAGE 02',
    title: 'Engineer the pipeline',
    body: 'Metadata-driven ETL, layered warehousing (raw → staged → modeled), and validation rules built for your compliance regime — not a generic template.',
  },
  {
    tag: 'STAGE 03',
    title: 'Ship governed insight',
    body: 'Role-based dashboards with drill-down to the transaction, row-level security, and full audit trails — so the people using it can trust what they see.',
  },
  {
    tag: 'STAGE 04',
    title: 'Operate & optimize',
    body: 'We stay on after go-live — right-sizing compute, tuning queries, and adding report areas as your reporting needs grow.',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 border-b border-dark-border bg-dark py-20 text-white">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-xl">
          <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
            How we work
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The same four stages, every engagement.
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-content-light/65">
            It&apos;s the layered architecture pattern you&apos;ll see in every case study on
            this site — because it&apos;s also how we build them.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4 md:gap-0">
          {steps.map((step, i) => (
            <div
              key={step.tag}
              className="relative rounded-xl border border-dark-border bg-dark-2/50 p-6 backdrop-blur-sm md:rounded-none md:border-y-0 md:border-b-0 md:border-r-0 md:border-l md:bg-transparent md:px-6 md:py-0"
            >
              <span className="tick-label font-mono text-[11px] font-semibold text-brand">
                {step.tag}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 font-body text-sm leading-relaxed text-content-light/60">
                {step.body}
              </p>
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-1.5 top-2 hidden h-3 w-3 rounded-full bg-brand shadow-[0_0_8px_rgba(231,0,76,0.8)] md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
