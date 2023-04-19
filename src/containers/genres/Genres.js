import React from "react";
import "./Genres.css";
import genres from "../../genres.js";
import Genre from "../../components/genre/Genre";

const Genres = () => {
  return (
    <div className="genres-container">
      <h1 className="section-title">Genres</h1>
      <div className="line" />
      <div id="genres">
        {genres.map((genre) => (
          <Genre
            key={genre.id}
            url={genre.imageUrl}
            title={genre.genre}
            desc={genre.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Genres;
