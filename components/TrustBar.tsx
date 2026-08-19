const clients = [
  'Allianz',
  'Sri Lanka Customs',
  'Dilmah',
  'Amana Bank',
];

export default function TrustBar() {
  return (
    <section className="border-b border-surface-border bg-surface-muted">
      <div className="mx-auto max-w-content px-4 py-8 sm:px-6 sm:py-10">
        <p className="tick-label text-center font-mono text-[10px] uppercase tracking-wider text-content-muted sm:text-left sm:text-[11px]">
          Trusted with production data by
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:mt-5 sm:justify-start sm:gap-x-12 sm:gap-y-5">
          {clients.map((name) => (
            <span
              key={name}
              className="rounded-lg bg-surface px-3 py-1.5 font-display text-sm font-semibold tracking-tight text-content/85 shadow-sm transition-colors hover:text-brand sm:bg-transparent sm:p-0 sm:text-lg sm:text-content/75 sm:shadow-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
