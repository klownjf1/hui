import React from 'react'
import MyPostsContainer from './myPosts/myPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {updateStatus} from "../../Redux/profileReducer";

const Profile = (props) => {




    return(
      <div>
        <ProfileInfo profile ={props.profile} status = {props.status} updateStatus = {props.updateStatus} />
        <MyPostsContainer />

      </div>

    )
}

export default Profile