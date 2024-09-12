import React from "react";
import Header from "../components/Header";
import MoviesGrid from "../components/MoviesGrid";
import Footer from "../components/Footer";
const Main = ({ addWatchList, watchlist }) => {
  return (
    <div>
      <div className="container">
        <Header />
        <MoviesGrid addWatchList={addWatchList} watchlist={watchlist} />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
