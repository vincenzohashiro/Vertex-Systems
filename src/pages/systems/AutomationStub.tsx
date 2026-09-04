import { CalendarClock, CheckCircle2, Database, Mail, MessageSquare, type LucideIcon, Zap } from 'lucide-react'
import SystemStubPage from '../../components/marketing/SystemStubPage'
import { accentClasses, type Accent, Card } from '../../components/ui'

function WorkflowNode({
  icon: Icon,
  label,
  sublabel,
  accent,
}: {
  icon: LucideIcon
  label: string
  sublabel: string
  accent: Accent
}) {
  return (
    <Card className="flex w-full items-center gap-3 text-left transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${accentClasses[accent]}`}>
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">{sublabel}</p>
        <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">{label}</p>
      </div>
    </Card>
  )
}

function VLine({ className = '' }: { className?: string }) {
  return <div className={`mx-auto h-6 w-px bg-slate-300 dark:bg-slate-700 ${className}`} />
}

const branches: { icon: LucideIcon; label: string; accent: Accent }[] = [
  { icon: Mail, label: 'Send Welcome Email', accent: 'emerald' },
  { icon: MessageSquare, label: 'Notify Team on Slack', accent: 'blue' },
  { icon: CalendarClock, label: 'Schedule Follow-up', accent: 'amber' },
]

export default function AutomationStub() {
  return (
    <SystemStubPage
      title="Automation System"
      tagline="Custom workflows that eliminate repetitive manual work."
      icon={Zap}
      accent="rose"
      features={[
        'Trigger-based workflows across your existing tools',
        'Inbound/outbound webhooks connecting systems in real time',
        'Scheduled jobs for recurring reports, syncs, and cleanup',
        'Notifications routed to the right person automatically',
      ]}
    >
      <Card className="mt-4">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Sample Workflow</p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          A new lead submission triggers a chain of automated actions, no manual follow-up required.
        </p>

        <div className="mt-8 flex flex-col items-center">
          <div className="w-full max-w-xs">
            <WorkflowNode icon={Zap} label="New Lead Submitted" sublabel="Trigger" accent="rose" />
          </div>
          <VLine />
          <div className="w-full max-w-xs">
            <WorkflowNode icon={Database} label="Add to CRM" sublabel="Action" accent="blue" />
          </div>

          <VLine className="mt-2" />
          <div className="h-px w-full max-w-3xl bg-slate-300 dark:bg-slate-700" />
          <div className="grid w-full max-w-3xl grid-cols-1 gap-4 pt-3 sm:grid-cols-3">
            {branches.map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-2">
                <div className="h-3 w-px bg-slate-300 dark:bg-slate-700" />
                <WorkflowNode icon={b.icon} label={b.label} sublabel="Action" accent={b.accent} />
              </div>
            ))}
          </div>
          <div className="mt-3 h-3 w-px bg-slate-300 dark:bg-slate-700" />
          <div className="h-px w-full max-w-3xl bg-slate-300 dark:bg-slate-700" />
          <VLine />

          <div className="w-full max-w-xs">
            <WorkflowNode icon={CheckCircle2} label="Logged to Activity Feed" sublabel="Complete" accent="emerald" />
          </div>
        </div>
      </Card>
    </SystemStubPage>
  )
}
