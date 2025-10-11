import { useEffect, useState } from "react";
import presentation from "../../assets/images/presentation/presentation.jpg";
import presentation2 from "../../assets/images/presentation/presentation2.jpg";
import presentation3 from "../../assets/images/presentation/presentation3.jpg";
import presentation4 from "../../assets/images/presentation/presentation4.jpg";

import "./presentation.css";

export default function Presentation() {
  const images = [presentation, presentation2, presentation3, presentation4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // ⏱️ Change d'image toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="presentation">
      <div className="presentation-text">
        <h2>À Propos</h2>
        <h3>
          Il y a des vocations qui naissent d’un détail. Pour moi, ce fut une
          porte.<br /><br />
          J’avais 4 ans, c’était la nuit. J’ai attrapé un rouleau de peinture —
          un geste simple, presque instinctif — et la pièce s’est transformée.
          <br /><br />
          La lumière, les émotions, la perception de l’espace… tout semblait
          différent.<br /><br />
          J’étais fascinée par la façon dont un détail pouvait redonner vie à un
          lieu, créer une émotion. Depuis, une vie pro s’est glissée entre mes
          pinceaux et mes plans — mais cette fascination ne m’a jamais quittée.
          <br /><br />
          Aujourd'hui, j’utilise cet enchantement pour donner forme à vos envies.
        </h3>
      </div>

      <div className="presentation-img">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Présentation Jessica Savin Décoratrice d'intérieurs ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
    </section>
  );
}
