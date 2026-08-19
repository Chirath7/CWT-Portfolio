const capabilities = [
  {
    tag: 'Data Engineering',
    title: 'ETL & pipeline design',
    body: 'PySpark, SSIS, and metadata-driven ETL frameworks that ingest from core banking, ERP, and legacy systems and land clean, validated data on a schedule you can set your reporting by.',
  },
  {
    tag: 'Cloud Warehousing',
    title: 'Lakehouse & warehouse architecture',
    body: 'Azure Synapse, ADLS Gen2, and Databricks medallion architectures (bronze / silver / gold) sized and tuned for real production load — not a proof of concept.',
  },
  {
    tag: 'Analytics',
    title: 'BI dashboards & reporting',
    body: 'Power BI platforms with role-based access, multi-level drill-down, and governance built in from the first report, not bolted on after an audit finding.',
  },
  {
    tag: 'Systems Integration',
    title: 'Real-time system integration',
    body: 'Direct integration with regulatory and operational backends — like Sri Lanka Customs\u2019 AsyCuDa World — with push notifications and identity verification layered on top.',
  },
  {
    tag: 'Customer Data',
    title: 'Identity resolution & activation',
    body: 'Unifying app, web, CRM, and billing data into a single customer profile, with real-time segmentation pushed straight to your marketing and sales tools.',
  },
  {
    tag: 'Governance',
    title: 'Security, RBAC & compliance',
    body: 'Row-level and field-level access control, encryption, and full audit logging designed for institutions that answer to regulators.',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20 border-b border-surface-border bg-surface py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-xl">
          <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
            What we do
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-content sm:text-4xl">
            Six capabilities, one delivery team.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="group rounded-xl border border-surface-border bg-surface-muted p-6 shadow-card-soft transition-all duration-300 hover:border-brand/30 hover:bg-white hover:shadow-md"
            >
              <div className="border-l-2 border-brand pl-4">
                <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
                  {c.tag}
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-content group-hover:text-brand transition-colors">
                  {c.title}
                </h3>
              </div>
              <p className="mt-3.5 pl-4 font-body text-sm leading-relaxed text-content-secondary">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
