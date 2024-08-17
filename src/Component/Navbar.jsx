import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <img src="./src/assets/logo.jpeg" alt="logo" />
        </a>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "X" : "☰"}
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Review</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="navbar-button" onClick={handleLogin}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;