import React from "react";
import s from './FormsControl.module.css'
import {requiredField} from "../../../utils/validators/validator";
import {Field} from "redux-form";


// ФАЙЛ НУЖЕН ДЛЯ СОЗДАНИЯ СВОЕГО INPUT ИЛИ TEXTAREA ДЛЯ ТОГО ЧТОБЫ ВЫСВЕЧИВАТЬ ОШИБКИ

/*
// для того чтобы каждый раз не присать props.meta через дуструктор в передаче параметров добивим этот параметр мета

export const Textarea = (props, meta) => {
    let hasError = meta.touched && meta.error
    return (
        <div className={s.form_control + " " + (hasError? s.error: '')}>
            <textarea {...props} />
            {hasError? <span>{meta.error}</span>: ''}
        </div>
    )
}
// в пропсах сидит тип поля и плейсхолдер, в мета сидит параметры по типо touched, visited и т.д., а в input имя поля
export const Input = ({meta, input, ...props}) => {
    console.log(input)
    console.log(props)
    let hasError = meta.touched && meta.error
    return (
        <div className={s.form_control + " " + (hasError? s.error: '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError? <span>{meta.error}</span>: ''}
        </div>
    )
}*/

const FormControl = ({input, meta: {touched, error},children}) => {

    const hasError = touched && error
    return(
        <div className={s.form_control + " " + (hasError? s.error: '')}>
            <div>
                {children}
            </div>
            {hasError? <span>{error}</span>: ''}
        </div>
    )
}


export const Textarea = (props) =>{

   const {input, meta, child, ...restProps} = props
   return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
}


export const Input = (props) =>{
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}

export const createField = (placeholder, name, validators, component, props) => (
    <Field
        placeholder={placeholder}
        name ={name}
        component={component}
        validate = {validators}
        {...props}
         />
)
