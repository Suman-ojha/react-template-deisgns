import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
const Layout = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <Sidebar />
      <div className="flex flex-1 flex-col p-4">
        <Header />
        <div className="flex-1 p-4 min-h-screen overflow-auto">{<Outlet />}</div>
      </div>

    </div>
  )
}

export default Layout