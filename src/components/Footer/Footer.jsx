import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import logo from "../../assets/images/logo/logo.png";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-infos">
        <span>JESSICA SAVIN - Créatrice d'intérieurs</span>
        <h2>
          La Norville - 91290{" "}
        </h2>
        <h3>
          06 11 41 99 10
        </h3>
        <h4>
          jscreatricedinterieurs@gmail.com
        </h4>
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/jessicasavin.interieurs/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/people/Jessica-Savin-Cr%C3%A9atrice-dInt%C3%A9rieurs/61571773738824/#"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
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
