import { useState } from "react";
import logo from "./assets/logo-text.png";
import "./Navbar.css";
import menu from "./assets/hamburger.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src={menu} alt="Menu" />
      </button>


      <div className="navbar-left">
        <img src={logo} alt="Dev Stack logo" />
      </div>


      <div className={`navbar-center ${menuOpen ? "mobile-open" : ""}`}>

        <a href="#" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#technologies" onClick={() => setMenuOpen(false)}>
          Technologies
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

      </div>


      <div className="navbar-right">

        <button className="sign-in">
          Sign In
        </button>

        <button className="sign-up">
          Sign Up
        </button>

      </div>

    </nav>
  );
}

export default Navbar;