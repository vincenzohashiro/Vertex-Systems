import { useNotes } from '../lib/firestoreCollections'
import { Card } from '../components/ui'

export default function Notes() {
  const { data: notes } = useNotes()
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {notes.map((n) => (
        <Card key={n.id}>
          <div className="flex items-start justify-between">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{n.title}</h3>
            <span className="text-xs text-slate-400">{n.createdAt}</span>
          </div>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{n.body}</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {n.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400">
              {n.relatedTo} · {n.author}
            </p>
          </div>
        </Card>
      ))}
    </div>
  )
}
