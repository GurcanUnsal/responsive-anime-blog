import React from "react";
import "./PostPage.css";
import Navbar from "../../components/navbar/Navbar";
import posts from "../../posts";

const PostPage = () => {
  return (
    <div className="post-page">
      <Navbar />
      <div className="post-container">
        <h1 className="post-page-title post-page-component">
          {posts[localStorage.getItem("currentPost")].postTitle}
        </h1>
        <img
          className="post-page-img post-page-component"
          src={posts[localStorage.getItem("currentPost")].imageUrl}
          alt="post-img"
        />
        <p className="post-page-content post-page-component">
          {posts[localStorage.getItem("currentPost")].postContent}
        </p>
      </div>
    </div>
  );
};

export default PostPage;
