import React from "react";
import Paginator from "../common/Paginator/Pagintor";
import User from "./User";

let Users = (props) => {

    return (
        <div className="user">
            {
                props.users.map(user => <User key={user.id}
                                              user={user}
                                              followingInProgress={props.followingInProgress}
                                              follow = {props.follow}
                                              unFollow = {props.unFollow} />
                )
            }
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged} currentPage = {props.currentPage}/>
        </div>
    )
}

export default Users