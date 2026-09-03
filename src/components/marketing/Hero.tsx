import { ArrowRight, Bell, Search, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const stats = [
  { value: '3', label: 'engineers, no account managers' },
  { value: '6+', label: 'systems shipped to production' },
  { value: '<48h', label: 'typical first-response time' },
]

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-400/30 via-violet-400/20 to-transparent blur-3xl dark:from-indigo-500/20 dark:via-violet-500/10"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-20 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
              <Sparkles size={12} />
              Business Systems · Automation · Software
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
              We build the digital systems that make businesses{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                operate better.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              Vertex Systems designs and ships the websites, CRMs, and automations that replace spreadsheets and manual
              busywork with software your team actually wants to use.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('work')}
                className="group inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-600/20 transition-all hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-600/30"
              >
                View Our Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                Discuss a Project
              </button>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:gap-6 dark:border-slate-800">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative hidden lg:block">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/60">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              <span className="ml-3 flex h-6 flex-1 items-center rounded-md bg-white px-2 text-[11px] text-slate-400 dark:bg-slate-800">
                vertexsystems.app/systems/crm
              </span>
            </div>
            <div className="p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Dashboard</p>
                <div className="flex items-center gap-2 text-slate-400">
                  <Search size={13} />
                  <Bell size={13} />
                  <span className="h-5 w-5 rounded-full bg-indigo-600" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  ['Open Leads', 'bg-indigo-100 dark:bg-indigo-500/20'],
                  ['Customers', 'bg-emerald-100 dark:bg-emerald-500/20'],
                  ['MRR', 'bg-amber-100 dark:bg-amber-500/20'],
                ].map(([label, tone]) => (
                  <div key={label} className="rounded-lg border border-slate-100 p-2.5 dark:border-slate-800">
                    <p className="text-[10px] text-slate-400">{label}</p>
                    <div className={`mt-2 h-1.5 w-3/4 rounded-full ${tone}`} />
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-end gap-1.5 rounded-lg border border-slate-100 p-3 dark:border-slate-800">
                {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h * 0.4}px` }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-500 to-violet-400 opacity-80"
                  />
                ))}
              </div>
              <div className="mt-3 space-y-2 rounded-lg border border-slate-100 p-3 dark:border-slate-800">
                {[
                  ['Acme Retail', 'Qualified'],
                  ['Northside Clinic', 'Proposal'],
                ].map(([name, status]) => (
                  <div key={name} className="flex items-center justify-between">
                    <span className="text-xs text-slate-600 dark:text-slate-300">{name}</span>
                    <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
