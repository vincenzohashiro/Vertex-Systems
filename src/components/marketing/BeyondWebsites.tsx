import { systemCapabilities } from '../../data/marketing'
import { Card } from '../ui'
import Reveal from './Reveal'

export default function BeyondWebsites() {
  return (
    <section id="beyond-websites" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Capabilities</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-slate-100">Beyond Websites</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
          We don't just build websites. This is what our three-person team can build behind them: the systems that run
          the business day to day.
        </p>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {systemCapabilities.map((category, i) => (
          <Reveal key={category.title} delay={i * 60}>
            <Card className="h-full">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                <category.icon size={18} />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">{category.title}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
