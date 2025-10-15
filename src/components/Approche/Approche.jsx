import "./approche.css";
import Separator from "../Separator/Separator";
import { Link } from "react-router-dom";

import approche2 from "../../assets/images/approche/approche2.jpg";
import approche3 from "../../assets/images/approche/approche3.jpg";

export default function Approche() {
  return (
    <>
      <section>
        <div className="prestations">
          <div className="prestations-img">
            <img src={approche2} alt="Jessica Savin Créatrice d'intérieurs" />
          </div>
          <div className="prestations-info">
            <h2>Mes prestations :</h2>
            <h3>
              Chaque projet est unique, parce que chaque manière d’habiter l’est
              aussi.
              <br />
              Qu’il s’agisse d’un simple conseil couleur, d’une rénovation
              complète ou d’un accompagnement déco, j’adapte ma démarche à vos
              besoins et à votre rythme.
              <br />
              <br />✅ Mon objectif : que vous puissiez vous projeter, choisir en
              toute confiance et savourer la transformation, étape après étape.
              <br />
              <br />
              🤝 Du premier échange à la touche finale, je veille à créer un
              dialogue fluide et bienveillant, où votre espace devient le reflet
              harmonieux de votre quotidien.
            </h3>
            <div className="prestations-details">
              <ul>
                <li>
                  <span className="bold">🧭 Conseil & accompagnement</span> :
                  études de plans, choix couleurs, matériaux
                </li>
                <li>
                  <span className="bold">🧩 Projet complet</span> : conception,
                  suivi, coordination
                </li>
                <li>
                  <span className="bold">🌸 Décoration & ambiance</span> : mise en
                  scène, sélection mobilier, finitions
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
            <h2>Ma manière de travailler :</h2>
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
          <h2>Tarifications :</h2>
          <h3>
            1ère visite ou rendez-vous conseil :{" "}
            <span className="bold">120 € /h</span> (déduit sur la prestation
            étude de projet)
          </h3>
          <h3>
            Etude du projet : entre <span className="bold">40</span> et{" "}
            <span className="bold">70</span> euros /m2
          </h3>
          <h3>
            Suivi et coordination du chantier : entre{" "}
            <span className="bold">8</span> et <span className="bold">15%</span>{" "}
            du montant HT des travaux.
            <br />
            moins de <span className="bold">20 000€</span> HT = Forfait.
          </h3>
          <h3>
            Prestations ponctuelles (ex conseil déco, couleur, bilan éclairage)
            : forfait.{" "}
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
