import {createSelector} from "reselect";


export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getToggleIsFollowingProgress = (state) => {
    return state.usersPage.toggleIsFollowingProgress
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}




const getUsersSelector = (state) => {
    return state.usersPage.users
}

/*export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true)
}*/

export const getUsers = createSelector(getUsersSelector, (u) => {
    return u.filter(u => true)
})