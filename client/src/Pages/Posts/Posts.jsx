import React, { useEffect, useState } from "react";
import "./Posts.css";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
    const {data} = await axios
    }
  });

  return (
    <div className="posts">
      <div className="container">
        <h1>Posts</h1>
      </div>
    </div>
  );
};

export default Posts;
