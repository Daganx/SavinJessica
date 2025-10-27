import "./about.css";
import about from "../../assets/images/about/about.jpg";
import aboutTimeline from "../../assets/images/about/image.png"
import Separator from "../Separator/Separator";

export default function About() {
  return (
    <>
      <section className="about">
        <div className="about-img-container">
          <img src={about} alt="" />
        </div>
        <div className="about-text-container">
          <h1>À Propos de moi</h1>
          <h2>
            Il y a des vocations qui naissent d’un détail. Pour moi, ce fut une
            porte.
            <br />
            <br />
            J’avais 4 ans, c’était la nuit. J’ai attrapé un rouleau de peinture
            — un geste simple, presque instinctif — et la pièce s’est
            transformée, tout semblait différent.
            <br />
            <br /> Puis, une vie professionnelle dans la banque s’est glissée
            entre mes pinceaux et mes plans, y mêlant précision, gestion
            budgétaire et un sérieux à toute épreuve.
            <br />
            <br />
            Mais cette fascination ne m’a jamais quittée, et en 2023, j’ai
            choisi d’entamer une formation pour approfondir mes connaissances en
            design d’espace.
          </h2>
          <img src={aboutTimeline} alt="" />
        </div>
      </section>
      <Separator />
    </>
  );
}
