import React from "react";

const MovieCard = ({ movie }) => {
  const handleError = (e) => {
    e.target.src = "../../public/images/default.jpg";
  };

  return (
    <div className="movie-card" key={movie.id}>
      <img
        src={`../../public/images/${movie.image}`}
        onError={handleError}
        alt="movie-card-img"
      />
      <div className="movie-card-info">
        <p className="movie-card-title">{movie.title}</p>
        <p className="movie-card-rating">{movie.rating}</p>
        <p className="movie-card-genre">{movie.genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
