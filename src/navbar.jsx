import logo from "./assets/logo-text.png";
import "./Navbar.css";
import menu from "./assets/hamburger.png";

function Navbar() {
  return (
          <nav className="navbar">
              <button className="menu-button">
          <img src={menu} alt="Menu" />
        </button>
      <div className="navbar-left">
        <img src={logo} alt="Dev Stack logo" />
   
      </div>

      <div className="navbar-center">
        <a href="#">Home</a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="navbar-right">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;