'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@creativewebtechnology.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface">
        {/* Contact Hero Header */}
        <section className="border-b border-dark-border bg-dark text-white">
          <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16 md:py-20">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="tick-label inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:text-[11px]">
                Get in touch
              </span>
              <span className="flow-rule hidden w-8 text-brand sm:inline-block sm:w-12" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-content-light/50 sm:text-xs">
                Direct engagement
              </span>
            </div>

            <h1 className="mt-4 max-w-2xl font-display text-2xl font-bold leading-[1.15] tracking-tight text-white sm:mt-5 sm:text-4xl md:text-5xl">
              Tell us about the data problem you&apos;re solving.
            </h1>

            <p className="mt-3 max-w-xl font-body text-xs leading-relaxed text-content-light/70 sm:mt-4 sm:text-base md:text-lg">
              Share your data sources, volume, and what a useful answer looks like.
              We reply personally within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Form & Direct Channels Grid */}
        <section className="py-8 sm:py-14 md:py-16">
          <div className="mx-auto max-w-content px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10">
              
              {/* Left Column: Direct Info Card (5 cols on lg) */}
              <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-5">
                {/* Primary Contact Card */}
                <div className="rounded-2xl border border-surface-border bg-surface-muted p-4 sm:p-6 md:p-7 shadow-card-soft">
                  <span className="tick-label font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:text-[11px]">
                    Direct Channel
                  </span>

                  <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
                    {/* Email Block with Overflow Proof Display */}
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-content-muted sm:text-[11px]">
                        Email
                      </p>
                      <a
                        href="mailto:hello@creativewebtechnology.com"
                        className="mt-1 block break-all font-display text-sm font-bold text-content transition-colors hover:text-brand sm:break-normal sm:text-base md:text-lg"
                      >
                        hello@creativewebtechnology.com
                      </a>

                      {/* Action buttons on mobile */}
                      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                        <a
                          href="mailto:hello@creativewebtechnology.com"
                          className="inline-flex w-full items-center justify-center rounded-lg bg-brand px-3.5 py-2.5 text-center font-display text-xs font-semibold text-white shadow-sm transition-all hover:bg-brand-hover active:scale-98 sm:w-auto"
                        >
                          Send email →
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="inline-flex w-full items-center justify-center rounded-lg border border-surface-border bg-white px-3.5 py-2.5 text-center font-display text-xs font-medium text-content transition-all hover:bg-surface-subtle active:scale-98 sm:w-auto"
                        >
                          {copied ? '✓ Copied to clipboard' : 'Copy address'}
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-surface-border pt-3.5 sm:pt-4">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-content-muted sm:text-[11px]">
                        Location
                      </p>
                      <p className="mt-1 font-display text-sm font-semibold text-content sm:text-base md:text-lg">
                        Colombo, Sri Lanka
                      </p>
                      <p className="mt-0.5 font-body text-xs text-content-secondary">
                        Available for on-site &amp; remote enterprise engagements
                      </p>
                    </div>

                    <div className="border-t border-surface-border pt-3.5 sm:pt-4">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-content-muted sm:text-[11px]">
                        Response SLA
                      </p>
                      <p className="mt-1 font-display text-xs font-semibold text-content sm:text-sm">
                        Within 24 business hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* NDA Assurance Card */}
                <div className="rounded-xl border border-brand/20 bg-brand/5 p-4 sm:p-5">
                  <p className="font-display text-xs font-semibold text-brand sm:text-sm">
                    🔒 Enterprise Security &amp; NDA
                  </p>
                  <p className="mt-1 font-body text-xs leading-relaxed text-content-secondary">
                    We routinely execute mutual non-disclosure agreements before reviewing proprietary architectures, data schemas, or system logs.
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Quick Inquiry Form (7 cols on lg) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-surface-border bg-white p-4 sm:p-6 md:p-8 shadow-card-soft">
                  <div className="flex items-center justify-between">
                    <span className="tick-label font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:text-[11px]">
                      Send Inquiry
                    </span>
                    <span className="font-mono text-[10px] text-content-muted uppercase">
                      Direct Assessment
                    </span>
                  </div>

                  <h2 className="mt-2.5 font-display text-lg font-bold text-content sm:mt-3 sm:text-xl">
                    Describe your project or data challenge
                  </h2>

                  {submitted ? (
                    <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/80 p-6 text-center">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl text-emerald-600">
                        ✓
                      </span>
                      <h3 className="mt-3 font-display text-base font-bold text-emerald-900">
                        Thank you for reaching out!
                      </h3>
                      <p className="mt-1 font-body text-xs text-emerald-700 sm:text-sm">
                        Your inquiry has been received. Our data engineering team will review your requirements and respond within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-4 inline-flex items-center justify-center rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-800"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-content-secondary sm:text-[11px]">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            placeholder="Alex Silva"
                            className="mt-1.5 w-full rounded-xl border border-surface-border bg-surface-muted px-3.5 py-2.5 font-body text-sm text-content placeholder:text-content-muted/50 focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-content-secondary sm:text-[11px]">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="alex@company.com"
                            className="mt-1.5 w-full rounded-xl border border-surface-border bg-surface-muted px-3.5 py-2.5 font-body text-sm text-content placeholder:text-content-muted/50 focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-content-secondary sm:text-[11px]">
                          Organization / Company
                        </label>
                        <input
                          type="text"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          placeholder="Bank / Enterprise / Directorate"
                          className="mt-1.5 w-full rounded-xl border border-surface-border bg-surface-muted px-3.5 py-2.5 font-body text-sm text-content placeholder:text-content-muted/50 focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-content-secondary sm:text-[11px]">
                          Project Details &amp; Data Sources *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="Tell us about your data sources (ERP, core banking, SQL, CSV), estimated volume, and required reporting outcomes..."
                          className="mt-1.5 w-full rounded-xl border border-surface-border bg-surface-muted px-3.5 py-2.5 font-body text-sm text-content placeholder:text-content-muted/50 focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-xl bg-brand py-3.5 text-center font-display text-sm font-semibold text-white shadow-brand-glow transition-all duration-200 hover:bg-brand-hover hover:shadow-lg active:scale-98"
                      >
                        Submit project inquiry →
                      </button>
                    </form>
                  )}

                  {/* Quick helpful bullets */}
                  <div className="mt-6 border-t border-surface-border pt-4">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-content-muted sm:text-[11px]">
                      Helpful to include:
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-content-secondary">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-brand" />
                        <span>Source systems &amp; approximate transaction volume</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-brand" />
                        <span>Target reporting cadence (real-time, daily, weekly)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-brand" />
                        <span>Governance or compliance constraints</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
