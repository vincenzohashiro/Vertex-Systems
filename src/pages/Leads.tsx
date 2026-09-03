import { useMemo, useState } from 'react'
import { useLeads } from '../lib/firestoreCollections'
import type { LeadStatus } from '../data/types'
import { Badge, Card } from '../components/ui'

const statuses: (LeadStatus | 'All')[] = ['All', 'New', 'Contacted', 'Qualified', 'Proposal', 'Lost']

export default function Leads() {
  const { data: leads } = useLeads()
  const [status, setStatus] = useState<LeadStatus | 'All'>('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      leads.filter((l) => {
        const matchesStatus = status === 'All' || l.status === status
        const matchesQuery =
          query.trim() === '' ||
          l.name.toLowerCase().includes(query.toLowerCase()) ||
          l.company.toLowerCase().includes(query.toLowerCase())
        return matchesStatus && matchesQuery
      }),
    [leads, status, query],
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search leads by name or company..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-sm rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        />
        <div className="flex flex-wrap gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                status === s
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-400">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Company</th>
                <th className="pb-3 font-medium">Contact</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Source</th>
                <th className="pb-3 font-medium">Value</th>
                <th className="pb-3 font-medium">Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filtered.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="py-3 font-medium text-slate-800 dark:text-slate-200">{lead.name}</td>
                  <td className="py-3 text-slate-500 dark:text-slate-400">{lead.company}</td>
                  <td className="py-3 text-slate-500 dark:text-slate-400">
                    <div>{lead.email}</div>
                    <div className="text-xs">{lead.phone}</div>
                  </td>
                  <td className="py-3">
                    <Badge>{lead.status}</Badge>
                  </td>
                  <td className="py-3 text-slate-500 dark:text-slate-400">{lead.source}</td>
                  <td className="py-3 text-slate-700 dark:text-slate-300">${lead.value.toLocaleString()}</td>
                  <td className="py-3 text-slate-500 dark:text-slate-400">{lead.owner}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400">
                    No leads match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
