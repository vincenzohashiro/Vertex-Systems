import type { Customer } from './types'

export const customers: Customer[] = [
  { id: 'C-2001', name: 'Isabella Turner', company: 'Northwind Traders', email: 'i.turner@northwind.com', phone: '(206) 555-0201', plan: 'Growth', mrr: 1200, since: '2025-02-14', health: 'Good', avatarColor: '#6366f1' },
  { id: 'C-2002', name: 'Noah Fischer', company: 'Fabrikam Inc', email: 'noah.f@fabrikam.com', phone: '(415) 555-0212', plan: 'Enterprise', mrr: 4800, since: '2024-11-02', health: 'Good', avatarColor: '#0ea5e9' },
  { id: 'C-2003', name: 'Chloe Martin', company: 'Adatum Corp', email: 'chloe.martin@adatum.com', phone: '(646) 555-0223', plan: 'Starter', mrr: 300, since: '2025-07-19', health: 'At Risk', avatarColor: '#f59e0b' },
  { id: 'C-2004', name: 'Ryan Cooper', company: 'Litware Inc', email: 'ryan.cooper@litware.com', phone: '(720) 555-0234', plan: 'Growth', mrr: 1500, since: '2025-01-05', health: 'Good', avatarColor: '#10b981' },
  { id: 'C-2005', name: 'Emma Wallace', company: 'Proseware', email: 'emma.w@proseware.com', phone: '(305) 555-0245', plan: 'Enterprise', mrr: 6200, since: '2023-09-27', health: 'Good', avatarColor: '#ec4899' },
  { id: 'C-2006', name: 'Lucas Dubois', company: 'Tailspin Toys', email: 'lucas.d@tailspin.com', phone: '(213) 555-0256', plan: 'Starter', mrr: 300, since: '2025-06-11', health: 'Churned', avatarColor: '#94a3b8' },
  { id: 'C-2007', name: 'Mia Johansson', company: 'Wide World Importers', email: 'mia.j@wwi.com', phone: '(617) 555-0267', plan: 'Growth', mrr: 1350, since: '2024-12-30', health: 'At Risk', avatarColor: '#a855f7' },
]
