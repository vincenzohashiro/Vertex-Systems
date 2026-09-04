import { CalendarCheck, Globe, Search, Share2, Users } from 'lucide-react'
import { useState } from 'react'
import SystemStubPage from '../../components/marketing/SystemStubPage'
import { Badge, Card } from '../../components/ui'

const timeSlots = ['9:00 AM', '11:30 AM', '2:00 PM', '4:30 PM']

const initialSubmissions = [
  { id: 1, name: 'Maria Santos', detail: 'Haircut & Style · Today, 2:30 PM', status: 'Confirmed' },
  { id: 2, name: 'James Cruz', detail: 'Beard Trim · Today, 4:00 PM', status: 'Confirmed' },
  { id: 3, name: 'Angela Reyes', detail: 'Full Grooming · Tomorrow, 10:00 AM', status: 'Pending' },
  { id: 4, name: 'Kevin Tan', detail: 'Haircut · Tomorrow, 1:15 PM', status: 'Pending' },
]

const sources = [
  { label: 'Google Business Profile', icon: Search, pct: 42 },
  { label: 'Instagram', icon: Share2, pct: 27 },
  { label: 'Direct / Website', icon: Globe, pct: 19 },
  { label: 'Referral', icon: Users, pct: 12 },
]

export default function BookingStub() {
  const [submissions, setSubmissions] = useState(initialSubmissions)
  const [selectedSlot, setSelectedSlot] = useState(0)
  const [newestId, setNewestId] = useState<number | null>(null)

  const handleConfirm = () => {
    const id = Date.now()
    setSubmissions((prev) =>
      [{ id, name: 'You', detail: `Haircut & Style · Thu, Sep 10, ${timeSlots[selectedSlot]}`, status: 'Confirmed' }, ...prev].slice(0, 6),
    )
    setNewestId(id)
    window.setTimeout(() => setNewestId((current) => (current === id ? null : current)), 2200)
  }

  return (
    <SystemStubPage
      title="Booking Platform"
      tagline="Online scheduling and appointment management for service businesses."
      icon={CalendarCheck}
      accent="emerald"
      features={[
        'Real-time availability and self-serve booking for clients',
        'Automatic confirmation and reminder notifications',
        'Staff/resource scheduling across multiple locations',
        'Sync with the CRM so bookings become tracked customers',
      ]}
    >
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Book an Appointment</p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="mb-1 text-xs font-medium text-slate-500 dark:text-slate-400">Service</p>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                Haircut &amp; Style
              </div>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium text-slate-500 dark:text-slate-400">Available Times · Thu, Sep 10</p>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((slot, i) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(i)}
                    aria-pressed={i === selectedSlot}
                    className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                      i === selectedSlot
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-500/10 dark:text-emerald-300'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full rounded-lg bg-emerald-600 py-2.5 text-sm font-medium text-white shadow-sm shadow-emerald-600/20 transition-all hover:bg-emerald-500 hover:shadow-md active:scale-[0.98]"
            >
              Confirm Booking
            </button>
            <p
              className={`text-center text-xs font-medium text-emerald-600 transition-opacity duration-300 dark:text-emerald-400 ${
                newestId ? 'opacity-100' : 'opacity-0'
              }`}
              aria-live="polite"
            >
              Added to Recent Submissions →
            </p>
          </div>
        </Card>

        <div className="flex flex-col gap-4 lg:col-span-3">
          <Card>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Recent Submissions</p>
            <div className="mt-2 divide-y divide-slate-100 dark:divide-slate-800">
              {submissions.map((s) => (
                <div
                  key={s.id}
                  className={`-mx-2 flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 transition-colors duration-700 ${
                    s.id === newestId ? 'bg-emerald-50 dark:bg-emerald-500/10' : ''
                  }`}
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">{s.name}</p>
                    <p className="truncate text-xs text-slate-500 dark:text-slate-400">{s.detail}</p>
                  </div>
                  <Badge>{s.status}</Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Where Bookings Come From</p>
            <div className="mt-3 space-y-3">
              {sources.map((s) => (
                <div key={s.label}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                      <s.icon size={13} /> {s.label}
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{s.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </SystemStubPage>
  )
}
