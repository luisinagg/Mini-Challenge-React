import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <ul>
        <li>
            <NavLink to ={'/home'}>Home</NavLink> 
            </li>
            <li>
            <NavLink to ={'/users'}>Users</NavLink> 
            </li>
            <li>
            <NavLink to ={'/createUsers'}>Create Users</NavLink>
            </li>
        </ul>
    </div>
  )
}
