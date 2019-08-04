
import React, { useState, useEffect } from "react";

import { API_URL, API_KEY } from "../../config";
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import Actor from "../elements/Actor/Actor";
import Spinner from "../elements/Spinner/Spinner";
import "./Movie.css";

const Movie = ({ match, location }) => {
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState(null);
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieData = endpoint => {
      fetch(endpoint)
        .then(result => result.json())
        .then(result => {
          if (result.status_code) {
            setLoading(false);
          } else {
            setMovie(result);
          }
        })
        .catch(error => console.error("Error: ", error));
    };
    const movieId = match.params.movieId;
    if (localStorage.getItem(`${movieId}`)) {
      const state = JSON.parse(
        localStorage.getItem(`${movieId}`)
      );
      const { movie, actors, directors, loading } = state;
      setMovie(movie);
      setActors(actors);
      setDirectors(directors);
      setLoading(loading);
    } else {
      setLoading(true);
      //first fetch the movie data and then actors
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      fetchMovieData(endpoint);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { movieId } = match.params;
    if(!checkInLocalStorage(movieId)) {
      const endpoint_credit = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
      fetch(endpoint_credit)
        .then(result => result.json())
        .then(result => {
          const directors = result.crew.filter(
            member => member.job === "Director"
          );
          setActors(result.cast);
          setDirectors(directors);
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie]);

  useEffect(() => {
    const { movieId } = match.params;
    if(!checkInLocalStorage()) {
      localStorage.setItem(
        `${movieId}`,
        JSON.stringify({movie, actors, directors, loading})
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actors, directors]);

  const checkInLocalStorage = movieId => {
    const movieInLocalStorage = localStorage.getItem(`${movieId}`);
    return movieInLocalStorage ? true : false; 
  };

  return (
    <div>
      { movie && (
        <div>
          <Navigation movie={location.movieName} />
          <MovieInfo
            movie={movie}
            directors={directors} />
          <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue} />
        </div>
      ) }

      { actors && (
        <div className="rmdb-moviegrid">
          <FourColGrid header={"Actors"}>
            {actors.map((element, i) => {
              return <Actor key={i} actor={element} />;
            })}
          </FourColGrid>
        </div>
      ) }

      { !actors && !loading && (
        <h1>No Movie Found!</h1>
      ) }
      { loading && <Spinner /> }
    </div>
  );
}

export default Movie;
