import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import logo from "../img/Ai_logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img id="logo" src={logo} />
        </Link>

        <ul>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/" className="link">
            About
          </Link>
          <Link to="/" className="link">
            Contact
          </Link>
          <Link to="/" className="link featured">
            Portfolio
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
