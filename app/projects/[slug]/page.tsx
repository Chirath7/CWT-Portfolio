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
          <div className="mx-auto max-w-content px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
            <Link
              href="/#work"
              className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-content-light/60 transition-colors hover:text-brand sm:text-xs"
            >
              ← All work
            </Link>

            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3">
              <span className="tick-label font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:text-[11px]">
                {project.sector}
              </span>
              <span className="flow-rule w-8 text-brand sm:w-12" />
              <span className="font-body text-xs font-medium text-content-light/70 sm:text-sm">{project.client}</span>
            </div>

            <h1 className="mt-4 max-w-3xl font-display text-2xl font-bold leading-[1.15] tracking-tight text-white sm:mt-5 sm:text-4xl md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-content-light/70 sm:mt-5 sm:text-lg">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5 sm:mt-8 sm:gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-dark-border bg-dark-2 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-content-light/70 sm:px-3.5 sm:text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3.5 sm:mt-12 sm:grid-cols-3 sm:gap-4">
              {project.impactStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-dark-border bg-dark-2 p-4 sm:p-6">
                  <p className="font-display text-2xl font-bold text-brand sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 font-body text-xs font-medium leading-snug text-content-light/60 sm:mt-1.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-surface-border bg-surface py-12 sm:py-16">
          <div className="mx-auto max-w-content px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="tick-label font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:text-[11px]">
                Core function
              </span>
              <p className="mt-3 font-body text-base leading-relaxed text-content sm:mt-4 sm:text-lg">
                {project.coreFunction}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-surface-border bg-surface-muted py-12 sm:py-16">
          <div className="mx-auto max-w-content px-4 sm:px-6">
            <span className="tick-label font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:text-[11px]">
              Architecture
            </span>
            <h2 className="mt-2.5 font-display text-xl font-bold tracking-tight text-content sm:mt-3 sm:text-2xl md:text-3xl">
              How the system is built
            </h2>

            <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
              {project.layers.map((layer, i) => (
                <div
                  key={layer.title}
                  className="grid gap-3 border-t border-surface-border pt-6 sm:gap-4 sm:pt-8 md:grid-cols-[220px_1fr]"
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <span className="font-mono text-xs font-bold text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-sm font-bold leading-snug text-content sm:text-base">
                      {layer.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {layer.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 font-body text-xs leading-relaxed text-content-secondary sm:gap-3 sm:text-sm"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
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
          <section className="border-b border-surface-border bg-surface py-12 sm:py-16">
            <div className="mx-auto max-w-content px-4 sm:px-6">
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
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
          <section className="border-b border-dark-border bg-dark py-12 sm:py-16 text-white">
            <div className="mx-auto max-w-content px-4 sm:px-6">
              <div className="border-l-3 sm:border-l-4 border-brand pl-4 sm:pl-6">
                <p className="max-w-2xl font-display text-lg font-medium leading-relaxed text-white sm:text-xl md:text-2xl">
                  &ldquo;{project.closing}&rdquo;
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="border-b border-surface-border bg-surface py-8 sm:py-10">
          <div className="mx-auto max-w-content px-4 sm:px-6">
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-surface-border bg-surface-muted p-5 shadow-card-soft transition-all duration-300 hover:border-brand/40 hover:shadow-lg sm:p-7"
            >
              <div>
                <span className="tick-label font-mono text-[10px] font-semibold uppercase tracking-wider text-content-muted sm:text-[11px]">
                  Next case study
                </span>
                <p className="mt-1 font-display text-base font-bold text-content group-hover:text-brand transition-colors sm:text-lg">
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
    <div className="rounded-2xl border border-surface-border bg-surface-muted p-5 shadow-card-soft sm:p-7">
      <span className="tick-label font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:text-[11px]">
        {title}
      </span>
      <ul className="mt-3.5 space-y-2.5 sm:mt-4 sm:space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 font-body text-xs leading-relaxed text-content-secondary sm:gap-3 sm:text-sm">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
