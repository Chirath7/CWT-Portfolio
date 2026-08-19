import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsGrid() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-surface-border bg-surface-muted py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="tick-label font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
              Selected work
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-content sm:text-4xl">
              Six platforms, six industries, one standard.
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm leading-relaxed text-content-secondary">
            Every case study below is a system currently running in production —
            not a mockup. Open one to see the full architecture.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-surface-border bg-white p-7 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-content-muted">
                    {project.sector}
                  </span>
                  <span className="flex items-center gap-1 font-display text-xs font-semibold text-brand opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
                    Read study →
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-content transition-colors duration-200 group-hover:text-brand">
                  {project.title}
                </h3>
                <p className="mt-1 font-body text-sm font-medium text-content-muted">{project.client}</p>

                <p className="mt-4 font-body text-sm leading-relaxed text-content-secondary">
                  {project.summary}
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between border-t border-surface-border pt-4">
                  <div>
                    <span className="font-display text-xl font-bold text-brand">
                      {project.cardStat.value}
                    </span>
                    <span className="ml-2 font-mono text-[11px] uppercase tracking-wide text-content-muted">
                      {project.cardStat.label}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-surface-border bg-surface-muted px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-content-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
