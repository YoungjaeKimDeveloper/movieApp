import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import "./App.css";
import "./styles.css";
//pages
import Main from "./pages/Main";
import WatchList from "./components/WatchList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Main />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
