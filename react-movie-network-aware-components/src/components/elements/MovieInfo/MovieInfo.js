
import React from "react";
import FontAwesome from "react-fontawesome";

import MovieThumb from "../MovieThumb/MovieThumb";
import ConnectionAwareBgDiv from "../../../hoc/ConnectionAwareBgDiv/ConnectionAwareBgDiv";
import "./MovieInfo.css";

const MovieInfo = ({ movie, directors }) => {
  return (
    <ConnectionAwareBgDiv className="rmdb-movieinfo" backdropPath={movie.backdrop_path}>
      <div className="rmdb-movieinfo-content">
        <div className="rmdb-movieinfo-thumb">
          <MovieThumb
            image={movie.poster_path}
            clickable={false} />
        </div>
        <div className="rmdb-movieinfo-text">
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <h3>IMDB RATING</h3>
          <div className="rmdb-rating">
            <meter
              min="0"
              max="100"
              optimum="100"
              low="40"
              high="70"
              value={movie.vote_average * 10} />
            <p className="rmdb-score">{movie.vote_average}</p>
          </div>
          { directors.length > 1 ? (
            <h3>DIRECTORS</h3>
          ) : (
            <h3>DIRECTOR</h3>
          ) }{" "}
          { directors.map((element, i) => {
            return (
              <p key={i} className="rmdb-director">
                {element.name}
              </p>
            );
          }) }
        </div>
        <FontAwesome className="fa-film" name="film" size="5x" />
      </div>
    </ConnectionAwareBgDiv>
  );
};

export default MovieInfo;
