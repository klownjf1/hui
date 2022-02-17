import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './navBar.module.css'

const Nav = (props) => {

   
    return(
        <nav className = {s.posts}>
          <div className = {`${s.item} ${s.size}`}>
            <NavLink to = "/profile" activeClassName = {s.activeLink}>Profile</NavLink>
          </div>
          <div className = {`${s.item} ${s.size}`}>
            <NavLink to = "/dialogs" activeClassName = {s.activeLink}>Messages</NavLink>
          </div>
          <div className = {`${s.item} ${s.size}`}>
             <NavLink to = "/users" activeClassName = {s.activeLink}>Users</NavLink>
          </div>
            <div className = {`${s.item} ${s.size}`}>
            <NavLink to = "/news" activeClassName = {s.activeLink}>News</NavLink>
          </div>
          <div className = {`${s.item} ${s.size}`}>
            <NavLink to = "/music" activeClassName = {s.activeLink}>Music</NavLink>
          </div>
          <div className = {`${s.item} ${s.size}`}>
            <NavLink to = "/settings" activeClassName = {s.activeLink}>Settings</NavLink>
          </div>          
      </nav>

    )
}

export default Nav