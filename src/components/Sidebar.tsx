import {
  LayoutDashboard,
  Users,
  UserCheck,
  CalendarCheck,
  ListChecks,
  StickyNote,
  Activity,
  BarChart3,
} from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import VertexMark from './VertexMark'

const links = [
  { to: '/systems/crm', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/systems/crm/leads', label: 'Leads', icon: Users },
  { to: '/systems/crm/customers', label: 'Customers', icon: UserCheck },
  { to: '/systems/crm/appointments', label: 'Appointments', icon: CalendarCheck },
  { to: '/systems/crm/tasks', label: 'Tasks', icon: ListChecks },
  { to: '/systems/crm/notes', label: 'Notes', icon: StickyNote },
  { to: '/systems/crm/activity', label: 'Activity', icon: Activity },
  { to: '/systems/crm/reports', label: 'Reports', icon: BarChart3 },
]

export default function Sidebar() {
  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <Link to="/" className="flex items-center gap-2 px-5 py-5">
        <VertexMark className="h-8 w-auto" />
        <span className="font-display text-base font-bold text-slate-900 dark:text-slate-100">
          Vertex Systems
        </span>
      </Link>
      <nav className="flex-1 space-y-1 px-3">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="absolute -left-3 h-5 w-1 rounded-r-full bg-blue-600" />}
                <Icon size={18} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-slate-200 px-5 py-4 text-xs text-slate-400 dark:border-slate-800">
        Demo data, for portfolio use
      </div>
    </aside>
  )
}
