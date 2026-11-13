import CitizenRegister from './Pages/Login/CitizenRegister.jsx'
import AdminLogin from './Pages/Login/AdminLogin.jsx'
import StaffLogin from './Pages/Login/StaffLogin.jsx'

const App = () => {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === '/admin-login') return <AdminLogin />
  if (path === '/staff-login') return <StaffLogin />
  return <CitizenRegister />
}

export default App
