import React from 'react'
import {
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator

} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize, getToggleIsFollowingProgress,
    getTotalUsersCount,
    getUsers
} from "../../Redux/usersSelectors";

class UsersContainer extends React.Component {

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    onPageChanged={this.onPageChanged}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    follow={this.props.followThunkCreator}
                    unFollow={this.props.unfollowThunkCreator}
                    followingInProgress={this.props.followingInProgress}
                />
            }
        </>
    }

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)

    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

}

let mapStateToProps = (state) => {
    return {
        //users: getUsers(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        toggleIsFollowingProgress: getToggleIsFollowingProgress(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose(
    connect(mapStateToProps,
        {
            followThunkCreator,
            unfollowThunkCreator,
            setCurrentPage,
            toggleIsFollowingProgress,
            getUsers: getUsersThunkCreator
        }),
)(UsersContainer)