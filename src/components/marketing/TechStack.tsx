import { techStack } from '../../data/marketing'
import Reveal from './Reveal'

export default function TechStack() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">Tools & Technologies</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-slate-100">What We Work With</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400">
            The languages, platforms, and tools behind the systems we build.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{group.category}</p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-slate-700 dark:text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
