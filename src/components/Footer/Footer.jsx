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
        <a
          href="https://entreprendre.service-public.gouv.fr/vosdroits/F33527#:~:text=Les%20conditions%20g%C3%A9n%C3%A9rales%20de%20vente%20(CGV)%20contiennent%20un%20certain%20nombre,ou%20de%20prestations%20de%20services.&text=Attention-,Il%20ne%20faut%20pas%20confondre%20les%20CGV%20avec%20les,d'utilisations%20(CGU)."
          target="_blank"
          rel="noopener noreferrer"
        >
        <h5>Conditions Générales de Vente</h5>
        </a>
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
