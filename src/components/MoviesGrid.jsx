import React, { useState, useEffect } from "react";
import movieCollections from "../../public/movies.json";
import MovieCard from "./MovieCard";
const MoviesGrid = ({ addWatchList, watchlist }) => {
  const [moives, setMoives] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [searchingMovieTitle, setSearchingMovieTitle] = useState("");

  const [genre, setGenre] = useState("All genres");
  const [rating, setRating] = useState("All");

  useEffect(() => {
    setMoives(movieCollections);
    setFilteredMovie(movieCollections);
  }, []);

  // Searching Function
  const filterMovie = (title) => {
    if (title.trim() === "") {
      setFilteredMovie(moives);
    } else {
      const targetMovie = filteredMovie.filter((movie) =>
        movie.title.toLowerCase().trim().includes(title.toLowerCase().trim())
      );
      setFilteredMovie(targetMovie);
    }
  };
  // Rating function
  // const handleRating =(rating) =>{

  // }

  // Handle Genre
  const handleGenre = (genreTitle) => {
    setGenre(genreTitle);
    const filteredGenre = moives.filter((movie) => movie.genre === genreTitle);
    setFilteredMovie(filteredGenre);
  };
  // handle Rating
  const handleRating = (rating) => {
    if (rating == "All") {
      setFilteredMovie(movieCollections);
    } else {
      setRating(rating);
      const ratedMovies = moives.filter((movie) => movie.rating >= rating);
      setFilteredMovie(ratedMovies);
    }
  };
  // Testing console
  console.log(searchingMovieTitle);
  console.log(rating);

  return (
    <>
      <input
        type="text"
        placeholder="Search movie..."
        className="search-input"
        onChange={(e) => filterMovie(e.target.value)}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>All Genre</label>
          <select
            className="filter-dropdown"
            onChange={(e) => handleGenre(e.target.value)}
          >
            <option>drama</option>
            <option>fantasy</option>
            <option>horror</option>
            <option>action</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            onChange={(e) => handleRating(e.target.value)}
          >
            <option>All</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovie.map((movie) => {
          const isInSelection = watchlist.some((item) => movie.id == item.id);
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              addWatchList={addWatchList}
              isInSelection={isInSelection}
            />
          );
        })}
      </div>
    </>
  );
};

export default MoviesGrid;
