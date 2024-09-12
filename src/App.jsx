import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import "./App.css";
import "./styles.css";
//pages
import Main from "./pages/Main";
import WatchList from "./components/WatchList";

const App = () => {
  const [watchlist, setWatchlist] = useState([]);
  const addWatchList = (movie) => {
    const isContain = watchlist.some((listedMovie) => listedMovie == movie);
    if (isContain) {
      // Create Logic
      const filteredList = watchlist.filter(
        (listedMovie) => listedMovie !== movie
      );
      setWatchlist(filteredList);
    } else {
      setWatchlist((prev) => [...prev, movie]);
    }
  };

  console.log("Watch List" + watchlist);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Main addWatchList={addWatchList} />} />
          <Route
            path="/watchlist"
            element={<WatchList watchlist={watchlist} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
