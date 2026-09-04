import {
  CalendarCheck,
  CreditCard,
  Code2,
  Database,
  Gamepad2,
  Globe,
  LayoutDashboard,
  MessageSquare,
  Server,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export interface WhatWeBuildItem {
  icon: LucideIcon
  title: string
  description: string
}

export const whatWeBuild: WhatWeBuildItem[] = [
  { icon: Globe, title: 'Business Websites', description: 'Fast, modern sites that represent the business and convert visitors into leads.' },
  { icon: Code2, title: 'Custom Web Applications', description: 'Purpose-built software for workflows off-the-shelf tools can’t handle.' },
  { icon: Zap, title: 'Business Automation', description: 'Removing repetitive manual work with automated workflows and triggers.' },
  { icon: Workflow, title: 'CRM & Integrations', description: 'Systems for tracking leads, customers, and the relationships between them.' },
  { icon: Database, title: 'Database Systems', description: 'Reliable data foundations that scale with the business, not against it.' },
  { icon: CreditCard, title: 'Payment Integrations', description: 'Secure checkout, billing, and payment flows wired into existing systems.' },
]

// Real client work. Only verified details are included: what the site is,
// what it does, and a link to see it live. No fabricated tech stack, role,
// or results beyond what's been confirmed.
export type ProjectStatus = 'live' | 'unavailable'

export interface ClientWorkItem {
  title: string
  url: string
  category: string
  description: string
  tags: string[]
  status: ProjectStatus
  screenshot?: string
}

export const clientWork: ClientWorkItem[] = [
  {
    title: 'A&B Barber Lounge 2',
    url: 'https://ab-barberlounge2.dk/',
    category: 'Business Website + Booking',
    description:
      'Business website and booking experience developed for a barbershop, giving customers an online presence and a direct path to book appointments.',
    tags: ['Business Website', 'Booking'],
    status: 'live',
    screenshot: '/projects/ab-barberlounge.png',
  },
  {
    title: 'Håreksperten',
    url: 'https://haareksperten.com/',
    category: 'Business Website + Consultation',
    description:
      'Professional website project for Håreksperten, a Danish hair-transplantation business serving customers seeking treatment in Istanbul. The site combines service information, treatment education, pricing, results, customer testimonials, and a structured consultation journey into a single customer-facing platform.',
    tags: ['Business Website', 'International', 'Consultation Flow', 'CRM System', 'Automated Lead Handler', 'Business Integrations'],
    status: 'live',
    screenshot: '/projects/haareksperten-website.png',
  },
  {
    title: 'Haareksperten KPI Dashboard',
    url: 'https://vincenzohashiro.github.io/New-KPI-Dasbhoard/',
    category: 'KPI & Revenue Dashboard',
    description:
      'A live KPI and revenue tracking dashboard built for Haareksperten, consolidating lead, sales, and aftercare data from Monday.com alongside Meta Ads and Google Ads performance into a single funnel and revenue view.',
    tags: ['Dashboard', 'Analytics', 'Integrations'],
    status: 'live',
    screenshot: '/projects/haareksperten-kpi-dashboard.png',
  },
  {
    title: 'Cruzader TKD',
    url: 'https://vincenzohashiro.github.io/Cruzader-TKD/',
    category: 'Local Business Website',
    description:
      'Business website built for a local Taekwondo school. Currently being redeployed, a preview will be added once it is back live.',
    tags: ['Business Website'],
    status: 'unavailable',
  },
  {
    title: 'Project Eden',
    url: 'https://project-eden.online/',
    category: 'Project Portfolio Entry',
    description: 'A project currently being documented. Details will be added once the scope is confirmed.',
    tags: [],
    status: 'unavailable',
  },
]

// Archived: not currently shown in Client Work. Restore by moving back into clientWork.
export const archivedClientWork: ClientWorkItem[] = [
  {
    title: 'Angel Creative Ads',
    url: 'https://angelcreativeads.com/',
    category: 'Business Website',
    description:
      'Business website developed for a performance marketing and lead generation agency, presenting its services clearly and giving prospective clients a direct path to get in touch.',
    tags: ['Business Website', 'Booking', 'Automated Lead Handler'],
    status: 'live',
    screenshot: '/projects/angel-creative-ads.png',
  },
]

export interface IntegrationNode {
  icon: LucideIcon
  title: string
  description: string
}

export interface FlagshipProject {
  title: string
  url: string
  caseStudyPath: string
  classification: string
  tagline: string
  description: string
  role: string
  whyItMatters: string
  architecture: string[]
  integrations: IntegrationNode[]
  highlights: string[]
  screenshot?: string
}

export const flagshipProject: FlagshipProject = {
  title: 'Zelvaria',
  url: 'https://zelvaria.world/',
  caseStudyPath: '/work/zelvaria',
  classification: 'Flagship Project · Full-Stack Capability Demonstration',
  tagline: 'A full-stack MMORPG community platform, not just a website.',
  description:
    'Zelvaria combines an immersive public-facing web experience with the systems that run a real community behind it: a database-backed application, payment processing, and external integrations connecting to Discord, VPS infrastructure, and game-host services.',
  role:
    'Designed and developed independently as a full-stack capability demonstration, covering the frontend experience, backend functionality, database integration, payment integration, community integration, and infrastructure connections. Not a client project or commercial deployment.',
  whyItMatters:
    'Zelvaria demonstrates the ability to build beyond a conventional marketing website: a custom web experience wired into database infrastructure, payment processing, community services, and external server infrastructure. It shows full-stack problem solving across the presentation layer, application logic, the database, third-party services, and infrastructure integrations, the same range of work a larger business system requires.',
  architecture: [
    'User',
    'Zelvaria Web Application',
    'Player Pipeline Registration',
    'Supabase & Backend Logic',
    'Discord Invite',
    'Unique Profile Tracker & Minecraft Account Link',
  ],
  integrations: [
    { icon: CreditCard, title: 'PayMongo', description: 'Payment processing integration for the platform.' },
    { icon: MessageSquare, title: 'Discord', description: 'Community integration connecting the platform to its Discord environment.' },
    { icon: Server, title: 'VPS', description: 'Server and infrastructure integration beyond static hosting.' },
    { icon: Gamepad2, title: 'Game Host', description: 'Integration with external game server infrastructure.' },
  ],
  highlights: [
    'Full-stack web application with a database-backed backend',
    'Supabase and PostgreSQL for data and application state',
    'PayMongo payment integration',
    'Discord community integration',
    'VPS infrastructure integration',
    'Game-host integration',
    'Responsive, custom-designed frontend and UI/UX',
  ],
  screenshot: '/projects/zelvaria.png',
}

export interface SystemCapabilityCategory {
  icon: LucideIcon
  title: string
  items: string[]
}

export const systemCapabilities: SystemCapabilityCategory[] = [
  {
    icon: Users,
    title: 'CRM Systems',
    items: ['Lead management', 'Customer management', 'Sales pipelines', 'Tasks', 'Activity tracking', 'Dashboards', 'Notifications'],
  },
  {
    icon: CalendarCheck,
    title: 'Booking Platforms',
    items: ['Online booking', 'Availability management', 'Customer records', 'Staff management', 'Calendar integration', 'Reminders'],
  },
  {
    icon: LayoutDashboard,
    title: 'Business Operations',
    items: ['Internal dashboards', 'Project management', 'Document handling', 'Reporting', 'Role-based access'],
  },
  {
    icon: Zap,
    title: 'Automation',
    items: ['Lead routing', 'CRM updates', 'Notifications', 'Follow-ups', 'Scheduling', 'Data synchronization', 'Workflow automation'],
  },
  {
    icon: Workflow,
    title: 'Integrations',
    items: ['REST APIs', 'Webhooks', 'CRM integrations', 'Database integrations', 'Third-party services'],
  },
  {
    icon: CreditCard,
    title: 'Payments',
    items: ['PayMongo', 'PayPal', 'Payment verification', 'Order and booking workflows', 'Payment notifications'],
  },
]

export interface TechCategory {
  category: string
  items: string[]
}

export const techStack: TechCategory[] = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind'] },
  { category: 'Backend & Data', items: ['Node.js', 'Python', 'PHP', 'GoLang', 'Firebase', 'Supabase', 'PostgreSQL', 'MySQL'] },
  { category: 'Automation & Integrations', items: ['Make.com', 'Zapier', 'Monday.com', 'API Integrations', 'Webhooks', 'CRM Integrations'] },
  { category: 'Payments', items: ['PayMongo', 'PayPal', 'Stripe', 'Wise', 'E-Wallets'] },
  { category: 'Platforms & Tools', items: ['WordPress', 'GitHub', 'Figma', 'Adobe Photoshop', 'Canva', 'Adobe Premiere', 'GoDaddy', 'Lovable'] },
]

export type DemoStatus = 'Live' | 'Preview'
export type DemoAccent = 'blue' | 'emerald' | 'amber' | 'rose'

export interface SystemDemoItem {
  title: string
  description: string
  icon: LucideIcon
  href: string
  status: DemoStatus
  accent: DemoAccent
}

export const systemDemos: SystemDemoItem[] = [
  {
    title: 'CRM System',
    description: 'Leads, customers, appointments, tasks, and reporting in one place.',
    icon: Users,
    href: '/systems/crm',
    status: 'Live',
    accent: 'blue',
  },
  {
    title: 'Booking Platform',
    description: 'Online scheduling and appointment management for service businesses.',
    icon: CalendarCheck,
    href: '/systems/booking',
    status: 'Preview',
    accent: 'emerald',
  },
  {
    title: 'Operations Platform',
    description: 'Centralized dashboards for tracking day-to-day business operations.',
    icon: LayoutDashboard,
    href: '/systems/operations',
    status: 'Preview',
    accent: 'amber',
  },
  {
    title: 'Automation System',
    description: 'Custom workflows that eliminate repetitive manual work.',
    icon: Zap,
    href: '/systems/automation',
    status: 'Preview',
    accent: 'rose',
  },
]

export interface ProcessStep {
  step: string
  description: string
}

export const processSteps: ProcessStep[] = [
  { step: 'Discover', description: 'Understand the business, the workflow, and where it breaks down.' },
  { step: 'Design', description: 'Map out the system before writing a line of code.' },
  { step: 'Build', description: 'Develop the website, application, or platform.' },
  { step: 'Integrate', description: 'Connect it to the tools the business already runs on.' },
  { step: 'Automate', description: 'Remove the manual steps wherever the workflow allows it.' },
  { step: 'Support', description: 'Stay involved after launch as the business changes.' },
]

export const teamRoles = ['Systems & Automation', 'Design and Marketing', 'Leads Management and Customer Service']

export const teamBlurb =
  'Vertex Systems is a small, technical team that designs and builds the software businesses run on. ' +
  'We work directly with each client from first conversation to launch, and stay involved after: ' +
  'no account managers, no handoffs.'
