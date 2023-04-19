import React from "react";
import "./Genre.css";

const Genre = (props) => {
  return (
    <div className="genre">
      <div className="genre-img">
        <img src={props.url} alt="genre-img" />
      </div>
      <div className="genre-ingredients">
        <h1 className="genre-title">{props.title}</h1>
        <p className="genre-desc">{props.desc}</p>
      </div>
    </div>
  );
};

export default Genre;
