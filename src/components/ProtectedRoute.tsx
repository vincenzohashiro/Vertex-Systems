import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'

export default function ProtectedRoute() {
  const { user, loading, configured } = useAuth()
  const location = useLocation()

  if (!configured) {
    return <Outlet />
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50 text-sm text-slate-400 dark:bg-slate-950">
        Loading...
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/systems/crm/login" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}
