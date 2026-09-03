import type { Note } from './types'

export const notes: Note[] = [
  { id: 'N-5001', title: 'Discovery call summary', body: 'Ava is evaluating three vendors. Budget confirmed at $8-10k. Wants a decision by end of September.', relatedTo: 'Ava Chen', author: 'Jordan Lee', createdAt: '2026-08-28', tags: ['discovery', 'budget'] },
  { id: 'N-5002', title: 'Demo prep notes', body: 'Focus demo on reporting and integrations: that is what Daniel flagged as most important for Adatum.', relatedTo: 'Daniel Osei', author: 'Priya Nair', createdAt: '2026-08-30', tags: ['demo'] },
  { id: 'N-5003', title: 'At-risk account check-in', body: 'Usage dropped 40% over the last month. Scheduling a call to understand blockers before renewal.', relatedTo: 'Wide World Importers', author: 'Priya Nair', createdAt: '2026-09-01', tags: ['risk', 'renewal'] },
  { id: 'N-5004', title: 'Trade show follow-ups', body: 'Collected 12 new leads at the Chicago trade show. Prioritizing Northwind and Tailspin this week.', relatedTo: 'General', author: 'Marcus Alvarado', createdAt: '2026-08-16', tags: ['events'] },
]
