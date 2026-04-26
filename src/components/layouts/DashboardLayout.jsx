import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <>
      <div className="flex h-screen bg-muted/40">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default DashboardLayout