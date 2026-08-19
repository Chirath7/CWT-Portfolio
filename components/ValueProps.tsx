const props = [
  {
    stat: '6',
    unit: 'sectors served',
    title: 'Domain-tested, not generic',
    body: 'Banking, insurance, government customs, and FMCG finance — every pipeline we ship is shaped by the compliance and audit rules of the industry it runs in.',
  },
  {
    stat: '2.5TB+',
    unit: 'warehoused per engagement',
    title: 'Built for real production volume',
    body: 'Our platforms hold years of transaction history and absorb annual growth in the terabytes, with partitioning and indexing planned in from day one.',
  },
  {
    stat: '0',
    unit: 'unaudited pipelines',
    title: 'Governance is not an afterthought',
    body: 'Row-level security, field-level RBAC, and full audit logging are standard, not optional add-ons — because the systems we build sit next to regulators.',
  },
  {
    stat: '40%',
    unit: 'cost reduction, proven',
    title: 'We optimize what we build',
    body: 'We right-size compute and storage after go-live, not just at launch — one engagement cut warehouse cost by 40% with no loss of performance.',
  },
];

export default function ValueProps() {
  return (
    <section className="border-b border-surface-border bg-surface py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-2xl">
          <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
            Why teams work with us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-content sm:text-4xl">
            Engineering discipline, in domains where mistakes are expensive.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {props.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col justify-between rounded-2xl border border-surface-border bg-surface-muted p-7 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-lg"
            >
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-brand transition-transform duration-300 group-hover:scale-105">
                    {p.stat}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-content-muted">
                    {p.unit}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-content group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-content-secondary">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
