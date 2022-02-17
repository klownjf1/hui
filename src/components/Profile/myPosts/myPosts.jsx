import React from 'react'
import s from './myPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControl/FormsControl";


const MyPosts = React.memo(props => {


    console.log('render')
    const PostsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addMessage = (values) => {
        props.addPost(values.newPost)
    }

    return (
        <div className={s.content}>

            <div className={s.postsBlock}>
                <h3>My Posts</h3>
            </div>

            <AddPostReduxForm onSubmit={addMessage}/>

            <div className={s.posts}>
                {PostsElement}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10)
const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPost" placeholder={"add post"}
                       validate={[requiredField, maxLength10]}/>
            </div>

            <div className={s.newPost}>
                <button> Post</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm({form: "addPost"})(addPostForm)


export default MyPosts