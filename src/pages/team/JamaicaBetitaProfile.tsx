import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { accentClasses, Card } from '../../components/ui'

const skillGroups = [
  {
    category: 'General Virtual Assistant',
    items: ['Email management', 'Calendar management', 'Research & data entry', 'Task organization', 'Online research and information gathering'],
  },
  {
    category: 'Social Media Management',
    items: ['Scheduling posts', 'Creating basic graphics', 'Content creation', 'Trend spotting', 'Multi-platform management', 'Video editing (vlogs, reels, clips)'],
  },
  {
    category: 'Graphic Design',
    items: ['Digital products', 'Logo design', 'Brochures', 'Infographics'],
  },
  {
    category: 'Online Tutoring / Assistance',
    items: ['Helping with basic academic tasks or lessons', 'Teaching language or soft skills'],
  },
  {
    category: 'Transcription & Captioning',
    items: ['Transcribing audio files', 'Creating captions for videos'],
  },
]

const tools = [
  'Google Workspace',
  'Canva',
  'CapCut',
  'ChatGPT',
  'Notion',
  'Shopify',
  'Pinterest',
]

const platforms = ['Instagram', 'Facebook', 'WhatsApp', 'Discord', 'Messenger', 'Telegram']

export default function JamaicaBetitaProfile() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Link
        to="/team"
        className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      >
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" /> Back to the Team
      </Link>

      <div className="mt-6 flex items-center gap-4">
        <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-bold ${accentClasses.emerald}`}>
          JB
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100">Jamaica Faith Betita</h1>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-slate-400">Design &amp; Marketing</p>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-lg italic leading-relaxed text-slate-600 dark:text-slate-400">
        &ldquo;Your virtual assistant, focused on making your success my priority.&rdquo;
      </p>

      <Card className="mt-8">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">About</p>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          <p>
            Jamaica is a virtual assistant and creative from the Philippines with a strong foundation in organization,
            communication, and creative tools. Over the past four years she's built her workflow around Google Workspace,
            and more recently, web design and Canva, with hands-on experience in CapCut for editing reels and video clips,
            social media management, and administrative support.
          </p>
          <p>Clients describe her as positive, driven, and eager to explore new possibilities.</p>
        </div>
      </Card>

      <div className="mt-8">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Skill &amp; Expertise</p>
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

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Tools</p>
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
        <Card>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Platforms</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {platform}
              </span>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
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
