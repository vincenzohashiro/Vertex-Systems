import { ExternalLink } from 'lucide-react'
import { clientWork } from '../../data/marketing'
import { assetPath } from '../../lib/assetPath'
import { Card } from '../ui'
import Reveal from './Reveal'

export default function ClientWork() {
  return (
    <section id="work" className="bg-slate-50 py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Client Work</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-slate-100">Professional Experience</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400">
            Real websites built for real businesses, live for their customers today.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {clientWork.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <Card className="flex h-full flex-col overflow-hidden p-0 hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden border-b border-slate-100 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
                  {project.screenshot ? (
                    <img
                      src={assetPath(project.screenshot)}
                      alt={`${project.title} website preview`}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                      Preview unavailable
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    {project.category}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">{project.title}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {project.description}
                  </p>
                  {project.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-5">
                    {project.status === 'live' ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Visit Website
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <p className="text-xs text-slate-400">Site currently unavailable</p>
                    )}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
