import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/logo/logo.png";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-infos">
        <h1>Jessica Savin - Créatrice d'intérieurs</h1>
        <h2>
          <FontAwesomeIcon icon={faHome} size="1x" color="black" /> - Rue - Code
          Postal{" "}
        </h2>
        <h3>
          <FontAwesomeIcon icon={faPhone} size="1x" color="black" /> - N°.
          Télephone
        </h3>
        <h4>
          <FontAwesomeIcon icon={faMailBulk} size="1x" color="black" /> -
          Adresse E-Mail
        </h4>
        <h5>Conditions Générales de Vente</h5>
      </div>
      <div className="footer-logo">
        <img
          src={logo}
          alt="logo Jessica Savin Créatrice d'intérieurs"
          className="footer-logo-img"
        />
      </div>
    </div>
  );
}
