import hero from "../../assets/images/hero/hero.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <img
        src={hero}
        alt="Photo de Jessica Savin décoratrice d'intérieurs"
        className="hero-img"
      />
      <div className="hero-text">
        <h1>Jessica Savin - Créatrice d'intérieurs</h1>
        <a
          href="https://www.instagram.com/jscreatricedinterieurs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" color="#FF9058" />
        </a>
      </div>
    </div>
  );
}
