import type { Appointment } from './types'

export const appointments: Appointment[] = [
  { id: 'A-3001', title: 'Discovery call', with: 'Ava Chen · Northwind Traders', type: 'Call', date: '2026-09-03', time: '10:00', duration: 30, location: 'Phone' },
  { id: 'A-3002', title: 'Product demo', with: 'Daniel Osei · Adatum Corp', type: 'Demo', date: '2026-09-03', time: '13:30', duration: 45, location: 'Zoom' },
  { id: 'A-3003', title: 'Quarterly review', with: 'Noah Fischer · Fabrikam Inc', type: 'Meeting', date: '2026-09-04', time: '09:00', duration: 60, location: 'Conference Room A' },
  { id: 'A-3004', title: 'Proposal follow-up', with: 'Sofia Ramirez · Fabrikam Inc', type: 'Follow-up', date: '2026-09-04', time: '15:00', duration: 20, location: 'Phone' },
  { id: 'A-3005', title: 'Renewal discussion', with: 'Chloe Martin · Adatum Corp', type: 'Call', date: '2026-09-05', time: '11:00', duration: 30, location: 'Phone' },
  { id: 'A-3006', title: 'Onboarding kickoff', with: 'Grace Kim · Tailspin Toys', type: 'Meeting', date: '2026-09-08', time: '14:00', duration: 60, location: 'Zoom' },
]
