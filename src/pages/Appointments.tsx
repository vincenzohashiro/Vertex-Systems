import { CalendarClock, MapPin } from 'lucide-react'
import { useAppointments } from '../lib/firestoreCollections'
import { Card } from '../components/ui'

const typeColors: Record<string, string> = {
  Call: 'bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300',
  Demo: 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300',
  Meeting: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
  'Follow-up': 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
}

export default function Appointments() {
  const { data: appointments } = useAppointments()
  const grouped = appointments.reduce<Record<string, typeof appointments>>((acc, a) => {
    acc[a.date] = acc[a.date] ? [...acc[a.date], a] : [a]
    return acc
  }, {})

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([date, items]) => (
        <div key={date}>
          <h3 className="mb-3 text-sm font-semibold text-slate-500 dark:text-slate-400">{date}</h3>
          <div className="space-y-3">
            {items.map((a) => (
              <Card key={a.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    <CalendarClock size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{a.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{a.with}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${typeColors[a.type]}`}>
                    {a.type}
                  </span>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {a.time} · {a.duration}m
                    </p>
                    <p className="flex items-center justify-end gap-1 text-xs text-slate-400">
                      <MapPin size={12} /> {a.location}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
