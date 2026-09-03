import { Search, Bell, LogOut } from 'lucide-react'
import { useAuth } from '../lib/AuthContext'

export default function Topbar({ title }: { title: string }) {
  const { user, configured, signOut } = useAuth()

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3">
        <h1 className="font-display text-lg font-bold text-slate-900 dark:text-slate-100">{title}</h1>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            configured
              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'
              : 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300'
          }`}
          title={configured ? 'Connected to Firestore' : 'No Firebase project configured, showing demo data'}
        >
          {configured ? 'Live' : 'Demo data'}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-56 rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 transition-colors focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:bg-slate-800"
          />
        </div>
        <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-medium text-white">
          {user?.email ? user.email.slice(0, 2).toUpperCase() : 'JL'}
        </div>
        {configured && user && (
          <button
            onClick={() => signOut()}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            title="Sign out"
          >
            <LogOut size={18} />
          </button>
        )}
      </div>
    </header>
  )
}
