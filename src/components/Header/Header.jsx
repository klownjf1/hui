import React from 'react'
import './../../App.css';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return(
        <header className = {s.header}>
            <img src = 'https://www.oasdom.com/wp-content/uploads/2018/01/oasdom.com-6-free-logo-design-online.jpg' alt = ''/>
            <div className={s.login_block}>
                {
                    props.isAuth?
                        <div>{props.login} - <button onClick={props.LogoutThunkCreator}>logout</button></div> :
                        <NavLink to = {'/login'}> Login </NavLink>
                }
            </div>
        </header>
    )
}

export default Header