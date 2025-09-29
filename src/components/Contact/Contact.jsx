import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
            <FontAwesomeIcon icon={faFacebook} size="3x" color="#FF9058" />
            <FontAwesomeIcon icon={faInstagram} size="3x" color="#FF9058" />
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="#FF9058" />
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
