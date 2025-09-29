import hero from "../../assets/images/hero/hero.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
        <FontAwesomeIcon icon={faFacebook} size="3x" color="#FF9058" />
        <FontAwesomeIcon icon={faInstagram} size="3x" color="#FF9058" />
        <FontAwesomeIcon icon={faLinkedin} size="3x" color="#FF9058" />
      </div>
    </div>
  );
}
