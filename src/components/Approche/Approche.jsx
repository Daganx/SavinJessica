import "./approche.css";
import Separator from "../Separator/Separator";
import { Link } from "react-router-dom";
import approche from "../../assets/images/presentation/presentation3.jpg";
import approche3 from "../../assets/images/approche/approche3.jpg";

export default function Approche() {
  return (
    <>
      <section>
        <div className="prestations">
          <div className="prestations-img">
            <img src={approche} alt="Jessica Savin Créatrice d'intérieurs" />
          </div>
          <div className="prestations-info">
            <h2>Mes prestations</h2>
            <h3>
              <br />✅ Mon objectif : que vous puissiez vous projeter, choisir
              en toute confiance et savourer la transformation, étape après
              étape.
              <br />
              <br />⭐ Mes compétences :
            </h3>
            <div className="prestations-details">
              <ul>
                <li>
                  <span className="bold">L’écoute : </span>Transformer vos
                  projets en <span className="bold">espaces uniques</span>
                </li>
                <li>
                  <span className="bold">Le sens du détail : </span>Chaque
                  espace raconte <span className="bold">votre histoire</span>
                </li>
                <li>
                  <span className="bold">Créativité :</span> Donner vie à vos{" "}
                  <span className="bold">idées</span> les plus{" "}
                  <span className="bold">audacieuses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div className="timeline">
          <div className="prestations-img">
            <img src={approche3} alt="Jessica Savin Créatrice d'intérieurs" />
          </div>
          <div className="timeline-info">
            <h2>Ma manière de travailler</h2>
            <h3>
              1. <span className="bold">Rencontre</span> : Je me mets à ta place
              (sans piquer ta chaise 🪑) pour comprendre tes besoins, tes
              envies.
              <br />
              On cadre le projet : objectifs, contraintes et livrables. Histoire
              d’éviter le redoutable 'Ah, mais je croyais que…' 😅
            </h3>
            <h3>
              2. <span className="bold">Conception</span> : Brainstorming
              intensif ! On sort les idées les plus folles (et les meilleures
              survivent 💡)
              <br />
              On donne forme : maquettes, concepts, visuels. C’est le moment où
              la magie opère ✨.
            </h3>
            <h3>
              3. <span className="bold">Suivi</span> : On teste, on ajuste, on
              valide 📏📐!
            </h3>
            <h3>
              4. <span className="bold">Livraison</span> : C’est le grand jour !
              et le jour des waouhhhhhhhhhhs.
            </h3>
          </div>
        </div>

        <Separator />

        <div className="tarification">
          <h2>💡 Tarifs & Prestations</h2>
          <h3>Parce que vous méritez bien :</h3>
          <h3>👉🏻 Une complice stylée qui travaille en douce pour sublimer votre chez-vous, votre business🎨</h3>
          <h3>
            👉🏻 Quelqu’un qui gère votre budget comme un pro pour en tirer un maximum, tout en dénichant des bons plans, des matériaux et des contacts que vous n’auriez probablement jamais croisés seul. 🧭</h3>
          <h3>
            👉🏻 Cette petite dose d’audace qui fait toute la différence : des idées inattendues, des détails qui claquent, une harmonie qui transforme un simple intérieur en véritable coup de cœur. ✨
          </h3>
          <h3>
            👉🏻 Quelqu’un qui orchestre en coulisses les différents artisans pour éviter le chaos et faire en sorte que tout roule parfaitement.
          </h3>
          <h3>👉🏻 Quelqu’un qui prend cette vision un peu floue que vous avez dans la tête 😶‍🌫️ et vous aide à la concrétiser.
          </h3>
        </div>

        <div className="link-to-contact">
          <h3>Chaque projet commence par une rencontre !</h3>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Contactez-moi
          </Link>
        </div>

        <Separator />
      </section>
    </>
  );
}
