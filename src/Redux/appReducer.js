import {getAuthUserDataThunkCreator} from "./authReducer";

const SET_INITIALIZED_STATE = 'SET-INITIALIZED-STATE'

let initialState = {
   initialized: false
}

const authReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_INITIALIZED_STATE:
            return{
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => { return {type: SET_INITIALIZED_STATE}}

export const initializeAppThunkCreator = () => (dispatch) =>{
    let promise = dispatch(getAuthUserDataThunkCreator());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default authReducer

