import { useCustomers } from '../lib/firestoreCollections'
import { Badge, Card } from '../components/ui'

export default function Customers() {
  const { data: customers } = useCustomers()
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {customers.map((c) => (
        <Card key={c.id}>
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: c.avatarColor }}
            >
              {c.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{c.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{c.company}</p>
            </div>
          </div>
          <div className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
            <p>{c.email}</p>
            <p>{c.phone}</p>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
            <div>
              <p className="text-xs text-slate-400">Plan</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.plan}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">MRR</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">${c.mrr.toLocaleString()}</p>
            </div>
            <Badge>{c.health}</Badge>
          </div>
          <p className="mt-3 text-xs text-slate-400">Customer since {c.since}</p>
        </Card>
      ))}
    </div>
  )
}
