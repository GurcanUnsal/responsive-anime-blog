import React from "react";
import Post from "../../components/post/Post";
import "./Blog.css";
import posts from "../../posts";
import AddButton from "../../assets/posts/plus.png";

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="section-title">Our Blog</h1>
      <div className="line" />
      <div id="blog">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            url={post.imageUrl}
            title={post.postTitle}
            content={post.postContent}
          />
        ))}
        <div onClick={() => window.location = "/new-post"} className="add-new-post">
          <img src={AddButton} alt="add-btn" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
