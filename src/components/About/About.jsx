import "./about.css";
import about from "../../assets/images/about/about.jpg";
import aboutTimeline from "../../assets/images/about/image.png";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      <section className="about">
        {/* Colonne gauche : photo plein cadre */}
        <div className="about-img">
          <img src={about} alt="Jessica Savin" />
        </div>

        {/* Colonne droite : contenu */}
        <div className="about-content">
          {/* En-tête */}
          <div className="about-header">
            <h1>À propos de moi</h1>
            <Link to="/contact" className="about-contact-link">
              Me contacter
            </Link>
          </div>

          {/* Texte */}
          <div className="about-text">
            <p>
              Il y a des vocations qui naissent d'un détail. Pour moi, ce fut
              une porte.
            </p>
            <p>
              J'avais 4 ans, c'était la nuit. J'ai attrapé un rouleau de
              peinture — un geste simple, presque instinctif — et la pièce s'est
              transformée, tout semblait différent.
            </p>
            <p>
              Puis, une vie professionnelle dans la banque s'est glissée entre mes
              pinceaux et mes plans, y mêlant précision, gestion budgétaire et un
              sérieux à toute épreuve.
            </p>
            <p>
              Mais cette fascination ne m'a jamais quittée, et en 2023, j'ai
              choisi d'entamer une formation pour approfondir mes connaissances
              en design d'espace.
            </p>
          </div>

          {/* Timeline */}
          <div className="about-timeline">
            <img src={aboutTimeline} alt="Parcours de Jessica Savin" />
          </div>
        </div>
      </section>
    </div>
  );
}
