import React, { useState, useEffect } from "react";

import "./Home.css";
import {
  API_URL,
  API_KEY
} from "../../config";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import Spinner from "../elements/Spinner/Spinner";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [heroImage, setHeroImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchItems(endpoint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchItems = searchTerm => {
    console.log('[Home searchItems] searchTerm => ', searchTerm);
    let endpoint = "";
    setMovies([]);
    setLoading(true);
    setSearchTerm(searchTerm);

    if (searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    fetchItems(endpoint, true);
  };

  const loadMoreItems = () => {
    let endpoint = "";
    setLoading(true);

    if (searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query${searchTerm}$page=${currentPage + 1}`;
    }
    fetchItems(endpoint);
  };

  const fetchItems = (endpoint, isSearch) => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        isSearch ? setMovies([...result.results]) : setMovies([...movies, ...result.results]);
        setHeroImage(heroImage || result.results[0]);
        setLoading(false);
        setCurrentPage(result.page);
        setTotalPages(result.total_pages);
      });
  };

  return (
    <div className="rmdb-home">
      { heroImage && (
        <div>
          <HeroImage
            backdropPath={heroImage.backdrop_path}
            title={heroImage.original_title}
            text={heroImage.overview} />
          <SearchBar callback={searchItems} />
        </div>
      ) }
      <div className="rmdb-home-grid">
        <FourColGrid
          header={searchTerm ? "Search Result" : "Popular Movies"}
          loading={loading}>
          {movies.map((element, i) => {
            return (
              <MovieThumb
                key={i}
                clickable={true}
                image={element.poster_path}
                movieId={element.id}
                movieName={element.original_title} />
            );
          })}
        </FourColGrid>
        { loading && <Spinner /> }
        { currentPage <= totalPages && !loading && (
          <LoadMoreBtn text="Load More" onClick={loadMoreItems} />
        ) }
      </div>
    </div>
  );
};

export default Home;
