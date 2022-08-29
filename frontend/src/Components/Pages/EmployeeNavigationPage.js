import React from 'react'
import { Outlet } from 'react-router-dom'
import EmployeeSidebar from '../SideBar/EmployeeSidebar'


// this component is used just to route inside Employee components using react-router-dom V6
// Outlet is a concept in react-router-dom for nesting routes
// Inside 'EmployeeSidebar' we define all our admin side links
export default function EmployeePage() {
  return (
    <div className='main-container'>
        <EmployeeSidebar />
        <Outlet />
    </div>
  )
}
