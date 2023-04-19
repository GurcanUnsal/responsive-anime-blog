import React from "react";
import "./Post.css";

const Post = (props) => {
  const handleClick = () => {
    localStorage.setItem("currentPost", props.id);
    window.location = "/post";
  }

  return (
    <div onClick={handleClick} className="post">
      <div className="post-img">
        <img src={props.url} alt="post-img" />
      </div>
      <div className="post-ingredients">
        <h1>{props.title}</h1>
        <p>{props.content.substr(0, 50) + "..."}</p>
      </div>
    </div>
  );
};

export default Post;
