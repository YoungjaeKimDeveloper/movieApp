import React, { useState, useEffect } from "react";
import movieCollections from "../../public/movies.json";
const MoviesGrid = () => {
  const [moives, setMoives] = useState([]);

  useEffect(() => {
    setMoives(movieCollections);
  }, []);

  return (
    <div className="movies-grid">
      {moives.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img
            src={`../../public/images/${movie.image}`}
            alt="movie-card-img"
          />
          <div className="movie-card-info">
            <p className="movie-card-title">{movie.title}</p>
            <p className="movie-card-rating">{movie.rating}</p>
            <p className="movie-card-genre">{movie.genre}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesGrid;
