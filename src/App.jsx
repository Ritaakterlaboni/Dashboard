
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/layouts/AuthLayout'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import DashboardLayout from './components/layouts/DashboardLayout'
import { ThemeProvider } from '@material-tailwind/react'


function App() {


  return (
    <>
    <ThemeProvider>
        <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

        </Route>
        <Route element={<DashboardLayout/>}>
          <Route path="/" element={<Dashboard />} />

        </Route>
      </Routes>
    </ThemeProvider>
    
    </>
  )
}

export default App
