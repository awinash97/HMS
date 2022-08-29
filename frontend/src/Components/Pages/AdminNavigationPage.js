import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../SideBar/AdminSidebar'


// this component is used just to route inside admin components using react-router-dom V6
// Outlet is a concept in react-router-dom for nesting routes
// Inside 'AdminSidebar' we define all our admin side links
export default function AdminNavigationPage() {
  return (
    <div className='main-container'>
        <AdminSidebar />
        <Outlet />
    </div>
  )
}
