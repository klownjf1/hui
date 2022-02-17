import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'



    const DialogItem = (props) =>{
        return(
            <div className = {s.dialog + ' ' + s.active}>
                <NavLink to = { "/Dialogs/" + props.id } activeClassName = {s.activeLink}> {props.name} </NavLink>
            </div>
        )
    } 

    
      


export default DialogItem