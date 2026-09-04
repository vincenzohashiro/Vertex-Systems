import { Clock, LayoutDashboard, type LucideIcon, TrendingUp, Users } from 'lucide-react'
import SystemStubPage from '../../components/marketing/SystemStubPage'
import { Card, StatCard, type Accent } from '../../components/ui'

const kpis: { label: string; value: string; icon: LucideIcon; accent: Accent; trend: string }[] = [
  { label: 'Revenue (7d)', value: '$18,240', icon: TrendingUp, accent: 'blue', trend: '+12% vs last week' },
  { label: 'Active Orders', value: '34', icon: LayoutDashboard, accent: 'amber', trend: '6 need attention' },
  { label: 'New Customers', value: '21', icon: Users, accent: 'emerald', trend: '+4 this week' },
  { label: 'Avg Response Time', value: '8m', icon: Clock, accent: 'rose', trend: 'Down from 14m' },
]

const traffic = [
  { day: 'Mon', visits: 128 },
  { day: 'Tue', visits: 164 },
  { day: 'Wed', visits: 142 },
  { day: 'Thu', visits: 201 },
  { day: 'Fri', visits: 238 },
  { day: 'Sat', visits: 176 },
  { day: 'Sun', visits: 109 },
]
const maxVisits = Math.max(...traffic.map((t) => t.visits))

const analytics = [
  { label: 'Avg Session Duration', value: '3m 42s' },
  { label: 'Bounce Rate', value: '38%' },
  { label: 'Conversion Rate', value: '4.2%' },
  { label: 'Returning Visitors', value: '61%' },
]

export default function OperationsStub() {
  return (
    <SystemStubPage
      title="Operations Platform"
      tagline="Centralized dashboards for tracking day-to-day business operations."
      icon={LayoutDashboard}
      accent="amber"
      features={[
        'Live view of inventory, orders, or fleet status in one place',
        'Role-based dashboards for staff, managers, and owners',
        'Alerts when something needs attention',
        'Reporting that rolls daily operations into weekly/monthly trends',
      ]}
    >
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {kpis.map((k) => (
          <StatCard key={k.label} label={k.label} value={k.value} icon={k.icon} accent={k.accent} trend={k.trend} />
        ))}
      </div>

      <Card className="mt-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Traffic Per Day</p>
          <p className="text-xs text-slate-400">Last 7 days</p>
        </div>
        <div className="mt-6 flex items-end gap-3">
          {traffic.map((t) => (
            <div key={t.day} className="flex flex-1 flex-col items-center gap-2">
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">{t.visits}</span>
              <div
                style={{ height: `${(t.visits / maxVisits) * 96}px` }}
                className="w-full rounded-t-md bg-gradient-to-t from-amber-500 to-amber-300 opacity-80 transition-all duration-300 hover:opacity-100"
              />
              <span className="text-[10px] text-slate-400">{t.day}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mt-4">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Analytics</p>
        <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {analytics.map((a) => (
            <div key={a.label}>
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{a.value}</p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{a.label}</p>
            </div>
          ))}
        </div>
      </Card>
    </SystemStubPage>
  )
}
