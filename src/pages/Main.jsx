import React from "react";
import Header from "../components/Header";
import MoviesGrid from "../components/MoviesGrid";
import Footer from "../components/Footer";
const Main = ({ addWatchList }) => {
  return (
    <div>
      <div className="container">
        <Header />
        <MoviesGrid addWatchList={addWatchList} />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
