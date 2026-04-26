
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
import Userlist from './components/pages/Userlist'
import CategoryList from './components/pages/CategoryList'
import ProductList from './components/pages/Productlist'



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
            <Route path="/categorylist" element={<CategoryList />} />
            <Route path="/product" element={<Products />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Userlist />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </ThemeProvider>

    </>
  )
}

export default App
