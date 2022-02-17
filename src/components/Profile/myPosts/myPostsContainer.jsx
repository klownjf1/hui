import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer'
import MyPosts from './myPosts';
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return{
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: (newPost) => {

            dispatch(addPostActionCreator(newPost))
        }
    }

}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer