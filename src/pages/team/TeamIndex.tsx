import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { teamMembers } from '../../data/marketing'
import { accentClasses } from '../../components/ui'

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function TeamIndex() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Who We Are</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-slate-100">The Team</h1>
      <p className="mt-3 max-w-xl text-sm text-slate-500 dark:text-slate-400">
        A small technical team. More profiles are added here as they're ready.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {teamMembers.map((member) => (
          <Link
            key={member.slug}
            to={`/team/${member.slug}`}
            className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold ${accentClasses[member.accent]}`}
            >
              {initialsOf(member.name)}
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{member.name}</p>
              <ArrowUpRight
                size={14}
                className="text-slate-300 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-500 group-hover:opacity-100 dark:text-slate-700"
              />
            </div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{member.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{member.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
