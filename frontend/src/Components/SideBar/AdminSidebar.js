import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Logo/HospitalLogo.png'


const goto = [
  {
    path:'OPD',
    name:'OPD Data'
  },
  {
    path:'Dressing',
    name:'Dressing Data'
  },
  {
    path:'Lab',
    name:'Lab Data'
  },
  {
    path:'Admission',
    name:'Admission Data'
  },
  {
    path:'Details',
    name:'Your details'
  },
  {
    path:'/',
    name:'Logout'
  }
]



export default function AdminSidebar({ children }) {
  return (
    <div className='sidebar-container' >
      <div className="logo-image">
        {/* <NavLink to='/'> */}
          <img src={logo} alt="Apurva Hospital" />
        {/* </NavLink> */}
      </div>
      <section>
        {goto.map((toRoute) => (
          <NavLink to={toRoute.path} key={toRoute.name} className='nav-link' >
            <div className='link_text'>{toRoute.name}</div>
          </NavLink>
        ))}
      </section>
      <div className='copywrite'>
        <h5>Created By : Awinash Chawan </h5>
      </div>

      <main>{children}</main>
    </div>
  )
}
