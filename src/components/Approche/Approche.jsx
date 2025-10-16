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
              Chaque projet est unique, parce que chaque manière d’habiter l’est
              aussi.
              <br />
              Qu’il s’agisse d’un simple conseil couleur, d’une rénovation
              complète ou d’un accompagnement déco, j’adapte ma démarche à vos
              besoins et à votre rythme.
              <br />
              <br />✅ Mon objectif : que vous puissiez vous projeter, choisir
              en toute confiance et savourer la transformation, étape après
              étape.
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
                  <span className="bold">🌸 Décoration & ambiance</span> : mise
                  en scène, sélection mobilier, finitions
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
          <h3>
            ✨
            <span className="underline">
              {" "}
              1ère visite ou rendez-vous conseil
            </span>{" "}
            : 120 €/h
          </h3>
          <h3>
            👉 Si le feeling est là et que vous souhaitez passer à l’étape
            suivante,{" "}
            <span className="bold">
              ce montant est déduit de l’étude de projet
            </span>{" "}
            !<br />
            <br /> Et si finalement vous préférez en rester là, cette visite
            reste une
            <span className="bold"> prestation à part entière</span>, riche en
            idées et en conseils pour avancer à votre rythme.
          </h3>
          <br />
          <h3>
            🏗️ <span className="underline">Etude du projet</span> : entre 40 et
            70 euros /m2
          </h3>
          <h3>
            Parce que chaque mètre carré mérite toute notre attention (et un peu
            de style !).
            <br /> On entre dans le concret : plans, ambiances, matériaux,
            agencement… tout ce qu’il faut pour imaginer votre futur espace.
          </h3>
          <h3>
            👉 Et si vous décidez de donner vie à tout ça, la suite logique,
            c’est{" "}
            <span className="bold">
              le suivi et la coordination du chantier
            </span>
            !
          </h3>
          <h3>
            <br/>
            🧱
            <span className="underline">
              Suivi et coordination du chantier
            </span>{" "}
            : entre 8 et 15 % du montant HT des travaux.
            <br />
            <br />
            Je m’occupe de tout, du premier coup de marteau jusqu’à la touche
            finale.
            <br />
            👉 Pour les petits projets (moins de 20 000 € HT), on simplifie avec
            un <span className="bold">forfait</span> tout compris.
          </h3>
          <h3>
            <br />
            🎨 <span className="underline">Prestations ponctuelles</span> :
            Forfait
            <br />
            <br />
            Envie d’un simple conseil déco, d’un coup de main couleur, ou d’un
            bilan éclairage ? Idéal pour un petit coup de boost esthétique sans
            tout chambouler !
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
