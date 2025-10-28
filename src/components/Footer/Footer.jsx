import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/logo/logo.png";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-infos">
        <h1>Jessica Savin - Créatrice d'intérieurs</h1>
        <h2>
          <FontAwesomeIcon icon={faHome} size="1x" color="black" /> - La
          Norville - 91290{" "}
        </h2>
        <h3>
          <FontAwesomeIcon icon={faPhone} size="1x" color="black" /> - 06 11 41
          99 10
        </h3>
        <h4>
          <FontAwesomeIcon icon={faMailBulk} size="1x" color="black" /> -
          jscreatricedinterieurs@gmail.com
        </h4>
        <h5>
          <a href="/conditions/cgv.pdf" target="_blank" rel="noopener noreferrer">
            Conditions générales de vente
          </a>
        </h5>
      </div>
      <div className="footer-logo">
        <img
          src={logo}
          alt="logo Jessica Savin Créatrice d'intérieurs"
          className="footer-logo-img"
        />
      </div>
    </footer>
  );
}
