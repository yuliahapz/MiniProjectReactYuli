import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("access_token");
    navigate("/");
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="./src/assets/logo.jpeg" alt="logo" />
        </a>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "X" : "☰"}
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li><a href="/" onClick={() => handleScrollToSection("home")}>Home</a></li>
        <li><a href="/" onClick={() => handleScrollToSection("about")}>Tentang</a></li>
        <li><a href="/home" onClick={() => handleScrollToSection("user-list")}>User List</a></li>
      </ul>
      <div className="navbar-buttons">
        {isLoggedIn ? (
          <button className="navbar-button" onClick={handleLogout}>Logout</button>
        ) : (
          <a href="/login" className="navbar-button">Login</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
