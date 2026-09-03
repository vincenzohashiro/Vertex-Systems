import type { Task } from './types'

export const tasks: Task[] = [
  { id: 'T-4001', title: 'Send proposal deck to Adatum Corp', relatedTo: 'Daniel Osei', priority: 'High', dueDate: '2026-09-03', done: false, assignee: 'Priya Nair' },
  { id: 'T-4002', title: 'Follow up on demo feedback', relatedTo: 'Fabrikam Inc', priority: 'Medium', dueDate: '2026-09-04', done: false, assignee: 'Jordan Lee' },
  { id: 'T-4003', title: 'Prepare renewal quote', relatedTo: 'Adatum Corp', priority: 'High', dueDate: '2026-09-05', done: false, assignee: 'Marcus Alvarado' },
  { id: 'T-4004', title: 'Update CRM notes from trade show', relatedTo: 'General', priority: 'Low', dueDate: '2026-09-06', done: true, assignee: 'Priya Nair' },
  { id: 'T-4005', title: 'Schedule onboarding call', relatedTo: 'Tailspin Toys', priority: 'Medium', dueDate: '2026-09-08', done: false, assignee: 'Jordan Lee' },
  { id: 'T-4006', title: 'Review Q3 pipeline report', relatedTo: 'General', priority: 'Medium', dueDate: '2026-09-09', done: false, assignee: 'Marcus Alvarado' },
  { id: 'T-4007', title: 'Check in on at-risk account', relatedTo: 'Wide World Importers', priority: 'High', dueDate: '2026-09-03', done: false, assignee: 'Priya Nair' },
]
