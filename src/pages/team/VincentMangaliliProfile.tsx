import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { accentClasses, Card } from '../../components/ui'

const skillGroups = [
  {
    category: 'Automation & Operations',
    items: ['Workflow automation', 'CRM management', 'Process optimization', 'SOP documentation', 'Operational support'],
  },
  {
    category: 'Automation Platforms',
    items: ['Monday.com', 'Make.com', 'Zapier'],
  },
  {
    category: 'Full-Stack Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Python', 'Firebase'],
  },
  {
    category: 'Development & Design Tools',
    items: ['Visual Studio Code', 'WordPress', 'Figma', 'Adobe Photoshop', 'GitHub'],
  },
]

const tools = ['Google Workspace', 'Microsoft 365', 'Slack', 'Microsoft Teams', 'Zoom', 'Trello']

const experience = [
  {
    title: 'Freelance Automation & Full-Stack Developer',
    period: 'Q2 2025 – Present',
    bullets: [
      'Developed workflow automations using Make.com, Zapier, and Monday.com to streamline operational and administrative processes.',
      'Built and managed automation pipelines integrating forms, notifications, scheduling systems, and CRM workflows.',
      'Developed responsive full-stack web applications using React.js, Node.js, Firebase, HTML, CSS, and JavaScript.',
      'Built and deployed business websites, booking systems, and operational platforms for clients.',
      'Created SOP documentation and workflow systems to improve onboarding and operational consistency.',
    ],
  },
  {
    title: 'Virtual Assistant – Web Development & Operations Support',
    period: 'Q3 2023 – Q1 2024',
    bullets: [
      'Supported business operations through workflow coordination, documentation, and administrative management.',
      'Assisted with CMS updates, content organization, and digital asset management.',
      'Developed SOPs and operational documentation to improve onboarding and internal process efficiency.',
    ],
  },
  {
    title: 'Affiliate Marketing & Client Relations',
    period: 'Q1 2024 – Q3 2024',
    bullets: [
      'Maintained client communication and relationship management with international customers.',
      'Consistently exceeded sales performance targets while improving customer retention.',
    ],
  },
]

const projects = [
  {
    title: 'Europe-Based Hair Transplant & Hair Industry Platforms',
    description: 'Developed and supported websites, booking systems, and operational workflows for hair transplant and hair industry businesses serving European markets.',
  },
  {
    title: 'North American Construction & Dental Clinic Projects',
    description: 'Supported digital projects for construction companies and dental clinics across North America, including website support and workflow organization.',
  },
  {
    title: 'Workflow Automation Systems',
    description: 'Built operational workflows integrating CRM systems, scheduling tools, forms, and notifications using Make.com and Zapier.',
  },
  {
    title: 'Full-Stack Library Management System',
    description: 'Developed a full-stack resource management application using Firebase, JavaScript, HTML, and CSS.',
  },
  {
    title: 'E-Commerce Website Development',
    description: 'Designed and deployed responsive e-commerce websites optimized for user experience and performance.',
  },
]

export default function VincentMangaliliProfile() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Link
        to="/team"
        className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      >
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" /> Back to the Team
      </Link>

      <div className="mt-6 flex items-center gap-4">
        <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-bold ${accentClasses.blue}`}>
          VM
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100">Vincent Andrew Mangalili</h1>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-slate-400">Systems &amp; Automation</p>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
        Automation Specialist · Operations Specialist · Full-Stack Developer
      </p>

      <Card className="mt-6">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">About</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          Automation and Operations Specialist with experience in workflow automation, CRM management, business
          operations support, and full-stack web development. Skilled in building scalable automations using
          Make.com, Zapier, and Monday.com to improve operational efficiency and streamline internal processes.
          Experienced in developing responsive web applications, supporting digital operations, and implementing
          workflow systems across multiple platforms.
        </p>
        <a
          href="https://vincenzohashiro.github.io/Personal-Website/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400"
        >
          Personal Website <ExternalLink size={14} />
        </a>
      </Card>

      <div className="mt-10">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Technical Skills</p>
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{group.category}</p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-slate-700 dark:text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Card className="mt-8">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Collaboration Tools</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </Card>

      <div className="mt-10">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Professional Experience</p>
        <div className="mt-4 space-y-6">
          {experience.map((role) => (
            <div key={role.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{role.title}</p>
                <p className="text-xs text-slate-400">{role.period}</p>
              </div>
              <ul className="mt-2 space-y-1.5">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    · {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Projects</p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title}>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{project.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Education</p>
          <div className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <div>
              <p className="font-medium text-slate-800 dark:text-slate-200">National University Dasmariñas</p>
              <p className="text-xs text-slate-400">BS Information Technology · Expected 2026</p>
              <p className="mt-1 text-xs">Best Website Award, STI Software Fair · Academic Excellence Recognition</p>
            </div>
            <div>
              <p className="font-medium text-slate-800 dark:text-slate-200">STI Colleges</p>
              <p className="text-xs text-slate-400">Senior High School, ICT Strand · 2020 – 2022</p>
              <p className="mt-1 text-xs">Graduated with Academic Excellence</p>
            </div>
          </div>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Certifications</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>DICT Basic Cybersecurity Certificate</li>
            <li>Google Ads AI Marketing</li>
          </ul>
        </Card>
      </div>

      <Card className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Want to work with the team?</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Reach out through Vertex Systems, no separate handoffs.</p>
        </div>
        <Link
          to="/#contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-md hover:shadow-blue-600/30 active:scale-95"
        >
          Start a Project
        </Link>
      </Card>
    </div>
  )
}
