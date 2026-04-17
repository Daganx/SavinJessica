import "./presentation.css";

export default function Presentation() {
  const stats = [
    {
      value: "Avant les plans, il y a l’écoute.",
      decoration: "null",

    },
    {
      label: "Une écoute attentive, presque silencieuse, celle qui permet de saisir l’essence d’un lieu et de ceux qui l’habitent. Chaque projet commence par une rencontre, un échange, une conversation. Vos envies, vos besoins, vos habitudes de vie deviennent les premières esquisses d’une histoire à écrire ensemble.",
      decoration: null,
    },
    {
      label: "L’architecture d’intérieur, pour moi, est une quête d’équilibre — un dialogue subtil entre l’émotion et la fonctionnalité, entre la beauté du geste et la justesse du quotidien.C’est l’art de révéler ce qui existe déjà, parfois caché, parfois en attente, pour que chaque espace devienne une évidence.",
      decoration: null,
    },
    {
      label: "Puis vient le temps de la création, celui où l’intuition devient forme, où la lumière et les matières donnent vie à l’espace. Je prends le temps de comprendre ce qui compte pour vous, ce qui vous relie à votre espace : les petits rituels, les zones de calme, les instants partagés.",
      value: "",
      decoration: null,
    },
  ];

  return (
    <section className="stats">
      {stats.map((stat, i) => (
        <div className="stats-cell" key={i}>
          {stat.decoration === "line" && (
            <div className="stats-line-wrapper" aria-hidden="true">
              <svg className="stats-diagonal" viewBox="0 0 300 200" preserveAspectRatio="none">
                <line x1="0" y1="200" x2="300" y2="0" stroke="currentColor" strokeWidth="0.8" />
              </svg>
            </div>
          )}
          <p className="stats-label">{stat.label}</p>
          <span className="stats-value">{stat.value}</span>
        </div>
      ))}
    </section>
  );
}
