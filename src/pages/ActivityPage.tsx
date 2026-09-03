import {
  UserPlus,
  UserCheck,
  CheckSquare,
  StickyNote,
  CalendarCheck,
  Handshake,
  type LucideIcon,
} from 'lucide-react'
import { useActivity } from '../lib/firestoreCollections'
import type { ActivityType } from '../data/types'
import { Card } from '../components/ui'

const icons: Record<ActivityType, LucideIcon> = {
  lead: UserPlus,
  customer: UserCheck,
  task: CheckSquare,
  note: StickyNote,
  appointment: CalendarCheck,
  deal: Handshake,
}

const colors: Record<ActivityType, string> = {
  lead: 'bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300',
  customer: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300',
  task: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300',
  note: 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-300',
  appointment: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300',
  deal: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300',
}

export default function ActivityPage() {
  const { data: activity } = useActivity()
  return (
    <Card>
      <ul className="space-y-5">
        {activity.map((item) => {
          const Icon = icons[item.type]
          return (
            <li key={item.id} className="flex items-start gap-3">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${colors[item.type]}`}>
                <Icon size={16} />
              </div>
              <div>
                <p className="text-sm text-slate-800 dark:text-slate-200">{item.message}</p>
                <p className="text-xs text-slate-400">
                  {item.actor} · {item.timestamp}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
