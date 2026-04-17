import { useState } from "react";
import "./contact.css";
import contactPhoto from "../../assets/images/contact/contact.jpg";
import zone from "../../assets/images/contact/zone.png";
import ContactForm from "../ContactForm/ContactForm";
import Separator from "../Separator/Separator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="contact-page">

      {/* ── Bloc principal : photo + texte/formulaire ── */}
      <section className="contact">

        {/* Colonne gauche : photo plein cadre */}
        <div className="contact-img">
          <img
            src={contactPhoto}
            alt="Jessica Savin, décoratrice d'intérieurs"
          />
        </div>

        {/* Colonne droite : texte + formulaire */}
        <div className="contact-content">

          {/* En-tête */}
          <div className="contact-header">
            <h1>Et si on en parlait ?</h1>
            <button
              className="zone-button"
              onClick={() => setIsModalOpen(true)}
            >
              <FontAwesomeIcon icon={faLocationDot} />
              Voir ma zone d'activité
            </button>
          </div>

          {/* Texte d'introduction */}
          <div className="contact-intro">
            <p>
              Un projet commence souvent par une intuition. Une envie de
              changement, une couleur, une sensation.
            </p>
            <p>
              Prenons le temps d'en parler. Autour d'un café, d'un plan ou
              d'une simple idée, je serai là pour écouter, imaginer et vous
              guider dans cette belle aventure.
            </p>
            <p>Chaque rencontre est le début d'un nouvel espace à révéler.</p>
          </div>

          {/* Formulaire */}
          <div className="contact-form">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* ── Modale zone d'activité ── */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Fermer"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img
              src={zone}
              alt="Zone d'activité de Jessica Savin"
              className="zone-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}