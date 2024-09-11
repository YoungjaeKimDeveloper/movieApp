import React, { useState, useEffect } from "react";
import movieCollections from "../../public/movies.json";
import MovieCard from "./MovieCard";
const MoviesGrid = () => {
  const [moives, setMoives] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [searchingMovieTitle, setSearchingMovieTitle] = useState("");

  useEffect(() => {
    setMoives(movieCollections);
    // Keep the original files
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

  // Testing console
  console.log(searchingMovieTitle);
  console.log(filteredMovie);
  return (
    <>
      <input
        type="text"
        placeholder="Search movie..."
        className="search-input"
        onChange={(e) => filterMovie(e.target.value)}
      />
      <div className="movies-grid">
        {filteredMovie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MoviesGrid;
