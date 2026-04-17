import "./approche.css";
import { Link } from "react-router-dom";
import approche from "../../assets/images/presentation/presentation3.jpg";
import approche3 from "../../assets/images/approche/approche3.jpg";

export default function Approche() {
  const prestations = [
    {
      label: "Écoute",
      value: "Transformer vos projets en espaces uniques",
    },
    {
      label: "Sens du détail",
      value: "Chaque espace raconte votre histoire",
    },
    {
      label: "Créativité",
      value: "Donner vie à vos idées les plus audacieuses",
    },
  ];

  const etapes = [
    {
      step: "01",
      title: "Rencontre",
      description:
        "Comprendre vos besoins, envies et contraintes. On cadre le projet ensemble.",
    },
    {
      step: "02",
      title: "Conception",
      description:
        "Brainstorming, maquettes et concepts. C'est le moment où la magie opère.",
    },
    {
      step: "03",
      title: "Suivi",
      description: "On teste, on ajuste, on valide. À chaque étape.",
    },
    {
      step: "04",
      title: "Livraison",
      description: "Le grand jour. Et le jour des waouhhhhhs.",
    },
  ];

  return (
    <div className="approche">
      {/* Section Prestations */}
      <section className="prestations">
        <div className="prestations-image">
          <img src={approche} alt="Jessica Savin Créatrice d'intérieurs" />
        </div>
        <div className="prestations-content">
          <h2>Mes prestations</h2>
          <p className="prestations-intro">
            Mon objectif : que vous puissiez vous projeter, choisir en toute
            confiance et savourer la transformation, étape après étape.
          </p>
          <div className="prestations-grid">
            {prestations.map((item, i) => (
              <div className="prestations-cell" key={i}>
                <span className="cell-label">{item.label}</span>
                <span className="cell-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Ma manière de travailler */}
      <section className="timeline-section">
        <h2>Ma manière de travailler</h2>
        <div className="timeline">
          <div className="timeline-image">
            <img src={approche3} alt="Jessica Savin Créatrice d'intérieurs" />
          </div>
          <div className="timeline-steps">
            {etapes.map((etape, i) => (
              <div className="step-cell" key={i}>
                <span className="step-number">{etape.step}</span>
                <div className="step-content">
                  <span className="step-title">{etape.title}</span>
                  <p className="step-description">{etape.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="tarification">
        <h2>Tarifs & Prestations</h2>
        <div className="tarification-grid">
          <div className="tarif-cell">
            <p className="tarif-text">
              Une complice stylée qui travaille en coulisses pour sublimer votre
              intérieur ou votre espace professionnel.
            </p>
          </div>
          <div className="tarif-cell">
            <p className="tarif-text">
              Quelqu'un qui gère votre budget comme un pro, en dénichant les
              meilleures opportunités.
            </p>
          </div>
          <div className="tarif-cell">
            <p className="tarif-text">
              Cette petite dose d'audace qui fait toute la différence : des idées
              inattendues, des détails qui claquent.
            </p>
          </div>
          <div className="tarif-cell">
            <p className="tarif-text">
              Quelqu'un qui orchestre les artisans pour que tout roule
              parfaitement. Quelqu’un qui prend cette vision un peu floue que vous avez dans la tête et vous aide à la concrétiser.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section">
        <p className="cta-text">Chaque projet commence par une rencontre</p>
        <Link
          to="/contact"
          className="cta-link"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Contactez-moi
        </Link>
      </section>
    </div>
  );
}
