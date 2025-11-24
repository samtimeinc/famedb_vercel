import React from "react";
import "./DisplayTitle.css";

const DisplayTitle = ({ details }) => {
  return (
    <div className="display-title">
      <div className="movie__header">
        <figure className="movie__poster--wrapper">
          <img
            src={details.Poster}
            alt={details.Title}
            className="movie__poster"
          />
        </figure>

        <div className="movie__info">
          <h1 className="movie__title gray-text">{details.Title}</h1>
          <p className="gray-text">Released: {details.Released}</p>
          <p className="gray-text">Rating: {details.imdbRating}</p>
          <p className="gray-text">{details.Awards}</p>
        </div>
      </div>

      <div className="movie__summary">
        <h2 className="gray-text">Summary</h2>

        <p className="gray-text">{details.Plot}</p>
        <p className="gray-text">Directed by: {details.Director}</p>
        <p className="gray-text">Starring: {details.Actors}</p>
      </div>
    </div>
  );
};

export default DisplayTitle;
