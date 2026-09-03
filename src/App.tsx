import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import MarketingLayout from './components/marketing/MarketingLayout'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './lib/AuthContext'
import Home from './pages/marketing/Home'
import ZelvariaCaseStudy from './pages/marketing/ZelvariaCaseStudy'
import BookingStub from './pages/systems/BookingStub'
import OperationsStub from './pages/systems/OperationsStub'
import AutomationStub from './pages/systems/AutomationStub'
import Dashboard from './pages/Dashboard'
import Leads from './pages/Leads'
import Customers from './pages/Customers'
import Appointments from './pages/Appointments'
import Tasks from './pages/Tasks'
import Notes from './pages/Notes'
import ActivityPage from './pages/ActivityPage'
import Reports from './pages/Reports'
import Login from './pages/Login'

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/work/zelvaria" element={<ZelvariaCaseStudy />} />
            <Route path="/systems/booking" element={<BookingStub />} />
            <Route path="/systems/operations" element={<OperationsStub />} />
            <Route path="/systems/automation" element={<AutomationStub />} />
          </Route>

          <Route path="/systems/crm/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/systems/crm" element={<Dashboard />} />
              <Route path="/systems/crm/leads" element={<Leads />} />
              <Route path="/systems/crm/customers" element={<Customers />} />
              <Route path="/systems/crm/appointments" element={<Appointments />} />
              <Route path="/systems/crm/tasks" element={<Tasks />} />
              <Route path="/systems/crm/notes" element={<Notes />} />
              <Route path="/systems/crm/activity" element={<ActivityPage />} />
              <Route path="/systems/crm/reports" element={<Reports />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  )
}
