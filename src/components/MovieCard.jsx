import React, { useState, useEffect } from "react";

const MovieCard = ({ movie, addWatchList, wishPage, isInSelection }) => {
  const handleError = (e) => {
    e.target.src = "../../public/images/default.jpg";
  };
  const [rate, setRate] = useState("rating-ok");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWisthList = (movie) => {
    addWatchList(movie);
    setIsWishlisted((toggle) => !toggle);
  };
  // rating function

  const rating = (rating) => {
    if (rating < 5) {
      setRate("rating-bad");
    } else if (rating >= 5 && rating <= 7) {
      setRate("rating-ok");
    } else if (rating >= 7) {
      setRate("rating-good");
    }
  };
  useEffect(() => {
    rating(movie.rating);
  }, []);

  return (
    <div className="movie-card" key={movie.id}>
      <img
        src={`../../public/images/${movie.image}`}
        onError={handleError}
        alt="movie-card-img"
      />
      <div className="movie-card-info">
        <p className="movie-card-title">{movie.title}</p>
        <p className={`movie-card-rating ${rate}`}>{movie.rating}</p>
        <p className="movie-card-genre">{movie.genre}</p>
        {wishPage ? null : (
          <button onClick={() => handleWisthList(movie)}>
            {isInSelection ? "remove" : "add"}
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
