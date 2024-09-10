import React from "react";
import Header from "./components/Header";
import "./App.css";
import "./styles.css";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MoviesGrid />
      </div>
      <Footer />
    </div>
  );
};

export default App;
