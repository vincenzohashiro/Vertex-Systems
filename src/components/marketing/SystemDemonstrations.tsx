import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { systemDemos } from '../../data/marketing'
import { accentClasses, Badge, Card } from '../ui'
import Reveal from './Reveal'

export default function SystemDemonstrations() {
  return (
    <section id="systems" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Live Demos</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-slate-100">System Demonstrations</h2>
        <p className="mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400">
          Working examples of the systems we build, for you to explore.
        </p>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {systemDemos.map((demo, i) => (
          <Reveal key={demo.href} delay={i * 70}>
            <Link to={demo.href} className="block h-full">
              <Card className="group h-full hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${accentClasses[demo.accent]}`}>
                    <demo.icon size={18} />
                  </div>
                  <Badge>{demo.status}</Badge>
                </div>
                <div className="mt-4 flex items-center gap-1.5">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{demo.title}</p>
                  <ArrowUpRight
                    size={14}
                    className="text-slate-300 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-500 group-hover:opacity-100 dark:text-slate-700"
                  />
                </div>
                <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{demo.description}</p>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
