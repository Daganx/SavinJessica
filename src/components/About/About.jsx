import "./about.css";
import about from "../../assets/images/about/about.jpg";
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
            transformée.
            <br />
            <br />
            La lumière, les émotions, la perception de l’espace… tout semblait
            différent.
            <br />
            <br />
            J’étais fascinée par la façon dont un détail pouvait redonner vie à
            un lieu, créer une émotion.
            <br />
            <br />
            Depuis, une vie pro s’est glissée entre mes pinceaux et mes plans —
            mais cette fascination, ne m’a jamais quittée.
            <br />
            <br /> Aujourd'hui, j’utilise cet enchantement pour donner forme à
            vos envies.
          </h2>
        </div>
      </section>
      <Separator />
    </>
  );
}
