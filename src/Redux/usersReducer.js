import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objectHelper";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'



let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed:true})
                /*users: state.users.map(user =>  {
                    if (user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user
                }),*/
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed:false})
                /*users: state.users.map(user =>  {
                    if (user.id === action.userId){
                        return {...user, followed: true }
                    }
                    return user
                }),*/
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return{
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]:
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default: {
            return state
        }
    }
}

export const followSuccess = (userId) => { return { type: FOLLOW, userId }}
export const unFollowSuccess = (userId) => { return { type: UNFOLLOW, userId }}
export const setUsers = (users) => {return {type: SET_USERS, users} }
export const setCurrentPage = (currentPage) => {return {type: SET_CURRENT_PAGE, currentPage}}
export const setTotalUsersCount = (totalUsersCount) => {return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}}
export const toggleIsFetching = (isFetching) => {return { type: TOGGLE_IS_FETCHING, isFetching}}
export const toggleIsFollowingProgress = (isFetching, userId) => { return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}}



export const getUsersThunkCreator =  (currentPage, pageSize)  => async (dispatch) => {

    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))

    let data = await usersAPI.getUsers(currentPage, pageSize) // getUsers с папки апи, data приходит с гет запроса(смотри в папке апи)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(toggleIsFetching(false))


}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId))

    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const followThunkCreator = (userId) => async (dispatch) => {
    //let apiMethod = usersAPI.postFollowUser.bind(usersAPI)
    //let actionCreator = followSuccess
    followUnfollowFlow(dispatch, userId, usersAPI.postFollowUser.bind(usersAPI), followSuccess)
}

export const unfollowThunkCreator = (userId) => async (dispatch) => {
    //let apiMethod = usersAPI.deleteFollowUser.bind(usersAPI)
    //let actionCreator = unFollowSuccess
    followUnfollowFlow(dispatch, userId, usersAPI.deleteFollowUser.bind(usersAPI), unFollowSuccess)
}

export default usersReducer