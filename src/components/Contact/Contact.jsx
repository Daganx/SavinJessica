import "./contact.css";
import contactPhoto from "../../assets/images/contact/contact.jpg";
// import localisationPhoto from "../../assets/images/contact/localisation.png";
import ContactForm from "../ContactForm/ContactForm";
import Separator from "../Separator/Separator";

export default function Contact() {
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
      <Separator />
    </div>
  );
}
