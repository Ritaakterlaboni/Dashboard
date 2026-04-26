
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/layouts/AuthLayout'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import DashboardLayout from './components/layouts/DashboardLayout'
import { ThemeProvider } from '@material-tailwind/react'
import Products from './components/pages/Products'
import { Toaster } from 'react-hot-toast'
import Orders from './components/pages/Orders'
import Settings from './components/pages/Settings'
import Category from './components/pages/Category'
import Profile from './components/pages/Profile'


function App() {


  return (
    <>
      <Toaster />
      <ThemeProvider>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </ThemeProvider>

    </>
  )
}

export default App
