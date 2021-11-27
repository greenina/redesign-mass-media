import React from 'react'
import './Comment.css'

const Comment = (props) =>{
    return(
        <div class="commentBox">
            <img src="../assets/images/user.png"/>
            {props.message.text}
        </div>
    )
}
export default Comment
