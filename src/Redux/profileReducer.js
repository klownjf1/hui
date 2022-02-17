import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SER-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE-POST'


let initialState = {
    
        posts: [
            {id: 1, message: 'hiqweqwe', likesCount: 12},
            {id: 2, message: 'bye', likesCount: 0}
        ],
        newPostText: '',
        profile: null,
        status: ""
    }



const profileReducer = (state = initialState, action) => {


    switch(action.type){
        case ADD_POST: {

            let newPost = {
                id: 5,
                message: action.newPost,
                likesCount: 4
            }

            return  {
                ...state,
                posts: [...state.posts, newPost],
            }

        }

        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return{
                ...state,
                status: action.status
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        }

            default: {
            return state
        }
    }

    
  
}
export const addPostActionCreator = (newPost) => {
    return {
        type: ADD_POST,
        newPost
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const deletePostActionCreator = (id) => {
    return{
        type: DELETE_POST,
        id
    }
}


export const getUsersProfileThunkCreator = (userId) => async (dispatch) =>{

    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data))

}

export const getStatus = (userId) => async (dispatch) =>{

    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))


}

export const updateStatus = (status) => async (dispatch) => {

    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }


}

export default profileReducer