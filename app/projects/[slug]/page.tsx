import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { projects, getProject } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Creative Web Technology`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-dark-border bg-dark text-white">
          <div className="mx-auto max-w-content px-6 pb-16 pt-14">
            <Link
              href="/#work"
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-wider text-content-light/60 transition-colors hover:text-brand"
            >
              ← All work
            </Link>

            <div className="mt-6 flex items-center gap-3">
              <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
                {project.sector}
              </span>
              <span className="flow-rule w-12 text-brand" />
              <span className="font-body text-sm font-medium text-content-light/70">{project.client}</span>
            </div>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-content-light/70">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-dark-border bg-dark-2 px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-content-light/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.impactStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-dark-border bg-dark-2 p-6">
                  <p className="font-display text-3xl font-bold text-brand">{stat.value}</p>
                  <p className="mt-1.5 font-body text-xs font-medium leading-snug text-content-light/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-surface-border bg-surface py-16">
          <div className="mx-auto max-w-content px-6">
            <div className="max-w-2xl">
              <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
                Core function
              </span>
              <p className="mt-4 font-body text-lg leading-relaxed text-content">
                {project.coreFunction}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-surface-border bg-surface-muted py-16">
          <div className="mx-auto max-w-content px-6">
            <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
              Architecture
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-content sm:text-3xl">
              How the system is built
            </h2>

            <div className="mt-10 space-y-10">
              {project.layers.map((layer, i) => (
                <div
                  key={layer.title}
                  className="grid gap-4 border-t border-surface-border pt-8 md:grid-cols-[220px_1fr]"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-base font-bold leading-snug text-content">
                      {layer.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {layer.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 font-body text-sm leading-relaxed text-content-secondary"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {(project.operatesOn || project.useCases || project.users) && (
          <section className="border-b border-surface-border bg-surface py-16">
            <div className="mx-auto max-w-content px-6">
              <div className="grid gap-12 md:grid-cols-2">
                {project.operatesOn && (
                  <DetailBlock title={project.operatesOn.title} items={project.operatesOn.items} />
                )}
                {project.useCases && (
                  <DetailBlock title={project.useCases.title} items={project.useCases.items} />
                )}
                {project.users && (
                  <DetailBlock title={project.users.title} items={project.users.items} />
                )}
              </div>
            </div>
          </section>
        )}

        {project.closing && (
          <section className="border-b border-dark-border bg-dark py-16 text-white">
            <div className="mx-auto max-w-content px-6">
              <div className="border-l-4 border-brand pl-6">
                <p className="max-w-2xl font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
                  &ldquo;{project.closing}&rdquo;
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="border-b border-surface-border bg-surface py-10">
          <div className="mx-auto max-w-content px-6">
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-surface-border bg-surface-muted p-7 shadow-card-soft transition-all duration-300 hover:border-brand/40 hover:shadow-lg"
            >
              <div>
                <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-content-muted">
                  Next case study
                </span>
                <p className="mt-1 font-display text-lg font-bold text-content group-hover:text-brand transition-colors">
                  {next.title}
                </p>
              </div>
              <span className="font-display text-lg font-bold text-brand transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface-muted p-7 shadow-card-soft">
      <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
        {title}
      </span>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 font-body text-sm leading-relaxed text-content-secondary">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
