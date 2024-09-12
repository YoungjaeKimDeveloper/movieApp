import React, { useState } from "react";
import MovieCard from "./MovieCard";

const WatchList = ({ watchlist, isWishListPage }) => {
  const [wishPage, setWishPage] = useState(true);
  return (
    <div className="watchlist">
      <h1 className="title">Your Watchlist</h1>
      {watchlist.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isWishListPage={isWishListPage}
          wishPage={true}
        />
      ))}
    </div>
  );
};

export default WatchList;
