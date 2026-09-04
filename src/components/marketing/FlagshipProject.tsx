import { ArrowRight, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { flagshipProject } from '../../data/marketing'
import { assetPath } from '../../lib/assetPath'
import Reveal from './Reveal'

export default function FlagshipProject() {
  return (
    <section id="flagship" className="relative overflow-hidden bg-slate-950 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/30 via-blue-600/20 to-transparent blur-3xl"
      />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black_30%,transparent_100%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-300">
            <Sparkles size={12} />
            {flagshipProject.classification}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">{flagshipProject.title}</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-400">{flagshipProject.tagline}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal delay={100}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/10 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-slate-900 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-3 flex h-6 flex-1 items-center rounded-md bg-slate-950 px-2 text-[11px] text-slate-500">
                    zelvaria.world
                  </span>
                </div>
                {flagshipProject.screenshot && (
                  <img
                    src={assetPath(flagshipProject.screenshot)}
                    alt="Zelvaria website preview"
                    className="w-full object-cover object-top"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {flagshipProject.integrations.map((node) => (
                  <div
                    key={node.title}
                    className="flex min-w-0 flex-col items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-1 py-3 text-center"
                  >
                    <node.icon size={16} className="text-violet-300" />
                    <span className="text-[11px] font-medium text-slate-300">{node.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <p className="text-sm leading-relaxed text-slate-300">{flagshipProject.description}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">My Role</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{flagshipProject.role}</p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">Highlights</p>
            <ul className="mt-3 space-y-2.5">
              {flagshipProject.highlights.slice(0, 5).map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-violet-400" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={flagshipProject.caseStudyPath}
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-slate-900 shadow-lg shadow-black/20 transition-all hover:bg-slate-100"
              >
                Explore Case Study
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={flagshipProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5"
              >
                Visit Live Site
                <ExternalLink size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
