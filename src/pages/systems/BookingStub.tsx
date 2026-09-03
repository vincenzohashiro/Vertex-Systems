import { CalendarCheck } from 'lucide-react'
import SystemStubPage from '../../components/marketing/SystemStubPage'

export default function BookingStub() {
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
    />
  )
}
