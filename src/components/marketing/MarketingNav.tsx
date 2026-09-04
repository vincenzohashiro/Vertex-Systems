import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import VertexMark from '../VertexMark'

const navItems = [
  { id: 'what-we-build', label: 'What We Build' },
  { id: 'work', label: 'Work' },
  { id: 'flagship', label: 'Flagship' },
  { id: 'systems', label: 'Systems' },
  { id: 'about', label: 'About' },
]

export default function MarketingNav() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lastPathname, setLastPathname] = useState(pathname)

  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goToSection = (id: string) => {
    setMenuOpen(false)
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header
      className={`sticky top-0 z-20 border-b bg-white/80 backdrop-blur-md transition-shadow dark:bg-slate-950/80 ${
        scrolled ? 'border-slate-200 shadow-sm dark:border-slate-800' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2">
          <VertexMark className="h-8 w-auto transition-transform duration-200 group-hover:scale-105" />
          <span className="font-display text-base font-bold text-slate-900 dark:text-slate-100">Vertex Systems</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goToSection(item.id)}
              className="group relative rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              {item.label}
              <span className="absolute inset-x-3 -bottom-px h-0.5 origin-left scale-x-0 rounded-full bg-blue-500 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </button>
          ))}
          <Link
            to="/team"
            className="group relative rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            Team
            <span className="absolute inset-x-3 -bottom-px h-0.5 origin-left scale-x-0 rounded-full bg-blue-500 transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => goToSection('contact')}
            className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-200 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-600/30 active:scale-95 sm:inline-flex"
          >
            Start a Project
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900 lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-[max-height] duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-950 lg:hidden ${
          menuOpen ? 'max-h-80' : 'max-h-0 border-t-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goToSection(item.id)}
              className="rounded-md px-2 py-2.5 text-left text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/team"
            onClick={() => setMenuOpen(false)}
            className="rounded-md px-2 py-2.5 text-left text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"
          >
            Team
          </Link>
          <button
            onClick={() => goToSection('contact')}
            className="mt-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-500"
          >
            Start a Project
          </button>
        </nav>
      </div>
    </header>
  )
}
