import hero from "../../assets/images/hero/hero.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import "./hero.css";

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
          href="https://www.instagram.com/jessicasavin.interieurs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" color="#FF9058" />
        </a>
        <a
          href="https://www.facebook.com/people/Jessica-Savin-Cr%C3%A9atrice-dInt%C3%A9rieurs/61571773738824/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" color="#FF9058" />
        </a>
      </div>
    </div>
  );
}
