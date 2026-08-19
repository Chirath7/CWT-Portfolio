const stats = [
  { value: '19+', label: 'source systems integrated across engagements' },
  { value: '17,000+', label: 'registered users on a single platform' },
  { value: '2.5 TB+', label: 'historical data warehoused in one system' },
  { value: '40%', label: 'compute cost reduction achieved' },
];

export default function StatsBand() {
  return (
    <section className="border-b border-dark-border bg-dark text-white">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <p className="font-display text-3xl font-bold tracking-tight text-brand sm:text-4xl lg:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 max-w-[18ch] font-body text-xs font-medium leading-relaxed text-content-light/60 sm:mt-2.5">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
