import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      {children}
    </div>
  )
}

export type Accent = 'blue' | 'emerald' | 'amber' | 'rose'

export const accentClasses: Record<Accent, string> = {
  blue: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300',
  emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300',
  amber: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300',
  rose: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300',
}

export function StatCard({
  label,
  value,
  icon: Icon,
  accent = 'blue',
  trend,
}: {
  label: string
  value: string
  icon: LucideIcon
  accent?: Accent
  trend?: string
}) {
  return (
    <Card className="flex items-start justify-between">
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
        <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">{value}</p>
        {trend && <p className="mt-1 text-xs text-slate-400">{trend}</p>}
      </div>
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${accentClasses[accent]}`}>
        <Icon size={20} />
      </div>
    </Card>
  )
}

const badgeColors: Record<string, string> = {
  // lead statuses
  New: 'bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300',
  Contacted: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  Qualified: 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300',
  Proposal: 'bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300',
  Lost: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
  // customer health
  Good: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
  'At Risk': 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  Churned: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300',
  // system demo status
  Live: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
  Preview: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
  // booking status
  Confirmed: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
  Pending: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  // task priority
  High: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300',
  Medium: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  Low: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
}

export function Badge({ children }: { children: string }) {
  const color = badgeColors[children] ?? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${color}`}>
      {children}
    </span>
  )
}
