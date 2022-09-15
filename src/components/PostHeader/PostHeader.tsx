import React, { useEffect, useState } from "react";
import moment from "moment";
import { PostProps } from "../../interface";
import "./PostHeader.scss";

// Part of the post component, displays data of the header of the post
const PostHeader = (props: PostProps) => {
  const [timeAgo, setTimeAgo] = useState("");

  // Helper function that gets the relative time using moments library
  const getRelativeTime = () => {
    const formattedTime = props.post.date.split("T")[0].split("-").join("");
    setTimeAgo((moment(formattedTime, "YYYYMMDD").fromNow()));
  };

  useEffect(() => {
    getRelativeTime();
  });

  return (
    <div className="post-header-container">
      <div className="user-details">
        <img src={props.post.avatar} alt="avatar" />
        <div className="column">
          <h1 className="user-name">{props.post.username}</h1>
          <h1 className="shop-name">{props.post.shopName}</h1>
          <p className="time">{timeAgo}</p>
        </div>
      </div>
      <p>{props.post.text}</p>
    </div>
  );
};

export default PostHeader;
