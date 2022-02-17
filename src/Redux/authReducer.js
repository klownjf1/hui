import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data, // теперь данные будут не в state а в data, так как все данные лежат в екшене мы можем так сделать
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login, isAuth}
    }
}

export const getAuthUserDataThunkCreator = () => async (dispatch) => {

    let response = await authAPI.me()
    if (response.resultCode === 0) {
        //let {id, login, email} = data.data
        dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login, true))
    }

}
export const LoginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator())
    } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        let action = stopSubmit("login", {_error: message}) // в кавычках узказываем название формы которую хотим стопнуть, а потом укзаываем проблемное поле(сообщение об ошибке)
        dispatch(action)
    }

}
export const LogoutThunkCreator = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}




export default authReducer

