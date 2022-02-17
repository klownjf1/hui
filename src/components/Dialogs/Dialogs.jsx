import React from 'react'
import s from './Dialogs.module.css'
import MessageItem from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
    import {maxLengthCreator, requiredField} from "../../utils/validators/validator";





const Dialogs = (props) => {

    let state = props.dialogsPage
    
    const DialogsElements = state.dialogsData
    .map(d => <DialogItem name = {d.name} id = {d.id} key = {d.id}/> )
    const messagesElement = state.messagesData
    .map(m => <MessageItem message = {m.message} key = {m.id}/>)
    
    


    /*const onNewMessageChange = (e) => {
        let body = e.target.value      
        props.updateNewMessageBody(body)
    }  */

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
        console.log()
    }


    return(         
        <div className = {s.dialogs}>

            <div className = {s.dialogs_item}> 
                { DialogsElements }                
            </div>

            <div className = {s.messages}>
                {messagesElement}
            </div>
            <AddMessageFormRedux onSubmit = {addNewMessage}/>
        </div>
    )    
}
const maxLength20 = maxLengthCreator(20)
const AddMessageForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name = "newMessageBody" placeholder={"enter mess"} validate={[requiredField, maxLength20]}/>
            <button>add post</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "addMessageForm"})(AddMessageForm)

export default Dialogs