import React, { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Post as TypePost } from "../../interface";
import Post from "../Post/Post";
import "./List.scss";

// List component, represents a list of all tedooo posts fetched from api.
const List = () => {
  const [posts, setPosts] = useState<TypePost[]>([]);
  const [lastPostIndex, setLastPostIndex] = useState(0);

  // Callback function when scrolls to the bottom
  const loadMorePosts = () => {
    if (lastPostIndex < posts?.length) {
      setLastPostIndex(lastPostIndex + 6);
    }
  };

  // Fetches data 
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dev.tedooo.com/feed.json");
      const data = await response.json();
      setPosts(data.data);
    }
    fetchData();
  }, []);

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMorePosts}
      hasMore={true || false}
    >
      <div className="list">
      {posts.map((post: TypePost, i) => {
        if (i < lastPostIndex) {
          return <Post post={post} key={post.id} />;
        }
      })}
      </div>
    </InfiniteScroll>
  );
};

export default List;
