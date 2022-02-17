import React from 'react'
import s from './Post.module.css'

const Post = (props) => {

    return(
        <div className = {s.content}>

          <div className = {s.item}>
            <img src = "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7d/2e/92/7d2e9291-a8db-8e1c-c27f-93d8270d0a70/pr_source.png/800x800cc.jpg"></img>  
            {props.message}
          </div>
          <span>{props.likesCount}</span>
      </div>
    )
}

export default Post