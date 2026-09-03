import { Users, UserCheck, DollarSign, ListChecks } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  useActivity,
  useAppointments,
  useCustomers,
  useLeads,
  useTasks,
} from '../lib/firestoreCollections'
import { Badge, Card, StatCard } from '../components/ui'

export default function Dashboard() {
  const { data: leads } = useLeads()
  const { data: customers } = useCustomers()
  const { data: appointments } = useAppointments()
  const { data: tasks } = useTasks()
  const { data: activity } = useActivity()

  const openLeads = leads.filter((l) => l.status !== 'Lost').length
  const pipelineValue = leads.filter((l) => l.status !== 'Lost').reduce((sum, l) => sum + l.value, 0)
  const mrr = customers.reduce((sum, c) => sum + c.mrr, 0)
  const openTasks = tasks.filter((t) => !t.done).length
  const upcoming = appointments.slice(0, 4)
  const recentActivity = activity.slice(0, 5)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Open Leads" value={String(openLeads)} icon={Users} accent="indigo" trend={`$${pipelineValue.toLocaleString()} pipeline`} />
        <StatCard label="Active Customers" value={String(customers.length)} icon={UserCheck} accent="emerald" trend="+2 this month" />
        <StatCard label="Monthly Recurring Revenue" value={`$${mrr.toLocaleString()}`} icon={DollarSign} accent="amber" />
        <StatCard label="Open Tasks" value={String(openTasks)} icon={ListChecks} accent="rose" trend={`${tasks.length - openTasks} completed`} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Upcoming Appointments</h2>
            <Link to="/appointments" className="text-xs font-medium text-indigo-600 hover:underline dark:text-indigo-400">
              View all
            </Link>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {upcoming.map((a) => (
              <div key={a.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{a.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{a.with}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-700 dark:text-slate-300">{a.date}</p>
                  <p className="text-xs text-slate-400">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Recent Activity</h2>
            <Link to="/activity" className="text-xs font-medium text-indigo-600 hover:underline dark:text-indigo-400">
              View all
            </Link>
          </div>
          <ul className="space-y-3">
            {recentActivity.map((item) => (
              <li key={item.id} className="text-sm">
                <p className="text-slate-700 dark:text-slate-300">{item.message}</p>
                <p className="text-xs text-slate-400">
                  {item.actor} · {item.timestamp}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Pipeline Snapshot</h2>
          <Link to="/leads" className="text-xs font-medium text-indigo-600 hover:underline dark:text-indigo-400">
            View leads
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-400">
                <th className="pb-2 font-medium">Lead</th>
                <th className="pb-2 font-medium">Company</th>
                <th className="pb-2 font-medium">Status</th>
                <th className="pb-2 font-medium">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {leads.slice(0, 5).map((lead) => (
                <tr key={lead.id}>
                  <td className="py-2.5 font-medium text-slate-800 dark:text-slate-200">{lead.name}</td>
                  <td className="py-2.5 text-slate-500 dark:text-slate-400">{lead.company}</td>
                  <td className="py-2.5">
                    <Badge>{lead.status}</Badge>
                  </td>
                  <td className="py-2.5 text-slate-700 dark:text-slate-300">${lead.value.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
