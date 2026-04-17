import hero from "../../assets/images/hero/hero.jpg";

import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <img
        src={hero}
        alt="Photo de Jessica Savin décoratrice d'intérieurs"
        className="hero-img"
      />
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h1>Jessica Savin</h1>
        <p className="hero-subtitle">CRÉATRICE D'INTÉRIEURS</p>
      </div>
    </div>
  );
}
