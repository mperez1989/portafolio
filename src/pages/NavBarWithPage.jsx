import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/shared/NavBar'

const NavBarWithPage = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
    
  )
}

export default NavBarWithPage