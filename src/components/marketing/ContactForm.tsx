import { CheckCircle2, Clock, Mail, MessageSquare } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { assetPath } from '../../lib/assetPath'
import { Card } from '../ui'
import Reveal from './Reveal'

const inputClasses =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition-colors focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'

const infoItems = [
  { icon: Mail, text: 'Direct line to the team building it: no sales layer.' },
  { icon: Clock, text: "We'll respond within 48 hours with next steps." },
  { icon: MessageSquare, text: 'A short discovery call comes first, no obligation.' },
]

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Intentionally not wired to a backend yet: handler/integration TBD.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen">
        <Reveal className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-white lg:min-h-screen">
          <img
            src={assetPath('/vertex-logo-full.png')}
            alt="Vertex Systems"
            className="h-auto max-h-[60vh] w-full max-w-md object-contain p-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/15 via-transparent to-blue-950/15" />
        </Reveal>

        <div className="flex flex-col justify-center gap-10 px-6 py-16 sm:px-12 lg:px-16">
          <Reveal delay={80}>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Get Started</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-slate-100">Start a Project</h2>
            <p className="mt-3 max-w-md text-slate-600 dark:text-slate-400">Tell us what you're trying to build.</p>

            <ul className="mt-6 space-y-4">
              {infoItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                    <Icon size={15} />
                  </div>
                  <p className="pt-1.5 text-sm text-slate-600 dark:text-slate-400">{text}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
          <Card>
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <CheckCircle2 size={24} />
                </div>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Thanks, we'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">Name</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className={inputClasses} />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">
                    What are you trying to build?
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-md hover:shadow-blue-600/30"
                >
                  Send
                </button>
              </form>
            )}
          </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
