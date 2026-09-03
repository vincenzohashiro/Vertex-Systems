export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Proposal' | 'Lost'

export interface Lead {
  id: string
  name: string
  company: string
  email: string
  phone: string
  status: LeadStatus
  source: string
  value: number
  owner: string
  createdAt: string
}

export interface Customer {
  id: string
  name: string
  company: string
  email: string
  phone: string
  plan: 'Starter' | 'Growth' | 'Enterprise'
  mrr: number
  since: string
  health: 'Good' | 'At Risk' | 'Churned'
  avatarColor: string
}

export type AppointmentType = 'Call' | 'Demo' | 'Meeting' | 'Follow-up'

export interface Appointment {
  id: string
  title: string
  with: string
  type: AppointmentType
  date: string
  time: string
  duration: number
  location: string
}

export type TaskPriority = 'Low' | 'Medium' | 'High'

export interface Task {
  id: string
  title: string
  relatedTo: string
  priority: TaskPriority
  dueDate: string
  done: boolean
  assignee: string
}

export interface Note {
  id: string
  title: string
  body: string
  relatedTo: string
  author: string
  createdAt: string
  tags: string[]
}

export type ActivityType = 'lead' | 'customer' | 'task' | 'note' | 'appointment' | 'deal'

export interface ActivityItem {
  id: string
  type: ActivityType
  message: string
  actor: string
  timestamp: string
}
