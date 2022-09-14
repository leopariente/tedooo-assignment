import React, { useEffect, useState } from "react";
import { PostProps } from "../../interface";
import PostHeader from "../PostHeader/PostHeader";
import PostFooter from "../PostFooter/PostFooter";
import "./Post.scss";

// Post component, show all the relevant data to the post.
const Post = (props: PostProps) => {
  const [images, setImages] = useState<string[]>();

  // Gets the first 2 images of the post, and sets the image state.
  useEffect(() => {
    let images = [];
    for (let i = 0; i < props.post.images.length; i++) {
      if (images.length < 2) {
        images.push(props.post.images[i]);
      }
    }
    setImages(images);
  }, []);

  return (
    <div className="post-container">
      <PostHeader post={props.post} />
      <div className="image-div">
      {images?.map((image: string) => (
        <img src={image} alt="image" />
      ))}
      </div>
      <PostFooter post={props.post}/>
    </div>
  );
};

export default Post;
