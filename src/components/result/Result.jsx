import React from "react";
import { Link } from "react-router-dom";
import wicked_movie from "../../assets/wicked_movie.jpeg";
import "./Result.css";

const Result = ({ title, year, poster, onClick }) => {
  return (
    <div className="card cursor" onClick={onClick}>
      <div className="card__image">
        <figure className="movie-poster--wrapper">
          <img src={poster} alt="" className="movie-poster" />
        </figure>
      </div>

      <h3 className="card__title gray-text">{title}</h3>

      <p className="card__subtitle gray-text">{year}</p>
    </div>
  );
};

export default Result;
