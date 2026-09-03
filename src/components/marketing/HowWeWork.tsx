import { processSteps } from '../../data/marketing'
import Reveal from './Reveal'

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">Process</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-slate-100">How We Work</h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-0 top-4 hidden h-px w-full bg-slate-200 dark:bg-slate-800 lg:block" />
          <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-6">
            {processSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 70} as="li">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white ring-4 ring-white dark:ring-slate-950">
                  {i + 1}
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">{item.step}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
