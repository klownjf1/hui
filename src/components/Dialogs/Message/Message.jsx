import React from 'react'
import s from './../Dialogs.module.css'




    const MessageItem = (props) =>{
        return(
            <div className = {s.message}>
                <div className = {s.message}>{props.message}</div>
            </div>
            
            

        )
    }


export default MessageItem