import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-logo">
          <img
            src={logo}
            alt="logo Jessica Savin Créatrice d'intérieurs"
            className="navbar-logo-img"
          />
        </div>
      </Link>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/projects">Réalisations</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
