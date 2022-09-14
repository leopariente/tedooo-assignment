import React from "react";
import { PostProps } from "../../interface";
import "./PostHeader.scss"

// Part of the post component, displays data of the header of the post
const PostHeader = (props: PostProps) => {
    return(
        <div className="post-header-container">
            <div className="user-details">
                <img src={props.post.avatar} alt="avatar" />
                <h1 className="user-name">{props.post.username}</h1>
                <h1 className="shop-name">{props.post.shopName}</h1>
            </div>
            <p>{props.post.text}</p>
        </div>
    )
}

export default PostHeader;