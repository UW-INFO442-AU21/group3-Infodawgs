import React, { useState } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./Navbar.css";

function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Infodawgs
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-bars" : "fas fa-bars"} />
        </div>
        <div className="nav-option">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/calculator" className="nav-links" onClick={closeMenu}>
                Calculator
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resources" className="nav-links" onClick={closeMenu}>
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutUs" className="nav-links" onClick={closeMenu}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
