import React from 'react'
import './Comment.css'
import user from '../assets/images/user.png'

const Comment = (props) =>{
    return(
        <div class="commentBox">
            <div id="profile"><img src={user} width="50px"/></div>
            <div id="text">{props.message.text}</div>
        </div>
    )
}
export default Comment
