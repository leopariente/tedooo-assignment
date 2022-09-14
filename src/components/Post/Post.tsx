import React from "react";
import { PostProps } from "../../interface";
import "./Post.scss"

const Post = (props: PostProps) => {
    return(
        <div className="post-container">
            <h1>{props.post.text}</h1>
        </div>
    )
}

export default Post;