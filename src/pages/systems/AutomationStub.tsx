import { Zap } from 'lucide-react'
import SystemStubPage from '../../components/marketing/SystemStubPage'

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
    />
  )
}
