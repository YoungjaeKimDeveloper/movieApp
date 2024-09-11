import React, { useState, useEffect } from "react";
import movieCollections from "../../public/movies.json";
import MovieCard from "./MovieCard";
const MoviesGrid = () => {
  const [moives, setMoives] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [searchingMovieTitle, setSearchingMovieTitle] = useState("");

  const [genre, setGenre] = useState("All genres");
  const [rating, setRating] = useState("All");

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
      <div className="filter-bar">
        <div className="filter-slot">
          <label>All Genre</label>
          <select className="filter-dropdown">
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Action</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select className="filter-dropdown">
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MoviesGrid;
