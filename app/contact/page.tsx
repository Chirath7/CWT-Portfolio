import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact — Creative Web Technology',
  description: 'Start a data engineering or analytics project with Creative Web Technology.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-dark-border bg-dark text-white">
          <div className="mx-auto max-w-content px-6 py-20">
            <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
              Get in touch
            </span>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Tell us about the data problem you&apos;re solving.
            </h1>
            <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-content-light/70">
              Share your sources, the volume you&apos;re working with, and what a useful
              answer would look like at the end. We reply personally, not with a form letter.
            </p>
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="mx-auto max-w-content px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="rounded-2xl border border-surface-border bg-surface-muted p-8 shadow-card-soft">
                <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
                  Direct
                </span>
                <div className="mt-6 space-y-6">
                  <ContactLine
                    label="Email"
                    value="hello@creativewebtechnology.com"
                    href="mailto:hello@creativewebtechnology.com"
                  />
                  <ContactLine label="Location" value="Colombo, Sri Lanka" />
                </div>
              </div>

              <div className="rounded-2xl border border-surface-border bg-surface-muted p-8 shadow-card-soft">
                <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
                  Before you write
                </span>
                <ul className="mt-6 space-y-4">
                  {[
                    'What systems or files hold your data today, and roughly how much of it there is',
                    'Who needs to see the output, and how they see it today (spreadsheets, manual reports, nothing yet)',
                    'Any compliance, audit, or data-residency constraints we should know from the start',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 font-body text-sm leading-relaxed text-content-secondary"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
  }) {
  return (
    <div className="border-b border-surface-border pb-4 last:border-0 last:pb-0">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-content-muted">{label}</p>
      {href ? (
        <a href={href} className="mt-1 inline-block font-display text-lg font-bold text-content transition-colors hover:text-brand">
          {value}
        </a>
      ) : (
        <p className="mt-1 font-display text-lg font-bold text-content">{value}</p>
      )}
    </div>
  );
}
