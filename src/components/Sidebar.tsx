import {
  LayoutDashboard,
  Users,
  UserCheck,
  CalendarCheck,
  ListChecks,
  StickyNote,
  Activity,
  BarChart3,
  Briefcase,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/leads', label: 'Leads', icon: Users },
  { to: '/customers', label: 'Customers', icon: UserCheck },
  { to: '/appointments', label: 'Appointments', icon: CalendarCheck },
  { to: '/tasks', label: 'Tasks', icon: ListChecks },
  { to: '/notes', label: 'Notes', icon: StickyNote },
  { to: '/activity', label: 'Activity', icon: Activity },
  { to: '/reports', label: 'Reports', icon: BarChart3 },
]

export default function Sidebar() {
  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
          <Briefcase size={18} />
        </div>
        <span className="text-base font-semibold text-slate-900 dark:text-slate-100">
          Vertex Systems
        </span>
      </div>
      <nav className="flex-1 space-y-1 px-3">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-slate-200 px-5 py-4 text-xs text-slate-400 dark:border-slate-800">
        Demo data — for portfolio use
      </div>
    </aside>
  )
}
