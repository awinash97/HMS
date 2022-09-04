import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Logo/HospitalLogo.png'


const goto = [
  {
    path:'Admin',
    name:'Admin sidebar'
  },
  {
    path:'Employee',
    name:'Employee sidebar'
  },
]



export default function AdminSidebar({ children }) {
  return (
    <div className='sidebar-container' >
      <div className="logo-image">
        {/* <NavLink to='/'> */}
          <img src={logo} alt="Apurva Hospital" />
        {/* </NavLink> */}
      </div>
      <div style={{marginTop:'10%', padding:'10px 0px 10px 15%', fontSize:'20px'}}>Select anyone</div>
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
