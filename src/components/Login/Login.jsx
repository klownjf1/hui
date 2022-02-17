import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validators/validator";
import {connect} from "react-redux";
import authReducer, {LoginThunkCreator, LogoutThunkCreator} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControl/FormsControl.module.css'

const LoginForm = ({handleSubmit, error})=> { // замена пропсам

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    {createField("email", "email", [requiredField], Input)}
                </div>
                <div>
                    {createField("pass", "password", [requiredField], Input, {type: "password"} )}
                </div>
                <div>
                    {createField(null, "rememberMe", [], Input, {type: "checkbox"} )} rememberMe
                </div>


                {error? <div className = {s.form_summary_error}>{error}</div>:''}

                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.LoginThunkCreator(formData.email, formData.password, formData.rememberMe)

    }

    if (props.isAuth === true) {
        return <Redirect to={"/profile"}/>
    }
       return (
            <div>
                <h1>login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        )

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LoginThunkCreator})(Login)