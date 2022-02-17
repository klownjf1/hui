// import React from 'react';
// import s from './Users.module.css'
// import * as axios from "axios";
//
// let Users = (props) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//                 props.setUsers(response.data.items)
//             });
//         }
//     }
//
//
//
//     return (
//
//         <div className = "user">
//             <button onClick= { () => getUsers() } >Get Users</button>
//             {
//                 props.users.map(user => {
//                     console.log(user.photos)
//                     return(
//
//                         <span className = {s.text_color_page} key = {user.id}>
//                             <div>
//                                 <img src = {user.photos.small != null ? <user className="photos small"></user>: "https://codespeedy.com/wp-content/uploads/2018/12/avatar1.png" } width={'40px'}></img>
//                             </div>
//                             <div>
//                                 {
//                                     user.followed ?
//                                     <button onClick = {() => { props.follow(user.id)}}> unfollow </button>:
//                                     <button onClick = {() => { props.unFollow(user.id)}}> follow </button>
//                                 }
//                             </div>
//                             <div>{user.name} </div>
//                             <div>{"user.location.city"} </div>
//                             <div>{"user.location.country"} </div>
//                             <div>{user.status} </div>
//
//                         </span>
//
//
//                     )
//                 })
//             }
//         </div>
//     )
// }
//
//
// export default Users