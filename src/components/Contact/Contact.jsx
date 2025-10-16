import { useState } from "react";
import "./contact.css";
import contactPhoto from "../../assets/images/contact/contact.jpg";
import zone from "../../assets/images/contact/zone.png";
import ContactForm from "../ContactForm/ContactForm";
import Separator from "../Separator/Separator";

// Import des icônes Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <section className="contact">
        <div className="contact-img">
          <img
            src={contactPhoto}
            alt="Photo de Contact Jessica Savin Décoratrice d'intérieurs"
          />
        </div>

        <div className="contact-form">
          <h1>Et si on en parlait ?</h1>
          {/* Bouton avec icône Font Awesome */}
          <button className="zone-button" onClick={() => setIsModalOpen(true)}>
            <FontAwesomeIcon icon={faLocationDot} size="lg" />
            Voir ma zone d’activité
          </button>
          <h2>
            Un projet commence souvent par une intuition. Une envie de
            changement, une couleur, une sensation.
            <br />
            <br />
            Prenons le temps d’en parler. Autour d’un café, d’un plan ou d’une
            simple idée, je serai là pour écouter, imaginer et vous guider dans
            cette belle aventure.
            <br />
            <br />
            Chaque rencontre est le début d’un nouvel espace à révéler.
          </h2>

          <ContactForm />
        </div>
      </section>

      {/* --- MODALE --- */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Fermer la modale"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>

            <img
              src={zone}
              alt="Zone d’activité de Jessica Savin"
              className="zone-img"
            />
          </div>
        </div>
      )}

      <Separator />
    </div>
  );
}
