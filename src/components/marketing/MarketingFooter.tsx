import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { systemDemos } from '../../data/marketing'
import VertexMark from '../VertexMark'

const sectionLinks = [
  { id: 'what-we-build', label: 'What We Build' },
  { id: 'work', label: 'Work' },
  { id: 'flagship', label: 'Flagship' },
  { id: 'about', label: 'About' },
]

export default function MarketingFooter() {
  const goToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <VertexMark className="h-8 w-auto" />
              <span className="font-display text-base font-bold text-slate-900 dark:text-slate-100">Vertex Systems</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Business Systems · Automation · Software Development. A small technical team building the software
              businesses run on.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Site</p>
            <ul className="mt-4 space-y-2.5">
              {sectionLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => goToSection(item.id)}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/team"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Systems</p>
            <ul className="mt-4 space-y-2.5">
              {systemDemos.map((demo) => (
                <li key={demo.href}>
                  <Link
                    to={demo.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    {demo.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row dark:border-slate-800">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Vertex Systems. All rights reserved.</p>
          <button
            onClick={() => goToSection('contact')}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            <Mail size={13} />
            Start a project
          </button>
        </div>
      </div>
    </footer>
  )
}
