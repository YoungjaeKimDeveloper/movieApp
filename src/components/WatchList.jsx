import React from "react";
import MovieCard from "./MovieCard";

const WatchList = ({ watchlist }) => {
  console.log("WatchList: " + watchlist);
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      {watchlist.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default WatchList;
