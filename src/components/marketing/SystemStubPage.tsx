import { ArrowLeft, CheckCircle, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { accentClasses, type Accent, Badge, Card } from '../ui'

interface SystemStubPageProps {
  title: string
  tagline: string
  icon: LucideIcon
  accent: Accent
  features: string[]
  children?: ReactNode
}

export default function SystemStubPage({ title, tagline, icon: Icon, accent, features, children }: SystemStubPageProps) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Link
        to="/"
        className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      >
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" /> Back to Vertex Systems
      </Link>

      <div className="mt-6 flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accentClasses[accent]}`}>
          <Icon size={22} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h1>
            <Badge>Preview</Badge>
          </div>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{tagline}</p>
        </div>
      </div>

      <Card className="mt-8">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">What it does</p>
        <ul className="mt-3 space-y-2.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <CheckCircle size={16} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
              {feature}
            </li>
          ))}
        </ul>
      </Card>

      {children ?? (
        <Card className="mt-4">
          <div className={`h-2 w-24 rounded-full ${accentClasses[accent]}`} />
          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="col-span-2 h-24 rounded-lg bg-slate-100 dark:bg-slate-800" />
            <div className="h-24 rounded-lg bg-slate-100 dark:bg-slate-800" />
            <div className="h-16 rounded-lg bg-slate-100 dark:bg-slate-800" />
            <div className="h-16 rounded-lg bg-slate-100 dark:bg-slate-800" />
            <div className="h-16 rounded-lg bg-slate-100 dark:bg-slate-800" />
          </div>
          <p className="mt-5 text-xs text-slate-400">Full interactive demo in progress.</p>
        </Card>
      )}
    </div>
  )
}
