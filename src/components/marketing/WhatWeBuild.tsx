import { whatWeBuild } from '../../data/marketing'
import { accentClasses, Card, type Accent } from '../ui'
import Reveal from './Reveal'

const accentCycle: Accent[] = ['blue', 'emerald', 'amber', 'rose']

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Capabilities</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-slate-100">What We Build</h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whatWeBuild.map((item, i) => {
          const accent = accentCycle[i % accentCycle.length]
          return (
            <Reveal key={item.title} delay={i * 60}>
              <Card className="h-full hover:-translate-y-1 hover:shadow-lg">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${accentClasses[accent]}`}>
                  <item.icon size={18} />
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
