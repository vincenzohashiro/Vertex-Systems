import { ArrowLeft, ArrowRight, CheckCircle2, Database, ExternalLink, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { flagshipProject } from '../../data/marketing'
import { Card } from '../../components/ui'
import Reveal from '../../components/marketing/Reveal'

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-slate-100">{title}</h2>
    </Reveal>
  )
}

export default function ZelvariaCaseStudy() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950 py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/30 via-indigo-600/20 to-transparent blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <Link
              to="/"
              className="group inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" /> Back to Vertex Systems
            </Link>

            <div className="mt-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-300">
                <Sparkles size={12} />
                {flagshipProject.classification}
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">{flagshipProject.title}</h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">{flagshipProject.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={flagshipProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-slate-900 shadow-lg shadow-black/20 transition-all hover:bg-slate-100"
              >
                Visit Live Site
                <ExternalLink size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative mt-12">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/10 blur-xl" />
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
                    src={flagshipProject.screenshot}
                    alt="Zelvaria website preview, frontend experience"
                    className="w-full object-cover object-top"
                    loading="lazy"
                  />
                )}
              </div>
              <p className="mt-3 text-center text-xs text-slate-500">Frontend Experience: the public-facing landing page</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading eyebrow="Overview" title="What Zelvaria Is" />
        <Reveal delay={60}>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{flagshipProject.description}</p>
        </Reveal>

        <div className="mt-10">
          <SectionHeading eyebrow="My Role" title="What I Built" />
          <Reveal delay={60}>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{flagshipProject.role}</p>
          </Reveal>
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="Why It Matters" title="Beyond a Marketing Website" />
          <Reveal delay={60}>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{flagshipProject.whyItMatters}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="System Architecture" title="How It's Connected" />

          <Reveal delay={80}>
            <div className="mt-10 overflow-x-auto">
              <div className="flex min-w-max items-center gap-2 sm:min-w-0 sm:flex-wrap">
                {flagshipProject.architecture.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-800 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                      {step}
                    </div>
                    {i < flagshipProject.architecture.length - 1 && (
                      <ArrowRight size={16} className="shrink-0 text-slate-300 dark:text-slate-700" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative mt-14">
              <div className="mx-auto w-fit rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
                Zelvaria Platform
              </div>
              <div className="mx-auto mt-3 h-6 w-px bg-slate-300 dark:bg-slate-700" />
              <div className="mx-auto h-px w-full max-w-2xl bg-slate-300 dark:bg-slate-700" />
              <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 pt-3 sm:grid-cols-4">
                {flagshipProject.integrations.map((node) => (
                  <div key={node.title} className="flex min-w-0 flex-col items-center gap-2">
                    <div className="h-3 w-px bg-slate-300 dark:bg-slate-700" />
                    <Card className="flex w-full min-w-0 flex-col items-center gap-2 text-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                        <node.icon size={18} />
                      </div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{node.title}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading eyebrow="Core Features" title="Key Technical Highlights" />
        <Reveal delay={80}>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {flagshipProject.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Database" title="Supabase & PostgreSQL" />
          <Reveal delay={80}>
            <Card className="mt-8 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                <Database size={20} />
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Zelvaria is backed by Supabase and a PostgreSQL database rather than static content, demonstrating the
                ability to work with a production-style, relational database-backed application.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading eyebrow="Payment Integration" title="PayMongo" />
        <Reveal delay={80}>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            The platform integrates PayMongo for payment processing, connecting a customer purchase to the application
            and its database rather than displaying a payment button on its own.
          </p>
          <div className="mt-6 overflow-x-auto">
            <div className="flex min-w-max items-center gap-2">
              {['Customer', 'Purchase', 'PayMongo', 'Payment Processing', 'Application', 'Database / Account State'].map(
                (step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-center text-xs font-medium text-slate-800 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                      {step}
                    </div>
                    {i < arr.length - 1 && <ArrowRight size={14} className="shrink-0 text-slate-300 dark:text-slate-700" />}
                  </div>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Community Integration" title="Discord" />
          <Reveal delay={80}>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              The web platform connects to the project's Discord community, integrating the website with the space
              where the Zelvaria community actually lives.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Infrastructure" title="VPS Integration" />
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Zelvaria interacts with external server infrastructure rather than operating solely as a static
              website, demonstrating VPS infrastructure integration.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading eyebrow="Game Integration" title="Game-Host Integration" />
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              The platform also integrates with external game server infrastructure, connecting the web experience to
              the game itself rather than treating them as separate systems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
              Live Demonstration
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-slate-100">
              See It Live
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 dark:text-slate-400">
              The public-facing experience is live. Backend, database, and integration functionality are not
              publicly browsable, but power everything behind the site.
            </p>
            <a
              href={flagshipProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-600/20 transition-all hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-600/30"
            >
              Visit Live Site
              <ExternalLink size={16} />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
