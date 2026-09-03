import { LayoutDashboard } from 'lucide-react'
import SystemStubPage from '../../components/marketing/SystemStubPage'

export default function OperationsStub() {
  return (
    <SystemStubPage
      title="Operations Platform"
      tagline="Centralized dashboards for tracking day-to-day business operations."
      icon={LayoutDashboard}
      accent="amber"
      features={[
        'Live view of inventory, orders, or fleet status in one place',
        'Role-based dashboards for staff, managers, and owners',
        'Alerts when something needs attention',
        'Reporting that rolls daily operations into weekly/monthly trends',
      ]}
    />
  )
}
