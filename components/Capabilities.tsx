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
    <section id="capabilities" className="scroll-mt-20 border-b border-surface-border bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="tick-label font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:text-[11px]">
            What we do
          </span>
          <h2 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-content sm:mt-3 sm:text-3xl md:text-4xl">
            Six capabilities, one delivery team.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="group rounded-xl border border-surface-border bg-surface-muted p-5 shadow-card-soft transition-all duration-300 hover:border-brand/30 hover:bg-white hover:shadow-md sm:p-6"
            >
              <div className="border-l-2 border-brand pl-3.5 sm:pl-4">
                <span className="tick-label font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:text-[11px]">
                  {c.tag}
                </span>
                <h3 className="mt-1.5 font-display text-sm font-bold text-content group-hover:text-brand transition-colors sm:mt-2 sm:text-base">
                  {c.title}
                </h3>
              </div>
              <p className="mt-2.5 pl-3.5 font-body text-xs leading-relaxed text-content-secondary sm:mt-3.5 sm:pl-4 sm:text-sm">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
