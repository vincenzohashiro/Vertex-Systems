import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const titles: Record<string, string> = {
  '/systems/crm': 'Dashboard',
  '/systems/crm/leads': 'Leads',
  '/systems/crm/customers': 'Customers',
  '/systems/crm/appointments': 'Appointments',
  '/systems/crm/tasks': 'Tasks',
  '/systems/crm/notes': 'Notes',
  '/systems/crm/activity': 'Activity',
  '/systems/crm/reports': 'Reports',
}

export default function Layout() {
  const { pathname } = useLocation()
  const title = titles[pathname] ?? 'Vertex Systems'

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar title={title} />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
