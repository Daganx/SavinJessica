import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <img
          src={logo}
          alt="logo Jessica Savin Créatrice d'intérieurs"
          className="navbar-logo-img"
        />
      </Link>

      {/* Icône burger faite à la main */}
      <div className={`navbar-burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Liens */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/approche" onClick={() => setIsOpen(false)}>
              Approche
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Réalisations
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              À propos de moi
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
