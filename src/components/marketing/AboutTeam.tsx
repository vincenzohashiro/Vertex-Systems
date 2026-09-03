import { teamBlurb, teamRoles } from '../../data/marketing'
import { accentClasses, Card, type Accent } from '../ui'
import Reveal from './Reveal'

const roleAccents: Accent[] = ['blue', 'emerald', 'amber']
const initialsStopWords = new Set(['and', '&', 'the', 'of', 'for'])

export default function AboutTeam() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Who We Are</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-slate-100">About the Team</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">{teamBlurb}</p>
        </Reveal>

        <Reveal delay={100}>
          <Card className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {teamRoles.map((role, i) => {
              const accent = roleAccents[i % roleAccents.length]
              const initials = role
                .split(/[\s&]+/)
                .filter((w) => w && !initialsStopWords.has(w.toLowerCase()))
                .slice(0, 2)
                .map((w) => w[0])
                .join('')
                .toUpperCase()
              return (
                <div key={role} className="flex flex-col items-center gap-2 rounded-lg p-3 text-center">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${accentClasses[accent]}`}>
                    {initials}
                  </div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{role}</p>
                </div>
              )
            })}
          </Card>
          <p className="mt-3 text-center text-xs font-medium uppercase tracking-wide text-slate-400 sm:text-left">
            3-person technical team · no account managers, no handoffs
          </p>
        </Reveal>
      </div>
    </section>
  )
}
