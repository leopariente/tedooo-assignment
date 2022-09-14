import React, { useEffect, useState } from "react";
import { Post as TypePost } from "../interface";
import Post from "./Post/Post"

// List component, represents a list of all tedooo posts fetched from api.
const List = () => {
  const [posts, setPosts] = useState<TypePost[]>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dev.tedooo.com/feed.json");
      const data = await response.json();
      setPosts(data.data);
    }
    fetchData();
  }, []);

  return (
    <div>
    {posts?.map((post: TypePost) => (
        <Post post={post}/>
    ))}
  </div>
  )
};

export default List;
