import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useCustomers, useLeads } from '../lib/firestoreCollections'
import { Card, StatCard } from '../components/ui'
import { DollarSign, TrendingUp, Users, Percent } from 'lucide-react'

const pieColors = ['#6366f1', '#0ea5e9', '#10b981', '#f59e0b', '#94a3b8']

const monthlyPipeline = [
  { month: 'Apr', value: 42000 },
  { month: 'May', value: 51000 },
  { month: 'Jun', value: 47000 },
  { month: 'Jul', value: 63000 },
  { month: 'Aug', value: 71000 },
  { month: 'Sep', value: 58000 },
]

export default function Reports() {
  const { data: leads } = useLeads()
  const { data: customers } = useCustomers()

  const leadsByStatus = (['New', 'Contacted', 'Qualified', 'Proposal', 'Lost'] as const).map((status) => ({
    status,
    count: leads.filter((l) => l.status === status).length,
  }))

  const revenueByPlan = (['Starter', 'Growth', 'Enterprise'] as const).map((plan) => ({
    plan,
    mrr: customers.filter((c) => c.plan === plan).reduce((sum, c) => sum + c.mrr, 0),
  }))

  const totalMrr = customers.reduce((sum, c) => sum + c.mrr, 0)
  const wonRate = leads.length
    ? Math.round(
        (leads.filter((l) => l.status === 'Proposal' || l.status === 'Qualified').length / leads.length) * 100,
      )
    : 0
  const avgDealSize = leads.length ? Math.round(leads.reduce((sum, l) => sum + l.value, 0) / leads.length) : 0

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total MRR" value={`$${totalMrr.toLocaleString()}`} icon={DollarSign} accent="emerald" />
        <StatCard label="Avg Deal Size" value={`$${avgDealSize.toLocaleString()}`} icon={TrendingUp} accent="blue" />
        <StatCard label="Active Customers" value={String(customers.length)} icon={Users} accent="amber" />
        <StatCard label="Qualification Rate" value={`${wonRate}%`} icon={Percent} accent="rose" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="mb-4 text-sm font-semibold text-slate-900 dark:text-slate-100">Pipeline Trend (6 mo)</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthlyPipeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} width={48} />
              <Tooltip formatter={(v) => `$${Number(v).toLocaleString()}`} />
              <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h2 className="mb-4 text-sm font-semibold text-slate-900 dark:text-slate-100">Leads by Status</h2>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={leadsByStatus} dataKey="count" nameKey="status" innerRadius={60} outerRadius={90} paddingAngle={2}>
                {leadsByStatus.map((entry, i) => (
                  <Cell key={entry.status} fill={pieColors[i % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {leadsByStatus.map((entry, i) => (
              <div key={entry.status} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: pieColors[i % pieColors.length] }} />
                {entry.status} ({entry.count})
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="mb-4 text-sm font-semibold text-slate-900 dark:text-slate-100">MRR by Plan</h2>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={revenueByPlan} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis dataKey="plan" type="category" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} width={80} />
            <Tooltip formatter={(v) => `$${Number(v).toLocaleString()}`} />
            <Bar dataKey="mrr" fill="#10b981" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
