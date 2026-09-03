import { useEffect, useState } from 'react'
import { isBackendConfigured, tasksApi, useTasks } from '../lib/firestoreCollections'
import { Badge, Card } from '../components/ui'

export default function Tasks() {
  const { data } = useTasks()
  const [tasks, setTasks] = useState(data)

  useEffect(() => setTasks(data), [data])

  const toggle = (id: string, done: boolean) => {
    if (isBackendConfigured) {
      void tasksApi.update(id, { done: !done })
      return
    }
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  const open = tasks.filter((t) => !t.done)
  const done = tasks.filter((t) => t.done)

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">Open ({open.length})</h2>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {open.map((t) => (
            <div key={t.id} className="flex items-center justify-between py-3 first:pt-0">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => toggle(t.id, t.done)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{t.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.relatedTo} · {t.assignee}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge>{t.priority}</Badge>
                <span className="text-xs text-slate-400">Due {t.dueDate}</span>
              </div>
            </div>
          ))}
          {open.length === 0 && <p className="py-4 text-sm text-slate-400">Nothing open, nice work.</p>}
        </div>
      </Card>

      <Card>
        <h2 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">Completed ({done.length})</h2>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {done.map((t) => (
            <div key={t.id} className="flex items-center justify-between py-3 first:pt-0 opacity-60">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => toggle(t.id, t.done)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <p className="text-sm font-medium text-slate-800 line-through dark:text-slate-200">{t.title}</p>
              </div>
              <span className="text-xs text-slate-400">Due {t.dueDate}</span>
            </div>
          ))}
          {done.length === 0 && <p className="py-4 text-sm text-slate-400">No completed tasks yet.</p>}
        </div>
      </Card>
    </div>
  )
}
