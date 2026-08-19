const clients = [
  'Allianz',
  'Sri Lanka Customs',
  'Dilmah',
  'Amana Bank',
];

export default function TrustBar() {
  return (
    <section className="border-b border-surface-border bg-surface-muted">
      <div className="mx-auto max-w-content px-6 py-10">
        <p className="tick-label text-center font-mono text-[11px] uppercase tracking-wider text-content-muted sm:text-left">
          Trusted with production data by
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 sm:justify-start">
          {clients.map((name) => (
            <span
              key={name}
              className="font-display text-lg font-semibold tracking-tight text-content/75 transition-colors hover:text-brand"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
