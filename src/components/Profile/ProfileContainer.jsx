import React from 'react'
import Profile from './Profile';
import {connect} from "react-redux";
import {getStatus, getUsersProfileThunkCreator, setUserProfile, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorisedUserId

            if (!userId) {
                this.props.history.push("/login") // пушим в юрл login
            }
        }

        this.props.getUsersProfileThunkCreator(userId)
        this.props.getStatus(userId)

    }
    render () {
        return(
            <div>
                <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({

    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

//let authRedirectComponent = withAuthRedirectHOC(ProfileContainer) // сидит в папке хок, хок нужен для !делублирования кода, например редиректа

/*
let withUrlDataContainerComponent = withRouter(authRedirectComponent) //когда нужно взять адресную строку создаём таким образом новую компоненту и передаём через connect

export default connect(mapStateToProps, {setUserProfile, getUsersProfileThunkCreator})(withUrlDataContainerComponent)*/

export default compose(
    connect(mapStateToProps, {setUserProfile, getUsersProfileThunkCreator, getStatus, updateStatus}),
    withRouter ,
    //withAuthRedirectHOC
)(ProfileContainer)

