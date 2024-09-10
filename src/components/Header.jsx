import React from "react";
import "../styles.css";
import logo from "../../public/logo.png";
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="movieDux" />
      <h2 className="app-subtitle">
        It's time for popcorn! Find your next movie here.
      </h2>
    </header>
  );
};

export default Header;
