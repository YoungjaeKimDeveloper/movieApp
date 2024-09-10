import React, { useState, useEffect } from "react";
import movieCollections from "../../public/movies.json";
import MovieCard from "./MovieCard";
const MoviesGrid = () => {
  const [moives, setMoives] = useState([]);

  useEffect(() => {
    setMoives(movieCollections);
  }, []);

  return (
    <div className="movies-grid">
      {moives.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;
