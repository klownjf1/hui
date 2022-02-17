import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirectHOC} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
      dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) =>{

    return {

      /*  updateNewMessageBody: (body) => {
            dispatch(updateNewMessageTextActionCreator(body))
        },*/
        sendMessage: (newMessageText) => {

            dispatch(addMessageActionCreator(newMessageText))
        }

    }
}



/*let authRedirectComponent = withAuthRedirectHOC(Dialogs) // сидит в папке хок, хок нужен для !дедублирования кода, например редиректа



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);*/

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectHOC
)(Dialogs)