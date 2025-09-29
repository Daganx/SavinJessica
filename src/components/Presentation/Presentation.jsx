import presentation from "../../assets/images/presentation/presentation.jpg";

import "./presentation.css";

export default function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation-text">
        <h2>Présentation</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          nostrum consequatur inventore natus possimus. Officiis, itaque ea?
          Magnam unde expedita accusantium ratione necessitatibus soluta in
          sapiente eum, numquam, eligendi quibusdam. Qui atque quia fugiat omnis
          in, quod amet nihil? Quaerat corrupti id nam in nulla dolorem fugiat
          voluptatum accusamus ducimus rerum, autem incidunt magni quas, nemo
          eaque. Unde, repellendus dolores? Labore, repudiandae libero.
        </h3>
      </div>
      <div className="presentation-img">
        <img src={presentation} alt="Image de présentation Jessica Savin" />
      </div>
    </section>
  );
}
