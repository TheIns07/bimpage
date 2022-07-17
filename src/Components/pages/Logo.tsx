import React from 'react'
import './styles/pages.css'
import { NavLink } from 'react-router-dom'
export const Logo = () => {
  return (
    <div className='shapeLogo'>
      <NavLink to = "/">
      <img src={require('../../Images/LogoBIM.png')} alt='fondo de abg' ></img>
      </NavLink>
      
    </div>
  )
}
