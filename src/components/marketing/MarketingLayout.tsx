import { Outlet } from 'react-router-dom'
import MarketingFooter from './MarketingFooter'
import MarketingNav from './MarketingNav'

export default function MarketingLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <MarketingNav />
      <Outlet />
      <MarketingFooter />
    </div>
  )
}
