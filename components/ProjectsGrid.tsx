import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsGrid() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-surface-border bg-surface-muted py-14 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
          <div className="max-w-xl">
            <span className="tick-label font-mono text-[10px] font-semibold uppercase tracking-wider text-brand sm:text-[11px]">
              Selected work
            </span>
            <h2 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-content sm:mt-3 sm:text-3xl md:text-4xl">
              Six platforms, six industries, one standard.
            </h2>
          </div>
          <p className="max-w-sm font-body text-xs leading-relaxed text-content-secondary sm:text-sm">
            Every case study below is a system currently running in production —
            not a mockup. Open one to see the full architecture.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-14 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-surface-border bg-white p-5 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-content-muted sm:text-[11px]">
                    {project.sector}
                  </span>
                  <span className="flex items-center gap-1 font-display text-xs font-semibold text-brand transition-all duration-200 group-hover:translate-x-0.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                    Read study →
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight text-content transition-colors duration-200 group-hover:text-brand sm:mt-4 sm:text-xl">
                  {project.title}
                </h3>
                <p className="mt-1 font-body text-xs font-medium text-content-muted sm:text-sm">{project.client}</p>

                <p className="mt-3 font-body text-xs leading-relaxed text-content-secondary sm:mt-4 sm:text-sm">
                  {project.summary}
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <div className="flex items-center justify-between border-t border-surface-border pt-3.5 sm:pt-4">
                  <div>
                    <span className="font-display text-lg font-bold text-brand sm:text-xl">
                      {project.cardStat.value}
                    </span>
                    <span className="ml-2 font-mono text-[10px] uppercase tracking-wide text-content-muted sm:text-[11px]">
                      {project.cardStat.label}
                    </span>
                  </div>
                </div>

                <div className="mt-3.5 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-surface-border bg-surface-muted px-2.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wide text-content-secondary sm:py-1 sm:text-[10px]"
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
