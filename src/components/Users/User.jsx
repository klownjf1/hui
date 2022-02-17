import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unFollow, follow}, ...props) => {
    return (

        <span className={s.text_color_page}>
            <NavLink to={`/profile/` + user.id}>
                <div>
                    <img
                        src={user.photos.small != null ? user.photos.small : "https://codespeedy.com/wp-content/uploads/2018/12/avatar1.png"}
                        width={'90px'}>
                    </img>
                </div>
            </NavLink>
            <div>
                {
                    user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unFollow(user.id)
                                }}> unfollow
                        </button> :
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}> follow
                        </button>
                }
            </div>
            <div>{user.name} </div>
            <div>{"user.location.city"} </div>
            <div>{"user.location.country"} </div>
            <div>{user.status} </div>

        </span>
    )


}

export default User