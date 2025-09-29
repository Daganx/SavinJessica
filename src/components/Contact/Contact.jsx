import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./contact.css";
import ContactForm from "../ContactForm/ContactForm";
import Separator from "../Separator/Separator";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact-text">
          <h1>Contactez-moi :</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            harum, adipisci, at nemo pariatur odio recusandae exercitationem
            dolores autem sed laborum! Quaerat, reiciendis. Voluptatem ad
            provident aut hic animi est. Fuga at eveniet voluptas quibusdam aut
            doloribus nulla dolorem praesentium ex ea culpa placeat odio facilis
            nesciunt, corrupti cumque. Dolores natus, aspernatur ducimus quam id
            sunt odio fugit similique mollitia.
          </h2>
          <div className="contact-socials">
            <a
              href="https://www.instagram.com/ton_profil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" color="#FF9058" />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </section>
      <Separator />
    </>
  );
}
